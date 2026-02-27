import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Sun,
  Battery,
  Home,
  Factory,
  Lightbulb,
  Users,
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
  title: "Energy",
  description:
    "Hoop Africa Foundation works to deliver affordable, reliable, and sustainable energy solutions for African communities.",
};

const programs = [
  {
    title: "Solar Home Systems Distribution",
    description:
      "Deploying affordable solar home systems to off-grid households, providing clean lighting, phone charging, and small appliance power for families without grid access.",
    status: "Active",
    location: "Tanzania, DR Congo",
  },
  {
    title: "Community Mini-Grid Development",
    description:
      "Designing and supporting community-owned solar mini-grids that provide reliable electricity to schools, health centers, and small businesses in rural areas.",
    status: "Active",
    location: "Tanzania",
  },
  {
    title: "Clean Cooking Solutions Program",
    description:
      "Distributing improved cookstoves and promoting clean cooking fuels to reduce indoor air pollution, deforestation, and the time burden on women and girls.",
    status: "Active",
    location: "DR Congo, Namibia",
  },
  {
    title: "Energy Entrepreneurship Accelerator",
    description:
      "Training and supporting local entrepreneurs to build sustainable energy businesses, from solar installation to battery repair and energy consultancy.",
    status: "Pilot",
    location: "Tanzania, Namibia",
  },
];

const metrics = [
  { value: "4,500+", label: "Households Electrified" },
  { value: "6", label: "Community Mini-Grids Deployed" },
  { value: "2,000", label: "Clean Cookstoves Distributed" },
  { value: "75%", label: "Reduction in Energy Costs for Users" },
];

export default function EnergyAccessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />
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
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Energy{" "}
              <span className="text-secondary-500">Access</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Delivering affordable, reliable, and sustainable energy
              solutions that power progress and improve lives across
              African communities.
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
                subtitle="Energy poverty remains one of Africa's most fundamental barriers to development."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Over 600 million people in Sub-Saharan Africa lack access to
                  electricity -- more than any other region in the world. Without
                  reliable energy, hospitals cannot store vaccines, students
                  cannot study after dark, businesses cannot grow, and
                  communities remain trapped in cycles of poverty.
                </p>
                <p>
                  Nearly 900 million Africans still rely on traditional biomass
                  for cooking, causing devastating indoor air pollution that
                  kills over 500,000 people annually and contributes to
                  deforestation and climate change.
                </p>
                <p>
                  Yet Africa is blessed with extraordinary renewable energy
                  potential -- abundant solar radiation, significant wind
                  corridors, and vast hydropower resources. Harnessing even a
                  fraction of this potential could power the continent&apos;s
                  development while leapfrogging fossil fuels entirely.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  stat: "600M+",
                  label: "people without electricity in Sub-Saharan Africa",
                },
                {
                  icon: Home,
                  stat: "900M",
                  label: "relying on traditional biomass for cooking",
                },
                {
                  icon: Sun,
                  stat: "10TW",
                  label: "of solar energy potential across the continent",
                },
                {
                  icon: Factory,
                  stat: "500K",
                  label: "annual deaths from indoor air pollution",
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
            subtitle="We deliver decentralized, community-driven energy solutions designed for lasting impact."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: "Renewable First",
                description:
                  "Every solution we deploy is powered by renewable energy -- primarily solar -- ensuring communities get clean, sustainable power that grows with them.",
              },
              {
                icon: Lightbulb,
                title: "Community Ownership",
                description:
                  "We design energy systems that communities can own, operate, and maintain themselves, creating local jobs and ensuring long-term sustainability.",
              },
              {
                icon: Battery,
                title: "Productive Use Focus",
                description:
                  "Beyond lighting, we prioritize energy for productive uses -- powering businesses, irrigation, cold storage, and digital connectivity that drive economic growth.",
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
            subtitle="Powering progress through clean, affordable, and reliable energy solutions."
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
              Lighting up lives and powering opportunity across Africa.
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
              &ldquo;When a community gets reliable electricity for the first
              time, you see transformation happen overnight -- children study
              longer, businesses stay open later, and a new sense of
              possibility takes hold.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Energy Team
                </p>
                <p className="text-sm text-neutral-500">
                  Community Mini-Grid Development
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
            subtitle="Learn more about clean energy solutions transforming African communities."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Energy Access Strategy Paper",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Solar Impact Assessment",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Community Energy Stories",
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
        title="Power Africa's Future"
        subtitle="Help us bring clean, reliable energy to communities that need it most. Every solar panel installed is a step toward a brighter, more equitable future."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
