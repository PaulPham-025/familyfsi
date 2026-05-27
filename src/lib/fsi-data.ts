export type AnswerOption = {
  id: string;
  label: string;
  score: number;
};

export type FsiQuestion = {
  id: string;
  dimension: string;
  advisorLabel: string;
  question: string;
  options: AnswerOption[];
};

export type RespondentInfo = {
  ageGroup?: string;
  familyStatus?: string;
  dependents?: string;
  incomeSource?: string;
  monthlyIncome?: string;
};

export const infoFields = [
  {
    id: "ageGroup",
    label: "Nhóm độ tuổi",
    placeholder: "Chọn nhóm phù hợp",
    options: ["Dưới 25", "25-34", "35-44", "45-54", "Từ 55 trở lên"]
  },
  {
    id: "familyStatus",
    label: "Tình trạng gia đình",
    placeholder: "Chọn tình trạng hiện tại",
    options: ["Độc thân", "Đã kết hôn", "Đã kết hôn và có con", "Khác"]
  },
  {
    id: "dependents",
    label: "Số người phụ thuộc",
    placeholder: "Chọn số người",
    options: ["0", "1", "2", "3", "4 trở lên"]
  },
  {
    id: "incomeSource",
    label: "Nguồn thu nhập chính",
    placeholder: "Chọn nguồn chính",
    options: ["Lương cố định", "Kinh doanh/tự do", "Nhiều nguồn thu", "Khác"]
  },
  {
    id: "monthlyIncome",
    label: "Tổng thu nhập hàng tháng",
    placeholder: "Chọn khoảng thu nhập",
    options: [
      "Dưới 20 triệu",
      "20-40 triệu",
      "40-70 triệu",
      "70-100 triệu",
      "Trên 100 triệu",
      "Chưa muốn chia sẻ"
    ]
  }
] as const;

const defaultScores = [5, 3, 2, 1];

const withScores = (labels: string[], scores = defaultScores): AnswerOption[] =>
  labels.map((label, index) => ({
    id: `a${index + 1}`,
    label,
    score: scores[index]
  }));

export const fsiQuestions: FsiQuestion[] = [
  {
    id: "spending-control",
    dimension: "Kiểm soát dòng tiền",
    advisorLabel: "Cash-flow control",
    question: "Hiện tại, anh/chị kiểm soát chi tiêu hàng tháng ở mức nào?",
    options: withScores([
      "Tôi theo dõi khá rõ và biết tiền đi đâu mỗi tháng",
      "Tôi có theo dõi, nhưng đôi lúc vẫn chi vượt kế hoạch",
      "Tôi chỉ ước lượng, chưa kiểm soát thật sự rõ",
      "Tôi thường chi tiêu theo phát sinh, cuối tháng mới nhìn lại"
    ])
  },
  {
    id: "essential-expense",
    dimension: "Tỷ lệ chi thiết yếu",
    advisorLabel: "Essential expense ratio",
    question:
      "Trong tổng thu nhập hàng tháng, các khoản chi thiết yếu của gia đình anh/chị hiện chiếm khoảng bao nhiêu?",
    options: withScores(["Dưới 50%", "Khoảng 50%–60%", "Khoảng 60%–70%", "Trên 70%"])
  },
  {
    id: "lifestyle-expense",
    dimension: "Chi cho chất lượng sống",
    advisorLabel: "Lifestyle expense ratio",
    question:
      "Trong tổng thu nhập hàng tháng, anh/chị thường dành khoảng bao nhiêu cho các khoản chi cho chất lượng sống như ăn uống ngoài, mua sắm, giải trí, du lịch hoặc sở thích cá nhân?",
    options: withScores(["Dưới 20%", "Khoảng 20%–30%", "Khoảng 30%–40%", "Trên 40%"], [3, 5, 2, 1])
  },
  {
    id: "debt-obligation",
    dimension: "Áp lực nghĩa vụ tài chính",
    advisorLabel: "Debt and fixed obligation pressure",
    question:
      "Hiện tại, các khoản vay hoặc nghĩa vụ tài chính cố định của gia đình đang ở mức nào so với khả năng chi trả?",
    options: withScores([
      "Ở mức an toàn, gia đình vẫn chủ động và trả khá thoải mái",
      "Có áp lực nhưng vẫn trong khả năng xoay xở",
      "Khá căng, nếu có biến cố sẽ dễ bị ảnh hưởng",
      "Đang là áp lực lớn đối với tài chính gia đình"
    ])
  },
  {
    id: "emergency-fund",
    dimension: "Quỹ dự phòng",
    advisorLabel: "Emergency fund runway",
    question:
      "Nếu thu nhập của gia đình bị gián đoạn, quỹ dự phòng hiện tại có thể giúp anh/chị xoay xở trong bao lâu?",
    options: withScores([
      "Trên 6 tháng",
      "Khoảng 3 đến 6 tháng",
      "Dưới 3 tháng",
      "Hiện tại gần như chưa có quỹ dự phòng riêng"
    ])
  },
  {
    id: "income-protection",
    dimension: "Bảo vệ nguồn thu nhập",
    advisorLabel: "Income continuity protection",
    question:
      "Nếu người tạo ra thu nhập chính trong gia đình tạm thời hoặc dài ngày không thể làm việc, gia đình anh/chị hiện có phương án tài chính nào để duy trì cuộc sống?",
    options: withScores([
      "Đã có phương án khá rõ để gia đình vẫn duy trì ổn định trong nhiều năm",
      "Đã có chuẩn bị, nhưng chưa thật sự chắc mức độ đủ đến đâu",
      "Chủ yếu sẽ phải dùng tiền tiết kiệm hoặc tài sản đang có",
      "Hiện tại chưa có phương án tài chính rõ ràng"
    ])
  },
  {
    id: "health-shock",
    dimension: "Dự phòng rủi ro sức khỏe",
    advisorLabel: "Health shock preparedness",
    question:
      "Nếu có một vấn đề sức khỏe nghiêm trọng hoặc cần điều trị tốn kém, gia đình anh/chị hiện sẽ xoay xở chi phí theo cách nào?",
    options: withScores([
      "Đã có giải pháp khá đầy đủ nên ít ảnh hưởng đến tài chính gia đình",
      "Có một phần chuẩn bị, nhưng vẫn có thể phải bù thêm từ tiền riêng",
      "Có thể sẽ phải dùng đến tiền tiết kiệm hoặc quỹ dành cho mục tiêu khác",
      "Chưa có chuẩn bị rõ ràng, nếu xảy ra sẽ khá áp lực"
    ])
  },
  {
    id: "education-plan",
    dimension: "Kế hoạch học vấn cho con",
    advisorLabel: "Education planning",
    question: "Nếu gia đình có con, anh/chị hiện đã chuẩn bị cho kế hoạch học vấn của con ở mức nào?",
    options: withScores(
      [
        "Đã có kế hoạch riêng và duy trì đều đặn",
        "Đã bắt đầu chuẩn bị nhưng chưa thật sự đều",
        "Có nghĩ đến nhưng chưa bắt đầu rõ ràng",
        "Chưa có kế hoạch cụ thể",
        "Gia đình hiện chưa có con / chưa cần ưu tiên nội dung này"
      ],
      [5, 3, 2, 1, 3]
    )
  },
  {
    id: "retirement-plan",
    dimension: "Chuẩn bị nghỉ hưu",
    advisorLabel: "Retirement readiness",
    question: "Anh/chị đang chuẩn bị cho giai đoạn nghỉ hưu của mình ở mức nào?",
    options: withScores([
      "Đã có kế hoạch riêng và đang tích lũy đều đặn",
      "Đã bắt đầu chuẩn bị nhưng chưa thật sự rõ ràng",
      "Mới chỉ trông vào các nguồn cơ bản như BHXH/lương hưu",
      "Chưa có kế hoạch cụ thể cho giai đoạn nghỉ hưu"
    ])
  },
  {
    id: "regular-investing",
    dimension: "Tích lũy và đầu tư định kỳ",
    advisorLabel: "Regular saving and investing",
    question:
      "Hiện tại, anh/chị có duy trì việc tích lũy hoặc đầu tư định kỳ để vừa xây dựng tương lai, vừa tăng thêm độ an toàn tài chính cho gia đình không?",
    options: withScores([
      "Có, tôi duy trì đều đặn một phần rõ ràng mỗi tháng",
      "Có, nhưng chưa đều và còn tùy từng thời điểm",
      "Thỉnh thoảng mới để dành hoặc đầu tư",
      "Hiện tại gần như chưa có thói quen này"
    ])
  }
];

export const zoneContent = {
  green: {
    label: "Vùng Xanh",
    title: "Nền tảng tài chính khá vững vàng",
    range: "43-50",
    summary:
      "Gia đình anh/chị đang có nhiều thói quen tài chính tích cực. Đây là thời điểm phù hợp để rà soát mức bảo vệ, tối ưu kế hoạch dài hạn và duy trì kỷ luật hiện tại."
  },
  yellow: {
    label: "Vùng Vàng",
    title: "Tài chính gia đình đang ở mức khá, nhưng vẫn còn vài khoảng cần củng cố",
    range: "35-42",
    summary:
      "Gia đình anh/chị đã có nền tảng tương đối ổn. Một vài điểm như dự phòng, bảo vệ thu nhập hoặc kế hoạch dài hạn nên được làm rõ hơn để tài chính bền vững hơn."
  },
  orange: {
    label: "Vùng Cam",
    title:
      "Tài chính gia đình có những nền tảng nhất định, nhưng đang tồn tại nhiều khoảng trống cần lưu ý",
    range: "25-34",
    summary:
      "Gia đình anh/chị có thể đã bắt đầu chuẩn bị ở một số mặt, nhưng vẫn còn các khoảng trống dễ tạo áp lực khi có biến động. Nên ưu tiên những bước đơn giản, thực tế và có tác động ngay."
  },
  red: {
    label: "Vùng Đỏ",
    title: "Tài chính gia đình hiện còn khá nhiều điểm cần được quan tâm sớm",
    range: "10-24",
    summary:
      "Kết quả này không phải để đánh giá đúng sai, mà để giúp gia đình nhìn rõ các ưu tiên trước mắt. Bắt đầu từ kiểm soát dòng tiền, quỹ dự phòng và phương án bảo vệ cơ bản sẽ tạo nền chắc hơn."
  }
} as const;

export type ZoneKey = keyof typeof zoneContent;
