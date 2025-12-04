import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { CartProvider } from "./components/CartContext";

export const metadata: Metadata = {
  title: "Loja de Jogos",
  description: "Loja de jogos em Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-blue-950 min-h-screen text-slate-900 dark:text-slate-100">
        <CartProvider>
          <Header />
          <div className="pt-24">
            <Container>
              <main className="py-10">{children}</main>
            </Container>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}