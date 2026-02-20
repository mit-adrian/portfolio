import "./globals.css";
import { Inter } from "next/font/google";
import FloatingScreenSizeTracker from "../components/layout/FloatingScreenSizeTracker";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-black text-slate-100`}>
        {children}
        <FloatingScreenSizeTracker />
      </body>
    </html>
  );
}
