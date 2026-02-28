import {
  Heart,
  GraduationCap,
  Sprout,
  CloudSun,
  Zap,
  HandCoins,
  Cpu,
  FlaskConical,
  Users,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export const SITE_NAME = "Hoop Africa Foundation";
export const SITE_URL = "https://www.hoopafrica.org";
export const SITE_TAGLINE = "Unlocking Africa's Human Capital";
export const SITE_DESCRIPTION =
  "Hoop Africa Foundation unlocks Africa's human capital by supporting neglected areas across the continent through strategic management, research, innovation, and sustainable development initiatives.";

export const REGISTRATION_INFO = {
  country: "Namibia",
  type: "Section 21",
  number: "21/2022/1459",
  act: "Companies Act of the United Republic of Namibia",
};

export const CONTACTS = {
  namibia: {
    country: "Namibia",
    phone: "+264 81 302 2416",
    city: "Windhoek",
  },
  tanzania: {
    country: "Tanzania",
    phone: "+255 755 731 262",
    city: "Dar es Salaam",
  },
  drc: {
    country: "DR Congo",
    phone: "+243 829 494 537",
    city: "Kinshasa",
  },
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/hoopafrica",
  twitter: "https://twitter.com/hoopafrica",
  linkedin: "https://linkedin.com/company/hoopafrica",
  instagram: "https://instagram.com/hoopafrica",
};

export interface FocusArea {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "public-health",
    title: "Public Health & Health Economics",
    shortTitle: "Public Health",
    description:
      "Accessible, equitable healthcare systems; health financing; economic analysis for efficiency and equity.",
    icon: Heart,
    href: "/our-work/public-health",
    color: "text-red-500",
  },
  {
    id: "education",
    title: "Education",
    shortTitle: "Education",
    description:
      "Quality education, skills development, innovation, critical thinking, lifelong learning.",
    icon: GraduationCap,
    href: "/our-work/education",
    color: "text-blue-500",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    shortTitle: "Agriculture",
    description:
      "Sustainable farming, food security, value-chain development, improved livelihoods.",
    icon: Sprout,
    href: "/our-work/agriculture",
    color: "text-green-500",
  },
  {
    id: "climate-action",
    title: "Climate Change",
    shortTitle: "Climate Action",
    description:
      "Climate resilience, advocacy, green technologies, environmental protection.",
    icon: CloudSun,
    href: "/our-work/climate-action",
    color: "text-teal-500",
  },
  {
    id: "energy-access",
    title: "Energy",
    shortTitle: "Energy Access",
    description:
      "Affordable, reliable, sustainable energy solutions for African communities.",
    icon: Zap,
    href: "/our-work/energy-access",
    color: "text-yellow-500",
  },
  {
    id: "poverty-reduction",
    title: "Poverty Reduction",
    shortTitle: "Poverty Reduction",
    description:
      "Income inequality, job creation, economic empowerment of vulnerable populations.",
    icon: HandCoins,
    href: "/our-work/poverty-reduction",
    color: "text-orange-500",
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    shortTitle: "Emerging Tech & AI",
    description:
      "AI, data science, automation applied to African challenges and opportunities.",
    icon: Cpu,
    href: "/our-work/emerging-tech",
    color: "text-purple-500",
  },
  {
    id: "research-development",
    title: "Research & Development",
    shortTitle: "Research & Development",
    description:
      "Evidence-based solutions, policy development, impact measurement.",
    icon: FlaskConical,
    href: "/our-work/research-development",
    color: "text-indigo-500",
  },
  {
    id: "empowerment",
    title: "Social & Economic Empowerment",
    shortTitle: "Empowerment Programs",
    description:
      "Youth empowerment, gender equity, inclusive community development.",
    icon: Users,
    href: "/our-work/empowerment",
    color: "text-pink-500",
  },
  {
    id: "strategic-services",
    title: "Strategic & Performance Management",
    shortTitle: "Strategic Services",
    description:
      "Strategic planning, strategy implementation, performance management systems, M&E, organisational development, and in-house training.",
    icon: Briefcase,
    href: "/our-work/strategic-services",
    color: "text-cyan-600",
  },
];

export const IMPACT_STATS = [
  { label: "Lives Impacted", value: 10000, suffix: "+" },
  { label: "Countries", value: 3, suffix: "" },
  { label: "Focus Areas", value: 10, suffix: "" },
  { label: "Community Partners", value: 25, suffix: "+" },
];

export const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
      { label: "Where We Work", href: "/about/where-we-work" },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: FOCUS_AREAS.map((area) => ({
      label: area.shortTitle,
      href: area.href,
    })),
  },
  {
    label: "Impact",
    href: "/impact",
    children: [
      { label: "Stories of Change", href: "/impact/stories" },
      { label: "Impact Dashboard", href: "/impact/dashboard" },
      { label: "Annual Reports", href: "/impact/annual-reports" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Donate", href: "/get-involved/donate" },
      { label: "Partner With Us", href: "/get-involved/partner" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Careers", href: "/get-involved/careers" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "News & Updates", href: "/resources/news" },
      { label: "Publications", href: "/resources/publications" },
      { label: "Media Kit", href: "/resources/media-kit" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
