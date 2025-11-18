import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const CookieSettings = () => {
  const [essentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  const handleSave = () => {
    const settings = {
      essential: essentialCookies,
      analytics: analyticsCookies,
      marketing: marketingCookies,
    };
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    alert("Configurações de cookies salvas com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Configurações de Cookies</h1>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">O que são Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies são pequenos arquivos de dados armazenados no seu navegador. Usamos cookies para melhorar 
              sua experiência, analisar uso do site e fornecer conteúdo personalizado.
            </p>
          </section>

          <section className="bg-muted/30 p-6 rounded-lg space-y-6">
            <div className="flex items-start space-x-4">
              <Checkbox 
                id="essential" 
                checked
                disabled
              />
              <div className="flex-1">
                <label htmlFor="essential" className="font-semibold text-base cursor-pointer">
                  Cookies Essenciais (Obrigatórios)
                </label>
                <p className="text-sm text-muted-foreground mt-2">
                  Necessários para o funcionamento básico do site. Não podem ser desativados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Checkbox 
                id="analytics" 
                checked={analyticsCookies}
                onCheckedChange={(checked) => setAnalyticsCookies(checked === true)}
              />
              <div className="flex-1">
                <label htmlFor="analytics" className="font-semibold text-base cursor-pointer">
                  Cookies de Análise
                </label>
                <p className="text-sm text-muted-foreground mt-2">
                  Ajudam-nos a entender como você usa o site para melhorar nossos serviços.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Checkbox 
                id="marketing" 
                checked={marketingCookies}
                onCheckedChange={(checked) => setMarketingCookies(checked === true)}
              />
              <div className="flex-1">
                <label htmlFor="marketing" className="font-semibold text-base cursor-pointer">
                  Cookies de Marketing
                </label>
                <p className="text-sm text-muted-foreground mt-2">
                  Usados para rastrear visitantes entre sites e exibir anúncios relevantes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Cookies de Sessão</h3>
                <p className="text-muted-foreground text-sm">
                  Armazenam informações temporárias durante sua sessão no site.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cookies Persistentes</h3>
                <p className="text-muted-foreground text-sm">
                  Permanecem no seu dispositivo para melhorar futuras visitas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cookies de Terceiros</h3>
                <p className="text-muted-foreground text-sm">
                  Definidos por parceiros para análise e marketing.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Como Gerenciar Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você pode controlar cookies através das configurações do seu navegador. 
              No entanto, desabilitar cookies pode afetar a funcionalidade do site.
            </p>
            <Button onClick={handleSave} className="mt-4">
              Salvar Preferências de Cookies
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;
