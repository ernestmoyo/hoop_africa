import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Globe,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  GraduationCap,
  Calendar,
  Banknote,
  Laptop,
  Plane,
  Coffee,
  BookOpen,
  CheckCircle,
  Mail,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career with purpose at Hoop Africa Foundation. Explore open positions and join our team working to unlock Africa's human capital.",
};

const OPEN_POSITIONS = [
  {
    title: "Program Manager - Public Health",
    department: "Programs",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    posted: "2025-12-01",
    description:
      "Lead our public health initiatives in Tanzania, overseeing community health worker training, maternal health programs, and health economics research.",
    requirements: [
      "5+ years in public health program management",
      "MPH or equivalent qualification",
      "Experience working in Sub-Saharan Africa",
      "Strong M&E and data analysis skills",
    ],
  },
  {
    title: "Agricultural Development Officer",
    department: "Programs",
    location: "Windhoek, Namibia",
    type: "Full-time",
    posted: "2025-11-15",
    description:
      "Design and implement climate-smart agriculture programs, working directly with farming communities to improve food security and livelihoods.",
    requirements: [
      "3+ years in agricultural development",
      "Degree in agriculture, agronomy, or related field",
      "Experience with smallholder farming systems",
      "Community engagement and training skills",
    ],
  },
  {
    title: "Data & Impact Analyst",
    department: "Research & Development",
    location: "Remote (Africa-based preferred)",
    type: "Full-time",
    posted: "2025-11-20",
    description:
      "Build and maintain our impact measurement systems, analyze program data, and produce insights that drive strategic decisions across all focus areas.",
    requirements: [
      "3+ years in data analysis or M&E",
      "Proficiency in Python, R, or similar tools",
      "Experience with dashboard development",
      "Strong communication and visualization skills",
    ],
  },
  {
    title: "Partnerships & Development Coordinator",
    department: "Partnerships",
    location: "Windhoek, Namibia or Dar es Salaam, Tanzania",
    type: "Full-time",
    posted: "2025-12-05",
    description:
      "Cultivate and manage partnerships with corporate, NGO, government, and academic organizations. Lead fundraising initiatives and donor engagement.",
    requirements: [
      "3+ years in partnerships, fundraising, or business development",
      "Excellent written and verbal communication",
      "Grant writing experience",
      "Network within the development sector",
    ],
  },
  {
    title: "Communications & Content Specialist",
    department: "Communications",
    location: "Remote",
    type: "Contract (6 months)",
    posted: "2025-12-10",
    description:
      "Create compelling content across channels -- website, social media, reports, and campaigns -- that tells our impact story and engages stakeholders.",
    requirements: [
      "2+ years in nonprofit or development communications",
      "Strong writing and storytelling skills",
      "Social media management experience",
      "Design skills (Canva, Adobe) a plus",
    ],
  },
  {
    title: "Country Director - DR Congo",
    department: "Leadership",
    location: "Kinshasa, DR Congo",
    type: "Full-time",
    posted: "2025-10-28",
    description:
      "Oversee all Hoop Africa operations in the DRC. Lead strategy, team management, partner relations, and program delivery across multiple focus areas.",
    requirements: [
      "7+ years in NGO leadership or management",
      "Fluent in French and English",
      "Deep understanding of DRC context",
      "Proven leadership and team building skills",
    ],
  },
];

const BENEFITS = [
  {
    icon: Heart,
    title: "Purpose-Driven Work",
    description: "Every day, your work directly contributes to transforming lives across Africa.",
  },
  {
    icon: Globe,
    title: "Pan-African Exposure",
    description: "Work across Namibia, Tanzania, and DRC with diverse teams and communities.",
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description: "Continuous learning, mentorship, and leadership development opportunities.",
  },
  {
    icon: Laptop,
    title: "Flexible Work",
    description: "Remote and hybrid options available. We prioritize results over rigid schedules.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual professional development allowance for courses, conferences, and certifications.",
  },
  {
    icon: Plane,
    title: "Travel Opportunities",
    description: "Regular travel to program sites and partner meetings across the continent.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Generous leave policy, wellness support, and a culture that respects personal time.",
  },
  {
    icon: Users,
    title: "Diverse Team",
    description: "Join a multicultural team united by the mission to unlock Africa's potential.",
  },
];

const VALUES = [
  {
    title: "Community First",
    description: "Decisions are guided by the needs and voices of the communities we serve.",
  },
  {
    title: "Radical Transparency",
    description: "Open books, honest reporting, and accountability at every level.",
  },
  {
    title: "Innovation",
    description: "We embrace new ideas, technologies, and approaches to tackle old challenges.",
  },
  {
    title: "Collaboration",
    description: "We believe the best solutions come from working together, inside and outside our walls.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 90%, rgba(255,255,255,0.2) 1px, transparent 1px)",
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
              <span className="text-white">Careers</span>
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Build Your <span className="text-secondary-400">Career</span>{" "}
                With Purpose
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Join a team of passionate changemakers working to unlock Africa&apos;s
              human capital. We are looking for talented individuals who want
              their work to matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge className="bg-secondary-500/20 text-secondary-200 border border-secondary-400/30 text-sm px-4 py-1.5">
                {OPEN_POSITIONS.length} Open Positions
              </Badge>
              <Badge className="bg-white/10 text-primary-100 border border-white/20 text-sm px-4 py-1.5">
                3 Countries
              </Badge>
              <Badge className="bg-white/10 text-primary-100 border border-white/20 text-sm px-4 py-1.5">
                Remote Options Available
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Culture */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Our Culture & Values"
            subtitle="We are building an organization where impact and well-being go hand in hand."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-primary-50 rounded-xl p-6 border border-primary-100"
              >
                <h3 className="font-bold text-primary-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  What It&apos;s Like to Work Here
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  At Hoop Africa Foundation, you will not find rigid hierarchies
                  or siloed departments. We are a lean, agile team where every
                  voice matters and every role has direct visibility into our
                  impact.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Whether you are in Windhoek, Dar es Salaam, Kinshasa, or
                  working remotely, you will be part of a collaborative culture
                  that celebrates diverse perspectives and bold ideas.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-8 text-center">
                <Lightbulb className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                <p className="text-white font-medium text-lg mb-2">
                  &ldquo;The best part of working at Hoop Africa is knowing that
                  what I do today will improve someone's tomorrow.&rdquo;
                </p>
                <p className="text-primary-200 text-sm">
                  -- Team Member, Namibia Office
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Open Positions"
            subtitle="Find your next role and start making an impact."
          />

          <div className="space-y-6">
            {OPEN_POSITIONS.map((position) => (
              <Card key={position.title} hover={false}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Position Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-lg font-bold text-neutral-900">
                          {position.title}
                        </h3>
                        <Badge
                          variant={
                            position.type === "Full-time" ? "primary" : "secondary"
                          }
                        >
                          {position.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-primary-500" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-primary-500" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-primary-500" />
                          Posted{" "}
                          {new Date(position.posted).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                        {position.description}
                      </p>

                      <div>
                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                          Key Requirements
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {position.requirements.map((req) => (
                            <li
                              key={req}
                              className="flex items-start gap-1.5 text-sm text-neutral-600"
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-accent-500 flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex-shrink-0 md:self-center">
                      <Link href="/contact">
                        <Button className="gap-2 w-full md:w-auto">
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Why Work With Us"
            subtitle="We invest in our team because great work requires a great environment."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-8 h-8 text-primary-600 mb-4" />
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

      {/* Don't See Your Role? */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-neutral-600 mb-8 max-w-xl mx-auto leading-relaxed">
              We are always interested in hearing from talented individuals.
              Send us your CV and a cover letter explaining how you could
              contribute to our mission, and we will keep you in mind for future
              openings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Send Open Application
                </Button>
              </Link>
              <Link href="/get-involved/volunteer">
                <Button variant="outline" size="lg" className="gap-2">
                  Volunteer Instead
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Not Looking for a Job? You Can Still Help"
        subtitle="Support our team and programs through a donation, partnership, or by volunteering your time."
        primaryCta={{ label: "Donate", href: "/get-involved/donate" }}
        secondaryCta={{ label: "Partner With Us", href: "/get-involved/partner" }}
      />
    </>
  );
}
