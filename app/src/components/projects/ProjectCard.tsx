// components/projects/ProjectCard.tsx - VERSÃO ATUALIZADA
'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  slug: string;
  title: string;
  short?: string;
  cover?: string; // Pode vir de frontmatter.cover OU frontmatter.media.cover
  media?: {
    cover?: string;
    gallery?: Array<{ src: string; alt: string; caption?: string }>;
  };
  tags?: string[];
  date?: string;
  featured?: boolean;
}

export function ProjectCard({ 
  slug, 
  title, 
  short, 
  cover, 
  media,
  tags = [], 
  date, 
  featured 
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Determinar qual imagem usar (prioridade: media.cover > cover)
  const imageSrc = media?.cover || cover;

  useEffect(() => {
    console.log(`📸 ProjectCard "${title}":`);
    console.log(`- Cover (old): ${cover}`);
    console.log(`- Media.cover: ${media?.cover}`);
    console.log(`- Image to use: ${imageSrc}`);
    console.log(`- Full URL: ${imageSrc ? `${window.location.origin}${imageSrc}` : 'N/A'}`);
  }, [title, cover, media, imageSrc]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`❌ Erro ao carregar imagem: ${title}`);
    console.error(`- Source: ${imageSrc}`);
    console.error(`- Event:`, e);
    setImageError(true);
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
      {/* Imagem do projeto */}
      {imageSrc && !imageError ? (
        <div className="relative h-48 md:h-56 w-full overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={handleImageError}
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badge de destaque */}
          {featured && (
            <div className="absolute top-3 right-3">
              <Badge className="gap-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                <Tag className="w-3 h-3" />
                Destaque
              </Badge>
            </div>
          )}
        </div>
      ) : (
        // Fallback
        <div className="relative h-48 md:h-56 w-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
          <div className="text-center p-4">
            <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              {imageError ? 'Erro ao carregar imagem' : 'Sem imagem disponível'}
            </p>
            {imageSrc && (
              <p className="text-xs text-muted-foreground mt-2 break-all">
                Tentou carregar: {imageSrc}
              </p>
            )}
          </div>
          
          {featured && (
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
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Título e descrição */}
        <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
          {title}
        </h2>

        {short && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
            {short}
          </p>
        )}

        {/* Data */}
        {date && (
          <div className="flex items-center text-xs text-muted-foreground mb-6">
            <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
            <span>
              {new Date(date).toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
        )}

        {/* Botão de ação */}
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

      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  );
}