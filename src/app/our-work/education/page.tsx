import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Users,
  Brain,
  School,
  Laptop,
  Quote,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Hoop Africa Foundation champions quality education, skills development, innovation, critical thinking, and lifelong learning across the African continent.",
};

const programs = [
  {
    title: "Digital Literacy & Skills Program",
    description:
      "Equipping youth with essential digital skills, coding fundamentals, and technology literacy to thrive in the modern economy and drive innovation.",
    status: "Active",
    location: "Tanzania, Namibia",
  },
  {
    title: "Teacher Training & Development Initiative",
    description:
      "Upskilling educators through modern pedagogy, classroom management techniques, and technology integration to improve learning outcomes.",
    status: "Active",
    location: "DR Congo, Tanzania",
  },
  {
    title: "STEM for Africa Scholarship Fund",
    description:
      "Providing scholarships and mentorship for talented students from underserved communities to pursue STEM education at secondary and tertiary levels.",
    status: "Active",
    location: "Pan-African",
  },
  {
    title: "Community Learning Centers",
    description:
      "Establishing safe, resource-equipped learning spaces in rural and peri-urban areas that provide access to books, technology, and tutoring support.",
    status: "Pilot",
    location: "Tanzania",
  },
];

const metrics = [
  { value: "3,200+", label: "Students Supported" },
  { value: "120", label: "Teachers Trained" },
  { value: "8", label: "Learning Centers Established" },
  { value: "92%", label: "Program Completion Rate" },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
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
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Education for{" "}
              <span className="text-secondary-500">Africa&apos;s Future</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Championing quality education, skills development, and lifelong
              learning as the foundation for Africa&apos;s transformation.
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
                subtitle="Education is the single most powerful lever for breaking cycles of poverty and driving development."
                centered={false}
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Africa has the youngest population in the world, with over 60%
                  of its people under age 25. Yet millions of children and youth
                  remain out of school, and those who attend often face
                  overcrowded classrooms, undertrained teachers, and outdated
                  curricula.
                </p>
                <p>
                  The learning crisis extends beyond enrollment. Even those in
                  school frequently fail to acquire foundational literacy and
                  numeracy skills. Sub-Saharan Africa accounts for over half of
                  the world&apos;s out-of-school children, representing an
                  enormous loss of human potential.
                </p>
                <p>
                  Without urgent action to improve educational quality and
                  access, Africa risks missing its demographic dividend --
                  the window of opportunity where a large, skilled young
                  population could power unprecedented economic growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  stat: "98M",
                  label: "children out of school in Sub-Saharan Africa",
                },
                {
                  icon: School,
                  stat: "60%",
                  label: "of population under 25 across the continent",
                },
                {
                  icon: BookOpen,
                  stat: "9/10",
                  label: "children unable to read proficiently by age 10",
                },
                {
                  icon: Brain,
                  stat: "Low",
                  label: "teacher-to-student ratio in most African nations",
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
            subtitle="We invest in people, systems, and innovation to transform education outcomes."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation in Pedagogy",
                description:
                  "We introduce modern, learner-centered teaching methods that develop critical thinking, creativity, and problem-solving skills -- not just rote memorization.",
              },
              {
                icon: Laptop,
                title: "Digital Empowerment",
                description:
                  "Through digital literacy programs and technology access, we bridge the digital divide and prepare students for the jobs of tomorrow.",
              },
              {
                icon: Users,
                title: "Community Engagement",
                description:
                  "We work with parents, local leaders, and communities to create supportive learning ecosystems that keep children in school and motivated.",
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
            subtitle="From digital literacy to teacher training, our education programs empower learners at every level."
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
              Empowering the next generation of African leaders through quality education.
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
              &ldquo;Education is not just about filling classrooms -- it is
              about igniting minds, building confidence, and creating pathways
              for young Africans to lead the transformation of their own
              communities.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  Hoop Africa Education Team
                </p>
                <p className="text-sm text-neutral-500">
                  Digital Literacy & Skills Program
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
            subtitle="Learn more about our education initiatives and their impact."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Education Strategy Paper",
                type: "Publication",
                href: "/resources/publications",
              },
              {
                icon: FileText,
                title: "STEM Scholarship Report",
                type: "Report",
                href: "/impact/annual-reports",
              },
              {
                icon: ExternalLink,
                title: "Student Success Stories",
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
        title="Invest in Education, Transform Africa"
        subtitle="Help us build a future where every African child has access to quality education. Your support creates lifelong opportunities."
        primaryCta={{ label: "Support This Work", href: "/get-involved/donate" }}
        secondaryCta={{
          label: "Partner With Us",
          href: "/get-involved/partner",
        }}
      />
    </>
  );
}
