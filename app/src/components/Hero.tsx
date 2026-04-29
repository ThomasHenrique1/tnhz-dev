"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "@/app/src/components/Hero/HeroBackground";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  ArrowDown,
  ArrowRight,
  Mail,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/app/src/components/tech-stack/tech-stack";

const highlights = [
  { text: "Código Limpo & Testável", color: "primary" },
  { text: "Arquitetura Escalável", color: "secondary" },
  { text: "Performance Otimizada", color: "accent" },
  { text: "UX/UI Moderna", color: "primary" },
  { text: "APIs REST", color: "secondary" },
  { text: "DevOps & CI/CD", color: "accent" },
];

const colorMap = {
  primary: "bg-primary/5 border-primary/10 text-primary",
  secondary: "bg-secondary/5 border-secondary/10 text-secondary",
  accent: "bg-accent/5 border-accent/10 text-accent",
};

export default function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const handleScroll = () => {
    const el = document.getElementById("projetos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-linear-to-br from-background via-background to-primary/5">

      <HeroBackground />

      <div className="container relative mx-auto px-4 py-16 md:py-24 z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full
              border border-primary/20 bg-primary/5 px-4 py-2">
              
              <span className="absolute w-2.5 h-2.5 rounded-full bg-primary/30 animate-ping" />
              <Sparkles className="relative w-4 h-4 text-primary" />

              <span className="text-sm font-medium">
                Disponível para oportunidades
              </span>
            </div>
          </motion.div>

          {/* GRID */}
          <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-6">

              {/* Cargo */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Thomas Henrique
                <br />
                <span className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Full Stack Developer
                </span>
              </h1>

              {/* Descrição */}
              <p className="text-lg text-muted-foreground max-w-xl">
                Desenvolvo aplicações completas com foco em performance, escalabilidade e regras de negócio reais.
              </p>

              {/* Info */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">São Paulo, SP</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span className="text-sm">1+ ano</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 pt-2">
                {highlights.map((item) => (
                  <span
                    key={item.text}
                    className={`px-3 py-1.5 text-xs rounded-lg border ${colorMap[item.color as keyof typeof colorMap]}`}
                  >
                    {item.text}
                  </span>
                ))}
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden border">
                <div className=" w-100 h-80">
                  <Image
                    src="/tnhz.png"
                    alt="Thomas Henrique"
                    fill
                    className=""
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeUp} className="mt-12 mb-10">
            <TechStack columns={5} />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">

            <Button asChild size="lg" className="group px-8 py-6 rounded-xl">
              <Link href="#projetos">
                <Briefcase className="w-5 h-5" />
                Projetos
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="px-8 py-6 rounded-xl">
              <Link href="/contact">
                <Mail className="w-5 h-5" />
                Contato
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>

          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6 justify-center">

            <div className="flex gap-4">
              <Link href="https://github.com/ThomasHenrique1" target="_blank">
                <Github className="w-6 h-6 hover:text-primary transition" />
              </Link>

              <Link href="https://www.linkedin.com/in/thomas-henrique12" target="_blank">
                <Linkedin className="w-6 h-6 hover:text-primary transition" />
              </Link>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                São Paulo, Brasil
              </p>
              <p className="text-xs text-muted-foreground">
                Disponível para projetos remotos e híbridos
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div onClick={handleScroll} className="cursor-pointer">
          <ChevronDown className="w-6 h-6 animate-bounce text-primary/70" />
        </div>
      </motion.div>
    </section>
  );
}