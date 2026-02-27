import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Handshake,
  UserPlus,
  Briefcase,
  ArrowRight,
  Globe,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Hoop Africa Foundation in unlocking Africa's human capital. Donate, partner, volunteer, or explore career opportunities.",
};

const INVOLVEMENT_OPTIONS = [
  {
    title: "Donate",
    description:
      "Your financial contribution directly funds programs that transform lives. Every dollar counts -- 92% goes straight to programs on the ground.",
    href: "/get-involved/donate",
    icon: Heart,
    color: "bg-secondary-500",
    hoverColor: "group-hover:bg-secondary-600",
    badge: "Most Popular",
    cta: "Donate Now",
  },
  {
    title: "Partner With Us",
    description:
      "Join forces with us as a corporate partner, NGO collaborator, government agency, or academic institution to amplify our collective impact.",
    href: "/get-involved/partner",
    icon: Handshake,
    color: "bg-primary-600",
    hoverColor: "group-hover:bg-primary-700",
    badge: null,
    cta: "Explore Partnerships",
  },
  {
    title: "Volunteer",
    description:
      "Share your skills and time to make a direct impact. We offer both on-the-ground and remote volunteering opportunities across all focus areas.",
    href: "/get-involved/volunteer",
    icon: UserPlus,
    color: "bg-accent-500",
    hoverColor: "group-hover:bg-accent-600",
    badge: null,
    cta: "View Opportunities",
  },
  {
    title: "Careers",
    description:
      "Build a meaningful career with us. We are looking for passionate individuals who want to drive systemic change across the African continent.",
    href: "/get-involved/careers",
    icon: Briefcase,
    color: "bg-primary-700",
    hoverColor: "group-hover:bg-primary-800",
    badge: "Hiring",
    cta: "See Open Positions",
  },
];

const WHY_JOIN = [
  {
    icon: Globe,
    title: "Continental Reach",
    description:
      "Our work spans Namibia, Tanzania, and the DRC, with a vision to expand across the continent.",
  },
  {
    icon: TrendingUp,
    title: "Proven Impact",
    description:
      "Over 10,000 lives impacted, 18 active programs, and transparent reporting on every dollar spent.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "We work hand-in-hand with local communities to ensure sustainable, locally-owned solutions.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Led",
    description:
      "From AI to climate tech, we leverage cutting-edge solutions to tackle Africa's most pressing challenges.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-primary-100 text-sm font-medium rounded-full mb-6 border border-white/20">
              Every Action Counts
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get <span className="text-secondary-400">Involved</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              There are many ways to support Africa&apos;s transformation. Whether
              you give, partner, volunteer, or join our team, your contribution
              creates ripples of lasting change.
            </p>
          </div>
        </Container>
      </section>

      {/* Involvement Options */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Choose How to Make a Difference"
            subtitle="Select the path that aligns with your passion, skills, and resources."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {INVOLVEMENT_OPTIONS.map((option) => (
              <Link key={option.href} href={option.href} className="group">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 ${option.color} ${option.hoverColor} rounded-xl transition-colors`}
                      >
                        <option.icon className="w-7 h-7 text-white" />
                      </div>
                      {option.badge && (
                        <span className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-semibold rounded-full">
                          {option.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {option.description}
                    </p>

                    <span className="inline-flex items-center text-primary-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                      {option.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Get Involved */}
      <section className="py-20 bg-primary-50">
        <Container>
          <SectionHeading
            title="Why Join the Hoop Africa Community?"
            subtitle="When you get involved, you become part of a movement that is reshaping Africa's future."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_JOIN.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4">
                  <reason.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Donate CTA */}
      <section className="py-20">
        <Container size="md">
          <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-8 -translate-x-8" />

            <div className="relative z-10">
              <Heart className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Make an Immediate Impact
              </h2>
              <p className="text-white/90 mb-8 max-w-lg mx-auto">
                A donation of just $25 can provide school supplies for 5 students.
                $100 can train a community health worker. Every amount matters.
              </p>
              <Link href="/get-involved/donate">
                <Button
                  size="lg"
                  className="bg-white text-secondary-700 hover:bg-neutral-100 gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Make a Difference?"
        subtitle="Join thousands of supporters who believe in Africa's potential. Together, we can unlock human capital across the continent."
        primaryCta={{ label: "Donate Now", href: "/get-involved/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
