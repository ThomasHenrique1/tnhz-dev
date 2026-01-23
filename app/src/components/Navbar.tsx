/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useNavbar } from "@/app/src/components/navigation/useNavbar";
import NavbarLogo from "@/app/src/components/navigation/NavbarLogo";
import DesktopNav from "@/app/src/components/navigation/DesktopNav";
import MobileNav from "@/app/src/components/navigation/MobileNav";
import NavbarActions from "@/app/src/components/navigation/NavbarActions";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrolled, pathname, links } = useNavbar();
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-background/80 backdrop-blur-sm border-b border-border/30"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <NavbarLogo />
        
        <DesktopNav links={links} pathname={pathname} />
        
        <NavbarActions isMobileMenuOpen={open} onMobileMenuToggle={() => setOpen(!open)} />
      </div>
      
      <MobileNav 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        links={links} 
        pathname={pathname} 
      />
    </motion.header>
  );
}