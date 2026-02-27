import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  ArrowRight,
  Brain,
  Database,
  Wifi,
  Smartphone,
  Code,
  Layers,
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
  title: "Emerging Technologies",
  description:
    "Hoop Africa Foundation leverages AI, data science, and automation to solve African challenges and create opportunities for innovation across the continent.",
};

const programs = [
  {
    title: "AI for Development Lab",
    description:
      "Applying artificial intelligence and machine learning to solve pressing African challenges in agriculture, healthcare, education, and urban planning.",
    status: "Active",
    location: "Tanzania, Namibia",
  },
  {
    title: "Data Science Training Program",
    description:
      "Training the next generation of African data scientists through intensive bootcamps, mentorship, and real-world project experience with development organizations.",
    status: "Active",
    location: "Pan-African",
  },
  {
    title: "Digital Infrastructure Advisory",
    description:
      "Advising governments and organizations on building digital infrastructure -- from connectivity to data governance -- that supports inclusive digital transformation.",
    status: "Ongoing",
    location: "Tanzania, DR Congo",
  },
  {
    title: "Tech Innovation Challenge",
    description:
      "An annual competition that funds and mentors African startups developing technology solutions for sustainable development challenges on the continent.",
    status: "Annual",
    location: "Pan-African",
  },
];

const metrics = [
  { value: "500+", label: "Data Scientists Trained" },
  { value: "12", label: "AI Projects Deployed" },
  { value: "35", label: "Tech Startups Mentored" },
  { value: "8", label: "Government Advisory Engagements" },
];

export default function EmergingTechPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
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
              <Cpu className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Emerging{" "}
              <span className="text-secondary-500">Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Harnessing the power of AI, data science, and automation to
              solve African challenges and accelerate the continent&apos;s
              digital transformation.
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
                subtitle="The fourth industrial revolution is reshaping every sector -- Africa must be a creator, not just a consumer."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Emerging technologies like artificial intelligence, machine
                  learning, blockchain, and the Internet of Things are
                  transforming economies worldwide. Yet Africa risks being left
                  behind -- not due to a lack of talent, but because of gaps
                  in infrastructure, investment, and digital skills.
                </p>
                <p>
                  Only 36% of Africa&apos;s population has internet access, and
                  the continent produces less than 2% of global AI research.
                  Without deliberate action, the digital divide will deepen,
                  and Africa will import solutions designed elsewhere rather
                  than building its own.
                </p>
                <p>
                  The opportunity is immense. Africa&apos;s unique challenges --
                  from predicting crop yields to optimizing healthcare delivery --
                  demand innovative technological solutions. By building local
                  capacity in emerging tech, Africa can leapfrog traditional
                  development pathways and create globally competitive
                  innovations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Wifi,
                  stat: "36%",
                  label: "of Africa's population with internet access",
                },
                {
                  icon: Brain,
                  stat: "<2%",
                  label: "of global AI research from Africa",
                },
                {
                  icon: Smartphone,
                  stat: "650M",
                  label: "mobile subscribers across the continent",
                },
                {
                  icon: Code,
                  stat: "Rising",
                  label: "demand for tech talent outpacing supply",
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
            subtitle="We build African tech capacity, deploy practical AI solutions, and shape inclusive digital policy."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Applied AI & Data Science",
                description:
                  "We develop and deploy AI solutions tailored to African contexts -- from disease outbreak prediction to precision agriculture and natural language processing for local languages.",
              },
              {
                icon: Code,
                title: "Talent Development",
                description:
                  "Through training programs, bootcamps, and mentorship, we build a pipeline of skilled African technologists capable of leading the continent's digital future.",
              },
              {
                icon: Layers,
                title: "Ecosystem Building",
                description:
                  "We support the broader tech ecosystem through startup mentorship, policy advocacy, and partnerships that create an enabling environment for innovation.",
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
            subtitle="Building Africa's tech future through training, innovation, and applied research."
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
              Accelerating Africa&apos;s digital transformation through talent and innovation.
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
              &ldquo;Africa&apos;s greatest untapped resource is not its
              minerals or oil -- it is the ingenuity of its young people. When
              we equip them with cutting-edge technology skills, they build
              solutions the world has never seen before.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Tech Team
                </p>
                <p className="text-sm text-neutral-500">
                  AI for Development Lab
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
            subtitle="Explore our work at the intersection of technology and African development."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "AI for Africa Strategy Paper",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "Tech Talent Pipeline Report",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Innovation Challenge Winners",
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
        title="Fuel Africa's Tech Revolution"
        subtitle="Support the development of African tech talent and innovative solutions that address the continent's biggest challenges."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
