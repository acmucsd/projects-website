import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "ACM at UC San Diego Projects Website",
  description:
    "ACM at UC San Diego Quarterly Projects for AI, Design, and Hack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
