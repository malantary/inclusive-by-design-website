// All homepage copy in one typed place. Every line comes from Laura's own documents
// (C-suite Exec Coaching deck and Services 2026). Later this file is replaced by the CMS.

export type NavLink = { href: `#${string}`; label: string };
export type Service = {
  colour: string;
  who: string;
  title: string;
  text: string;
  points: string[];
  link: { href: `#${string}`; label: string };
};
export type CoachingItem = { title: string; text: string };
export type Step = { kicker: string; title: string; text: string };
export type Stat = { value: string; count?: number; suffix?: string; label: string };
export type Testimonial = { quote: string; role: string; sector: string };
export type Faq = { q: string; a: string };

export const brandColours = ["#D61F69", "#5B55C9", "#D9CCEB", "#F2B4B4", "#14A08F", "#2A86D6", "#8A45BC"] as const;

export const company = {
  name: "Inclusive by Design Consulting Ltd",
  shortName: "Inclusive by Design",
  email: "hello@inclusivebydesignconsulting.com",
  registration: "Registered in England and Wales, company no. [NUMBER]. Registered office: [ADDRESS]",
};

export const nav: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#coaching", label: "Executive coaching" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About Laura" },
];

export const hero = {
  label: "Consulting, redesigned",
  titleStart: "Inclusivity doesn't happen by accident. It happens ",
  titleEm: "by design.",
  lede: "Executive coaching for leaders, and inclusion and technology consulting for organisations that want high-performing, inclusive teams without giving up commercial performance.",
};

export const sectors = [
  "Professional services",
  "Central government",
  "Defence",
  "Financial services",
  "Private equity backed firms",
  "Scaling start-ups",
];

export const intro = {
  label: "Who we are",
  title: "Inclusion in the way we design workplace culture, and in the way we design technology.",
  paragraphs: [
    "The world of work is changing fast, through new technology, new legislation and what clients and employees now expect. We support companies by providing strategic tech services, aligning with business goals and promoting positive culture change.",
    "We work with professional services, private equity backed firms and organisations across the public and private sectors.",
  ],
  quote: "We talk the talk and we walk the walk.",
  vennCaption: "Our expertise is centred on balancing technical understanding with business processes and people inclusion.",
};

export const services: Service[] = [
  {
    colour: "#D61F69",
    who: "For CEOs and directors",
    title: "Executive coaching",
    text: "A blend of coaching and mentoring for leaders of scaling, fast-paced businesses.",
    points: ["Six 60-minute sessions over six months", "Virtual or in central London", "Fully confidential"],
    link: { href: "#coaching", label: "How coaching works" },
  },
  {
    colour: "#2E2A7A",
    who: "For organisations",
    title: "Inclusion consulting",
    text: "From a first benchmark of your culture to programmes that change how leaders lead.",
    points: ["Culture benchmarking and strategy", "Inclusive leadership programmes", "Inclusion Labs and inclusive AI design"],
    link: { href: "#contact", label: "Talk about your organisation" },
  },
  {
    colour: "#0F8A7E",
    who: "For transformation and bids",
    title: "Tech consulting",
    text: "Specialist skills for programmes and bids, with social value your clients can measure.",
    points: ["Business architecture, UX and analysis", "Bid support and target operating models", "SC cleared or SC eligible team"],
    link: { href: "#contact", label: "Discuss a programme" },
  },
];

export const coaching = {
  label: "Executive coaching",
  title: "Coaching to open up your thinking. Mentoring to add context.",
  text: "Two strands worked on together over six months: you as a leader, and the business you lead.",
  personal: [
    { title: "Move from tactical to strategic", text: "From doing to leading as the business grows." },
    { title: "Make decisions confidently", text: "The big calls, made with clarity under pressure." },
    { title: "Own the room", text: "Presence with your board, investors and senior team." },
    { title: "Build your leadership brand", text: "Be clear on what you stand for." },
  ] satisfies CoachingItem[],
  business: [
    { title: "Team leadership", text: "Delegate by outcome and bring your team with you." },
    { title: "Strategy and direction", text: "Vision, goals and values, reported upward with confidence." },
    { title: "Operations", text: "Governance and efficiencies that let the business scale." },
    { title: "Culture and change", text: "Shape the culture you want and bring your people with you." },
  ] satisfies CoachingItem[],
  facts: [
    { value: "6 sessions", label: "60 minutes each" },
    { value: "6 months", label: "one session every three to four weeks" },
    { value: "1 to 1", label: "virtual or central London, confidential" },
  ],
  journeyTitle: "How the six months work",
  journey: [
    { kicker: "Step 1", title: "Get in touch", text: "Start the conversation and tell us where you are as a leader." },
    { kicker: "Step 2", title: "Bespoke to you", text: "Your package is designed around you, because every leader and every business has unique needs." },
    { kicker: "Over six months", title: "Six 60-minute sessions", text: "A flexible cadence, every 3 to 4 weeks, virtual or in central London." },
    { kicker: "Throughout", title: "A trusted coaching partner", text: "One to one and confidential, with challenge, perspective and practical advice in the same conversation." },
  ] satisfies Step[],
};

export const results = {
  label: "Results",
  title: "What leaders say after working with Laura",
  stats: [
    { value: "20+", count: 20, suffix: "+", label: "years in technology and consulting" },
    { value: "50+", count: 50, suffix: "+", label: "senior leaders coached and mentored" },
    { value: "FTSE 250", label: "to SME start-up experience" },
    { value: "TechWomen100", label: "award-winning founder" },
  ] satisfies Stat[],
  testimonials: [
    {
      quote: "I'm a self-confessed hero. Laura helped me see where to delegate, so my time goes where a CEO's should: growing the business and securing investment.",
      role: "CEO",
      sector: "management consultancy",
    },
    {
      quote: "I went from talking a lot and over-explaining in leadership meetings and losing my audience, to being clear, confident, and getting buy-in from every leader in the room.",
      role: "Director, Head of Operations",
      sector: "financial services",
    },
    {
      quote: "The most useful development experience of my career. I went from second guessing myself to leading global teams with confidence and clarity.",
      role: "Global Director",
      sector: "management consultancy",
    },
    {
      quote: "I came in at the end of my tether. I left with a clear strategy and the confidence to advocate for myself. I started the program rating myself 7/10 in my leadership confidence and finished my coaching with Laura feeling a solid 9/10.",
      role: "Department Head",
      sector: "financial services",
    },
  ] satisfies Testimonial[],
};

export const about = {
  label: "About Laura",
  title: "Laura Barlow, founder",
  quote: "We pride ourselves on delivering technology services that benefit businesses commercially as much as they benefit business culture.",
  text: "Twenty years across technology and consulting, from FTSE 250 boardrooms to start-ups. TechWomen100 award winner. Laura founded Inclusive by Design to show that high-performing, inclusive teams and tech do not cost commercial performance.",
  photoAlt: "Laura Barlow smiling, wearing a black cardigan over a blue patterned top",
};

export const faqs: Faq[] = [
  {
    q: "What happens on the discovery call?",
    a: "A 30-minute conversation by video or in central London. We talk about where you are, what you want to change, and whether coaching or consulting is the right fit.",
  },
  { q: "Is coaching online or in person?", a: "Both. Sessions are virtual or in a central London location, whichever suits you." },
  { q: "How long does a coaching programme last?", a: "Six 60-minute sessions over six months, on a flexible cadence of one session every 3 to 4 weeks." },
  { q: "Is it confidential?", a: "Yes. Coaching is one to one and confidential, with a trusted coaching partner." },
  {
    q: "Do you work with organisations as well as individuals?",
    a: "Yes. Alongside executive coaching we offer inclusive culture benchmarking and strategy, inclusive leadership programmes, bespoke Inclusion Labs, inclusive AI design, and tech consulting for transformation and bids.",
  },
  {
    q: "Which sectors do you work with?",
    a: "Professional services, private equity backed firms, central government and defence, and organisations across the public and private sectors.",
  },
];

export const call = {
  title: "Start with a 30-minute discovery call",
  text: "By video or in central London.",
  button: "Choose a time",
};
