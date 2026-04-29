/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Tag,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

interface ProjectPageClientProps {
  project: {
    frontmatter: any;
    contentHtml: string;
  };
}

export default function ProjectClient({ project }: ProjectPageClientProps) {
  const { frontmatter, contentHtml } = project;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="mb-12">
          
          {/* Badge de destaque */}
          {frontmatter.featured && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Projeto em destaque</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {frontmatter.title}
          </h1>

          {/* Metadados */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            {frontmatter.date && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  {new Date(frontmatter.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            )}

            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="gap-1.5 bg-muted border border-border text-foreground/80"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Descrição curta */}
          {frontmatter.short && (
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {frontmatter.short}
            </p>
          )}
        </div>

        {/* Imagem principal */}
        {frontmatter.cover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative h-72 md:h-96 w-full mb-12 rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            <Image
              src={frontmatter.cover}
              alt={frontmatter.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Conteúdo */}
        <div className="mb-12">
          <article
            className="prose prose-lg prose-gray dark:prose-invert max-w-none 
                      prose-headings:font-bold prose-headings:text-foreground
                      prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                      prose-p:text-foreground/80 prose-p:leading-relaxed
                      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                      prose-strong:font-semibold prose-strong:text-foreground
                      prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                      prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
                      prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary
                      prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-sm
                      prose-table:border prose-table:border-border prose-th:bg-muted prose-th:font-semibold
                      prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* Links externos */}
        {(frontmatter.githubUrl || frontmatter.liveUrl) && (
          <div className="pt-10 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Links do projeto
                </h3>
                <p className="text-sm text-muted-foreground">
                  Acesse o código fonte ou veja o projeto em funcionamento.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {frontmatter.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2"
                  >
                    <a
                      href={frontmatter.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                )}

                {frontmatter.liveUrl && (
                  <Button
                    asChild
                    className="gap-2"
                  >
                    <a
                      href={frontmatter.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver projeto
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navegação final */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Continue explorando meus projetos
            </p>

            <Button
              asChild
              variant="outline"
              className="gap-2"
            >
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}