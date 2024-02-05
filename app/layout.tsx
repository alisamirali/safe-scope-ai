import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const rm = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafeScope AI",
  description: "AI-Powered Web App with People Detection and Recording",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rm.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
