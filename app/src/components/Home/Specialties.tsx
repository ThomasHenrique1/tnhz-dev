import { Code2, Zap, Shield, Palette, BarChart3, Globe } from "lucide-react";

interface Specialty {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const specialties: Specialty[] = [
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "Desenvolvimento Full Stack",
    description: "Criação de aplicações web com foco em organização, escalabilidade e manutenção.",
    features: ["React / Next.js", "Node.js", "APIs REST", "Banco de Dados"]
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Performance e Qualidade",
    description: "Preocupação constante com performance, acessibilidade e boas práticas.",
    features: ["Core Web Vitals", "Otimização de Assets", "Código Limpo", "Boas Práticas"]
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Arquitetura e Segurança",
    description: "Estruturação de projetos com foco em segurança básica e organização.",
    features: ["Autenticação", "Autorização", "Boas Práticas", "Controle de Acesso"]
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "UI e Experiência",
    description: "Interfaces funcionais, consistentes e fáceis de manter.",
    features: ["Componentização", "Responsividade", "Design System", "Acessibilidade"]
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Observabilidade Básica",
    description: "Acompanhamento simples de comportamento e erros.",
    features: ["Logs", "Métricas", "Monitoramento", "Debug"]
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Integrações",
    description: "Consumo e integração com APIs e serviços externos.",
    features: ["APIs REST", "Webhooks", "Serviços de Terceiros", "Integrações"]
  }
];

export default function Specialties() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologias e práticas que utilizo no desenvolvimento de aplicações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-card backdrop-blur-sm p-8">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-primary/10 to-secondary/5 border border-border/50">
                <div className="text-primary">{service.icon}</div>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}