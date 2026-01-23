/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import Link from "next/link";
import { 
  Code2, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUpRight,
  Sparkles} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/tnhz",
      label: "Meu GitHub"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/in/tnhz",
      label: "Meu LinkedIn"
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projetos", href: "/projects" },
    { name: "Sobre", href: "/about" },
    { name: "Contato", href: "/contact" }
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS"
  ];

  return (
    <footer className="relative w-full border-t border-border/50 bg-background mt-auto">
      {/* Background Elements - removidos efeitos complexos inicialmente */}
      
      <div className="container relative mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-border">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">tnhz.dev</h3>
                <p className="text-sm text-muted-foreground">Desenvolvedor Software</p>
              </div>
            </div>
            
            <p className="text-sm text-foreground/80">
              Criando soluções digitais com foco
              <span className="">em performance e experiência do usuário</span>
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Navegação
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground 
                           transition-colors duration-200 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Conecte-se
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a 
                  href="mailto:thomasnhenrique@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  thomasnhenrique@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg border border-border bg-muted/50 
                             hover:bg-primary/10 hover:border-primary/30 
                             transition-all duration-200"
                  >
                    <div className="text-muted-foreground hover:text-primary">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-6" />

        {/* Bottom Bar - SIMPLIFICADA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>•</span>
            <span>© {currentYear} tnhz.dev</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-foreground 
                     flex items-center gap-1 hover:underline"
          >
            <span>Voltar ao topo</span>
            <ArrowUpRight className="w-3 h-3 rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
}