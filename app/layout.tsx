import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rommel Valdiviezo — Mobile Software Engineer",
  description:
    "Mobile software engineer specializing in fintech platforms — building and scaling native iOS and Android apps used by 500,000+ users.",
  openGraph: {
    title: "Rommel Valdiviezo — Mobile Software Engineer",
    description:
      "Mobile software engineer specializing in fintech platforms — native iOS & Android at scale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
