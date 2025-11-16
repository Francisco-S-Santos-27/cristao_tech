import { Heart, Zap, Code, Church } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/AnimatedCard";

const AjudeNos = () => {
  const contributionOptions = [
    {
      icon: Heart,
      title: "Doação Única",
      description: "Faça uma contribuição única para apoiar nosso ministério digital",
      action: "Doar Agora",
    },
    {
      icon: Zap,
      title: "Apoio Mensal",
      description: "Torne-se um parceiro mensal e sustente este projeto continuamente",
      action: "Ser Parceiro",
    },
    {
      icon: Code,
      title: "Contribua com Código",
      description: "Desenvolvedores podem contribuir com código no GitHub",
      action: "Ver GitHub",
    },
    {
      icon: Church,
      title: "Ore Por Nós",
      description: "Sua oração é fundamental para o sucesso deste ministério",
      action: "Saber Mais",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ajude-nos a Continuar
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sua contribuição nos ajuda a manter este projeto ativo, desenvolvendo novas funcionalidades 
            e alcançando mais pessoas com tecnologia e fé.
          </p>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Apoiar?</h2>
            <p className="text-muted-foreground">
              O CristãoTech é um projeto sem fins lucrativos dedicado a unir fé e tecnologia. 
              Seus recursos nos ajudam a:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimatedCard delay={0.1}>
              <Card className="h-full border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Manter Servidores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custos de hospedagem, domínio e infraestrutura para manter o site sempre no ar.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="h-full border-secondary/20 hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-secondary">Desenvolver Recursos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Criar novos recursos, melhorar a experiência e expandir o conteúdo disponível.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-accent/20 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-accent">Alcançar Mais Pessoas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Investir em divulgação para que mais pessoas conheçam este projeto.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>

          {/* Contribution Options */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Como Você Pode Ajudar</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contributionOptions.map((option, index) => (
                <AnimatedCard key={index} delay={0.1 * (index + 1)}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                        <option.icon className="text-primary-foreground" size={24} />
                      </div>
                      <CardTitle>{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Gratidão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cada contribuição, seja financeira, técnica ou através de oração, é essencial para 
                  que possamos continuar este trabalho de integração entre fé e tecnologia.
                </p>
                <p className="font-semibold text-primary">
                  "Cada um contribua segundo tiver proposto no coração, não com tristeza ou por necessidade; 
                  porque Deus ama a quem dá com alegria." - 2 Coríntios 9:7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AjudeNos;
