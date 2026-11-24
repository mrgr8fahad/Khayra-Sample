import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, IconBadge } from "@/components/ui";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | Khayra Tech",
  description: "The page you're looking for doesn't exist or has moved.",
};

// Only link to pages that exist.
const popular = [
  {
    href: "/digital-marketing-services",
    icon: "/icons/dm/services/performance-marketing.svg",
    title: "Digital Marketing Services",
    text: "Everything we offer, in one place.",
  },
  {
    href: "/digital-marketing-services#seo",
    icon: "/icons/dm/services/seo.svg",
    title: "SEO Services",
    text: "Get found by customers searching for you.",
  },
  {
    href: "/digital-marketing-services#sem",
    icon: "/icons/dm/services/sem-google-ads.svg",
    title: "Google Ads",
    text: "Reach high-intent customers with search ads.",
  },
  {
    href: "/digital-marketing-services#social-media-marketing",
    icon: "/icons/dm/services/social-media.svg",
    title: "Social Media Marketing",
    text: "Build awareness and engagement on social.",
  },
  {
    href: "/digital-marketing-services#website-development",
    icon: "/icons/dm/services/website-development.svg",
    title: "Website Development",
    text: "Fast, conversion-focused websites.",
  },
  {
    href: "/digital-marketing-services#faq",
    icon: "/icons/dm/benefits/communication.svg",
    title: "FAQs",
    text: "Answers to common questions.",
  },
];

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <span className="eyebrow">Page Not Found</span>
        <h1 className={styles.title}>
          This page took a <span className="accent">wrong turn.</span>
        </h1>
        <p className={styles.lead}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get
          you back on track.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Back to Home <ArrowRight />
          </Link>
          <Link href="/digital-marketing-services" className="btn btn-outline">
            Explore Our Services
          </Link>
        </div>

        <div className={styles.popular}>
          <h2>Popular pages</h2>
          <ul className={styles.grid}>
            {popular.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={styles.card}>
                  <IconBadge src={p.icon} size={44} />
                  <span className={styles.cardText}>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </span>
                  <ArrowRight className={styles.arrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
