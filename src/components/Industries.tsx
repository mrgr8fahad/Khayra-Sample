import Image from "next/image";
import { industries } from "@/data/content";
import styles from "./Industries.module.css";

export default function Industries() {
  return (
    <section id="industries" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Industries We Serve</span>
          <h2 className={`section-title ${styles.title}`}>
            Digital Expertise
            <br /> Across Industries
          </h2>
        </div>

        <ul className={styles.tiles}>
          {industries.map((ind) => (
            <li key={ind.label} className={styles.tile}>
              <Image src={ind.icon} alt="" width={30} height={30} unoptimized />
              <span>{ind.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
