import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ToastProvider } from "@/providers/toast.provider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unsent DMs",
  description: "A collection of unsent DMs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased bg-white-bg dark:bg-black-bg text-black-fg dark:text-white-fg`}
      >
        <ToastProvider>
          <Suspense fallback={<>Loading...</>}>
            <div className="font-[family-name:var(--font-geist-sans)] relative overflow-x-hidden">
              <Header />

              {children}
            </div>
          </Suspense>
        </ToastProvider>
      </body>
    </html>
  );
}
