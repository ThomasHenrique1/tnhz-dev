// components/projects/ProjectsHero.tsx
import { Calendar, Tag } from "lucide-react";

interface ProjectsHeroProps {
  projectsCount: number;
  technologiesCount: number;
}

export function ProjectsHero({ projectsCount, technologiesCount }: ProjectsHeroProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-background to-muted/10">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Meu <span className="text-primary">Portfólio</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uma coleção de projetos onde transformei ideias em soluções reais.
            Cada projeto conta uma história de desafios superados e objetivos alcançados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{projectsCount} Projetos Realizados</span>
            </div>

            {technologiesCount > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <Tag className="w-4 h-4 text-secondary" />
                <span>{technologiesCount} Tecnologias Utilizadas</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}