"use client";

import { StatsGrid } from "@/app/src/components//about/StatsGrid";
import { PhilosophySection } from "@/app/src/components//about/PhilosophySection";
import { CTASection } from "@/app/src/components//about/CTASection";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
       <section className="relative overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary">Sobre Mim</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Desenvolvedor <span className="text-primary">Full Stack</span>
          </h1>

        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desenvolvedor Full Stack com foco em aplicações web utilizando
            <span className="font-medium text-foreground"> React, Next.js, Node.js e PostgreSQL</span>.
          </p>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Experiência no desenvolvimento de sistemas completos, incluindo autenticação,
            APIs, integração com banco de dados e construção de interfaces funcionais
            voltadas para aplicações reais.
          </p>
        </div>

        </motion.div>
      </div>
    </section>
      
      {/* Stats */}
      <div className="container mx-auto px-4 max-w-6xl mt-8">
        <StatsGrid />
      </div>

      <PhilosophySection />
      <CTASection />
      
    </main>
  );
}