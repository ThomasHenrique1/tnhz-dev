// app/src/lib/projectHelpers.ts
import { ProjectFrontmatter } from "./content.server";

export const projectHelpers = {
  formatDate: (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  },

  formatShortDate: (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  },

  getGithubUrl: (frontmatter: ProjectFrontmatter) => {
    return frontmatter.githubUrl || frontmatter.github;
  },
};
