const questions = [
  // === NHÓM 1: LỊCH SỬ & XÁC LẬP CHỦ QUYỀN (Câu 1 - 25) ===
  { question: "Hải đội nào được chính quyền chúa Nguyễn thành lập từ thế kỷ XVII để thực thi chủ quyền tại Hoàng Sa?", options: ["Hải đội Bắc Hải", "Hải đội Hoàng Sa", "Hải đội Trường Sa", "Thủy quân lục chiến"], answer: 1 },
  { question: "Hải đội Hoàng Sa kiêm quản hải đội nào để thực thi nhiệm vụ tại các đảo phía Nam và Côn Đảo?", options: ["Hải đội Trường Sa", "Hải đội Nam Hải", "Hải đội Bắc Hải", "Hải đội Tây Sa"], answer: 2 },
  { question: "Nhiệm vụ chính của đội Hoàng Sa dưới triều chúa Nguyễn là gì?", options: ["Thu lượm hàng hóa tàu đắm, đánh bắt hải sản quý và đo đạc lộ trình đường biển", "Chỉ đánh bắt cá gần bờ", "Chuyển chở hàng hóa giao thương quốc tế", "Xây dựng các căn cứ quân sự kiên cố"], answer: 0 },
  { question: "Tài liệu cổ nào của Đỗ Bá lập năm 1686 đã mô tả về 'Bãi Cát Vàng' thuộc phủ Quảng Ngãi?", options: ["Hồng Đức bản đồ", "Toản tập Thiên nam tứ chí lộ đồ thư", "Đại Nam nhất thống toàn đồ", "Phủ biên tạp lục"], answer: 1 },
  { question: "Nhà bác học Lê Quý Đôn đã ghi chép rất chi tiết về tổ chức và hoạt động của đội Hoàng Sa trong cuốn sách nào năm 1776?", options: ["Lịch triều hiến chương loại chí", "Phủ biên tạp lục", "Đại Việt sử ký toàn thư", "Gia Định thành thông chí"], answer: 1 },
  { question: "Dưới triều Nguyễn, vị vua nào đã cho khắc hình ảnh thuyền mảng và biển đảo Việt Nam lên Cửu Đỉnh?", options: ["Vua Gia Long", "Vua Minh Mạng", "Vua Thiệu Trị", "Vua Tự Đức"], answer: 1 },
  { question: "Vua Minh Mạng đã ra lệnh cho lực lượng nào chủ trì việc cắm mốc chủ quyền và dựng bia đá tại Hoàng Sa năm 1835?", options: ["Suất đội Phạm Văn Nguyên cùng thủy quân và dân phu", "Hải đội Bắc Hải", "Thương nhân nước ngoài", "Các nhà truyền giáo phương Tây"], answer: 0 },
  { question: "Cuốn chính sử nào của triều Nguyễn ghi lại việc vua Gia Long sai thủy quân ra Hoàng Sa đo đạc hải trình năm 1815?", options: ["Đại Nam thực lục", "Khâm định Việt sử thông giám cương mục", "Đại Nam liệt truyện", "Minh Mạng chính yếu"], answer: 0 },
  { question: "Tập bản đồ nào do triều Nguyễn ấn hành năm 1838 có vẽ hình dáng bờ biển và ghi rõ 'Hoàng Sa', 'Trường Sa' thuộc lãnh thổ Việt Nam?", options: ["Đại Nam nhất thống toàn đồ", "Thiên hạ bản đồ", "An Nam hình thắng đồ", "Giáp Ngọ niên bình Nam đồ"], answer: 0 },
  { question: "Địa danh 'Bãi Cát Vàng' được người Việt xưa dùng để chỉ khu vực nào ngày nay?", options: ["Quần đảo Hoàng Sa", "Quần đảo Trường Sa", "Đảo Phú Quốc", "Vịnh Bắc Bộ"], answer: 0 },
  { question: "Châu bản triều Nguyễn là loại hình văn bản gì khẳng định chủ quyền của Việt Nam đối với hai quần đảo?", options: ["Văn bản hành chính của hoàng đế phê duyệt bằng mực đỏ", "Sách địa lý của tư nhân", "Nhật ký của các thủy thủ", "Bản đồ thương mại phương Tây"], answer: 0 },
  { question: "Năm 1933, Phái đoàn Ngoại giao quốc gia nào đã thay mặt Việt Nam tuyên bố quản lý và sáp nhập các đảo Trường Sa vào tỉnh Bà Rịa?", options: ["Chính phủ bảo hộ Pháp", "Chính quyền nhà Thanh", "Quân đội Anh", "Đế quốc Nhật Bản"], answer: 0 },
  { question: "Năm 1951, tại Hội nghị Hòa bình San Francisco, phái đoàn quốc gia nào đã tuyên bố khẳng định chủ quyền Hoàng Sa, Trường Sa mà không gặp sự phản đối?", options: ["Phái đoàn quốc gia Việt Nam do Trần Văn Hữu làm trưởng đoàn", "Phái đoàn Hoa Kỳ", "Phái đoàn Liên Xô", "Phái đoàn Pháp"], answer: 0 },
  { question: "Chính quyền Việt Nam Cộng hòa đã ban hành sắc lệnh sáp nhập quần đảo Hoàng Sa vào tỉnh nào năm 1961?", options: ["Tỉnh Thừa Thiên", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", "Tỉnh Khánh Hòa"], answer: 1 },
  { question: "Lực lượng Hải quân miền Bắc đã tiến hành giải phóng hoàn toàn các đảo thuộc quần đảo Trường Sa do đối phương đồn trú vào thời gian nào?", options: ["Tháng 4 năm 1975", "Tháng 5 năm 1975", "Tháng 12 năm 1975", "Tháng 1 năm 1974"], answer: 0 },
  { question: "Ngày giải phóng hòn đảo đầu tiên (đảo Song Tử Tây) tại quần đảo Trường Sa là ngày nào?", options: ["14/04/1975", "25/04/1975", "30/04/1975", "19/05/1975"], answer: 0 },
  { question: "Ai là người chỉ huy lực lượng hải quân giải phóng quần đảo Trường Sa vào tháng 4/1975?", options: ["Đồng chí Mai Năng", "Đồng chí Nguyễn Chánh", "Đồng chí Lê Trọng Tấn", "Đồng chí Trần Văn Trà"], answer: 0 },
  { question: "Sự kiện lịch sử nào diễn ra ngày 19/01/1974 tại quần đảo Hoàng Sa?", options: ["Trận hải chiến bảo vệ Hoàng Sa của Hải quân Việt Nam Cộng hòa chống quân xâm lược", "Lễ cắm mốc của triều Nguyễn", "Pháp bàn giao quần đảo cho Việt Nam", "Xây dựng ngọn hải đăng đầu tiên"], answer: 0 },
  { question: "Sách cổ 'Việt sử xứ Đàng Trong' và văn bản của dòng họ nào ở Lý Sơn ghi nhận việc đi lính Hoàng Sa?", options: ["Dòng họ Đặng và dòng họ Võ", "Dòng họ Nguyễn", "Dòng họ Lê", "Dòng họ Trần"], answer: 0 },
  { question: "Cai đội Hoàng Sa nổi tiếng nào dưới triều Nguyễn đã được lập miếu thờ và vinh danh tại đảo Lý Sơn?", options: ["Cai đội Phạm Hữu Nhật", "Cai đội Phạm Văn Nguyên", "Cai đội Thuyên Đức Hầu", "Cai đội Võ Văn Hùng"], answer: 0 },
  { question: "Nghề 'mộ phu' đi lính Hoàng Sa ngày xưa thường xuất phát chủ yếu từ vùng đất nào?", options: ["Huyện đảo Lý Sơn, tỉnh Quảng Ngãi", "Huyện đảo Côn Đảo", "Thành phố Đà Nẵng", "Tỉnh Khánh Hòa"], answer: 0 },
  { question: "Nghi lễ tâm linh thiêng liêng nào được tổ chức hàng năm ở Lý Sơn để tri ân những người lính Hoàng Sa?", options: ["Lễ khao lề thế lính Hoàng Sa", "Lễ hội Đua thuyền", "Lễ hội Cầu ngư", "Lễ hội Nghinh Ông"], answer: 0 },
  { question: "Ý nghĩa của những chiếc 'thuyền nan và ngôi mộ gió' trong lễ khao lề thế lính Hoàng Sa là gì?", options: ["Tế sống và làm mộ giả cho người đi biển biết trước có thể không trở về", "Để trang trí lễ hội", "Dùng để đua thuyền giữa các dòng họ", "Thờ cúng thần biển"], answer: 0 },
  { question: "Văn bản hành chính nào của phương Tây thế kỷ XVII-XVIII thường gọi quần đảo Hoàng Sa bằng cái tên gì?", options: ["Paracels", "Spratlys", "Formosa", "Indochina"], answer: 0 },
  { question: "Tài liệu 'Bản đồ hàng hải phương Tây' vẽ khu vực Biển Đông thường ghi nhận Hoàng Sa thuộc quyền kiểm soát của vương quốc nào?", options: ["An Nam (Việt Nam)", "Siam (Thái Lan)", "Champa", "Cochinchine độc lập"], answer: 0 },

  // === NHÓM 2: ĐỊA LÝ & HỆ SINH THÁI BIỂN (Câu 26 - 50) ===
  { question: "Quần đảo Hoàng Sa hiện nay thuộc quyền quản lý hành chính của đơn vị nào?", options: ["Huyện Hoàng Sa, Thành phố Đà Nẵng", "Huyện Trường Sa, Tỉnh Khánh Hòa", "Huyện Lý Sơn, Tỉnh Quảng Ngãi", "Huyện Phú Quý, Tỉnh Bình Thuận"], answer: 0 },
  { question: "Quần đảo Trường Sa nằm ở phía Nam Biển Đông hiện thuộc quyền quản lý hành chính của tỉnh nào?", options: ["Tỉnh Khánh Hòa (Huyện Trường Sa)", "Thành phố Đà Nẵng", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bình Thuận"], answer: 0 },
  { question: "Quần đảo Hoàng Sa gồm bao gồm hai nhóm đảo chính nào?", options: ["Nhóm Lưỡi Liềm và nhóm An Vĩnh", "Nhóm Song Tử và nhóm Sinh Tồn", "Nhóm Thị Tứ và nhóm Nam Yết", "Nhóm đảo Bình Nguyên và nhóm Trấn Biên"], answer: 0 },
  { question: "Đảo nào có diện tích tự nhiên lớn nhất thuộc quần đảo Hoàng Sa?", options: ["Đảo Phú Lâm", "Đảo Linh Côn", "Đảo Quang Hòa", "Đảo Hoàng Sa"], answer: 0 },
  { question: "Đảo nổi có diện tích lớn nhất thuộc quần đảo Trường Sa do Việt Nam quản lý thực tế là đảo nào?", options: ["Đảo Trường Sa Lớn", "Đảo Nam Yết", "Đảo Song Tử Tây", "Đảo Sinh Tồn"], answer: 2 },
  { question: "Địa hình chủ yếu cấu tạo nên các thực thể ở quần đảo Hoàng Sa và Trường Sa là gì?", options: ["Đảo san hô, rạn san hô, bãi cạn và bãi ngầm", "Đảo đá vôi lục địa", "Đảo đá sa thạch kết tinh", "Hệ thống núi lửa đất sét"], answer: 0 },
  { question: "Khí hậu tại hai quần đảo Hoàng Sa và Trường Sa mang đặc điểm gì?", options: ["Khí hậu nhiệt đới gió mùa đại dương, thường xuyên có bão lớn", "Khí hậu ôn đới hải dương", "Khí hậu cận nhiệt đới khô hạn", "Khí hậu xích đạo không có gió mùa"], answer: 0 },
  { question: "Loài chim biển nào được mệnh danh là biểu tượng và có số lượng cư trú đông đảo tại quần đảo Hoàng Sa?", options: ["Chim Hải âu", "Chim Nhạn biển (Chim điên)", "Chim Bồ câu biển", "Chim Cắt biển"], answer: 1 },
  { question: "Loài cây có khả năng chịu mặn, chắn bão gió tốt và là biểu tượng của Trường Sa là cây gì?", options: ["Cây phong ba và cây bàng vuông", "Cây đước và cây vẹt", "Cây thông và cây sồi", "Cây phi lao và cây dừa"], answer: 0 },
  { question: "Hệ sinh thái biển xung quanh hai quần đảo có đặc điểm nổi bật nào về mặt sinh học?", options: ["Độ đa dạng sinh học rất cao với hàng ngàn loài cá và san hô", "Nghèo nàn sinh vật do nước biển quá mặn", "Chỉ có các loài tảo nước sâu", "Không có hệ sinh thái rạn san hô"], answer: 0 },
  { question: "Hiện tượng tự nhiên nào tạo nên cấu trúc vòng tròn đặc trưng của các rạn san hô giữa đại dương?", options: ["Atoll (Đảo san hô vòng)", "Vịnh biển kín", "Rạn bờ biển thẳng", "Bãi bồi phù sa"], answer: 0 },
  { question: "Nguồn nước ngọt sinh hoạt chính trên các đảo nổi tự nhiên ở Trường Sa trước khi có máy lọc nước là từ đâu?", options: ["Nước mưa tích trữ và các giếng nước ngầm lợ được lọc qua rạn san hô", "Dẫn đường ống từ đất liền ra", "Chở hoàn toàn từ đất liền bằng tàu", "Khai thác từ các hồ nước mặn"], answer: 0 },
  { question: "Khoảng cách từ đất liền Việt Nam đến quần đảo Hoàng Sa gần hơn hay xa hơn so với các nước xung quanh Biển Đông?", options: ["Gần hơn rất nhiều, khẳng định tính liên tục về địa lý", "Xa hơn các quốc gia khác", "Bằng khoảng cách từ các nước khác", "Nằm hoàn toàn tách biệt ngoài đại dương"], answer: 0 },
  { question: "Vùng biển Hoàng Sa và Trường Sa có ngư trường đánh bắt hải sản mang tầm quan trọng như thế nào đối với ngư dân miền Trung?", options: ["Là ngư trường truyền thống, sinh kế lâu đời của hàng vạn hộ ngư dân", "Khu vực cấm đánh bắt hoàn toàn", "Ngư trường mới phát hiện gần đây", "Chỉ có giá trị khai thác thủy sản nước ngọt"], answer: 0 },
  { question: "Loại san hô nào chiếm tỷ lệ lớn nhất tạo nên cấu trúc rạn tại quần đảo Trường Sa?", options: ["San hô khối và san hô cành (san hô cứng)", "San hô mềm dẻo", "San hô đen quý hiếm", "San hô sừng hươu nước ngọt"], answer: 0 },
  { question: "Đảo Song Tử Tây thuộc quần đảo Trường Sa nổi tiếng với công trình dân sự, năng lượng xanh nào?", options: ["Hệ thống điện gió và điện mặt trời quy mô lớn", "Nhà máy nhiệt điện than", "Trạm thủy điện thủy triều", "Nhà máy điện hạt nhân"], answer: 0 },
  { question: "Ngọn hải đăng trên các đảo ở Trường Sa có vai trò gì đối với an toàn hàng hải quốc tế?", options: ["Định hướng, dẫn đường và bảo đảm an toàn cho tàu thuyền qua lại Biển Đông", "Chỉ thắp sáng phục vụ quân đội", "Làm cột mốc trang trí cảnh quan", "Phát tín hiệu dự báo thời tiết đất liền"], answer: 0 },
  { question: "Đảo Sinh Tồn Đông thuộc cụm đảo nào của quần đảo Trường Sa?", options: ["Cụm Sinh Tồn", "Cụm Song Tử", "Cụm Nam Yết", "Cụm Trường Sa"], answer: 0 },
  { question: "Đảo An Bang thuộc quần đảo Trường Sa có đặc điểm địa lý tự nhiên độc đáo nào?", options: ["Bãi cát xung quanh đảo thường xuyên thay đổi hình dáng theo mùa gió", "Là đảo đá cao nhất", "Có hồ nước ngọt khổng lồ giữa đảo", "Không bao giờ có sóng lớn"], answer: 0 },
  { question: "Hệ sinh thái thảm cỏ biển xung quanh các đảo có tác dụng chính là gì?", options: ["Là nơi cư trú, sinh sản của các loài thủy sản và rùa biển quý hiếm", "Làm thức ăn gia súc trên đất liền", "Làm sạch mặt nước bằng hóa chất", "Ngăn chặn hoàn toàn hiện tượng sạt lở bờ biển"], answer: 0 },
  { question: "Đảo Nam Yết thuộc quần đảo Trường Sa được quy hoạch bảo tồn sinh học quốc gia vì có loài thực vật nào phát triển mạnh?", options: ["Cây bàng vuông cổ thụ và thảm thực vật biển đặc trưng", "Cây công nghiệp thân gỗ lớn", "Cây lúa nước chịu mặn", "Cây rừng ngập mặn đước đôi"], answer: 0 },
  { question: "Bãi đá ngầm Gạc Ma thuộc quần đảo nào của Việt Nam?", options: ["Quần đảo Trường Sa", "Quần đảo Hoàng Sa", "Quần đảo Thổ Chu", "Quần đảo Cô Tô"], answer: 0 },
  { question: "Vị trí địa lý của Biển Đông nói chung và hai quần đảo nói riêng nằm trên tuyến đường hàng hải kết nối hai đại dương nào?", options: ["Ấn Độ Dương và Thái Bình Dương", "Đại Tây Dương và Ấn Độ Dương", "Thái Bình Dương và Bắc Băng Dương", "Bắc Băng Dương và Đại Tây Dương"], answer: 0 },
  { question: "Hiện tượng xâm nhập mặn và bão biển tại các đảo được các chiến sĩ khắc phục bằng cách nào để trồng rau xanh?", options: ["Trồng rau trong khay, che chắn sóng gió bằng vách tre/nilon và tiết kiệm nước ngọt", "Nhập khẩu rau hoàn toàn từ nước ngoài", "Trồng rau trực tiếp trên bãi cát san hô không cần che chắn", "Sử dụng nước biển để tưới cây"], answer: 0 },
  { question: "Đảo đá nào thuộc quần đảo Hoàng Sa là nơi đặt ngọn hải đăng lâu đời do Pháp xây dựng?", options: ["Đảo Pattle (Hoàng Sa)", "Đảo Phú Lâm", "Đảo Linh Côn", "Đảo Tri Tôn"], answer: 0 },

  // === NHÓM 3: PHÁP LÝ QUỐC TẾ & KINH TẾ BIỂN (Câu 51 - 75) ===
  { question: "Công ước của Liên Hợp Quốc về Luật Biển năm 1982 được ký kết tại đâu và viết tắt là gì?", options: ["UNCLOS 1982 tại Jamaica", "WTO 1995 tại Geneva", "DOC 2002 tại Campuchia", "UNESCO 1945 tại Anh"], answer: 0 },
  { question: "Theo UNCLOS 1982, Lãnh hải của một quốc gia ven biển có chiều rộng bao nhiêu hải lý tính từ đường cơ sở?", options: ["12 hải lý", "24 hải lý", "200 hải lý", "350 hải lý"], answer: 0 },
  { question: "Vùng biển nằm tiếp liền và bên ngoài lãnh hải, nơi quốc gia kiểm soát thuế quan, y tế, di cư gọi là gì?", options: ["Vùng tiếp giáp lãnh hải (24 hải lý tính từ đường cơ sở)", "Vùng đặc quyền kinh tế", "Thềm lục địa", "Nội thủy"], answer: 0 },
  { question: "Vùng đặc quyền kinh tế (EEZ) theo quy định của UNCLOS 1982 có chiều rộng tối đa là bao nhiêu?", options: ["200 hải lý tính từ đường cơ sở", "12 hải lý", "100 hải lý", "500 hải lý"], answer: 0 },
  { question: "Tại vùng đặc quyền kinh tế, quốc gia ven biển có quyền gì?", options: ["Quyền chủ quyền về kinh tế (khai thác tài nguyên, đặt ống dẫn) và quyền tài phán", "Chủ quyền hoàn toàn tuyệt đối như đất liền", "Không có quyền gì cả", "Quyền ngăn cấm tuyệt đối tàu thuyền nước ngoài đi qua"], answer: 0 },
  { question: "Nước ta đã thông qua bộ luật cốt lõi nào năm 2012 để khẳng định và quản lý các vùng biển quốc gia?", options: ["Luật Biển Việt Nam", "Luật Hàng hải quốc tế", "Luật Biên giới lãnh thổ", "Luật Thủy sản sửa đổi"], answer: 0 },
  { question: "Tuyên bố về ứng xử của các bên ở Biển Đông (DOC) được ký kết giữa ASEAN và Trung Quốc vào năm nào?", options: ["Năm 2002", "Năm 1995", "Năm 2010", "Năm 1982"], answer: 0 },
  { question: "Mục tiêu cốt lõi hiện nay của Việt Nam và ASEAN đang đàm phán với Trung Quốc để tiến tới một văn bản pháp lý ràng buộc hơn DOC là gì?", options: ["Bộ Quy tắc ứng xử ở Biển Đông (COC)", "Hiệp ước biên giới mới", "Thỏa thuận thương mại tự do", "Công ước luật biển riêng"], answer: 0 },
  { question: "Nguyên tắc cơ bản nhất của Việt Nam trong việc giải quyết các tranh chấp ở Biển Đông là gì?", options: ["Giải quyết hòa bình trên cơ sở luật pháp quốc tế, đặc biệt là UNCLOS 1982", "Sử dụng vũ lực quân sự lập tức", "Nhượng bộ hoàn toàn lãnh thổ", "Không đối thoại, đóng cửa biên giới biển"], answer: 0 },
  { question: "Tài nguyên 'Băng cháy' (Gas Hydrate) được phát hiện có trữ lượng lớn ở khu vực nào thuộc thềm lục địa Việt Nam?", options: ["Khu vực biển sâu Biển Đông bao gồm thềm lục địa quanh quần đảo", "Các con sông lớn ở đồng bằng", "Dưới lòng đất liền các tỉnh miền núi", "Các vùng đầm phá nước lợ"], answer: 0 },
  { question: "Các giàn khoan dầu khí của Việt Nam (như Bạch Hổ, Đại Hùng) nằm ở khu vực địa lý nào?", options: ["Thềm lục địa phía Nam Việt Nam", "Hoàn toàn trên đất liền", "Trong lòng vịnh Thái Lan sát bờ", "Ngoài khơi Thái Bình Dương"], answer: 0 },
  { question: "Nền kinh tế biển đóng góp vai trò chiến lược gì trong mục tiêu phát triển bền vững của nước ta?", options: ["Trở thành quốc gia biển giàu mạnh, phát triển các ngành hàng hải, thủy sản, dầu khí và du lịch biển", "Chỉ tập trung vào xuất khẩu muối", "Thay thế hoàn toàn kinh tế nông nghiệp đất liền", "Hạn chế mở rộng giao thương hàng hải"], answer: 0 },
  { question: "Vùng nội thủy của quốc gia được xác định như thế nào?", options: ["Vùng nước nằm phía trong của đường cơ sở", "Vùng nước nằm ngoài lãnh hải", "Vùng biển rộng 200 hải lý", "Vùng thềm lục địa kéo dài"], answer: 0 },
  { question: "Đường cơ sở dùng để tính chiều rộng lãnh hải của lục địa Việt Nam được tuyên bố vào năm nào?", options: ["Năm 1982", "Năm 1975", "Năm 1992", "Năm 2012"], answer: 0 },
  { question: "Một hải lý (dặm biển) quy đổi ra hệ mét có chiều dài bằng bao nhiêu?", options: ["1.852 mét", "1.000 mét", "2.000 mét", "1.500 mét"], answer: 0 },
  { question: "Việt Nam có quyền gì đối với vùng Thềm lục địa của mình theo UNCLOS 1982?", options: ["Quyền chủ quyền đối với việc thăm dò và khai thác tài nguyên thiên nhiên ở đáy biển và lòng đất dưới đáy biển", "Quyền sở hữu bầu trời phía trên thềm lục địa", "Quyền cấm tất cả các cáp treo ngầm quốc tế đi qua", "Không có quyền kiểm soát tài nguyên lòng đất"], answer: 0 },
  { question: "Hiệp định phân định Vịnh Bắc Bộ được Việt Nam ký kết thành công với Trung Quốc vào năm nào?", options: ["Năm 2000", "Năm 1995", "Năm 2004", "Năm 1982"], answer: 0 },
  { question: "Việt Nam đã ký kết Hiệp định phân định vùng đặc quyền kinh tế trên biển với quốc gia Đông Nam Á nào vào năm 2022?", options: ["Indonesia", "Malaysia", "Philippines", "Thái Lan"], answer: 0 },
  { question: "Lực lượng chức năng nào có quyền xử phạt các tàu thuyền nước ngoài vi phạm chủ quyền kinh tế và đánh bắt trộm trong vùng EEZ của Việt Nam?", options: ["Cảnh sát biển và Kiểm ngư Việt Nam", "Cảnh sát giao thông đường bộ", "Lực lượng dân quân tự vệ xã", "Cục biên phòng đất liền"], answer: 0 },
  { question: "Các nhà giàn DK1 được Việt Nam xây dựng tại khu vực nào?", options: ["Các bãi ngầm trên thềm lục địa phía Nam", "Ngay sát bờ biển Vũng Tàu", "Giữa trung tâm quần đảo Hoàng Sa", "Trên đất liền các tỉnh duyên hải"], answer: 0 },
  { question: "Nhà giàn DK1 đầu tiên được dựng lên vững chãi trên biển vào năm nào?", options: ["Năm 1989", "Năm 1975", "Năm 2000", "Năm 1995"], answer: 0 },
  { question: "Tên gọi đầy đủ của các nhà giàn DK1 là gì?", options: ["Cụm Dịch vụ - Kinh tế - Kỹ thuật", "Trạm Khảo sát Quân sự đường biển", "Đồn Biên phòng biển khơi", "Nhà văn hóa biển đảo"], answer: 0 },
  { question: "Mục đích chiến lược của hệ thống nhà giàn DK1 là gì?", options: ["Bảo vệ thềm lục địa, làm chỗ dựa cho ngư dân bám biển và nghiên cứu khoa học biển", "Phục vụ khách du lịch nghỉ dưỡng cao cấp", "Làm cảng trung chuyển hàng hóa quốc tế", "Khai thác quặng sắt dưới đáy biển"], answer: 0 },
  { question: "Chiến dịch mang tên 'Hành trình Tuổi trẻ vì biển đảo quê hương' do tổ chức nào phát động hàng năm?", options: ["Trung ương Đoàn TNCS Hồ Chí Minh", "Bộ Giáo dục và Đào tạo", "Bộ Văn hóa, Thể thao và Du lịch", "Hội khuyến học Việt Nam"], answer: 0 },
  { question: "Luật Biển Việt Nam năm 2012 quy định quần đảo Hoàng Sa và Trường Sa thuộc vùng biển nào của Việt Nam?", options: ["Thuộc phạm vi chủ quyền và lãnh thổ không thể tách rời của nước Cộng hòa xã hội chủ nghĩa Việt Nam", "Là vùng biển quốc tế tự do hoàn toàn", "Là vùng biển tranh chấp không thuộc ai", "Là khu vực kinh tế hợp tác tạm thời"], answer: 0 },

  // === NHÓM 4: TRÁCH NHIỆM HỌC SINH & TUYÊN TRUYỀN (Câu 76 - 100) ===
  { question: "Khi thấy thông tin sai lệch về chủ quyền biển đảo trên mạng xã hội, học sinh cần làm gì?", options: ["Báo cáo vi phạm, không chia sẻ và sử dụng tư liệu chính thống để phản bác", "Chia sẻ ngay để mọi người vào tranh cãi", "Bình luận bằng những lời lẽ thô tục", "Bỏ qua không quan tâm"], answer: 0 },
  { question: "Hành động nào thể hiện lòng yêu nước và ý thức bảo vệ biển đảo đúng đắn của học sinh?", options: ["Tích cực học tập lịch sử địa lý, lan tỏa thông tin đúng sự thật và tham gia các cuộc thi tìm hiểu biển đảo", "Kích động bạo lực trên không gian mạng", "Chỉ quan tâm đến biển đảo khi có bài kiểm tra", "Nghe theo các nguồn tin chưa kiểm chứng trên mạng"], answer: 0 },
  { question: "Trang web chính thống của cơ quan nào cung cấp thông tin chuẩn xác nhất về biên giới lãnh thổ Việt Nam?", options: ["Ủy ban Biên giới quốc gia - Bộ Ngoại giao Việt Nam", "Các trang blog cá nhân tự phát", "Các diễn đàn trò chơi trực tuyến", "Các hội nhóm giải trí trên mạng xã hội"], answer: 0 },
  { question: "Học sinh có thể đóng góp gì cho chiến dịch 'Trường Sa xanh'?", options: ["Lan tỏa thông điệp tiết kiệm nước, bảo vệ môi trường và quyên góp cây xanh gửi tặng chiến sĩ", "Gửi đồ nhựa dùng một lần ra đảo", "Viết bài chê bai môi trường biển", "Không làm gì vì khoảng cách quá xa"], answer: 0 },
  { question: "Khẩu hiệu hành động ý nghĩa khẳng định tinh thần của thế hệ trẻ với biển đảo Tổ quốc là gì?", options: ["Cả nước vì Trường Sa, Trường Sa vì cả nước", "Trường Sa là nơi du lịch giải trí", "Biển đảo là tài nguyên khai thác vô tận", "Chỉ bảo vệ đất liền phía trong bờ"], answer: 0 },
  { question: "Hành động của du khách nhặt san hô sống mang về đất liền làm kỷ niệm tác hại như thế nào?", options: ["Tàn phá rạn san hô, làm hủy hoại hệ sinh thái và môi trường sống của sinh vật biển", "Giúp san hô phát triển nhanh hơn", "Làm đẹp cho đất liền", "Không gây ảnh hưởng gì"], answer: 0 },
  { question: "Lực lượng nòng cốt bảo vệ vững chắc chủ quyền không gian biển, hải đảo và thềm lục địa là lực lượng nào?", options: ["Hải quân Nhân dân Việt Nam", "Lực lượng Cảnh sát giao thông", "Lực lượng Kiểm lâm", "Lực lượng Dân quân tự vệ đất liền"], answer: 0 },
  { question: "Ngày truyền thống của Lực lượng Hải quân Nhân dân Việt Nam là ngày nào?", options: ["Ngày 7 tháng 5 năm 1955", "Ngày 22 tháng 12 năm 1944", "Ngày 19 tháng 8 năm 1945", "Ngày 30 tháng 4 năm 1975"], answer: 0 },
  { question: "Công trình tâm linh, văn hóa ý nghĩa nào đã được xây dựng và tôn tạo khang trang trên các đảo nổi ở Trường Sa?", options: ["Các ngôi chùa Việt và đài tưởng niệm các anh hùng liệt sĩ", "Các công viên giải trí cảm giác mạnh", "Các nhà máy công nghiệp lớn", "Sân vận động thể thao quốc tế"], answer: 0 },
  { question: "Người dân định cư sinh sống tại các xã đảo thuộc huyện Trường Sa đóng vai trò gì?", options: ["Là những cột mốc sống khẳng định chủ quyền, phát triển kinh tế xã hội biển đảo", "Chỉ ra đảo sinh sống tạm thời vào mùa hè", "Làm nhiệm vụ đánh bắt cá thuê cho nước ngoài", "Không có vai trò gì về chủ quyền"], answer: 0 },
  { question: "Trường học trên các đảo như Trường Sa Lớn, Sinh Tồn phục vụ cho đối tượng nào?", options: ["Con em của các hộ dân sinh sống trên đảo", "Chỉ dành cho các chiến sĩ học tập", "Phục vụ học sinh từ đất liền ra du học", "Không có học sinh học tập"], answer: 0 },
  { question: "Hành động xả rác thải nhựa xuống biển gây hậu quả nghiêm trọng gì?", options: ["Làm ô nhiễm nguồn nước, các loài sinh vật biển ăn phải dẫn đến tử vong", "Giúp biển sạch hơn", "Làm tăng lượng hải sản đánh bắt", "Nhựa tự phân hủy ngay trong nước biển"], answer: 0 },
  { question: "Tại sao nói mỗi học sinh trên không gian mạng cần là một 'đại sứ tuyên truyền' biển đảo?", options: ["Vì học sinh có thể dùng sức trẻ và công nghệ để lan tỏa tri thức đúng đắn đến bạn bè quốc tế", "Để tăng lượt theo dõi và bán hàng trực tuyến", "Để thay thế công việc của các cơ quan ngoại giao", "Để tranh cãi với người nước ngoài"], answer: 0 },
  { question: "Bài thơ nổi tiếng nào của Lý Thường Kiệt được coi là bản Tuyên ngôn Độc lập đầu tiên khẳng định chủ quyền lãnh thổ?", options: ["Nam quốc sơn hà", "Bình Ngô đại cáo", "Hịch tướng sĩ", "Tuyên ngôn Độc lập"], answer: 0 },
  { question: "Cột mốc chủ quyền trên các đảo ở Trường Sa thường khắc những thông tin cốt lõi nào?", options: ["Tên quốc gia, tên đảo, kinh độ và vĩ độ địa lý chính xác", "Tên của người xây dựng cột mốc", "Danh sách các loại hải sản trên đảo", "Bản đồ toàn thế giới"], answer: 0 },
  { question: "Việc gửi những bức thư, cánh thiệp chúc Tết ra Trường Sa vào dịp cuối năm có ý nghĩa gì?", options: ["Cổ vũ tinh thần, mang hơi ấm đất liền sưởi ấm ý chí các chiến sĩ nơi đầu sóng ngọn gió", "Là thủ tục bắt buộc hàng năm", "Để kiểm tra hệ thống bưu điện biển đảo", "Để gửi quà tặng thương mại"], answer: 0 },
  { question: "Bài hát nổi tiếng 'Gần lắm Trường Sa' của nhạc sĩ Hình Phước Long thể hiện tình cảm gì?", options: ["Tình cảm gắn kết khăng khít, không khoảng cách giữa đất liền và đảo xa", "Ca ngợi vẻ đẹp của vùng núi cao", "Miêu tả cuộc sống của người nông dân", "Lời tạm biệt bãi biển du lịch"], answer: 0 },
  { question: "Tổ chức nào quản lý và vận hành các ngọn hải đăng tại quần đảo Trường Sa?", options: ["Tổng công ty Bảo đảm an toàn hàng hải miền Nam", "Cục Hàng không dân dụng Việt Nam", "Các công ty du lịch tư nhân", "Chính quyền địa phương đất liền cấp xã"], answer: 0 },
  { question: "Quốc gia ven biển có nghĩa vụ gì đối với các tàu thuyền bị gặp nạn trên vùng biển quản lý của mình?", options: ["Kịp thời cứu hộ, cứu nạn, nhân đạo không phân biệt quốc tịch tàu", "Thu phí cứu hộ thật cao mới cứu", "Bỏ mặc không can thiệp", "Tịch thu toàn bộ tài sản trên tàu"], answer: 0 },
  { question: "Các chiến sĩ hải quân trên đảo ngoài nhiệm vụ huấn luyện còn giúp đỡ ngư dân những việc gì?", options: ["Cung cấp nước ngọt, hỗ trợ y tế cấp cứu và làm nơi tránh trú bão an toàn", "Thuê ngư dân đánh cá cho quân đội", "Bán nhu yếu phẩm lấy lời cao", "Kiểm tra và thu giữ cá của ngư dân"], answer: 0 },
  { question: "Triển lãm bản đồ và trưng bày tư liệu 'Hoàng Sa, Trường Sa của Việt Nam - Những bằng chứng lịch sử và pháp lý' có mục đích gì?", options: ["Minh bạch thông tin, giáo dục truyền thống yêu nước và khẳng định bằng chứng đanh thép với quốc tế", "Để bán vé thu tiền quảng cáo", "Để trưng bày nghệ thuật hội họa đơn thuần", "Chỉ tổ chức dành riêng cho các nhà khoa học"], answer: 0 },
  { question: "Khi nghe các thông tin xuyên tạc về biên giới biển đảo từ các nguồn không chính thống, thái độ đúng đắn là gì?", options: ["Cảnh giác, tuyệt đối không tin theo, không bình luận kích động và báo cáo tài khoản xấu", "Tin theo và chia sẻ cho bạn bè cùng biết", "Lập nhóm tranh cãi gay gắt bạo lực", "Tán thành ý kiến đó"], answer: 0 },
  { question: "Ngày Đại dương Thế giới được tổ chức hàng năm vào ngày nào nhằm nâng cao ý thức bảo vệ biển?", options: ["Ngày 8 tháng 6", "Chủ nhật đầu tiên của tháng 5", "Ngày 2 tháng 9", "Ngày 1 tháng 1"], answer: 0 },
  { question: "Học sinh có thể tìm đọc các bài viết phân tích sâu sắc về pháp lý Biển Đông trên tạp chí chuyên ngành nào?", options: ["Tạp chí Nghiên cứu Quốc tế hoặc Nghiên cứu Biển đảo", "Các trang truyện tranh giải trí", "Tạp chí thời trang quốc tế", "Các diễn đàn công nghệ máy tính"], answer: 0 },
  { question: "Lòng tự hào và trách nhiệm bảo vệ chủ quyền biển đảo cần được học sinh nuôi dưỡng từ đâu?", options: ["Từ những hành động nhỏ trong học tập, rèn luyện đạo đức và ý thức trách nhiệm hàng ngày với Tổ quốc", "Chỉ cần hô khẩu hiệu trên mạng", "Khi nào ra đảo mới cần nuôi dưỡng", "Khi có yêu cầu từ nhà trường"], answer: 0 ]
];

const key = "islandQuizViet";
let idx = 0,
  score = 0,
  picks = [],
  player = "",
  timeLeft = 120,
  clock = null,
  quizQuestions = [];

const remoteLeaderboardUrl = "https://hoangsa-truongsa.onrender.com/leaderboard"; 

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
    if (i === 0) { rankClass = "rank-1"; medal = "🥇 1"; }
    else if (i === 1) { rankClass = "rank-2"; medal = "🥈 2"; }
    else if (i === 2) { rankClass = "rank-3"; medal = "🥉 3"; }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="${rankClass}">${medal}</td>
      <td style="font-weight: 600;">${item.name}</td>
      <td><span style="background: #e3f2fd; padding: 5px 12px; border-radius: 10px; color: #0077cc; font-weight: bold;">${item.point} / 10</span></td>
      <td>${item.time}</td>
    `;
    leaderboardBody.appendChild(tr);
  });
}

async function getBoard() { 
  const localList = readLocalBoard();
  if (!isRemoteEnabled()) {
    setLeaderboardStatus("Leaderboard hiện đang hiển thị dữ liệu local.", "warning");
    return localList;
  }
  try {
    setLeaderboardStatus("Đang tải bảng vàng từ hệ thống...", "info");
    const list = await fetchRemoteBoard();
    if (list.length) {
      setLeaderboardStatus("Bảng xếp hạng đã đồng bộ thành công!", "success");
      return list;
    }
    return localList;
  } catch (error) {
    setLeaderboardStatus(`Lỗi kết nối máy chủ leaderboard.`, "error");
    return localList;
  }
}

async function saveBoard(name, point) { 
  saveLocalBoard(name, point);
  renderLocalBoard();
  if (!isRemoteEnabled()) return;
  try {
    await saveRemoteScore(name, point);
    await renderBoard();
  } catch (error) {
    console.error("Error saving to remote:", error);
  }
}

async function renderBoard() { 
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
    if (i === 0) { rankClass = "rank-1"; medal = "🥇 1"; }
    else if (i === 1) { rankClass = "rank-2"; medal = "🥈 2"; }
    else if (i === 2) { rankClass = "rank-3"; medal = "🥉 3"; }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="${rankClass}">${medal}</td>
      <td style="font-weight: 600;">${item.name}</td>
      <td><span style="background: #e3f2fd; padding: 5px 12px; border-radius: 10px; color: #0077cc; font-weight: bold;">${item.point} / 10</span></td>
      <td>${item.time}</td>
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
  clearInterval(clock);
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let cheer =
    score >= quizQuestions.length * 0.8
      ? "Xuất sắc! Bạn thực sự là một Đại sứ Tri thức Biển đảo."
      : score >= quizQuestions.length * 0.5
        ? "Rất tốt! Hãy tiếp tục lan tỏa tinh thần yêu nước nhé."
        : "Không sao cả, tìm hiểu thêm tư liệu lịch sử chính thống và thử lại nhé!";
  resultText.innerHTML = `<strong>${player}</strong> thân mến,<br>Bạn đã trả lời đúng <strong>${score}/10</strong> câu hỏi kiểm tra.<br><br><i>${cheer}</i>`;

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
  const name = playerName.value.trim();
  if (!name) return alert("Cho mình biết tên bạn trước khi bắt đầu nhé!");
  player = name;
  idx = 0;
  score = 0;
  picks = [];
  // Hệ thống tự động xáo trộn mảng 100 câu hỏi, sau đó bốc lấy đúng 10 câu ngẫu nhiên làm đề kiểm tra
  quizQuestions = shuffleArray(questions).map(prepareQuestion).slice(0, 10);
  timeLeft = 120;
  showName.textContent = player;
  timer.textContent = timeLeft;
  startBtn.disabled = true;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
  clock = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0) finishQuiz();
  }, 1000);
};

nextBtn.onclick = () => { 
  idx++;
  if (idx >= quizQuestions.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
};

retryBtn.onclick = () => { 
  clearInterval(clock);
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  startBtn.disabled = false;
};

(async () => { 
  renderLocalBoard();
  await renderBoard();
})();