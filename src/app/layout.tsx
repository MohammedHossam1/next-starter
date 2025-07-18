import "./globals.css";

import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata =  {
  title: "Next Starter",
  description: "next-starter",
  icons: {
    icon: "/favicon.ico",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${almarai.className} antialiased`}>
        <NextIntlClientProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
          <Toaster />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
