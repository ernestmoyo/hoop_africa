import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  ArrowRight,
  Heart,
  Shield,
  Megaphone,
  UserCheck,
  Handshake,
  Award,
  Quote,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Social & Economic Empowerment",
  description:
    "Hoop Africa Foundation drives youth empowerment, gender equity, and inclusive community development across the African continent.",
};

const programs = [
  {
    title: "Youth Leadership Academy",
    description:
      "A comprehensive leadership development program for young Africans aged 18-30, building skills in civic engagement, community organizing, project management, and social entrepreneurship.",
    status: "Active",
    location: "Tanzania, Namibia, DR Congo",
  },
  {
    title: "Women's Economic Empowerment Initiative",
    description:
      "Supporting women through business training, access to capital, mentorship networks, and advocacy for policies that remove barriers to women's full economic participation.",
    status: "Active",
    location: "Tanzania, DR Congo",
  },
  {
    title: "Community Development Grants Program",
    description:
      "Providing small grants and technical support to community-based organizations leading grassroots development projects in health, education, and livelihoods.",
    status: "Active",
    location: "Pan-African",
  },
  {
    title: "Inclusive Governance & Civic Participation",
    description:
      "Strengthening civic engagement by training community members in advocacy, governance oversight, and participation in local decision-making processes.",
    status: "Ongoing",
    location: "Tanzania, Namibia",
  },
];

const metrics = [
  { value: "2,200+", label: "Youth Leaders Trained" },
  { value: "850", label: "Women Entrepreneurs Supported" },
  { value: "40", label: "Community Grants Awarded" },
  { value: "78%", label: "of Participants Report Increased Civic Engagement" },
];

export default function EmpowermentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-secondary-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-6"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              All Focus Areas
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-pink-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Social & Economic{" "}
              <span className="text-secondary-500">Empowerment</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Empowering youth, advancing gender equity, and fostering
              inclusive community development to unlock Africa&apos;s full
              human potential.
            </p>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why This Matters"
                subtitle="True development happens when every person has the agency and opportunity to shape their own future."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Africa is the world&apos;s youngest continent, yet its youth
                  face staggering barriers to participation in economic and
                  civic life. Over 60% of Africa&apos;s population is under 25,
                  but youth unemployment and underemployment remain critically
                  high, and young voices are often excluded from governance
                  and decision-making.
                </p>
                <p>
                  Gender inequality persists as a major barrier to development.
                  Women in Sub-Saharan Africa face gaps in education, economic
                  participation, and political representation. When women and
                  girls are empowered, entire communities thrive -- yet
                  systemic barriers continue to limit their potential.
                </p>
                <p>
                  Community-led development produces more sustainable outcomes
                  than top-down approaches, yet local organizations often lack
                  the resources, training, and networks to maximize their
                  impact. Investing in community capacity is investing in
                  lasting change.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  stat: "60%+",
                  label: "of Africa's population is under 25 years old",
                },
                {
                  icon: UserCheck,
                  stat: "Low",
                  label: "youth participation in governance and civic life",
                },
                {
                  icon: Shield,
                  stat: "Persistent",
                  label: "gender gaps in education and economic opportunity",
                },
                {
                  icon: Handshake,
                  stat: "Growing",
                  label: "demand for community-led development approaches",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 bg-primary-50 rounded-xl border border-primary-100"
                >
                  <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                  <p className="text-2xl font-bold text-primary-900">
                    {item.stat}
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Our Approach"
            subtitle="We empower individuals, strengthen communities, and advocate for systemic change."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Youth Leadership",
                description:
                  "We invest in young leaders through structured programs that build skills in leadership, social entrepreneurship, and civic engagement, creating a pipeline of change-makers.",
              },
              {
                icon: Heart,
                title: "Gender Equity",
                description:
                  "We create pathways for women's economic independence through business training, access to capital, mentorship, and advocacy for gender-responsive policies.",
              },
              {
                icon: Megaphone,
                title: "Community Voice",
                description:
                  "We strengthen grassroots organizations and amplify community voices in local governance, ensuring that development priorities are set by the people they affect.",
              },
            ].map((approach) => (
              <Card key={approach.title} hover={false}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                    <approach.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs & Initiatives */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Programs & Initiatives"
            subtitle="From youth academies to women's empowerment, our programs build agency and opportunity."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.title}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="primary">{program.status}</Badge>
                    <span className="text-sm text-neutral-500">
                      {program.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto">
              Empowering people to lead change in their own communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">
                  {metric.value}
                </p>
                <p className="text-primary-200 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Story / Quote */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-primary-100">
            <Quote className="w-12 h-12 text-primary-200 mb-6" />
            <blockquote className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8 font-medium">
              &ldquo;Empowerment is not something we give to people -- it is
              something we help them discover within themselves. When a young
              woman starts a business, when a youth leader transforms their
              community, that is the change that lasts generations.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Empowerment Team
                </p>
                <p className="text-sm text-neutral-500">
                  Youth Leadership Academy
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Related Resources"
            subtitle="Learn more about our empowerment programs and the communities they serve."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Youth Empowerment Framework",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Gender Equity Impact Report",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Community Leader Stories",
                type: "Impact Story",
                href: "/impact/stories",
              },
            ].map((resource) => (
              <Link key={resource.title} href={resource.href} className="group">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {resource.type}
                      </Badge>
                      <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Empower Communities, Transform Africa"
        subtitle="Help us invest in youth leadership, gender equity, and community-driven development that creates lasting change."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
