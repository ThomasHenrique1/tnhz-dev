import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactHeader() {
  return (
    <motion.div variants={fadeUp} className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
        Vamos trabalhar juntos
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Estou sempre aberto a discutir novos projetos, oportunidades criativas ou 
        fazer parte da sua visão.
      </p>
    </motion.div>
  );
}