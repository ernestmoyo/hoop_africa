import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  ClipboardCheck,
  GraduationCap,
  Building,
  Handshake,
  LineChart,
  Lightbulb,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Performance Management",
  description:
    "Performance management systems, results-based management, PMS training, organisational development, and in-house training & support for organisations across Africa.",
};

const offerings = [
  {
    icon: ClipboardCheck,
    title: "Performance Management System",
    description:
      "Design and implementation of comprehensive performance management systems — from individual scorecards to organisational dashboards — that align daily work with strategic objectives and create a culture of accountability.",
  },
  {
    icon: Target,
    title: "Performance Management for Results",
    description:
      "Results-based performance management that focuses on outcomes, not just activities. We help organisations define meaningful KPIs, set evidence-based targets, and build feedback loops that drive continuous improvement.",
  },
  {
    icon: GraduationCap,
    title: "PMS Training & Development",
    description:
      "Practical, hands-on training programmes for managers, HR professionals, and staff on how to effectively operate within a performance management framework — from setting objectives to conducting reviews and managing underperformance.",
  },
  {
    icon: Building,
    title: "Organisation Development",
    description:
      "Holistic organisational development interventions including structure design, culture assessment, change management, leadership development, and team effectiveness — building organisations that can deliver on their mandate.",
  },
  {
    icon: Handshake,
    title: "In-House Training & Support",
    description:
      "Customised, on-site training and ongoing advisory support embedded within your organisation. We work alongside your teams to transfer skills, build confidence, and ensure sustainable adoption of new systems and practices.",
  },
];

const benefits = [
  "Clear line of sight from individual work to organisational strategy",
  "Objective, transparent performance assessment",
  "Improved accountability at all levels",
  "Data-driven decision making on people and resources",
  "Stronger organisational culture and employee engagement",
  "Sustained capability long after the engagement ends",
];

export default function PerformanceManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-primary-200 text-sm hover:text-white transition-colors mb-6"
            >
              Services
              <span className="mx-1">/</span>
              <span className="text-white font-medium">Performance Management</span>
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <BarChart3 className="w-8 h-8 text-secondary-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Performance{" "}
              <span className="text-secondary-400">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Results-driven performance management systems, training, and
              organisational development support that build lasting capability
              within your organisation.
            </p>
          </div>
        </Container>
      </section>

      {/* Offerings */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="From system design to in-house training, we provide the full spectrum of performance management support."
          />

          <div className="space-y-6">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <div
                  key={offering.title}
                  className="p-6 md:p-8 rounded-xl border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {offering.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                What You Can Expect
              </h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                A well-implemented performance management system transforms how
                an organisation operates — creating alignment, transparency, and
                a shared drive for results.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Our Philosophy
                </h3>
              </div>
              <blockquote className="border-l-4 border-primary-500 pl-4 text-neutral-700 italic leading-relaxed mb-4">
                &ldquo;Performance management is not about policing people. It&apos;s
                about creating the conditions for people and organisations to
                succeed — with clarity, support, and accountability.&rdquo;
              </blockquote>
              <p className="text-sm text-neutral-500">
                Hoop Africa Foundation approach
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <Container size="md">
          <SectionHeading
            title="How We Work"
            subtitle="A structured yet flexible engagement model that adapts to your organisation's size, maturity, and needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Diagnose",
                description: "Assess current PMS maturity, culture, and gaps",
              },
              {
                step: "02",
                title: "Design",
                description: "Co-develop fit-for-purpose systems and tools",
              },
              {
                step: "03",
                title: "Deploy",
                description: "Roll out with training, coaching, and change support",
              },
              {
                step: "04",
                title: "Sustain",
                description: "Ongoing advisory and in-house capability building",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="text-center p-6 bg-neutral-50 rounded-xl"
              >
                <span className="inline-block text-3xl font-bold text-primary-300 mb-3">
                  {phase.step}
                </span>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-neutral-600">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Elevate Performance?"
        subtitle="Let's discuss how we can help your organisation build a performance management culture that delivers results."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
