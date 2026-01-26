import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos falar de <span className="text-primary">software</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Se você precisa de um sistema bem estruturado, com lógica sólida e código limpo,
            podemos conversar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gap-3 px-8 py-6 rounded-xl text-lg font-semibold gradient-primary text-primary-foreground"
            >
              <Link href="/projects">
                Ver Projetos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-3 px-8 py-6 rounded-xl text-lg font-semibold"
            >
              <Link href="/contact">
                Entrar em Contato
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}