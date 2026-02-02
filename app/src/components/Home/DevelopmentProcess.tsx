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
    <section className="relative py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Processo de Desenvolvimento
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Um fluxo de trabalho focado em entender o problema, estruturar bem a solução
            e entregar código claro, funcional e evolutivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border/50 
                         bg-gradient-card backdrop-blur-sm p-8
                         hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                         transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative flex items-start gap-6">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-2xl 
                             gradient-primary text-primary-foreground font-bold text-xl shrink-0"
                >
                  {step.step}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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