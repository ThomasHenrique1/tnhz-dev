// components/projects/ProjectsStats.tsx
interface ProjectsStatsProps {
  projectsCount: number;
  technologiesCount: number;
  maxTechnologiesPerProject: number;
}

export function ProjectsStats({ 
  projectsCount, 
  technologiesCount, 
  maxTechnologiesPerProject 
}: ProjectsStatsProps) {
  return (
    <div className="mt-16 pt-8 border-t border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">{projectsCount}</div>
          <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-secondary mb-2">{technologiesCount}</div>
          <p className="text-sm text-muted-foreground">Tecnologias Utilizadas</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-accent mb-2">{maxTechnologiesPerProject}</div>
          <p className="text-sm text-muted-foreground">Máx. Tecnologias por Projeto</p>
        </div>
      </div>
    </div>
  );
}