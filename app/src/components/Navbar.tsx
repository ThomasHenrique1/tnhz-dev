"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/themes/ThemeToggle";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Code2, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projetos" },
    { href: "/about", label: "Sobre" },
    { href: "/contact", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-2.5"
          >
            <Code2 className="w-5 h-5 text-primary" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            tnhz.dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link, index) => {
            const active = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    active
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Contact Button Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Contato</span>
                <div className="absolute inset-0 border border-primary/30 rounded-lg group-hover:border-primary/50 transition-colors duration-300" />
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
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
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {links.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                          active
                            ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
                            : "text-foreground/90 hover:bg-muted"
                        )}
                      >
                        {link.label}
                        {active && (
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Mobile Actions */}
              <div className="flex items-center justify-between gap-4 pt-6 mt-4 border-t border-border/50">
                <ThemeToggle />
                <Link href="/contact" className="flex-1" onClick={() => setOpen(false)}>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold">
                    <Mail className="w-4 h-4" />
                    Contato
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}