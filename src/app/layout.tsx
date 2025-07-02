import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Primecrew",
   description: "Moving & Logistics",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="bg-[#f7f7f7]">
         <body
            className={`${geistSans.variable} ${geistMono.variable} text-[#262626] text-md lg:text-lg xl:text-xl antialiased`}
         >
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
