import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTopButton } from "./ui/scroll-to-top";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
