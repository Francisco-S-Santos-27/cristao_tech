import { useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { NavLink } from "@/components/NavLink";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

  // Mapa de rotas para labels legíveis
  const routeLabels: { [key: string]: string } = {
    biblia: "Bíblia",
    devocionais: "Devocionais",
    noticias: "Notícias",
    tecnologia: "Tecnologia",
    sobre: "Sobre",
    contato: "Contato",
    "ajude-nos": "Ajude-nos",
    privacidade: "Política de Privacidade",
    cookies: "Configurações de Cookies",
    termos: "Termos e Condições",
  };

  pathnames.forEach((pathname, index) => {
    const path = "/" + pathnames.slice(0, index + 1).join("/");
    const label = routeLabels[pathname] || pathname;
    breadcrumbItems.push({ label, path });
  });

  // Não mostrar breadcrumb na home
  if (location.pathname === "/") return null;

  return (
    <nav
      className="bg-muted/30 border-b border-border/40 py-3"
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index === 0 ? (
                <NavLink
                  to={item.path}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-semibold"
                >
                  <Home size={16} />
                  <span>{item.label}</span>
                </NavLink>
              ) : (
                <>
                  <ChevronRight size={16} className="text-muted-foreground" />
                  {index === breadcrumbItems.length - 1 ? (
                    <span className="text-foreground font-medium">
                      {item.label}
                    </span>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </NavLink>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
