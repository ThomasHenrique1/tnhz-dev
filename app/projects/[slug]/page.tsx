/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/error-boundaries */
import { notFound } from "next/navigation";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { getProjectBySlug, getProjectSlugs } from "@/app/src/lib/content.server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectHeader } from "@/app/src/components/projects/[slug]/ProjectHeader";
import { ProjectHeroImage } from "@/app/src/components/projects/[slug]/ProjectHeroImage";
import { TechStackDisplay } from "@/app/src/components/projects/[slug]/TechStackDisplay";
import { ProjectLinks } from "@/app/src/components/projects/[slug]/ProjectLinks";
import { ProjectGallery } from "@/app/src/components/projects/[slug]/ProjectGallery";
import { ProjectHighlights } from "@/app/src/components/projects/[slug]/ProjectHighlights";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Helper para compatibilidade com estrutura antiga/novo
const getGalleryImages = (frontmatter: any) => {
  if (frontmatter.media?.gallery) {
    return frontmatter.media.gallery;
  }
  // Fallback para estrutura antiga (apenas cover)
  if (frontmatter.cover) {
    return [{ 
      src: frontmatter.cover, 
      alt: frontmatter.title,
      caption: "Imagem principal do projeto"
    }];
  }
  return [];
};

const getAllTags = (frontmatter: any) => {
  if (frontmatter.techStack?.all) {
    return frontmatter.techStack.all;
  }
  if (frontmatter.techStack?.frontend || frontmatter.techStack?.backend || frontmatter.techStack?.tools) {
    // Combina todas as categorias
    return [
      ...(frontmatter.techStack.frontend || []),
      ...(frontmatter.techStack.backend || []),
      ...(frontmatter.techStack.tools || [])
    ];
  }
  // Fallback para estrutura antiga
  return frontmatter.tags || [];
};

const getLinks = (frontmatter: any) => {
  if (frontmatter.links) {
    return {
      githubUrl: frontmatter.links.github,
      liveUrl: frontmatter.links.live || frontmatter.links.demo,
      figmaUrl: frontmatter.links.figma,
      docsUrl: frontmatter.links.documentation
    };
  }
  // Fallback para estrutura antiga
  return {
    githubUrl: frontmatter.githubUrl,
    liveUrl: frontmatter.liveUrl
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { frontmatter, contentHtml } = await getProjectBySlug(slug);
    
    // Preparar dados para compatibilidade
    const galleryImages = getGalleryImages(frontmatter);
    const allTags = getAllTags(frontmatter);
    const links = getLinks(frontmatter);

    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
        {/* Background decorativo melhorado */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow animate-delay-1000" />
          <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow animate-delay-2000" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20" />
        </div>

        {/* Container principal com animação de entrada */}
        <div className="container mx-auto px-4 pt-8 md:pt-12 pb-16 max-w-5xl animate-in fade-in duration-700">
          {/* Botão de voltar flutuante */}
          <div className="sticky top-4 z-20 mb-8 animate-fade-down">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="gap-2 backdrop-blur-sm bg-background/80 border hover:bg-accent/20 group transition-all"
            >
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voltar para projetos
              </Link>
            </Button>
          </div>

          {/* Cabeçalho do projeto - ATUALIZADO */}
          <ProjectHeader
            title={frontmatter.title}
            short={frontmatter.short || frontmatter.description}
            featured={frontmatter.featured}
            status={frontmatter.status}
            date={frontmatter.date}
            duration={frontmatter.duration}
            team={frontmatter.team}
            tags={allTags}
            metadata={frontmatter.metadata}
          />

          {/* Imagem principal (cover) */}
          {frontmatter.media?.cover && (
            <section className="animate-fade-up animate-delay-400">
              <ProjectHeroImage 
                src={frontmatter.media.cover} 
                alt={frontmatter.title} 
              />
            </section>
          )}

          {/* Stack de tecnologias - ATUALIZADO */}
          {allTags.length > 0 && (
            <section className="mb-12 animate-fade-up animate-delay-300">
              <div className="bg-gradient-to-b from-card to-card/50 rounded-2xl p-8 border border-border/50 shadow-lg">
                <TechStackDisplay 
                  tags={allTags}
                  title="Stack Tecnológico do Projeto"
                  columns={7}
                  compact={false}
                  showAllTechnologies={false}
                />
              </div>
            </section>
          )}

          

          {/* Destaques e desafios */}
          {(frontmatter.highlights || frontmatter.challenges) && (
            <section className="mb-12 animate-fade-up animate-delay-500">
              <ProjectHighlights 
                highlights={frontmatter.highlights}
                challenges={frontmatter.challenges}
              />
            </section>
          )}

          {/* Conteúdo principal */}
          <section 
            className="scroll-mt-20 animate-fade-up animate-delay-600"
            id="content"
          >
            <article
              className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-12
                        prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-20
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                        prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
                        prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                        prose-strong:font-bold prose-strong:text-foreground
                        prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-sm prose-code:font-mono
                        prose-pre:bg-gradient-to-br from-muted to-muted/80 prose-pre:border prose-pre:border-border prose-pre:rounded-2xl prose-pre:shadow-lg
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                        prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-li:marker:text-primary prose-li:marker:font-bold
                        prose-img:rounded-2xl prose-img:border prose-img:border-border prose-img:shadow-xl prose-img:my-8
                        prose-table:w-full prose-table:border prose-table:border-border prose-table:rounded-xl prose-table:overflow-hidden
                        prose-th:bg-gradient-to-r from-muted to-muted/80 prose-th:font-bold prose-th:p-4
                        prose-td:p-4 prose-td:border-t prose-td:border-border
                        prose-hr:border-border prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </section>

          {/* Galeria de imagens */}
          {galleryImages.length > 0 && (
            <section className="mb-12 animate-fade-up animate-delay-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                  <ImageIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Galeria do Projeto</h3>
              </div>
              <ProjectGallery images={galleryImages} />
            </section>
          )}

          {/* Links do projeto - ATUALIZADO */}
          <ProjectLinks
            githubUrl={links.githubUrl}
            liveUrl={links.liveUrl}
          />

          {/* Navegação final */}
          <section className="mt-16 pt-12 border-t border-border/50 animate-fade-up animate-delay-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold mb-2">
                  Pronto para o próximo projeto?
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Explore outros projetos incríveis ou entre em contato para discutir seu próximo desafio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-3 group transition-all hover:scale-105"
                >
                  <Link href="/projects" className="flex items-center">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Ver todos os projetos
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all hover:scale-105"
                >
                  <Link href="/contact">
                    Falar sobre um projeto
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  } catch {
    return notFound();
  }
}