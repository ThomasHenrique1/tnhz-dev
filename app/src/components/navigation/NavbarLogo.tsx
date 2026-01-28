import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-2.5"
      >
        <Code2 className="w-5 h-5 text-primary" />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
      <span className="font-bold text-lg tracking-tight text-transparent bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
        tnhz.dev
      </span>
    </Link>
  );
}