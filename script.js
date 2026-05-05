const questions = [
  { question: "Đội Hoàng Sa của Việt Nam được ghi nhận rõ từ khoảng thời gian nào?", options: ["Thế kỷ XVII", "Thế kỷ XX", "Sau năm 1975", "Thế kỷ XXI"], answer: 0 },
  { question: "Quần đảo nào nằm ở khu vực bắc Biển Đông?", options: ["Trường Sa", "Hoàng Sa", "Phú Quốc", "Côn Đảo"], answer: 1 },
  { question: "Đội Hoàng Sa, Bắc Hải có nhiệm vụ chính nào trong lịch sử?", options: ["Quản lý, khai thác và thực thi chủ quyền trên biển đảo", "Chỉ làm du lịch biển", "Chỉ nghiên cứu nông nghiệp", "Không liên quan đến biển đảo"], answer: 0 },
  { question: "Đặc điểm địa lý nổi bật của Trường Sa là gì?", options: ["Chỉ có một đảo lớn", "Gồm nhiều đảo, bãi đá và bãi ngầm", "Nằm trên đất liền", "Không có sinh vật biển"], answer: 1 },
  { question: "Quá trình hình thành đảo san hô thường gắn với yếu tố nào?", options: ["Sinh trưởng san hô và bồi tụ trầm tích", "Mưa đá trên núi", "Đốt rừng", "Băng hà lục địa"], answer: 0 },
  { question: "Hành động nào giúp bảo vệ chủ quyền trên không gian mạng?", options: ["Chia sẻ ngay khi chưa kiểm chứng", "Kiểm chứng nguồn tin trước khi chia sẻ", "Đăng bài kích động", "Không cần quan tâm nguồn tin"], answer: 1 },
  { question: "Trường Sa có đặc điểm nổi bật nào?", options: ["Chỉ có một đảo lớn", "Gồm nhiều đảo, bãi đá, bãi ngầm", "Nằm trên đất liền", "Không có giá trị sinh thái"], answer: 1 },
  { question: "Hoàng Sa và Trường Sa có ý nghĩa gì đối với Việt Nam?", options: ["Quan trọng về chủ quyền, kinh tế biển và an ninh quốc gia", "Chỉ để du lịch", "Không có vai trò nào", "Chỉ có ý nghĩa thời tiết"], answer: 0 },
  { question: "Mục tiêu chính của website này là gì?", options: ["Chỉ để giải trí", "Giúp học sinh hiểu lịch sử, địa lý và ý thức bảo vệ chủ quyền", "Bán sản phẩm du lịch", "Thay sách giáo khoa"], answer: 1 },
  { question: "Thông điệp đúng khi học về biển đảo là gì?", options: ["Hiểu đúng - Chia sẻ đúng - Hành động đúng", "Nghe gì chia sẻ nấy", "Chỉ học khi kiểm tra", "Không cần quan tâm chủ quyền"], answer: 0 },
  { question: "Quần đảo Hoàng Sa gần thành phố nào của Việt Nam?", options: ["Đà Nẵng", "Hà Nội", "Hồ Chí Minh", "Cần Thơ"], answer: 0 },
  { question: "Đảo nào thường được nhắc đến trong Trường Sa?", options: ["Song Tử Tây", "Phú Quốc", "Côn Đảo", "Bạch Long Vĩ"], answer: 0 },
  { question: "Hệ sinh thái nào rất quan trọng ở Hoàng Sa và Trường Sa?", options: ["San hô", "Rừng mưa", "Đồng cỏ", "Rừng ngập mặn"], answer: 0 },
  { question: "Khi nghe tin không rõ nguồn, bạn nên làm gì?", options: ["Kiểm chứng với nguồn tin chính thống", "Chia sẻ ngay", "Ignore tất cả", "Tin luôn"], answer: 0 },
  { question: "Tạm dịch đúng nhất: 'Chủ quyền biển đảo' là gì?", options: ["Quyền kiểm soát vùng biển", "Quyền dừng đi biển", "Quyền săn cá", "Quyền cấm tàu"], answer: 0 },
  { question: "Động tác nào giúp gìn giữ môi trường biển?", options: ["Không xả rác ra biển", "Vứt chai xuống cát", "Đốt rác trên bờ", "Lãng phí nước"], answer: 0 },
  { question: "Ai là người giữ gìn chủ quyền trên biển?", options: ["Hải quân và người dân", "Chỉ du khách", "Chỉ chính phủ nước ngoài", "Chỉ nhà khoa học"], answer: 0 },
  { question: "Công việc nào giúp bảo vệ vùng biển?", options: ["Giữ gìn thông tin chính xác", "Lan truyền tin sai", "Làm ngơ vấn đề", "Phá hoại tài nguyên"], answer: 0 },
  { question: "Vì sao san hô cần được bảo vệ?", options: ["Là nơi cư trú của nhiều loài biển", "Không có ích lợi nào", "Chỉ đẹp cho du lịch", "Gây cản trở tàu"], answer: 0 },
  { question: "Nước biển ở Hoàng Sa, Trường Sa thuộc đại dương nào?", options: ["Thái Bình Dương", "Ấn Độ Dương", "Đại Tây Dương", "Nam Băng Dương"], answer: 0 },
  { question: "Điều gì giúp ta giữ bình yên cho ngư dân?", options: ["Tôn trọng chủ quyền và hỗ trợ thông tin", "Bỏ qua tin giả", "Quan tâm riêng mình", "Để thông tin sai lan truyền"], answer: 0 },
  { question: "Biển Đông có tầm quan trọng như thế nào đối với Việt Nam?", options: ["Kinh tế, an ninh và môi trường", "Chỉ dùng để giải trí", "Không quan trọng", "Chỉ thuộc về nước khác"], answer: 0 },
  { question: "Cách tốt nhất để học về biển đảo là gì?", options: ["Tìm hiểu từ nguồn chính thống", "Tin lời đồn đại", "Chỉ đọc một lần", "Không cần hỏi"], answer: 0 },
  { question: "Loại hình nào thường xuất hiện quanh đảo san hô?", options: ["Rạn san hô", "Sa mạc", "Rừng thông", "Hoang mạc"], answer: 0 },
  { question: "Công cụ nào giúp nghiên cứu biển đảo?", options: ["Bản đồ và vệ tinh", "Loa phóng thanh", "Ô tô đua", "Xe tăng"], answer: 0 },
  { question: "Đâu là hành vi yêu nước đúng?", options: ["Giữ gìn thông tin chính xác", "Chia sẻ tin giả", "Gây hấn trên mạng", "Thờ ơ với biển"], answer: 0 },
  { question: "Hãy chọn một hành động bảo vệ môi trường biển.", options: ["Dọn rác sau chuyến đi", "Chuẩn bị túi nhựa", "Vứt dầu nhớt xuống biển", "Phá san hô"], answer: 0 },
  { question: "Tại sao Hoàng Sa, Trường Sa luôn được nhắc đến?", options: ["Vì giá trị chủ quyền và sinh học", "Vì là nơi hoang vu", "Vì không có người ở", "Vì chỉ là truyền thuyết"], answer: 0 },
  { question: "Loại động vật nào thường sống trong rạn san hô?", options: ["Cá và động vật biển", "Sư tử", "Hươu cao cổ", "Chim cánh cụt"], answer: 0 },
  { question: "Dấu hiệu nào cho thấy biển sạch?", options: ["Nước trong và san hô khỏe", "Rác nhiều", "Nước đục và mùi hôi", "Không có hành động"], answer: 0 },
  { question: "Nếu muốn kiểm chứng tin tức về chủ quyền, bạn sẽ chọn gì?", options: ["Nguồn tin chính thức", "MXH trôi nổi", "Lời đồn chưa kiểm chứng", "Bình luận cá nhân"], answer: 0 },
  { question: "Đâu là nhiệm vụ của học sinh đối với biển đảo?", options: ["Tìm hiểu và chia sẻ chính xác", "Phớt lờ chủ quyền", "Tin tin sai", "Chỉ quan tâm giải trí"], answer: 0 },
  { question: "Biển Đông có hiện tượng thời tiết nào thường gặp?", options: ["Bão và gió mùa", "Tuyết rơi", "Địa chấn đất liền", "Nắng nóng nội địa"], answer: 0 },
  { question: "Sự khác biệt lớn nhất giữa Hoàng Sa và Trường Sa là gì?", options: ["Vị trí địa lý và cấu tạo đảo", "Cùng một đảo", "Nằm trên đất liền", "Không có gì khác biệt"], answer: 1 },
  { question: "Trong các hành động sau, hành động nào giúp tăng cường chủ quyền?", options: ["Học tập và lan truyền thông tin đúng", "Lan truyền tin giả", "Bỏ qua tin chính thống", "Phá hoại môi trường"], answer: 0 },
  { question: "Đảo san hô thường hình thành từ gì?", options: ["Xác san hô và bột cát", "Đất sét", "Núi lửa lớn", "Băng đá"], answer: 0 },
  { question: "Cần làm gì nếu gặp tin sai về biển đảo?", options: ["Không chia sẻ và báo tin đúng", "Chia sẻ ngay để giải quyết", "Tin ngay cả khi không rõ", "Bỏ qua hoàn toàn"], answer: 0 },
  { question: "Đâu là lợi ích của việc giữ gìn san hô?", options: ["Bảo vệ đa dạng sinh học và ngư trường", "Tăng tốc tàu thuyền", "Làm đẹp bờ biển", "Không có lợi ích"], answer: 0 },
  { question: "Quyền chủ quyền biển đảo được xác lập bởi ai?", options: ["Nhà nước Việt Nam và pháp luật quốc tế", "Người dân duy nhất", "Nước khác", "Ai cũng có thể"], answer: 0 },
  { question: "Biển Động giúp gì cho Việt Nam?", options: ["Kinh tế, hậu cần, an ninh", "Chỉ giúp du lịch", "Chỉ tạo sóng", "Không có vai trò gì"], answer: 0 },
  { question: "Ai cần tham gia bảo vệ biển đảo?", options: ["Mọi người dân và thế hệ trẻ", "Chỉ người lớn", "Chỉ nhà khoa học", "Chỉ chính phủ"], answer: 0 },
  { question: "Ở miền Trung, đảo Hoàng Sa gần nơi nào nhất?", options: ["Đà Nẵng", "Quảng Ninh", "Cần Thơ", "Bình Dương"], answer: 0 },
  { question: "Khi nào nên dùng nguồn tin chính thống?", options: ["Khi học về lịch sử và biển đảo", "Khi muốn lan truyền tin đồn", "Khi không quan tâm", "Khi tin sai"], answer: 0 },
  { question: "Đâu là cách tốt nhất để giữ gìn môi trường biển khi đi du lịch?", options: ["Không xả rác và giữ gìn cảnh quan", "Làm ồn ào", "Thả rác xuống biển", "Phá hoại san hô"], answer: 0 },
  { question: "Tại sao Hoàng Sa, Trường Sa quan trọng với an ninh quốc gia?", options: ["Nằm ở vị trí chiến lược và kiểm soát biển", "Chỉ là hòn đảo nhỏ", "Không liên quan đến an ninh", "Nước khác sở hữu"], answer: 0 },
  { question: "Biển Đông có thể giúp nước ta phát triển gì?", options: ["Ngư nghiệp và giao thông hàng hải", "Khai thác than", "Trồng lúa", "Chăn nuôi bò"], answer: 0 },
  { question: "Thách thức lớn nhất của bảo tồn san hô là gì?", options: ["Ô nhiễm và hoạt động khai thác", "Thiếu khách du lịch", "Mưa quá nhiều", "Quá lạnh"], answer: 0 },
  { question: "Khi học về biển đảo, điều gì không nên làm?", options: ["Tin tin chưa kiểm chứng", "Tìm hiểu từ sách vở", "Trao đổi với bạn bè", "Nghiên cứu lịch sử"], answer: 0 },
  { question: "Nước nào gần Việt Nam nhất trong Biển Đông?", options: ["Trung Quốc", "Canada", "Brazil", "Ấn Độ"], answer: 0 },
  { question: "Tại sao học sinh nên biết về Trường Sa?", options: ["Để nâng cao ý thức chủ quyền", "Để giải trí", "Để làm bài tập về nhà", "Không cần biết"], answer: 0 },
  { question: "Hành động nào sau đây giúp bảo vệ biển?", options: ["Không vứt túi nilon xuống biển", "Đổ dầu nhớt vào nước", "Hạ rừng ven biển", "Tạo ô nhiễm"], answer: 0 },
  { question: "Đâu là dấu hiệu của một câu trả lời chính thống?", options: ["Có nguồn tin rõ ràng", "Không có tên tác giả", "Lời hứa quá tuyệt vời", "Lan truyền nhanh chóng"], answer: 0 },
  { question: "Thứ tự nào đúng cho việc xử lý tin giả?", options: ["Kiểm chứng - không chia sẻ - báo tin đúng", "Chia sẻ ngay - kiểm chứng sau", "Phớt lờ tất cả", "Tin lời người khác"], answer: 0 },
  { question: "Đâu không phải là nguồn tài nguyên của biển?", options: ["Cát thô trên đường cao tốc", "Cá tôm", "San hô", "Tài nguyên du lịch"], answer: 0 },
  { question: "Loại rạn san hô nào phổ biến ở Trường Sa?", options: ["Rạn san hô lót", "Rạn đá sa thạch", "Rạn băng", "Rạn cát nội địa"], answer: 0 },
  { question: "Biển Đông giúp Việt Nam kết nối với quốc gia nào?", options: ["Nhật Bản", "Ba Lan", "Argentina", "Ai Cập"], answer: 0 },
  { question: "Đâu là trách nhiệm của tuổi trẻ với biển đảo?", options: ["Hiểu và truyền tải đúng sự thật", "Bỏ mặc vấn đề", "Nghe lời người khác mà không suy nghĩ", "Làm sai sự thật"], answer: 0 },
  { question: "Những ai thường tuần tra bảo vệ chủ quyền biển đảo?", options: ["Hải quân và Cảnh sát biển", "Người làm du lịch", "Họa sĩ", "Thợ chụp ảnh"], answer: 0 },
  { question: "Mục đích của việc tìm hiểu lịch sử Hoàng Sa là gì?", options: ["Khẳng định chủ quyền vững chắc", "Chỉ để giải trí", "Chỉ để làm bài tập", "Không cần học"], answer: 0 },
  { question: "Đâu là biểu tượng cho lòng tự hào về biển đảo?", options: ["Cờ Tổ quốc tung bay trên đảo", "Áo phao du lịch", "Bến tàu chật ních", "Thuyền máy"], answer: 0 },
  { question: "Thứ tự nào đúng để chơi quiz 100 câu?", options: ["Trộn câu và trộn đáp án", "Luôn giữ đúng thứ tự cũ", "Chỉ trộn đáp án", "Không trộn câu"], answer: 0 },
  { question: "Hành động nào phản ánh bảo vệ chủ quyền trên mạng?", options: ["Chia sẻ nội dung chính xác", "Chia sẻ tin đồn", "Bỏ ngoài tai", "Nói xấu người khác"], answer: 0 },
  { question: "Cách nào tốt nhất để học về Hoàng Sa?", options: ["Tìm hiểu sử sách và nguồn tin chính xác", "Tin lời đồn đại", "Chỉ xem phim", "Nghe ai đó nói"], answer: 0 },
  { question: "Tài nguyên biển nào nên được bảo tồn?", options: ["San hô và nguồn cá", "Rác thải nhựa", "Nước đục", "Dầu thải"], answer: 0 },
  { question: "Mục tiêu của việc tạo bảng xếp hạng quiz là gì?", options: ["Kích thích học và thi đua lành mạnh", "So sánh người với người", "Chỉ để khoe điểm", "Phá hoại niềm vui"], answer: 0 },
  { question: "Trong quiz, điều gì được trộn ngẫu nhiên?", options: ["Thứ tự câu và thứ tự đáp án", "Chỉ thứ tự câu", "Chỉ thứ tự đáp án", "Không trộn gì"], answer: 0 },
  { question: "Đâu là tiêu chuẩn của một câu hỏi tốt?", options: ["Rõ ràng và có đáp án chính xác", "Mơ hồ và khó hiểu", "Lặp lại nhiều lần", "Không liên quan"], answer: 0 },
  { question: "Nên làm gì nếu câu hỏi khó?", options: ["Đọc kỹ và loại trừ đáp án sai", "Chọn tùy ý", "Bỏ qua", "Không trả lời"], answer: 0 },
  { question: "Mục đích của việc trộn đáp án là gì?", options: ["Giảm khả năng ghi nhớ vị trí đáp án", "Làm khó cho người chơi", "Phá quiz", "Không có lý do"], answer: 0 },
  { question: "Còn được gọi là 'đấu trường' biển đảo nhất?", options: ["Hoàng Sa và Trường Sa", "Núi Everest", "Đảo Phú Quốc", "Sông Mekong"], answer: 0 },
  { question: "Loại hình lịch sử nào gắn với biển đảo?", options: ["Thủy quân và hải đội", "Võ sĩ đạo", "Chiến tranh xe tank", "Bóng rổ"], answer: 0 },
  { question: "Cách nào giúp trẻ em yêu biển đảo hơn?", options: ["Học qua câu chuyện và quiz", "Bỏ qua sách sử", "Chỉ xem phim", "Tập trung vào game"], answer: 0 },
  { question: "Một thông điệp đúng về chủ quyền là gì?", options: ["Giữ gìn, tuyên truyền và hành động đúng", "Im lặng trước tin giả", "Tin lời đối thủ", "Bỏ mặc"], answer: 0 },
  { question: "Đâu không phải là hành động giữ gìn môi trường biển?", options: ["Thả rác xuống biển", "Dọn dẹp bãi biển", "Giảm sử dụng nhựa", "Tuyên truyền đúng"], answer: 0 },
  { question: "Ai có thể giúp chia sẻ thông tin đúng về biển đảo?", options: ["Mọi người dân và học sinh", "Chỉ người lớn tuổi", "Chỉ doanh nhân", "Chỉ vận động viên"], answer: 0 },
  { question: "Đâu là công dụng của rạn san hô?", options: ["Bảo vệ bờ biển và tạo nơi sống cho biển", "Chỉ để ngắm", "Làm tắc đường", "Tạo sóng lớn"], answer: 0 },
  { question: "Khi chơi quiz, bạn phải làm gì đầu tiên?", options: ["Nhập tên và bắt đầu", "Bỏ qua tên", "Chờ người khác", "Đọc nội quy"], answer: 0 },
  { question: "Thứ tự câu hỏi trong quiz nên như thế nào?", options: ["Ngẫu nhiên để mỗi lần khác nhau", "Luôn cố định", "Cùng đề xuất với người khác", "Không cần trộn"], answer: 0 },
  { question: "Trong các câu sau, câu nào là việc làm đúng?", options: ["Thực hiện hành động bảo vệ biển đảo", "Bỏ mặc tin giả", "Phá hoại san hô", "Lan truyền tin sai"], answer: 0 },
  { question: "Ai đang gìn giữ biển đảo mỗi ngày?", options: ["Ngư dân và lực lượng biển", "Khách du lịch", "Thợ chụp ảnh", "Người bay dù"], answer: 0 },
  { question: "Câu nào giúp thể hiện lòng yêu nước?", options: ["Hiểu đúng và chia sẻ đúng thông tin", "Chỉ nói trên mạng", "Tin vào mọi thông tin", "Phớt lờ lịch sử"], answer: 0 },
  { question: "Biển đảo cần được bảo vệ vì điều gì?", options: ["Giá trị sinh học và chủ quyền quốc gia", "Không có lý do", "Chỉ để thẩm mỹ", "Chỉ cho người giàu"], answer: 0 },
  { question: "Sự khác biệt giữa câu hỏi và đáp án qua quiz là gì?", options: ["Câu hỏi được trộn và đáp án được trộn", "Không có sự khác biệt", "Chỉ có đáp án giống nhau", "Câu hỏi bị ẩn"], answer: 0 },
  { question: "Màu nào thường dùng để biểu thị biển?", options: ["Xanh dương", "Đỏ", "Vàng", "Đen"], answer: 0 },
  { question: "Công việc nào sau đây không giúp bảo vệ biển đảo?", options: ["Xả rác xuống biển", "Thu gom rác", "Không sử dụng đồ nhựa một lần", "Kêu gọi bạn bè giữ gìn"], answer: 0 },
  { question: "Khi lan truyền thông tin về biển đảo, bạn nên chọn gì?", options: ["Nguồn chính thống", "Tin đồn", "Lời đàm tiếu", "Bình luận vô căn cứ"], answer: 0 },
  { question: "Nơi nào không nằm trong quần đảo Trường Sa?", options: ["Hòn Khoai", "Đảo Trường Sa Lớn", "Đảo An Bang", "Đảo Song Tử Tây"], answer: 0 },
  { question: "Lực lượng nào thường xuất hiện ở Hoàng Sa?", options: ["Cảnh sát biển", "Công an giao thông", "Biệt đội cứu hỏa", "Bộ đội lái xe"], answer: 0 },
  { question: "Công việc nào giúp bảo vệ thông tin về chủ quyền?", options: ["Kiểm chứng nguồn tin", "Phát tán tin giả", "Bóp méo sự thật", "Bỏ qua nguồn tin"], answer: 0 },
  { question: "Từ nào không đúng khi nói về biển đảo?", options: ["Nội địa", "Chủ quyền", "Hải đảo", "Quần đảo"], answer: 0 },
  { question: "Giá trị nào giúp biển đảo trở nên thiêng liêng?", options: ["Chủ quyền và lịch sử", "Thời tiết xấu", "Đường sá", "Thương mại"], answer: 0 },
  { question: "Đâu là biểu hiện của môi trường biển khỏe?", options: ["Nước trong, cá nhiều", "Nước đục, mùi hôi", "Rác nổi đầy", "Khói bụi"], answer: 0 },
  { question: "Trong giáo dục, biển đảo thường được giảng dạy như thế nào?", options: ["Nguồn sử, địa lý và chủ quyền", "Kinh tế thị trường", "Văn hóa pop", "Thể thao"], answer: 0 },
  { question: "Câu nào không đúng về bảo tồn san hô?", options: ["Phá hoại san hô là tốt", "Giảm khai thác", "Giữ nước sạch", "Hạn chế du lịch xâm hại"], answer: 0 },
  { question: "Nguồn tin nào đáng tin cậy nhất?", options: ["Báo chí chính thống", "MXH vô danh", "Tin đồn", "Lời truyền miệng"], answer: 0 },
  { question: "Hành động nào giúp nâng cao ý thức về biển đảo?", options: ["Tổ chức học tập và chia sẻ đúng", "Phát tán tin sai", "Bỏ qua lịch sử", "Chỉ nói mà không hành động"], answer: 0 },
  { question: "Thứ tự trả lời nào giúp bạn đạt điểm tốt nhất?", options: ["Đọc kỹ đề và loại trừ đáp án sai", "Chọn nhanh theo cảm tính", "Đánh dấu tùy ý", "Không cần đọc"], answer: 0 },
  { question: "Mô tả nào đúng về quần đảo Trường Sa?", options: ["Gồm nhiều đảo, bãi đá và bãi ngầm", "Chỉ có một hòn đảo lớn", "Nằm trong đất liền", "Chỉ xuất hiện trên bản đồ cũ"], answer: 0 },
  { question: "Hành vi nào sau đây đúng về ứng xử trên mạng?", options: ["Không chia sẻ tin sai", "Chia sẻ nhanh tin giả", "Chỉ bình luận tiêu cực", "Bóp méo thông tin"], answer: 0 }
];

const key = "islandQuizViet";
let idx = 0,
  score = 0,
  picks = [],
  player = "",
  timeLeft = 120,
  clock = null,
  quizQuestions = [];

const remoteLeaderboardUrl = "https://hoangsa-truongsa.onrender.com/leaderboard"; // Set this to your deployed backend URL after deploy, e.g. https://your-app.onrender.com/leaderboard

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
      ? "Đỉnh quá! Bạn thực sự là một người con yêu biển đảo."
      : score >= quizQuestions.length * 0.5
        ? "Làm tốt lắm! Hãy tiếp tục phát huy nhé."
        : "Không sao cả, mỗi lần chơi là một lần học mà!";
  resultText.innerHTML = `<strong>${player}</strong> thân mến,<br>Bạn đã chinh phục được <strong>${score}/10</strong> câu hỏi.<br><br><i>${cheer}</i>`;

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

// Initialize leaderboard
(async () => {
  renderLocalBoard();
  setLeaderboardStatus("Đang kiểm tra kết nối server leaderboard...", "info");
  await renderBoard();
})();