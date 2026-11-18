import Image from "next/image";
import Link from "next/link";
import { heroStats, site } from "@/data/content";
import { ArrowRight } from "./ui";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Digital Marketing Agency</span>
          <h1 className={styles.title}>
            Digital Marketing That Drives Real{" "}
            <span className={styles.highlight}>
              Business Growth
              <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 10C80 3 200 2 296 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className={styles.lead}>
            We help businesses build a stronger digital presence, reach the right
            audience, and turn opportunities into measurable growth.
          </p>

          <div className={styles.actions}>
            <Link href={site.ctaHref} className="btn btn-primary">
              {site.ctaLabel} <ArrowRight />
            </Link>
            <Link href="/#services" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>

          <dl className={styles.stats}>
            {heroStats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className="visually-hidden">{s.label}</dt>
                <dd>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/hero-panel-crop.png"
            alt="Smiling marketer at a laptop, with website traffic up 62% and qualified leads up 48%"
            width={530}
            height={385}
            priority
            sizes="(max-width: 960px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
