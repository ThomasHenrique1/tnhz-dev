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

  // Animações
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/5">
      {/* Background decorativo */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Cabeçalho */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="mb-12"
        >
          {/* Badge de destaque */}
          {frontmatter.featured && (
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Projeto em Destaque</span>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gradient">{frontmatter.title}</span>
          </motion.h1>

          {/* Metadados */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8"
          >
            {frontmatter.date && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group">
                <Calendar className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">
                  {new Date(frontmatter.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </span>
              </div>
            )}

            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string, index: number) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="gap-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors group"
                    >
                      <Tag className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Descrição curta */}
          {frontmatter.short && (
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed border-l-4 border-primary/30 pl-4 py-2 bg-gradient-to-r from-primary/5 to-transparent"
            >
              {frontmatter.short}
            </motion.p>
          )}
        </motion.div>

        {/* Imagem principal */}
        {frontmatter.cover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-72 md:h-96 w-full mb-12 rounded-2xl overflow-hidden border border-border/50 shadow-xl group"
          >
            <Image
              src={frontmatter.cover}
              alt={frontmatter.title}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        )}

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
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
                      prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-md
                      prose-table:border prose-table:border-border prose-th:bg-muted prose-th:font-semibold
                      prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </motion.div>

        {/* Links externos */}
        {(frontmatter.githubUrl || frontmatter.liveUrl) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-10 border-t border-border/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Links do projeto</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse o código fonte ou veja o projeto em funcionamento.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {frontmatter.githubUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 group transition-all"
                    >
                      <a
                        href={frontmatter.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Código no GitHub
                      </a>
                    </Button>
                  </motion.div>
                )}

                {frontmatter.liveUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      className="gap-2 gradient-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 group transition-all"
                    >
                      <a
                        href={frontmatter.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Ver projeto ao vivo
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Navegação final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
                Continue explorando meu trabalho
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                className="gap-2 w-full sm:w-auto group transition-all"
              >
                <Link href="/projects" className="flex items-center justify-center">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Ver todos os projetos
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}