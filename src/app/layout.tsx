import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/core/header";
import Footer from "@/components/core/footer";
import ReduxWrapper from "@/redux/redux-wrapper";
import WompiScript from "@/scripts/wompi";
import { Toaster } from "@/components/ui/toaster"
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevTech Store",
  description:
    "Tu tienda de tecnología especializada en artículos indispensables para desarrolladores, como teclados ergonómicos, monitores de alta resolución, sillas cómodas y más. Encuentra todo lo que necesitas para crear tu espacio de trabajo ideal.",
  keywords:
    "tecnología, desarrolladores, teclados ergonómicos, monitores, sillas cómodas, espacio de trabajo, accesorios para programadores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className}`}>
        <ReduxWrapper>
          <Header />
          <main className="flex flex-col items-center justify-center w-full min-h-screen py-4">
            <Suspense>
            {children}
            </Suspense>
          </main>
          <Footer />
          <WompiScript />
          <Toaster />
        </ReduxWrapper>
      </body>
    </html>
  );
}
