import Link from "next/link";
import { site } from "@/data/content";
import { ArrowRight } from "./ui";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.wrap} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.banner}>
          <div>
            <h2 id="cta-title">Let&rsquo;s Build Something Great Together.</h2>
            <p>
              Your business deserves a digital strategy that creates opportunities,
              attracts customers, and supports long-term growth.
            </p>
          </div>
          <Link href={site.ctaHref} className="btn btn-light">
            {site.ctaLabel} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
