"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative -mr-2.5 grid size-11 place-items-center"
      >
        <span className={`absolute h-px w-5 bg-ink transition-transform duration-200 ${open ? "rotate-45" : "-translate-y-[3.5px]"}`} />
        <span className={`absolute h-px w-5 bg-ink transition-transform duration-200 ${open ? "-rotate-45" : "translate-y-[3.5px]"}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-14 bottom-0 z-40 flex flex-col bg-bg px-4 pb-8"
          >
            <ul className="flex-1">
              {navLinks.map((link) => (
                <li key={link.id} className="border-b border-line">
                  <a href={`/#${link.id}`} onClick={() => setOpen(false)} className="block py-4 text-[28px] font-medium tracking-tight">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <Button href={site.resumeUrl} external className="h-11 w-full">Résumé</Button>
              <Button href="/#contact" variant="solid" className="h-11 w-full">Contact me</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
