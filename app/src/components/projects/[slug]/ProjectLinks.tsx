// components/project/ProjectLinks.tsx
import { Github, Figma, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  docsUrl?: string;
}

export function ProjectLinks({ githubUrl, liveUrl, figmaUrl, docsUrl }: ProjectLinksProps) {
  const links = [
    {
      url: githubUrl,
      label: "Código Fonte",
      icon: Github,
      variant: "outline" as const,
      className:
        "border-primary/30 hover:border-primary/50 hover:bg-primary/10",
    },
    {
      url: liveUrl,
      label: "Ver ao Vivo",
      icon: Globe,
      variant: "default" as const,
      className:
        "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25",
    },
    {
      url: figmaUrl,
      label: "Design (Figma)",
      icon: Figma,
      variant: "outline" as const,
      className:
        "border-pink-500/30 hover:border-pink-500/50 hover:bg-pink-500/10",
    },
    {
      url: docsUrl,
      label: "Documentação",
      icon: FileText,
      variant: "outline" as const,
      className:
        "border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/10",
    },
  ].filter(link => link.url);

  if (links.length === 0) return null;

  return (
    <div className="pt-12 pb-8 animate-fade-up">
      <div className="bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-2xl p-8 border border-border/50">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Recursos do Projeto</h3>
            <p className="text-muted-foreground">
              Acesse todos os recursos relacionados a este projeto.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            {links.map(({ url, label, icon: Icon, variant, className }) => (
              <Button
                key={label}
                asChild
                variant={variant}
                size="lg"
                className={`gap-3 group transition-all duration-300 hover:scale-105 ${className}`}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">{label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}