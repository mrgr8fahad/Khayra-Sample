import Image from "next/image";
import { benefits } from "@/data/content";
import { IconBadge } from "./ui";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <Image
            src="/images/about-panel-crop.png"
            alt="Marketing strategist planning a growth-focused campaign"
            width={470}
            height={285}
            sizes="(max-width: 900px) 100vw, 560px"
          />
        </div>

        <div>
          <span className="eyebrow">Why Choose Khayra</span>
          <h2 className="section-title">
            More Than Marketing.
            <br /> We&rsquo;re Your <span className="accent">Growth Partner.</span>
          </h2>

          <ul className={styles.list}>
            {benefits.map((b) => (
              <li key={b.title}>
                <IconBadge src={b.icon} size={42} />
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
