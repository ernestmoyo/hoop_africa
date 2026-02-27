"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Globe,
  GraduationCap,
  Heart,
  Sprout,
  Zap,
  ChevronDown,
  ArrowUpRight,
  Target,
  BarChart3,
  Activity,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FOCUS_AREAS } from "@/lib/constants";

const KEY_METRICS = [
  {
    label: "Total Lives Impacted",
    value: "10,247",
    change: "+23%",
    trend: "up",
    icon: Users,
    color: "text-primary-600",
    bgColor: "bg-primary-100",
  },
  {
    label: "Programs Active",
    value: "18",
    change: "+4",
    trend: "up",
    icon: Target,
    color: "text-accent-600",
    bgColor: "bg-accent-100",
  },
  {
    label: "Community Partners",
    value: "27",
    change: "+8",
    trend: "up",
    icon: Globe,
    color: "text-secondary-600",
    bgColor: "bg-secondary-100",
  },
  {
    label: "Funds Deployed",
    value: "$1.2M",
    change: "+31%",
    trend: "up",
    icon: TrendingUp,
    color: "text-primary-700",
    bgColor: "bg-primary-50",
  },
];

const COUNTRY_DATA = [
  {
    country: "Namibia",
    beneficiaries: 3420,
    programs: 7,
    partners: 10,
    barWidth: "w-[65%]",
    color: "bg-primary-500",
  },
  {
    country: "Tanzania",
    beneficiaries: 4312,
    programs: 8,
    partners: 12,
    barWidth: "w-[82%]",
    color: "bg-secondary-500",
  },
  {
    country: "DR Congo",
    beneficiaries: 2515,
    programs: 3,
    partners: 5,
    barWidth: "w-[48%]",
    color: "bg-accent-500",
  },
];

const FOCUS_AREA_METRICS = [
  {
    id: "public-health",
    beneficiaries: 2850,
    programs: 4,
    highlight: "40% reduction in maternal mortality in target areas",
    barPercent: 28,
  },
  {
    id: "education",
    beneficiaries: 1920,
    programs: 3,
    highlight: "30 university scholarships awarded",
    barPercent: 19,
  },
  {
    id: "agriculture",
    beneficiaries: 1640,
    programs: 3,
    highlight: "35% average yield increase for trained farmers",
    barPercent: 16,
  },
  {
    id: "climate-action",
    beneficiaries: 980,
    programs: 2,
    highlight: "500 farmers trained in climate-adaptive techniques",
    barPercent: 10,
  },
  {
    id: "energy-access",
    beneficiaries: 720,
    programs: 1,
    highlight: "12 schools electrified with solar power",
    barPercent: 7,
  },
  {
    id: "poverty-reduction",
    beneficiaries: 890,
    programs: 2,
    highlight: "450 families accessed microfinance programs",
    barPercent: 9,
  },
  {
    id: "emerging-tech",
    beneficiaries: 425,
    programs: 1,
    highlight: "25 bootcamp graduates placed in tech roles",
    barPercent: 4,
  },
  {
    id: "research-development",
    beneficiaries: 310,
    programs: 1,
    highlight: "3 peer-reviewed publications produced",
    barPercent: 3,
  },
  {
    id: "empowerment",
    beneficiaries: 512,
    programs: 1,
    highlight: "15 women-led cooperatives generating income",
    barPercent: 5,
  },
];

const YEARLY_DATA = [
  { year: "2022", beneficiaries: 2100, programs: 4, budget: "$280K" },
  { year: "2023", beneficiaries: 5400, programs: 9, budget: "$520K" },
  { year: "2024", beneficiaries: 8300, programs: 14, budget: "$840K" },
  { year: "2025", beneficiaries: 10247, programs: 18, budget: "$1.2M" },
];

function getFocusAreaInfo(id: string) {
  return FOCUS_AREAS.find((a) => a.id === id);
}

export default function DashboardPage() {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2025");

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.2) 1px, transparent 1px)",
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
              <span className="text-white">Dashboard</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Impact <span className="text-secondary-400">Dashboard</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Real-time data on our programs, beneficiaries, and outcomes.
              Transparency is at the heart of everything we do.
            </p>
          </div>
        </Container>
      </section>

      {/* Filters Bar */}
      <section className="py-6 bg-white border-b border-neutral-200 sticky top-0 z-30">
        <Container>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Filter Data:</span>
            </div>

            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
                aria-label="Filter by country"
              >
                <option value="all">All Countries</option>
                <option value="namibia">Namibia</option>
                <option value="tanzania">Tanzania</option>
                <option value="drc">DR Congo</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
                aria-label="Filter by year"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            </div>

            <Badge variant="accent" className="ml-auto">
              <Activity className="w-3.5 h-3.5 mr-1" />
              Live Data
            </Badge>
          </div>
        </Container>
      </section>

      {/* Key Metrics Cards */}
      <section className="py-12 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_METRICS.map((metric) => (
              <Card key={metric.label} hover={false} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 ${metric.bgColor} rounded-lg`}
                    >
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <span className="inline-flex items-center text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-1 rounded-full">
                      <ArrowUpRight className="w-3 h-3 mr-0.5" />
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-500">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Country Breakdown */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Impact by Country"
            subtitle="Our presence spans three nations across Sub-Saharan Africa."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {COUNTRY_DATA.map((data) => (
              <Card key={data.country} hover={false}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-5 h-5 text-primary-600" />
                    <h3 className="text-lg font-bold text-neutral-900">
                      {data.country}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neutral-600">Beneficiaries</span>
                        <span className="font-semibold text-neutral-900">
                          {data.beneficiaries.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-2.5">
                        <div
                          className={`${data.color} h-2.5 rounded-full ${data.barWidth} transition-all duration-1000`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="text-center p-3 bg-neutral-50 rounded-lg">
                        <div className="text-xl font-bold text-primary-700">
                          {data.programs}
                        </div>
                        <div className="text-xs text-neutral-500">Programs</div>
                      </div>
                      <div className="text-center p-3 bg-neutral-50 rounded-lg">
                        <div className="text-xl font-bold text-primary-700">
                          {data.partners}
                        </div>
                        <div className="text-xs text-neutral-500">Partners</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Focus Area Breakdown */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Impact by Focus Area"
            subtitle="Detailed breakdown of our work across all 9 program areas."
          />

          <div className="space-y-4">
            {FOCUS_AREA_METRICS.map((metric) => {
              const areaInfo = getFocusAreaInfo(metric.id);
              if (!areaInfo) return null;

              return (
                <div
                  key={metric.id}
                  className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Icon & Name */}
                    <div className="flex items-center gap-3 md:w-56 flex-shrink-0">
                      <areaInfo.icon
                        className={`w-6 h-6 ${areaInfo.color} flex-shrink-0`}
                      />
                      <span className="font-semibold text-neutral-900">
                        {areaInfo.shortTitle}
                      </span>
                    </div>

                    {/* Bar */}
                    <div className="flex-1">
                      <div className="w-full bg-neutral-100 rounded-full h-4">
                        <div
                          className="bg-primary-500 h-4 rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
                          style={{ width: `${Math.max(metric.barPercent, 5)}%` }}
                        >
                          {metric.barPercent > 10 && (
                            <span className="text-[10px] font-bold text-white">
                              {metric.barPercent}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 flex-shrink-0">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-700">
                          {metric.beneficiaries.toLocaleString()}
                        </div>
                        <div className="text-[11px] text-neutral-500">
                          Beneficiaries
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-700">
                          {metric.programs}
                        </div>
                        <div className="text-[11px] text-neutral-500">
                          Programs
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="mt-3 pt-3 border-t border-neutral-100">
                    <p className="text-sm text-neutral-600 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      {metric.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Year-over-Year Growth */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Year-over-Year Growth"
            subtitle="Our trajectory of impact since our founding."
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-4 gap-4 mb-4 text-center">
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Year
              </div>
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Beneficiaries
              </div>
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Programs
              </div>
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Budget
              </div>
            </div>

            {YEARLY_DATA.map((data, index) => (
              <div
                key={data.year}
                className={`grid grid-cols-4 gap-4 text-center py-4 ${
                  index < YEARLY_DATA.length - 1
                    ? "border-b border-neutral-100"
                    : ""
                } ${data.year === selectedYear ? "bg-primary-50 rounded-lg -mx-3 px-3" : ""}`}
              >
                <div className="font-bold text-primary-700">{data.year}</div>
                <div className="text-neutral-800 font-semibold">
                  {data.beneficiaries.toLocaleString()}
                </div>
                <div className="text-neutral-800 font-semibold">
                  {data.programs}
                </div>
                <div className="text-neutral-800 font-semibold">
                  {data.budget}
                </div>
              </div>
            ))}

            {/* Visual growth indicator */}
            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-primary-600" />
                <h4 className="font-semibold text-primary-800">
                  Growth Highlights
                </h4>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-primary-600 font-bold text-lg">
                    388%
                  </span>
                  <p className="text-neutral-600">
                    Increase in beneficiaries since 2022
                  </p>
                </div>
                <div>
                  <span className="text-primary-600 font-bold text-lg">
                    350%
                  </span>
                  <p className="text-neutral-600">
                    Growth in active programs
                  </p>
                </div>
                <div>
                  <span className="text-primary-600 font-bold text-lg">
                    329%
                  </span>
                  <p className="text-neutral-600">
                    Budget growth reflecting trust and results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Data Disclaimer */}
      <section className="py-8 bg-neutral-50 border-t border-neutral-200">
        <Container size="md">
          <p className="text-center text-sm text-neutral-500">
            Data is updated regularly and reflects our best available metrics.
            All figures represent cumulative impact unless otherwise noted.
            For detailed methodology and data sources, please refer to our{" "}
            <Link
              href="/impact/annual-reports"
              className="text-primary-600 hover:text-primary-700 font-medium underline"
            >
              Annual Reports
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Be Part of Our Growing Impact"
        subtitle="Every dollar, partnership, and volunteer hour expands these numbers. Join us in making a measurable difference."
        primaryCta={{ label: "Donate Now", href: "/get-involved/donate" }}
        secondaryCta={{ label: "Partner With Us", href: "/get-involved/partner" }}
      />
    </>
  );
}
