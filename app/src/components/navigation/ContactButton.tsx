import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:block"
    >
      <Link href="/contact">
        <button className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Mail className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Contato</span>
          <div className="absolute inset-0 border border-primary/30 rounded-lg group-hover:border-primary/50 transition-colors duration-300" />
        </button>
      </Link>
    </motion.div>
  );
}