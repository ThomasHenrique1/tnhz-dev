"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { SiDocker, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Elementos decorativos coloridos */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Bolhas coloridas flutuantes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0]
        }}
        transition={{ repeat: Infinity, duration: 10, delay: 0.5 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ repeat: Infinity, duration: 15 }}
        className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
      />

      <div className="container relative mx-auto px-4 py-20 z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center rounded-full border border-primary/20 px-4 py-2 text-sm font-medium bg-gradient-card backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Disponível para oportunidades
            </span>
          </motion.div>

          <motion.h1
  variants={fadeUp}
  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
>
  <span className="block text-foreground ">
    Desenvolvedor de Software
    <span className="block mt-2">
      construindo soluções{" "}
      <span className="text-gradient">
        digitais funcionais
      </span>
    </span>
  </span>

  <span className="block text-foreground/90 text-lg md:text-xl lg:text-2xl font-normal mt-6">
    Atuação prática com diferentes linguagens, frameworks e ferramentas,
    com foco em{" "}
    <span className="text-primary font-semibold">aprendizado contínuo</span>,{" "}
    <span className="text-blue font-semibold">boas práticas</span> e
    código sustentável.
    <span className="block mt-2">
      Capaz de transitar entre tecnologias e{" "}
      <span className="text-accent font-semibold">
        resolver problemas reais
      </span>.
    </span>
  </span>
</motion.h1>

<motion.p
  variants={fadeUp}
  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
>
  Desenvolvedor de software em constante evolução, explorando diferentes
  linguagens e stacks para ampliar repertório técnico e entregar soluções
  eficientes, claras e bem estruturadas.
</motion.p>


          <motion.div
  variants={fadeUp}
  className="mb-12"
>
  <p className="text-sm text-muted-foreground mb-4 text-center">
    Stack principal:
  </p>
  
  <div className="flex flex-wrap justify-center gap-3">
    {[
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'javascript', icon: SiJavascript, color: '#fff23cff' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Supabase', icon: SiSupabase, color: '#24ed88ff' },
      
    ].map((tech, i) => {
      const Icon = tech.icon;
      return (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          className="group relative"
        >
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-background to-muted/20 
                        border border-border/50 hover:border-primary/30
                        flex items-center gap-2.5
                        transition-all duration-300"
          >
            <Icon className="w-5 h-5" style={{ color: tech.color }} />
            <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground">
              {tech.name}
            </span>
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              asChild 
              className="gap-2 gradient-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Link href="#projetos">
                Ver projetos
                <ArrowDown className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            >
              <Link href="/contact">
                <Mail className="w-4 h-4" />
                Vamos conversar
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="flex gap-4 justify-center"
          >
            <Button 
              variant="ghost" 
              
              asChild 
              className="rounded-full w-16 h-16 hover:bg-primary/10 hover:text-primary"
            >
              <Link href="https://github.com" target="_blank">
                <Github className="w-8 h-8" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              
              asChild 
              className="rounded-full w-16 h-16 hover:bg-secondary/10 hover:text-primary"
            >
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-8 h-8" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-16"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Explore mais</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 rounded-full bg-primary"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;