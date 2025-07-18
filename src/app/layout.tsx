import type { Metadata } from "next";
import "./globals.css";
import LayoutNav from "@/components/LayoutNav";

export const metadata: Metadata = {
  title: "phoebe's portfolio",
  description: "art and design by phoebe, code by vina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col items-center mt-8">
        <LayoutNav>{children}</LayoutNav>
      </body>
    </html>
  );
}
