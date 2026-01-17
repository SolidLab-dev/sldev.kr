import type { Metadata } from "next";
import "./globals.css";
import { clsx } from "clsx";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solid Lab | Commit Your Work",
  description: "We Build Solid Software. VS Code Extensions & Developer Tools.",
  keywords: [
    "Solid Lab",
    "Developer Tools",
    "VS Code Extension",
    "Software Development",
    "Baekjoon",
  ],
  openGraph: {
    title: "Solid Lab",
    description: "Commit Your Work. 견고한 소프트웨어를 만듭니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={clsx("min-h-screen bg-background text-foreground font-sans")}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
