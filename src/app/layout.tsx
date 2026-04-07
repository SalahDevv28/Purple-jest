import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Purple Jest",
    default: "Purple Jest – Brave Living. Old-Fashioned Value.",
  },
  description: "Affordable apartments in amazing locations. Classic value, modern living. Find your stronghold with Purple Jest.",
  keywords: ["affordable apartments", "brave living spaces", "old-fashioned rentals", "Purple Jest apartments", "classic apartments"],
  authors: [{ name: "Purple Jest" }],
  openGraph: {
    title: "Purple Jest – Brave Living. Old-Fashioned Value.",
    description: "Affordable apartments in amazing locations. Classic value, modern living.",
    type: "website",
    siteName: "Purple Jest",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
