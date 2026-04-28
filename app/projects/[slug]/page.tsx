/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/app/src/components/mdx/mdx-components";


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
        <div className="container mx-auto px-4 pt-8 md:pt-12 pb-16 max-w-5xl animate-in fade-in duration-700 gap-20">
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
                />
              </div>
            </section>
          )}



          {/* Destaques e desafios */}
          {(frontmatter.highlights || frontmatter.challenges) && (
            <section className="mb-18 animate-fade-up animate-delay-500">
              <ProjectHighlights
                highlights={frontmatter.highlights}
                challenges={frontmatter.challenges}
              />
            </section>
          )}

          {/* Conteúdo principal */}
          <section
            id="content"
            className="mt-16 mb-24 scroll-mt-20 animate-in fade-in slide-in-from-bottom-5 duration-700"
          >
            <article className="
                // Container principal com gradiente sutil
                relative
                bg-gradient-to-br from-card/30 via-card/20 to-transparent
                rounded-3xl
                p-8 md:p-12
                border border-border/50
                shadow-2xl shadow-primary/5
                backdrop-blur-sm
                overflow-hidden
                
                // Animações
                transition-all duration-500
                hover:shadow-3xl hover:shadow-primary/10
                hover:border-border/70
                hover:bg-gradient-to-br from-card/40 via-card/30 to-transparent
                
                // Efeitos decorativos
                before:absolute before:inset-0 
                before:bg-gradient-to-r before:from-transparent before:via-primary/5 before:to-transparent
                before:opacity-0 before:hover:opacity-100
                before:transition-opacity before:duration-700
                
                after:absolute after:top-0 after:right-0
                after:w-32 after:h-32
                after:bg-gradient-to-bl after:from-primary/10 after:to-transparent
                after:rounded-full after:blur-3xl
                after:-translate-y-16 after:translate-x-16
                after:opacity-50
                after:animate-pulse-slow
              ">

              {/* Decoração adicional */}
              <div className="absolute -left-4 top-1/4 w-2 h-16 bg-gradient-to-b from-primary to-secondary rounded-full" />

              {/* Conteúdo MDX */}
              <div className="relative z-10 mt-12 ">
                <MDXRemote
                  source={contentHtml}
                  components={mdxComponents}
                />
              </div>

              {/* Indicador de fim do artigo */}
              <div className="
                mt-12 pt-8
                border-t border-border/30
                flex items-center justify-center
                text-sm text-muted-foreground
                gap-5
                animate-in fade-in duration-1000
                ">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                <span className="
                    px-4 py-2 
                    rounded-full
                    bg-gradient-to-r from-background to-muted/30
                    border border-border/30
                    text-xs font-medium
                    tracking-wide
                  ">
                  FIM DO ARTIGO
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
              </div>
            </article>
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