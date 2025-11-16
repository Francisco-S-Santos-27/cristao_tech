import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            {/* Logo */}
            <NavLink to="/" className="flex items-center ">
              <img src={logo} alt="CristãoTech" className="h-21 w-21" />
            </NavLink>
            
            <p className="text-sm text-muted-foreground">
              Unindo fé e tecnologia para transformar vidas através do
              conhecimento digital e espiritual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/biblia"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bíblia
                </a>
              </li>
              <li>
                <a
                  href="/devocionais"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Devocionais
                </a>
              </li>
              <li>
                <a
                  href="/noticias"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Notícias
                </a>
              </li>
              <li>
                <a
                  href="/tecnologia"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tecnologia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contato@cristaotech.com</li>
              <li>Tel: (11) 99999-9999</li>
              <li>
                <a
                  href="/contato"
                  className="hover:text-primary transition-colors"
                >
                  Formulário de Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} AlfaCodeTech. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
