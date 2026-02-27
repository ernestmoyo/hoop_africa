import type { Metadata } from "next";
import Link from "next/link";
import {
  Newspaper,
  BookOpen,
  Camera,
  ArrowRight,
  FileText,
  Download,
  Mic,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resources",
  description: `Explore news, publications, media assets, and more from ${SITE_NAME}. Stay informed about our work across Africa.`,
};

const resourceSections = [
  {
    title: "News & Updates",
    description:
      "Stay up to date with the latest developments, announcements, and stories from our programs across the continent.",
    href: "/resources/news",
    icon: Newspaper,
    badge: "Latest",
    badgeVariant: "accent" as const,
    color: "bg-primary-50 text-primary-600",
    iconBg: "bg-primary-100",
    stats: "12 Articles",
  },
  {
    title: "Publications",
    description:
      "Access our research papers, annual reports, policy briefs, and working papers that drive evidence-based development.",
    href: "/resources/publications",
    icon: BookOpen,
    badge: "Research",
    badgeVariant: "primary" as const,
    color: "bg-secondary-50 text-secondary-600",
    iconBg: "bg-secondary-100",
    stats: "8 Documents",
  },
  {
    title: "Media Kit",
    description:
      "Download brand assets, logos, press releases, and media guidelines for covering Hoop Africa Foundation.",
    href: "/resources/media-kit",
    icon: Camera,
    badge: "Press",
    badgeVariant: "secondary" as const,
    color: "bg-accent-50 text-accent-600",
    iconBg: "bg-accent-100",
    stats: "Brand Assets",
  },
];

const quickLinks = [
  {
    title: "Annual Report 2025",
    type: "PDF",
    icon: FileText,
    href: "/resources/publications",
  },
  {
    title: "Brand Guidelines",
    type: "PDF",
    icon: Download,
    href: "/resources/media-kit",
  },
  {
    title: "Press Inquiries",
    type: "Contact",
    icon: Mic,
    href: "/contact",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/10 text-primary-100 border border-white/20 mb-6">
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Resources & <span className="text-secondary-400">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Access our latest news, research publications, and media assets.
              We believe in transparency and sharing knowledge to drive
              collective impact across Africa.
            </p>
          </div>
        </Container>
      </section>

      {/* Resource Sections Grid */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Explore Our Resources"
            subtitle="Find the information you need across our resource library"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourceSections.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.href} href={section.href} className="group">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`w-14 h-14 rounded-xl ${section.iconBg} flex items-center justify-center`}
                        >
                          <Icon className={`w-7 h-7 ${section.color.split(" ")[1]}`} />
                        </div>
                        <Badge variant={section.badgeVariant}>
                          {section.badge}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-neutral-600 mb-6 leading-relaxed">
                        {section.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-500">
                          {section.stats}
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                          Browse
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Quick Access"
            subtitle="Frequently requested resources and documents"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.title} href={link.href}>
                  <Card className="h-full">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 text-sm">
                          {link.title}
                        </h4>
                        <span className="text-xs text-neutral-500">
                          {link.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates,
              research findings, and impact stories directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                aria-label="Email address for newsletter"
              />
              <Link href="/resources/news">
                <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
