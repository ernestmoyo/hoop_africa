import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ArrowRight,
  Target,
  Eye,
  Settings,
  TrendingUp,
  Shield,
  Building2,
  Landmark,
  ClipboardCheck,
  GraduationCap,
  BarChart3,
  Handshake,
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
  title: "Strategic & Performance Management",
  description:
    "Hoop Africa Foundation provides strategic planning, strategy implementation, performance management systems, M&E, organisational development, and in-house training across Africa.",
};

const programs = [
  {
    title: "Strategic Planning & Reviews",
    description:
      "Collaborative development of actionable strategic plans and comprehensive reviews of existing strategies to evaluate relevance, progress, and alignment.",
    status: "Active",
    location: "Pan-African",
  },
  {
    title: "Strategy Implementation & Oversight",
    description:
      "Turning strategy into action through implementation roadmaps, resource allocation, change management, and ongoing governance support for boards and executives.",
    status: "Active",
    location: "Namibia, Tanzania, DRC",
  },
  {
    title: "Performance Management Systems",
    description:
      "Design and implementation of comprehensive PMS — from individual scorecards to organisational dashboards — aligned with strategic objectives and a culture of accountability.",
    status: "Active",
    location: "Pan-African",
  },
  {
    title: "PMS Training & Organisation Development",
    description:
      "Hands-on training for managers and staff on performance frameworks, plus holistic OD interventions including structure design, culture assessment, and leadership development.",
    status: "Active",
    location: "Namibia, Tanzania, DRC",
  },
];

const metrics = [
  { value: "50+", label: "Organisations Supported" },
  { value: "200+", label: "Leaders Trained" },
  { value: "3", label: "Countries Served" },
  { value: "95%", label: "Client Satisfaction Rate" },
];

export default function StrategicServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
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
              <Briefcase className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Strategic &{" "}
              <span className="text-secondary-500">Performance</span>{" "}
              Management
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Helping organisations across Africa achieve clarity, direction, and
              measurable results through expert strategic planning, performance
              management systems, and organisational development.
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
                subtitle="Many organisations across Africa struggle to translate vision into results."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Across the continent, non-profit, public sector, and private
                  organisations face common challenges: strategies that sit on
                  shelves, performance systems that measure activity instead of
                  impact, and capacity gaps that undermine execution.
                </p>
                <p>
                  Without clear strategic direction and effective performance
                  management, even well-resourced organisations fail to deliver
                  on their mandates. The result is wasted potential, donor
                  fatigue, and communities that continue to wait for change.
                </p>
                <p>
                  Hoop Africa bridges this gap by working alongside organisations
                  to build strategy that is practical and owned, and performance
                  systems that drive real accountability and results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Target,
                  stat: "70%",
                  label: "of strategies fail at implementation stage",
                },
                {
                  icon: BarChart3,
                  stat: "Low",
                  label: "adoption of results-based performance management",
                },
                {
                  icon: Building2,
                  stat: "Gap",
                  label: "between strategic intent and organisational capacity",
                },
                {
                  icon: TrendingUp,
                  stat: "High",
                  label: "demand for practical, context-relevant advisory",
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
            subtitle="We don't just advise — we build internal capability so organisations sustain their own growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Context-Driven",
                description:
                  "Every engagement starts with deep understanding of your organisation's history, culture, stakeholders, and operating environment. No cookie-cutter solutions.",
              },
              {
                icon: Handshake,
                title: "Co-Creation",
                description:
                  "Strategy and systems are built with your people, not for them. We facilitate inclusive processes that generate genuine ownership and alignment at all levels.",
              },
              {
                icon: GraduationCap,
                title: "Capacity Transfer",
                description:
                  "Through in-house training, coaching, and hands-on support, we transfer skills and build confidence so your teams can sustain results long after we leave.",
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

      {/* Service Offerings Detail */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="A comprehensive suite of strategic and performance management services."
          />

          {/* Strategic Management Domain */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary-600" />
              </span>
              Strategic Management
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Strategic Planning", description: "Collaborative development of clear, actionable strategic plans aligned with your mission and operating environment." },
                { icon: Eye, title: "Strategy Reviews", description: "Assessment of existing strategies to evaluate relevance, progress, and alignment with changing circumstances." },
                { icon: Settings, title: "Strategy Implementation", description: "Detailed implementation roadmaps, resource allocation frameworks, and change management support." },
                { icon: TrendingUp, title: "Monitoring & Evaluation", description: "Robust M&E frameworks with clear indicators, data collection methods, and reporting structures." },
                { icon: Shield, title: "Strategy Drivers & Levers", description: "Identifying and activating the critical drivers that accelerate strategic outcomes." },
                { icon: Shield, title: "Strategic Oversight", description: "Ongoing governance support for boards and executives, including dashboards and risk systems." },
                { icon: Building2, title: "For Non-Profit Organisations", description: "Purpose-built strategic management balancing mission impact with sustainability." },
                { icon: Landmark, title: "For Public Sector Organisations", description: "Tailored for government departments, ministries, and public agencies." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg border border-neutral-100 hover:border-primary-200 transition-colors">
                  <item.icon className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">{item.title}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Management Domain */}
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-secondary-600" />
              </span>
              Performance Management
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: ClipboardCheck, title: "Performance Management System", description: "Comprehensive PMS design — from individual scorecards to organisational dashboards aligned with strategic objectives." },
                { icon: Target, title: "Performance Management for Results", description: "Results-based management focusing on outcomes, meaningful KPIs, evidence-based targets, and continuous improvement." },
                { icon: GraduationCap, title: "PMS Training & Development", description: "Practical training for managers and HR on operating within performance frameworks effectively." },
                { icon: Building2, title: "Organisation Development", description: "Structure design, culture assessment, change management, leadership development, and team effectiveness." },
                { icon: Handshake, title: "In-House Training & Support", description: "Customised on-site training and ongoing advisory embedded within your organisation for sustainable adoption." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg border border-neutral-100 hover:border-secondary-200 transition-colors">
                  <item.icon className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">{item.title}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Programs & Initiatives */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Programs & Initiatives"
            subtitle="Active engagements driving organisational excellence across the continent."
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
              Building organisational capacity and driving results across Africa.
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

      {/* Featured Quote */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-primary-100">
            <Quote className="w-12 h-12 text-primary-200 mb-6" />
            <blockquote className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8 font-medium">
              &ldquo;Strategy should be practical, owned, and lived — not a
              document that sits on a shelf. Performance management is not about
              policing people. It&apos;s about creating the conditions for people
              and organisations to succeed.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Strategic Services Team
                </p>
                <p className="text-sm text-neutral-500">
                  Our approach to organisational excellence
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
            subtitle="Learn more about our strategic and performance management work."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Strategic Management Framework",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "PMS Implementation Guide",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Client Success Stories",
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
        title="Ready to Strengthen Your Organisation?"
        subtitle="Get in touch to discuss how our strategic and performance management services can drive results for your organisation."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
