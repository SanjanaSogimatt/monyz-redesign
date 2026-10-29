/**
 * All page copy lives here so it can be edited without touching layout.
 * Copy rules (landing-page-design skill): sentence case, no hyphens in text,
 * no filler words, specific over vague.
 *
 * Facts taken from monyz.co: Favikon Top 10, 100K+ followers, $100M+ revenue
 * generated, five years in media and growth, the three offers, client names,
 * social links. Everything else (process, FAQ answers, risk reversal) is
 * draft copy for the Monyz team to confirm.
 */

/**
 * Offer illustrations: the three /public/offers images are interim crops of the
 * skyline engraving. Replace them with dedicated engravings (same file names,
 * portrait 4:5) and nothing else needs to change.
 */

/** Drop a file in /public (e.g. /public/arthur.jpg) and set its path here. */
export const FOUNDER_PHOTO: string | null = null;

/** Where the booking form should send people once a backend or Calendly exists. */
export const BOOKING_EMAIL = "hello@monyz.co";

export const nav = [
  { id: "why", label: "Why Monyz" },
  { id: "offers", label: "What we do" },
  { id: "process", label: "How it works" },
  { id: "arthur", label: "Arthur" },
  { id: "faq", label: "FAQ" },
];

export const hero = {
  eyebrow: "Growth accelerator for payments companies",
  headline: ["Turn fintech attention", "into signed deals"],
  sub: "Monyz puts your payments brand in front of 100K+ fintech operators through Arthur Bedel's channels, then gets you in the room with the executives who sign.",
  cta: "Book a 20 minute intro call",
  ctaNote: "Free call. No deck needed.",
};

export const clients = [
  { name: "Getnet", style: "font-bold tracking-tight lowercase" },
  { name: "Breeze", style: "font-semibold tracking-wide" },
  { name: "DEUNA", style: "font-bold tracking-widest" },
  { name: "Dfns", style: "font-mono font-bold" },
  { name: "VGS", style: "font-bold tracking-wider" },
  { name: "Payplug", style: "font-semibold tracking-tight" },
];

export const stats = [
  { value: "Top 10", label: "Favikon fintech creator ranking" },
  { value: "100K+", label: "Followers across five platforms" },
  { value: "$100M+", label: "Revenue generated for partners" },
  { value: "5 yrs", label: "Building media in payments" },
];

export const problem = {
  kicker: "The problem",
  title: "Great payments products lose to louder ones",
  body: "Fintech buyers ignore ads. They follow a handful of voices they trust, and they take meetings from people those voices vouch for. If your brand is missing from that feed, your sales team starts every call cold.",
  solutionKicker: "What Monyz changes",
  solution: "We put your story in the feed your buyers already read, then walk you into the meetings that follow. Attention and introductions from the same trusted source.",
};

export const tagline =
  "Money runs the world. We make sure the people who move it know your name before you ask for the meeting.";

export const offers = [
  {
    n: "01",
    tag: "Media distribution",
    title: "We make payments famous",
    body: "Your product explained in Arthur's voice to 100K+ fintech followers who already trust what he shares.",
    points: ["Dedicated posts and video breakdowns", "Launch and funding announcements", "Reach report after every campaign"],
    icon: "megaphone" as const,
    image: "/offers/media.jpg",
    imageAlt: "Engraved city riverfront with a clock tower and observation wheel",
    soon: false,
  },
  {
    n: "02",
    tag: "Growth",
    title: "We make the intro",
    body: "Brand positioning, media strategy and direct introductions to fintech executives, so attention turns into pipeline.",
    points: ["Positioning and messaging sprint", "Warm introductions to decision makers", "Pipeline tracked with your sales team"],
    icon: "handshake" as const,
    image: "/offers/growth.jpg",
    imageAlt: "Engraved skyline with cable bridges linking both banks",
    soon: false,
  },
  {
    n: "03",
    tag: "Capital",
    title: "We put our money where our mouth is",
    body: "Monyz will invest alongside the companies we advise. Backing you with more than reach.",
    points: ["Opening to current partners first", "Ask about it on your intro call"],
    icon: "coins" as const,
    image: "/offers/capital.jpg",
    imageAlt: "Engraved old town with a domed hall above the water",
    soon: true,
  },
];

export const steps = [
  {
    title: "Book a 20 minute call",
    body: "Tell us what you sell, who buys it and what is stalling growth. Bring questions, not slides.",
  },
  {
    title: "Get your growth plan",
    body: "We map the channels, the message and the first executives worth meeting, with clear pricing before you commit.",
  },
  {
    title: "Go live and track revenue",
    body: "Content ships, introductions happen and we report on the deals they move, not only the likes.",
  },
];

export const founder = {
  name: "Arthur Bedel",
  role: "Founder, Monyz",
  bio: [
    "Arthur started Monyz after five years building media and growth in payments.",
    "With 100K+ followers and a permanent spot in Favikon's fintech Top 10, he is one of the voices the industry checks before it moves money.",
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arthur-bedel/", icon: "linkedin" as const },
    { label: "X", href: "https://x.com/arthur_bedel", icon: "x" as const },
    { label: "Instagram", href: "https://www.instagram.com/_arthur_bdl/", icon: "instagram" as const },
    { label: "TikTok", href: "https://www.tiktok.com/@arthur.bedel", icon: "tiktok" as const },
    { label: "YouTube", href: "https://www.youtube.com/@arthurbedel", icon: "youtube" as const },
  ],
};

export const faqs = [
  {
    q: "Who is Monyz for?",
    a: "Fintech companies, especially in payments, that have a live product and want more qualified conversations with buyers, partners and investors.",
  },
  {
    q: "What happens on the intro call?",
    a: "Twenty minutes with the Monyz team. We learn what you sell and who buys it, then tell you plainly whether media, growth or both would move your numbers.",
  },
  {
    q: "How is this different from running ads?",
    a: "Ads rent attention. Monyz lends you trust: your story is told by a voice fintech decision makers already follow, and backed by introductions to the people who sign.",
  },
  {
    q: "Which channels do you publish on?",
    a: "LinkedIn, X, Instagram, TikTok and YouTube. We choose the mix based on where your buyers actually spend time.",
  },
  {
    q: "Do you work with early stage companies?",
    a: "Yes, as long as there is a live product and a clear buyer. Fit matters more than stage.",
  },
  {
    q: "How do you measure results?",
    a: "Reach and engagement for every piece, plus the meetings, partnerships and revenue the work leads to, tracked together with your team.",
  },
  {
    q: "What does it cost?",
    a: "Packages depend on scope. You get clear pricing after the intro call, before any commitment.",
  },
  {
    q: "When does Monyz Capital open?",
    a: "Soon, starting with current partners. Mention it on your call and we will keep you posted.",
  },
];

export const booking = {
  kicker: "Let's talk money",
  title: "Book your intro call",
  body: "Share a few details and we will reply within two business days to pick a time that works.",
  reversal: [
    "The call is free and carries no commitment",
    "Pricing shared before you sign anything",
    "If we are not the right fit, we say so on the call",
  ],
  interests: ["Media distribution", "Growth and introductions", "Both", "Not sure yet"],
};
