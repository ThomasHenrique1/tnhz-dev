/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { technologies } from "@/app/src/constants/technologies";
import { Code } from "lucide-react";
import { useState } from "react";

interface TechStackProps {
  title?: string;
  technologiesToShow?: string[];
  columns?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  showTitle?: boolean;
  compact?: boolean;
}

interface Technology {
  name: string;
  icon: string;
  color: string;
  gradient: string;
}

const GRID_COLUMNS_MAP: Record<NonNullable<TechStackProps["columns"]>, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
  7: "grid-cols-2 sm:grid-cols-3 md:grid-cols-7",
  8: "grid-cols-2 sm:grid-cols-3 md:grid-cols-8",
  9: "grid-cols-2 sm:grid-cols-3 md:grid-cols-9",
  10: "grid-cols-2 sm:grid-cols-3 md:grid-cols-10",
};

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
} as const;

const TechStack = ({
  title = "Tecnologias que utilizo",
  technologiesToShow,
  columns = 6,
  showTitle = true,
  compact = false,
}: TechStackProps) => {
  const displayedTechs: Technology[] = technologiesToShow
    ? technologies.filter((tech) => technologiesToShow.includes(tech.name))
    : technologies;

  const isEmpty = displayedTechs.length === 0;

  return (
    <div className="w-full">
      {showTitle && <TechStackTitle title={title} />}

      {isEmpty ? (
        <EmptyState />
      ) : (
        <TechGrid columns={columns}>
          {displayedTechs.map((tech) => (
            <TechCard key={tech.name} tech={tech} compact={compact} />
          ))}
        </TechGrid>
      )}
    </div>
  );
};

const TechStackTitle = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 rounded-lg bg-primary/10">
      <Code className="w-5 h-5 text-primary" />
    </div>
    <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
      <span className="text-primary">&lt;</span>
      {title}
      <span className="text-primary">/&gt;</span>
    </h3>
  </div>
);

const EmptyState = () => (
  <div className="p-8 border-2 border-dashed border-border rounded-2xl text-center bg-muted/30">
    <p className="text-muted-foreground font-medium">Nenhuma tecnologia encontrada</p>
  </div>
);

const TechGrid = ({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns: NonNullable<TechStackProps["columns"]>;
}) => (
  <motion.div
    variants={ANIMATION_VARIANTS.container}
    initial="hidden"
    animate="visible"
    className={`grid ${GRID_COLUMNS_MAP[columns]} gap-5`}
  >
    {children}
  </motion.div>
);

const TechCard = ({
  tech,
  compact,
}: {
  tech: Technology;
  compact: boolean;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      className="group relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && !compact && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20
                     px-4 py-2 rounded-lg whitespace-nowrap
                     bg-background border border-border
                     shadow-lg backdrop-blur-sm"
          style={{
            boxShadow: `0 4px 20px ${tech.color}30`,
            borderColor: `${tech.color}40`,
          }}
        >
          <div className="text-sm font-semibold" style={{ color: tech.color }}>
            {tech.name}
          </div>
          <div
            className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 
                       w-3 h-3 rotate-45 bg-background border-r border-b border-border"
            style={{ borderColor: `${tech.color}40` }}
          />
        </motion.div>
      )}

      <div
        className="relative rounded-2xl p-6 transition-all duration-300
                   flex flex-col items-center justify-center gap-3
                   hover:scale-105 cursor-pointer
                   bg-gradient-to-br from-background/80 to-background
                   border-2 border-border/50 overflow-hidden"
        style={{
          borderColor: `${tech.color}50`,
          boxShadow: `0 6px 20px ${tech.color}25`,
        }}
      >
        {/* Glow controlado */}
        <div
          className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at center, ${tech.color}25 0%, transparent 70%)`,
          }}
        />

        {/* Gradiente leve */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${tech.color}15, transparent)`,
          }}
        />

        {/* Brilho interno leve */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 20px ${tech.color}15`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <IconWrapper tech={tech} compact={compact} />
        </div>
      </div>
    </motion.div>
  );
};

const IconWrapper = ({
  tech,
  compact,
}: {
  tech: Technology;
  compact: boolean;
}) => {
  const iconSize = compact ? 40 : 48;

  return (
    <div className="relative flex items-center justify-center group-hover:scale-110 transition-all duration-300">
      {/* Glow reduzido */}
      <div
        className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
        style={{
          background: tech.color,
          filter: "blur(12px)",
        }}
      />

      <div
        className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm"
        style={{
          boxShadow: `0 6px 16px ${tech.color}40`,
          border: `1px solid ${tech.color}30`,
        }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="object-contain"
          style={{
            width: iconSize,
            height: iconSize,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
          }}
        />
      </div>
    </div>
  );
};

export default TechStack;