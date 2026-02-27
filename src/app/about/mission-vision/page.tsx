import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Compass,
  Heart,
  Handshake,
  Lightbulb,
  Scale,
  Leaf,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FOCUS_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Our mission is unlocking Africa's human capital. Our vision is a prosperous Africa where every individual has access to the resources and opportunities needed to reach their full potential.",
};

const coreValues = [
  {
    icon: Heart,
    title: "Ubuntu — Human Solidarity",
    description:
      "We believe in the interconnectedness of all people. Our success is measured by the wellbeing of the communities we serve.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creative solutions, emerging technologies, and fresh thinking to tackle Africa's most pressing challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    description:
      "We hold ourselves to the highest standards of ethical governance, accountability, and open communication with all stakeholders.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work collaboratively with communities, governments, and organizations to amplify impact and share knowledge.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We design programs that create lasting change, building local capacity so communities can thrive independently.",
  },
  {
    icon: Scale,
    title: "Equity & Inclusion",
    description:
      "We champion gender equity, youth empowerment, and inclusive development that leaves no one behind.",
  },
];

export default function MissionVisionPage() {
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
              <span className="text-white">Mission & Vision</span>
            </p>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              What Drives Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Every initiative we undertake, every partnership we form, and every
              life we touch is guided by a clear mission and an ambitious vision
              for Africa&apos;s future.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    Our Mission
                  </p>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Unlocking Africa&apos;s Human Capital
              </h2>
              <blockquote className="border-l-4 border-primary-500 pl-6 py-2 mb-8">
                <p className="text-xl text-neutral-700 leading-relaxed italic">
                  &ldquo;Unlocking Africa&apos;s human capital by supporting and
                  addressing neglected areas across the continent through
                  strategic management, research, innovation, and sustainable
                  development initiatives.&rdquo;
                </p>
              </blockquote>
              <p className="text-neutral-600 leading-relaxed">
                Our mission recognizes that Africa&apos;s people are its most
                valuable asset. By investing in health, education, technology,
                agriculture, energy, and community empowerment simultaneously, we
                create a virtuous cycle of development where progress in one area
                amplifies gains across all others.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-4">
                  How We Achieve Our Mission
                </h3>
                <ul className="space-y-4">
                  {[
                    "Strategic management of resources and programs",
                    "Evidence-based research and analysis",
                    "Innovation and emerging technology adoption",
                    "Sustainable, community-owned development",
                    "Cross-sector collaboration and partnerships",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Compass className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-100 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  A Prosperous Africa Means:
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Health for All",
                      desc: "Accessible, equitable healthcare systems across the continent",
                    },
                    {
                      label: "Quality Education",
                      desc: "Every child and adult equipped with knowledge and skills",
                    },
                    {
                      label: "Economic Opportunity",
                      desc: "Jobs, entrepreneurship, and pathways out of poverty",
                    },
                    {
                      label: "Environmental Resilience",
                      desc: "Sustainable energy and climate-adaptive communities",
                    },
                    {
                      label: "Technological Advancement",
                      desc: "African innovation solving African challenges",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-lg bg-neutral-50 border border-neutral-100"
                    >
                      <p className="font-semibold text-neutral-900 text-sm">
                        {item.label}
                      </p>
                      <p className="text-neutral-500 text-xs mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary-100 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-secondary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">
                    Our Vision
                  </p>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                A Prosperous Africa for All
              </h2>
              <blockquote className="border-l-4 border-secondary-500 pl-6 py-2 mb-8">
                <p className="text-xl text-neutral-700 leading-relaxed italic">
                  &ldquo;A prosperous Africa where every individual has access
                  to the resources and opportunities needed to reach their full
                  potential.&rdquo;
                </p>
              </blockquote>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We envision a continent where the accident of birth does not
                determine the trajectory of a life. Where a young woman in
                Kinshasa has the same access to quality education as one in any
                major city. Where farmers in rural Tanzania leverage technology
                to build thriving enterprises. Where communities across Namibia
                are powered by clean, affordable energy.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                This vision is ambitious, but it is achievable. Africa&apos;s
                youth population, natural resources, cultural richness, and
                entrepreneurial spirit make it uniquely positioned for
                transformation. Our role is to help unlock that potential.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every decision, partnership, and program we pursue."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreValues.map((value) => (
              <Card key={value.title} hover={false}>
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Focus Areas Connection */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Mission in Action: Our Nine Focus Areas"
            subtitle="Each focus area represents a critical dimension of human capital development."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {FOCUS_AREAS.map((area) => (
              <Link key={area.id} href={area.href} className="group">
                <div className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                      <area.icon className={`w-5 h-5 ${area.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-neutral-900 text-sm group-hover:text-primary-600 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Next Pages */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/about/our-story" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Previous</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Our Story
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Learn how Hoop Africa Foundation was founded and why.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/about/leadership" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Next</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Leadership Team
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Meet the dedicated people driving our mission forward.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Share Our Vision"
        subtitle="Help us build a prosperous Africa where every individual can reach their full potential."
        primaryCta={{ label: "Support Our Mission", href: "/get-involved/donate" }}
        secondaryCta={{ label: "Learn About Our Work", href: "/our-work" }}
      />
    </>
  );
}
