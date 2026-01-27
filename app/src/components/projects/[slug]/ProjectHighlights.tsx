// components/project/ProjectHighlights.tsx
import { CheckCircle, Target, Award, Zap } from "lucide-react";

interface ProjectHighlightsProps {
  highlights?: string[];
  challenges?: Array<{
    problem: string;
    solution: string;
  }>;
}

export function ProjectHighlights({ highlights = [], challenges = [] }: ProjectHighlightsProps) {
  return (
    <div className="space-y-8 mb-12">
      {/* Destaques */}
      {highlights.length > 0 && (
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Destaques do Projeto</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desafios e Soluções */}
      {challenges.length > 0 && (
        <div className="bg-gradient-to-br from-amber-500/5 to-purple-500/5 rounded-2xl p-6 border border-amber-500/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold">Desafios e Soluções</h3>
          </div>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 rounded-lg bg-background/50 border border-border/30 hover:border-amber-500/30 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-red-500/10">
                      <Zap className="w-4 h-4 text-red-500" />
                    </div>
                    <h4 className="font-semibold text-red-600">Desafio</h4>
                  </div>
                  <p className="text-sm">{challenge.problem}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-green-500/10">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <h4 className="font-semibold text-green-600">Solução</h4>
                  </div>
                  <p className="text-sm">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}