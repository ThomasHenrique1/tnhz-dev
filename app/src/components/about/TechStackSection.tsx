/* eslint-disable @typescript-eslint/no-unused-vars */
import { Code2, Cpu, Globe, Layers, Shield, Palette, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import TechStack from "../tech-stack/tech-stack";

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


export function TechStackSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <TechStack 
                title="Minhas Tecnologias Principais:"
                technologiesToShow={["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL" , "JavaScript" , "Python" , "PHP" , "Supabase" , "Git" , "HTML5", "CSS3" ]}
                columns={3}
              />
        </motion.div>

        
      </div>
    </section>
  );
}