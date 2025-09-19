import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// import { PhoenixTracker } from "@/components/PhoenixTracker";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Pasture Perfect - Comprehensive Cow Information Portal",
  description: "Discover cattle breeds, fascinating cow facts, and educational resources about the world of cattle. Your ultimate guide to bovine knowledge."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-phoenix-id="phoenix-7448bc59-1">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} data-phoenix-id="phoenix-7448bc59-2">
        <QueryProvider data-phoenix-id="phoenix-7448bc59-3">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            data-phoenix-id="phoenix-7448bc59-4"
          >
            <TooltipProvider data-phoenix-id="phoenix-7448bc59-5">
              <Header data-phoenix-id="phoenix-7448bc59-6" />
              {children}
              <Footer data-phoenix-id="phoenix-7448bc59-7" />
              <Toaster data-phoenix-id="phoenix-7448bc59-8" />
              <Sonner data-phoenix-id="phoenix-7448bc59-9" />
              {/* <PhoenixTracker data-phoenix-id="phoenix-7448bc59-10" /> */}
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}