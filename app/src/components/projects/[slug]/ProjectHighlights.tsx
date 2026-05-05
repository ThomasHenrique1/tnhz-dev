// components/project/ProjectHighlights.tsx
import { CheckCircle, Target, Award, Zap } from "lucide-react";

interface ProjectHighlightsProps {
  highlights?: string[];
  challenges?: Array<{
    problem: string;
    solution: string;
  }>;
}

export function ProjectHighlights({
  highlights = [],
  challenges = []
}: ProjectHighlightsProps) {
  const limitedHighlights = highlights.slice(0, 4);
  const limitedChallenges = challenges.slice(0, 2);

  return (
    <div className="space-y-8 mb-12">
      {/* Destaques */}
      {limitedHighlights.length > 0 && (
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Destaques</h3>
          </div>

          <div className="grid gap-3">
            {limitedHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-background/40 border border-border/20 hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desafios */}
      {limitedChallenges.length > 0 && (
        <div className="bg-gradient-to-br from-amber-500/5 to-purple-500/5 rounded-2xl p-6 border border-amber-500/20">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold">Desafios</h3>
          </div>

          <div className="space-y-4">
            {limitedChallenges.map((challenge, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-background/40 border border-border/20 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-start gap-2 mb-1">
                  <Zap className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    {challenge.problem}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground ml-6">
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}