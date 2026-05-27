import { ContactCta, PageIntro, PlaceholderMedia } from "@/components/ContentBlocks";
import { Panel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { brand, teamMembers } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <SitePage>
      <PageIntro
        label="Giới thiệu"
        title="Một nền tảng giúp tài chính gia đình bớt căng và dễ hiểu hơn."
        body={`${brand.fullName} là không gian giáo dục và tự đánh giá tài chính dành cho các gia đình trẻ. Trọng tâm là giúp anh/chị hiểu rõ tình hình hiện tại, biết điều gì nên ưu tiên và từng bước xây nền tài chính vững hơn.`}
      />
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <PlaceholderMedia title="Ảnh cá nhân hoặc ảnh làm việc với khách hàng" />
        <Panel>
          <h2 className="text-2xl font-bold text-leaf-900">FamilyFSI nghĩa là gì?</h2>
          <p className="mt-3 leading-8 text-leaf-700">
            FSI là viết tắt của Family Financial Safety Index. Đây là cách gọi cho một khung tự đánh giá
            giúp gia đình nhìn lại dòng tiền, dự phòng, bảo vệ thu nhập và các mục tiêu dài hạn.
          </p>
          <p className="mt-3 leading-8 text-leaf-700">
            Cách làm của đội ngũ thiên về giáo dục, lắng nghe và cùng khách hàng xác định bước tiếp theo phù hợp,
            đặc biệt với các gia đình có con nhỏ và nhiều trách nhiệm tài chính cùng lúc.
          </p>
        </Panel>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-leaf-900">Làm việc cùng một đội ngũ tư vấn</h2>
        <p className="mt-3 max-w-3xl leading-8 text-leaf-700">
          FamilyFSI được vận hành bởi một đội ngũ tư vấn. Một số khách hàng có thể được phân công cho thành viên phù hợp,
          để khách hàng được phản hồi đúng thời điểm và đúng nhu cầu hơn.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Panel key={member.id} className="shadow-none">
              <h3 className="text-xl font-bold text-leaf-900">{member.name}</h3>
              <p className="mt-2 text-sm font-semibold text-leaf-600">{member.role}</p>
            </Panel>
          ))}
        </div>
      </section>
      <ContactCta />
    </SitePage>
  );
}
