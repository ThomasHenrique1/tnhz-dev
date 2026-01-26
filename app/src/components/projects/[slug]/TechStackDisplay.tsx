/* eslint-disable react-hooks/set-state-in-effect */
// components/project/TechStackDisplay.tsx
'use client';

import { Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TechStack from "@/app/src/components/tech-stack/tech-stack";
import { useState, useEffect } from "react";

interface TechStackDisplayProps {
  tags: string[];
  title?: string;
  columns?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20;
  compact?: boolean;
  showAllTechnologies?: boolean;
}

export function TechStackDisplay({ 
  tags, 
  title = "Tecnologias utilizadas neste projeto",
  columns = 20,
  compact = false,
  showAllTechnologies = false
}: TechStackDisplayProps) {
  const [isClient, setIsClient] = useState(false);
  const [resolvedColumns, setResolvedColumns] = useState(columns);

  useEffect(() => {
    setIsClient(true);

    const resolveColumns = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setResolvedColumns(2);
      } else if (width < 1024) {
        setResolvedColumns(Math.min(columns, 3) as 2 | 3);
      } else {
        setResolvedColumns(columns);
      }
    };

    resolveColumns();
    window.addEventListener("resize", resolveColumns);

    return () => window.removeEventListener("resize", resolveColumns);
  }, [columns]);

  if (!isClient || tags.length === 0) return null;

  return (
    <div className="w-full space-y-5 animate-fade-up">
      {/* Header com contador */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <Tag className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {tags.length} tecnologias {showAllTechnologies ? 'listadas' : 'principais'}
            </p>
          </div>
        </div>

        {!showAllTechnologies && tags.length > resolvedColumns * 2 && (
          <div className="flex items-center gap-1">
            <Badge 
              variant="outline"
              className="px-3 py-1 text-xs border-dashed hover:bg-muted/50 transition-colors"
            >
              {tags.length} tecnologias no total
            </Badge>
          </div>
        )}
      </div>

      {/* Componente TechStack principal */}
      <TechStack 
        technologiesToShow={showAllTechnologies ? tags : tags}
        columns={compact ? (Math.min(resolvedColumns, 3) as 2 | 3) : resolvedColumns}
        showTitle={false}
        compact={compact}
      />

      {/* Opção para ver todas as tecnologias */}
      {!showAllTechnologies && tags.length > resolvedColumns * 2 && (
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Mostrando {Math.min(tags.length, resolvedColumns * 2)} de {tags.length} tecnologias
            </p>
            <button 
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group"
              onClick={() => console.log('Abrir modal com todas tecnologias')}
            >
              Ver todas as tecnologias
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Tags como badges (modo alternativo) */}
      {compact && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.slice(0, 8).map((tag, index) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-3 py-1 text-xs font-medium border-border/30 hover:border-primary/30 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 8 && (
            <Badge
              variant="outline"
              className="px-3 py-1 text-xs border-dashed hover:bg-muted/50 transition-colors"
            >
              +{tags.length - 8} mais
            </Badge>
          )}
        </div>
      )}

            
    </div>
  );
}
