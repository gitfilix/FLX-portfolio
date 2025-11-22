import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./global.css";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Felix Adam Portfolio",
  description: "Portfolio website - Felix Adam",
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
