import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, ThemeModeScript } from "flowbite-react";
import "./globals.css";
import { SiteFooter } from "@/src/Footer";
import { Header } from "@/src/Header";
import { HeaderMobile } from "@/src/Header-Mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Croxy Proxy",
  description: "Unlock any website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <SiteFooter />
      </body>
    </html>
  );
}
