import { Star, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-8">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Contato</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Vamos Conversar?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Se quiser trocar ideia sobre projetos, código ou oportunidades, fique à vontade para entrar em contato.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="group gap-3 px-10 py-7 rounded-2xl gradient-primary text-primary-foreground">
              <Link href="/contact">
                <span>Entrar em Contato</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="gap-3 px-10 py-7 rounded-2xl">
              <Link href="/projects">
                <span>Ver Projetos</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}