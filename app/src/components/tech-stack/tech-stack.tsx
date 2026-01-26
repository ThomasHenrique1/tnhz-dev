/* eslint-disable @typescript-eslint/no-unused-vars */
// app/src/components/TechStack.tsx (versão corrigida)
"use client";

import { motion } from "framer-motion";
import { technologies } from "@/app/src/constants/technologies";
import { Code } from "lucide-react";

interface TechStackProps {
  title?: string;
  technologiesToShow?: string[]; // Array com os nomes das tecnologias que quer mostrar
  columns?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20;
  showTitle?: boolean;
  compact?: boolean;
}

const TechStack = ({ 
  title = "Tecnologias que utilizo com frequência",
  technologiesToShow, 
  columns = 10,
  showTitle = true,
  compact = false
}: TechStackProps) => {
  // Filtra as tecnologias se technologiesToShow for fornecido
  const displayedTechs = technologiesToShow 
    ? technologies.filter(tech => technologiesToShow.includes(tech.name))
    : technologies; // Mostra todas se não especificar
  
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
    7: "grid-cols-2 sm:grid-cols-3 md:grid-cols-7",
    8: "grid-cols-2 sm:grid-cols-3 md:grid-cols-8",
    9: "grid-cols-2 sm:grid-cols-3 md:grid-cols-9",
    10: "grid-cols-2 sm:grid-cols-3 md:grid-cols-10",
    20: "grid-cols-2 sm:grid-cols-3 md:grid-cols-20"
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Debug: Verificar o que está sendo filtrado
  console.log('🔍 TechStack Debug:');
  console.log('TechnologiesToShow:', technologiesToShow);
  console.log('Total technologies:', technologies.length);
  console.log('Displayed techs:', displayedTechs.length);
  console.log('Displayed techs names:', displayedTechs.map(t => t.name));
  console.log('---');

  return (
    <div className="w-full">
      {showTitle && (
        <div className="flex items-center gap-8 mb-6">
          <Code className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
      )}
      
      {/* Informações de debug */}
      {technologiesToShow && (
        <div className="mb-4 text-sm text-muted-foreground">
          <p>Mostrando {displayedTechs.length} de {technologiesToShow.length} tecnologias filtradas</p>
        </div>
      )}
      
      {displayedTechs.length === 0 ? (
        <div className="p-6 border border-dashed border-border rounded-xl text-center">
          <p className="text-muted-foreground">Nenhuma tecnologia encontrada</p>
          {technologiesToShow && technologiesToShow.length > 0 && (
            <p className="text-xs text-red-500 mt-2">
              Verifique se os nomes das tecnologias correspondem ao arquivo constants/technologies.ts
            </p>
          )}
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`grid ${gridCols[columns]} gap-6`}
        >
          {displayedTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ 
                  y: -5, 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="group relative"
              >
                <div className={`relative ${compact ? 'p-5' : 'p-5'} rounded-xl 
                              bg-linear-to-br from-background to-muted/30 
                              border border-border/50 shadow-sm hover:shadow-md 
                              hover:border-primary/30 transition-all duration-300
                              flex flex-col items-center justify-center gap-2
                              ${compact ? 'min-w-[80px]' : 'min-w-[100px]'}`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/0 via-primary/5 to-secondary/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <Icon 
                      className={compact ? "w-6 h-6" : "w-8 h-8"} 
                      style={{ color: tech.color }}
                    />
                  </div>
                  
                  {/* Tech Name */}
                  {!compact && (
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground
                                   transition-colors duration-300">
                      {tech.name}
                    </span>
                  )}
                  
                  {/* Gradient line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                                w-1/2 h-0.5 bg-linear-to-r from-primary/0 via-primary/50 to-secondary/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Tooltip for compact mode */}
                {compact && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                                px-2 py-1 bg-foreground text-background text-xs rounded-md
                                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                whitespace-nowrap pointer-events-none z-20">
                    {tech.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                                  w-2 h-2 bg-foreground rotate-45" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default TechStack;