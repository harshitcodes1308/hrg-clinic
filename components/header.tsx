"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Treatments", "#treatments"],
  ["Our approach", "#approach"],
  ["Contact", "#contact"],
] as const;

export function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="HRG Hair Regrowth Clinic, home">
        <Image
          className="brand-logo"
          src="/images/hrg-logo-transparent.png"
          alt=""
          width={1448}
          height={1086}
          priority
        />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="button button-small desktop-book" type="button" onClick={onBook}>
          Book consultation
        </button>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button type="button" className="button" onClick={() => { setOpen(false); onBook(); }}>
            Book consultation
          </button>
        </nav>
      )}
    </header>
  );
}
