"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button"; // Supondo que você tenha um componente de botão base

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para levar o usuário ao topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para uma rolagem suave
    });
  };

  useEffect(() => {
    // Função para verificar a posição do scroll
    const toggleVisibility = () => {
      // Mostra o botão se a página for rolada mais de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona o listener de evento de scroll
    window.addEventListener("scroll", toggleVisibility);

    // Remove o listener quando o componente é desmontado para evitar memory leaks
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full shadow-lg
        bg-primary text-primary-foreground hover:bg-primary/90
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
};
