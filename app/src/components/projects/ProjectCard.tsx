/* eslint-disable @next/next/no-img-element */
'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { technologies } from "@/app/src/constants/technologies";

interface ProjectCardProps {
  slug: string;
  title: string;
  short?: string;
  cover?: string;
  media?: {
    cover?: string;
    gallery?: Array<{ src: string; alt: string; caption?: string }>;
  };
  tags?: string[];
  date?: string;
  featured?: boolean;
}
const getTech = (tag: string) => {
  return technologies.find(
    (tech) => tech.name.toLowerCase() === tag.toLowerCase()
  );
};

export function ProjectCard({
  slug,
  title,
  short,
  cover,
  media,
  tags = [],
  date,
  featured,
}: ProjectCardProps) {
  const imageSrc = media?.cover || cover;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">

      {/* Imagem */}
      <div className="relative h-48 md:h-56 w-full overflow-hidden flex-shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-muted to-muted/50">
            <div className="text-center">
              <ImageIcon className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Sem imagem</p>
            </div>
          </div>
        )}

        {/* Badge destaque */}
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge className="gap-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
              <Tag className="w-3 h-3" />
              Destaque
            </Badge>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">

        {tags.length > 0 && (
  <div className="flex flex-wrap items-center gap-2 mb-4">
    {tags.slice(0, 5).map((tag) => {
      const tech = getTech(tag);

      return tech ? (
        <div
          key={tag}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-muted/40 hover:bg-muted transition"
          title={tech.name}
          style={{ backgroundColor: tech.color + '20' }} // '20' adiciona 12% de opacidade
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
            style={{
            // Converte HEX para filtro CSS (exemplo para #61DAFB)
            filter: `drop-shadow(0 1000px 0 ${tech.color})`,
            transform: 'translateY(-1000px)'
    }}

          />
        </div>
      ) : (
        <span
          key={tag}
          className="text-xs text-muted-foreground"
        >
          {tag}
        </span>
      );
    })}

    {tags.length > 5 && (
      <span className="text-xs text-muted-foreground ml-1">
        +{tags.length - 5}
      </span>
    )}
  </div>
)}

        <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
          {title}
        </h2>

        {short && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
            {short}
          </p>
        )}

        {date && (
          <div className="flex items-center text-xs text-muted-foreground mb-6">
            <Calendar className="w-3 h-3 mr-1" />
            <span>
              {new Date(date).toLocaleDateString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 text-primary hover:bg-primary/10 group"
          >
            <Link href={`/projects/${slug}`}>
              Ver detalhes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}