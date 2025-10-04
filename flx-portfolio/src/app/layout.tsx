import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./global.css";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FiLiX Portfolio",
  description: "Portfolio website for FLX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${outfit.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
