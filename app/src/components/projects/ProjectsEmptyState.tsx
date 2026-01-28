// components/projects/ProjectsEmptyState.tsx
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectsEmptyState() {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
        <Search className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Nenhum projeto encontrado</h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Estou trabalhando em novos projetos incríveis. Em breve você poderá ver meu trabalho aqui.
      </p>
      <Button asChild>
        <Link href="/">
          Voltar para Home
        </Link>
      </Button>
    </div>
  );
}