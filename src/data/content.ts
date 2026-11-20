// All homepage copy lives here so it can be edited without touching layout.
// NOTE: stats and client names come from the design concept and are
// placeholders. Replace them with verified figures and approved client
// logos before going live.

export const site = {
  name: "Khayra",
  ctaLabel: "Get a Free Consultation",
  ctaHref: "/contact",
  copyrightYear: 2026,
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const services = [
  {
    slug: "seo",
    icon: "/icons/services/seo.svg",
    title: "Search Engine Optimization (SEO)",
    text: "Improve search visibility and attract high-intent organic traffic.",
  },
  {
    slug: "sem",
    icon: "/icons/services/sem.svg",
    title: "Search Engine Marketing (SEM)",
    text: "Reach the right audience with high-performing Google Ads.",
  },
  {
    slug: "social-media-marketing",
    icon: "/icons/services/social-media.svg",
    title: "Social Media Marketing",
    text: "Build brand awareness and engagement across key social platforms.",
  },
  {
    slug: "performance-marketing",
    icon: "/icons/services/performance.svg",
    title: "Performance Marketing",
    text: "Drive measurable results with ROI-focused paid campaigns.",
  },
  {
    slug: "website-development",
    icon: "/icons/services/web-development.svg",
    title: "Website Design & Development",
    text: "Fast, modern, and conversion-focused websites for your business.",
  },
  {
    slug: "branding",
    icon: "/icons/services/branding.svg",
    title: "Branding & Creative Design",
    text: "Build a distinctive brand identity with compelling visuals and messaging.",
  },
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/digital-marketing-services",
    children: services.map((s) => ({
      label: s.title.replace(/ \(.*\)$/, ""),
      href: `/digital-marketing-services#${s.slug}`,
    })),
  },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const heroStats = [
  { value: "100+", label: "Campaigns Executed" },
  { value: "50+", label: "Happy Clients" },
  { value: "3+", label: "Years of Experience" },
];

export const clients = [
  "Alpharive",
  "Entrily",
  "Tender Sniper",
  "Daivtech",
  "Thamarai Dry Fruits",
];

export const benefits = [
  {
    icon: "/icons/benefits/strategy-first.svg",
    title: "Strategy-First Approach",
    text: "Marketing plans built around your business goals.",
  },
  {
    icon: "/icons/benefits/data-driven.svg",
    title: "Data-Driven Decisions",
    text: "Insights and analytics that drive better results.",
  },
  {
    icon: "/icons/benefits/creative-thinking.svg",
    title: "Creative Thinking",
    text: "Fresh ideas and compelling content that stand out.",
  },
  {
    icon: "/icons/benefits/transparent-communication.svg",
    title: "Transparent Communication",
    text: "Clear updates, honest insights, and measurable progress.",
  },
];

export const processSteps = [
  {
    icon: "/icons/process/discover.svg",
    title: "Discover",
    text: "Understand your business, audience, and goals.",
  },
  {
    icon: "/icons/process/strategize.svg",
    title: "Strategize",
    text: "Build a customized marketing roadmap.",
  },
  {
    icon: "/icons/process/execute.svg",
    title: "Execute",
    text: "Run targeted campaigns and creative initiatives.",
  },
  {
    icon: "/icons/process/optimize.svg",
    title: "Optimize",
    text: "Track performance and continuously improve.",
  },
];

export const industries = [
  { icon: "/icons/industries/healthcare.svg", label: "Healthcare" },
  { icon: "/icons/industries/education.svg", label: "Education" },
  { icon: "/icons/industries/ecommerce.svg", label: "E-Commerce" },
  { icon: "/icons/industries/technology.svg", label: "Technology & SaaS" },
  { icon: "/icons/industries/real-estate.svg", label: "Real Estate" },
  { icon: "/icons/industries/professional-services.svg", label: "Professional Services" },
];
