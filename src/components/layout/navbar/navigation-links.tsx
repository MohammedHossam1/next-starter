"use client";

import { navigationItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
interface IProps {
  t: (key: string) => string;
  setIsOpen?: (state: boolean) => void;
  flexDir?: "row" | "col";
}
export function NavigationLinks({ t, setIsOpen, flexDir = "row" }: IProps) {
  const pathname = usePathname();
  function handleClose() {
    if (setIsOpen) setIsOpen(false);
  }

  return (
    <div
      className={`relative flex items-center gap-4 ${
        flexDir == "col" && "flex-col justify-center"
      }`}
    >
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <div key={item.href} className="relative">
            <Link
              href={item.href}
              onClick={handleClose}
              prefetch={true}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {t(item.label)}
            </Link>

            {/* Animated underline */}
            {isActive && (
              <motion.div
                layoutId="nav-underline"
                className="absolute left-0 right-0 h-[2px] bg-primary -bottom-1 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
