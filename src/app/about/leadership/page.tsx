import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Linkedin,
  Mail,
  ArrowRight,
  Quote,
  UserCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leadership Team",
  description:
    "Meet the dedicated African leaders driving Hoop Africa Foundation's strategy, partnerships, and impact across the continent.",
};

interface TeamMember {
  name: string;
  title: string;
  location: string;
  bio: string;
  focus: string[];
}

const executiveTeam: TeamMember[] = [
  {
    name: "Coming Soon",
    title: "Executive Director",
    location: "Dar es Salaam, Tanzania",
    bio: "Our Executive Director leads the Foundation's overall strategy and operations, ensuring alignment between our mission and on-the-ground impact across all three countries of operation.",
    focus: ["Strategy", "Operations", "Partnerships"],
  },
  {
    name: "Coming Soon",
    title: "Deputy Director — Programs",
    location: "Windhoek, Namibia",
    bio: "Overseeing all focus area programs, the Deputy Director ensures that initiatives are well-coordinated, evidence-based, and delivering measurable outcomes for communities.",
    focus: ["Program Management", "Impact Measurement", "Innovation"],
  },
  {
    name: "Coming Soon",
    title: "Director of Research & Development",
    location: "Dar es Salaam, Tanzania",
    bio: "Leading the Foundation's research agenda, this role drives evidence-based policy development and ensures our programs are grounded in rigorous analysis.",
    focus: ["Research", "Policy", "Data Analytics"],
  },
];

const seniorTeam: TeamMember[] = [
  {
    name: "Coming Soon",
    title: "Country Director — Namibia",
    location: "Windhoek, Namibia",
    bio: "Manages all Foundation programs and partnerships in Namibia, adapting our continental strategy to the unique needs and opportunities of Namibian communities.",
    focus: ["Namibia Operations", "Community Engagement"],
  },
  {
    name: "Coming Soon",
    title: "Country Director — DR Congo",
    location: "Kinshasa, DR Congo",
    bio: "Leads program implementation in the DRC, navigating complex operational environments to deliver impactful initiatives in health, education, and empowerment.",
    focus: ["DRC Operations", "Health Programs"],
  },
  {
    name: "Coming Soon",
    title: "Head of Public Health",
    location: "Dar es Salaam, Tanzania",
    bio: "Designs and implements public health and health economics programs, working to make quality healthcare accessible and equitable across the regions we serve.",
    focus: ["Public Health", "Health Economics"],
  },
  {
    name: "Coming Soon",
    title: "Head of Education & Empowerment",
    location: "Windhoek, Namibia",
    bio: "Develops education and social empowerment programs that equip youth and women with the skills, confidence, and opportunities to thrive.",
    focus: ["Education", "Youth Development"],
  },
  {
    name: "Coming Soon",
    title: "Head of Technology & Innovation",
    location: "Dar es Salaam, Tanzania",
    bio: "Leads the Foundation's technology strategy, applying AI, data science, and emerging technologies to amplify impact across all focus areas.",
    focus: ["Emerging Tech", "Digital Transformation"],
  },
  {
    name: "Coming Soon",
    title: "Head of Partnerships & Fundraising",
    location: "Windhoek, Namibia",
    bio: "Builds and nurtures relationships with donors, corporate partners, and international organizations to sustain and scale the Foundation's work.",
    focus: ["Fundraising", "Donor Relations"],
  },
];

function TeamMemberCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <Card hover={false} className={featured ? "border-primary-200 shadow-md" : ""}>
      <CardContent className={featured ? "p-8" : "p-6"}>
        <div className="flex flex-col items-center text-center">
          {/* Photo Placeholder */}
          <div
            className={`${
              featured ? "w-32 h-32" : "w-24 h-24"
            } rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-4 border-4 border-white shadow-md`}
          >
            <UserCircle
              className={`${
                featured ? "w-16 h-16" : "w-12 h-12"
              } text-primary-400`}
            />
          </div>

          {/* Name and Title */}
          <h3
            className={`${
              featured ? "text-xl" : "text-lg"
            } font-bold text-neutral-900 mb-1`}
          >
            {member.name}
          </h3>
          <p className="text-primary-600 font-medium text-sm mb-1">
            {member.title}
          </p>
          <p className="text-neutral-500 text-xs mb-4">{member.location}</p>

          {/* Bio */}
          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>

          {/* Focus Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {member.focus.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Social Links Placeholder */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
            <button
              aria-label={`Email ${member.name}`}
              className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-primary-100 transition-colors"
            >
              <Mail className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              aria-label={`LinkedIn profile of ${member.name}`}
              className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-primary-100 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LeadershipPage() {
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
              <span className="text-white">Leadership Team</span>
            </p>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Our People
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Leadership Team
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {SITE_NAME} is driven by a team of dedicated African
              professionals with deep expertise in development, research,
              technology, and community engagement.
            </p>
          </div>
        </Container>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-white border-b border-neutral-100">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <p className="text-xl text-neutral-700 italic leading-relaxed">
                &ldquo;Our strength lies in our people. Every member of the Hoop
                Africa team brings not just expertise, but a deep personal
                commitment to Africa&apos;s transformation. We are not outsiders
                looking in — we are Africans building our own future.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Executive Leadership"
            subtitle="The senior leaders guiding the Foundation's strategic direction and daily operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {executiveTeam.map((member) => (
              <TeamMemberCard
                key={member.title}
                member={member}
                featured
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Senior Team */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Senior Team"
            subtitle="The professionals leading programs, partnerships, and operations across our focus areas and countries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {seniorTeam.map((member) => (
              <TeamMemberCard key={member.title} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-neutral-50">
        <Container size="lg">
          <SectionHeading
            title="Advisory Board"
            subtitle="We are assembling an advisory board of respected African leaders and global experts."
          />

          <div className="mt-12 bg-white rounded-2xl border border-neutral-200 p-8 md:p-12 text-center">
            <Users className="w-16 h-16 text-primary-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Advisory Board Coming Soon
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-6">
              We are currently assembling a diverse advisory board comprising
              African thought leaders, academics, policy experts, and
              development practitioners. These advisors will provide strategic
              guidance, governance oversight, and connections to amplify our
              impact.
            </p>
            <p className="text-neutral-500 text-sm">
              Interested in joining our advisory board?{" "}
              <Link
                href="/contact"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Get in touch
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* Join the Team */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Join Our Team
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We are always looking for passionate, skilled individuals who
                share our commitment to Africa&apos;s transformation. Whether
                you&apos;re an experienced professional or an emerging leader,
                there may be a place for you at {SITE_NAME}.
              </p>
              <div className="space-y-4">
                {[
                  "Competitive compensation aligned with the non-profit sector",
                  "Opportunity to work across multiple African countries",
                  "Collaborative, mission-driven team culture",
                  "Professional development and growth opportunities",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    <p className="text-neutral-700 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/get-involved/careers"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  View open positions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "3", label: "Countries of Operation" },
                { number: "9", label: "Focus Areas" },
                { number: "10+", label: "Team Members" },
                { number: "25+", label: "Community Partners" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 border border-neutral-200 text-center"
                >
                  <p className="text-3xl font-bold text-primary-600">
                    {stat.number}
                  </p>
                  <p className="text-neutral-600 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Next Pages */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/about/mission-vision" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Previous</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Mission & Vision
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    The mission and vision guiding our work.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/about/governance" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Next</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Governance
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Our commitment to transparency and accountability.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Work With Us"
        subtitle="Whether as a team member, advisor, or volunteer, join the movement to unlock Africa's human capital."
        primaryCta={{ label: "View Careers", href: "/get-involved/careers" }}
        secondaryCta={{ label: "Volunteer", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
