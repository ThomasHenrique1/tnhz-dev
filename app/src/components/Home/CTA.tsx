import { Star, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-primary/10 border border-primary/30 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Contato
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Se quiser trocar ideia sobre projetos, código ou oportunidades,
            fique à vontade para entrar em contato.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button 
              asChild 
              size="lg" 
              className="group gap-2 px-8 py-6 rounded-xl gradient-primary 
                         text-primary-foreground transition-all duration-300
                         hover:scale-105"
            >
              <Link href="/contact">
                Entrar em Contato
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="gap-2 px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/projects">
                Ver Projetos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}