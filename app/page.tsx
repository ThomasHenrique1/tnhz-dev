/* eslint-disable @typescript-eslint/no-unused-vars */
import Hero from "@/app/src/components/Hero";
import { getAllProjects } from "@/app/src/lib/content.server";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  Shield,
  Rocket,
  Target,
  Palette,
  BarChart3,
  Cpu,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Star,
  Clock,
  HeartHandshake
} from "lucide-react";
import Link from "next/link";
import ProjectsGrid from "@/app/src/components/ProjectsGrid";
import CTA from "@/app/src/components/Home/CTA";
import DevelopmentProcess from "./src/components/Home/DevelopmentProcess";
import StatsBar from "./src/components/Home/StatsBar";
import Specialties from "./src/components/Home/Specialties";


export const revalidate = 60;

export default async function Home() {
  const projects = await getAllProjects();
  const featuredProjects = projects.slice(0, 4);

  const stats = [
    { label: "Projetos Desenvolvidos", value: projects.length, icon: <CheckCircle2 className="w-4 h-4" /> },
    { label: "Código em Produção", value: "Sim", icon: <HeartHandshake className="w-4 h-4" /> },
    { label: "Tempo Programando", value: "2+ anos", icon: <Clock className="w-4 h-4" /> },
    { label: "Stack Principal", value: "Web", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />

      <StatsBar stats={stats} />

      {/* Projetos */}
      <section id="projetos" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 " />

        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Projetos em Destaque</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6">
              Projetos Desenvolvidos na <span className="text-primary">Prática</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aqui estão alguns projetos que representam meu trabalho com desenvolvimento de software,
              focando em organização de código, boas práticas e soluções funcionais.
            </p>
          </div>

          {featuredProjects.length === 0 ? (
            <div className="relative rounded-3xl border-2 border-dashed border-border/50 p-16 text-center bg-gradient-card backdrop-blur-sm">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 mb-8">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Projetos em Construção
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto text-lg">
                  Novos projetos estão sendo desenvolvidos e serão adicionados em breve.
                </p>
              </div>
            </div>
          ) : (
            <>
              <ProjectsGrid projects={featuredProjects} />

              <div className="flex justify-center mt-20">
                <Button asChild size="lg" className="group gap-3 px-10 py-7 rounded-2xl gradient-primary text-primary-foreground">
                  <Link href="/projects">
                    <span className="font-semibold text-lg">Ver Todos os Projetos</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Especialidades */}
      <Specialties />

      {/* Processo */}
      <DevelopmentProcess />


      {/* CTA */}
      <CTA />
    </main>
  );
}
