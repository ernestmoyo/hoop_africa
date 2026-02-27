import type { Metadata } from "next";
import Link from "next/link";
import {
  CloudSun,
  ArrowRight,
  Thermometer,
  TreePine,
  Wind,
  Droplets,
  Globe,
  Shield,
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
  title: "Climate Change",
  description:
    "Hoop Africa Foundation builds climate resilience, promotes green technologies, and drives environmental protection across the African continent.",
};

const programs = [
  {
    title: "Community Climate Resilience Program",
    description:
      "Building adaptive capacity in vulnerable communities through early warning systems, climate-smart agriculture, and disaster preparedness training.",
    status: "Active",
    location: "Tanzania, DR Congo",
  },
  {
    title: "Green Technology Adoption Initiative",
    description:
      "Facilitating the adoption of clean cookstoves, solar water heaters, biogas digesters, and other green technologies that reduce emissions and improve lives.",
    status: "Active",
    location: "Tanzania, Namibia",
  },
  {
    title: "Reforestation & Ecosystem Restoration",
    description:
      "Partnering with communities to restore degraded landscapes through tree planting, watershed protection, and sustainable land management practices.",
    status: "Active",
    location: "DR Congo, Tanzania",
  },
  {
    title: "Climate Policy Advocacy Hub",
    description:
      "Amplifying African voices in global climate negotiations and supporting the development of national climate policies that protect vulnerable populations.",
    status: "Ongoing",
    location: "Pan-African",
  },
];

const metrics = [
  { value: "50,000+", label: "Trees Planted" },
  { value: "18", label: "Communities with Climate Plans" },
  { value: "1,200", label: "Green Tech Units Distributed" },
  { value: "30%", label: "Emission Reduction in Target Areas" },
];

export default function ClimateActionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
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
              <CloudSun className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Climate{" "}
              <span className="text-secondary-500">Action</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Building climate resilience, advancing green technologies, and
              protecting Africa&apos;s environment for current and future
              generations.
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
                subtitle="Africa contributes the least to climate change yet bears its heaviest burden."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Africa is responsible for less than 4% of global greenhouse
                  gas emissions, yet the continent is disproportionately
                  vulnerable to climate impacts. Rising temperatures, changing
                  rainfall patterns, and extreme weather events threaten food
                  systems, water security, and millions of livelihoods.
                </p>
                <p>
                  By 2050, climate change could push an additional 86 million
                  Africans into internal migration. Agricultural yields may
                  decline by up to 30%, exacerbating food insecurity in a
                  continent already home to one-third of the world&apos;s
                  food-insecure people.
                </p>
                <p>
                  Yet Africa also holds immense potential for climate solutions --
                  from the Congo Basin rainforest (the world&apos;s second-largest
                  carbon sink) to vast renewable energy resources. With the right
                  investments, Africa can leapfrog dirty development and become a
                  leader in green growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Thermometer,
                  stat: "<4%",
                  label: "of global emissions from Africa",
                },
                {
                  icon: Globe,
                  stat: "86M",
                  label: "potential climate migrants by 2050",
                },
                {
                  icon: Droplets,
                  stat: "30%",
                  label: "potential decline in agricultural yields",
                },
                {
                  icon: TreePine,
                  stat: "2nd",
                  label: "largest carbon sink -- Congo Basin",
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
            subtitle="We combine grassroots resilience building with advocacy for systemic climate justice."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Community Resilience",
                description:
                  "We empower communities to anticipate, prepare for, and adapt to climate impacts through early warning systems, diversified livelihoods, and climate-smart practices.",
              },
              {
                icon: Wind,
                title: "Green Technology",
                description:
                  "We accelerate the adoption of clean energy, efficient cooking, and sustainable technologies that reduce emissions while improving quality of life.",
              },
              {
                icon: TreePine,
                title: "Ecosystem Restoration",
                description:
                  "We work with communities to restore degraded forests, protect watersheds, and manage natural resources sustainably for long-term ecological health.",
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
            subtitle="From tree planting to policy advocacy, our climate programs protect Africa's future."
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
              Protecting communities and ecosystems from the frontlines of climate change.
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
              &ldquo;Climate justice means ensuring that the communities who
              have done the least to cause the crisis are not the ones who
              suffer the most. Africa deserves both protection and the
              opportunity to lead the green transition.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <CloudSun className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Climate Team
                </p>
                <p className="text-sm text-neutral-500">
                  Community Climate Resilience Program
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
            subtitle="Explore our climate research, advocacy, and impact stories."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Climate Resilience Framework",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Green Technology Impact Report",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Community Climate Stories",
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
        title="Join the Fight for Climate Justice"
        subtitle="Help us build resilient communities, restore ecosystems, and advocate for Africa's place in the global climate movement."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
