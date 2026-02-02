/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavLink } from "./useNavbar";
import DesktopNavLink from "@/app/src/components/navigation/DesktopNavLink";

interface DesktopNavProps {
  links: NavLink[];
  pathname: string;
}

export default function DesktopNav({ links, pathname }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Navegação desktop">
      {links.map((link, index) => (
        <DesktopNavLink
          key={link.href}
          link={link}
          isActive={pathname === link.href}
          index={index}
        />
      ))}
    </nav>
  );
}