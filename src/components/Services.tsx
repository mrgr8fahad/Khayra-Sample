import Link from "next/link";
import { services } from "@/data/content";
import { ArrowRight, IconBadge } from "./ui";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title">
              End-to-End Digital Marketing
              <br /> Solutions
            </h2>
          </div>
          <p className={styles.intro}>
            Tailored strategies, creative execution, and data-driven campaigns to
            help your business attract, engage, and convert more customers.
          </p>
        </div>

        <ul className={styles.grid}>
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/digital-marketing-services#${s.slug}`} className={styles.card}>
                <IconBadge src={s.icon} size={46} />
                <div className={styles.body}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <ArrowRight className={styles.arrow} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
