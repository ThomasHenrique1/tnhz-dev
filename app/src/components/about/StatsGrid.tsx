import { Briefcase, Rocket, Shield, Code2 } from "lucide-react";
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

const stats = [
  {
    value: "Aplicações Full Stack",
    label: "Desenvolvimento completo com frontend, backend e banco",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    value: "React • Next.js • TypeScript",
    label: "Foco em interfaces modernas e performáticas",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    value: "APIs e Regras de Negócio",
    label: "Node.js e Python com integração real de dados",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    value: "MySQL • PostgreSQL • Supabase",
    label: "Modelagem de dados e autenticação segura",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export function StatsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeInUp}
          className="rounded-2xl border border-border/50 bg-gradient-card p-6 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-4">
            <div className="text-primary">{stat.icon}</div>
          </div>

          <div className="text-2xl font-bold">{stat.value}</div>
          <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}