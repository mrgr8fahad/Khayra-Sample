import { clients } from "@/data/content";
import styles from "./TrustBar.module.css";

// Client names render as text wordmarks until approved logo files are supplied.
// To switch to logos: add files under /public/clients and render <Image> here.
export default function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Clients">
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>
          Trusted by Businesses
          <br /> Across Industries
        </p>
        <ul className={styles.logos}>
          {clients.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
