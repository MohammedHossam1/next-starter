"use client";

import { AuthButtons } from "./auth-buttons";
import { Logo } from "./logo";
import { NavigationLinks } from "./navigation-links";
import { UserDropdown } from "./user-dropdown";
import LangSwitcher from "@/components/shared/lang-switch";
import MobileNav from "./mobile-nav";
import { useTranslations } from "next-intl";
import { user } from "@/data";

export default function Navbar() {
  const t = useTranslations("navbar");

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4  gap-x-6">
        <Logo />
        {/* Desktop Links */}
        <div className="max-md:hidden">
          <NavigationLinks t={t} />
        </div>
        <div className="hidden md:flex items-center space-x-4 ">
          <LangSwitcher />
          <AuthButtons t={t} />
          <UserDropdown user={user} t={t} />
        </div>
        {/* Mobile Nav  */}
        <MobileNav t={t} user={user} />
      </div>
    </nav>
  );
}
