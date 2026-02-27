import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Building2,
  Heart,
  GraduationCap,
  Sprout,
  Zap,
  Users,
  ArrowRight,
  Globe,
  Flag,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CONTACTS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "Hoop Africa Foundation operates across Namibia, Tanzania, and the Democratic Republic of Congo with programs tailored to each community's needs.",
};

const countries = [
  {
    id: "namibia",
    name: "Namibia",
    city: CONTACTS.namibia.city,
    phone: CONTACTS.namibia.phone,
    flag: "NA",
    role: "Founding Location",
    color: "from-blue-600 to-blue-800",
    badgeColor: "bg-blue-100 text-blue-700",
    context:
      "Namibia, with a population of approximately 2.5 million, faces unique development challenges despite being classified as an upper-middle-income country. Significant inequality persists, with rural communities lacking access to quality healthcare, education, and economic opportunities. Youth unemployment remains high, and the effects of climate change threaten the agricultural livelihoods of many families.",
    challenges: [
      "Youth unemployment and skills gaps",
      "Rural-urban development inequality",
      "Climate vulnerability and drought",
      "Access to quality education in remote areas",
      "Healthcare accessibility outside urban centers",
    ],
    programs: [
      {
        icon: GraduationCap,
        name: "Education & Skills Development",
        description:
          "Programs focused on vocational training, digital literacy, and entrepreneurship education for Namibian youth.",
      },
      {
        icon: Zap,
        name: "Renewable Energy Access",
        description:
          "Initiatives to bring affordable solar and clean energy solutions to off-grid communities.",
      },
      {
        icon: Users,
        name: "Youth Empowerment",
        description:
          "Leadership development, mentorship, and economic empowerment programs for young Namibians.",
      },
    ],
  },
  {
    id: "tanzania",
    name: "Tanzania",
    city: CONTACTS.tanzania.city,
    phone: CONTACTS.tanzania.phone,
    flag: "TZ",
    role: "Registered Headquarters",
    color: "from-green-600 to-green-800",
    badgeColor: "bg-green-100 text-green-700",
    context:
      "Tanzania is one of East Africa's largest nations with over 60 million people. While the country has experienced steady economic growth, a large portion of the population — particularly in rural areas — still lives below the poverty line. The healthcare system is strained, agricultural productivity remains low, and access to technology and quality education varies dramatically between urban and rural settings.",
    challenges: [
      "Poverty in rural communities",
      "Strained public health infrastructure",
      "Agricultural productivity and food security",
      "Limited access to technology and research",
      "Gender inequality in education and economic participation",
    ],
    programs: [
      {
        icon: Heart,
        name: "Public Health & Health Economics",
        description:
          "Community health worker training, health financing research, and programs to improve healthcare delivery in underserved areas.",
      },
      {
        icon: Sprout,
        name: "Sustainable Agriculture",
        description:
          "Supporting smallholder farmers with modern techniques, value chain development, and climate-smart agriculture practices.",
      },
      {
        icon: GraduationCap,
        name: "Research & Development Hub",
        description:
          "Evidence-based research to inform policy, measure impact, and develop innovative solutions tailored to East African challenges.",
      },
    ],
  },
  {
    id: "drc",
    name: "DR Congo",
    city: CONTACTS.drc.city,
    phone: CONTACTS.drc.phone,
    flag: "CD",
    role: "Operations Hub — Central Africa",
    color: "from-yellow-600 to-yellow-800",
    badgeColor: "bg-yellow-100 text-yellow-700",
    context:
      "The Democratic Republic of Congo is one of Africa's most resource-rich nations, yet it remains one of the poorest. With a population of over 100 million, the DRC faces immense challenges including political instability, inadequate infrastructure, and widespread poverty. Despite these obstacles, the Congolese people are remarkably resilient, and the country holds enormous potential for growth and development.",
    challenges: [
      "Widespread poverty and economic inequality",
      "Healthcare crises including infectious diseases",
      "Conflict-affected communities and displacement",
      "Energy poverty — the vast majority lacks electricity",
      "Education access, especially for girls and women",
    ],
    programs: [
      {
        icon: Heart,
        name: "Community Health Programs",
        description:
          "Emergency health support, preventive care campaigns, and training community health workers in underserved provinces.",
      },
      {
        icon: Users,
        name: "Social & Economic Empowerment",
        description:
          "Programs targeting women and youth, including microfinance initiatives, vocational skills, and community organizing support.",
      },
      {
        icon: Zap,
        name: "Energy Access",
        description:
          "Bringing clean, affordable energy solutions to communities that have never had reliable access to electricity.",
      },
    ],
  },
];

export default function WhereWeWorkPage() {
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
              <span className="text-white">Where We Work</span>
            </p>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              3 Countries, 1 Mission
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Where We Work
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From Southern Africa to East Africa to Central Africa, {SITE_NAME}{" "}
              operates across three countries with programs designed to meet each
              community&apos;s unique needs and unlock its full potential.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((country) => (
              <a
                key={country.id}
                href={`#${country.id}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-neutral-500 text-sm">{country.city}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 ml-auto group-hover:text-primary-500 transition-colors" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Country Sections */}
      {countries.map((country, countryIndex) => (
        <section
          key={country.id}
          id={country.id}
          className={`py-20 ${countryIndex % 2 === 0 ? "bg-neutral-50" : "bg-white"}`}
        >
          <Container>
            {/* Country Header */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge className={country.badgeColor}>
                  <Flag className="w-3 h-3 mr-1" />
                  {country.role}
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {country.name}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-neutral-600 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {country.city}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {country.phone}
                </span>
              </div>
              <div className="mt-4 h-1 w-20 bg-primary-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Context & Challenges */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Local Context
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {country.context}
                </p>

                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Key Challenges Addressed
                </h3>
                <div className="space-y-3">
                  {country.challenges.map((challenge) => (
                    <div key={challenge} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-600 text-sm">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programs */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Active Programs
                </h3>
                <div className="space-y-4">
                  {country.programs.map((program) => (
                    <Card key={program.name} hover={false}>
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                            <program.icon className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900 text-sm mb-1">
                              {program.name}
                            </h4>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                              {program.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Expansion Vision */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              A Growing Pan-African Presence
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              While we currently operate in three countries, our vision extends
              across the entire continent. We are strategically positioned in
              Southern, East, and Central Africa, giving us a footprint that
              spans diverse cultures, economies, and development contexts.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              As we grow, we will expand into new countries based on where our
              multi-sector approach can have the greatest impact. Our goal is
              not just to be present in more places, but to deepen our impact in
              every community we serve.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="primary">Southern Africa</Badge>
              <Badge variant="accent">East Africa</Badge>
              <Badge variant="secondary">Central Africa</Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact by Country */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Get in Touch"
            subtitle="Reach out to our team in any of our countries of operation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {countries.map((country) => (
              <Card key={country.id} hover={false}>
                <CardContent className="text-center">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${country.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {country.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mb-4">
                    {country.city}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary-600">
                    <Phone className="w-4 h-4" />
                    <a
                      href={`tel:${country.phone.replace(/\s/g, "")}`}
                      className="font-medium text-sm hover:text-primary-700 transition-colors"
                    >
                      {country.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Next Pages */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/about/governance" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Previous</p>
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
            <Link href="/our-work" className="group">
              <Card className="h-full">
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-1">Explore</p>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    Our Work
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Discover our nine focus areas and active programs.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Support Our Work on the Ground"
        subtitle="Every contribution helps us expand our reach and deepen our impact in Namibia, Tanzania, and the DR Congo."
      />
    </>
  );
}
