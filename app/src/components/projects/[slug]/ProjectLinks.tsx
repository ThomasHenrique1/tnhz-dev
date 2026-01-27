/* eslint-disable @typescript-eslint/no-unused-vars */
// components/project/ProjectLinks.tsx
import { ExternalLink, Github, Figma, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  docsUrl?: string;
}

export function ProjectLinks({ githubUrl, liveUrl, figmaUrl, docsUrl }: ProjectLinksProps) {
  const hasLinks = githubUrl || liveUrl || figmaUrl || docsUrl;
  if (!hasLinks) return null;

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
            {githubUrl && (
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="gap-3 border-primary/30 hover:border-primary/50 hover:bg-primary/10 group transition-all duration-300 hover:scale-105"
              >
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">Código Fonte</span>
                </a>
              </Button>
            )}
            
            {liveUrl && (
              <Button 
                asChild 
                size="lg"
                className="gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 group transition-all duration-300 hover:scale-105"
              >
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">Ver ao Vivo</span>
                </a>
              </Button>
            )}
            
            {figmaUrl && (
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="gap-3 border-pink-500/30 hover:border-pink-500/50 hover:bg-pink-500/10 group transition-all duration-300 hover:scale-105"
              >
                <a 
                  href={figmaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Figma className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">Design (Figma)</span>
                </a>
              </Button>
            )}
            
            {docsUrl && (
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="gap-3 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/10 group transition-all duration-300 hover:scale-105"
              >
                <a 
                  href={docsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">Documentação</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}