import { getAllProjects } from "@/app/src/lib/content.server";
import { ProjectsHero } from "@/app/src/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/app/src/components/projects/ProjectsGrid";
import { ProjectsStats } from "@/app/src/components/projects/ProjectsStats";
import { ProjectsEmptyState } from "@/app/src/components/projects/ProjectsEmptyState";
import { ProjectsCTA } from "@/app/src/components/projects/ProjectsCTA";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  const projectsCount = projects.length;

  const allTags = [
    ...new Set(projects.flatMap(p => p.frontmatter.tags ?? []))
  ];

  const maxTechnologiesPerProject =
    projectsCount > 0
      ? Math.max(...projects.map(p => p.frontmatter.tags?.length || 0))
      : 0;

  return (
    <main className="min-h-screen pt-20 pb-16">
      <ProjectsHero
        projectsCount={projectsCount}
        technologiesCount={allTags.length}
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {projectsCount === 0 ? (
            <ProjectsEmptyState />
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  Mostrando{" "}
                  <span className="font-semibold text-foreground">
                    {projectsCount}
                  </span>{" "}
                  {projectsCount === 1 ? "projeto" : "projetos"}
                </p>
              </div>

              <ProjectsGrid projects={projects} />

              <ProjectsStats
                projectsCount={projectsCount}
                technologiesCount={allTags.length}
                maxTechnologiesPerProject={maxTechnologiesPerProject}
              />
            </>
          )}
        </div>
      </section>

      <ProjectsCTA />
    </main>
  );
}