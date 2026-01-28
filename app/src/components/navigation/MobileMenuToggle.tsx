import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <motion.button
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "md:hidden p-2.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
          >
            <X className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
          >
            <Menu className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}