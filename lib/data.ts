/**
 * All site content lives here, separated from the components.
 * Swap copy, links, and credentials in this single file.
 */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  location: "based in Abuja, writing for the world",
  headline: "Hey! I'm Aisha",
  highlightWord: "Aisha",
  subheading:
    "I write words that get brands paid — high-converting emails, landing pages, and ad copy built on psychology, clarity, and a little bit of cheek. I help coaches, founders, and service businesses turn casual scrollers into loyal, paying clients.",
  scrollCue: "scroll to discover more",
  portrait: {
    src: "/aisha.png",
    alt: "Aisha Awaisu, copywriter, smiling in a rust-coloured hijab",
    width: 790,
    height: 1080,
  },
};

export const marqueeItems = [
  "Email Marketing",
  "Landing Pages",
  "Meta Ad Copy",
  "LinkedIn Ghostwriting",
  "Social Captions",
  "Conversion Psychology",
];

export type CaseStudy = {
  slug: string;
  title: string;
  tag: string;
  /** Card hook + the brief on the detail page. */
  hook: string;
  /** Short typographic pull-line shown large (no client imagery). */
  pull: string;
  /** How the work was approached — strategy, not metrics. */
  approach: string;
  /** What was delivered. */
  deliverables: string[];
  /** The outcome. */
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-1k-ceiling",
    title: "The $1K Ceiling — Business Coach Email Sequence",
    tag: "Email Marketing",
    hook: "A nurture sequence that turned a stalled $1K/month coach's audience into booked strategy calls.",
    pull: "$1K months → booked out",
    approach:
      "We mapped the coach's quietest, most sceptical subscribers and built a sequence that named their real objection — that one more program wouldn't change anything — before pitching the call. Each email earned the next open, so the invitation landed warm instead of cold.",
    deliverables: [
      "Audience & objection research",
      "Multi-email nurture sequence",
      "Subject line & preview-text variants",
      "Strategy-call invitation framework",
    ],
    result:
      "The sequence turned a cold, quiet list into back-to-back strategy calls — more bookings in two weeks than the previous three months of posting combined.",
  },
  {
    slug: "faceless-to-abundance",
    title: "Faceless to Abundance — Personal Brand Campaign",
    tag: "Email + Brand Strategy",
    hook: "Email copy that gave Muslim women entrepreneurs permission to build six-figure brands without showing their faces.",
    pull: "Six figures. No face.",
    approach:
      "We reframed visibility as a choice, not a requirement — building a voice strong enough to carry the brand without a face. The messaging gave permission first, then made the offer feel like the obvious next step.",
    deliverables: [
      "Brand voice & messaging guide",
      "Launch email campaign",
      "Permission-led positioning angle",
      "Audience research across the niche",
    ],
    result:
      "A campaign that reframed visibility on the audience's own terms — and helped scale one coach's message to thousands of women across Africa.",
  },
  {
    slug: "lokogoma-land-drop",
    title: "Lokogoma Land Drop — Real Estate Lead Gen",
    tag: "Email Marketing",
    hook: "A story-driven email that repositioned a quiet Abuja neighbourhood as the smart investor's next move.",
    pull: "The quiet plot smart money wanted",
    approach:
      "Instead of listing plot features, we told the story of the buyer who moves early — turning an overlooked neighbourhood into a decision the reader didn't want to miss. One email did the qualifying before the sales team ever picked up the phone.",
    deliverables: [
      "Story-led lead-generation email",
      "Investor-focused positioning",
      "Inspection-booking call to action",
      "Follow-up angle",
    ],
    result:
      "One story-led email reframed an overlooked neighbourhood as an obvious buy — and filled the inspection list with warm, qualified leads.",
  },
  {
    slug: "skyway-travel",
    title: "Skyway Travel — Visa & Umrah Ad Campaign",
    tag: "Meta Ad Copy",
    hook: "A set of conversion-focused ads that turned “just looking” travellers into confirmed bookings for Egypt visas and group Umrah packages.",
    pull: "Looking → booked & boarding",
    approach:
      "We wrote to the feeling under the search — the traveller who's been “just looking” for months. Each ad named the hesitation and replaced it with a clear, low-friction next step toward booking.",
    deliverables: [
      "Meta ad copy set (visa & Umrah)",
      "Multiple hook & angle variants",
      "Audience-specific messaging",
      "Primary text, headlines & CTAs",
    ],
    result:
      "Conversion-focused Meta ads for Egypt visas and group Umrah packages priced up to ₦2.3M+ per booking — sold out faster than projected.",
  },
  {
    slug: "money-talks",
    title: "Money Talks — Savvy Bee Fintech Launch",
    tag: "Email Marketing",
    hook: "A cohort-launch email that made financial literacy feel like a conversation with a friend, not a lecture.",
    pull: "Money talk, minus the lecture",
    approach:
      "We dropped the jargon and wrote financial literacy like a voice note from a friend who happens to know money. Warmth did the selling; the cohort invitation just made it easy to say yes.",
    deliverables: [
      "Cohort-launch email",
      "Conversational brand voice",
      "Objection-handling angles",
      "Enrolment call to action",
    ],
    result:
      "A launch email that read like advice from a friend instead of a seminar — the cohort filled up a full week early.",
  },
  {
    slug: "why-wireframes-matter",
    title: "Why Wireframes Matter — Web Designer LinkedIn Series",
    tag: "LinkedIn Ghostwriting",
    hook: "A 4-part thought-leadership series that positioned a web designer as the go-to expert on conversion-first website structure.",
    pull: "4 posts. One go-to expert.",
    approach:
      "We turned the designer's everyday expertise into a four-part argument for conversion-first structure — each post opening a loop the next one closed, so readers kept coming back and the comments did the marketing.",
    deliverables: [
      "4-part LinkedIn series",
      "Hook-led post structure",
      "Authority positioning",
      "Engagement-driving CTAs",
    ],
    result:
      "A ghostwritten series that positioned the designer as the authority on conversion-first structure — with the comments and DMs to prove it.",
  },
];

export type Service = {
  slug: string;
  title: string;
  /** One-line summary used on the home list. */
  description: string;
  /** Short value line for the detail-page hero. */
  tagline: string;
  /** What a client gets. */
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "email-marketing",
    title: "Email Marketing",
    description:
      "Strategic sequences and campaigns that nurture cold leads, re-engage your list, and consistently drive bookings and sales.",
    tagline:
      "Sequences and campaigns that turn a quiet list into booked calls and sales.",
    includes: [
      "Welcome & nurture sequences",
      "Launch & promotional campaigns",
      "Re-engagement / win-back flows",
      "Subject line & preview-text variants",
      "Audience & objection research",
    ],
  },
  {
    slug: "landing-and-sales-page-copy",
    title: "Landing & Sales Page Copy",
    description:
      "Conversion-focused page copy structured around your customer's journey — built to turn visitors into leads and leads into clients.",
    tagline:
      "Page copy structured around your customer's journey — built to convert.",
    includes: [
      "Full landing / sales page copy",
      "Headline & hero messaging",
      "Offer & objection sections",
      "Social-proof framing",
      "Clear, single-minded CTAs",
    ],
  },
  {
    slug: "meta-ad-copy",
    title: "Meta Ad Copy",
    description:
      "Scroll-stopping ad copy that speaks directly to your audience's pain points and gets the click, without sounding desperate.",
    tagline: "Scroll-stopping ads that get the click without sounding desperate.",
    includes: [
      "Primary text, headlines & CTAs",
      "Multiple hooks & angles",
      "Audience-specific messaging",
      "Pain-point-led openers",
      "Variants built for testing",
    ],
  },
  {
    slug: "linkedin-ghostwriting",
    title: "LinkedIn Ghostwriting",
    description:
      "Authority-building posts written in your voice — turning your expertise into content that builds trust and inbound interest.",
    tagline:
      "Authority-building posts in your voice that turn expertise into inbound interest.",
    includes: [
      "Posts written in your voice",
      "Hook-led post structures",
      "Thought-leadership angles",
      "Content pillars & themes",
      "Engagement-driving CTAs",
    ],
  },
  {
    slug: "social-media-captions",
    title: "Social Media Captions",
    description:
      "On-brand captions that keep your audience engaged between launches and quietly warm them up for your next offer.",
    tagline: "On-brand captions that keep your audience warm between launches.",
    includes: [
      "On-brand captions",
      "Hook + body + CTA structure",
      "Batch-ready content",
      "Voice consistency across posts",
      "Launch-warming sequencing",
    ],
  },
];

/** Shared four-step process shown on every service detail page. */
export const serviceProcess = [
  {
    title: "Discovery",
    description:
      "A short call or form to understand your offer, audience, and goals.",
  },
  {
    title: "Research",
    description:
      "I dig into your market, your list, and the objections standing between the reader and the sale.",
  },
  {
    title: "Drafting",
    description:
      "You get strategic, on-voice copy structured to move readers to action.",
  },
  {
    title: "Refine & launch",
    description:
      "One round of revisions together, then it's polished and ready to go live.",
  },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aisha completely changed how I talk to my audience. The email sequence she wrote for my coaching program brought in more strategy call bookings in two weeks than my last three months of posting combined.",
    name: "Claire M.",
    role: "Business Coach",
  },
  {
    quote:
      "Working with Aisha felt like handing my brand to someone who actually understood it. The LinkedIn series she ghostwrote for me got more comments and DMs than anything I'd posted in a year.",
    name: "Daniel Yusuf",
    role: "Founder, Webframe Studio",
  },
  {
    quote:
      "Her ad copy for our Umrah package sold out faster than we expected. She knows exactly how to make people feel something before they even click “Learn More.”",
    name: "Hauwa Bello",
    role: "Skyway Travel & Tours",
  },
  {
    quote:
      "I came to Aisha with a vague idea and a messy list of subscribers. She turned it into a launch email that felt personal, warm, and genuinely persuasive — our cohort filled up a week early.",
    name: "Tope Adeyemi",
    role: "Savvy Bee",
  },
];

export const aboutBio: string[] = [
  "I'm Aisha — a marketing copywriter based in Abuja, helping coaches, online service providers, and growing businesses turn their audience into paying clients through high-converting organic content and strategic ad systems.",
  "I specialise in email sequences, ad copy, landing pages, and LinkedIn ghostwriting that turn attention into action. My focus isn't just “writing nice things” — it's understanding what your audience is actually thinking, and meeting them there with the right message at the right moment.",
  "Whether it's a single high-stakes sales email or a full nurture sequence, my goal is always the same: help your business grow its visibility and increase inquiries using clear, strategic, conversion-driven messaging.",
];

export type AboutColumn = { label: string; items: string[] };

export const aboutColumns: AboutColumn[] = [
  {
    label: "Studies",
    items: [
      "B.Sc. in Software Engineering",
      "Self-directed training in direct-response copywriting & conversion psychology",
      "Ongoing study in AI-assisted content systems & automation for creators",
    ],
  },
  {
    label: "Experience",
    items: [
      "Email & Funnel Copywriter — Coaches & Online Service Providers (freelance)",
      "Ad Copywriter — Travel & Lifestyle Brands",
      "LinkedIn Ghostwriter — Founders & Service-Based Businesses",
      "Email Strategist — Fintech & Real Estate Campaigns",
    ],
  },
];

export type AboutImage = { src: string; alt: string; width: number; height: number };

/** Pinned photo gallery in the About section. */
export const aboutImages: AboutImage[] = [
  {
    src: "/about-2.jpg",
    alt: "Aisha Awaisu in a cream and maroon outfit, studio portrait",
    width: 924,
    height: 1280,
  },
  {
    src: "/aisha.png",
    alt: "Aisha Awaisu smiling in a rust-coloured hijab",
    width: 790,
    height: 1080,
  },
  {
    src: "/about-1.jpg",
    alt: "Aisha Awaisu in a red outfit seated in an armchair",
    width: 960,
    height: 1280,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What areas do you operate in?",
    answer:
      "I work remotely with clients worldwide — coaches, founders, and businesses across Nigeria, the UK, Europe, and North America. My process is built to work seamlessly across time zones, with clear, async-friendly communication.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Email marketing (sequences & campaigns), landing/sales page copy, Meta ad copy, LinkedIn ghostwriting, and social media captions — tailored to your brand voice and business goals.",
  },
  {
    question: "How does the process work from start to finish?",
    answer:
      "We start with a short discovery call or form to understand your offer, audience, and goals. From there, I research your market, draft your copy, and send it over for feedback. We refine together until it's ready to launch.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "A single email or landing page typically takes 3–5 business days. Full sequences or ongoing content retainers are scoped individually based on volume and turnaround needs.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes — every project includes a round of revisions to make sure the copy feels right for your brand and converts the way it should.",
  },
];

const EMAIL_ADDRESS = "aishaawaisu01@gmail.com";
const EMAIL_SUBJECT = "Project inquiry — Copywriting";
const EMAIL_BODY = `Hi Aisha,

I'd love to work with you on a project. A few quick details:

• Service needed:
• Timeline:
• Budget range:
• A little about my business:

Thanks!`;

/** Opens the visitor's default mail client (Gmail-compatible) pre-filled. */
const emailHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export const contact = {
  calendly: "https://calendly.com/aishaawaisu01/30min",
  whatsapp: "https://wa.me/2349078211198",
  email: emailHref,
  emailAddress: EMAIL_ADDRESS,
  instagram: "https://instagram.com/radieesha.scales",
  instagramHandle: "@Radieesha.scales",
};

export const footerColumns = [
  {
    label: "Socials",
    links: [
      { label: "Instagram", href: contact.instagram, external: true },
      { label: "WhatsApp", href: contact.whatsapp, external: true },
      { label: "Email", href: contact.email, external: true },
    ],
  },
  {
    label: "Site",
    links: [
      { label: "Home", href: "#home", external: false },
      { label: "Work", href: "#work", external: false },
      { label: "Services", href: "#services", external: false },
      { label: "Pricing", href: "#pricing", external: false },
      { label: "Testimonials", href: "#testimonials", external: false },
      { label: "About Me", href: "#about", external: false },
      { label: "FAQs", href: "#faqs", external: false },
      { label: "Contact", href: "#contact", external: false },
    ],
  },
];

/* -------------------------------- pricing -------------------------------- */

export type Currency = "usd" | "ngn";

export type PricingPlan = {
  name: string;
  blurb: string;
  /** Display price per currency, e.g. "$200" / "₦150,000". */
  usd: string;
  ngn: string;
  /** Optional unit suffix, e.g. "/post", "/month". */
  unit?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Email Marketing",
    blurb: "Sequences & campaigns that nurture and convert.",
    usd: "$200",
    ngn: "₦150,000",
  },
  {
    name: "Landing & Sales Pages",
    blurb: "Conversion-focused page copy, start to finish.",
    usd: "$150",
    ngn: "₦100,000",
  },
  {
    name: "Content Strategy",
    blurb: "A clear plan for what to say and when to say it.",
    usd: "$70",
    ngn: "₦50,000",
  },
  {
    name: "LinkedIn Ghostwriting",
    blurb: "Authority-building posts written in your voice.",
    usd: "$20",
    ngn: "₦12,000",
    unit: "/post",
  },
  {
    name: "Social Media Management",
    blurb: "On-brand content that keeps your audience warm.",
    usd: "$150",
    ngn: "₦100,000",
    unit: "/month",
  },
];

export const pricingNote =
  "Every project starts with a quick discovery call so your quote matches your scope. Prices are starting points — final quotes depend on volume and turnaround.";

/* ----------------------------- lookup helpers ----------------------------- */

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Returns the item after `slug` (wrapping) for prev/next style navigation. */
export function nextCaseStudy(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}

export function nextService(slug: string) {
  const i = services.findIndex((s) => s.slug === slug);
  return services[(i + 1) % services.length];
}
