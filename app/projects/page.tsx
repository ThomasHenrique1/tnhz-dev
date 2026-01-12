import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/app/src/lib/content.server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter, Calendar, Tag, Search, Grid, List } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  // Categorias únicas para filtro
  const allTags = Array.from(
    new Set(projects.flatMap(p => p.frontmatter.tags || []))
  );

  return (
    <main className="min-h-screen pt-20 pb-16">
      {/* Hero Section da página */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-background to-muted/10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Meu <span className="text-gradient">Portfólio</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Uma coleção de projetos onde transformei ideias em soluções reais.
              Cada projeto conta uma história de desafios superados e objetivos alcançados.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{projects.length} projetos realizados</span>
              </div>

              {allTags.length > 0 && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                  <Tag className="w-4 h-4 text-secondary" />
                  <span>{allTags.length} tecnologias utilizadas</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* Grid de Projetos */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Nenhum projeto encontrado</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Estou trabalhando em novos projetos incríveis. Em breve você poderá ver meu trabalho aqui.
              </p>
              <Button asChild>
                <Link href="/">
                  Voltar para Home
                </Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Contador */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  Mostrando <span className="font-semibold text-foreground">{projects.length}</span> projetos
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map(({ slug, frontmatter }) => (
                  <article
                    key={slug}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 
                              bg-gradient-card hover:border-primary/30 
                              transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                  >
                    {/* Imagem do projeto */}
                    {frontmatter.cover && (
                      <div className="relative h-48 md:h-56 w-full overflow-hidden">
                        <Image
                          src={frontmatter.cover}
                          alt={frontmatter.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Badge de destaque */}
                        {frontmatter.featured && (
                          <div className="absolute top-3 right-3">
                            <Badge className="gap-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                              <Tag className="w-3 h-3" />
                              Destaque
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Conteúdo */}
                    <div className="p-6">
                      {/* Tags */}
                      {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {frontmatter.tags.slice(0, 3).map(tag => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary border-primary/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {frontmatter.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{frontmatter.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Título e descrição */}
                      <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-1">
                        {frontmatter.title}
                      </h2>

                      {frontmatter.short && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {frontmatter.short}
                        </p>
                      )}

                      {/* Data */}
                      {frontmatter.date && (
                        <div className="flex items-center text-xs text-muted-foreground mb-6">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(frontmatter.date).toLocaleDateString('pt-BR', {
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>
                      )}

                      {/* Botão de ação */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="gap-2 text-primary hover:bg-primary/10"
                        >
                          <Link href={`/projects/${slug}`}>
                            Ver detalhes
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>

                        {/* Links externos */}
                     
                      </div>
                    </div>

                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </article>
                ))}
              </div>

              {/* Stats no final */}
              <div className="mt-16 pt-8 border-t border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                    <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">{allTags.length}</div>
                    <p className="text-sm text-muted-foreground">Tecnologias Utilizadas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      {Math.max(...projects.map(p => p.frontmatter.tags?.length || 0))}
                    </div>
                    <p className="text-sm text-muted-foreground">Máx. Tecnologias por Projeto</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Interessado em trabalharmos juntos?
            </h2>
            <p className="text-muted-foreground mb-8">
              Vamos conversar sobre como posso ajudar no seu próximo projeto.
            </p>
            <Button
              asChild
              size="lg"
              className="gap-2 px-8 gradient-primary text-primary-foreground hover:shadow-lg"
            >
              <Link href="/contact">
                Entre em contato
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}