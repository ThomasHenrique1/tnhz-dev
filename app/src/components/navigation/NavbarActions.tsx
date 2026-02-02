/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/themes/ThemeToggle";
import ContactButton from "@/app/src/components/navigation/ContactButton";
import MobileMenuToggle from "@/app/src/components/navigation/MobileMenuToggle";

interface NavbarActionsProps {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export default function NavbarActions({ isMobileMenuOpen, onMobileMenuToggle }: NavbarActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      
      <ContactButton />
      
      <MobileMenuToggle 
        isOpen={isMobileMenuOpen} 
        onToggle={onMobileMenuToggle} 
      />
    </div>
  );
}