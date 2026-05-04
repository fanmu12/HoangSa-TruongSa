$prefix = 'http://localhost:52345/'
$path = Join-Path $PSScriptRoot 'leaderboard.json'

if (-not (Test-Path $path)) {
    '[]' | Out-File -FilePath $path -Encoding utf8
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Leaderboard backend đang chạy tại $prefix"

while ($true) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $response.AddHeader('Access-Control-Allow-Origin', '*')
    $response.AddHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    $response.AddHeader('Access-Control-Allow-Headers', 'Content-Type')

    if ($request.HttpMethod -eq 'OPTIONS') {
        $response.StatusCode = 204
        $response.Close()
        continue
    }

    if ($request.Url.AbsolutePath -eq '/leaderboard' -and $request.HttpMethod -eq 'GET') {
        $content = Get-Content -Raw -Path $path
        $data = $content | ConvertFrom-Json
        if (-not ($data -is [System.Array])) { $data = @($data) }
        $json = $data | ConvertTo-Json -Depth 5
        $response.ContentType = 'application/json'
        $buffer = [System.Text.Encoding]::UTF8.GetBytes($json)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
        $response.Close()
        continue
    }

    if ($request.Url.AbsolutePath -eq '/leaderboard' -and $request.HttpMethod -eq 'POST') {
        try {
            $raw = ''
            $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
            $raw = $reader.ReadToEnd()
            $reader.Close()
            $data = $raw | ConvertFrom-Json
            if (-not $data.name -or -not ($data.point -is [int] -or $data.point -is [double])) {
                throw 'Yêu cầu phải chứa name và point.'
            }
            $list = Get-Content -Raw -Path $path | ConvertFrom-Json
            if (-not ($list -is [System.Array])) { $list = @($list) }
            if (-not $list) { $list = @() }
            $entry = [PSCustomObject]@{
                name = $data.name
                point = [int]$data.point
                time = if ($data.time) { $data.time } else { (Get-Date).ToString('dd/MM/yyyy') }
            }
            $list += $entry
            $sorted = $list | Sort-Object -Property point -Descending | Select-Object -First 10
            $sorted | ConvertTo-Json -Depth 5 | Out-File -FilePath $path -Encoding utf8
            $result = $sorted | ConvertTo-Json -Depth 5
            $response.ContentType = 'application/json'
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($result)
            $response.ContentLength64 = $buffer.Length
            $response.StatusCode = 201
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.Close()
            continue
        } catch {
            $response.ContentType = 'application/json'
            $response.StatusCode = 400
            $errorPayload = @{ error = 'Dữ liệu gửi lên không hợp lệ.' } | ConvertTo-Json
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($errorPayload)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.Close()
            continue
        }
    }

    $response.StatusCode = 404
    $payload = @{ error = 'Không tìm thấy route.' } | ConvertTo-Json
    $response.ContentType = 'application/json'
    $buffer = [System.Text.Encoding]::UTF8.GetBytes($payload)
    $response.ContentLength64 = $buffer.Length
    $response.OutputStream.Write($buffer, 0, $buffer.Length)
    $response.Close()
}
