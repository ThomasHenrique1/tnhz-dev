interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Entendimento",
    description: "Análise do contexto, objetivos e requisitos técnicos antes de iniciar qualquer implementação."
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Definição da arquitetura, stack e organização do projeto para facilitar manutenção e evolução."
  },
  {
    step: "03",
    title: "Implementação",
    description: "Desenvolvimento incremental com foco em boas práticas, legibilidade e consistência."
  },
  {
    step: "04",
    title: "Entrega",
    description: "Publicação da solução, ajustes finais e correções conforme necessário."
  }
];

export default function DevelopmentProcess() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Processo de Desenvolvimento
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Um fluxo de trabalho focado em entender o problema, estruturar bem a solução
            e entregar código claro, funcional e evolutivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="group relative overflow-hidden rounded-2xl border border-border/50 
                         bg-gradient-card p-6
                         hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10
                         transition-all duration-300"
            >
              <div className="relative flex items-start gap-4">
                
                {/* Número */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl 
                             gradient-primary text-primary-foreground font-semibold text-sm shrink-0"
                >
                  {step.step}
                </div>

                {/* Conteúdo */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}