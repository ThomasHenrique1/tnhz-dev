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
}

export function TechStackDisplay({ 
  tags, 
  title = "Tecnologias utilizadas neste projeto",
  columns = 20,
  compact = false
}: TechStackDisplayProps) {
  const [resolvedColumns, setResolvedColumns] = useState(columns);

  useEffect(() => {
    const resolveColumns = () => {
      const width = window.innerWidth;

      if (width < 640) return setResolvedColumns(2);
      if (width < 1024) return setResolvedColumns(Math.min(columns, 3) as 2 | 3);

      setResolvedColumns(columns);
    };

    resolveColumns();
    window.addEventListener("resize", resolveColumns);

    return () => window.removeEventListener("resize", resolveColumns);
  }, [columns]);

  if (tags.length === 0) return null;

  return (
    <div className="w-full space-y-5 animate-fade-up">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          <Tag className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {tags.length} tecnologias
          </p>
        </div>
      </div>

      {/* Grid principal */}
      <TechStack 
        technologiesToShow={tags}
        columns={compact ? (Math.min(resolvedColumns, 3) as 2 | 3) : (Math.min(resolvedColumns, 4) as 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)}
        showTitle={false}
        compact={compact}
      />

      {/* Modo compacto */}
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
              +{tags.length - 8}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}