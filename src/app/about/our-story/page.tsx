import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Flag,
  Rocket,
  Globe,
  Users,
  Target,
  ArrowRight,
  Star,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME, FOCUS_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The founding narrative of Hoop Africa Foundation — from a bold vision born in Windhoek, Namibia to a multi-country movement unlocking Africa's human capital.",
};

const milestones = [
  {
    date: "Early 2025",
    title: "The Vision Takes Shape",
    description:
      "A group of passionate African professionals identify a critical gap: Africa's vast human capital remains largely untapped due to fragmented approaches to development. They envision a holistic, multi-sector organization that addresses interconnected challenges simultaneously.",
    icon: Lightbulb,
    color: "bg-secondary-500",
  },
  {
    date: "August 8, 2025",
    title: "Foundation Adopted in Windhoek",
    description:
      "Hoop Africa Foundation is officially adopted in Windhoek, Namibia, with a founding constitution that outlines nine strategic focus areas. The name 'Hoop' — meaning 'Hope' in Afrikaans — embodies the organization's belief in Africa's boundless potential.",
    icon: Flag,
    color: "bg-primary-600",
  },
  {
    date: "2025",
    title: "Official Registration",
    description:
      "The Foundation secures official registration under Section 21 of the Companies Act of the United Republic of Namibia (Reg. No: 21/2022/1459), establishing its legal foundation in Windhoek.",
    icon: Star,
    color: "bg-accent-500",
  },
  {
    date: "2025",
    title: "Multi-Country Operations Launch",
    description:
      "Operations begin across three countries — Namibia, Tanzania, and the Democratic Republic of Congo — with dedicated teams on the ground identifying community needs and building local partnerships.",
    icon: Globe,
    color: "bg-primary-700",
  },
  {
    date: "2025 — Present",
    title: "Building Momentum",
    description:
      "Programs are launched across all focus areas, from public health initiatives to emerging technology projects. Community partnerships deepen, and the Foundation begins to demonstrate measurable impact in the lives of ordinary Africans.",
    icon: TrendingUp,
    color: "bg-secondary-600",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <p className="text-primary-200 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Our Story</span>
            </p>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Founded August 8, 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From a bold vision born in Windhoek, Namibia to a growing
              pan-African movement — this is the story of how Hoop Africa
              Foundation came to be.
            </p>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="The Challenge We Saw"
                subtitle="Africa's greatest resource — its people — remains underutilized."
                centered={false}
              />
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Africa is home to the world&apos;s youngest and
                  fastest-growing population. By 2050, one in four people on
                  Earth will be African. Yet millions across the continent lack
                  access to quality healthcare, education, clean energy, and
                  economic opportunity.
                </p>
                <p>
                  Existing development efforts, while well-intentioned, often
                  work in silos — addressing health without considering
                  education, tackling poverty without leveraging technology, or
                  promoting agriculture without accounting for climate change.
                  This fragmented approach leaves critical gaps and limits
                  long-term impact.
                </p>
                <p>
                  We saw an urgent need for a holistic, African-led organization
                  that could connect these dots — one that would address
                  Africa&apos;s challenges not in isolation, but as the
                  interconnected, multi-dimensional problems they truly are.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
                <h3 className="text-lg font-bold text-primary-900 mb-6">
                  Key Challenges Across Africa
                </h3>
                <div className="space-y-4">
                  {[
                    "Limited access to quality healthcare and education",
                    "Youth unemployment and brain drain",
                    "Climate vulnerability and energy poverty",
                    "Fragmented development approaches",
                    "Insufficient investment in research and innovation",
                    "Gender inequality and social exclusion",
                  ].map((challenge) => (
                    <div key={challenge} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                      <p className="text-neutral-700 text-sm">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-neutral-50">
        <Container size="lg">
          <SectionHeading
            title="Our Multi-Sector Approach"
            subtitle="We believe Africa's challenges are interconnected — so our solutions must be too."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <Card hover={false} className="bg-primary-600 text-white border-0">
              <CardContent>
                <Target className="w-10 h-10 text-secondary-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Strategic Management</h3>
                <p className="text-primary-100 leading-relaxed">
                  We take a data-driven, strategically managed approach to
                  development, ensuring every initiative is aligned with
                  measurable outcomes and long-term sustainability.
                </p>
              </CardContent>
            </Card>

            <Card hover={false} className="bg-white">
              <CardContent>
                <Rocket className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Research & Innovation
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Evidence-based research and innovative solutions are at the
                  heart of our work. We invest in understanding problems deeply
                  before designing interventions.
                </p>
              </CardContent>
            </Card>

            <Card hover={false} className="bg-white">
              <CardContent>
                <Users className="w-10 h-10 text-accent-500 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Sustainable Development
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We design programs that communities can own and sustain
                  long after our direct involvement ends, building lasting
                  capacity and resilience.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in the Hoop Africa Foundation story."
          />

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 md:hidden" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full ${milestone.color} flex items-center justify-center shadow-lg`}
                    >
                      <milestone.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <Badge variant="primary" className="mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {milestone.date}
                    </Badge>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Name Meaning */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Why &ldquo;Hoop&rdquo;?
            </h2>
            <div className="h-1 w-20 bg-secondary-500 rounded-full mx-auto mb-8" />
            <p className="text-xl text-neutral-700 leading-relaxed mb-6">
              &ldquo;Hoop&rdquo; means <strong>&ldquo;Hope&rdquo;</strong> in
              Afrikaans, one of the languages spoken across Southern Africa. It
              was chosen to reflect the Foundation&apos;s core belief: that
              Africa&apos;s future is bright, and that with the right support,
              every individual on the continent can reach their full potential.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our dove logo symbolizes peace, freedom, and the uplifting spirit
              of our mission — carrying hope across borders and into communities
              that need it most.
            </p>
          </div>
        </Container>
      </section>

      {/* Focus Areas Quick Reference */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Nine Interconnected Focus Areas"
            subtitle="Our multi-sector approach ensures that no critical area is left behind."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {FOCUS_AREAS.map((area) => (
              <Link key={area.id} href={area.href} className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <area.icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 text-sm group-hover:text-primary-600 transition-colors">
                      {area.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Next Pages */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/about/mission-vision" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Next</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Mission & Vision
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Discover the mission and vision that guide everything we do.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/about/where-we-work" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Explore</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Where We Work
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    See how we operate across Namibia, Tanzania, and DR Congo.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Be Part of Our Story"
        subtitle="Our story is still being written, and you can be a part of it. Join us in creating lasting change across Africa."
      />
    </>
  );
}
