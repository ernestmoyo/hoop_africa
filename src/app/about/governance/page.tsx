import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  FileText,
  Scale,
  Eye,
  CheckCircle,
  BookOpen,
  ArrowRight,
  Building2,
  ClipboardCheck,
  Lock,
  Users,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME, REGISTRATION_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Hoop Africa Foundation is committed to transparency, accountability, and ethical governance. Learn about our constitution, registration, and governance framework.",
};

const governancePrinciples = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We maintain open, honest communication with all stakeholders. Our finances, strategies, and outcomes are documented and accessible.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description:
      "Every team member, partner, and beneficiary can hold us accountable. We measure impact rigorously and report honestly on both successes and challenges.",
  },
  {
    icon: Shield,
    title: "Ethical Conduct",
    description:
      "We adhere to the highest ethical standards in all operations, partnerships, and decision-making processes.",
  },
  {
    icon: Users,
    title: "Inclusive Governance",
    description:
      "Our governance structures ensure diverse perspectives are represented, with particular attention to the voices of the communities we serve.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance",
    description:
      "We comply with all applicable laws and regulations in every country where we operate, maintaining proper registrations and filings.",
  },
  {
    icon: BarChart3,
    title: "Stewardship",
    description:
      "We are responsible stewards of the resources entrusted to us, ensuring maximum impact from every contribution received.",
  },
];

const constitutionHighlights = [
  {
    title: "Legal Name & Status",
    content:
      "Hoop Africa Foundation is registered as a non-profit organization under Section 21 of the Tanzania Companies Act.",
  },
  {
    title: "Objects of the Foundation",
    content:
      "The Constitution outlines nine strategic focus areas spanning public health, education, agriculture, climate action, energy, poverty reduction, emerging technologies, R&D, and social empowerment.",
  },
  {
    title: "Board of Directors",
    content:
      "The Foundation is governed by a Board of Directors responsible for strategic oversight, fiduciary duty, and ensuring alignment with the organization's mission.",
  },
  {
    title: "Financial Management",
    content:
      "Strict financial controls, regular audits, and transparent reporting mechanisms are mandated by the Constitution to safeguard donor funds and organizational resources.",
  },
  {
    title: "Amendments & Dissolution",
    content:
      "The Constitution includes clear processes for amendments and, should it ever be necessary, the equitable distribution of assets upon dissolution.",
  },
  {
    title: "Conflict of Interest",
    content:
      "Robust conflict of interest policies ensure that all decisions are made in the best interest of the Foundation and the communities it serves.",
  },
];

export default function GovernancePage() {
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
              <span className="text-white">Governance</span>
            </p>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Accountability & Transparency
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Governance
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Good governance is the foundation of trust. We are committed to
              the highest standards of transparency, accountability, and ethical
              conduct in everything we do.
            </p>
          </div>
        </Container>
      </section>

      {/* Registration Details */}
      <section className="py-16 bg-white border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Registration Type
                </h3>
                <p className="text-neutral-600 text-sm">
                  {REGISTRATION_INFO.type} Non-Profit Organization
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Registration Number
                </h3>
                <p className="text-neutral-600 text-sm">
                  {REGISTRATION_INFO.number}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                <Lock className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Country of Registration
                </h3>
                <p className="text-neutral-600 text-sm">
                  {REGISTRATION_INFO.country}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Governance Principles */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Our Governance Principles"
            subtitle="The values and standards that guide how we manage resources, make decisions, and serve communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {governancePrinciples.map((principle) => (
              <Card key={principle.title} hover={false}>
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Constitution */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                      Founding Document
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Our Constitution
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  The Hoop Africa Foundation Constitution was adopted on August
                  8, 2025, in Windhoek, Namibia. It serves as the legal and
                  operational framework for all Foundation activities, ensuring
                  we remain true to our mission while maintaining the highest
                  standards of governance.
                </p>
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <p className="text-sm text-primary-800 font-medium mb-2">
                    Adoption Date
                  </p>
                  <p className="text-primary-900 font-bold">
                    August 8, 2025 — Windhoek, Namibia
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                Key Constitutional Provisions
              </h3>
              <div className="space-y-4">
                {constitutionHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="bg-neutral-50 rounded-xl p-6 border border-neutral-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Governance Structure */}
      <section className="py-20 bg-neutral-50">
        <Container size="lg">
          <SectionHeading
            title="Governance Structure"
            subtitle="How decisions are made and accountability is maintained at every level."
          />

          <div className="mt-12 space-y-6">
            {/* Board */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-secondary-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Board of Directors</h3>
                  <p className="text-primary-100 leading-relaxed">
                    The Board provides strategic oversight, approves annual
                    budgets and plans, ensures regulatory compliance, and holds
                    the executive team accountable for delivering on the
                    Foundation&apos;s mission. Board members serve defined terms
                    and bring diverse expertise across sectors and geographies.
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Management */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Executive Management
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    The Executive Director and senior leadership team are
                    responsible for day-to-day operations, program
                    implementation, partnership development, and team management.
                    They report regularly to the Board and ensure that
                    organizational activities align with strategic goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Country Operations */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-accent-100 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-accent-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Country-Level Operations
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Country Directors in Namibia, Tanzania, and the DR Congo
                    manage local teams, community relationships, and program
                    delivery. They ensure that the Foundation&apos;s global
                    strategy is adapted appropriately to local contexts,
                    regulations, and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <SectionHeading
            title="Our Commitments to Stakeholders"
            subtitle="What you can expect from us as a partner, donor, beneficiary, or community member."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "To Donors & Partners",
                items: [
                  "Regular financial reporting and impact updates",
                  "Annual audited financial statements",
                  "Clear documentation of how funds are allocated and used",
                  "Open communication channels for questions and feedback",
                ],
              },
              {
                title: "To Communities We Serve",
                items: [
                  "Culturally sensitive, community-led program design",
                  "Transparent communication about program goals and timelines",
                  "Feedback mechanisms to ensure community voices are heard",
                  "Long-term commitment to sustainable outcomes",
                ],
              },
              {
                title: "To Our Team",
                items: [
                  "Safe, respectful, and inclusive work environment",
                  "Fair compensation and professional development",
                  "Clear policies on conduct, grievance, and whistleblowing",
                  "Opportunities for growth within the organization",
                ],
              },
              {
                title: "To the Public",
                items: [
                  "Published annual reports and impact data",
                  "Accessible information about our programs and operations",
                  "Responsiveness to media and public inquiries",
                  "Commitment to evidence-based advocacy",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-neutral-50 rounded-xl p-6 border border-neutral-200"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Next Pages */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/about/leadership" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Previous</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Leadership Team
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Meet the people driving our mission forward.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/about/where-we-work" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Next</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Where We Work
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Our operations across Namibia, Tanzania, and DR Congo.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Trust Is Earned"
        subtitle="We are committed to earning and maintaining your trust through transparent operations, measurable results, and ethical conduct."
        primaryCta={{ label: "Partner With Us", href: "/get-involved/partner" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
