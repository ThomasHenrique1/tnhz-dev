"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "@/app/src/components/Hero/HeroBackground";
import HeroBadge from "@/app/src/components/Hero/HeroBadge";
import HeroTitle from "@/app/src/components/Hero/HeroTitle";
import HeroCTAs from "@/app/src/components/Hero/HeroCTAs";
import HeroSocial from "@/app/src/components/Hero/HeroSocial";
import HeroScrollIndicator from "@/app/src/components/Hero/HeroScrollIndicator";
import TechStack from "@/app/src/components/tech-stack/tech-stack";


const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden 
                      bg-linear-to-br from-background via-background to-primary/5">
      
      {/* Background Elements */}
      <HeroBackground />

      <div className="container relative mx-auto px-4 py-16 md:py-24 z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <HeroBadge variants={fadeUp} />

          {/* Title Section */}
          <HeroTitle 
            fadeUp={fadeUp}
            showProfile={true}
            userName="Thomas Henrique"
            userRole="Desenvolvedor Software"
            userLocation="São Paulo, SP"
            userExperience="2+ anos"
            userImage="/profile.jpg"
          />

          {/* Tech Stack */}
          <motion.div variants={fadeUp} className="gap-4 mb-16">
            <div>
             <TechStack 
                title="Minhas Tecnologias Principais:"
                technologiesToShow={["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL" , "JavaScript" ,"PHP" , "Supabase" , "Git" , "Vercel", "HTML5" , "CSS3"]}
                columns={3}
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <HeroCTAs variants={fadeUp} />

          {/* Social Links */}
          <HeroSocial 
            variants={fadeUp}
            location="São Paulo, Brasil " 
            availability="Disponível para projetos remotos e híbridos"
          />
          
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <HeroScrollIndicator delay={1.5} />
    </section>
  );
};

export default Hero;