import { ReactNode, MouseEvent } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import FloatingActions from "@/components/FloatingActions";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

  const handleGlobalLinkClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    const anchor = target.closest("a");

    if (!anchor) return;

    const href = anchor.getAttribute("href");

    // Only handle internal routes
    if (href && href.startsWith("/")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      onClickCapture={handleGlobalLinkClick}
    >
      <Navbar />

      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
};
