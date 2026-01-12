import Hero from "@/app/src/components/Hero";
import { getAllProjects } from "@/app/src/lib/content.server";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Code2, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";
import ProjectsGrid from "@/app/src/components/ProjectsGrid";

export const revalidate = 60;

export default async function Home() {
  const projects = await getAllProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="flex flex-col">
      <Hero />

      {/* Seção de Projetos */}
      <section id="projetos" className="relative py-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Projetos em Destaque</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Meu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfólio</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl">
                Soluções reais com foco em performance, escalabilidade e experiência do usuário.
                Cada projeto é uma história de desafios superados e objetivos alcançados.
              </p>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                <span>{projects.length} projetos concluídos</span>
              </div>
            </div>
          </div>

          {featuredProjects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <Sparkles className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Em construção
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Novos projetos incríveis estão a caminho. Em breve você poderá ver meu trabalho aqui.
              </p>
            </div>
          ) : (
            <>
              <ProjectsGrid projects={featuredProjects} />

              <div className="flex justify-center mt-16">
                <Button
                  asChild
                  size="lg"
                  className="group gap-2 px-8 py-6 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 
                            hover:from-primary/20 hover:to-secondary/20 
                            border border-primary/20 hover:border-primary/30
                            text-primary hover:text-primary"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    Ver todos os projetos
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Seção de Especialidades */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Como posso ajudar seu projeto
            </h2>
            <p className="text-muted-foreground">
              Ofereço soluções completas, do conceito à implementação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "Desenvolvimento Full Stack",
                description: "Aplicações web completas com frontend e backend integrados, usando as melhores práticas e tecnologias modernas."
              },
              {
                icon: <Zap className="w-8 h-8 text-secondary" />,
                title: "Performance & Otimização",
                description: "Soluções rápidas e eficientes, com foco em performance, SEO e experiência do usuário."
              },
              {
                icon: <Shield className="w-8 h-8 text-accent" />,
                title: "Arquitetura Escalável",
                description: "Sistemas desenhados para crescer, com boa estruturação de código e decisões arquiteturais sólidas."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Integração de APIs",
                description: "Conectando diferentes sistemas e serviços para criar ecossistemas tecnológicos coesos."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-secondary" />,
                title: "UI/UX Moderna",
                description: "Interfaces intuitivas e bonitas que encantam usuários e aumentam engajamento."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-accent" />,
                title: "Manutenção & Suporte",
                description: "Acompanhamento contínuo para garantir que sua aplicação continue funcionando perfeitamente."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Vamos conversar sobre como posso ajudar a levar seu projeto para o próximo nível.
            </p>
            <Button
              asChild
              size="lg"
              className="gap-2 px-8 py-6 text-lg gradient-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/25"
            >
              <Link href="/contact">
                Iniciar conversa
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}