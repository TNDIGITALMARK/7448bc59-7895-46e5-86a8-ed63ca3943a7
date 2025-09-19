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

import { PhoenixTracker } from "@/components/PhoenixTracker";
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
}) {
  return (
    React.createElement("html", { lang: "en", suppressHydrationWarning: true, "data-phoenix-id": "phoenix-7448bc59-1" }, 
    React.createElement("body", { className: `${geistSans.variable} ${geistMono.variable} antialiased`, "data-phoenix-id": "phoenix-7448bc59-2" }, 
    React.createElement(QueryProvider, { "data-phoenix-id": "phoenix-7448bc59-3" }, 
    React.createElement(ThemeProvider, {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      disableTransitionOnChange: true,
      "data-phoenix-id": "phoenix-7448bc59-4" }, 
    React.createElement(TooltipProvider, { "data-phoenix-id": "phoenix-7448bc59-5" }, 
    React.createElement(Header, null),
    children,
    React.createElement(Footer, null),
    React.createElement(Toaster, null),
    React.createElement(Sonner, null, "        ", React.createElement(PhoenixTracker, null)))))))
  );
}