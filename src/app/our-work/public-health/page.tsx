import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  Activity,
  Shield,
  Stethoscope,
  TrendingUp,
  Users,
  Building2,
  Quote,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Public Health & Health Economics",
  description:
    "Hoop Africa Foundation works to build accessible, equitable healthcare systems across Africa through health financing, economic analysis, and community-centered approaches.",
};

const programs = [
  {
    title: "Community Health Financing Initiative",
    description:
      "Developing innovative micro-insurance and community-based health financing models that make quality healthcare accessible to underserved populations.",
    status: "Active",
    location: "Tanzania, DR Congo",
  },
  {
    title: "Health Systems Strengthening Program",
    description:
      "Building capacity within local health systems through training healthcare workers, improving supply chains, and strengthening governance structures.",
    status: "Active",
    location: "Namibia, Tanzania",
  },
  {
    title: "Maternal & Child Health Project",
    description:
      "Reducing maternal and infant mortality through improved prenatal care access, skilled birth attendance, and postnatal support services.",
    status: "Active",
    location: "Tanzania",
  },
  {
    title: "Health Economics Research Hub",
    description:
      "Conducting economic analyses of healthcare interventions to guide policy decisions and optimize resource allocation for maximum impact.",
    status: "Ongoing",
    location: "Pan-African",
  },
];

const metrics = [
  { value: "15,000+", label: "Patients Served Annually" },
  { value: "45", label: "Community Health Workers Trained" },
  { value: "3", label: "Countries Reached" },
  { value: "85%", label: "Patient Satisfaction Rate" },
];

export default function PublicHealthPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-secondary-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-6"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              All Focus Areas
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Public Health &{" "}
              <span className="text-secondary-500">Health Economics</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Building accessible, equitable healthcare systems across Africa
              through innovative financing, evidence-based policy, and
              community-centered approaches.
            </p>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why This Matters"
                subtitle="Healthcare in Africa faces systemic challenges that demand innovative solutions."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Sub-Saharan Africa carries 24% of the global disease burden
                  yet has only 3% of the world&apos;s health workforce and less
                  than 1% of global health expenditure. Millions lack access to
                  basic healthcare services, and out-of-pocket expenses push
                  families deeper into poverty.
                </p>
                <p>
                  Health systems remain fragmented, underfunded, and
                  ill-equipped to handle both chronic and emerging health
                  threats. Without significant investment in health
                  infrastructure, financing, and human resources, Africa&apos;s
                  demographic dividend risks becoming a liability.
                </p>
                <p>
                  The intersection of public health and economics offers
                  powerful levers for change -- ensuring resources are allocated
                  efficiently and healthcare systems deliver maximum value for
                  every dollar invested.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Activity,
                  stat: "24%",
                  label: "of global disease burden in Sub-Saharan Africa",
                },
                {
                  icon: Users,
                  stat: "3%",
                  label: "of world's health workforce on the continent",
                },
                {
                  icon: Shield,
                  stat: "40%",
                  label: "of Africans lack access to basic healthcare",
                },
                {
                  icon: TrendingUp,
                  stat: "<1%",
                  label: "of global health expenditure allocated to Africa",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 bg-primary-50 rounded-xl border border-primary-100"
                >
                  <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                  <p className="text-2xl font-bold text-primary-900">
                    {item.stat}
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Our Approach"
            subtitle="We combine health economics expertise with grassroots engagement to create sustainable health systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Community-Centered Care",
                description:
                  "We design health interventions around the needs of communities, training local health workers and building trust-based systems that people actually use.",
              },
              {
                icon: TrendingUp,
                title: "Health Economics Analysis",
                description:
                  "Our economists analyze cost-effectiveness, financing models, and resource allocation to ensure every intervention delivers maximum health outcomes per dollar.",
              },
              {
                icon: Building2,
                title: "Systems Strengthening",
                description:
                  "Rather than creating parallel structures, we invest in strengthening existing health systems -- improving governance, supply chains, and data infrastructure.",
              },
            ].map((approach) => (
              <Card key={approach.title} hover={false}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                    <approach.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs & Initiatives */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Programs & Initiatives"
            subtitle="Our active programs are making healthcare more accessible and equitable across Africa."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.title}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="primary">{program.status}</Badge>
                    <span className="text-sm text-neutral-500">
                      {program.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto">
              Measurable progress toward accessible healthcare for all.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">
                  {metric.value}
                </p>
                <p className="text-primary-200 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Story / Quote */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-primary-100">
            <Quote className="w-12 h-12 text-primary-200 mb-6" />
            <blockquote className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8 font-medium">
              &ldquo;When healthcare is designed around communities rather than
              institutions, something remarkable happens -- people begin to
              trust the system, engage proactively, and health outcomes improve
              dramatically.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Health Team
                </p>
                <p className="text-sm text-neutral-500">
                  Community Health Financing Initiative
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Related Resources"
            subtitle="Explore our research, reports, and stories on public health in Africa."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Health Economics Policy Brief",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Annual Health Impact Report",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Community Health Stories",
                type: "Impact Story",
                href: "/impact/stories",
              },
            ].map((resource) => (
              <Link key={resource.title} href={resource.href} className="group">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {resource.type}
                      </Badge>
                      <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Support Public Health in Africa"
        subtitle="Your partnership can help build healthcare systems that serve every community. Together, we can make quality healthcare a reality for millions."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
