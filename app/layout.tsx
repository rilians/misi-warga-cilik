import type { Metadata } from "next";
import "./globals.css";
import { RootLayoutClient } from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "Misi Warga Cilik - Interactive Comic",
  description: "Mobile web komik interaktif untuk anak-anak",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
