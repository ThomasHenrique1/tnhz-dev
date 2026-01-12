"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectFrontmatter } from "@/app/src/lib/content.server";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Sparkles
} from "lucide-react";

type Props = {
  slug: string;
  project: ProjectFrontmatter;
};

export default function ProjectCard({ slug, project }: Props) {
  const cover = project.cover ?? "/images/placeholder.jpg";
  const altText = project.title
    ? `Imagem do projeto ${project.title}`
    : "Imagem do projeto";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col overflow-hidden 
                     border border-primary/10 
                     hover:border-primary/30 
                     bg-gradient-card
                     transition-all duration-300 
                     hover:shadow-2xl hover:shadow-primary/10">

        {/* Imagem com overlay gradiente */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={cover}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badge de destaque */}
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">

            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-0">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg font-bold text-foreground line-clamp-1">
                {project.title}
              </CardTitle>
              {/* Badge de status */}
              {project.status && (
                <Badge
                  variant="outline"
                  className="text-xs shrink-0 border-primary/20 text-primary"
                >
                  {project.status}
                </Badge>
              )}
            </div>

            {project.short && (
              <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                {project.short}
              </CardDescription>
            )}
          </CardHeader>

          <CardContent className="flex-1 pb-3">
            {/* Tags/Tecnologias */}
            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs font-medium bg-primary/5 text-primary border-primary/20"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tech.length - 4}
                  </Badge>
                )}
              </div>
            )}

            {/* Data do projeto */}
            {project.date && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(project.date).toLocaleDateString('pt-BR', {
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            )}
          </CardContent>

          <CardFooter className="border-t border-border/50 pt-4">
            <div className="flex items-center justify-between w-full">
              {/* Link para detalhes */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-2 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href={`/projects/${slug}`} className="flex items-center">
                  Detalhes do projeto
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>

              {/* Links externos */}
              <div className="flex gap-1">
                {project.github && (
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-primary/10"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}

                {project.liveUrl && (
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-secondary/10"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardFooter>
        </div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
                      rounded-lg" />
      </Card>
    </motion.div>
  );
}