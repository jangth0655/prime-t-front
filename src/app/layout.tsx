import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/QueryProvider";

const NotoSansKR = Noto_Sans_KR({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime-T",
  description: "Prime-T",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NotoSansKR.className}>
        <QueryProvider>
          <main className="min-w-sm m-auto">
            <Navbar />
            {children}
          </main>
          <div id="modal"></div>
        </QueryProvider>
      </body>
    </html>
  );
}
