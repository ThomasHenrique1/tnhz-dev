import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/app/src/lib/content.server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  ExternalLink, 
  Github,
  Tag,
  Sparkles,
  Clock,
  Users
} from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { frontmatter, contentHtml } = await getProjectBySlug(slug);

    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/5">
        {/* Background decorativo */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pt-12 pb-16 max-w-4xl">     
          {/* Cabeçalho */}
          <header className="mb-12">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-6 mb-6">
              {frontmatter.featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Projeto em Destaque</span>
                </div>
              )}

              {frontmatter.status && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-sm font-medium text-green-500">{frontmatter.status}</span>
                </div>
              )}
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gradient">{frontmatter.title}</span>
            </h1>

            {/* Descrição curta */}
            {frontmatter.short && (
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {frontmatter.short}
              </p>
            )}

            {/* Metadados Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Data */}
              {frontmatter.date && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group">
                  <Calendar className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-muted-foreground">Data</p>
                    <p className="text-sm font-medium">
                      {new Date(frontmatter.date).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              )}

              {/* Duração */}
              {frontmatter.duration && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-colors group">
                  <Clock className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-muted-foreground">Duração</p>
                    <p className="text-sm font-medium">{frontmatter.duration}</p>
                  </div>
                </div>
              )}

              {/* Equipe */}
              {frontmatter.team && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors group">
                  <Users className="w-5 h-5 text-green-700 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-muted-foreground">Equipe</p>
                    <p className="text-sm font-medium">{frontmatter.team}</p>
                  </div>
                </div>
              )}

              {/* Tags count */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted border border-border hover:bg-muted/50 transition-colors group">
                  <Tag className="w-5 h-5 text-white-200 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-muted-foreground">Tecnologias</p>
                    <p className="text-sm font-medium">{frontmatter.tags.length} utilizadas</p>
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {frontmatter.tags.map((tag: string) => (
                  <Badge 
                    key={tag}
                    variant="secondary"
                    className="gap-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors group"
                  >
                    <Tag className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Imagem principal */}
          {frontmatter.cover && (
            <div className="relative h-72 md:h-96 w-full mb-12 rounded-2xl overflow-hidden border border-border/50 shadow-xl group">
              <Image
                src={frontmatter.cover}
                alt={frontmatter.title}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}

          {/* Conteúdo */}
          <article
            className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-12
                      prose-headings:font-bold prose-headings:text-foreground
                      prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                      prose-p:text-foreground/80 prose-p:leading-relaxed
                      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                      prose-strong:font-semibold prose-strong:text-foreground
                      prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                      prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
                      prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary
                      prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-md
                      prose-table:border prose-table:border-border prose-th:bg-muted prose-th:font-semibold
                      prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Links externos */}
          {(frontmatter.githubUrl || frontmatter.liveUrl) && (
            <div className="pt-10 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Links do projeto</h3>
                  <p className="text-sm text-muted-foreground">
                    Acesse o código fonte ou veja o projeto em funcionamento.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {frontmatter.githubUrl && (
                    <Button 
                      asChild 
                      variant="outline"
                      className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 group transition-all"
                    >
                      <a 
                        href={frontmatter.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Código no GitHub
                      </a>
                    </Button>
                  )}
                  
                  {frontmatter.liveUrl && (
                    <Button 
                      asChild 
                      className="gap-2 gradient-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 group transition-all"
                    >
                      <a 
                        href={frontmatter.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Ver projeto ao vivo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navegação final */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
                  Continue explorando meu trabalho
                </p>
              </div>
              <Button 
                asChild 
                variant="outline"
                className="gap-2 w-full sm:w-auto group transition-all"
              >
                <Link href="/projects">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Ver todos os projetos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  } catch {
    return notFound();
  }
}