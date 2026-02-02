"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Variants } from "framer-motion";

interface HeroSocialProps {
  variants?: Variants;
  location?: string;
  availability?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const HeroSocial = ({ 
  variants,
  location = "São Paulo, Brasil",
  availability = "Disponível para projetos remotos e híbridos",
  githubUrl = "https://github.com/ThomasHenrique1",
  linkedinUrl = "www.linkedin.com/in/thomas-henrique12"
}: HeroSocialProps) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 cen"
    >
      {/* Ícones dos botões sociais */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded-xl w-12 h-12 sm:w-14 sm:h-14 hover:bg-primary/10 hover:text-primary 
                    transition-all duration-300 hover:scale-110"
        >
          <Link href={githubUrl} target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded-xl w-12 h-12 sm:w-14 sm:h-14 hover:bg-secondary/10 hover:text-primary 
                    transition-all duration-300 hover:scale-110"
        >
          <Link href={linkedinUrl} target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </Button>
      </div>
      
      {/* Linha divisória - visível apenas no desktop */}
      <div className="hidden sm:block h-6 w-px bg-border/50" />
      <div className="block sm:hidden w-full h-px bg-border/30" />
      
      {/* Informações de localização */}
      <div className="text-center sm:text-left">
        <p className="text-sm sm:text-base text-muted-foreground">{location}</p>
        <p className="text-xs sm:text-sm mt-1 text-muted-foreground/80">
          {availability}
        </p>
      </div>
    </motion.div>
  );
};

export default HeroSocial;