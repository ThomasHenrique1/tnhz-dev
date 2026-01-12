import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/30 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6">
            <Link 
              href="/projects" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Projetos
            </Link>
            <div className="w-1 h-1 rounded-full bg-border" />
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Sobre
            </Link>
            <div className="w-1 h-1 rounded-full bg-border" />
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contato
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} tnhz.dev
          </p>
        </div>
      </div>
    </footer>
  );
}