import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";


const aramisItalic = localFont({
  src:[
    {
      path:"../../public/fonts/Aramis-Italic.ttf"
    }
  ],
  variable: "--font-aramis"
})

const Made = localFont({
  src:[
    {
      path:"../../public/fonts/MADE.ttf"
    }
  ],
  variable:"--font-made"
})

const dahila = localFont({
  src:[
    {
      path:"../../public/fonts/dahila.ttf"
    }
  ],
  variable:"--font-dahila"
})

const coolvetica = localFont({
  src:[
    {
      path:"../../public/fonts/coolvetica.ttf"
    }
  ],
  variable:"--font-coolvetica"
})
const geistMono = localFont({
  src:[
    {
      path:"../../public/fonts/GeistMonoVF.woff"
    }
  ],
  variable:"--font-geistMono"
})
const geistVG = localFont({
  src:[
    {
      path:"../../public/fonts/geistVF.woff"
    }
  ],
  variable:"--font-geistVG"
})

export const metadata: Metadata = {
  title: "Govind's Portfolio",
  description: "Created by Govind with ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${aramisItalic.variable} antialiased`}
      >
          {children}
          <CustomCursor/>
      </body>
    </html>
  );
}
