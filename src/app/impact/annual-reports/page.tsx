import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { REGISTRATION_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Annual Reports",
  description:
    "Access Hoop Africa Foundation annual reports with transparent financial data, program outcomes, and strategic insights.",
};

const ANNUAL_REPORTS = [
  {
    year: 2025,
    title: "Annual Report 2025",
    status: "current",
    coverGradient: "from-primary-600 to-primary-800",
    highlights: [
      "10,247 lives directly impacted across 3 countries",
      "18 active programs spanning all focus areas",
      "27 community and institutional partnerships",
      "$1.2M deployed with 92% going directly to programs",
    ],
    financials: {
      totalRevenue: "$1.4M",
      programExpense: "92%",
      adminExpense: "5%",
      fundraisingExpense: "3%",
    },
    keyMetrics: [
      { label: "Beneficiaries", value: "10,247", icon: Users },
      { label: "Programs", value: "18", icon: Target },
      { label: "Budget", value: "$1.2M", icon: DollarSign },
      { label: "YoY Growth", value: "+23%", icon: TrendingUp },
    ],
  },
  {
    year: 2024,
    title: "Annual Report 2024",
    status: "available",
    coverGradient: "from-primary-700 to-primary-900",
    highlights: [
      "8,300 beneficiaries reached with expanded programming",
      "14 active programs with 5 new launches",
      "Strategic expansion into DR Congo operations",
      "$840K budget with improved cost efficiency",
    ],
    financials: {
      totalRevenue: "$960K",
      programExpense: "91%",
      adminExpense: "6%",
      fundraisingExpense: "3%",
    },
    keyMetrics: [
      { label: "Beneficiaries", value: "8,300", icon: Users },
      { label: "Programs", value: "14", icon: Target },
      { label: "Budget", value: "$840K", icon: DollarSign },
      { label: "YoY Growth", value: "+54%", icon: TrendingUp },
    ],
  },
  {
    year: 2023,
    title: "Annual Report 2023",
    status: "available",
    coverGradient: "from-primary-800 to-primary-950",
    highlights: [
      "5,400 individuals supported across Namibia and Tanzania",
      "9 programs established across key focus areas",
      "First international partnerships formalized",
      "$520K deployed in community development",
    ],
    financials: {
      totalRevenue: "$600K",
      programExpense: "89%",
      adminExpense: "7%",
      fundraisingExpense: "4%",
    },
    keyMetrics: [
      { label: "Beneficiaries", value: "5,400", icon: Users },
      { label: "Programs", value: "9", icon: Target },
      { label: "Budget", value: "$520K", icon: DollarSign },
      { label: "YoY Growth", value: "+157%", icon: TrendingUp },
    ],
  },
  {
    year: 2022,
    title: "Inaugural Report 2022",
    status: "available",
    coverGradient: "from-neutral-700 to-neutral-900",
    highlights: [
      "Foundation officially registered in Tanzania",
      "2,100 initial beneficiaries in pilot programs",
      "4 foundational programs launched",
      "Core team and governance structures established",
    ],
    financials: {
      totalRevenue: "$320K",
      programExpense: "85%",
      adminExpense: "10%",
      fundraisingExpense: "5%",
    },
    keyMetrics: [
      { label: "Beneficiaries", value: "2,100", icon: Users },
      { label: "Programs", value: "4", icon: Target },
      { label: "Budget", value: "$280K", icon: DollarSign },
      { label: "Founded", value: "2022", icon: Calendar },
    ],
  },
];

export default function AnnualReportsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/impact"
              className="inline-flex items-center text-primary-200 hover:text-white text-sm mb-6 gap-1 transition-colors"
            >
              Impact
              <span className="mx-2">/</span>
              <span className="text-white">Annual Reports</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Annual <span className="text-secondary-400">Reports</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Comprehensive documentation of our programs, finances, and impact.
              We believe in full transparency with our stakeholders and the
              communities we serve.
            </p>
          </div>
        </Container>
      </section>

      {/* Transparency Banner */}
      <section className="py-6 bg-accent-50 border-b border-accent-100">
        <Container>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
              <span className="text-sm font-medium text-accent-800">
                Registered Non-Profit: {REGISTRATION_INFO.type}, Reg No:{" "}
                {REGISTRATION_INFO.number} ({REGISTRATION_INFO.country})
              </span>
            </div>
            <span className="hidden sm:block text-accent-300">|</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
              <span className="text-sm font-medium text-accent-800">
                92% of funds go directly to programs
              </span>
            </div>
            <span className="hidden sm:block text-accent-300">|</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
              <span className="text-sm font-medium text-accent-800">
                Independently audited financials
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Reports List */}
      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {ANNUAL_REPORTS.map((report) => (
              <div
                key={report.year}
                id={`report-${report.year}`}
                className="scroll-mt-24"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Report Cover Placeholder */}
                  <div className="md:col-span-4">
                    <div
                      className={`bg-gradient-to-br ${report.coverGradient} rounded-xl p-8 aspect-[3/4] flex flex-col justify-between relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6" />

                      <div className="relative z-10">
                        {report.status === "current" && (
                          <Badge className="bg-secondary-500 text-white border-none mb-4">
                            Latest Report
                          </Badge>
                        )}
                        <FileText className="w-10 h-10 text-white/60 mb-4" />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-white font-bold text-xl mb-1">
                          {report.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          Hoop Africa Foundation
                        </p>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="mt-4 space-y-2">
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-full gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </Button>
                      <p className="text-xs text-neutral-500 text-center">
                        PDF format -- placeholder
                      </p>
                    </div>
                  </div>

                  {/* Report Details */}
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3 mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                        {report.title}
                      </h2>
                      {report.status === "current" && (
                        <Badge variant="accent">Current Year</Badge>
                      )}
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                      {report.keyMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="bg-primary-50 rounded-lg p-4 text-center"
                        >
                          <metric.icon className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                          <div className="text-xl font-bold text-primary-700">
                            {metric.value}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-neutral-900 mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {report.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-neutral-700"
                          >
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Financial Summary */}
                    <div className="bg-neutral-50 rounded-xl p-6">
                      <h4 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary-600" />
                        Financial Summary
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                          <div className="text-sm text-neutral-500 mb-1">
                            Total Revenue
                          </div>
                          <div className="font-bold text-neutral-900">
                            {report.financials.totalRevenue}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 mb-1">
                            Program Expense
                          </div>
                          <div className="font-bold text-accent-600">
                            {report.financials.programExpense}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 mb-1">
                            Administration
                          </div>
                          <div className="font-bold text-neutral-900">
                            {report.financials.adminExpense}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500 mb-1">
                            Fundraising
                          </div>
                          <div className="font-bold text-neutral-900">
                            {report.financials.fundraisingExpense}
                          </div>
                        </div>
                      </div>

                      {/* Expense Visual Bar */}
                      <div className="mt-4 flex rounded-full overflow-hidden h-3">
                        <div
                          className="bg-accent-500"
                          style={{
                            width: report.financials.programExpense,
                          }}
                          title="Program Expenses"
                        />
                        <div
                          className="bg-primary-400"
                          style={{
                            width: report.financials.adminExpense,
                          }}
                          title="Administration"
                        />
                        <div
                          className="bg-secondary-400"
                          style={{
                            width: report.financials.fundraisingExpense,
                          }}
                          title="Fundraising"
                        />
                      </div>
                      <div className="flex gap-4 mt-2 text-xs text-neutral-500">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-accent-500 rounded-full" />
                          Programs
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-primary-400 rounded-full" />
                          Admin
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-secondary-400 rounded-full" />
                          Fundraising
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator */}
                {report.year !== 2022 && (
                  <div className="border-b border-neutral-200 mt-16" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Request Information */}
      <section className="py-16 bg-primary-50">
        <Container size="md">
          <div className="text-center">
            <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Need More Information?
            </h2>
            <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
              For detailed financial statements, audit reports, or any questions
              about our reporting, please reach out to our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/impact/dashboard">
                <Button variant="outline" size="lg" className="gap-2">
                  View Live Dashboard
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Invest in Transparent Impact"
        subtitle="Your donations are managed with the highest standards of accountability. See exactly where your support goes."
      />
    </>
  );
}
