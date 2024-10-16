import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import styles from "../components/CustomCursor/CustomCursor.module.css"
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
        className={`antialiased`}
      >
        {children}
        <CustomCursor/>
      </body>
    </html>
  );
}
