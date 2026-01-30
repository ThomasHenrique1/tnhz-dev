import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

interface HeroTitleProps {
  fadeUp: Variants;
  showProfile?: boolean;
  userName?: string;
  userRole?: string;
  userLocation?: string;
  userExperience?: string;
  userImage?: string;
}

const HeroTitle = ({ 
  fadeUp, 
  showProfile = true,
  userName = "Seu Nome",
  userRole = "Desenvolvedor Software",
  userLocation = "São Paulo, SP",
  userExperience = "2+ anos",
  userImage = "/profile.jpg"
}: HeroTitleProps) => {
  return (
    <motion.div variants={fadeUp} className="space-y-8">
      {/* Two Column Layout for Name/Photo */}
      {showProfile && (
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Column - Name and Info */}
          <div className="space-y-6">
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-primary">{userRole}</span>
            </div>

            {/* Name with Gradient */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Olá, sou{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r 
                              from-primary via-primary/90 to-primary/70">
                  {userName}
                </span>
              </h1>
              <p className="text-xl text-foreground/70">
                Desenvolvedor Software & Entusiasta de Tecnologia
              </p>
            </div>

            {/* User Info Cards */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">{userLocation}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground/80">{userExperience} de experiência</span>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="relative order-first lg:order-last">
            <div className="relative max-w-sm mx-auto">
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 
                            rounded-3xl blur-xl" />
              
              {/* Profile Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 
                            bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <div className="aspect-square relative">
                  <Image
                    src={userImage}
                    alt={userName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full 
                            bg-gradient-to-r from-primary to-secondary 
                            flex items-center justify-center border-4 border-background">
                <span className="text-xs font-bold text-white">💻</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Below */}
      <div className="space-y-6">
        {/* Professional Tagline */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 leading-relaxed">
          Transformo{" "}
          <span className="text-primary font-bold">desafios complexos</span> em{" "}
          <span className="text-secondary font-bold">soluções escaláveis</span> com arquitetura moderna
        </h2>

        {/* Detailed Description */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Especializado em desenvolvimento full stack, com foco em criar aplicações web performáticas,
            escaláveis e com código de qualidade. Acredito que tecnologia bem aplicada transforma negócios.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trabalho com múltiplas tecnologias, sempre buscando as melhores ferramentas para cada projeto,
            mantendo um equilíbrio entre inovação, estabilidade e entrega de valor.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="flex flex-wrap gap-3 pt-4 mb-15">
          {[
            { text: "Código Limpo & Testável", color: "primary" },
            { text: "Arquitetura Escalável", color: "secondary" },
            { text: "Performance Otimizada", color: "accent" },
            { text: "UX/UI Moderna", color: "primary" },
            { text: "APIs REST/GraphQL", color: "secondary" },
            { text: "DevOps & CI/CD", color: "accent" }
          ].map((item, index) => (
            <span
              key={index}
              className={`inline-flex items-center px-4 py-2 rounded-lg 
                        bg-${item.color}/5 border border-${item.color}/10 
                        hover:bg-${item.color}/10 transition-colors`}
            >
              <span className={`text-sm font-medium text-${item.color}`}>•</span>
              <span className="ml-2 text-sm font-medium text-foreground/80">
                {item.text}
              </span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroTitle;