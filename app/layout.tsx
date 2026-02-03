import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Adrian Karlo Siangco | Full-Stack Developer",
  description:
    "Full-stack developer building secure, scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          bg-white dark:bg-black
          text-black dark:text-slate-100
          transition-colors duration-300
        `}
      >
        {children}
      </body>
    </html>
  );
}
