'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, ThemeModeScript } from "flowbite-react";
import "./globals.css";
import { SiteFooter } from "@/src/Footer";
import { Header } from "@/src/Header";
import { HeaderMobile } from "@/src/Header-Mobile";
import { CircleX } from "lucide-react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Croxy Proxy",
//   description: "Unlock any website",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [bottomAdClose, setBottomAdClose] = useState(true);

  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="block md:hidden">
          <HeaderMobile />
        </div>
        <div>
          {children}
        </div>
        <div style={{ borderTop: '1px solid grey', display: bottomAdClose ? 'block' : 'none', zIndex:'80' }} className='hidden md:block sticky bottom-0 py-2 bg-white'>
          <CircleX onClick={() => { setBottomAdClose(false) }} style={{ marginTop: '-20px', borderRadius: '20px', cursor: 'pointer' }} className="ml-auto mr-3 text-white bg-black" />
          <div className="flex items-center justify-center">
            <div style={{ height: '90px', width: '720px' }} className="bg-orange-400">

            </div>
          </div>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
