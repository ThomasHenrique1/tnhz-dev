"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Variants } from "framer-motion";

interface HeroCTAsProps {
  variants?: Variants;
  projectsLabel?: string;
  contactLabel?: string;
  className?: string;
  centered?: boolean;
}

const HeroCTAs = ({ 
  variants,
  projectsLabel = "Explorar Projetos",
  contactLabel = "Entrar em Contato",
  className = "",
  centered = true
}: HeroCTAsProps) => {
  return (
    <motion.div
      variants={variants}
      className={`flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12 sm:mb-16 
                  ${centered ? 'items-center justify-center' : ''} 
                  w-full ${className}`}
    >
      {/* Primary CTA - Projects Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group w-full sm:w-auto"
      >
        {/* Background glow effect - apenas desktop */}
        <div className="hidden sm:block absolute -inset-1 bg-linear-to-r from-primary via-primary/70 to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
        
        {/* Main button */}
        <Button
          size="lg"
          asChild
          className="relative gap-3 px-6 sm:px-10 py-6 sm:py-7 rounded-xl sm:rounded-2xl 
                    bg-linear-to-r from-primary to-primary/90 
                    hover:from-primary hover:to-primary
                    shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl hover:shadow-primary/30
                    transition-all duration-300 
                    border-0 overflow-hidden
                    text-white font-bold text-base sm:text-lg
                    w-full sm:w-auto justify-center
                    group/btn"
        >
          <Link href="#projetos" className="flex items-center justify-center w-full">
            {/* Shine effect - apenas desktop */}
            <div className="hidden sm:block absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
            <span className="relative z-10">{projectsLabel}</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 group-hover/btn:translate-y-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>

      {/* Secondary CTA - Contact Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group w-full sm:w-auto"
      >
        <Button
          size="lg"
          variant="outline"
          asChild
          className="relative gap-3 px-6 sm:px-10 py-6 sm:py-7 rounded-xl sm:rounded-2xl 
                    border border-primary/20 sm:border-2 sm:border-primary/30 
                    hover:border-primary/40 hover:bg-linear-to-r hover:from-primary/5 hover:via-primary/3 hover:to-primary/5
                    bg-linear-to-r from-background/80 to-background/60
                    backdrop-blur-sm
                    shadow-sm sm:shadow-lg hover:shadow-md sm:hover:shadow-xl hover:shadow-primary/10
                    transition-all duration-300
                    text-foreground font-semibold text-base sm:text-lg
                    w-full sm:w-auto justify-center
                    group/btn-secondary"
        >
          <Link href="/contact" className="flex items-center justify-center w-full">
            {/* Subtle background animation */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover/btn-secondary:opacity-100 transition-opacity duration-500" />
            
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 text-primary" />
            <span className="relative z-10">{contactLabel}</span>
            
            {/* Arrow animation on hover */}
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 5, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 ml-2 opacity-0 group-hover/btn-secondary:opacity-100 hidden sm:block"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </motion.div>
          </Link>
        </Button>
        
        {/* Corner accents - apenas desktop */}
        <div className="hidden sm:block absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
  );
};

export default HeroCTAs;