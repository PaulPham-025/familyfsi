export const brand = {
  name: "FamilyFSI",
  title: "Chỉ số An toàn Tài chính Gia đình",
  fullName: "FamilyFSI",
  tagline: "Giúp gia đình trẻ nhìn rõ mức độ an toàn tài chính và biết nên ưu tiên điều gì trước.",
  audience:
    "Dành cho các gia đình trẻ có con nhỏ, thu nhập gia đình từ khoảng 30 triệu đồng mỗi tháng và muốn xây nền tài chính vững vàng hơn.",
  zaloLabel: "Nhắn Zalo",
  zaloUrl: "#",
  bookingLabel: "Đặt lịch trao đổi",
  bookingUrl: "#"
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  publicLabel: string;
};

type ArticleContent = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  fsiCta: string;
  body: string[];
};

const teamMembersData = [
  {
    id: "duy-pham",
    name: "Duy Phạm",
    role: "Lead advisor",
    publicLabel: "Duy Phạm"
  },
  {
    id: "advisor-1",
    name: "Thành viên tư vấn 1",
    role: "Family finance advisor",
    publicLabel: "Một tư vấn viên trong đội ngũ"
  },
  {
    id: "advisor-2",
    name: "Thành viên tư vấn 2",
    role: "Family finance advisor",
    publicLabel: "Một tư vấn viên trong đội ngũ"
  },
  {
    slug: "gia-dinh-minh-dang-o-vung-nao",
    title: "Gia đình mình đang ở vùng nào?",
    excerpt:
      "Một cách đọc kết quả FSI bình tĩnh hơn: điểm số không phải để phán xét, mà để biết gia đình đang mạnh ở đâu và nên ưu tiên điều gì trước.",
    readTime: "8 phút đọc",
    category: "FSI",
    fsiCta:
      "Nếu anh/chị muốn nhìn lại gia đình mình đang ở vùng nào một cách có hệ thống hơn, bài FSI sẽ là điểm bắt đầu nhẹ nhàng và rõ ràng.",
    body: [
      "Có những gia đình thu nhập đều, chi phí vẫn xoay xở được, nhưng trong lòng vẫn có cảm giác chưa thật sự yên tâm. Cũng có những gia đình đang thấy áp lực, nhưng không biết phần nào là vấn đề lớn nhất: dòng tiền, quỹ dự phòng, khoản vay, sức khỏe, học vấn cho con hay nghỉ hưu.",
      "FSI được tạo ra để giúp gia đình có một chiếc gương soi tổng thể. Điểm số không phải là điểm thi, cũng không phải nhãn dán nói rằng gia đình đang đúng hay sai. Điểm số chỉ giúp anh/chị biết hiện tại mình đang đứng ở vùng nào, từ đó chọn bước tiếp theo hợp lý hơn.",
      "Vùng Xanh cho thấy nền tảng tài chính tương đối vững vàng. Tuy vậy, Vùng Xanh không có nghĩa là không còn gì cần rà soát. Một gia đình vẫn có thể kiểm soát dòng tiền tốt nhưng chưa chuẩn bị đủ cho chi phí y tế lớn, bảo vệ thu nhập hoặc kế hoạch nghỉ hưu.",
      "Vùng Vàng thường là nhóm rất phổ biến ở các gia đình trẻ: nhiều thứ đang ổn, nhưng còn vài lớp đệm cần củng cố. Gia đình có thể đã có thu nhập tốt, có thói quen tích lũy, nhưng quỹ dự phòng chưa đủ sâu hoặc các mục tiêu dài hạn vẫn đang dùng chung một nguồn tiền.",
      "Vùng Cam cho thấy gia đình đã có một số nền tảng, nhưng đang tồn tại nhiều khoảng trống cần được nhìn kỹ hơn. Điều quan trọng là không vội lo lắng. Vùng Cam chỉ nói rằng nếu có một biến động lớn, gia đình có thể dễ bị động hơn mong muốn.",
      "Vùng Đỏ không phải là lời phán xét. Nhiều gia đình ở vùng này đơn giản là đang gánh nhiều trách nhiệm cùng lúc: con nhỏ, khoản vay, thu nhập chưa ổn định, người phụ thuộc hoặc chưa từng có dịp ngồi xuống nhìn lại bức tranh tài chính một cách có hệ thống.",
      "Sau khi biết mình ở vùng nào, câu hỏi quan trọng nhất không phải là làm sao để tăng điểm thật nhanh. Câu hỏi quan trọng hơn là: nếu chỉ chọn một đến hai việc trong 30-90 ngày tới, việc nào sẽ giúp gia đình bớt bị động nhất?",
      "Một số gia đình nên bắt đầu từ việc theo dõi chi tiêu. Một số gia đình nên tách quỹ dự phòng. Một số gia đình cần rà soát bảo vệ thu nhập của người tạo dòng tiền chính. Một số gia đình nên đặt tên lại cho các khoản tiết kiệm đang dùng chung một chỗ.",
      "Khi đọc FSI bằng tinh thần bình tĩnh, kết quả sẽ bớt giống một con số và giống một bản đồ hơn. Gia đình nhìn thấy điểm mạnh để duy trì, khoảng trống để củng cố, và bước nhỏ phù hợp để bắt đầu."
    ]
  },
  {
    slug: "tien-cua-gia-dinh-dang-duoc-chia-vai-nhu-the-nao",
    title: "Tiền của gia đình đang được chia vai như thế nào?",
    excerpt:
      "Nhiều gia đình không thiếu cố gắng, chỉ thiếu cách phân vai rõ cho tiền: chi tiêu hiện tại, dự phòng, bảo vệ và các mục tiêu tương lai.",
    readTime: "9 phút đọc",
    category: "Dòng tiền",
    fsiCta:
      "Nếu muốn biết dòng tiền gia đình đang được chia vai rõ hay vẫn còn dùng chung một túi, anh/chị có thể làm FSI để nhìn lại nhanh hơn.",
    body: [
      "Một gia đình có thể có thu nhập tốt nhưng vẫn thấy tiền lúc nào cũng căng. Lý do đôi khi không nằm ở việc chi tiêu quá hoang phí, mà nằm ở chỗ quá nhiều vai trò đang được đặt lên cùng một khoản tiền.",
      "Tiền lương tháng này vừa phải trả sinh hoạt, vừa trả khoản vay, vừa lo học phí, vừa mua sắm, vừa để dành cho con, vừa nghĩ đến nghỉ hưu, vừa làm quỹ dự phòng. Khi mọi thứ dùng chung một túi, gia đình rất khó biết tiền nào thật sự được dành cho việc gì.",
      "Một cách nhìn đơn giản là chia tiền thành vài vai chính. Vai thứ nhất là tiền vận hành cuộc sống hiện tại: ăn uống, nhà ở, điện nước, đi lại, học phí, các khoản bắt buộc. Đây là phần giúp gia đình sống ổn mỗi tháng.",
      "Vai thứ hai là tiền dự phòng. Khoản này không nhằm tạo lợi nhuận cao, mà để gia đình có thời gian xoay xở khi thu nhập gián đoạn, phát sinh y tế hoặc có việc lớn ngoài kế hoạch. Nếu không tách riêng, quỹ dự phòng rất dễ bị dùng nhầm cho chi tiêu thường ngày.",
      "Vai thứ ba là tiền bảo vệ. Đây là phần giúp gia đình trả lời câu hỏi: nếu người tạo thu nhập chính không thể làm việc trong một thời gian, hoặc nếu có chi phí y tế lớn, gia đình sẽ dùng nguồn nào để duy trì cuộc sống mà không phá vỡ toàn bộ kế hoạch?",
      "Vai thứ tư là tiền cho mục tiêu tương lai: học vấn cho con, mua nhà, nâng cấp chất lượng sống, đầu tư dài hạn, nghỉ hưu. Các mục tiêu này cần được đặt tên rõ, vì nếu chỉ để chung là “tiền tiết kiệm”, gia đình sẽ khó biết mục tiêu nào đang được chuẩn bị đủ và mục tiêu nào chỉ đang được nghĩ đến.",
      "Khi tiền có vai rõ, gia đình không nhất thiết phải kiếm thêm thật nhiều mới thấy an tâm hơn. Đôi khi chỉ cần biết 5 triệu này là quỹ dự phòng, 3 triệu kia là học vấn cho con, khoản còn lại là tích lũy dài hạn, cảm giác chủ động đã khác đi rất nhiều.",
      "Điểm khó là không phải tháng nào cũng chia được hoàn hảo. Có tháng phát sinh, có tháng thu nhập thấp hơn, có tháng phải ưu tiên gia đình hai bên. Điều quan trọng không phải là công thức cứng, mà là gia đình có nguyên tắc để quay lại nhịp đúng sau mỗi lần lệch.",
      "Nếu hiện tại mọi khoản tiền vẫn đang nằm chung một chỗ, bước đầu tiên có thể rất nhỏ: đặt tên lại cho tiền. Gia đình không cần mở quá nhiều tài khoản ngay, nhưng cần biết khoản nào dùng cho hiện tại, khoản nào bảo vệ gia đình, khoản nào dành cho tương lai."
    ]
  },
  {
    slug: "sau-khi-lam-fsi-buoc-tiep-theo-la-gi",
    title: "Sau khi làm FSI, bước tiếp theo là gì?",
    excerpt:
      "Kết quả FSI chỉ thật sự có giá trị khi được chuyển thành một hành động nhỏ, cụ thể và vừa sức với gia đình trong giai đoạn hiện tại.",
    readTime: "8 phút đọc",
    category: "FSI",
    fsiCta:
      "Nếu anh/chị chưa làm FSI, hãy bắt đầu bằng bài kiểm tra ngắn để có một điểm mốc rõ ràng trước khi chọn ưu tiên tiếp theo.",
    body: [
      "Sau khi hoàn thành FSI, phản ứng tự nhiên của nhiều người là nhìn ngay vào điểm số. Mình được bao nhiêu điểm? Mình ở Vùng Xanh, Vàng, Cam hay Đỏ? Kết quả này tốt hay chưa tốt?",
      "Những câu hỏi đó dễ hiểu, nhưng điểm số không phải là phần quan trọng nhất. Điều đáng giá hơn nằm ở câu chuyện tài chính phía sau con số: gia đình đang mạnh ở đâu, lớp đệm nào còn mỏng, và nếu chỉ chọn một đến hai việc để bắt đầu, việc nào nên được ưu tiên trước.",
      "Bước đầu tiên sau khi làm FSI là ghi nhận điểm mạnh. Có thể gia đình đã kiểm soát chi tiêu tương đối rõ, đã có thu nhập đều, đã duy trì tích lũy, đã có một phần quỹ dự phòng hoặc đã bắt đầu nghĩ đến học vấn cho con. Những điều này là nền để đi tiếp.",
      "Bước thứ hai là nhìn vào khoảng trống, nhưng không cố sửa mọi thứ cùng lúc. Một gia đình trẻ có thể cùng lúc thấy mình cần tăng quỹ dự phòng, rà soát bảo vệ thu nhập, tách quỹ học vấn, chuẩn bị nghỉ hưu và điều chỉnh chi tiêu. Nếu ôm tất cả cùng lúc, rất dễ quá tải.",
      "Thứ tự ưu tiên nên được đọc theo bối cảnh. Gia đình có khoản vay lớn và nhiều người phụ thuộc có thể cần ưu tiên dự phòng và bảo vệ thu nhập. Gia đình có con sắp vào giai đoạn học phí cao có thể cần tách nguồn học vấn. Gia đình có dòng tiền còn mơ hồ có thể cần bắt đầu bằng theo dõi chi tiêu 30 ngày.",
      "Một câu hỏi rất hữu ích là: khoảng trống nào nếu chưa xử lý sẽ khiến gia đình bị động nhất khi có thay đổi lớn? Câu trả lời thường giúp mình chọn đúng điểm bắt đầu hơn là chỉ nhìn vào mục nào có điểm thấp nhất.",
      "Bước thứ ba là biến kết quả thành một hành động nhỏ. Ví dụ: mở một khoản dự phòng riêng, ghi lại chi tiêu trong 30 ngày, hẹn một buổi trao đổi với vợ/chồng, rà soát các khoản vay, hoặc kiểm tra lại phương án tài chính nếu nguồn thu chính bị gián đoạn.",
      "Một hành động nhỏ nhưng đúng chỗ thường tốt hơn một kế hoạch rất lớn nhưng không duy trì được. Tài chính gia đình thay đổi nhờ những việc rõ ràng, đều đặn và phù hợp với ngân sách hiện tại.",
      "FSI không thay thế cho một kế hoạch tài chính chi tiết. Nhưng FSI giúp gia đình có điểm bắt đầu rõ hơn. Khi biết mình đang ở đâu, mình sẽ bớt phải đoán, bớt chạy theo lời khuyên chung chung và dễ chọn bước tiếp theo phù hợp với nhà mình hơn."
    ]
  }
];

export const teamMembers = teamMembersData.filter((member): member is TeamMember => "id" in member);

const promotedArticles = teamMembersData.filter((item): item is ArticleContent => "slug" in item);

export const navigation = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Quy trình", href: "/quy-trinh" },
  { label: "Bài viết", href: "/bai-viet" },
  { label: "Tài liệu", href: "/tai-lieu" },
  { label: "Video", href: "/video" },
  { label: "FSI", href: "/survey" }
];

export const processSteps = [
  {
    title: "Lắng nghe bức tranh hiện tại",
    body: "Bắt đầu bằng cuộc trò chuyện nhẹ nhàng về thu nhập, chi tiêu, người phụ thuộc, mục tiêu và những điều gia đình đang băn khoăn."
  },
  {
    title: "Đánh giá mức độ an toàn tài chính",
    body: "Dùng FSI và một số câu hỏi nền tảng để nhìn rõ điểm mạnh, khoảng trống và mức độ ưu tiên của từng phần."
  },
  {
    title: "Xác định ưu tiên trước",
    body: "Không ôm quá nhiều việc cùng lúc. Gia đình sẽ chọn 1-3 ưu tiên thực tế như dòng tiền, quỹ dự phòng, bảo vệ thu nhập hoặc học vấn cho con."
  },
  {
    title: "Thiết kế phương án phù hợp",
    body: "Phương án cần vừa với ngân sách, hoàn cảnh và nhịp sống của gia đình, thay vì chỉ đẹp trên giấy."
  },
  {
    title: "Đồng hành và rà soát định kỳ",
    body: "Tài chính gia đình thay đổi theo thu nhập, con cái, công việc và mục tiêu sống. Việc rà soát định kỳ giúp kế hoạch luôn còn phù hợp."
  }
];

export const teamWorkflow = [
  "Lead được ghi nhận cùng nguồn phát sinh: FSI, tài liệu tải về, bài viết hoặc liên hệ trực tiếp.",
  "Đội ngũ có thể phân công người phụ trách dựa trên quan hệ sẵn có, thời gian tiện liên hệ hoặc năng lực chuyên môn.",
  "Tư vấn viên được phân công dùng advisor summary để chuẩn bị cuộc gọi đầu tiên.",
  "Sau cuộc trao đổi, trạng thái lead có thể được cập nhật trong Google Sheets hoặc CRM."
];

export const platformPositioning = {
  shortName: "FamilyFSI",
  vietnameseName: "Chỉ số An toàn Tài chính Gia đình",
  domainRecommendation: "familyfsi.com",
  description:
    "FamilyFSI là nền tảng giáo dục và tự đánh giá tài chính dành cho gia đình trẻ, kết hợp nội dung dài, tài liệu hướng dẫn và bài kiểm tra FSI để giúp khách hàng bắt đầu cuộc trò chuyện tư vấn một cách tự nhiên hơn."
};

export const articles = [
  {
    slug: "quy-du-phong-gia-dinh-tre",
    title: "Gia đình trẻ nên có quỹ dự phòng bao nhiêu là đủ?",
    excerpt:
      "Một cách đơn giản để tính quỹ dự phòng theo chi phí thiết yếu, số người phụ thuộc và mức độ ổn định của nguồn thu nhập.",
    readTime: "6 phút đọc",
    category: "Dòng tiền",
    fsiCta:
      "Muốn biết quỹ dự phòng hiện tại đang nằm ở mức nào trong bức tranh tài chính gia đình? Anh/chị có thể làm FSI để xem rõ hơn.",
    body: [
      "Quỹ dự phòng là khoản tiền giúp gia đình có thời gian xoay xở khi thu nhập bị gián đoạn, có chi phí y tế bất ngờ hoặc phát sinh việc lớn ngoài kế hoạch. Với gia đình trẻ có con nhỏ, khoản dự phòng này không chỉ là tiền, mà còn là cảm giác chủ động.",
      "Một cách dễ bắt đầu là tính theo chi phí thiết yếu hằng tháng. Chi phí thiết yếu thường gồm ăn uống, nhà ở, điện nước, học phí, đi lại, khoản vay bắt buộc và các chi phí cơ bản để gia đình vẫn vận hành bình thường.",
      "Với nhiều gia đình trẻ, sai lầm thường gặp là tính quỹ dự phòng theo tổng thu nhập thay vì chi phí cần sống. Thu nhập 50 triệu một tháng không có nghĩa là phải có ngay 300 triệu dự phòng. Điều cần biết trước là nếu gia đình tạm thời không có thu nhập, mỗi tháng cần bao nhiêu để vẫn sống ổn, trả các khoản bắt buộc và chăm sóc con đầy đủ.",
      "Nếu nguồn thu nhập ổn định, gia đình có thể bắt đầu với mục tiêu 3 tháng chi phí thiết yếu. Nếu thu nhập biến động, làm tự do, kinh doanh hoặc chỉ có một người tạo thu nhập chính, mục tiêu 6 tháng sẽ an toàn hơn.",
      "Ví dụ, nếu chi phí thiết yếu của gia đình là 25 triệu mỗi tháng, mục tiêu dự phòng ban đầu có thể là 75 triệu. Khi đạt được mốc này, gia đình có thể tăng lên 100-150 triệu tùy mức độ ổn định của công việc, số con, khoản vay và trách nhiệm với cha mẹ hai bên.",
      "Quỹ dự phòng nên được để ở nơi an toàn, dễ rút và ít biến động. Đây không phải là khoản để tìm lợi nhuận cao. Nếu đem toàn bộ quỹ dự phòng đi đầu tư vào tài sản biến động mạnh, gia đình có thể gặp đúng tình huống cần tiền khi thị trường đang không thuận lợi.",
      "Một nguyên tắc đơn giản là tách quỹ dự phòng khỏi tài khoản chi tiêu hằng ngày. Khi tiền nằm chung một chỗ, gia đình rất dễ dùng nhầm cho mua sắm, du lịch hoặc các khoản không thật sự khẩn cấp. Tách riêng giúp mình nhìn thấy tiến độ và giữ kỷ luật tốt hơn.",
      "Điều quan trọng là không cần hoàn thành ngay. Gia đình có thể đặt mục tiêu nhỏ trước, ví dụ tích lũy một tháng chi phí thiết yếu, sau đó tăng dần. Một quỹ dự phòng tốt là quỹ được duy trì đều, dễ tiếp cận khi cần và không bị dùng lẫn với tiền đầu tư dài hạn.",
      "Nếu hiện tại gia đình chưa có quỹ dự phòng, bước đầu tiên không phải là tự trách mình. Hãy bắt đầu bằng một con số rất nhỏ, ví dụ 5-10% thu nhập mỗi tháng, hoặc một khoản cố định ngay khi nhận lương. Điều quan trọng là tạo được nhịp đều trước, rồi tăng tốc sau.",
      "Khi đã có quỹ dự phòng, gia đình sẽ dễ bình tĩnh hơn trước các quyết định khác như bảo vệ thu nhập, kế hoạch học vấn cho con hoặc đầu tư dài hạn."
    ]
  },
  {
    slug: "khoang-trong-tai-chinh-sau-khi-co-con",
    title: "5 khoảng trống tài chính thường bị bỏ qua sau khi có con",
    excerpt:
      "Khi gia đình có thêm em bé, nhiều khoản chi và rủi ro mới xuất hiện. Bài viết giúp anh/chị nhìn lại các điểm dễ quên.",
    readTime: "8 phút đọc",
    category: "Gia đình",
    fsiCta:
      "Nếu anh/chị muốn rà lại xem gia đình mình đang có khoảng trống nào dễ bị bỏ qua nhất, FSI sẽ giúp bắt đầu rất nhanh.",
    body: [
      "Sau khi có con, tài chính gia đình thường thay đổi nhanh hơn mình tưởng. Không chỉ có thêm chi phí sữa, bỉm, khám bệnh hay học phí, gia đình còn có thêm trách nhiệm dài hạn và ít khoảng trống để sửa sai hơn.",
      "Khoảng trống đầu tiên là dòng tiền. Nhiều gia đình vẫn có thu nhập tốt nhưng không rõ tiền đi đâu mỗi tháng. Khi chi phí cho con tăng lên, việc không theo dõi dòng tiền dễ làm gia đình cảm thấy lúc nào cũng thiếu.",
      "Điều này thường không đến từ việc gia đình chi tiêu hoang phí, mà đến từ quá nhiều khoản nhỏ cộng lại: đồ cho con, ăn uống tiện lợi, phí học thêm, khám bệnh, quà cáp, di chuyển, đồ chơi, hoặc các khoản đặt mua online. Khi không gom chúng lại để nhìn, gia đình dễ đánh giá thấp tổng chi phí thật.",
      "Khoảng trống thứ hai là quỹ dự phòng. Trẻ nhỏ thường kéo theo nhiều phát sinh, từ y tế đến thay đổi người chăm sóc. Nếu chưa có khoản dự phòng riêng, gia đình dễ phải dùng tiền dành cho mục tiêu khác.",
      "Khoảng trống này đặc biệt quan trọng với gia đình chỉ có một người tạo thu nhập chính hoặc một người đang tạm nghỉ việc để chăm con. Khi nguồn thu bị phụ thuộc vào một người, quỹ dự phòng không chỉ là khoản tiền dự trữ, mà là lớp đệm để gia đình có thời gian ra quyết định.",
      "Khoảng trống thứ ba là bảo vệ nguồn thu nhập. Nếu người tạo thu nhập chính không thể làm việc trong một thời gian, gia đình sẽ cần phương án để duy trì sinh hoạt, trả nợ và chăm sóc con.",
      "Nhiều gia đình chỉ nghĩ đến bảo vệ khi đã có sự kiện xảy ra. Nhưng lúc đó lựa chọn thường ít hơn, chi phí cao hơn hoặc không còn đủ điều kiện. Vì vậy, bảo vệ nguồn thu nhập nên được xem là một phần của kế hoạch gia đình, giống như mình kiểm tra sức khỏe định kỳ.",
      "Khoảng trống thứ tư là học vấn. Không cần phải có một kế hoạch rất lớn ngay từ đầu, nhưng nên có thói quen tích lũy đều và mục tiêu rõ hơn theo từng giai đoạn.",
      "Khi con còn nhỏ, thời gian chính là lợi thế lớn nhất. Cha mẹ không cần biết chính xác con sẽ học trường nào sau 15 năm, nhưng có thể bắt đầu bằng một khoản tích lũy riêng, sau đó điều chỉnh dần khi mục tiêu rõ hơn.",
      "Khoảng trống thứ năm là nghỉ hưu của cha mẹ. Khi tập trung quá nhiều vào con, cha mẹ dễ quên rằng sự độc lập tài chính của mình sau này cũng là một món quà cho con.",
      "Một kế hoạch gia đình cân bằng không đặt con và cha mẹ vào thế phải chọn một trong hai. Mục tiêu là vừa chuẩn bị cho con, vừa không để tương lai của cha mẹ bị bỏ trống hoàn toàn.",
      "Cách tốt nhất để bắt đầu là chọn một khoảng trống dễ xử lý nhất trong 30 ngày tới. Có thể là ghi lại chi tiêu, mở tài khoản riêng cho quỹ dự phòng, hoặc ngồi lại với vợ/chồng để thống nhất một ưu tiên chung.",
      "Nhìn lại các khoảng trống này không phải để lo lắng hơn, mà để biết nên bắt đầu từ đâu. Chỉ cần chọn đúng một ưu tiên đầu tiên, gia đình đã đi được một bước rất đáng kể."
    ]
  },
  {
    slug: "bao-ve-thu-nhap-la-gi",
    title: "Bảo vệ thu nhập là gì và vì sao quan trọng?",
    excerpt:
      "Một góc nhìn thực tế về việc gia đình sẽ duy trì cuộc sống như thế nào nếu nguồn thu chính bị gián đoạn.",
    readTime: "7 phút đọc",
    category: "Bảo vệ",
    fsiCta:
      "Để xem phần bảo vệ thu nhập đang mạnh hay còn thiếu trong tổng thể tài chính gia đình, anh/chị có thể tự kiểm tra bằng FSI.",
    body: [
      "Với nhiều gia đình trẻ, tài sản lớn nhất không phải là khoản tiết kiệm hiện tại, mà là khả năng tạo thu nhập trong nhiều năm tới. Vì vậy, bảo vệ thu nhập là một phần rất quan trọng của kế hoạch tài chính gia đình.",
      "Nói đơn giản, bảo vệ thu nhập là chuẩn bị phương án để gia đình vẫn có tiền duy trì cuộc sống nếu người tạo thu nhập chính tạm thời hoặc dài ngày không thể làm việc. Lý do có thể là bệnh nghiêm trọng, tai nạn, mất việc hoặc biến động kinh doanh.",
      "Điểm quan trọng là bảo vệ thu nhập không chỉ dành cho người có thu nhập rất cao. Gia đình càng phụ thuộc vào một nguồn thu chính, việc bảo vệ nguồn thu đó càng đáng được xem xét sớm. Với gia đình có con nhỏ, vài tháng thu nhập bị gián đoạn cũng có thể làm đảo lộn nhiều kế hoạch.",
      "Một kế hoạch bảo vệ thu nhập thường bắt đầu từ ba câu hỏi. Gia đình cần bao nhiêu tiền mỗi tháng để duy trì mức sống cơ bản? Nếu mất nguồn thu chính, khoản dự phòng hiện tại kéo dài được bao lâu? Những nghĩa vụ nào vẫn phải trả dù thu nhập giảm?",
      "Sau ba câu hỏi đó, gia đình nên nhìn thêm trách nhiệm dài hạn. Nếu có khoản vay mua nhà, học phí của con, trách nhiệm với cha mẹ hai bên hoặc kế hoạch sinh thêm con, số tiền cần bảo vệ sẽ khác với một gia đình chưa có nhiều nghĩa vụ cố định.",
      "Từ đó, gia đình có thể xem xét nhiều lớp bảo vệ: quỹ dự phòng, kỹ năng tạo thêm nguồn thu, tài sản có thể chuyển đổi thành tiền, và các giải pháp bảo hiểm phù hợp nếu cần.",
      "Quỹ dự phòng là lớp đầu tiên vì nó xử lý các gián đoạn ngắn hạn. Kỹ năng và khả năng tạo thêm nguồn thu là lớp thứ hai vì nó giúp gia đình phục hồi. Các giải pháp bảo hiểm, nếu được thiết kế đúng, là lớp bảo vệ cho những rủi ro lớn mà tiền tiết kiệm thông thường khó gánh nổi.",
      "Một lỗi thường gặp là chọn giải pháp bảo vệ theo cảm tính hoặc theo số tiền đóng mỗi năm, thay vì bắt đầu từ câu hỏi: nếu chuyện không mong muốn xảy ra, gia đình cần bao nhiêu tiền và trong bao lâu? Khi chưa rõ nhu cầu, rất khó biết giải pháp hiện tại là đủ, thiếu hay dư.",
      "Một lỗi khác là chỉ bảo vệ người có thu nhập, nhưng quên vai trò chăm sóc gia đình của người còn lại. Nếu người chăm con chính gặp vấn đề sức khỏe, gia đình cũng có thể phát sinh chi phí thuê người hỗ trợ, giảm giờ làm hoặc thay đổi toàn bộ lịch sinh hoạt.",
      "Điểm mấu chốt là không nên nhìn bảo vệ thu nhập như một quyết định mua sản phẩm đơn lẻ. Đó là một phần của bức tranh tài chính, cần được thiết kế theo trách nhiệm gia đình, ngân sách và mục tiêu dài hạn."
    ]
  },
  {
    slug: "hoc-van-cho-con-bat-dau-tu-dau",
    title: "Chuẩn bị học vấn cho con: bắt đầu từ đâu?",
    excerpt:
      "Không nhất thiết phải bắt đầu bằng một con số lớn. Điều quan trọng là có mục tiêu, thời gian và thói quen tích lũy đều.",
    readTime: "5 phút đọc",
    category: "Học vấn",
    fsiCta:
      "Nếu muốn xem kế hoạch học vấn cho con đang đứng ở đâu so với các ưu tiên tài chính khác, anh/chị có thể bắt đầu với FSI.",
    body: [
      "Kế hoạch học vấn cho con thường khiến cha mẹ thấy áp lực vì con số tương lai có vẻ rất lớn. Nhưng nếu nhìn theo từng bước nhỏ, việc chuẩn bị có thể nhẹ nhàng hơn nhiều.",
      "Bước đầu tiên là xác định mục tiêu gần đúng. Gia đình muốn chuẩn bị cho trường công, trường tư, đại học trong nước, du học hay chỉ đơn giản là có một khoản linh hoạt cho các cơ hội học tập của con?",
      "Ở giai đoạn đầu, mục tiêu không cần chính xác tuyệt đối. Cha mẹ có thể chọn một kịch bản vừa phải, ví dụ chuẩn bị một phần học phí đại học hoặc một khoản hỗ trợ cho các chương trình kỹ năng, ngoại ngữ, trải nghiệm quốc tế. Khi con lớn hơn, kế hoạch sẽ được điều chỉnh.",
      "Bước thứ hai là nhìn thời gian. Con càng nhỏ, gia đình càng có lợi thế vì có nhiều năm để tích lũy. Một khoản nhỏ nhưng đều đặn trong thời gian dài thường dễ duy trì hơn một khoản lớn bắt đầu quá muộn.",
      "Ví dụ, nếu gia đình bắt đầu khi con 3 tuổi, thời gian đến đại học còn khoảng 15 năm. Nếu bắt đầu khi con 13 tuổi, thời gian chỉ còn khoảng 5 năm. Cùng một mục tiêu, bắt đầu sớm giúp áp lực mỗi tháng nhẹ hơn nhiều.",
      "Bước thứ ba là tách riêng khoản học vấn khỏi tiền chi tiêu hằng ngày. Việc tách riêng giúp cha mẹ dễ theo dõi tiến độ và ít dùng nhầm khoản này cho các nhu cầu ngắn hạn.",
      "Khoản học vấn cũng không nên làm gia đình mất cân bằng. Nếu chưa có quỹ dự phòng, dòng tiền còn quá căng hoặc chưa bảo vệ nguồn thu nhập chính, việc dồn toàn lực cho học vấn có thể khiến gia đình thiếu an toàn ở hiện tại.",
      "Một cách thực tế là chia mục tiêu thành nhiều tầng. Tầng đầu tiên là duy trì thói quen tích lũy đều. Tầng thứ hai là tăng dần khoản tích lũy khi thu nhập tốt hơn. Tầng thứ ba là lựa chọn kênh giữ tiền hoặc đầu tư phù hợp với thời gian còn lại và mức chấp nhận rủi ro của gia đình.",
      "Cha mẹ cũng nên trao đổi với nhau về kỳ vọng giáo dục. Nhiều áp lực tài chính đến từ việc hai vợ chồng không nói rõ mong muốn: học trường nào, mức đầu tư bao nhiêu là vừa, điều gì là ưu tiên thật sự, và điều gì chỉ là áp lực so sánh với người khác.",
      "Bước cuối cùng là rà soát định kỳ. Khi thu nhập, học phí, định hướng giáo dục hoặc số con thay đổi, kế hoạch cũng cần được điều chỉnh. Một kế hoạch tốt không cần hoàn hảo từ đầu, nhưng cần được duy trì và cập nhật."
    ]
  },
  ...promotedArticles
];

export const articleLongFormAdditions: Record<string, string[]> = {
  "quy-du-phong-gia-dinh-tre": [
    "Nhiều gia đình chỉ bắt đầu nghĩ đến quỹ dự phòng khi đã có một biến cố xảy ra: công việc chậm lương, người thân nhập viện, con cần điều trị, hoặc một khoản vay đến hạn trong lúc thu nhập không đều. Nhưng quỹ dự phòng nên được chuẩn bị trước những lúc như vậy, vì giá trị lớn nhất của nó là mua cho gia đình thêm thời gian.",
    "Thời gian ở đây rất quan trọng. Khi có quỹ dự phòng, gia đình không cần bán vội tài sản, không cần vay nóng, không cần dùng thẻ tín dụng quá mức, và cũng không phải đưa ra quyết định tài chính trong trạng thái căng thẳng. Một quyết định được đưa ra trong bình tĩnh thường tốt hơn rất nhiều.",
    "Với gia đình có con nhỏ, quỹ dự phòng còn có một ý nghĩa khác: bảo vệ nhịp sống của con. Khi người lớn gặp biến động, mình vẫn muốn con được đi học, được chăm sóc, được khám bệnh và giữ lịch sinh hoạt ổn định nhất có thể. Vì vậy, quỹ dự phòng không chỉ bảo vệ tài khoản ngân hàng, mà còn bảo vệ sự ổn định của cả nhà.",
    "Bước đầu tiên để tính quỹ dự phòng là tách chi phí thành hai nhóm: chi phí thiết yếu và chi phí có thể điều chỉnh. Chi phí thiết yếu là những khoản nếu cắt đi sẽ ảnh hưởng ngay đến cuộc sống căn bản. Chi phí có thể điều chỉnh là những khoản gia đình có thể giảm tạm thời khi cần.",
    "Một ví dụ đơn giản: gia đình có tổng chi 38 triệu mỗi tháng, nhưng trong đó 26 triệu là chi thiết yếu gồm nhà, ăn uống, học phí, đi lại, điện nước và khoản vay. Khi tính quỹ dự phòng, nên bắt đầu từ con số 26 triệu, không phải 38 triệu.",
    "Nếu mục tiêu là 3 tháng chi phí thiết yếu, gia đình cần khoảng 78 triệu. Nếu muốn an toàn hơn ở mức 6 tháng, con số là 156 triệu. Con số này nghe có vẻ lớn, nhưng khi chia thành từng mốc nhỏ, nó sẽ dễ thực hiện hơn.",
    "Gia đình có thể chia quỹ dự phòng thành 3 tầng. Tầng một là khoản rất dễ rút, đủ cho 2-4 tuần chi tiêu. Tầng hai là khoản gửi tiết kiệm ngắn hạn hoặc tài khoản linh hoạt, đủ cho vài tháng. Tầng ba, nếu có, là khoản dự phòng mở rộng cho gia đình có thu nhập biến động hoặc trách nhiệm lớn.",
    "Không nên đặt toàn bộ quỹ dự phòng vào một kênh có rủi ro cao. Cổ phiếu, crypto, bất động sản hoặc các khoản đầu tư khó rút tiền có thể phù hợp với mục tiêu tăng trưởng dài hạn, nhưng không phù hợp để làm lớp tiền đầu tiên khi gia đình cần xử lý khẩn cấp.",
    "Một câu hỏi thực tế là: nên để quỹ dự phòng ở đâu? Câu trả lời thường là nơi an toàn, dễ tiếp cận, ít biến động và tách khỏi tài khoản chi tiêu hằng ngày. Lãi suất không phải tiêu chí quan trọng nhất của quỹ dự phòng. Tính sẵn sàng mới là tiêu chí quan trọng.",
    "Một lỗi phổ biến là xây quỹ dự phòng xong rồi liên tục rút ra cho các khoản không khẩn cấp. Du lịch, mua điện thoại, đổi xe, mua đồ gia dụng mới có thể là nhu cầu chính đáng, nhưng nếu dùng tiền dự phòng cho những việc này, quỹ sẽ mất vai trò bảo vệ.",
    "Để tránh dùng nhầm, gia đình nên thống nhất trước thế nào là tình huống được rút quỹ dự phòng. Ví dụ: mất thu nhập, chi phí y tế lớn, sửa chữa nhà/xe cần thiết, hỗ trợ gia đình trong tình huống khẩn cấp. Những khoản khác nên có quỹ riêng.",
    "Một lỗi khác là đợi đến khi dư nhiều mới bắt đầu. Thực tế, nhiều gia đình không bao giờ thấy mình thật sự dư. Cách hiệu quả hơn là chuyển tiền vào quỹ dự phòng ngay khi nhận thu nhập, dù số tiền ban đầu nhỏ.",
    "Nếu thu nhập gia đình khoảng 30-50 triệu mỗi tháng, có thể bắt đầu bằng 1-3 triệu mỗi tháng. Nếu có tháng thưởng hoặc thu nhập đột biến, trích một phần để tăng nhanh quỹ. Điều quan trọng là duy trì nhịp đều để hình thành thói quen.",
    "Vợ chồng cũng nên cùng biết quỹ dự phòng đang ở đâu, có bao nhiêu và dùng khi nào. Quỹ dự phòng không nên là bí mật của một người. Khi cả hai cùng hiểu, gia đình sẽ ra quyết định nhanh hơn khi có việc thật sự cần.",
    "Khi đã đạt mốc đầu tiên, đừng vội dừng lại mãi. Mỗi năm, gia đình nên rà soát lại chi phí thiết yếu. Khi có thêm con, đổi trường, mua nhà, tăng khoản vay hoặc thay đổi công việc, mức dự phòng phù hợp cũng thay đổi.",
    "Một cách rà soát đơn giản là hỏi: nếu tháng sau thu nhập giảm mạnh, gia đình sống được bao lâu mà không phải vay? Nếu câu trả lời dưới một tháng, ưu tiên đầu tiên nên là xây quỹ dự phòng. Nếu câu trả lời là 3-6 tháng, gia đình đã có nền ổn hơn để tính các mục tiêu dài hạn.",
    "Quỹ dự phòng cũng giúp gia đình đầu tư tốt hơn. Khi đã có lớp đệm, mình ít bị buộc phải bán khoản đầu tư vào thời điểm xấu. Nói cách khác, quỹ dự phòng không làm tiền tăng nhanh, nhưng giúp bảo vệ các kế hoạch tăng trưởng khỏi bị phá vỡ.",
    "Với người làm kinh doanh hoặc freelancer, quỹ dự phòng nên cao hơn vì thu nhập có thể lên xuống theo mùa. Ngoài quỹ gia đình, có thể cần thêm quỹ vận hành công việc để không trộn tiền kinh doanh và tiền sinh hoạt.",
    "Với gia đình đang có khoản vay lớn, quỹ dự phòng càng quan trọng. Khoản vay không dừng lại chỉ vì thu nhập tạm thời giảm. Gia đình cần biết mình có thể trả nợ trong bao lâu nếu có biến cố.",
    "Nếu đang bắt đầu từ con số 0, hãy đặt mục tiêu 10 triệu đầu tiên. Sau đó là một tháng chi phí thiết yếu. Sau đó là ba tháng. Sau đó mới tính đến sáu tháng. Mỗi mốc đạt được đều làm gia đình vững hơn.",
    "Quỹ dự phòng không phải mục tiêu hào nhoáng, nhưng là một trong những nền móng quan trọng nhất. Gia đình có thể chưa đầu tư nhiều, chưa có kế hoạch học vấn hoàn chỉnh, nhưng nếu có dự phòng tốt, khả năng chịu biến động đã khác hẳn.",
    "Tóm lại, câu hỏi không phải là gia đình có nên có quỹ dự phòng không. Câu hỏi đúng hơn là: với trách nhiệm hiện tại, gia đình cần quỹ dự phòng ở mức nào để thấy đủ bình tĩnh khi cuộc sống có thay đổi?"
  ],
  "khoang-trong-tai-chinh-sau-khi-co-con": [
    "Có con là một niềm vui lớn, nhưng cũng là thời điểm tài chính gia đình bước sang một giai đoạn mới. Trước đây, hai vợ chồng có thể linh hoạt hơn với chi tiêu, công việc và kế hoạch cá nhân. Sau khi có con, nhiều quyết định bắt đầu cần tính thêm sự ổn định.",
    "Điều khó là các thay đổi tài chính sau khi có con không phải lúc nào cũng xuất hiện dưới dạng một khoản chi thật lớn. Chúng thường đến từ nhiều khoản nhỏ, lặp lại và tăng dần. Chính vì nhỏ và rải rác, chúng dễ bị xem nhẹ.",
    "Khoảng trống dòng tiền thường là điểm đầu tiên. Gia đình có thể vẫn kiếm tốt, nhưng cảm giác cuối tháng không còn dư bao nhiêu. Khi nhìn kỹ, tiền không mất đi vì một khoản lớn, mà đi qua nhiều khoản nhỏ: đồ cho con, thuốc men, ăn ngoài vì bận, giao hàng, học thử, đồ chơi, quà cáp, phí dịch vụ.",
    "Một cách kiểm tra là chọn 30 ngày ghi lại chi tiêu theo ba nhóm: thiết yếu, chất lượng sống và phát sinh. Không cần ghi quá phức tạp. Mục tiêu không phải để soi lỗi, mà để thấy mẫu hình.",
    "Khoảng trống thứ hai là thiếu quỹ dự phòng riêng cho gia đình sau khi có con. Trước đây, quỹ dự phòng có thể chỉ cần lo cho hai người lớn. Khi có con, rủi ro và chi phí phát sinh tăng lên. Một cơn bệnh kéo dài, thay đổi người chăm sóc hoặc nghỉ việc tạm thời đều có thể ảnh hưởng mạnh.",
    "Khoảng trống thứ ba là chưa tính lại bảo vệ nguồn thu nhập. Khi gia đình có con, thu nhập của cha mẹ không còn chỉ phục vụ hiện tại, mà còn nuôi nhiều cam kết tương lai. Nếu nguồn thu chính bị gián đoạn, tác động không chỉ là giảm chi tiêu, mà có thể ảnh hưởng đến học phí, khoản vay, chăm sóc y tế và kế hoạch dài hạn.",
    "Một câu hỏi nên đặt ra là: nếu người tạo thu nhập chính không thể làm việc trong 6 tháng, gia đình sẽ dùng nguồn nào? Tiền tiết kiệm, hỗ trợ người thân, bán tài sản, vay mượn, hay đã có phương án bảo vệ rõ hơn?",
    "Khoảng trống thứ tư là học vấn cho con. Nhiều cha mẹ nghĩ rằng còn quá sớm để chuẩn bị, nhất là khi con còn nhỏ. Nhưng thời gian chính là lợi thế lớn nhất. Không cần phải biết chính xác con học trường nào, chỉ cần bắt đầu một thói quen tích lũy riêng.",
    "Khoảng trống thứ năm là kế hoạch nghỉ hưu của cha mẹ. Đây là phần thường bị hy sinh thầm lặng. Cha mẹ muốn dành điều tốt nhất cho con, nhưng nếu bỏ quên hoàn toàn tương lai của mình, sau này con có thể trở thành người gánh áp lực ngược lại.",
    "Ngoài 5 khoảng trống chính, còn một khoảng trống mềm nhưng rất quan trọng: vợ chồng không nói chuyện định kỳ về tiền. Nhiều gia đình chỉ nói về tài chính khi có vấn đề. Khi đó, cuộc nói chuyện dễ căng thẳng hơn.",
    "Một buổi trao đổi tài chính gia đình không cần quá nghiêm trọng. Có thể bắt đầu bằng ba câu: tháng này điều gì ổn, điều gì làm mình lo, và tháng tới mình muốn ưu tiên một việc gì?",
    "Nếu hai vợ chồng có quan điểm tiền bạc khác nhau, điều đó rất bình thường. Một người thích an toàn, một người thích trải nghiệm. Một người muốn đầu tư, một người muốn giữ tiền mặt. Mục tiêu không phải là ai thắng, mà là tìm điểm cân bằng cho gia đình.",
    "Sau khi có con, gia đình cũng dễ bị ảnh hưởng bởi so sánh xã hội: trường nào tốt hơn, lớp nào nên học, bảo hiểm nào nên mua, đầu tư nào đang hot, nhà ai đã chuẩn bị được gì. So sánh quá nhiều dễ làm kế hoạch của mình mất trọng tâm.",
    "Một nguyên tắc hữu ích là quay lại với bối cảnh riêng: thu nhập của gia đình mình, số người phụ thuộc, khoản vay, sức khỏe, công việc, mục tiêu giáo dục và mức chịu rủi ro. Không có công thức nào đúng cho mọi nhà.",
    "Nếu phải chọn thứ tự ưu tiên, nhiều gia đình nên bắt đầu từ dòng tiền và quỹ dự phòng. Khi hai phần này rõ hơn, các quyết định về bảo vệ, học vấn và đầu tư sẽ bớt cảm tính.",
    "Một kế hoạch 30 ngày có thể rất đơn giản: tuần đầu ghi lại chi tiêu, tuần hai xác định chi phí thiết yếu, tuần ba mở hoặc tách quỹ dự phòng, tuần bốn ngồi lại chọn một mục tiêu cho 3 tháng tới.",
    "Khi đã có một ưu tiên rõ, gia đình nên biến nó thành hành động nhỏ. Ví dụ: tự động chuyển 2 triệu vào quỹ dự phòng mỗi tháng, giảm một khoản chi không còn nhiều giá trị, hoặc hẹn một buổi trao đổi để rà lại bảo vệ thu nhập.",
    "Điều quan trọng là không biến tài chính thành một danh sách việc phải làm quá dài. Gia đình trẻ đã có đủ áp lực. Một kế hoạch tốt nên giúp gia đình nhẹ hơn, không nặng hơn.",
    "Các khoảng trống tài chính không nói rằng gia đình đang làm sai. Chúng chỉ cho thấy có những phần cần được nhìn rõ hơn. Khi nhìn rõ, mình có thể chọn cách xử lý phù hợp.",
    "Sau khi có con, sự an toàn tài chính không còn là chuyện tối đa hóa lợi nhuận. Nó là khả năng duy trì cuộc sống, bảo vệ người thân và vẫn có đường đi cho những mục tiêu quan trọng.",
    "Nếu gia đình chưa biết bắt đầu từ đâu, hãy bắt đầu bằng việc tự chấm lại bức tranh hiện tại. Không cần hoàn hảo, chỉ cần trung thực. Từ đó, bước tiếp theo sẽ rõ hơn."
  ],
  "bao-ve-thu-nhap-la-gi": [
    "Khi nói đến tài sản, nhiều người nghĩ ngay đến nhà, xe, tiền tiết kiệm hoặc khoản đầu tư. Nhưng với một gia đình trẻ, khả năng tạo thu nhập trong 10, 20, 30 năm tới thường là tài sản lớn nhất. Nếu tài sản này bị gián đoạn, cả kế hoạch gia đình có thể bị ảnh hưởng.",
    "Bảo vệ thu nhập không phải là một khái niệm xa lạ hay chỉ dành cho người giàu. Nó bắt đầu từ một câu hỏi rất đời thường: nếu tháng sau nguồn thu chính của gia đình giảm mạnh hoặc dừng lại, gia đình sẽ sống bằng gì?",
    "Có nhiều tình huống khiến thu nhập bị gián đoạn: bệnh nghiêm trọng, tai nạn, mất việc, công ty thay đổi, kinh doanh chậm, thị trường đi xuống hoặc người chăm con chính gặp vấn đề sức khỏe khiến người còn lại phải giảm thời gian làm việc.",
    "Với người độc thân, gián đoạn thu nhập đã là vấn đề. Với gia đình có con nhỏ, vấn đề lớn hơn vì nhiều khoản chi không thể dừng ngay: học phí, tiền nhà, ăn uống, khám bệnh, khoản vay, hỗ trợ người thân.",
    "Một kế hoạch bảo vệ thu nhập tốt thường có nhiều lớp. Lớp đầu tiên là quỹ dự phòng. Lớp thứ hai là khả năng điều chỉnh chi tiêu. Lớp thứ ba là năng lực tạo thu nhập thay thế. Lớp thứ tư là các giải pháp chuyển giao rủi ro như bảo hiểm nếu phù hợp.",
    "Không nên xem bảo hiểm là lớp duy nhất. Cũng không nên xem tiết kiệm là đủ cho mọi rủi ro. Mỗi lớp có vai trò riêng. Quỹ dự phòng xử lý việc ngắn hạn. Bảo hiểm, nếu thiết kế đúng, xử lý những rủi ro lớn mà tiết kiệm thông thường khó gánh.",
    "Để biết cần bảo vệ bao nhiêu, gia đình có thể tính từ chi phí thiết yếu và thời gian cần duy trì. Ví dụ, nếu gia đình cần 30 triệu mỗi tháng để sống cơ bản, 3 năm cần hơn 1 tỷ đồng. Con số này giúp mình hiểu vì sao chỉ dựa vào vài tháng tiết kiệm có thể chưa đủ.",
    "Tuy nhiên, không phải gia đình nào cũng cần cùng một mức bảo vệ. Người có khoản vay lớn, con nhỏ, cha mẹ phụ thuộc hoặc thu nhập một nguồn sẽ cần mức bảo vệ khác với gia đình có hai nguồn thu ổn định và ít nghĩa vụ.",
    "Một điểm hay bị bỏ qua là vai trò của người không tạo thu nhập chính. Nếu một người ở nhà chăm con, vai trò đó vẫn có giá trị tài chính rất lớn. Nếu người này gặp vấn đề, gia đình có thể phải thuê người chăm sóc, giảm giờ làm hoặc thay đổi toàn bộ lịch sinh hoạt.",
    "Vì vậy, bảo vệ thu nhập nên được nhìn theo vai trò trong gia đình, không chỉ theo mức lương. Ai là người tạo tiền? Ai là người giữ nhịp sống? Ai chăm con? Ai quản lý gia đình? Mỗi vai trò đều có tác động nếu bị gián đoạn.",
    "Một lỗi phổ biến là mua giải pháp vì nghe hợp lý, nhưng chưa tính nhu cầu. Khi chưa biết gia đình cần bao nhiêu tiền, trong bao lâu, cho mục tiêu nào, rất khó đánh giá một giải pháp là đủ hay thiếu.",
    "Một lỗi khác là chọn mức đóng vừa túi tiền nhưng không biết quyền lợi có khớp với rủi ro chính không. Ngân sách quan trọng, nhưng ngân sách nên đi cùng thứ tự ưu tiên: rủi ro nào lớn nhất, khả năng xảy ra ra sao, tác động đến gia đình thế nào.",
    "Cũng có gia đình trì hoãn vì nghĩ mình còn trẻ và khỏe. Tuổi trẻ là lợi thế, nhưng cũng là thời điểm trách nhiệm tài chính đang tăng nhanh: con nhỏ, mua nhà, xây sự nghiệp, hỗ trợ cha mẹ. Chuẩn bị sớm thường giúp có nhiều lựa chọn hơn.",
    "Bảo vệ thu nhập không nhất thiết phải bắt đầu bằng quyết định lớn. Gia đình có thể bắt đầu bằng việc ghi ra các nghĩa vụ cố định, tính chi phí thiết yếu, kiểm tra quỹ dự phòng và xem nếu thu nhập giảm thì khoản nào bị ảnh hưởng đầu tiên.",
    "Sau đó, gia đình có thể đặt câu hỏi: mình muốn bảo vệ mức sống trong bao lâu? 6 tháng, 1 năm, 5 năm hay đến khi con đủ tuổi độc lập? Câu trả lời sẽ dẫn đến những phương án rất khác nhau.",
    "Nếu gia đình đã có bảo hiểm, cũng nên rà soát định kỳ. Có thể hợp đồng từng phù hợp cách đây 5 năm, nhưng hiện tại gia đình đã có thêm con, tăng khoản vay, đổi thu nhập hoặc có mục tiêu mới. Kế hoạch bảo vệ cần đi theo đời sống thật.",
    "Nếu gia đình chưa có gì, đừng bắt đầu bằng cảm giác sợ. Hãy bắt đầu bằng sự rõ ràng. Viết ra thu nhập, chi phí, khoản vay, người phụ thuộc và số tháng gia đình muốn duy trì nếu có biến cố.",
    "Một cuộc trao đổi tốt về bảo vệ thu nhập nên giúp gia đình hiểu hơn, không làm gia đình hoang mang hơn. Khi hiểu rõ, mình có thể chọn mức bảo vệ vừa sức và đúng trọng tâm.",
    "Cuối cùng, bảo vệ thu nhập là một cách thể hiện trách nhiệm. Không phải vì mình nghĩ điều xấu chắc chắn xảy ra, mà vì mình muốn gia đình vẫn có đường đi nếu cuộc sống không diễn ra như kế hoạch."
  ],
  "hoc-van-cho-con-bat-dau-tu-dau": [
    "Chuẩn bị học vấn cho con là một trong những mục tiêu dễ chạm vào cảm xúc nhất của cha mẹ. Ai cũng muốn con có điều kiện tốt, nhưng chính vì muốn điều tốt, cha mẹ đôi khi cảm thấy áp lực rất sớm.",
    "Điều đầu tiên cần nói rõ: kế hoạch học vấn không phải là cam kết rằng cha mẹ phải lo toàn bộ mọi chi phí ở mức cao nhất. Kế hoạch học vấn là cách gia đình tạo thêm lựa chọn cho con trong tương lai.",
    "Khi nhìn như vậy, áp lực sẽ nhẹ hơn. Gia đình không cần biết chính xác 15 năm nữa học phí là bao nhiêu. Gia đình chỉ cần bắt đầu với một mục tiêu hợp lý, rồi cập nhật theo thời gian.",
    "Có ba câu hỏi nên đặt ra. Một là gia đình muốn chuẩn bị cho giai đoạn nào: mầm non, phổ thông, đại học, du học hay kỹ năng bổ sung? Hai là thời gian còn bao lâu? Ba là mỗi tháng gia đình có thể dành bao nhiêu mà không làm hiện tại quá căng?",
    "Nếu con còn nhỏ, lợi thế lớn nhất là thời gian. Một khoản tích lũy 1-2 triệu mỗi tháng trong 15 năm có thể tạo ra nền tốt hơn nhiều so với việc đợi đến khi con gần vào đại học mới bắt đầu.",
    "Nhưng bắt đầu sớm không có nghĩa là phải chọn ngay một kênh phức tạp. Giai đoạn đầu, điều quan trọng nhất là tách riêng khoản học vấn và duy trì thói quen. Khi số tiền lớn hơn, gia đình có thể cân nhắc cách quản lý phù hợp hơn.",
    "Một lỗi phổ biến là đặt mục tiêu quá cao ngay từ đầu, rồi bỏ cuộc sau vài tháng vì thấy áp lực. Mục tiêu tốt nên vừa đủ thử thách nhưng vẫn sống được với nó. Nếu gia đình đang căng dòng tiền, bắt đầu nhỏ vẫn tốt hơn là không bắt đầu.",
    "Một lỗi khác là chuẩn bị học vấn cho con nhưng bỏ quên quỹ dự phòng. Nếu có biến cố ngắn hạn mà không có dự phòng, gia đình có thể phải rút khoản học vấn ra dùng. Vì vậy, học vấn nên đi cùng nền an toàn tài chính chung.",
    "Cha mẹ cũng cần thống nhất kỳ vọng. Một người có thể muốn con học trường quốc tế, người kia muốn ưu tiên an toàn tài chính trước. Nếu không nói chuyện sớm, mục tiêu học vấn dễ trở thành nguồn căng thẳng giữa hai vợ chồng.",
    "Một buổi nói chuyện tốt có thể bắt đầu bằng câu hỏi: điều gì trong giáo dục của con là quan trọng nhất với mình? Môi trường, ngoại ngữ, kỹ năng sống, đại học, du học, hay sự linh hoạt để con tự chọn?",
    "Khi đã rõ ưu tiên, gia đình có thể chia kế hoạch thành nhiều tầng. Tầng cơ bản là khoản tích lũy chắc chắn. Tầng mở rộng là khoản đầu tư dài hạn nếu phù hợp. Tầng linh hoạt là các cơ hội phát sinh như trại hè, khóa học, ngoại ngữ hoặc hoạt động trải nghiệm.",
    "Không nên đặt toàn bộ kỳ vọng vào một con số. Con có thể có năng lực, sở thích và lựa chọn khác với điều cha mẹ tưởng tượng hôm nay. Vì vậy, kế hoạch học vấn nên đủ rõ để có định hướng, nhưng đủ linh hoạt để điều chỉnh.",
    "Gia đình cũng nên rà soát học phí và lạm phát giáo dục. Chi phí giáo dục thường tăng theo thời gian. Nếu chỉ nhìn học phí hiện tại, kế hoạch có thể bị thiếu. Tuy nhiên, không cần dự báo quá hoàn hảo; chỉ cần có biên an toàn và rà soát định kỳ.",
    "Nếu thu nhập tăng, gia đình có thể tăng mức tích lũy. Nếu có giai đoạn khó khăn, có thể giảm tạm thời nhưng không nên bỏ hẳn thói quen. Nhịp đều quan trọng hơn sự hoàn hảo.",
    "Một câu hỏi rất thực tế là: nên ưu tiên học vấn cho con hay nghỉ hưu của cha mẹ? Câu trả lời không nên là một trong hai. Nếu cha mẹ bỏ quên hoàn toàn tương lai của mình, sau này con có thể phải gánh áp lực. Vì vậy, cần cân bằng.",
    "Kế hoạch học vấn tốt cũng nên đi cùng việc dạy con về tiền khi con đủ lớn. Không chỉ chuẩn bị tiền cho con, cha mẹ còn có thể giúp con hiểu giá trị của lựa chọn, nỗ lực và trách nhiệm tài chính.",
    "Khi con còn nhỏ, cha mẹ chuẩn bị bằng tiền. Khi con lớn hơn, cha mẹ chuẩn bị thêm bằng trò chuyện: vì sao gia đình chọn trường này, ngân sách có giới hạn ra sao, con có thể cùng chịu trách nhiệm như thế nào.",
    "Tóm lại, chuẩn bị học vấn cho con không phải là chạy theo một cuộc đua. Đó là quá trình tạo thêm lựa chọn cho con mà vẫn giữ gia đình an toàn ở hiện tại.",
    "Nếu bắt đầu hôm nay, hãy chọn một việc nhỏ: mở khoản tích lũy riêng, đặt mục tiêu gần đúng, hoặc hẹn một buổi với vợ/chồng để nói về kỳ vọng giáo dục. Một bước rõ ràng hôm nay sẽ làm tương lai bớt mơ hồ hơn."
  ]
};

export const guides = [
  {
    slug: "family-financial-safety-checklist",
    title: "Family Financial Safety Checklist",
    description: "Checklist một trang để gia đình rà soát dòng tiền, dự phòng, bảo vệ và mục tiêu dài hạn.",
    format: "PDF",
    status: "Bản xem trước",
    sections: [
      "Dòng tiền hằng tháng: gia đình có biết rõ tiền đang đi đâu không?",
      "Quỹ dự phòng: hiện đủ duy trì bao nhiêu tháng chi phí thiết yếu?",
      "Bảo vệ thu nhập: nếu nguồn thu chính gián đoạn, gia đình có phương án chưa?",
      "Mục tiêu cho con: học vấn, y tế và các khoản phát sinh đã được tính đến chưa?",
      "Nghỉ hưu của cha mẹ: có đang được chuẩn bị song song với mục tiêu cho con không?"
    ]
  },
  {
    slug: "30-day-family-cash-flow-review",
    title: "30-Day Family Cash Flow Review",
    description: "Mẫu theo dõi 30 ngày giúp gia đình hiểu tiền đang đi đâu mà không cần dùng công thức phức tạp.",
    format: "Google Sheet",
    status: "Bản xem trước",
    sections: [
      "Theo dõi chi thiết yếu, chi chất lượng sống và chi phát sinh trong 30 ngày.",
      "Đánh dấu các khoản chi lặp lại nhưng ít được để ý.",
      "Tìm 1-2 khoản có thể điều chỉnh mà không làm gia đình thấy quá gò bó.",
      "Tính tỷ lệ tiết kiệm hoặc tích lũy thực tế sau khi trừ chi phí.",
      "Chọn một thói quen dòng tiền để duy trì trong tháng tiếp theo."
    ]
  },
  {
    slug: "education-planning-starter-guide",
    title: "Education Planning Starter Guide",
    description: "Hướng dẫn nhập môn để bắt đầu chuẩn bị học vấn cho con theo từng giai đoạn.",
    format: "PDF",
    status: "Bản xem trước",
    sections: [
      "Xác định mục tiêu học vấn gần đúng thay vì cần con số hoàn hảo ngay.",
      "Tính thời gian còn lại đến từng cột mốc quan trọng.",
      "Chọn mức tích lũy định kỳ phù hợp với dòng tiền hiện tại.",
      "Tách riêng khoản học vấn để tránh dùng lẫn cho chi tiêu ngắn hạn.",
      "Rà soát lại kế hoạch khi thu nhập, học phí hoặc định hướng của con thay đổi."
    ]
  }
];

export const videos = [
  {
    title: "Quỹ dự phòng gia đình: bắt đầu thế nào cho nhẹ?",
    description: "Video ngắn giải thích cách chọn mục tiêu quỹ dự phòng theo chi phí thiết yếu.",
    source: "YouTube / Facebook",
    status: "Chưa gắn link"
  },
  {
    title: "3 câu hỏi tài chính nên bàn trước khi có con",
    description: "Một khung trò chuyện đơn giản cho các cặp vợ chồng trẻ.",
    source: "YouTube / Facebook",
    status: "Chưa gắn link"
  },
  {
    title: "FSI là gì và đọc kết quả như thế nào?",
    description: "Video giới thiệu công cụ Family Financial Safety Index cho người mới.",
    source: "YouTube / Facebook",
    status: "Chưa gắn link"
  }
];
