import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavLink } from "./useNavbar";
import ThemeToggle from "@/components/themes/ThemeToggle";
import { Mail } from "lucide-react";

interface MobileNavContentProps {
  links: NavLink[];
  pathname: string;
  onClose: () => void;
}

export default function MobileNavContent({ links, pathname, onClose }: MobileNavContentProps) {
  return (
    <motion.div
      id="mobile-menu"
      role="menu"
      aria-label="Menu de navegação mobile"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl overflow-hidden"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-1">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
                      : "text-foreground/90 hover:bg-muted"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex items-center justify-between gap-4 pt-6 mt-4 border-t border-border/50">
          <ThemeToggle />
          <Link href="/contact" className="flex-1" onClick={onClose}>
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <Mail className="w-4 h-4" />
              Contato
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}