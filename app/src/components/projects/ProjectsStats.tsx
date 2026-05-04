// components/projects/ProjectsStats.tsx
import { Calendar, Tag, Layers } from "lucide-react";

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
    <div className="mt-16 pt-10 border-t border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Projetos */}
        <div className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md text-center">
          <div className="flex justify-center mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="text-3xl font-bold text-primary mb-1">
            {projectsCount}
          </div>
          <p className="text-sm text-muted-foreground">
            Projetos
          </p>
        </div>

        {/* Tecnologias */}
        <div className="group p-6 rounded-xl border border-border/50 bg-card hover:border-secondary/30 transition-all duration-300 hover:shadow-md text-center">
          <div className="flex justify-center mb-3">
            <div className="p-2 rounded-lg bg-secondary/10">
              <Tag className="w-5 h-5 text-secondary" />
            </div>
          </div>
          <div className="text-3xl font-bold text-secondary mb-1">
            {technologiesCount}
          </div>
          <p className="text-sm text-muted-foreground">
            Tecnologias
          </p>
        </div>

        {/* Complexidade */}
        <div className="group p-6 rounded-xl border border-border/50 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-md text-center">
          <div className="flex justify-center mb-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Layers className="w-5 h-5 text-accent" />
            </div>
          </div>
          <div className="text-3xl font-bold text-accent mb-1">
            {maxTechnologiesPerProject}
          </div>
          <p className="text-sm text-muted-foreground">
            Máx. por projeto
          </p>
        </div>

      </div>
    </div>
  );
}