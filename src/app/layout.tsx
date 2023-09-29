import "./_styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASBHY CEPE",
  description: "Personal Portfolio Site",
  icons: {
    icon: [
      {
        url: "favicon/light-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "favicon/dark-icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
