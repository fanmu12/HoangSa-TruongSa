# Triển khai backend độc lập

Để backend chạy tự động và không phụ thuộc vào máy của bạn, bạn cần triển khai `server.js` lên một dịch vụ hosting Node.js.

## 1. Chuẩn bị
- Trong `script.js`, bạn có thể dùng `remoteLeaderboardUrl` để trỏ tới URL backend đã deploy.
- `server.js` hiện đã hỗ trợ `process.env.PORT`, nên host nào cũng có thể dùng.

## 2. Các dịch vụ miễn phí/sẵn dùng
### Railway
1. Tạo tài khoản Railway tại https://railway.app
2. Kết nối repo GitHub chứa project này.
3. Chọn deploy Node.js app và dùng `npm start`.
4. Railway sẽ cung cấp URL công khai dạng `https://<app>.up.railway.app`.

### Render
1. Tạo tài khoản Render tại https://render.com
2. Chọn new Web Service -> Node
3. Point tới repo, dùng `npm install` và `npm start`.
4. Cập nhật URL vào `script.js`.

### Deta / Replit
- Nếu bạn cần deploy nhanh, Deta (Python/Node) và Replit đều có thể chạy server Node.

## 3. Cập nhật frontend
- Mở `script.js`.
- Thay giá trị của `remoteLeaderboardUrl` bằng URL backend đã deploy, ví dụ:

```js
const remoteLeaderboardUrl = "https://your-app.up.railway.app/leaderboard";
```

- Sau đó mở lại trang quiz.

## 4. Lưu ý
- Backend `server.js` hiện lưu dữ liệu vào `leaderboard.json`.
- Nếu host dùng bộ nhớ tạm (ephemeral), dữ liệu có thể mất khi deploy lại.
- Nếu bạn muốn dữ liệu lâu dài hơn, cần kết nối một cơ sở dữ liệu như Firebase, Supabase hoặc MongoDB Atlas.

---

## Gợi ý nhanh
- `npm install` để thiết lập nếu bạn dùng Node.
- `npm start` để chạy backend cục bộ.
- `Procfile` đã có sẵn cho Heroku/Render.
