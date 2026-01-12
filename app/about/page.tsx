import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Sobre — tnhz.dev",
  description: "Informações profissionais, abordagem de trabalho e foco técnico.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Título */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Sobre</h1>
        <p className="text-muted-foreground">
          Visão profissional, forma de trabalho e foco técnico.
        </p>
      </header>

      {/* Quem sou */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quem sou</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            Desenvolvedor Full Stack com foco em aplicações web modernas. Atuo
            principalmente com JavaScript/TypeScript, desenvolvendo soluções
            completas do frontend ao backend.
          </p>
          <p>
            Meu foco é construir sistemas funcionais, organizados e fáceis de
            manter, evitando complexidade desnecessária.
          </p>
        </CardContent>
      </Card>

      {/* O que faço */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>O que faço na prática</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Desenvolvimento de aplicações web completas</li>
            <li>Frontend com foco em UX, performance e responsividade</li>
            <li>Criação e consumo de APIs</li>
            <li>Integração com serviços externos</li>
            <li>Projetos pessoais do zero à produção</li>
          </ul>
        </CardContent>
      </Card>

      {/* Como trabalho */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Como trabalho</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            Gosto de começar pelo planejamento e estrutura antes da implementação.
            Prefiro soluções simples, claras e bem organizadas.
          </p>
          <p>
            Dou prioridade à legibilidade do código, organização do projeto e
            facilidade de manutenção.
          </p>
        </CardContent>
      </Card>

      {/* Tecnologias (placeholder) */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tecnologias</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>
            Lista de tecnologias principais utilizadas nos projetos.
            <br />
            (Você pode ajustar, remover ou animar esta seção depois.)
          </p>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition"
        >
          Ver projetos
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Entrar em contato
        </Link>
      </div>
    </main>
  );
}
