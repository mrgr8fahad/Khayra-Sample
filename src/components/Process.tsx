import { processSteps } from "@/data/content";
import { IconBadge } from "./ui";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Our Process</span>
          <h2 className={`section-title ${styles.title}`}>
            A Smarter Approach
            <br /> to Digital Growth
          </h2>
        </div>

        <ol className={styles.steps}>
          {processSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.top}>
                <IconBadge src={step.icon} size={46} />
                {i < processSteps.length - 1 && <span className={styles.connector} aria-hidden="true" />}
              </div>
              <h3>
                {String(i + 1).padStart(2, "0")}. {step.title}
              </h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
