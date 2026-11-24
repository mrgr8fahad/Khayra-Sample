import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/content";
import {
  caseStudies,
  engagement,
  faqs,
  finalCta,
  hero,
  industries,
  integrated,
  intro,
  pageMeta,
  process,
  services,
  stages,
  whyUs,
} from "@/data/digital-marketing-services";
import { ArrowRight, IconBadge } from "@/components/ui";
import RichText from "./RichText";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: pageMeta.title,
  description: pageMeta.description,
  alternates: { canonical: pageMeta.path },
  openGraph: {
    title: pageMeta.title,
    description: pageMeta.description,
    type: "website",
    url: pageMeta.path,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\n\n- /g, "\n- ") },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital marketing services",
  provider: { "@type": "Organization", name: "Khayra" },
  description: pageMeta.description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.heading, description: s.tagline },
    })),
  },
};

function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

/** "Label: description" list items get a bold label. */
function IncludeItem({ text }: { text: string }) {
  const i = text.indexOf(": ");
  if (i > 0 && i < 30) {
    return (
      <>
        <strong>{text.slice(0, i)}:</strong> {text.slice(i + 2)}
      </>
    );
  }
  return <>{text}</>;
}

export default function DigitalMarketingServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd)} />

      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Digital Marketing Services</span>
            </nav>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className={styles.heroTitle}>
              {hero.titleLead}{" "}
              <span className={styles.highlight}>
                {hero.titleAccent}
                <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 10C80 3 200 2 296 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className={styles.hook}>{hero.hook}</p>
            <p className={styles.heroLead}>{hero.lead}</p>
            <div className={styles.actions}>
              <Link href={site.ctaHref} className="btn btn-primary">
                {site.ctaLabel} <ArrowRight />
              </Link>
              <Link href="#services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
            <ul className={styles.highlights}>
              {hero.highlights.map((h) => (
                <li key={h.label}>
                  <Image src={h.icon} alt="" width={28} height={28} unoptimized />
                  <span>{h.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/dm-hero.png"
              alt="Digital marketing services in Coimbatore"
              width={512}
              height={355}
              priority
              sizes="(max-width: 960px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className={styles.section}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <h2 className="section-title">{intro.title}</h2>
            <div className={styles.prose}>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className={styles.outcomes}>
            <h3>{intro.outcomesTitle}</h3>
            <ul>
              {intro.outcomes.map((o) => (
                <li key={o.title}>
                  <span className={styles.check} aria-hidden="true" />
                  <div>
                    <strong>{o.title}</strong>
                    <p>{o.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3a. Services overview grid */}
      <section id="services" className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <div className={styles.headRow}>
            <div>
              <span className="eyebrow">Our Services</span>
              <h2 className="section-title">Our Digital Marketing Services</h2>
            </div>
            <p className={styles.headIntro}>
              We offer a range of digital marketing solutions that help businesses
              attract, engage, and convert their target audiences.
            </p>
          </div>
          <ul className={styles.serviceGrid}>
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={styles.serviceCard}>
                  <IconBadge src={s.icon} size={46} />
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.summary}</p>
                    <span className={styles.more}>
                      Learn more <ArrowRight />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3b. Service details */}
      <div className={styles.details}>
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className={styles.detail} aria-labelledby={`${s.id}-title`}>
            <div className={`container ${styles.detailGrid}`}>
              <div className={styles.detailMain}>
                <div className={styles.detailHead}>
                  <IconBadge src={s.icon} size={54} />
                  <span className={styles.detailNum}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 id={`${s.id}-title`} className={styles.detailTitle}>
                  {s.heading}
                </h2>
                <p className={styles.tagline}>{s.tagline}</p>
                <div className={styles.prose}>
                  {s.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                {s.note && (
                  <div className={styles.note}>
                    {s.noteTitle && <h3>{s.noteTitle}</h3>}
                    {s.note.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                )}
                <Link href={site.ctaHref} className={`btn btn-outline ${styles.detailCta}`}>
                  {s.cta} <ArrowRight />
                </Link>
              </div>
              <div className={styles.includes}>
                <h3>{s.includesTitle}</h3>
                <ul>
                  {s.includes.map((item) => (
                    <li key={item}>
                      <span className={styles.check} aria-hidden="true" />
                      <span>
                        <IncludeItem text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Integrated strategy */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className={`container ${styles.integratedGrid}`}>
          <div>
            <span className="eyebrow">Integrated Approach</span>
            <h2 className="section-title">{integrated.title}</h2>
            <div className={styles.prose}>
              {integrated.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p>{integrated.closing}</p>
            </div>
          </div>
          <div className={styles.tableCard}>
            <table className={styles.table}>
              <caption>{integrated.tableTitle}</caption>
              <thead>
                <tr>
                  <th scope="col">Channel</th>
                  <th scope="col">Business contribution</th>
                </tr>
              </thead>
              <tbody>
                {integrated.rows.map(([channel, role]) => (
                  <tr key={channel}>
                    <th scope="row">{channel}</th>
                    <td>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Why choose Khayra (mockup band) */}
      <section className={styles.why}>
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyVisual}>
            <Image
              src="/images/dm-about.png"
              alt="Marketing strategist planning a client's growth strategy"
              width={305}
              height={210}
              sizes="(max-width: 900px) 80vw, 380px"
            />
          </div>
          <div>
            <span className="eyebrow">{whyUs.eyebrow}</span>
            <h2 className={`section-title ${styles.whyTitle}`}>
              {whyUs.titleLead}
              <br /> {whyUs.titleRest} <span className="accent">{whyUs.titleAccent}</span>
            </h2>
            <h3 className={styles.whySub}>{whyUs.seoHeading}</h3>
            <p className={styles.whyIntro}>{whyUs.intro}</p>
          </div>
        </div>
        <div className="container">
          <ul className={styles.whyList}>
            {whyUs.items.map((b) => (
              <li key={b.title}>
                <IconBadge src={b.icon} size={44} />
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Process */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headRow}>
            <div>
              <span className="eyebrow">{process.eyebrow}</span>
              <h2 className="section-title">{process.title}</h2>
            </div>
            <p className={styles.headIntro}>{process.intro}</p>
          </div>
          <ol className={styles.steps}>
            {process.steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <div className={styles.stepTop}>
                  <IconBadge src={step.icon} size={44} />
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Industries */}
      <section id="industries" className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <div className={styles.headRow}>
            <div>
              <span className="eyebrow">Industries We Serve</span>
              <h2 className="section-title">{industries.title}</h2>
            </div>
            <p className={styles.headIntro}>{industries.intro}</p>
          </div>
          <ul className={styles.industryGrid}>
            {industries.items.map((ind) => (
              <li key={ind.title} className={styles.industry}>
                <Image src={ind.icon} alt="" width={34} height={34} unoptimized />
                <h3>{ind.title}</h3>
                <p>{ind.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Business stages */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centerHead}>
            <span className="eyebrow">Business Stages</span>
            <h2 className="section-title">{stages.title}</h2>
            <p>{stages.intro}</p>
          </div>
          <ul className={styles.stageGrid}>
            {stages.items.map((st, i) => (
              <li key={st.title} className={styles.stage}>
                <span className={styles.stageNum}>{i + 1}</span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Case studies (no sample metrics until verified results exist) */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className={`container ${styles.caseGrid}`}>
          <div>
            <span className="eyebrow">{caseStudies.eyebrow}</span>
            <h2 className="section-title">{caseStudies.title}</h2>
            <p className={styles.caseIntro}>{caseStudies.intro}</p>
            <Link href="/work" className={styles.textLink}>
              {caseStudies.cta} <ArrowRight />
            </Link>
          </div>
          <div className={styles.caseCard}>
            <span className={styles.casePill}>Case studies</span>
            <h3>Every case study covers</h3>
            <ul className={styles.caseCovers}>
              {caseStudies.covers.map((c) => (
                <li key={c}>
                  <span className={styles.checkLight} aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <ul className={styles.caseTags} aria-label="Case study categories">
              {caseStudies.categories.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. Engagement models */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headRow}>
            <div>
              <span className="eyebrow">How We Work Together</span>
              <h2 className="section-title">{engagement.title}</h2>
            </div>
            <p className={styles.headIntro}>{engagement.intro}</p>
          </div>
          <ul className={styles.engageGrid}>
            {engagement.items.map((m) => (
              <li key={m.title} className={styles.engage}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles.centerCta}>
            <Link href={site.ctaHref} className="btn btn-primary">
              {engagement.cta} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className={`${styles.section} ${styles.tinted}`}>
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">Frequently Asked Questions About Digital Marketing Services</h2>
            <p className={styles.faqAside}>
              Can&rsquo;t find your answer?{" "}
              <Link href={site.ctaHref} className={styles.inlineLink}>
                Talk to our team
              </Link>
              .
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <details key={f.q} className={styles.faq} open={i === 0}>
                <summary>
                  <h3>{f.q}</h3>
                  <span className={styles.faqIcon} aria-hidden="true" />
                </summary>
                <div className={styles.faqBody}>
                  <RichText text={f.a} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className={styles.ctaWrap} aria-labelledby="final-cta">
        <div className="container">
          <div className={styles.ctaBanner}>
            <div>
              <h2 id="final-cta">{finalCta.title}</h2>
              {finalCta.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className={styles.ctaButtons}>
              <Link href={site.ctaHref} className="btn btn-light">
                {finalCta.primary} <ArrowRight />
              </Link>
              <Link href={site.ctaHref} className={`btn ${styles.btnGhost}`}>
                {finalCta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
