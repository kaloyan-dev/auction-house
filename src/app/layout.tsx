import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DisplayMode from "@/components/DisplayMode";
import { ReduxProvider } from "@/store/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auction House™",
  description: "Your one-stop platform for buying and selling auction items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ReduxProvider>
          <div className="p-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl mb-2">Welcome to Auction House™</h1>
                <p className="text-gray-400">
                  Your one-stop platform for buying and selling auction items.
                </p>
              </div>
              <DisplayMode />
            </div>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
