import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SolidLab | Software Engineering Archive",
  description:
    "SolidLab은 일상의 비효율과 반복적인 문제를 단단한 소프트웨어로 풀어내는 독립 엔지니어링 스튜디오입니다.",
  keywords: [
    "SolidLab",
    "솔리드랩",
    "Software Engineering",
    "On-device AI",
    "Developer Tools",
    "Ark",
    "KkiniPig",
    "ZeroGStudio",
    "BOJ Extension",
  ],
  openGraph: {
    title: "SolidLab | Software Engineering Archive",
    description: "Commit Your Work. 견고하고 명쾌한 소프트웨어를 연구하고 제작합니다.",
    type: "website",
    url: "https://sldev.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[#0076dd] selection:text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
