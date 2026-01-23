/* eslint-disable @typescript-eslint/no-explicit-any */
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

// Tipos atualizados para a nova estrutura
export type TechStack = {
  frontend?: string[];
  backend?: string[];
  tools?: string[];
  all?: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Media = {
  cover?: string;
  gallery?: GalleryImage[];
  featured?: string; // GIF ou vídeo
};

export type ProjectLinks = {
  github?: string;
  live?: string;
  demo?: string;
  figma?: string;
  documentation?: string;
};

export type Challenge = {
  problem: string;
  solution: string;
};

export type ProjectMetadata = {
  category?: string;
  complexity?: string;
  client?: string;
  role?: string;
  repoSize?: string;
  commits?: number;
};

export type ProjectFrontmatter = {
  // Básico
  title: string;
  short?: string;
  description?: string;
  date?: string;
  
  // Status
  duration?: string;
  team?: string;
  status?: string;
  featured?: boolean;
  
  // Tecnologias (estrutura antiga e nova)
  tags?: string[];
  tech?: string[];
  techStack?: TechStack;
  
  // Mídia (estrutura antiga e nova)
  cover?: string;
  media?: Media;
  
  // Links (estrutura antiga e nova)
  githubUrl?: string;
  liveUrl?: string;
  links?: ProjectLinks;
  
  // Conteúdo enriquecido
  highlights?: string[];
  challenges?: Challenge[];
  metadata?: ProjectMetadata;
  
  // Campo genérico para propriedades extras
  [x: string]: any;
};

// Esta função só pode ser usada em Server Components
export async function getProjectSlugs(): Promise<string[]> {
  const fs = await import("fs/promises");
  const files = await fs.readdir(PROJECTS_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

// Função auxiliar para normalizar o frontmatter
function normalizeFrontmatter(data: any): ProjectFrontmatter {
  const normalized: ProjectFrontmatter = { ...data, title: data.title || "" };
  
  // 1. Normalizar tags (compatibilidade com estrutura antiga/nova)
  if (!normalized.tags) {
    if (normalized.techStack?.all && Array.isArray(normalized.techStack.all)) {
      normalized.tags = normalized.techStack.all;
    } else if (normalized.tech) {
      normalized.tags = normalized.tech;
    } else if (normalized.techStack) {
      // Combinar todas as categorias do techStack
      const allTechs = [
        ...(normalized.techStack.frontend || []),
        ...(normalized.techStack.backend || []),
        ...(normalized.techStack.tools || [])
      ];
      normalized.tags = [...new Set(allTechs)]; // Remover duplicatas
    } else {
      normalized.tags = [];
    }
  }
  
  // 2. Normalizar links (compatibilidade com estrutura antiga/nova)
  if (!normalized.links) {
    normalized.links = {};
  }
  
  if (normalized.githubUrl && !normalized.links.github) {
    normalized.links.github = normalized.githubUrl;
  }
  if (normalized.liveUrl && !normalized.links.live) {
    normalized.links.live = normalized.liveUrl;
  }
  if (normalized.github && !normalized.links.github) {
    normalized.links.github = normalized.github;
  }
  
  // 3. Normalizar media (compatibilidade com estrutura antiga/nova)
  if (!normalized.media) {
    normalized.media = {};
  }
  
  if (normalized.cover && !normalized.media.cover) {
    normalized.media.cover = normalized.cover;
    
    // Se não houver gallery, criar uma com a cover
    if (!normalized.media.gallery || normalized.media.gallery.length === 0) {
      normalized.media.gallery = [{
        src: normalized.cover,
        alt: normalized.title,
        caption: "Imagem principal do projeto"
      }];
    }
  }
  
  // 4. Garantir que challenges tenha a estrutura correta
  if (normalized.challenges && Array.isArray(normalized.challenges)) {
    normalized.challenges = normalized.challenges.map((challenge) => {
      if (typeof challenge === 'string') {
        // Se for string, tentar parsear formato antigo
        const [problem, solution] = (challenge as string).split(' | ');
        return { 
          problem: problem || challenge, 
          solution: solution || "Solução implementada com sucesso" 
        };
      }
      return challenge as Challenge;
    });
  }
  
  // 5. Garantir que techStack.all exista
  if (normalized.techStack && !normalized.techStack.all && normalized.tags.length > 0) {
    normalized.techStack.all = normalized.tags;
  }
  
  return normalized;
}

// Esta função só pode ser usada em Server Components
export async function getProjectBySlug(slug: string) {
  const fs = await import("fs/promises");
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  
  const normalizedFrontmatter = normalizeFrontmatter(data);

  return {
    slug,
    frontmatter: normalizedFrontmatter,
    contentHtml: processed.toString(),
  };
}

// Esta função só pode ser usada em Server Components
export async function getAllProjects() {
  const slugs = await getProjectSlugs();

  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getProjectBySlug(slug);
      return { slug, frontmatter };
    })
  );
  
  // Ordenar por data (mais recente primeiro) e featured primeiro
  return projects.sort((a, b) => {
    // Projetos featured primeiro
    if (a.frontmatter.featured && !b.frontmatter.featured) return -1;
    if (!a.frontmatter.featured && b.frontmatter.featured) return 1;
    
    // Depois por data
    const dateA = new Date(a.frontmatter.date || 0).getTime();
    const dateB = new Date(b.frontmatter.date || 0).getTime();
    return dateB - dateA; // Mais recente primeiro
  });
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
    return frontmatter.links?.github || frontmatter.githubUrl || frontmatter.github;
  },
  
  getLiveUrl: (frontmatter: ProjectFrontmatter) => {
    return frontmatter.links?.live || frontmatter.links?.demo || frontmatter.liveUrl;
  },
  
  getCoverImage: (frontmatter: ProjectFrontmatter) => {
    return frontmatter.media?.cover || frontmatter.cover;
  },
  
  getGalleryImages: (frontmatter: ProjectFrontmatter): GalleryImage[] => {
    if (frontmatter.media?.gallery && frontmatter.media.gallery.length > 0) {
      return frontmatter.media.gallery;
    }
    
    // Fallback: criar uma galeria com a cover
    const cover = frontmatter.media?.cover || frontmatter.cover;
    if (cover) {
      return [{
        src: cover,
        alt: frontmatter.title,
        caption: "Imagem principal do projeto"
      }];
    }
    
    return [];
  },
  
  getAllTechnologies: (frontmatter: ProjectFrontmatter): string[] => {
    if (frontmatter.techStack?.all && frontmatter.techStack.all.length > 0) {
      return frontmatter.techStack.all;
    }
    
    if (frontmatter.tags && frontmatter.tags.length > 0) {
      return frontmatter.tags;
    }
    
    if (frontmatter.tech && frontmatter.tech.length > 0) {
      return frontmatter.tech;
    }
    
    // Combinar todas as categorias
    if (frontmatter.techStack) {
      const allTechs = [
        ...(frontmatter.techStack.frontend || []),
        ...(frontmatter.techStack.backend || []),
        ...(frontmatter.techStack.tools || [])
      ];
      return [...new Set(allTechs)]; // Remover duplicatas
    }
    
    return [];
  },
  
  getTechByCategory: (frontmatter: ProjectFrontmatter) => {
    return {
      frontend: frontmatter.techStack?.frontend || [],
      backend: frontmatter.techStack?.backend || [],
      tools: frontmatter.techStack?.tools || []
    };
  },
  
  getMetadata: (frontmatter: ProjectFrontmatter): ProjectMetadata => {
    return frontmatter.metadata || {};
  }
};