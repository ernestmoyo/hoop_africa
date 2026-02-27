export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  location: string;
  focusArea: string;
  date: string;
  quote?: string;
  quoteName?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  focusArea: string;
  country: string;
  status: "active" | "planned" | "completed";
  metrics?: Record<string, number>;
}

export interface DonationTier {
  amount: number;
  description: string;
  currency?: string;
}

export interface ContactInfo {
  country: string;
  city: string;
  phone: string;
  email?: string;
  address?: string;
}
