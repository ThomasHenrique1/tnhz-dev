// app/src/components/TechStack.tsx
"use client";

import { motion } from "framer-motion";
import { technologies } from "@/app/src/constants/technologies";

const TechStack = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
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

  return (
    <motion.div
      variants={fadeUp}
      className="mb-16"
    >
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Tecnologias que domino:
      </p>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-4"
      >
        {technologies.map((tech, index) => {
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
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-background to-muted/30 
                            border border-border/50 shadow-sm hover:shadow-md 
                            hover:border-primary/30 transition-all duration-300
                            flex flex-col items-center justify-center gap-2
                            min-w-[100px]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative z-10">
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: tech.color }}
                  />
                </div>
                
                {/* Tech Name */}
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground
                               transition-colors duration-300">
                  {tech.name}
                </span>
                
                {/* Subtle gradient line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                              w-1/2 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-secondary/0
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Tooltip (optional) */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                            px-2 py-1 bg-foreground text-background text-xs rounded-md
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200
                            whitespace-nowrap pointer-events-none z-20">
                {tech.name}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                              w-2 h-2 bg-foreground rotate-45" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TechStack;