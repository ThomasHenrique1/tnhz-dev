import { motion } from "framer-motion";

import { Variants } from "framer-motion";

const HeroDescription = ({ fadeUp }: { fadeUp: Variants }) => {
  return (
    <motion.p
      variants={fadeUp}
      className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
    >
      Desenvolvedor de software em constante evolução, explorando diferentes
      stacks para ampliar repertório técnico e entregar soluções eficientes,
      bem estruturadas e fáceis de manter.
    </motion.p>
  );
};

export default HeroDescription;
