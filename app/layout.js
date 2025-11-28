

import Header from "@/components/Header";
import "./globals.css";
import { Manrope } from '@next/font/google'

export const metadata = {
  title: "E-commerce App",
  description: "Modern E-commerce built with Next.js and Tailwind",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}
