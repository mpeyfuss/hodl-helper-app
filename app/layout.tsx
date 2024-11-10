import type { Metadata } from "next";
import { Indie_Flower, Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const titleFont = Indie_Flower({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
});

const bodyFont = Nunito({
  weight: "400",
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HODL Helper",
  description: "Believe in something and just HODL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} ${bodyFont.variable} font-body`}>
        {children}
        <Toaster position="bottom-center" duration={5000} closeButton />
      </body>
    </html>
  );
}
