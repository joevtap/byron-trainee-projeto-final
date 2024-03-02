import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roteirizando",
  description: "Roteiros de viagem para todos os gostos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1440px] my-0 mx-auto">
          <Toaster richColors position="bottom-center" />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
