import "./globals.css";

export const metadata = {
  title: "E-commerce App",
  description: "Modern E-commerce built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
