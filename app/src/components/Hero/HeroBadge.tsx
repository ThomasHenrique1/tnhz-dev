"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Variants } from "framer-motion";

interface HeroBadgeProps {
  variants?: Variants;
  text?: string;
  showIcon?: boolean;
}

const HeroBadge = ({ 
  variants, 
  text = "Disponível para oportunidades estratégicas",
  showIcon = true 
}: HeroBadgeProps) => {
  return (
    <motion.div variants={variants} className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-gradient-to-r from-card to-card/50 backdrop-blur-sm px-4 py-2.5">
        <div className="flex items-center gap-2">
          {showIcon && (
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
              <Sparkles className="relative w-4 h-4 text-primary" />
            </div>
          )}
          <span className="text-sm font-medium text-foreground/80">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroBadge;