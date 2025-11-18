import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  Shield,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="flex items-center mb-4">
              <img src={logo} alt="CristãoTech" className="h-16 w-16" />
            </NavLink>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Unindo fé e tecnologia para transformar vidas através do
              conhecimento digital e espiritual.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Mapa do Site */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded"></span>
              Mapa do Site
            </h4>
            <ul className="space-y-3 text-sm">
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
              <li>
                <a
                  href="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Links de Suporte */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded"></span>
              Suporte
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <HelpCircle size={16} />
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="/contato"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Shield size={16} />
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded"></span>
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-xs">Email</p>
                  <a
                    href="mailto:contato@cristaotech.com"
                    className="hover:text-primary transition-colors"
                  >
                    contato@cristaotech.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-xs">
                    Telefone
                  </p>
                  <a
                    href="tel:+551199999999"
                    className="hover:text-primary transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-xs">
                    Localização
                  </p>
                  <p>São Paulo, SP</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legais */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded"></span>
              Legais
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/privacidade"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Termos e Condições
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Configurações de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-border/40 mb-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold text-foreground">CristãoTech</span>
              .
              <br className="md:hidden" />
              Todos os direitos reservados.
            </p>
          </div>

          <div className="flex justify-center gap-2 text-xs text-muted-foreground">
            <span>Desde 2024</span>
            <span className="text-border">•</span>
            <span>Conteúdo 100% Seguro</span>
          </div>

          <div className="text-right text-xs text-muted-foreground">
            <p>Desenvolvido com ❤️ para a comunidade cristã</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
