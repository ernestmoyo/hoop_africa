import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Globe, Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FOCUS_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Hoop Africa Foundation's nine focus areas driving sustainable development across the African continent.",
};

export default function OurWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              9 Focus Areas
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Work Across{" "}
              <span className="text-secondary-500">Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
              We address Africa&apos;s most pressing challenges through nine
              interconnected focus areas, creating holistic and sustainable
              impact that unlocks the continent&apos;s vast human capital.
            </p>
          </div>
        </Container>
      </section>

      {/* Approach Pillars */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Focus",
                description:
                  "We concentrate on nine critical sectors where targeted interventions can create the greatest multiplier effect across communities.",
              },
              {
                icon: Globe,
                title: "Pan-African Reach",
                description:
                  "Operating across multiple African nations, we adapt our approach to local contexts while maintaining continental impact.",
              },
              {
                icon: Lightbulb,
                title: "Innovation-Driven",
                description:
                  "We leverage emerging technologies, evidence-based research, and creative solutions to tackle systemic challenges.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-200"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Our Nine Focus Areas"
            subtitle="Each focus area represents a critical dimension of Africa's development. Together, they form a comprehensive framework for sustainable transformation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOCUS_AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <Link key={area.id} href={area.href} className="group block">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-primary-100 ${area.color} group-hover:bg-primary-200 transition-colors duration-300`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed mb-5">
                        {area.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all duration-300">
                        Explore this area
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Interconnected Approach */}
      <section className="py-20 bg-primary-50">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading
              title="An Interconnected Approach"
              subtitle="Africa's challenges don't exist in isolation -- and neither do our solutions."
            />
            <p className="text-neutral-600 leading-relaxed mb-8">
              Our nine focus areas are deeply interconnected. Improving education
              fuels innovation. Strengthening health systems boosts economic
              productivity. Sustainable energy powers agriculture. Climate action
              protects livelihoods. At Hoop Africa Foundation, we understand that
              lasting change requires addressing multiple dimensions
              simultaneously.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              By working across sectors, we create synergies that amplify impact
              and build resilient communities capable of driving their own
              development.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Support Our Work"
        subtitle="Partner with us to create transformative change across Africa. Every contribution powers innovation, builds capacity, and unlocks potential."
        primaryCta={{ label: "Donate Now", href: "/get-involved/donate" }}
        secondaryCta={{ label: "Partner With Us", href: "/get-involved/partner" }}
      />
    </>
  );
}
