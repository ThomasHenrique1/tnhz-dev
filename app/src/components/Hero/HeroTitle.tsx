import { motion } from "framer-motion";

import { Variants } from "framer-motion";

interface HeroTitleProps {
  fadeUp: Variants;
}

const HeroTitle = ({ fadeUp }: HeroTitleProps) => {
  return (
    <motion.h1
      variants={fadeUp}
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
    >
      <span className="block text-foreground">
        Desenvolvedor{" "}
        <span className="text-primary">de Software</span>
        <span className="block mt-2">
          construindo soluções{" "}
          <span className="text-gradient">
            digitais funcionais
          </span>
        </span>
      </span>

      <span className="block text-foreground/90 text-lg md:text-xl lg:text-2xl font-normal mt-6">
        Atuação prática com{" "}
        <span className="text-blue font-semibold">múltiplas linguagens</span>,{" "}
        frameworks e ferramentas,
        com foco em{" "}
        <span className="text-primary font-semibold">
          aprendizado contínuo
        </span>{" "}
        e código sustentável.
        <span className="block mt-2">
          Capacidade de adaptação e{" "}
          <span className="text-accent font-semibold">
            resolução de problemas reais
          </span>.
        </span>
      </span>
    </motion.h1>
  );
};

export default HeroTitle;
