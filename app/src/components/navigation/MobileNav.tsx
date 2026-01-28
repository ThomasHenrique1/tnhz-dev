import { AnimatePresence } from "framer-motion";
import { NavLink } from "./useNavbar";
import MobileNavContent from "@/app/src/components/navigation/MobileNavContent";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  pathname: string;
}

export default function MobileNav({ isOpen, onClose, links, pathname }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <MobileNavContent
          links={links}
          pathname={pathname}
          onClose={onClose}
        />
      )}
    </AnimatePresence>
  );
}