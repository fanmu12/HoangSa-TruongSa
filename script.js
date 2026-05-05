const questions = [
  // LỊCH SỬ & CHỦ QUYỀN (1-30)
  { question: "Đội Hoàng Sa được thành lập sớm nhất vào thời đại nào?", options: ["Thời Chúa Nguyễn", "Thời Nhà Đinh", "Thời Nhà Lý", "Thời Nhà Trần"], answer: 0 },
  { question: "Nhiệm vụ chính của Hải đội Hoàng Sa trong lịch sử là gì?", options: ["Khai thác sản vật, đo đạc hải trình và cắm mốc chủ quyền", "Chỉ đánh bắt cá", "Chỉ làm nhiệm vụ vận tải", "Đi tìm vùng đất mới ở Châu Phi"], answer: 0 },
  { question: "Cuốn sách cổ nào ghi chép sớm nhất về việc Chúa Nguyễn lập đội Hoàng Sa?", options: ["Phủ biên tạp lục", "Toản tập Thiên nam tứ chí lộ đồ thư", "Đại Việt sử ký toàn thư", "Lịch triều hiến chương loại chí"], answer: 1 },
  { question: "Địa danh nào trong bản đồ cổ thế kỷ XVII thường dùng để chỉ chung Hoàng Sa và Trường Sa?", options: ["Bãi Cát Vàng", "Côn Luân", "Phú Quốc", "Lý Sơn"], answer: 0 },
  { question: "Ai là tác giả của cuốn 'Phủ biên tạp lục' ghi chép chi tiết về Hải đội Hoàng Sa?", options: ["Lê Quý Đôn", "Nguyễn Trãi", "Phan Huy Chú", "Trương Vĩnh Ký"], answer: 0 },
  { question: "Dưới triều vua nào, nhà Nguyễn đã cho dựng bia chủ quyền và trồng cây trên đảo Hoàng Sa?", options: ["Vua Minh Mạng", "Vua Gia Long", "Vua Tự Đức", "Vua Thiệu Trị"], answer: 0 },
  { question: "Người chỉ huy thủy quân triều Nguyễn ra Hoàng Sa đo đạc và vẽ bản đồ năm 1836 là ai?", options: ["Phạm Hữu Nhật", "Nguyễn Trung Trực", "Trần Hưng Đạo", "Lý Thường Kiệt"], answer: 0 },
  { question: "Tờ lệnh cấp cho đội Hoàng Sa đi làm nhiệm vụ được phát hiện nhiều nhất ở đâu?", options: ["Huyện đảo Lý Sơn, Quảng Ngãi", "Hà Nội", "Huế", "Đà Nẵng"], answer: 0 },
  { question: "Hải đội Bắc Hải được đặt dưới sự quản lý của hải đội nào?", options: ["Hải đội Hoàng Sa", "Thủy quân triều đình", "Đội tàu buôn", "Hải quân viễn chinh"], answer: 0 },
  { question: "Sách 'Đại Nam nhất thống chí' khẳng định quần đảo Hoàng Sa thuộc tỉnh nào thời bấy giờ?", options: ["Quảng Ngãi", "Bình Định", "Khánh Hòa", "Quảng Nam"], answer: 0 },
  { question: "Năm 1938, Pháp đã cho xây dựng bia chủ quyền tại quần đảo nào?", options: ["Hoàng Sa", "Trường Sa", "Phú Quốc", "Côn Đảo"], answer: 0 },
  { question: "Trạm khí tượng của Pháp xây dựng trên đảo Hoàng Sa năm 1938 có mã số quốc tế là gì?", options: ["48860", "48800", "48900", "48100"], answer: 0 },
  { question: "Sau năm 1954, lực lượng nào quản lý và bảo vệ quần đảo Hoàng Sa và Trường Sa?", options: ["Việt Nam Cộng hòa", "Quân đội thực dân Pháp", "Liên Hợp Quốc", "Không có ai quản lý"], answer: 0 },
  { question: "Ngày 14/3/1988 gắn liền với sự kiện lịch sử bi tráng nào tại Trường Sa?", options: ["Cuộc chiến bảo vệ vòng tròn bất tử tại Gạc Ma", "Lễ khánh thành chùa Trường Sa", "Ngày thành lập huyện đảo", "Ngày phát hiện ra mỏ dầu"], answer: 0 },
  { question: "Ai được vinh danh là 'Vua của quần đảo Hoàng Sa' vì những đóng góp trong việc thực thi chủ quyền thời Nguyễn?", options: ["Phạm Hữu Nhật", "Vua Gia Long", "Vua Minh Mạng", "Lê Quý Đôn"], answer: 0 },
  { question: "Lễ Khao lề thế lính Hoàng Sa diễn ra tại đâu để tri ân những người lính biển?", options: ["Đảo Lý Sơn", "Đảo Phú Quý", "Đảo Bạch Long Vĩ", "Đảo Cồn Cỏ"], answer: 0 },
  { question: "Tên gọi 'Vạn Lý Trường Sa' trong bản đồ cổ có nghĩa là gì?", options: ["Bãi cát dài vạn dặm", "Nhiều hòn đá cao", "Vùng biển không có cá", "Vương quốc của san hô"], answer: 0 },
  { question: "Văn bản nào của triều Nguyễn ghi lại việc thưởng tiền cho những người đi Hoàng Sa đo đạc?", options: ["Châu bản triều Nguyễn", "Mộc bản triều Nguyễn", "Chiếu dời đô", "Hịch tướng sĩ"], answer: 0 },
  { question: "Năm 1956, quân đội nước nào đã chiếm đóng bất hợp pháp phía Đông quần đảo Hoàng Sa?", options: ["Trung Quốc", "Pháp", "Mỹ", "Nhật Bản"], answer: 0 },
  { question: "Sự kiện quân đội Trung Quốc dùng vũ lực chiếm đóng toàn bộ quần đảo Hoàng Sa diễn ra vào năm nào?", options: ["1974", "1988", "1956", "1945"], answer: 0 },
  { question: "Văn bản nào khẳng định Hoàng Sa và Trường Sa là lãnh thổ Việt Nam ngay sau khi đất nước thống nhất 1975?", options: ["Tuyên bố của Bộ Ngoại giao Việt Nam", "Hiến pháp 1946", "Hiến chương Liên Hợp Quốc", "Hiệp ước Paris"], answer: 0 },
  { question: "Linh hồn của 'Vòng tròn bất tử' Gạc Ma là ai?", options: ["Trần Văn Phương", "Nguyễn Phan Vinh", "Phan Đình Giót", "Tô Vĩnh Diện"], answer: 0 },
  { question: "Hải đội Hoàng Sa thường khởi hành đi làm nhiệm vụ vào tháng mấy hàng năm?", options: ["Tháng 3 âm lịch", "Tháng 1 âm lịch", "Tháng 10 âm lịch", "Tháng 12 âm lịch"], answer: 0 },
  { question: "Mỗi đợt đi thực thi nhiệm vụ ở Hoàng Sa của hải đội thời xưa kéo dài bao lâu?", options: ["6 tháng", "1 tháng", "1 năm", "2 năm"], answer: 0 },
  { question: "Vật dụng nào người lính Hoàng Sa xưa luôn mang theo để chuẩn bị cho tình huống xấu nhất?", options: ["Chiếu, đòn tre và dây mây", "Súng thần công", "Lưới đánh cá", "La bàn gỗ"], answer: 0 },
  { question: "Tên gọi cổ nhất của quần đảo Hoàng Sa trong các văn bản chữ Nôm là gì?", options: ["Bãi Cát Vàng", "Đảo San Hô", "Đảo Hải Tặc", "Bãi Đá Ngầm"], answer: 0 },
  { question: "Châu bản triều Nguyễn về Hoàng Sa - Trường Sa đã được tổ chức nào công nhận là Di sản tư liệu thế giới?", options: ["UNESCO", "WHO", "WTO", "UNICEF"], answer: 0 },
  { question: "Triều đại nào đầu tiên chính thức sáp nhập Hoàng Sa vào bản đồ hành chính quốc gia?", options: ["Triều Nguyễn", "Triều Lê", "Triều Tây Sơn", "Triều Trần"], answer: 0 },
  { question: "Pháp nhân danh Việt Nam đã quản lý Hoàng Sa - Trường Sa trong giai đoạn nào?", options: ["1884 - 1954", "1954 - 1975", "1975 - nay", "1802 - 1884"], answer: 0 },
  { question: "Hoàng Sa được giải phóng khỏi quân đội Nhật Bản vào năm nào?", options: ["1945", "1954", "1938", "1975"], answer: 0 },

  // ĐỊA LÝ & TỰ NHIÊN (31-60)
  { question: "Quần đảo Hoàng Sa hiện nay trực thuộc thành phố nào?", options: ["Đà Nẵng", "Hải Phòng", "Hồ Chí Minh", "Cần Thơ"], answer: 0 },
  { question: "Quần đảo Trường Sa hiện nay trực thuộc tỉnh nào?", options: ["Khánh Hòa", "Ninh Thuận", "Bình Thuận", "Bà Rịa - Vũng Tàu"], answer: 0 },
  { question: "Đảo nổi có diện tích lớn nhất quần đảo Trường Sa là đảo nào?", options: ["Ba Bình", "Nam Yết", "Song Tử Tây", "Trường Sa Lớn"], answer: 0 },
  { question: "Đảo có diện tích lớn nhất quần đảo Hoàng Sa là đảo nào?", options: ["Phú Lâm", "Hoàng Sa", "Quang Ảnh", "Lâm Bằng"], answer: 0 },
  { question: "Hệ sinh thái chủ đạo tại hai quần đảo Hoàng Sa và Trường Sa là gì?", options: ["Rạn san hô", "Rừng ngập mặn", "Thủy triều đen", "Rừng thông"], answer: 0 },
  { question: "Loại đất đặc trưng trên các đảo thuộc Trường Sa được hình thành từ đâu?", options: ["Mùn phân chim và xác san hô", "Đất sét lục địa", "Tro bụi núi lửa", "Phù sa sông"], answer: 0 },
  { question: "Loài cây nào được coi là biểu tượng của sức sống Trường Sa?", options: ["Cây Bàng vuông", "Cây Dừa", "Cây Thông", "Cây Đước"], answer: 0 },
  { question: "Quần đảo Hoàng Sa cách đất liền Việt Nam khoảng bao nhiêu hải lý?", options: ["120 hải lý", "200 hải lý", "50 hải lý", "300 hải lý"], answer: 0 },
  { question: "Trường Sa có bao nhiêu đảo, đá, bãi cạn, bãi ngầm chính?", options: ["Hơn 100", "Chỉ 10", "Chỉ 50", "Gần 1000"], answer: 0 },
  { question: "Khoảng cách từ Cam Ranh đến quần đảo Trường Sa là bao nhiêu?", options: ["Khoảng 250 - 300 hải lý", "50 hải lý", "100 hải lý", "500 hải lý"], answer: 0 },
  { question: "Khí hậu tại Hoàng Sa và Trường Sa có đặc điểm gì?", options: ["Nhiệt đới hải dương, nhiều nắng gió và bão", "Hàn đới, có tuyết", "Ôn đới, bốn mùa rõ rệt", "Sa mạc khô hạn"], answer: 0 },
  { question: "Nhóm đảo phía Đông của quần đảo Hoàng Sa có tên gọi là gì?", options: ["Nhóm An Vĩnh", "Nhóm Lưỡi Liềm", "Nhóm Song Tử", "Nhóm Sinh Tồn"], answer: 0 },
  { question: "Nhóm đảo phía Tây của quần đảo Hoàng Sa có tên gọi là gì?", options: ["Nhóm Lưỡi Liềm", "Nhóm An Vĩnh", "Nhóm Thị Tứ", "Nhóm Nam Yết"], answer: 0 },
  { question: "Đảo nào ở Trường Sa nổi tiếng với việc trồng được nhiều rau xanh nhất?", options: ["Đảo Trường Sa Lớn", "Đảo Đá Tây", "Đảo Đá Lát", "Đảo Thuyền Chài"], answer: 0 },
  { question: "Nguồn nước ngọt trên các đảo ở Trường Sa chủ yếu từ đâu?", options: ["Nước mưa và máy lọc nước biển", "Giếng khoan sâu 1000m", "Dẫn đường ống từ đất liền", "Chở bằng máy bay ra"], answer: 0 },
  { question: "Loài chim nào thường xuyên làm tổ với số lượng lớn tại các đảo ở Hoàng Sa?", options: ["Chim Hải âu (Chim Nhạn)", "Chim Bồ câu", "Chim Đại bàng", "Chim Cánh cụt"], answer: 0 },
  { question: "Biển Đông là biển lớn thứ mấy trên thế giới?", options: ["Thứ 2", "Thứ 1", "Thứ 10", "Thứ 5"], answer: 0 },
  { question: "Độ sâu trung bình của Biển Đông là bao nhiêu?", options: ["1.140 m", "100 m", "5.000 m", "10.000 m"], answer: 0 },
  { question: "Hai quần đảo Hoàng Sa và Trường Sa nằm trên đường hàng hải nối liền hai đại dương nào?", options: ["Ấn Độ Dương và Thái Bình Dương", "Đại Tây Dương và Thái Bình Dương", "Bắc Băng Dương và Ấn Độ Dương", "Đại Tây Dương và Ấn Độ Dương"], answer: 0 },
  { question: "Hệ thực vật trên đảo Trường Sa chủ yếu gồm những loại cây nào?", options: ["Phong ba, bàng vuông, muống biển", "Tùng, bách, thông", "Lúa, ngô, khoai", "Rừng rậm nhiệt đới"], answer: 0 },
  { question: "Nguồn tài nguyên quý giá nhất dưới đáy biển Trường Sa là gì?", options: ["Dầu mỏ, khí đốt và băng cháy", "Vàng và kim cương", "Than đá", "Sắt và đồng"], answer: 0 },
  { question: "Vùng biển Việt Nam rộng khoảng bao nhiêu triệu km2?", options: ["Khoảng 1 triệu km2", "5 triệu km2", "0.5 triệu km2", "10 triệu km2"], answer: 0 },
  { question: "Hoàng Sa nằm ở kinh độ, vĩ độ nào?", options: ["15-17 độ vĩ Bắc, 111-113 độ kinh Đông", "10-12 độ vĩ Bắc, 100-105 độ kinh Đông", "8-12 độ vĩ Bắc, 111-117 độ kinh Đông", "20-22 độ vĩ Bắc, 108-110 độ kinh Đông"], answer: 0 },
  { question: "Trường Sa nằm ở kinh độ, vĩ độ nào?", options: ["6-12 độ vĩ Bắc, 111-117 độ kinh Đông", "15-17 độ vĩ Bắc, 111-113 độ kinh Đông", "10-15 độ vĩ Bắc, 110-112 độ kinh Đông", "4-6 độ vĩ Bắc, 105-108 độ kinh Đông"], answer: 0 },
  { question: "Loài hải sản nào là đặc sản nổi tiếng của vùng biển Trường Sa?", options: ["Cá ngừ đại dương", "Cá chép", "Cá quả", "Cá trê"], answer: 0 },
  { question: "Hiện tượng 'băng cháy' được dự báo có trữ lượng lớn ở vùng biển nào?", options: ["Biển Đông (bao gồm Hoàng Sa - Trường Sa)", "Hồ Tây", "Sông Hồng", "Vịnh Thái Lan"], answer: 0 },
  { question: "Vì sao các rạn san hô ở Hoàng Sa và Trường Sa quan trọng?", options: ["Là nơi cư ngụ, sinh sản của hàng ngàn loài sinh vật biển", "Chỉ để làm đồ trang trí", "Để làm vật liệu xây dựng", "Để ngăn sóng thần"], answer: 0 },
  { question: "Mùa bão ở vùng biển Hoàng Sa thường bắt đầu từ tháng mấy?", options: ["Tháng 6", "Tháng 1", "Tháng 3", "Tháng 12"], answer: 0 },
  { question: "Đảo nào thuộc Trường Sa có hình dáng giống như một chiếc thuyền chài?", options: ["Đảo Thuyền Chài", "Đảo Nam Yết", "Đảo Sinh Tồn", "Đảo Tiên Nữ"], answer: 0 },
  { question: "Đảo nào nằm xa nhất về phía Đông trong các đảo Việt Nam đang quản lý tại Trường Sa?", options: ["Đảo Tiên Nữ", "Đảo Trường Sa Lớn", "Đảo Nam Yết", "Đảo Song Tử Tây"], answer: 0 },

  // PHÁP LÝ & QUỐC TẾ (61-80)
  { question: "Viết tắt của Công ước Liên Hợp Quốc về Luật Biển năm 1982 là gì?", options: ["UNCLOS", "UNESCO", "UNICEF", "WHO"], answer: 0 },
  { question: "Theo UNCLOS 1982, vùng đặc quyền kinh tế của một quốc gia rộng bao nhiêu hải lý?", options: ["200 hải lý", "12 hải lý", "24 hải lý", "350 hải lý"], answer: 0 },
  { question: "Chiều rộng lãnh hải của Việt Nam là bao nhiêu hải lý?", options: ["12 hải lý", "200 hải lý", "24 hải lý", "100 hải lý"], answer: 0 },
  { question: "DOC là từ viết tắt của văn kiện nào giữa ASEAN và Trung Quốc?", options: ["Tuyên bố về ứng xử của các bên ở Biển Đông", "Hiệp định biên giới", "Luật biển quốc tế", "Hiệp ước hòa bình"], answer: 0 },
  { question: "Luật Biển Việt Nam được Quốc hội thông qua vào năm nào?", options: ["2012", "2000", "2020", "1995"], answer: 0 },
  { question: "Chủ quyền đối với Hoàng Sa và Trường Sa được Việt Nam xác lập theo nguyên tắc nào của quốc tế?", options: ["Chiếm hữu thực sự và liên tục", "Ai đến trước lấy trước", "Dựa vào khoảng cách địa lý", "Dựa vào tôn giáo"], answer: 0 },
  { question: "Hội nghị San Francisco (1951) có ý nghĩa gì đối với chủ quyền Việt Nam?", options: ["Khẳng định chủ quyền của VN mà không bị ai phản đối", "Chia cắt đất nước", "Kết thúc chiến tranh thế giới thứ 2", "Thành lập ASEAN"], answer: 0 },
  { question: "Cơ quan nào của Việt Nam có trách nhiệm thực thi pháp luật và bảo vệ chủ quyền biển đảo hàng ngày?", options: ["Cảnh sát biển và Hải quân", "Cảnh sát giao thông", "Bộ Giáo dục", "Bộ Tài chính"], answer: 0 },
  { question: "Đường cơ sở dùng để tính chiều rộng lãnh hải Việt Nam là đường gì?", options: ["Đường gãy khúc nối các điểm nhô ra xa nhất của bờ biển và các đảo ven bờ", "Đường thẳng song song với kinh tuyến", "Đường mép nước thủy triều thấp nhất", "Đường biên giới trên bộ"], answer: 0 },
  { question: "Vùng biển nằm giữa bờ biển và đường cơ sở gọi là gì?", options: ["Nội thủy", "Lãnh hải", "Vùng tiếp giáp", "Đặc quyền kinh tế"], answer: 0 },
  { question: "Quốc gia nào có chủ quyền hoàn toàn và tuyệt đối tại vùng Nội thủy?", options: ["Quốc gia ven biển", "Tất cả các nước trên thế giới", "Các nước láng giềng", "Chỉ tàu buôn được vào"], answer: 0 },
  { question: "Việt Nam chính thức tham gia UNCLOS 1982 vào năm nào?", options: ["1994", "1982", "2000", "2012"], answer: 0 },
  { question: "Vùng biển mà tại đó quốc gia ven biển có quyền tài phán về lắp đặt công trình và nghiên cứu khoa học?", options: ["Vùng đặc quyền kinh tế", "Lãnh hải", "Nội thủy", "Vùng tiếp giáp lãnh hải"], answer: 0 },
  { question: "ASEAN và Trung Quốc đang nỗ lực đàm phán bộ quy tắc gì cho Biển Đông?", options: ["COC", "DOC", "UNCLOS", "WTO"], answer: 0 },
  { question: "Bản đồ 'Hoàng triều trực tỉnh địa dư toàn đồ' năm 1904 của Trung Quốc đã chứng minh điều gì?", options: ["Điểm cực Nam của TQ chỉ đến đảo Hải Nam, không có Hoàng Sa - Trường Sa", "TQ có chủ quyền ở Trường Sa", "Hoàng Sa thuộc về Nhật Bản", "Biển Đông là của quốc tế"], answer: 0 },
  { question: "Các tư liệu của phương Tây từ thế kỷ XVI gọi Hoàng Sa là 'Illa de Pracel', Pracel có nghĩa là gì?", options: ["Bờ cát/Bãi đá ngầm", "Đảo xanh", "Vùng đất vàng", "Biển nguy hiểm"], answer: 0 },
  { question: "Quyền 'Đi qua không gây hại' trong lãnh hải áp dụng cho đối tượng nào?", options: ["Tàu thuyền của các quốc gia khác", "Máy bay quân sự", "Tàu ngầm đang lặn", "Tàu đánh cá đang thả lưới"], answer: 0 },
  { question: "Phạm vi vùng tiếp giáp lãnh hải không quá bao nhiêu hải lý kể từ đường cơ sở?", options: ["24 hải lý", "12 hải lý", "200 hải lý", "350 hải lý"], answer: 0 },
  { question: "Một hải lý (dặm biển) bằng bao nhiêu mét?", options: ["1.852 m", "1.000 m", "2.000 m", "1.609 m"], answer: 0 },
  { question: "Tranh chấp ở Biển Đông cần được giải quyết bằng biện pháp nào?", options: ["Hòa bình, dựa trên luật pháp quốc tế", "Dùng vũ lực", "Im lặng", "Rời bỏ các đảo"], answer: 0 },

  // VAI TRÒ & HIỆN TẠI (81-100)
  { question: "Huyện đảo Trường Sa có bao nhiêu đơn vị hành chính cấp xã/thị trấn?", options: ["3 (Thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn)", "1", "5", "10"], answer: 0 },
  { question: "Công trình nào trên đảo Trường Sa giúp ngư dân tránh bão và sửa chữa tàu thuyền?", options: ["Âu tàu", "Sân bay", "Trường học", "Công viên"], answer: 0 },
  { question: "Trường Sa hiện có điện năng phục vụ sinh hoạt nhờ nguồn năng lượng nào?", options: ["Năng lượng mặt trời và gió", "Thủy điện", "Điện hạt nhân", "Đốt than đá"], answer: 0 },
  { question: "Người dân sinh sống trên các đảo ở Trường Sa làm nghề gì chủ yếu?", options: ["Đánh bắt hải sản và dịch vụ hậu cần nghề cá", "Trồng lúa", "Làm công nghiệp nặng", "Khai thác mỏ sắt"], answer: 0 },
  { question: "Các chiến sĩ tại các nhà giàn DK1 bảo vệ khu vực nào?", options: ["Thềm lục địa phía Nam", "Vịnh Bắc Bộ", "Quần đảo Hoàng Sa", "Đảo Phú Quốc"], answer: 0 },
  { question: "Chương trình nào thường xuyên kêu gọi ủng hộ cho các chiến sĩ và người dân vùng biển đảo?", options: ["Vì học sinh Trường Sa thân yêu / Góp đá xây Trường Sa", "Lục lạc vàng", "Vượt lên chính mình", "Trái tim cho em"], answer: 0 },
  { question: "Ngọn hải đăng trên các đảo ở Trường Sa có tác dụng gì?", options: ["Định hướng và đảm bảo an toàn hàng hải", "Để thắp sáng đảo vào ban đêm", "Làm cột mốc biên giới", "Làm trạm phát sóng tivi"], answer: 0 },
  { question: "Đối tượng nào thường ra thăm và tặng quà tại Trường Sa vào mùa xuân?", options: ["Các đoàn công tác từ đất liền", "Khách du lịch quốc tế", "Các nhà buôn", "Người đi đánh cá thuê"], answer: 0 },
  { question: "Hiện nay trên đảo Trường Sa Lớn có công trình tâm linh nào?", options: ["Chùa Trường Sa Lớn", "Thà thờ lớn", "Tháp Chàm", "Thánh thất"], answer: 0 },
  { question: "Trẻ em trên các đảo Trường Sa đi học tại đâu?", options: ["Các trường tiểu học ngay trên đảo", "Phải vào đất liền học", "Học qua mạng Internet", "Không được đi học"], answer: 0 },
  { question: "Các cột mốc chủ quyền tại Trường Sa ghi thông tin gì?", options: ["Tên đảo, vĩ độ, kinh độ", "Số điện thoại liên lạc", "Tên người khám phá", "Danh sách các loại cá"], answer: 0 },
  { question: "Quần đảo Hoàng Sa và Trường Sa được coi là gì của Tổ quốc trên biển?", options: ["Lá chắn thép và phên dậu tiền tiêu", "Khu vui chơi", "Nơi hoang dã", "Cầu nối với Châu Mỹ"], answer: 0 },
  { question: "Chiến sĩ Hải quân Việt Nam làm nhiệm vụ ở Trường Sa thường được gọi là gì?", options: ["Lính đảo", "Lính bộ binh", "Lính công binh", "Lính dù"], answer: 0 },
  { question: "Ngày truyền thống của Hải quân Nhân dân Việt Nam là ngày nào?", options: ["7/5/1955", "2/9/1945", "22/12/1944", "30/4/1975"], answer: 0 },
  { question: "Vai trò của Biển Đông đối với khí hậu Việt Nam là gì?", options: ["Làm tăng độ ẩm, điều hòa khí hậu", "Làm cho khí hậu khô hơn", "Không có ảnh hưởng gì", "Tạo ra các sa mạc"], answer: 0 },
  { question: "Học sinh có thể làm gì để bảo vệ chủ quyền biển đảo?", options: ["Học tập tốt, hiểu đúng lịch sử và chia sẻ thông tin chính xác", "Đi ra đảo chiến đấu ngay", "Không cần quan tâm vì còn nhỏ", "Chia sẻ mọi thông tin thấy trên mạng"], answer: 0 },
  { question: "Vẻ đẹp của Trường Sa thường được ví với hình ảnh gì?", options: ["Viên ngọc xanh giữa đại dương", "Cánh đồng lúa vàng", "Thành phố sương mù", "Núi rừng hùng vĩ"], answer: 0 },
  { question: "Âm thanh đặc trưng vào mỗi sáng sớm trên đảo Trường Sa là gì?", options: ["Tiếng sóng biển và tiếng chào cờ, hát quốc ca", "Tiếng còi xe công nghệ", "Tiếng máy cày", "Tiếng loa quảng cáo"], answer: 0 },
  { question: "Việc giữ gìn hòa bình ở Biển Đông là trách nhiệm của ai?", options: ["Của tất cả các quốc gia và mọi công dân yêu chuộng hòa bình", "Chỉ của Việt Nam", "Chỉ của Liên Hợp Quốc", "Chỉ của ngư dân"], answer: 0 },
  { question: "Thông điệp chính của website này muốn gửi gắm là gì?", options: ["Hoàng Sa - Trường Sa là máu thịt của Việt Nam", "Chỉ để chơi game", "Tìm hiểu về các loài cá", "Học cách đi tàu biển"], answer: 0 }
];

const key = "islandQuizViet";
let idx = 0,
  score = 0,
  picks = [],
  player = "",
  timeLeft = 120,
  clock = null,
  quizQuestions = [],
  quizFinished = false;

const remoteLeaderboardUrl = "https://hoangsa-truongsa.onrender.com/leaderboard"; // Set this to your deployed backend URL after deploy, e.g. https://your-app.onrender.com/leaderboard

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function prepareQuestion(question) {
  const options = question.options.map((text, index) => ({ text, index }));
  const shuffled = shuffleArray(options);
  return {
    question: question.question,
    options: shuffled.map((item) => item.text),
    answer: shuffled.findIndex((item) => item.index === question.answer),
    originalAnswer: question.options[question.answer],
  };
}

function isRemoteEnabled() {
  return !!remoteLeaderboardUrl;
}

async function fetchRemoteBoard() {
  if (!isRemoteEnabled()) {
    throw new Error("Remote leaderboard not configured.");
  }
  const response = await fetch(remoteLeaderboardUrl, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Remote leaderboard fetch failed: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    return [];
  }
  return data.sort((a, b) => b.point - a.point).slice(0, 10);
}

async function saveRemoteScore(name, point) {
  if (!isRemoteEnabled()) {
    throw new Error("Remote leaderboard not configured.");
  }
  const response = await fetch(remoteLeaderboardUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, point, time: new Date().toLocaleDateString("vi-VN") }),
  });
  if (!response.ok) {
    throw new Error(`Remote leaderboard save failed: ${response.status}`);
  }
  return await response.json();
}

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const playerName = document.getElementById("playerName");
const showName = document.getElementById("showName");
const timer = document.getElementById("timer");
const questionText = document.getElementById("questionText");
const answerBox = document.getElementById("answerBox");
const progressFill = document.getElementById("progressFill");
const resultText = document.getElementById("resultText");
const reviewBox = document.getElementById("reviewBox");
const leaderboardBody = document.getElementById("leaderboardBody");
const leaderboardStatus = document.getElementById("leaderboardStatus");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const themeToggle = document.getElementById("themeToggle");
const readingBar = document.getElementById("readingBar");
const backToTopBtn = document.getElementById("backToTopBtn");

function setupTheme() {
  const savedTheme = localStorage.getItem("siteTheme");
  const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme ? savedTheme === "dark" : systemDark;
  document.body.classList.toggle("dark-theme", isDark);
  if (themeToggle) themeToggle.textContent = isDark ? "☀️" : "🌙";
}

function setupThemeToggle() {
  if (!themeToggle) return;
  themeToggle.onclick = () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("siteTheme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  };
}

function setupDetailCardNavigation() {
  const cards = document.querySelectorAll(".detail-card[data-topic]");
  cards.forEach((card) => {
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    const topic = card.getAttribute("data-topic");
    const toDetail = () => {
      window.location.href = `chi-tiet.html?topic=${encodeURIComponent(topic)}`;
    };
    card.addEventListener("click", toDetail);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toDetail();
      }
    });
  });
}

function setupReadingProgress() {
  if (!readingBar) return;
  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
    readingBar.style.width = `${progress}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupBackToTop() {
  if (!backToTopBtn) return;
  const updateVisibility = () => {
    backToTopBtn.classList.toggle("visible", window.scrollY > 420);
  };
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
  backToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

function setupActiveNavHighlight() {
  const sections = document.querySelectorAll("main section[id], #trang-chu");
  const navLinks = document.querySelectorAll(".links a[href^='#']");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const linkById = new Map();
  navLinks.forEach((link) => {
    linkById.set(link.getAttribute("href").slice(1), link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => link.classList.remove("is-active"));
        const activeLink = linkById.get(id);
        if (activeLink) activeLink.classList.add("is-active");
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setLeaderboardStatus(message, type = "info") {
  if (!leaderboardStatus) return;
  leaderboardStatus.textContent = message;
  leaderboardStatus.className = `leaderboard-status ${type}`;
}

function readLocalBoard() {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (error) {
    console.warn("Corrupted leaderboard data, resetting local storage.", error);
    localStorage.removeItem(key);
    return [];
  }
}

function saveLocalBoard(name, point) {
  const list = readLocalBoard();
  list.push({ name, point, time: new Date().toLocaleDateString("vi-VN") });
  list.sort((a, b) => b.point - a.point);
  localStorage.setItem(key, JSON.stringify(list.slice(0, 10)));
}

function renderLocalBoard() {
  const list = readLocalBoard();
  leaderboardBody.innerHTML = "";
  if (!list.length) {
    leaderboardBody.innerHTML =
      "<tr><td colspan='4' style='text-align:center;'>Đang đợi những chiến binh đầu tiên ghi tên...</td></tr>";
    return;
  }
  list.forEach((item, i) => {
    let rankClass = "";
    let medal = i + 1;
    if (i === 0) {
      rankClass = "rank-1";
      medal = "🥇 1";
    } else if (i === 1) {
      rankClass = "rank-2";
      medal = "🥈 2";
    } else if (i === 2) {
      rankClass = "rank-3";
      medal = "🥉 3";
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="${rankClass}">${medal}</td>
      <td style="font-weight: 600;">${escapeHtml(item.name)}</td>
      <td><span style="background: #e3f2fd; padding: 5px 12px; border-radius: 10px; color: #0077cc; font-weight: bold;">${item.point} / 10</span></td>
      <td>${escapeHtml(item.time)}</td>
    `;
    leaderboardBody.appendChild(tr);
  });
}

async function getBoard() {
  const localList = readLocalBoard();
  if (!isRemoteEnabled()) {
    setLeaderboardStatus("Leaderboard hiện đang hiển thị dữ liệu local. Cấu hình backend để chia sẻ điểm chung.", "warning");
    return localList;
  }
  try {
    setLeaderboardStatus("Đang tải leaderboard chung từ backend...", "info");
    const list = await fetchRemoteBoard();
    if (list.length) {
      setLeaderboardStatus("Leaderboard chung đã đồng bộ. Mọi người có thể xem cùng nhau.", "success");
      return list;
    }
    setLeaderboardStatus("Backend chưa có dữ liệu. Đang hiển thị dữ liệu local tạm thời.", "warning");
    return localList;
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    setLeaderboardStatus(`Không thể kết nối backend leaderboard. (${error.message})`, "error");
    return localList;
  }
}

async function saveBoard(name, point) {
  saveLocalBoard(name, point);
  renderLocalBoard();
  if (!isRemoteEnabled()) {
    setLeaderboardStatus("Điểm đã lưu cục bộ. Cấu hình backend để lưu chung mọi người.", "warning");
    return;
  }
  setLeaderboardStatus("Đang đồng bộ điểm lên backend...", "info");
  try {
    await saveRemoteScore(name, point);
    setLeaderboardStatus("Điểm đã được lưu chung. Mọi người cùng xem được.", "success");
    await renderBoard();
  } catch (error) {
    console.error("Error saving to remote:", error);
    setLeaderboardStatus(`Lưu backend thất bại. Điểm vẫn giữ local. (${error.message})`, "error");
  }
}

async function renderBoard() {
  leaderboardBody.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const skeleton = document.createElement("tr");
    skeleton.className = "skeleton-row";
    skeleton.innerHTML =
      "<td><div class='skeleton-box'></div></td><td><div class='skeleton-box'></div></td><td><div class='skeleton-box'></div></td><td><div class='skeleton-box'></div></td>";
    leaderboardBody.appendChild(skeleton);
  }

  const list = await getBoard();
  leaderboardBody.innerHTML = "";
  if (!list.length) {
    leaderboardBody.innerHTML =
      "<tr><td colspan='4' style='text-align:center;'>Đang đợi những chiến binh đầu tiên ghi tên...</td></tr>";
    return;
  }
  list.forEach((item, i) => {
    let rankClass = "";
    let medal = i + 1;
    if (i === 0) {
      rankClass = "rank-1";
      medal = "🥇 1";
    } else if (i === 1) {
      rankClass = "rank-2";
      medal = "🥈 2";
    } else if (i === 2) {
      rankClass = "rank-3";
      medal = "🥉 3";
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="${rankClass}">${medal}</td>
      <td style="font-weight: 600;">${escapeHtml(item.name)}</td>
      <td><span style="background: #e3f2fd; padding: 5px 12px; border-radius: 10px; color: #0077cc; font-weight: bold;">${item.point} / 10</span></td>
      <td>${escapeHtml(item.time)}</td>
    `;
    leaderboardBody.appendChild(tr);
  });
}

function showQuestion() {
  const q = quizQuestions[idx];
  questionText.textContent = `${idx + 1}. ${q.question}`;
  answerBox.innerHTML = "";
  document.getElementById("nextBtn").disabled = true;
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt;
    btn.onclick = () => {
      if (picks[idx] !== undefined) return;
      picks[idx] = i;
      const allBtns = answerBox.querySelectorAll("button");
      allBtns.forEach((b) => (b.disabled = true));
      if (i === q.answer) {
        score++;
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        allBtns[q.answer].classList.add("correct");
      }
      document.getElementById("nextBtn").disabled = false;
    };
    answerBox.appendChild(btn);
  });
  progressFill.style.width = `${(idx / quizQuestions.length) * 100}%`;
}

async function finishQuiz() {
  if (quizFinished) return;
  quizFinished = true;
  clearInterval(clock);
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let cheer =
    score >= quizQuestions.length * 0.8
      ? "Đỉnh quá! Bạn thực sự là một người con yêu biển đảo."
      : score >= quizQuestions.length * 0.5
        ? "Làm tốt lắm! Hãy tiếp tục phát huy nhé."
        : "Không sao cả, mỗi lần chơi là một lần học mà!";
  resultText.innerHTML = `<strong>${escapeHtml(player)}</strong> thân mến,<br>Bạn đã chinh phục được <strong>${score}/10</strong> câu hỏi.<br><br><i>${escapeHtml(cheer)}</i>`;

  reviewBox.innerHTML = "";
  quizQuestions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.marginBottom = "10px";
    div.innerHTML = `<small>Câu ${i + 1}</small><br><strong>${q.question}</strong><br><small>Đáp án đúng: ${q.originalAnswer}</small>`;
    reviewBox.appendChild(div);
  });
  await saveBoard(player, score);
}

startBtn.onclick = () => {
  const name = playerName.value.trim().slice(0, 40);
  if (!name) return alert("Cho mình biết tên bạn trước khi bắt đầu nhé!");
  player = name;
  idx = 0;
  score = 0;
  picks = [];
  quizFinished = false;
  quizQuestions = shuffleArray(questions).map(prepareQuestion).slice(0, 10);
  timeLeft = 120;
  showName.textContent = player;
  timer.textContent = timeLeft;
  startBtn.disabled = true;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
  clock = setInterval(() => {
    if (quizFinished) return;
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0) finishQuiz();
  }, 1000);
};

nextBtn.onclick = () => {
  if (quizFinished) return;
  idx++;
  if (idx >= quizQuestions.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
};

retryBtn.onclick = () => {
  clearInterval(clock);
  quizFinished = false;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  startBtn.disabled = false;
};

// Initialize leaderboard
(async () => {
  setupTheme();
  setupThemeToggle();
  setupDetailCardNavigation();
  setupReadingProgress();
  setupBackToTop();
  setupActiveNavHighlight();
  renderLocalBoard();
  setLeaderboardStatus("Đang kiểm tra kết nối server leaderboard...", "info");
  await renderBoard();
})();