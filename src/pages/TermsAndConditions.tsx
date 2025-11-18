const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Termos e Condições</h1>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e usar este site, você aceita estar vinculado a estes
              Termos e Condições. Se você não concorda com qualquer parte destes
              termos, não use este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Uso do Site</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Você concorda em:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Usar este site apenas para fins legais</li>
              <li>Não transmitir conteúdo ofensivo, prejudicial ou ilícito</li>
              <li>Não interferir com o funcionamento do site</li>
              <li>Não tentar acessar áreas restritas sem autorização</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Conteúdo e Propriedade Intelectual
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Todo o conteúdo deste site, incluindo texto, gráficos, logotipos e
              imagens, é propriedade da CristãoTech ou seus fornecedores de
              conteúdo e é protegido por leis de direitos autorais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Você pode acessar e exibir o conteúdo para seu uso pessoal, não
              comercial, desde que não remova avisos de direitos autorais ou
              marcas registradas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Isenção de Responsabilidade
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Este site é fornecido "como está" sem garantias de qualquer tipo,
              expressas ou implícitas. A CristãoTech não garante que o site
              estará livre de erros, vírus ou componentes prejudiciais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitação de Responsabilidade
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Em nenhuma circunstância a CristãoTech será responsável por danos
              indiretos, incidentais, especiais ou consequentes resultantes do
              uso ou incapacidade de usar este site ou o conteúdo nele.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Links para Terceiros
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Este site pode conter links para sites de terceiros. A CristãoTech
              não é responsável pelo conteúdo, precisão ou práticas de
              privacidade desses sites externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Modificação de Termos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A CristãoTech se reserva o direito de modificar estes Termos a
              qualquer momento. Mudanças entram em vigor imediatamente após a
              publicação no site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Lei Aplicável</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos e Condições são regidos pelas leis da República
              Federativa do Brasil, sem considerar seus conflitos de disposições
              legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre estes Termos e Condições, entre em contato
              conosco:
              <br />
              Email: legal@cristaotech.com
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

export default TermsAndConditions;
