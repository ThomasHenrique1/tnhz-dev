"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroScrollIndicatorProps {
  delay?: number;
  label?: string;
  showLabel?: boolean;
}

const HeroScrollIndicator = ({ 
  delay = 1,
  label = "Desça para explorar",
  showLabel = true
}: HeroScrollIndicatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10"
    >
      <div className="flex flex-col items-center gap-2">
        {/* Label responsiva - opcional */}
        {showLabel && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="text-xs sm:text-sm font-medium text-foreground/50 
                      uppercase tracking-wider text-center
                      hidden xs:block"
          >
            {label}
          </motion.span>
        )}
        
        {/* Indicador principal */}
        <motion.div
          animate={{ 
            y: [0, 6, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          className="group cursor-pointer"
          onClick={() => {
            // Scroll suave para a próxima seção
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          {/* Versão desktop - seta dentro de círculo */}
          <div className="hidden sm:flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full border border-primary/20 
                          flex items-center justify-center
                          group-hover:border-primary/40 transition-colors">
              <ChevronDown className="w-5 h-5 text-primary/60 group-hover:text-primary/80" />
            </div>
            {/* Linha guia */}
            <motion.div
              animate={{ height: [0, 20, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                delay: 0.2
              }}
              className="w-px bg-linear-to-b from-transparent via-primary/30 to-transparent h-10"
            />
          </div>
          
          {/* Versão mobile - seta simples */}
          <div className="block sm:hidden">
            <div className="w-8 h-8 rounded-full border border-primary/10 
                          flex items-center justify-center
                          bg-background/50 backdrop-blur-sm">
              <ChevronDown className="w-3 h-3 text-primary/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroScrollIndicator;