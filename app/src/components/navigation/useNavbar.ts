/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";

export type NavLink = {
  href: string;
  label: string;
};

export function useNavbar() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo<NavLink[]>(
    () => [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projetos" },
      { href: "/about", label: "Sobre" },
      { href: "/contact", label: "Contato" },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return { scrolled, pathname, links };
}

function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}