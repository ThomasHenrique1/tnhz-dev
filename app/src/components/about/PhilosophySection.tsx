import { Lightbulb, Target, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const principles = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Clareza Técnica",
    description:
      "Estrutura clara entre frontend, backend e banco de dados, facilitando leitura e manutenção do sistema.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Foco em Produto",
    description:
      "Interfaces e funcionalidades pensadas para resolver o problema do usuário e melhorar o fluxo do sistema.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Confiabilidade",
    description:
      "Validação de dados, controle de acesso e regras de negócio implementadas no backend.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Manutenibilidade",
    description:
      "Código modular e organizado para facilitar evolução do sistema ao longo do tempo.",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
               Princípios de <span className="text-primary">desenvolvimento</span>
             </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Busco construir sistemas organizados, previsíveis e preparados para evoluir com o produto.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="rounded-2xl border border-border/50 bg-gradient-card p-8 hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-primary/10 to-secondary/10 mb-6">
                <div className="text-primary">{principle.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}