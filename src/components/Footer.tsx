import Link from "next/link";
import { nav, services, site } from "@/data/content";
import { Logo } from "./ui";
import styles from "./Footer.module.css";

// The mockup ends at the CTA banner; this is a minimal footer in the same style.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo height={32} />
          <p>
            Strategy-first digital marketing that helps businesses attract, engage
            and convert more customers.
          </p>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title.replace(/ \(.*\)$/, "")}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            {nav
              .filter((n) => !n.children && n.href !== "/")
              .map((n) => (
                <li key={n.label}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>© {site.copyrightYear} Khayra. All rights reserved.</p>
      </div>
    </footer>
  );
}
