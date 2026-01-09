import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Script from "next/script";
import { Header } from "@/components/core/Header";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/core/Footer";

const gothamBook = localFont({
  src: "../public/fonts/GothamBook.woff2",
});

export const metadata: Metadata = {
  title: "Green hart",
  description: "Green hart",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${gothamBook.className} min-h-screen flex flex-col  `}
      >
        <Toaster />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <Script
          src="https://cdn.commoninja.com/sdk/latest/commonninja.js"
          defer
        />
      </body>
    </html>
  );
}
