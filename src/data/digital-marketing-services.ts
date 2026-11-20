// Copy for /digital-marketing-services. Edit text here; layout lives in
// src/app/digital-marketing-services/.

const I = "/icons/dm";

export const pageMeta = {
  path: "/digital-marketing-services",
  title: "Best Digital Marketing Services | Khayra Tech",
  description:
    "Grow with Khayra: SEO, Google Ads, social media, performance marketing, web development, content, branding and email marketing.",
};

export const hero = {
  eyebrow: "Digital Marketing Services",
  titleLead: "Digital Marketing Services That Turn Your Business Goals",
  titleAccent: "Into Growth",
  hook: "Your customers are online. Your competitors are online. Is your business reaching the right audience?",
  lead: "At Khayra, we provide strategic digital marketing services that help businesses improve their online visibility, attract potential customers, generate qualified leads, and build lasting relationships with their audiences.",
  highlights: [
    { icon: `${I}/benefits/strategy.svg`, label: "Digital Strategy" },
    { icon: `${I}/services/branding-design.svg`, label: "Creative Execution" },
    { icon: `${I}/process/optimize.svg`, label: "Performance Optimization" },
  ],
};

export const intro = {
  title: "Complete Digital Marketing Services to Grow Your Business Online",
  paragraphs: [
    "The way customers discover and interact with businesses has changed. Before making a purchase, customers often search on Google, explore social media profiles, compare websites, read reviews, and evaluate different brands. A strong digital presence helps your business become part of that customer journey.",
    "Digital marketing is not just about running advertisements or publishing content on social media. It involves understanding your audience, identifying opportunities, creating relevant experiences, and using the right marketing channels to achieve business objectives.",
    "From search engine optimization and paid advertising to social media marketing, website development, and content strategy, Khayra brings together the right digital channels to create a connected marketing strategy for your business. We don't believe in one-size-fits-all marketing: every strategy is built around your business objectives, industry, target audience, and growth opportunities.",
  ],
  outcomesTitle: "What can digital marketing do for your business?",
  outcomes: [
    { title: "Increase online visibility", text: "Help potential customers discover your business through search engines, social media, and digital advertising." },
    { title: "Generate qualified leads", text: "Reach people who are more likely to be interested in your products or services." },
    { title: "Build brand awareness", text: "Establish a consistent brand identity across digital platforms." },
    { title: "Improve customer engagement", text: "Create meaningful interactions through content, social media, and personalized communication." },
    { title: "Increase conversions", text: "Improve your website and marketing campaigns to turn visitors into enquiries and customers." },
    { title: "Measure marketing performance", text: "Understand how your marketing activities contribute to business growth." },
  ],
};

export type Service = {
  id: string;
  icon: string;
  name: string;
  heading: string;
  summary: string;
  tagline: string;
  body: string[];
  includesTitle: string;
  includes: string[];
  noteTitle?: string;
  note?: string[];
  cta: string;
};

export const services: Service[] = [
  {
    id: "seo",
    icon: `${I}/services/seo.svg`,
    name: "Search Engine Optimization (SEO)",
    heading: "Search Engine Optimization (SEO) Services",
    summary: "Improve your Google rankings, attract organic traffic and get discovered by the right customers.",
    tagline: "Get discovered by customers actively searching for your business.",
    body: [
      "Search engine optimization helps your website appear in relevant search results when potential customers look for products, services, and information related to your business.",
      "At Khayra, our SEO approach focuses on improving your website's technical foundation, content relevance, keyword targeting, and search visibility. We work on the factors that help search engines understand your website and help visitors find the information they need.",
    ],
    includesTitle: "Our SEO services include",
    includes: [
      "SEO Audit: Evaluate your website's technical health, content quality, indexing, and search performance.",
      "Keyword Research: Identify relevant keywords based on search intent, competition, and business opportunities.",
      "On-Page SEO: Optimize title tags, meta descriptions, headings, content, internal links, and page structure.",
      "Technical SEO: Improve crawlability, indexability, website architecture, structured data, and page performance.",
      "Off-Page SEO: Develop relevant link-building and authority-building strategies.",
      "Local SEO: Improve local search visibility through business profile optimization and location-focused content.",
      "Content Optimization: Create and improve content that answers user questions and supports search intent.",
      "SEO Reporting: Monitor keyword visibility, organic traffic, engagement, and conversions.",
    ],
    noteTitle: "Why invest in SEO?",
    note: [
      "Unlike advertising campaigns that generally stop generating paid traffic when spending stops, SEO can build sustainable organic visibility over time. It is particularly valuable for businesses looking to establish long-term search presence.",
    ],
    cta: "Explore Our SEO Services",
  },
  {
    id: "sem",
    icon: `${I}/services/sem-google-ads.svg`,
    name: "Search Engine Marketing (SEM)",
    heading: "Search Engine Marketing (SEM) Services",
    summary: "Run targeted Google Ads campaigns to reach high-intent customers and generate quality leads.",
    tagline: "Reach potential customers when they are searching for solutions.",
    body: [
      "Search Engine Marketing allows businesses to promote their products and services through paid search advertising. With properly structured advertising campaigns, your business can appear in front of people actively searching for relevant solutions.",
      "Khayra helps businesses plan, launch, manage, and optimize search advertising campaigns based on their marketing objectives.",
    ],
    includesTitle: "Our SEM services include",
    includes: [
      "Google Ads account setup and configuration",
      "Search campaign creation and management",
      "Keyword research and search term analysis",
      "Ad copywriting and creative development",
      "Negative keyword management",
      "Competitor advertising analysis",
      "Audience targeting and remarketing",
      "Conversion tracking and measurement",
      "Campaign budget optimization",
      "Performance reporting",
    ],
    noteTitle: "Our approach",
    note: [
      "We focus on connecting your advertising strategy with the complete customer journey, from the initial search to the landing page and final conversion.",
      "This helps identify opportunities to improve campaign relevance, reduce wasted advertising spend, and generate better-quality enquiries.",
    ],
    cta: "Explore Our Google Ads Services",
  },
  {
    id: "social-media-marketing",
    icon: `${I}/services/social-media.svg`,
    name: "Social Media Marketing",
    heading: "Social Media Marketing Services",
    summary: "Build brand awareness, engage your audience and grow your business across social platforms.",
    tagline: "Build a recognizable brand and connect with your audience.",
    body: [
      "Social media platforms have become important channels for businesses to communicate with customers, share information, showcase products, and build brand awareness.",
      "A successful social media strategy requires more than regular posting. It involves understanding your audience, choosing the right platforms, developing relevant content, and maintaining consistent communication. Khayra helps businesses build meaningful social media experiences through strategic planning, content creation, community engagement, and advertising.",
    ],
    includesTitle: "Our social media marketing services include",
    includes: [
      "Social media strategy and planning",
      "Instagram marketing",
      "Facebook marketing",
      "LinkedIn marketing",
      "Social media account management",
      "Content calendar development",
      "Creative design and visual content",
      "Reels and short-form video planning",
      "Social media advertising",
      "Audience engagement and community management",
      "Social media performance analysis",
    ],
    noteTitle: "Platforms we work with",
    note: [
      "Instagram, Facebook, LinkedIn, YouTube and other relevant social platforms depending on your audience and objectives.",
    ],
    cta: "Explore Social Media Marketing",
  },
  {
    id: "performance-marketing",
    icon: `${I}/services/performance-marketing.svg`,
    name: "Performance Marketing",
    heading: "Performance Marketing Services",
    summary: "Drive measurable results with performance-focused campaigns across Google, Meta and more.",
    tagline: "Make your marketing investment more accountable.",
    body: [
      "Performance marketing focuses on measurable marketing outcomes such as leads, purchases, registrations, enquiries, and other business actions. Rather than evaluating campaigns only through impressions and clicks, performance marketing connects advertising activities with meaningful conversion data.",
      "At Khayra, we develop performance-focused advertising strategies that combine audience research, campaign management, creative testing, landing page optimization, and analytics.",
    ],
    includesTitle: "Our performance marketing services include",
    includes: [
      "Meta Ads campaign management",
      "Google Ads campaign management",
      "Lead generation campaigns",
      "E-commerce advertising",
      "Audience segmentation and targeting",
      "Remarketing campaigns",
      "Landing page optimization",
      "Conversion rate optimization",
      "Marketing analytics and tracking",
      "Campaign performance reporting",
    ],
    noteTitle: "What we focus on",
    note: [
      "We evaluate campaigns based on relevant performance indicators, including cost per lead, conversion rate, customer acquisition cost, and return on advertising spend where applicable.",
      "Our goal is to identify what works, understand what needs improvement, and continuously optimize campaign performance.",
    ],
    cta: "Discover Performance Marketing",
  },
  {
    id: "website-development",
    icon: `${I}/services/website-development.svg`,
    name: "Website Design & Development",
    heading: "Website Design and Development Services",
    summary: "Create fast, user-friendly and conversion-focused websites that support your business goals.",
    tagline: "Turn your website into a powerful business asset.",
    body: [
      "Your website is often one of the first places potential customers interact with your brand. A professional website should do more than look attractive. It should communicate your value, provide a smooth user experience, load efficiently, and guide visitors towards meaningful actions.",
      "Khayra provides website design and development services focused on usability, functionality, responsiveness, and conversion opportunities.",
    ],
    includesTitle: "Our website services include",
    includes: [
      "Business website design",
      "Responsive website development",
      "WordPress website development",
      "E-commerce website development",
      "Landing page design and development",
      "UI/UX design",
      "Website redesign",
      "Website speed optimization",
      "Technical SEO implementation",
      "Website maintenance and support",
    ],
    noteTitle: "Our development approach",
    note: [
      "We consider website structure, navigation, mobile usability, content hierarchy, performance, and conversion opportunities throughout the development process.",
      "Whether you need a new business website, an online store, or a campaign-specific landing page, we help build a digital experience aligned with your business requirements.",
    ],
    cta: "Explore Website Development",
  },
  {
    id: "content-marketing",
    icon: `${I}/services/content-marketing.svg`,
    name: "Content Marketing",
    heading: "Content Marketing Services",
    summary: "Attract, educate and engage your audience with valuable and search-friendly content.",
    tagline: "Create content that informs, engages, and builds trust.",
    body: [
      "Content marketing helps businesses communicate their expertise, answer customer questions, and develop meaningful relationships with their target audiences. Useful and relevant content can support SEO, strengthen brand positioning, and help potential customers make informed decisions.",
      "Khayra develops content strategies that align with your business objectives and customer journey.",
    ],
    includesTitle: "Our content marketing services include",
    includes: [
      "Content marketing strategy",
      "SEO blog writing",
      "Website content development",
      "Landing page copywriting",
      "Social media content",
      "Marketing campaign content",
      "Brand storytelling",
      "Content research and planning",
      "Content optimization",
      "Editorial calendar development",
    ],
    noteTitle: "Our content philosophy",
    note: [
      "We focus on creating content that serves a purpose. Every piece should communicate something valuable, answer a relevant question, or help move your audience closer to a decision.",
    ],
    cta: "Explore Content Marketing",
  },
  {
    id: "branding",
    icon: `${I}/services/branding-design.svg`,
    name: "Branding & Creative Design",
    heading: "Branding and Creative Design Services",
    summary: "Build a strong and consistent brand identity with impactful visuals and messaging.",
    tagline: "Create a brand that people recognize and remember.",
    body: [
      "A strong brand helps your business communicate its personality, values, and positioning consistently across digital platforms. Branding is not limited to a logo. It includes the visual identity, messaging, tone of voice, and overall experience customers associate with your business.",
      "Khayra helps businesses develop creative assets and brand communication that support a consistent digital identity.",
    ],
    includesTitle: "Our branding and creative services include",
    includes: [
      "Brand identity development",
      "Logo design",
      "Brand guidelines",
      "Marketing graphic design",
      "Social media creatives",
      "Advertising banners",
      "Digital campaign creatives",
      "Presentation design",
      "Visual content development",
      "Brand messaging and communication",
    ],
    cta: "Explore Branding Services",
  },
  {
    id: "email-whatsapp-marketing",
    icon: `${I}/services/email-whatsapp.svg`,
    name: "Email & WhatsApp Marketing",
    heading: "Email and WhatsApp Marketing Services",
    summary: "Nurture leads and keep your customers engaged with valuable, personalized communication.",
    tagline: "Stay connected with customers beyond their first interaction.",
    body: [
      "Customer relationships do not end when someone visits your website or makes an enquiry. Email and WhatsApp marketing allow businesses to maintain communication, share relevant information, nurture leads, and encourage repeat engagement.",
      "Khayra helps businesses develop communication strategies that support customer engagement and marketing automation.",
    ],
    includesTitle: "Our services include",
    includes: [
      "Email marketing strategy",
      "Newsletter creation",
      "Email campaign management",
      "Marketing automation",
      "Lead nurturing campaigns",
      "Customer communication workflows",
      "WhatsApp campaign planning",
      "Promotional communication",
      "Email performance analysis",
    ],
    note: [
      "We focus on relevant, permission-based communication that delivers value to subscribers and customers.",
    ],
    cta: "Discuss Your Marketing Requirements",
  },
];

export const integrated = {
  title: "One Integrated Digital Marketing Strategy. Multiple Growth Opportunities.",
  paragraphs: [
    "Digital marketing channels are more effective when they work together. SEO can help attract organic visitors, paid advertising can generate immediate campaign traffic, social media can build brand awareness, and email marketing can nurture potential customers.",
    "However, managing these activities independently can create inconsistent messaging and disconnected customer experiences. At Khayra, we take an integrated approach to digital marketing by connecting relevant channels with your business objectives.",
  ],
  tableTitle: "How our digital channels work together",
  rows: [
    ["SEO", "Long-term organic discovery"],
    ["Google Ads", "Capture high-intent searches"],
    ["Social media", "Build brand awareness and engagement"],
    ["Performance marketing", "Generate measurable conversions"],
    ["Content marketing", "Educate and build trust"],
    ["Website development", "Create effective digital experiences"],
    ["Email marketing", "Nurture customer relationships"],
  ],
  closing:
    "Our approach helps businesses build a more consistent digital presence while identifying opportunities across the entire customer journey.",
};

export const industries = {
  title: "Industry-Focused Digital Marketing Solutions",
  intro:
    "Every industry has different audiences, purchasing behaviours, competition, and business objectives. A marketing strategy that works for an e-commerce company may not be suitable for a healthcare organization or a SaaS business. That's why we consider industry-specific requirements when developing digital marketing strategies.",
  items: [
    { icon: `${I}/industries/healthcare.svg`, title: "Healthcare and Medical", text: "Help healthcare businesses improve online visibility, communicate their services, and reach relevant audiences through search, content, and digital advertising." },
    { icon: `${I}/industries/education.svg`, title: "Education and E-Learning", text: "Support educational institutions, training providers, and online learning businesses with student acquisition, course promotion, and lead generation campaigns." },
    { icon: `${I}/industries/ecommerce.svg`, title: "E-commerce and Retail", text: "Improve product discovery, attract potential buyers, support online sales, and develop customer retention strategies." },
    { icon: `${I}/industries/technology-saas.svg`, title: "Technology and SaaS", text: "Help technology companies communicate complex products, reach decision-makers, generate qualified B2B leads, and strengthen their digital positioning." },
    { icon: `${I}/industries/real-estate.svg`, title: "Real Estate", text: "Improve property visibility, attract potential buyers, and generate enquiries through targeted digital marketing campaigns." },
    { icon: `${I}/industries/professional-services.svg`, title: "Professional Services", text: "Help consultants, agencies, financial service providers, and other professional businesses establish credibility and attract relevant prospects." },
    { icon: `${I}/industries/hospitality-food.svg`, title: "Hospitality and Food", text: "Support restaurants, hotels, and hospitality businesses with local visibility, social media marketing, and customer acquisition campaigns." },
  ],
};

export const whyUs = {
  eyebrow: "Why Choose Khayra",
  titleLead: "More Than a Marketing Agency.",
  titleRest: "We're Your",
  titleAccent: "Growth Partner.",
  seoHeading: "Why Businesses Choose Khayra as Their Digital Marketing Partner",
  intro:
    "Choosing a digital marketing agency is an important business decision. You need a partner who understands your objectives, communicates clearly, and approaches marketing with a focus on meaningful outcomes. At Khayra, we believe effective marketing starts with understanding the business behind the brand.",
  items: [
    { icon: `${I}/benefits/strategy.svg`, title: "Strategies Built Around Your Business", text: "We don't apply the same marketing approach to every client. We consider your business model, audience, competition, and growth priorities before developing a strategy." },
    { icon: `${I}/benefits/data-driven.svg`, title: "Data-Driven Marketing Decisions", text: "We use relevant marketing data, analytics, and performance indicators to evaluate campaigns and identify improvement opportunities." },
    { icon: `${I}/services/branding-design.svg`, title: "Creative and Strategic Thinking", text: "We combine marketing strategy with creative execution to help your brand communicate effectively and stand out in competitive markets." },
    { icon: `${I}/benefits/integrated-expertise.svg`, title: "Integrated Digital Expertise", text: "From SEO and paid advertising to content, social media, and website development, we help businesses connect multiple digital channels." },
    { icon: `${I}/benefits/communication.svg`, title: "Transparent Communication", text: "We believe clients should understand what marketing activities are being performed, why they matter, and how their performance is evaluated." },
    { icon: `${I}/benefits/continuous-improvement.svg`, title: "Continuous Performance Improvement", text: "Digital marketing requires ongoing analysis and optimization. We review performance, identify opportunities, and refine strategies based on available insights." },
  ],
};

export const process = {
  eyebrow: "Our Process",
  title: "Our Digital Marketing Process",
  intro:
    "A structured marketing process helps ensure that every activity has a clear objective and contributes to the overall strategy.",
  steps: [
    { icon: `${I}/process/discover.svg`, title: "Discovery and Business Understanding", text: "We begin by understanding your business, products or services, target audience, industry, competitors, and current digital presence. This stage helps us identify your marketing priorities and potential opportunities." },
    { icon: `${I}/process/strategize.svg`, title: "Research and Strategy Development", text: "We conduct relevant market research, keyword research, audience analysis, and competitor evaluation. Based on our findings, we develop a strategy that outlines the recommended channels, priorities, and measurable objectives." },
    { icon: `${I}/process/execute.svg`, title: "Planning and Execution", text: "Once the strategy is agreed upon, we move into execution. Depending on your requirements, this may include website optimization, content creation, SEO implementation, paid advertising, social media campaigns, and marketing automation." },
    { icon: `${I}/process/measure.svg`, title: "Tracking and Measurement", text: "We establish appropriate measurement systems to evaluate website traffic, campaign engagement, leads, conversions, and other relevant metrics." },
    { icon: `${I}/process/optimize.svg`, title: "Analysis and Optimization", text: "We regularly review campaign performance, identify opportunities, and implement improvements to support better marketing outcomes." },
    { icon: `${I}/benefits/communication.svg`, title: "Reporting and Communication", text: "We provide performance updates and communicate progress, insights, and recommended next steps so you understand how your marketing activities are progressing." },
  ],
};

export const stages = {
  title: "Digital Marketing Solutions for Every Stage of Business Growth",
  intro: "Businesses have different marketing needs depending on their stage of development.",
  items: [
    { title: "For Startups", text: "Build your digital foundation with professional branding, website development, SEO, and targeted marketing campaigns." },
    { title: "For Small and Medium Businesses", text: "Improve your online visibility, reach new audiences, generate leads, and strengthen customer engagement through integrated digital marketing." },
    { title: "For Growing Businesses", text: "Scale your marketing activities through performance advertising, conversion optimization, content strategies, and marketing analytics." },
    { title: "For Established Companies", text: "Improve marketing efficiency, strengthen digital positioning, and connect multiple marketing channels through structured strategies." },
  ],
};

// Case studies: per the content brief, only verified client projects and real
// figures may be published. Until those exist, the page shows what each case
// study will cover instead of sample metrics.
export const caseStudies = {
  eyebrow: "Success Stories",
  title: "Digital Marketing in Action",
  intro:
    "The effectiveness of digital marketing is best understood through real-world examples. Our case studies show how business challenges are addressed through research, strategy, execution, and optimization.",
  covers: [
    "Client industry and business context",
    "Initial marketing challenge",
    "Strategy and marketing channels used",
    "Campaign execution",
    "Measurable results",
    "Key learning and outcomes",
  ],
  categories: [
    "Organic search growth",
    "Google Ads lead generation",
    "Social media engagement",
    "E-commerce performance",
    "Website conversion optimization",
  ],
  cta: "Explore Our Work",
};

export const engagement = {
  title: "Flexible Digital Marketing Services for Your Business",
  intro:
    "Every business has different requirements, budgets, and marketing priorities. We work with businesses to identify suitable service combinations based on their objectives.",
  items: [
    { title: "Individual Digital Marketing Services", text: "Choose a specific service such as SEO, Google Ads, social media marketing, or website development based on your immediate requirements." },
    { title: "Integrated Marketing Solutions", text: "Combine multiple digital marketing channels under one coordinated strategy to create a more consistent online presence." },
    { title: "Project-Based Marketing Support", text: "Get support for specific requirements such as website launches, landing page development, advertising campaigns, or branding projects." },
    { title: "Ongoing Marketing Support", text: "Work with a marketing partner for continuous campaign management, optimization, reporting, and strategic support." },
  ],
  cta: "Discuss Your Project",
};

// Answers are plain strings (paragraphs separated by \n\n, list items by "- ")
// so the same text can feed the FAQPage structured data.
export const faqs: { q: string; a: string }[] = [
  {
    q: "What are digital marketing services?",
    a: "Digital marketing services are professional solutions that help businesses promote their products, services, and brands through online channels.\n\nThese services include search engine optimization, paid advertising, social media marketing, content marketing, website development, email marketing, and other digital strategies.",
  },
  {
    q: "Why does my business need digital marketing services?",
    a: "Digital marketing helps businesses reach potential customers online, improve brand visibility, generate enquiries, and support sales growth.\n\nIt also allows businesses to measure marketing performance and understand how customers interact with their digital presence.",
  },
  {
    q: "Which digital marketing services does Khayra offer?",
    a: "Khayra offers a range of digital marketing services, including:\n\n- Search Engine Optimization\n- Search Engine Marketing\n- Google Ads management\n- Social Media Marketing\n- Performance Marketing\n- Website Design and Development\n- Content Marketing\n- Branding and Creative Design\n- Email and WhatsApp Marketing",
  },
  {
    q: "How much do digital marketing services cost in India?",
    a: "The cost of digital marketing services varies depending on the scope of work, selected channels, business objectives, campaign complexity, and competition.\n\nSEO, paid advertising, website development, and social media management have different resource requirements. Khayra can help you identify a suitable service combination based on your requirements and budget.",
  },
  {
    q: "How long does it take to see digital marketing results?",
    a: "The timeline depends on the marketing channels and objectives.\n\nPaid advertising can generate traffic and enquiries shortly after campaign launch, depending on targeting, budget, and campaign setup.\n\nSEO generally requires a longer period to build organic visibility and authority. Social media and content marketing also require consistency to develop meaningful engagement.",
  },
  {
    q: "Is SEO better than Google Ads?",
    a: "SEO and Google Ads serve different purposes.\n\nSEO focuses on improving organic visibility in search engines, while Google Ads provides paid advertising opportunities for reaching relevant audiences.\n\nThe right choice depends on your objectives, competition, budget, and timeline. Many businesses benefit from using both channels together.",
  },
  {
    q: "Can digital marketing generate leads for my business?",
    a: "Yes. Digital marketing can support lead generation through search engine optimization, Google Ads, Meta Ads, social media campaigns, landing pages, and content marketing.\n\nLead quality depends on targeting, messaging, offer relevance, conversion experience, and follow-up processes.",
  },
  {
    q: "Do you provide digital marketing services for small businesses?",
    a: "Digital marketing strategies can be developed for small businesses based on their objectives, target customers, and available budgets.\n\nServices such as local SEO, social media marketing, and targeted advertising can be considered depending on the business model.",
  },
  {
    q: "How do you measure digital marketing performance?",
    a: "Performance can be evaluated using metrics such as:\n\n- Organic website traffic\n- Keyword visibility\n- Advertising impressions and clicks\n- Cost per click\n- Leads and conversions\n- Cost per acquisition\n- Conversion rate\n- Return on advertising spend\n\nThe relevant metrics depend on the business objectives and marketing channels.",
  },
  {
    q: "How do I choose the right digital marketing agency?",
    a: "Look for an agency that understands your industry, explains its strategy, communicates transparently, uses appropriate measurement systems, and can demonstrate relevant experience through genuine work and case studies.",
  },
  {
    q: "Can I hire Khayra for only one digital marketing service?",
    a: "Yes. You can discuss an individual requirement such as SEO, paid advertising, website development, or social media marketing, as well as integrated marketing requirements.",
  },
  {
    q: "How can I get started with Khayra?",
    a: "You can contact Khayra through the website enquiry form to discuss your business, marketing objectives, and current challenges.\n\nOur team can understand your requirements and recommend suitable digital marketing solutions.",
  },
];

export const finalCta = {
  title: "Ready to Grow Your Business With the Right Digital Marketing Strategy?",
  paragraphs: [
    "Your business has growth opportunities waiting to be explored. Whether you want to improve your Google rankings, generate more qualified leads, build a stronger social media presence, or create a high-performing website, Khayra can help you take the next step.",
    "Let's understand your goals, identify the right opportunities, and build a digital marketing strategy that moves your business forward.",
  ],
  primary: "Get a Free Consultation",
  secondary: "Talk to Our Team",
};
