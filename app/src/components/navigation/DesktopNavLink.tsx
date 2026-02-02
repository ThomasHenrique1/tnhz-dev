import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavLink } from "./useNavbar";

interface DesktopNavLinkProps {
  link: NavLink;
  isActive: boolean;
  index: number;
}

export default function DesktopNavLink({ link, isActive, index }: DesktopNavLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={link.href}
        className={cn(
          "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          isActive
            ? "text-primary"
            : "text-foreground/80 hover:text-foreground"
        )}
      >
        {link.label}
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        )}
      </Link>
    </motion.div>
  );
}