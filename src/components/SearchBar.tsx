import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchItem {
  title: string;
  path: string;
  category: string;
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const searchItems: SearchItem[] = [
    { title: "Bíblia", path: "/biblia", category: "Recursos" },
    { title: "Devocionais", path: "/devocionais", category: "Recursos" },
    { title: "Notícias", path: "/noticias", category: "Conteúdo" },
    { title: "Tecnologia", path: "/tecnologia", category: "Conteúdo" },
    { title: "Sobre Nós", path: "/sobre", category: "Empresa" },
    { title: "Fale Conosco", path: "/contato", category: "Suporte" },
    {
      title: "Política de Privacidade",
      path: "/privacidade",
      category: "Legal",
    },
    { title: "Termos e Condições", path: "/termos", category: "Legal" },
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div ref={searchRef} className="relative hidden sm:block">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full sm:w-64 pl-10 pr-4 py-2 bg-muted/50 border border-border/40 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              setResults([]);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (searchQuery || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border/40 rounded-lg shadow-lg overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleSearch(item.path)}
                  className="w-full px-4 py-3 hover:bg-muted transition-colors text-left flex items-center justify-between group"
                >
                  <div>
                    <p className="font-medium text-sm text-foreground">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                  <Search
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-muted-foreground">
                Nenhum resultado encontrado para "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
