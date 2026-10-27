"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/content/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const ids = navLinks.map((l) => l.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Border after 8px; hide on scroll down, show on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 240 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-bg/80 backdrop-blur-md transition-[transform,border-color] duration-200",
        scrolled ? "border-line" : "border-transparent",
        hidden && "-translate-y-full",
      )}
    >
      <nav className="mx-4 flex h-14 items-center justify-between md:mx-6 md:h-16 xl:mx-auto xl:max-w-rails xl:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid size-6 place-items-center rounded-md bg-ink text-[10px] font-semibold text-white">
            {site.initials}
          </span>
          <span className="text-[15px] font-medium">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`/#${link.id}`}
                className={cn(
                  "block px-3 py-2 text-[14px] transition-colors duration-150 hover:text-ink",
                  active === link.id ? "text-ink" : "text-muted",
                )}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-px h-px bg-ink" />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={site.resumeUrl} arrow={false} external>
            Résumé
          </Button>
          <Button href="/#contact" variant="solid" arrow={false}>
            Contact me
          </Button>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
