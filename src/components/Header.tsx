import { NavLink } from "@/components/NavLink";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Bíblia", path: "/biblia" },
    { name: "Devocionais", path: "/devocionais" },
    { name: "Notícias", path: "/noticias" },
    { name: "Tecnologia", path: "/tecnologia" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
    { name: "Ajude-nos", path: "/ajude-nos" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="CristãoTech" className="h-10 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                activeClassName="text-primary font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            
            <button
              className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 rounded-md transition-colors hover:bg-muted hover:text-primary"
                  activeClassName="bg-muted text-primary font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
