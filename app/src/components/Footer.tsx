'use client';

import Link from "next/link";
import { 
  Code2, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

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

  return (
    <footer className="relative w-full border-t border-border/50 bg-background mt-auto">
      
      <div className="container relative mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-border">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">tnhz.dev</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvedor Software
                </p>
              </div>
            </div>
            
            <p className="text-sm text-foreground/80 leading-relaxed">
              Criando soluções digitais com foco em performance 
              e experiência do usuário.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
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
                           transition-colors hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Conecte-se
            </h4>
            
            <div className="space-y-3">
              <a 
                href="mailto:thomasnhenrique@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                <Mail className="w-4 h-4" />
                thomasnhenrique@gmail.com
              </a>
              
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg border border-border bg-muted 
                             hover:bg-primary/10 hover:border-primary/40 
                             transition-all duration-200 hover:scale-105"
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

        {/* Divider melhorado */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            © {currentYear} tnhz.dev
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-foreground 
                     flex items-center gap-1 transition-all hover:underline"
          >
            Voltar ao topo
            <ArrowUpRight className="w-3 h-3 rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
}