"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import { ArrowRight, Logo } from "./ui";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Logo />

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Main">
          <ul className={styles.menu}>
            {nav.map((item) => (
              <li key={item.label} className={item.children ? styles.hasDrop : undefined}>
                <Link href={item.href} className={styles.link} onClick={close}>
                  {item.label}
                  {item.children && (
                    <svg viewBox="0 0 24 24" className={styles.chev} aria-hidden="true">
                      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <ul className={styles.drop}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={close}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href={site.ctaHref} className={`btn btn-primary ${styles.mobileCta}`} onClick={close}>
            {site.ctaLabel} <ArrowRight />
          </Link>
        </nav>

        <Link href={site.ctaHref} className={`btn btn-primary ${styles.cta}`}>
          {site.ctaLabel} <ArrowRight />
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
