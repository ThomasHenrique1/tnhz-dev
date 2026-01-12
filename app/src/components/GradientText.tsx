"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GradientText({ children, className = "", delay = 0 }: GradientTextProps) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        delay,
      }}
      className={`bg-gradient-to-r from-primary via-secondary to-accent 
                  bg-clip-text text-transparent bg-[length:200%_auto] 
                  ${className}`}
    >
      {children}
    </motion.span>
  );
}