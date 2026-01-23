import { getAllProjects } from "@/app/src/lib/content.server";
import { ProjectsHero } from "@/app/src/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/app/src/components/projects/ProjectsGrid";
import { ProjectsStats } from "@/app/src/components/projects/ProjectsStats";
import { ProjectsEmptyState } from "@/app/src/components/projects/ProjectsEmptyState";
import { ProjectsCTA } from "@/app/src/components/projects/ProjectsCTA";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  // Calcular estatísticas
  const allTags = Array.from(
    new Set(projects.flatMap(p => p.frontmatter.tags || []))
  );

  const maxTechnologiesPerProject = Math.max(
    ...projects.map(p => p.frontmatter.tags?.length || 0)
  );

  return (
    <main className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <ProjectsHero 
        projectsCount={projects.length}
        technologiesCount={allTags.length}
      />

      {/* Conteúdo Principal */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {projects.length === 0 ? (
            <ProjectsEmptyState />
          ) : (
            <>
              {/* Contador */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  Mostrando <span className="font-semibold text-foreground">{projects.length}</span> projetos
                </p>
              </div>

              {/* Grid de Projetos */}
              <ProjectsGrid projects={projects} />

              {/* Estatísticas */}
              <ProjectsStats 
                projectsCount={projects.length}
                technologiesCount={allTags.length}
                maxTechnologiesPerProject={maxTechnologiesPerProject}
                
              />
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <ProjectsCTA />
    </main>
  );
}