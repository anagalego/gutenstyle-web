import type { Metadata } from "next";
import { Alegreya, Karla } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar"

export const alegreya_regular = Alegreya({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const karla_regular = Karla({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Gutenstyle",
  description: "React UI Components."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${karla_regular.className} ${alegreya_regular.className} antialiased`}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-screen-2xl h-screen px-4 flex">
            <Navbar brand="Gutenstyle" />
            <main className="w-full h-full py-8 overflow-scroll">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
