// app/src/lib/content.ts
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const PROJECTS_DIR = path.join(
  process.cwd(),
  "app",
  "content",
  "projects"
);

export type ProjectFrontmatter = {
  duration?: string;
  team?: string;
  tags: string[];
  githubUrl?: string;
  date?: string;
  github?: string;
  liveUrl?: string;
  status?: string;
  title: string;
  short?: string;
  cover?: string;
  tech?: string[];
  featured?: boolean;
};

// Esta função só pode ser usada em Server Components
export async function getProjectSlugs(): Promise<string[]> {
  const fs = await import("fs/promises");
  const files = await fs.readdir(PROJECTS_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

// Esta função só pode ser usada em Server Components
export async function getProjectBySlug(slug: string) {
  const fs = await import("fs/promises");
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    contentHtml: processed.toString(),
  };
}

// Esta função só pode ser usada em Server Components
export async function getAllProjects() {
  const slugs = await getProjectSlugs();

  return Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getProjectBySlug(slug);
      return { slug, frontmatter };
    })
  );
}

// Funções auxiliares que podem ser usadas em Client Components
export const projectHelpers = {
  formatDate: (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  },
  
  formatShortDate: (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  },
  
  getGithubUrl: (frontmatter: ProjectFrontmatter) => {
    return frontmatter.githubUrl || frontmatter.github;
  }
};