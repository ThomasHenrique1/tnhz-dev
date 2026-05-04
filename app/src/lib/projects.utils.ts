/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractProjectStats(projects: any[]) {
  const projectsCount = projects.length;

  const allTags = [
    ...new Set(projects.flatMap((p) => p.frontmatter.tags ?? [])),
  ];

  const maxTechnologiesPerProject =
    projectsCount > 0
      ? Math.max(...projects.map((p) => p.frontmatter.tags?.length || 0))
      : 0;

  return {
    projectsCount,
    technologiesCount: allTags.length,
    maxTechnologiesPerProject,
  };
}