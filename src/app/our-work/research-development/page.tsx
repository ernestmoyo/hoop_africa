import type { Metadata } from "next";
import Link from "next/link";
import {
  FlaskConical,
  ArrowRight,
  BarChart3,
  FileSearch,
  Target,
  Microscope,
  PenTool,
  Network,
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
  title: "Research & Development",
  description:
    "Hoop Africa Foundation drives evidence-based solutions, policy development, and impact measurement to inform sustainable development across Africa.",
};

const programs = [
  {
    title: "Evidence-Based Policy Research Unit",
    description:
      "Conducting rigorous applied research on development challenges in health, education, agriculture, and governance to inform policy decisions at local and national levels.",
    status: "Active",
    location: "Pan-African",
  },
  {
    title: "Impact Measurement & Evaluation Lab",
    description:
      "Designing and implementing monitoring, evaluation, and learning (MEL) frameworks that measure the real-world impact of development interventions.",
    status: "Active",
    location: "Tanzania, Namibia",
  },
  {
    title: "African Development Data Initiative",
    description:
      "Building comprehensive open data platforms that make African development data accessible to researchers, policymakers, and practitioners across the continent.",
    status: "Active",
    location: "Pan-African",
  },
  {
    title: "Young Researchers Fellowship Program",
    description:
      "Mentoring early-career African researchers through structured fellowships that build research skills, publish findings, and connect them with policy audiences.",
    status: "Annual",
    location: "Pan-African",
  },
];

const metrics = [
  { value: "45+", label: "Research Papers Published" },
  { value: "18", label: "Policy Briefs Produced" },
  { value: "30", label: "Young Researchers Mentored" },
  { value: "6", label: "Government Advisory Partnerships" },
];

export default function ResearchDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
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
              <FlaskConical className="w-8 h-8 text-indigo-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Research &{" "}
              <span className="text-secondary-500">Development</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Driving evidence-based solutions, shaping policy, and measuring
              impact to ensure that Africa&apos;s development is grounded in
              rigorous research and data.
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
                subtitle="Effective development requires evidence -- yet Africa faces a critical research gap."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Africa produces only about 2% of the world&apos;s research
                  output, despite being home to 17% of the global population.
                  This means that policies affecting a billion people are often
                  based on insufficient evidence, outdated data, or research
                  conducted in vastly different contexts.
                </p>
                <p>
                  The disconnect between research and policy is particularly
                  acute. Valuable findings often remain locked in academic
                  journals, never reaching the decision-makers who need them.
                  Meanwhile, development programs are implemented without
                  rigorous evaluation, making it impossible to know what works
                  and what does not.
                </p>
                <p>
                  Closing this gap requires investment in African research
                  capacity, stronger links between researchers and policymakers,
                  and a culture of evidence-based decision-making across all
                  sectors of development.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Microscope,
                  stat: "2%",
                  label: "of global research output from Africa",
                },
                {
                  icon: FileSearch,
                  stat: "Low",
                  label: "translation of research into policy decisions",
                },
                {
                  icon: BarChart3,
                  stat: "Limited",
                  label: "quality development data available across the continent",
                },
                {
                  icon: Target,
                  stat: "Gap",
                  label: "between program implementation and impact evaluation",
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
            subtitle="We produce actionable research, build local capacity, and bridge the gap between evidence and policy."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileSearch,
                title: "Applied Research",
                description:
                  "Our research is designed to be actionable -- addressing real-world development questions with rigorous methodology and producing findings that policymakers can use immediately.",
              },
              {
                icon: BarChart3,
                title: "Impact Measurement",
                description:
                  "We design robust monitoring and evaluation systems that track outcomes, measure impact, and generate learning that improves programs over time.",
              },
              {
                icon: Network,
                title: "Knowledge Sharing",
                description:
                  "We translate research into accessible formats -- policy briefs, dashboards, and convenings -- that bridge the gap between evidence producers and decision-makers.",
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
            subtitle="From policy research to young researcher mentorship, we strengthen Africa's evidence base."
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
              Building Africa&apos;s evidence base for smarter, more effective development.
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
              &ldquo;When development decisions are guided by evidence rather
              than assumptions, the results are transformative. Research is not
              a luxury -- it is the foundation upon which sustainable change
              is built.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Research Team
                </p>
                <p className="text-sm text-neutral-500">
                  Evidence-Based Policy Research Unit
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
            subtitle="Access our research publications, policy briefs, and data platforms."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Research Publications Library",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Policy Brief Collection",
                type: "Policy Brief",
                href: "/resources/publications",
              },
              {
                icon: ExternalLink,
                title: "Open Development Data Platform",
                type: "Data",
                href: "/resources/publications",
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
        title="Invest in Evidence-Based Development"
        subtitle="Support research that informs better policies, stronger programs, and lasting impact across the African continent."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
