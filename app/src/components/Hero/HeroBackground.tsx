"use client";

import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <>
      {/* Fundo base escuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Gradiente principal animado */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-full blur-3xl"
      />
      
      {/* Pontos de luz */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          delay: 1,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-2xl"
      />
      
      {/* Efeito de brilho central */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />
    </>
  );
};