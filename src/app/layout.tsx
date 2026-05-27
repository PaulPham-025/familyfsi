import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FamilyFSI",
  description: "Chỉ số An toàn Tài chính Gia đình dành cho các gia đình trẻ."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
