import { motion } from "framer-motion";

import { Variants } from "framer-motion";

const HeroName = ({ fadeUp }: { fadeUp: Variants }) => {
  return (
    <motion.h2
      variants={fadeUp}
      className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground mb-3"
    >
      Thomas Henrique
    </motion.h2>
  );
};

export default HeroName;
