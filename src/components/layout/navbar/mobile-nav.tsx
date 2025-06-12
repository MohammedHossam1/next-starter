"use client";

import LangSwitcher from "@/components/shared/lang-switch";
import { IUser } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AuthButtons } from "./auth-buttons";
import { NavigationLinks } from "./navigation-links";
import { UserDropdown } from "./user-dropdown";

interface IProps {
  t: (key: string) => string;
  user: IUser;
}

const MobileNav = ({ t, user }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Header buttons */}
      <div className="flex items-center gap-3">
        <UserDropdown user={user} t={t} />
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 !z-1 bg-white shadow-md border-t border-gray-200 py-6 flex flex-col items-center gap-4"
          >
            <NavigationLinks flexDir={"col"} setIsOpen={setIsOpen} t={t} />
            <LangSwitcher />
            <AuthButtons t={t} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
