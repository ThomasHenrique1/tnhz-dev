import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/themes/ThemeProvider";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "tnhz.dev — Portfólio",
  description: "Portfólio técnico — projetos, case studies e contato.",
  icons: {
    icon: "/ICON.png",
    shortcut: "/ICON.png",
    apple: "/ICON.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground",
          fontSans.variable
        )}
      >
        {/* SCRIPT CORRETO */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem("theme");
                  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const theme = stored || (systemDark ? "dark" : "light");
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />

        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}