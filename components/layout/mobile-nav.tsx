"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);

  return (
    <div className="navigation" lang="en" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }}>
      <button ref={button} type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation${open ? " is-open" : ""}`}>
        {navigation.map((item) => <Link key={item.label} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>
    </div>
  );
}
