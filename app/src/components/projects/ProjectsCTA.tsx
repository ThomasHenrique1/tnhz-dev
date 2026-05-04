// components/projects/ProjectsCTA.tsx
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectsCTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Gostou de algum projeto?
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Entre em contato ou veja mais do meu trabalho.
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 px-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
          >
            <Link href="/contact">
              Entre em contato
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}