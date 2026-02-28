import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Compass,
  Target,
  Eye,
  Settings,
  TrendingUp,
  Shield,
  Building2,
  Landmark,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Strategic Management",
  description:
    "End-to-end strategic management services including strategic planning, strategy reviews, implementation, M&E, and strategic oversight for organisations across Africa.",
};

const offerings = [
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Collaborative development of clear, actionable strategic plans aligned with your organisation's mission, vision, and operating environment. We facilitate stakeholder engagement, environmental scanning, and goal-setting processes that produce strategies with real buy-in.",
  },
  {
    icon: Eye,
    title: "Strategy Reviews",
    description:
      "Comprehensive assessment of existing strategies to evaluate relevance, progress, and alignment with changing circumstances. We identify gaps, emerging opportunities, and areas requiring course correction.",
  },
  {
    icon: Settings,
    title: "Strategy Implementation",
    description:
      "Turning strategy into action through detailed implementation roadmaps, resource allocation frameworks, and change management support. We ensure your strategy moves from paper to practice.",
  },
  {
    icon: TrendingUp,
    title: "Monitoring & Evaluation",
    description:
      "Designing robust M&E frameworks with clear indicators, data collection methods, and reporting structures that track strategic progress and demonstrate accountability to stakeholders.",
  },
  {
    icon: Compass,
    title: "Strategy Drivers & Levers",
    description:
      "Identifying and activating the critical drivers and levers that accelerate strategic outcomes — from organisational culture and leadership alignment to resource optimisation and partnership development.",
  },
  {
    icon: Shield,
    title: "Strategic Oversight",
    description:
      "Ongoing strategic governance support for boards and executive teams, including dashboard design, periodic review facilitation, and early-warning systems for strategic risk.",
  },
  {
    icon: Building2,
    title: "Strategic Management for Non-Profit Organisations",
    description:
      "Purpose-built strategic management for NPOs, foundations, and civil society organisations — balancing mission impact with donor accountability, sustainability, and stakeholder expectations.",
  },
  {
    icon: Landmark,
    title: "Strategic Management for Public Sector Organisations",
    description:
      "Tailored strategic management for government departments, ministries, parastatals, and public agencies — navigating policy mandates, public accountability, and service delivery imperatives.",
  },
];

export default function StrategicManagementPage() {
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
              <span className="text-white font-medium">Strategic Management</span>
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <Compass className="w-8 h-8 text-secondary-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Strategic{" "}
              <span className="text-secondary-400">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              End-to-end strategic management services for organisations seeking
              clarity, direction, and measurable results. From planning to
              oversight, we walk the full strategic journey with you.
            </p>
          </div>
        </Container>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="A comprehensive suite of strategic management services tailored to your organisation's context and needs."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <div
                  key={offering.title}
                  className="p-6 rounded-xl border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
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

      {/* Approach */}
      <section className="py-20 bg-neutral-50">
        <Container size="md">
          <SectionHeading
            title="Our Approach"
            subtitle="We believe strategy should be practical, owned, and lived — not a document that sits on a shelf."
          />

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Understand",
                description:
                  "We immerse ourselves in your organisation's context — its history, culture, stakeholders, and operating environment.",
              },
              {
                step: "02",
                title: "Co-Create",
                description:
                  "Strategy is built with your people, not for them. We facilitate inclusive processes that generate ownership and alignment.",
              },
              {
                step: "03",
                title: "Implement",
                description:
                  "We develop clear implementation plans with accountabilities, timelines, and resource requirements so strategy translates into action.",
              },
              {
                step: "04",
                title: "Track & Adapt",
                description:
                  "Through M&E frameworks and periodic reviews, we help you track progress, learn from results, and adapt as conditions change.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="flex items-start gap-6 p-6 bg-white rounded-xl border border-neutral-200"
              >
                <span className="text-3xl font-bold text-primary-200 shrink-0">
                  {phase.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Start the Conversation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Need Strategic Direction?"
        subtitle="Whether you're developing a new strategy or reviewing an existing one, we can help your organisation move forward with clarity and confidence."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
