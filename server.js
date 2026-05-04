const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'leaderboard.json');
const PORT = process.env.PORT || 52345;

// Hàm đọc file và gửi cho trình duyệt
function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Lỗi máy chủ: Không thể tải file.');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Xử lý CORS
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  // 1. GIAO DIỆN CHÍNH (index.html)
  if (url === '/' || url === '/index.html') {
    return serveFile(res, path.join(__dirname, 'index.html'), 'text/html');
  }

  // 2. FILE CSS
  if (url === '/style.css') {
    return serveFile(res, path.join(__dirname, 'style.css'), 'text/css');
  }

  // 3. FILE JAVASCRIPT
  if (url === '/script.js') {
    return serveFile(res, path.join(__dirname, 'script.js'), 'text/javascript');
  }

  // 4. API BẢNG XẾP HẠNG (Giữ nguyên logic cũ của bạn)
  if (url === '/leaderboard' && method === 'GET') {
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(data);
    } catch (e) {
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify([]));
    }
  }

  if (url === '/leaderboard' && method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        let list = [];
        try { list = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch(e) {}
        list.push({
          name: String(data.name).trim(),
          point: data.point,
          time: data.time || new Date().toLocaleDateString('vi-VN'),
        });
        list.sort((a, b) => b.point - a.point);
        const result = list.slice(0, 10);
        fs.writeFileSync(DATA_FILE, JSON.stringify(result, null, 2));
        res.writeHead(201, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify(result));
      } catch (e) {
        res.writeHead(400);
        res.end();
      }
    });
    return;
  }

  // 404 nếu không tìm thấy
  res.writeHead(404);
  res.end('Không tìm thấy trang.');
});

server.listen(PORT, () => {
  console.log(`Server đang chạy tại port ${PORT}`);
});