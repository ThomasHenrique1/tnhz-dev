// components/projects/ProjectsGrid.tsx
'use client';

import { ProjectCard } from "./ProjectCard";

interface Project {
  slug: string;
  frontmatter: {
    title: string;
    short?: string;
    cover?: string; // estrutura antiga
    media?: { // estrutura nova
      cover?: string;
      gallery?: Array<{ src: string; alt: string; caption?: string }>;
    };
    tags?: string[];
    date?: string;
    featured?: boolean;
  };
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) return null;

  // Debug: Mostrar informações de cada projeto
  console.log('🔍 ProjectsGrid - Informações dos projetos:');
  projects.forEach(({ slug, frontmatter }) => {
    console.log(`Projeto: ${slug}`);
    console.log(`- Title: ${frontmatter.title}`);
    console.log(`- Cover (old): ${frontmatter.media?.cover}`);
    console.log(`- Media.cover: ${frontmatter.media?.cover}`);
    console.log(`- Tags: ${frontmatter.tags?.join(', ')}`);
    console.log('---');
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map(({ slug, frontmatter }) => (
        <ProjectCard
          key={slug}
          slug={slug}
          title={frontmatter.title}
          short={frontmatter.short}
          cover={frontmatter.media?.cover} // estrutura antiga
          media={frontmatter.media}
          tags={frontmatter.tags}
          date={frontmatter.date}
          featured={frontmatter.featured}
        />
      ))}
    </div>
  );
}