import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Building2,
  Globe,
  GraduationCap,
  Landmark,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Lightbulb,
  Award,
  Heart,
  Mail,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with Hoop Africa Foundation to amplify your impact across Africa. Corporate, NGO, government, and academic partnerships welcome.",
};

const PARTNERSHIP_TYPES = [
  {
    title: "Corporate Partners",
    description:
      "Align your brand with social impact across Africa. Corporate partnerships include CSR integration, employee engagement programs, co-branded initiatives, and shared value creation.",
    icon: Building2,
    color: "bg-primary-600",
    benefits: [
      "Brand alignment with measurable social impact",
      "Employee volunteering and engagement opportunities",
      "Co-branded campaigns and storytelling",
      "CSR reporting and impact metrics",
      "Tax-efficient giving structures",
    ],
  },
  {
    title: "NGO & Non-Profit Partners",
    description:
      "Collaborate with us to extend reach, share resources, and co-implement programs across our 9 focus areas. Together, we multiply impact.",
    icon: Globe,
    color: "bg-accent-500",
    benefits: [
      "Joint program design and implementation",
      "Shared research and data resources",
      "Co-funding and grant applications",
      "Knowledge exchange and capacity building",
      "Geographic reach extension",
    ],
  },
  {
    title: "Government Partners",
    description:
      "We work with government agencies at local, national, and regional levels to align our programs with development priorities and policy goals.",
    icon: Landmark,
    color: "bg-secondary-500",
    benefits: [
      "Policy-aligned program implementation",
      "Community-level data and insights",
      "Public-private partnership models",
      "Capacity building for public servants",
      "Evidence-based policy recommendations",
    ],
  },
  {
    title: "Academic Partners",
    description:
      "Partner with us on research, student placements, and knowledge exchange. Our work provides rich ground for applied research and learning.",
    icon: GraduationCap,
    color: "bg-primary-800",
    benefits: [
      "Joint research projects and publications",
      "Student internship and placement programs",
      "Access to field-level data and communities",
      "Guest lectures and curriculum collaboration",
      "Conference and symposium partnerships",
    ],
  },
];

const PARTNERSHIP_BENEFITS = [
  {
    icon: BarChart3,
    title: "Measurable Impact",
    description:
      "Rigorous monitoring and evaluation with detailed impact reporting on your partnership outcomes.",
  },
  {
    icon: Target,
    title: "Strategic Alignment",
    description:
      "We customize partnerships to align with your specific goals, values, and areas of focus.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Deep community connections and on-the-ground teams in Namibia, Tanzania, and DR Congo.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description:
      "Access cutting-edge approaches in AI, climate tech, health economics, and sustainable agriculture.",
  },
  {
    icon: Award,
    title: "Credibility & Trust",
    description:
      "Registered non-profit with transparent governance, audited financials, and proven track record.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Models",
    description:
      "Proven program models ready to scale with the right partnerships and investment.",
  },
];

const CURRENT_PARTNERS_PLACEHOLDER = [
  { name: "Partner Organization 1", type: "Corporate" },
  { name: "Partner Organization 2", type: "NGO" },
  { name: "Partner Organization 3", type: "Academic" },
  { name: "Partner Organization 4", type: "Government" },
  { name: "Partner Organization 5", type: "Corporate" },
  { name: "Partner Organization 6", type: "NGO" },
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/get-involved"
              className="inline-flex items-center text-primary-200 hover:text-white text-sm mb-6 gap-1 transition-colors"
            >
              Get Involved
              <span className="mx-2">/</span>
              <span className="text-white">Partner With Us</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Partner <span className="text-secondary-400">With Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Great impact requires great collaboration. Partner with Hoop Africa
              Foundation to create sustainable change at scale across the
              continent.
            </p>
          </div>
        </Container>
      </section>

      {/* Partnership Stats */}
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                27+
              </div>
              <div className="text-sm text-neutral-600">Active Partnerships</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                3
              </div>
              <div className="text-sm text-neutral-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                9
              </div>
              <div className="text-sm text-neutral-600">Focus Areas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                10K+
              </div>
              <div className="text-sm text-neutral-600">Lives Impacted</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Partnership Opportunities"
            subtitle="We offer tailored partnerships for organizations of all types. Find the model that fits your goals."
          />

          <div className="space-y-12">
            {PARTNERSHIP_TYPES.map((type, index) => (
              <div
                key={type.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${type.color} rounded-xl`}
                    >
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="gap-2">
                      Discuss Partnership
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                  <Card hover={false}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-neutral-900 mb-4">
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {type.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm text-neutral-700"
                          >
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Why Partner With Hoop Africa?"
            subtitle="We bring unique value to every partnership through our deep roots in African communities."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERSHIP_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Our Partners"
            subtitle="We are proud to collaborate with organizations that share our vision for Africa's future."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CURRENT_PARTNERS_PLACEHOLDER.map((partner) => (
              <div
                key={partner.name}
                className="bg-neutral-50 rounded-xl p-6 flex flex-col items-center justify-center aspect-square border border-neutral-200"
              >
                <div className="w-16 h-16 bg-neutral-200 rounded-xl mb-3 flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-neutral-400" />
                </div>
                <p className="text-xs text-neutral-500 text-center font-medium">
                  {partner.name}
                </p>
                <Badge variant="outline" className="mt-2 text-[10px]">
                  {partner.type}
                </Badge>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <SectionHeading
            title="How It Works"
            subtitle="Our partnership onboarding is straightforward and tailored to your needs."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description:
                  "Reach out through our contact form or email. Tell us about your organization and goals.",
              },
              {
                step: "2",
                title: "Discovery Call",
                description:
                  "We schedule a call to explore alignment, discuss opportunities, and understand your vision.",
              },
              {
                step: "3",
                title: "Proposal & Agreement",
                description:
                  "We develop a customized partnership proposal with clear goals, timelines, and metrics.",
              },
              {
                step: "4",
                title: "Launch & Impact",
                description:
                  "We activate the partnership with dedicated support, regular reporting, and collaborative execution.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <Container size="md">
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-500/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 rounded-full translate-y-8 -translate-x-8" />

            <div className="relative z-10">
              <Handshake className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Partner?
              </h2>
              <p className="text-primary-100 mb-8 max-w-lg mx-auto">
                Let us explore how we can create shared value and lasting impact
                together. Our partnerships team is ready to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-secondary-500 hover:bg-secondary-600 gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Partnerships Team
                  </Button>
                </Link>
                <Link href="/impact/annual-reports">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2"
                  >
                    View Annual Reports
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
