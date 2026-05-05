const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'leaderboard.json');
const PORT = process.env.PORT || 52345;
const MAX_NAME_LENGTH = 40;
const MAX_BODY_SIZE = 10 * 1024;

function baseHeaders(contentType = 'application/json') {
  return {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'X-Content-Type-Options': 'nosniff',
  };
}

function cleanJsonText(value) {
  return String(value || '').replace(/^\uFEFF/, '').trim();
}

function readLeaderboardList() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(cleanJsonText(raw) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeLeaderboardList(list) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, baseHeaders('application/json'));
  res.end(JSON.stringify(payload));
}

// Hàm đọc file và gửi cho trình duyệt
function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, baseHeaders('text/plain; charset=utf-8'));
      res.end('Lỗi máy chủ: Không thể tải file.');
    } else {
      res.writeHead(200, baseHeaders(contentType));
      res.end(content);
    }
  });
}

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Xử lý CORS
  if (method === 'OPTIONS') {
    res.writeHead(204, baseHeaders('text/plain; charset=utf-8'));
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
    return sendJson(res, 200, readLeaderboardList());
  }

  if (url === '/leaderboard' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > MAX_BODY_SIZE) {
        sendJson(res, 413, { error: 'Payload quá lớn.' });
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const name = String(data.name || '').trim().slice(0, MAX_NAME_LENGTH);
        const point = Number(data.point);
        if (!name || !Number.isFinite(point)) {
          return sendJson(res, 400, { error: 'Dữ liệu không hợp lệ.' });
        }

        const list = readLeaderboardList();
        list.push({
          name,
          point: Math.max(0, Math.min(10, Math.round(point))),
          time: data.time || new Date().toLocaleDateString('vi-VN'),
        });
        list.sort((a, b) => b.point - a.point);
        const result = list.slice(0, 10);
        writeLeaderboardList(result);
        sendJson(res, 201, result);
      } catch (e) {
        sendJson(res, 400, { error: 'JSON không hợp lệ.' });
      }
    });
    return;
  }

  // 404 nếu không tìm thấy
  sendJson(res, 404, { error: 'Không tìm thấy trang.' });
});

server.listen(PORT, () => {
  console.log(`Server đang chạy tại port ${PORT}`);
});