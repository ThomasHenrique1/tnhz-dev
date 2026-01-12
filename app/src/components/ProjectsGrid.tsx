"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/app/src/components/ProjectCard";
import { ProjectFrontmatter } from "@/app/src/lib/content.server";
import { Sparkles } from "lucide-react";

type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
};

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      }
    }
  };

  return (
    <div className="relative">
      {/* Decoração de fundo */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10"
      >
        {projects.map(({ slug, frontmatter }, index) => (
          <motion.div
            key={slug}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {/* Efeito de destaque no hover */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 
                            rounded-2xl blur opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-gradient-card backdrop-blur-sm 
                            border border-primary/10 
                            rounded-xl overflow-hidden 
                            shadow-lg hover:shadow-xl hover:shadow-primary/10
                            transition-all duration-300">
                <ProjectCard slug={slug} project={frontmatter} />

                {/* Indicador de destaque */}
                {frontmatter.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full 
                                  bg-gradient-to-r from-primary to-secondary 
                                  text-xs font-medium text-primary-foreground">
                      <Sparkles className="w-3 h-3" />
                      <span>Destaque</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mensagem quando não há projetos */}
      {projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 
                        rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 
                        mb-6">
            <Sparkles className="w-10 h-10 text-primary/50" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Nenhum projeto disponível
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Em breve adicionarei novos projetos aqui. Enquanto isso,
            você pode entrar em contato para saber mais sobre meu trabalho.
          </p>
        </motion.div>
      )}
    </div>
  );
}