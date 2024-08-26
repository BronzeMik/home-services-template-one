"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/HeaderComponent";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main className="">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
