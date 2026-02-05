// components/about/HeroSection.tsx
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Sobre Mim</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Desenvolvedor de <span className="text-primary">Software</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
  <p className="text-xl text-muted-foreground leading-relaxed">
    Atuo no desenvolvimento de sistemas web completos, com foco em lógica de negócio,
    arquitetura e integração de dados, priorizando código sustentável e fácil de manter.
  </p>

  <p className="text-xl text-muted-foreground leading-relaxed">
    Tenho perfil generalista, atuando do banco de dados à interface, construindo sistemas
    organizados, previsíveis e preparados para evoluir com o produto.
  </p>
</div>

        </motion.div>
      </div>
    </section>
  );
}