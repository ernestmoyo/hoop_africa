import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  FileText,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { IMPACT_STATS, FOCUS_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Explore the measurable impact Hoop Africa Foundation is making across the continent. Read stories, view data dashboards, and access annual reports.",
};

const impactSubPages = [
  {
    title: "Stories of Change",
    description:
      "Read real stories from communities we serve. Discover how our programs are transforming lives across Namibia, Tanzania, and the DRC.",
    href: "/impact/stories",
    icon: BookOpen,
    color: "bg-secondary-500",
  },
  {
    title: "Impact Dashboard",
    description:
      "Explore our impact through data. Interactive metrics and visual breakdowns by country, focus area, and year.",
    href: "/impact/dashboard",
    icon: BarChart3,
    color: "bg-accent-500",
  },
  {
    title: "Annual Reports",
    description:
      "Download our comprehensive annual reports with financial transparency, program outcomes, and strategic insights.",
    href: "/impact/annual-reports",
    icon: FileText,
    color: "bg-primary-600",
  },
];

const highlightStats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Lives Impacted",
    description: "Direct beneficiaries across our programs",
  },
  {
    icon: Globe,
    value: "3",
    label: "Countries",
    description: "Active operations in Namibia, Tanzania & DRC",
  },
  {
    icon: Target,
    value: "9",
    label: "Focus Areas",
    description: "Comprehensive development programs",
  },
  {
    icon: TrendingUp,
    value: "25+",
    label: "Community Partners",
    description: "Local and international collaborations",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-primary-100 text-sm font-medium rounded-full mb-6 border border-white/20">
              Measuring What Matters
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-secondary-400">Impact</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              We believe in transparent, measurable impact. Explore how our work
              is creating lasting change across the African continent through
              data, stories, and comprehensive reporting.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlightStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-neutral-800 mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-neutral-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sub-Pages Navigation */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Explore Our Impact"
            subtitle="Dive deeper into our work through stories, data, and transparent reporting."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {impactSubPages.map((page) => (
              <Link key={page.href} href={page.href} className="group">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 ${page.color} rounded-xl mb-6`}
                    >
                      <page.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {page.description}
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Focus Areas Impact Summary */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Impact Across Focus Areas"
            subtitle="Our work spans 9 critical development areas, each contributing to Africa's sustainable growth."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area.id}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {area.shortTitle}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Approach to Impact Measurement
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                Data Collection
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Rigorous baseline surveys, monitoring frameworks, and
                community-level data gathering across all program areas.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-secondary-600">2</span>
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                Analysis & Evaluation
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Evidence-based evaluation methodologies, third-party audits,
                and peer-reviewed research partnerships.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-accent-600">3</span>
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                Transparent Reporting
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Annual reports, real-time dashboards, and community stories
                that bring our impact data to life.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Support Our Growing Impact"
        subtitle="Your contribution directly fuels programs that are changing lives across Africa. See the difference your support makes."
        primaryCta={{ label: "Donate Now", href: "/get-involved/donate" }}
        secondaryCta={{ label: "View Dashboard", href: "/impact/dashboard" }}
      />
    </>
  );
}
