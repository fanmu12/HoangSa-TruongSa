const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'leaderboard.json');
const PORT = process.env.PORT || 52345;

function readBoard() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function writeBoard(list) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf8');
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  if (url === '/leaderboard' && method === 'GET') {
    const list = readBoard();
    return sendJson(res, 200, list);
  }

  if (url === '/leaderboard' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (!data.name || typeof data.point !== 'number') {
          return sendJson(res, 400, { error: 'Payload phải chứa name và point.' });
        }
        const list = readBoard();
        list.push({
          name: String(data.name).trim(),
          point: data.point,
          time: data.time || new Date().toLocaleDateString('vi-VN'),
        });
        list.sort((a, b) => b.point - a.point);
        const trimmed = list.slice(0, 10);
        writeBoard(trimmed);
        return sendJson(res, 201, trimmed);
      } catch (error) {
        return sendJson(res, 400, { error: 'Dữ liệu gửi lên không hợp lệ.' });
      }
    });
    return;
  }

  if (url === '/' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
    });
    return res.end('Leaderboard backend đang chạy.');
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Không tìm thấy route.' }));
});

server.listen(PORT, () => {
  console.log(`Leaderboard backend đang chạy tại http://localhost:${PORT}`);
});
