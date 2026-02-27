import type { Metadata } from "next";
import Link from "next/link";
import {
  HandCoins,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  Building,
  Wallet,
  Scale,
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
  title: "Poverty Reduction",
  description:
    "Hoop Africa Foundation tackles income inequality, creates jobs, and empowers vulnerable populations to break free from the cycle of poverty.",
};

const programs = [
  {
    title: "Microenterprise Development Program",
    description:
      "Providing business skills training, seed funding, and mentorship to aspiring entrepreneurs in underserved communities to launch and grow sustainable small businesses.",
    status: "Active",
    location: "Tanzania, DR Congo",
  },
  {
    title: "Youth Employment & Skills Initiative",
    description:
      "Connecting young people with vocational training, apprenticeships, and job placement services in high-demand sectors like construction, technology, and services.",
    status: "Active",
    location: "Namibia, Tanzania",
  },
  {
    title: "Community Savings & Lending Circles",
    description:
      "Establishing village savings and loan associations that give families access to financial services, building financial literacy and economic resilience from the ground up.",
    status: "Active",
    location: "DR Congo, Tanzania",
  },
  {
    title: "Social Safety Net Advocacy",
    description:
      "Working with governments and partners to design and strengthen social protection programs that provide a floor of support for the most vulnerable populations.",
    status: "Ongoing",
    location: "Pan-African",
  },
];

const metrics = [
  { value: "1,800+", label: "Entrepreneurs Supported" },
  { value: "65%", label: "Income Increase for Participants" },
  { value: "24", label: "Savings Groups Formed" },
  { value: "950", label: "Youth Placed in Employment" },
];

export default function PovertyReductionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
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
              <HandCoins className="w-8 h-8 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Poverty{" "}
              <span className="text-secondary-500">Reduction</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Tackling income inequality, creating sustainable livelihoods,
              and empowering vulnerable populations to build prosperous futures.
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
                subtitle="Poverty in Africa is not just an economic challenge -- it is a barrier to human dignity and potential."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Despite decades of economic growth, over 400 million people
                  in Sub-Saharan Africa still live in extreme poverty -- more
                  than any other region. Income inequality is widening, with
                  the benefits of growth disproportionately flowing to urban
                  elites while rural and peri-urban communities fall further
                  behind.
                </p>
                <p>
                  Youth unemployment is particularly acute, with nearly 60% of
                  Africa&apos;s unemployed being under 25. Without meaningful
                  economic opportunities, young people face limited pathways
                  out of poverty, fueling migration, instability, and
                  disillusionment.
                </p>
                <p>
                  Breaking the poverty cycle requires more than charity -- it
                  demands systemic interventions that create jobs, build
                  financial inclusion, develop skills, and ensure that
                  economic growth reaches those who need it most.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  stat: "400M+",
                  label: "people in extreme poverty in Sub-Saharan Africa",
                },
                {
                  icon: Briefcase,
                  stat: "60%",
                  label: "of Africa's unemployed are under age 25",
                },
                {
                  icon: Scale,
                  stat: "High",
                  label: "income inequality across the continent",
                },
                {
                  icon: Wallet,
                  stat: "57%",
                  label: "of adults lack access to formal financial services",
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
            subtitle="We create pathways out of poverty through skills, finance, and enterprise development."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Enterprise & Job Creation",
                description:
                  "We support micro and small enterprises with training, capital, and market access, creating sustainable livelihoods and local employment opportunities.",
              },
              {
                icon: Wallet,
                title: "Financial Inclusion",
                description:
                  "Through savings groups, micro-lending, and financial literacy programs, we bring financial services to communities that the formal banking system has left behind.",
              },
              {
                icon: TrendingUp,
                title: "Skills for the Market",
                description:
                  "We identify high-demand sectors and equip youth and adults with the vocational and entrepreneurial skills employers actually need.",
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
            subtitle="From microfinance to job placement, our programs create real economic opportunity."
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
              Building economic resilience and opportunity from the ground up.
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
              &ldquo;Poverty reduction is not about giving people handouts --
              it is about removing barriers and creating an environment where
              people can build their own prosperity. When you invest in
              someone&apos;s potential, the returns are extraordinary.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <HandCoins className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Livelihoods Team
                </p>
                <p className="text-sm text-neutral-500">
                  Microenterprise Development Program
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
            subtitle="Explore our research and stories on poverty reduction and economic empowerment."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Livelihoods Strategy Paper",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Economic Empowerment Report",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Entrepreneur Success Stories",
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
        title="Help Break the Cycle of Poverty"
        subtitle="Your support empowers families, creates jobs, and builds financial resilience in communities that need it most."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
