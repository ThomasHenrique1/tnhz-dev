import { Code2, Zap, Shield, Palette, BarChart3, Globe } from "lucide-react";

interface Specialty {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const specialties: Specialty[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Desenvolvimento Full Stack",
    description: "Criação de aplicações web com foco em organização, escalabilidade e manutenção.",
    features: ["React / Next.js", "Node.js", "APIs REST", "Banco de Dados"]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance e Qualidade",
    description: "Preocupação constante com performance, acessibilidade e boas práticas.",
    features: ["Core Web Vitals", "Otimização de Assets", "Código Limpo", "Boas Práticas"]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Arquitetura e Segurança",
    description: "Estruturação de projetos com foco em segurança básica e organização.",
    features: ["Autenticação", "Autorização", "Boas Práticas", "Controle de Acesso"]
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI e Experiência",
    description: "Interfaces funcionais, consistentes e fáceis de manter.",
    features: ["Componentização", "Responsividade", "Design System", "Acessibilidade"]
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Observabilidade Básica",
    description: "Acompanhamento simples de comportamento e erros.",
    features: ["Logs", "Métricas", "Monitoramento", "Debug"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Integrações",
    description: "Consumo e integração com APIs e serviços externos.",
    features: ["APIs REST", "Webhooks", "Serviços de Terceiros", "Integrações"]
  }
];

export default function Specialties() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnologias e práticas aplicadas no desenvolvimento de aplicações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((service) => (
            <div 
              key={service.title}
              className="group relative rounded-2xl border border-border/50 
                         bg-gradient-card p-6 transition-all duration-300
                         hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Ícone */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 
                              bg-primary/10 border border-border/50 text-primary">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-foreground/70">{feature}</span>
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