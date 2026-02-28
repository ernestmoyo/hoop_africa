import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Target,
  Users,
  Shield,
  MapPin,
  ArrowRight,
  Heart,
  Globe,
  Lightbulb,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME, FOCUS_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hoop Africa Foundation — an African-founded, African-led non-profit unlocking Africa's human capital through strategic management, research, innovation, and sustainable development.",
};

const aboutSubPages = [
  {
    title: "Our Story",
    description:
      "From a vision born in Windhoek to a multi-country movement. Discover the founding narrative behind Hoop Africa Foundation.",
    href: "/about/our-story",
    icon: BookOpen,
    color: "bg-primary-100 text-primary-700",
  },
  {
    title: "Mission & Vision",
    description:
      "Our mission to unlock Africa's human capital and our vision for a prosperous continent where every individual thrives.",
    href: "/about/mission-vision",
    icon: Target,
    color: "bg-secondary-100 text-secondary-700",
  },
  {
    title: "Leadership Team",
    description:
      "Meet the dedicated African leaders driving strategy, partnerships, and impact across the continent.",
    href: "/about/leadership",
    icon: Users,
    color: "bg-accent-100 text-accent-700",
  },
  {
    title: "Governance",
    description:
      "Our commitment to transparency, accountability, and ethical governance underpins everything we do.",
    href: "/about/governance",
    icon: Shield,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Where We Work",
    description:
      "Operating across Namibia, Tanzania, and the DR Congo with programs tailored to each community's needs.",
    href: "/about/where-we-work",
    icon: MapPin,
    color: "bg-red-100 text-red-700",
  },
];

const highlights = [
  {
    icon: Globe,
    label: "African-Founded & African-Led",
    description: "Built by Africans, for Africa's future",
  },
  {
    icon: Heart,
    label: "9 Focus Areas",
    description: "Holistic approach to continental development",
  },
  {
    icon: Lightbulb,
    label: "3 Countries",
    description: "Namibia, Tanzania, and DR Congo",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <p className="text-primary-200 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">About Us</span>
            </p>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              African-Founded, African-Led
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About {SITE_NAME}
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We are an African-founded, African-led non-profit organization
              dedicated to unlocking the continent&apos;s human capital. Through
              strategic management, research, innovation, and sustainable
              development, we are building a brighter future for Africa.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Highlights */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    {item.label}
                  </h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission Summary */}
      <section className="py-20 bg-neutral-50">
        <Container size="lg">
          <SectionHeading
            title="Who We Are"
            subtitle="A pan-African organization working across borders and sectors to create lasting, measurable impact."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Hoop Africa Foundation was founded on August 8, 2025, in
                Windhoek, Namibia, with a bold ambition: to address Africa&apos;s
                most neglected challenges through a multi-sector approach. We
                are officially registered under Section 21 of the Companies Act
                of the United Republic of Namibia (Reg. No: 21/2022/1459).
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our work spans nine interconnected focus areas, from public
                health and education to emerging technologies and climate action.
                We believe that Africa&apos;s greatest resource is its people, and
                that by investing in human capital, we can unlock a future of
                prosperity, innovation, and self-determination for the entire
                continent.
              </p>
              <Link
                href="/about/our-story"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Read our full story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Our Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {FOCUS_AREAS.map((area) => (
                  <Badge key={area.id} variant="outline" className="text-xs">
                    {area.shortTitle}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                >
                  Explore our work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sub-Pages Navigation */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Learn More About Us"
            subtitle="Explore the different facets of our organization and what drives our work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutSubPages.map((page) => (
              <Link key={page.href} href={page.href} className="group">
                <Card className="h-full">
                  <CardContent className="flex flex-col h-full">
                    <div
                      className={`w-12 h-12 rounded-lg ${page.color} flex items-center justify-center mb-4`}
                    >
                      <page.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                      {page.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Join Our Mission"
        subtitle="Whether through partnership, donation, or volunteering, there are many ways to support Africa's transformation."
      />
    </>
  );
}
