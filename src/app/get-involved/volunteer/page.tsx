import type { Metadata } from "next";
import Link from "next/link";
import {
  UserPlus,
  MapPin,
  Clock,
  Laptop,
  Globe,
  Heart,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  Stethoscope,
  Sprout,
  BarChart3,
  Megaphone,
  Code,
  Palette,
  BookOpen,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer with Hoop Africa Foundation. Share your skills and make a direct impact on communities across Africa.",
};

const VOLUNTEER_OPPORTUNITIES = [
  {
    title: "Health Program Support",
    type: "On-site",
    location: "Tanzania, DRC",
    commitment: "3-6 months",
    description:
      "Support community health workers with training, data collection, and program coordination in rural health facilities.",
    icon: Stethoscope,
    skills: ["Healthcare background", "Data collection", "Training facilitation"],
    status: "Open",
  },
  {
    title: "Agricultural Extension Volunteer",
    type: "On-site",
    location: "Tanzania, Namibia",
    commitment: "2-4 months",
    description:
      "Work alongside farming communities to implement climate-smart agricultural practices and value-chain development.",
    icon: Sprout,
    skills: ["Agricultural knowledge", "Community engagement", "Training skills"],
    status: "Open",
  },
  {
    title: "Software Developer (Remote)",
    type: "Remote",
    location: "Anywhere",
    commitment: "5-10 hrs/week",
    description:
      "Help build and maintain digital tools for our programs, including data dashboards, mobile apps, and internal systems.",
    icon: Code,
    skills: ["React/Next.js", "Python", "Database design"],
    status: "Open",
  },
  {
    title: "Graphic Design & Communications",
    type: "Remote",
    location: "Anywhere",
    commitment: "5-8 hrs/week",
    description:
      "Create compelling visual content, reports, social media assets, and marketing materials that tell our impact stories.",
    icon: Palette,
    skills: ["Graphic design", "Adobe Creative Suite", "Social media"],
    status: "Open",
  },
  {
    title: "Research & Data Analysis",
    type: "Hybrid",
    location: "Namibia, Remote",
    commitment: "3-6 months",
    description:
      "Support our research team with data analysis, literature reviews, and evidence-based program evaluations.",
    icon: BarChart3,
    skills: ["Research methodology", "Data analysis", "Academic writing"],
    status: "Open",
  },
  {
    title: "Fundraising & Grant Writing",
    type: "Remote",
    location: "Anywhere",
    commitment: "5-10 hrs/week",
    description:
      "Help identify funding opportunities, write grant proposals, and develop donor engagement strategies.",
    icon: Megaphone,
    skills: ["Grant writing", "Fundraising", "Donor relations"],
    status: "Coming Soon",
  },
];

const REQUIREMENTS = [
  {
    title: "Minimum Age",
    description: "Must be 18 years or older. Some roles may require 21+.",
    icon: Users,
  },
  {
    title: "Background Check",
    description:
      "Required for all on-site volunteers working with communities.",
    icon: CheckCircle,
  },
  {
    title: "Time Commitment",
    description:
      "Varies by role. On-site roles require minimum commitment; remote roles are flexible.",
    icon: Clock,
  },
  {
    title: "Language",
    description:
      "English required. French helpful for DRC. Swahili helpful for Tanzania.",
    icon: Globe,
  },
];

const VOLUNTEER_JOURNEY = [
  {
    step: "1",
    title: "Apply Online",
    description: "Submit your application with your skills, interests, and availability.",
  },
  {
    step: "2",
    title: "Interview & Matching",
    description: "We match your skills and goals with the right opportunity and team.",
  },
  {
    step: "3",
    title: "Onboarding & Training",
    description: "Receive orientation, cultural training, and role-specific preparation.",
  },
  {
    step: "4",
    title: "Make an Impact",
    description: "Begin your volunteer assignment with ongoing support and mentorship.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px)",
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
              <span className="text-white">Volunteer</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Volunteer <span className="text-secondary-400">With Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Your skills can change lives. Whether on the ground in Africa or
              from anywhere in the world, we have meaningful ways for you to
              contribute.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-primary-100">
                <MapPin className="w-4 h-4" />
                On-site & Remote Roles
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-primary-100">
                <Clock className="w-4 h-4" />
                Flexible Commitments
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-primary-100">
                <Heart className="w-4 h-4" />
                Meaningful Impact
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Current Opportunities */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Current Volunteer Opportunities"
            subtitle="Browse available positions and find where your skills can make the biggest difference."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {VOLUNTEER_OPPORTUNITIES.map((opportunity) => (
              <Card key={opportunity.title} className="flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl">
                      <opportunity.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={
                          opportunity.type === "Remote"
                            ? "accent"
                            : opportunity.type === "On-site"
                            ? "primary"
                            : "secondary"
                        }
                      >
                        {opportunity.type}
                      </Badge>
                      {opportunity.status === "Coming Soon" && (
                        <Badge variant="outline">Coming Soon</Badge>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed flex-1">
                    {opportunity.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Clock className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {opportunity.commitment}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Skills Needed
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {opportunity.status === "Open" ? (
                    <Link href="/contact">
                      <Button variant="outline" className="w-full gap-2">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="ghost" disabled className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer Journey */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <SectionHeading
            title="Your Volunteer Journey"
            subtitle="From application to impact, here is what to expect."
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {VOLUNTEER_JOURNEY.map((item, index) => (
              <div key={item.step} className="text-center relative">
                {index < VOLUNTEER_JOURNEY.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-primary-200" />
                )}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full mb-4 relative z-10">
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

      {/* Requirements */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Volunteer Requirements"
            subtitle="What you need to know before applying."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REQUIREMENTS.map((req) => (
              <div
                key={req.title}
                className="bg-white p-6 rounded-xl border border-neutral-200"
              >
                <req.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-neutral-900 mb-2">
                  {req.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer Testimonial */}
      <section className="py-20 bg-neutral-50">
        <Container size="md">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-neutral-200 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-primary-600" />
            </div>
            <blockquote className="text-xl md:text-2xl text-neutral-800 font-medium mb-6 leading-relaxed italic">
              &ldquo;Volunteering with Hoop Africa was the most transformative
              experience of my career. I came to share my skills, but I left
              with a completely new perspective on what impact truly means.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-neutral-900">Dr. Elena Fischer</p>
              <p className="text-sm text-neutral-500">
                Public Health Volunteer, Tanzania 2024
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Apply CTA */}
      <section className="py-20">
        <Container size="md">
          <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-8 -translate-x-8" />

            <div className="relative z-10">
              <UserPlus className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Volunteer?
              </h2>
              <p className="text-white/90 mb-8 max-w-lg mx-auto">
                Submit your application today and start your journey toward
                meaningful impact. We welcome volunteers from all backgrounds
                and experience levels.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-accent-700 hover:bg-neutral-100 gap-2"
                  >
                    Apply to Volunteer
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/get-involved/careers">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2"
                  >
                    View Paid Positions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Not Ready to Volunteer? You Can Still Help"
        subtitle="A donation of any size supports the programs our volunteers help implement on the ground."
        primaryCta={{ label: "Donate Now", href: "/get-involved/donate" }}
        secondaryCta={{ label: "Learn More", href: "/impact" }}
      />
    </>
  );
}
