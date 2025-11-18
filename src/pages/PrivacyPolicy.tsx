const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A CristãoTech ("nós", "nosso" ou "nos") é compromissada com a
              proteção de sua privacidade. Esta Política de Privacidade explica
              como coletamos, usamos, divulgamos e protegemos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Informações que Coletamos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Coletamos informações de várias formas, incluindo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                Informações pessoais que você fornece voluntariamente (nome,
                email, etc.)
              </li>
              <li>
                Informações sobre seu uso do nosso site (cookies, arquivos de
                log)
              </li>
              <li>Dados demográficos e de localização aproximada</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Como Usamos Suas Informações
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Enviar comunicações promocionais (com seu consentimento)</li>
              <li>Analisar uso do site e tendências</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Proteção de Dados
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança apropriadas para proteger suas
              informações pessoais contra acesso não autorizado, alteração,
              divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Compartilhamento de Informações
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Não vendemos, comercializamos ou transferimos suas informações
              pessoais identificáveis a terceiros, exceto conforme exigido por
              lei ou conforme necessário para fornecer nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento para coleta de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se tiver dúvidas sobre esta Política de Privacidade, entre em
              contato conosco através de:
              <br />
              Email: privacidade@cristaotech.com
            </p>
          </section>

          <section>
            <p className="text-sm text-muted-foreground pt-8 border-t">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
