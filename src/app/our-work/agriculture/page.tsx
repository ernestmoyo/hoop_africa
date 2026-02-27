import type { Metadata } from "next";
import Link from "next/link";
import {
  Sprout,
  ArrowRight,
  Wheat,
  Droplets,
  TrendingUp,
  Users,
  MapPin,
  Truck,
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
  title: "Agriculture",
  description:
    "Hoop Africa Foundation promotes sustainable farming, food security, and agricultural value chain development to improve livelihoods across Africa.",
};

const programs = [
  {
    title: "Smallholder Farmer Empowerment Program",
    description:
      "Training smallholder farmers in sustainable agriculture techniques, soil management, and climate-smart farming practices to boost yields and income.",
    status: "Active",
    location: "Tanzania, DR Congo",
  },
  {
    title: "Agricultural Value Chain Development",
    description:
      "Connecting farmers to markets through improved post-harvest handling, storage solutions, and direct linkages with buyers and processors.",
    status: "Active",
    location: "Tanzania, Namibia",
  },
  {
    title: "Food Security & Nutrition Initiative",
    description:
      "Promoting diverse crop cultivation and nutritional education to combat malnutrition and build food-secure communities.",
    status: "Active",
    location: "DR Congo",
  },
  {
    title: "AgriTech Innovation Hub",
    description:
      "Introducing technology-driven solutions including mobile-based market information, precision agriculture tools, and digital extension services.",
    status: "Pilot",
    location: "Tanzania",
  },
];

const metrics = [
  { value: "2,500+", label: "Farmers Trained" },
  { value: "40%", label: "Average Yield Increase" },
  { value: "12", label: "Agricultural Cooperatives Supported" },
  { value: "5,000", label: "Hectares Under Sustainable Practices" },
];

export default function AgriculturePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
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
              <Sprout className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Sustainable{" "}
              <span className="text-secondary-500">Agriculture</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Transforming African agriculture through sustainable farming,
              food security initiatives, and value chain development that
              improves livelihoods for millions.
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
                subtitle="Agriculture is Africa's economic backbone, yet the sector remains trapped in a cycle of low productivity."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Agriculture employs over 60% of Africa&apos;s workforce and
                  accounts for roughly 23% of the continent&apos;s GDP. Yet
                  African farmers produce far below their potential, with yields
                  often less than half the global average due to limited access
                  to modern inputs, financing, and markets.
                </p>
                <p>
                  Climate change is intensifying challenges -- droughts, floods,
                  and shifting seasons threaten harvests and push vulnerable
                  farming communities deeper into poverty. Meanwhile, post-harvest
                  losses of up to 40% mean that even what is produced often never
                  reaches consumers.
                </p>
                <p>
                  Africa has 60% of the world&apos;s uncultivated arable land.
                  Unlocking this potential through sustainable, climate-smart
                  agriculture could feed the continent and power economic growth
                  for decades to come.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  stat: "60%",
                  label: "of Africa's workforce employed in agriculture",
                },
                {
                  icon: Wheat,
                  stat: "40%",
                  label: "of food lost post-harvest in some regions",
                },
                {
                  icon: MapPin,
                  stat: "60%",
                  label: "of world's uncultivated arable land is in Africa",
                },
                {
                  icon: TrendingUp,
                  stat: "23%",
                  label: "of continental GDP from agriculture",
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
            subtitle="We empower farmers with knowledge, technology, and market access to build sustainable livelihoods."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "Climate-Smart Farming",
                description:
                  "We train farmers in techniques that increase productivity while building resilience to climate shocks -- including conservation agriculture, agroforestry, and water harvesting.",
              },
              {
                icon: Truck,
                title: "Market Linkages",
                description:
                  "We bridge the gap between smallholder farmers and profitable markets through cooperative formation, quality standards training, and buyer-seller platforms.",
              },
              {
                icon: Droplets,
                title: "Sustainable Resource Management",
                description:
                  "Our programs promote responsible use of water, soil, and biodiversity resources to ensure that today's farming practices protect tomorrow's potential.",
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
            subtitle="Building food security and agricultural prosperity across the continent."
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
              Growing prosperity from the ground up across African farming communities.
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
              &ldquo;When smallholder farmers gain access to knowledge,
              technology, and fair markets, they don&apos;t just feed their
              families -- they become engines of economic growth for entire
              communities.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Agriculture Team
                </p>
                <p className="text-sm text-neutral-500">
                  Smallholder Farmer Empowerment Program
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
            subtitle="Explore our research and stories on sustainable agriculture in Africa."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Sustainable Agriculture Report",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Food Security Impact Assessment",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Farmer Success Stories",
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
        title="Help Us Grow Africa's Agricultural Future"
        subtitle="Support sustainable farming initiatives that feed communities, create jobs, and build climate resilience across the continent."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
