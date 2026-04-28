import Hero from "@/app/src/components/Hero";
import { getAllProjects } from "@/app/src/lib/content.server";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Cpu,
  CheckCircle2,
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
    { label: "Stack Principal", value: "Full Stack", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />

      {/* Projetos */}
      <section id="projetos" className="relative py-24 overflow-hidden">
        <div className="container relative mx-auto px-4 z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-gradient-to-r from-primary/10 to-secondary/10 
                            border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Projetos em Destaque
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Projetos Desenvolvidos na{" "}
              <span className="text-primary">Prática</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projetos focados em boas práticas, organização e soluções reais.
            </p>
          </div>

          {featuredProjects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/50 p-10 text-center bg-card">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-2">
                Projetos em Construção
              </h3>

              <p className="text-muted-foreground">
                Novos projetos serão adicionados em breve.
              </p>
            </div>
          ) : (
            <>
              <ProjectsGrid projects={featuredProjects} />

              <div className="flex justify-center mt-16">
                <Button
                  asChild
                  size="lg"
                  className="group gap-2 px-8 py-6 rounded-xl
                             bg-gradient-to-r from-primary to-primary/90
                             hover:shadow-lg hover:shadow-primary/30
                             transition-all duration-300"
                >
                  <Link href="/projects">
                    Ver Todos os Projetos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      <StatsBar stats={stats} />

      <Specialties />

      <DevelopmentProcess />

      <CTA />
    </main>
  );
}