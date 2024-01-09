import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";

import { Toaster } from "react-hot-toast";

import HomeBackground from "@/components/HomeBackground";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ka Talk Blast",
  description: "Mass Kakao Talk Message Sending Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_VALUE}
        crossOrigin="anonymous"
      />
      <body className={notoSansKr.className}>
        <main className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden">
          <Toaster />
          <HomeBackground />
          {children}
        </main>
      </body>
    </html>
  );
}
