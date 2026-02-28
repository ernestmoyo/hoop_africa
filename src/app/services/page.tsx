import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Landmark,
  Users,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SERVICE_OFFERINGS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hoop Africa Foundation offers strategic management and performance management services for non-profit, public sector, and private organisations across Africa.",
};

const clientTypes = [
  {
    icon: Building2,
    label: "Non-Profit Organisations",
    description: "Tailored strategy and performance frameworks for NGOs and foundations",
  },
  {
    icon: Landmark,
    label: "Public Sector",
    description: "Government departments, ministries, and state-owned enterprises",
  },
  {
    icon: Briefcase,
    label: "Private Sector",
    description: "Corporates and SMEs seeking strategic clarity and performance improvement",
  },
  {
    icon: Users,
    label: "Development Partners",
    description: "International organisations and multilateral agencies operating in Africa",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-100 text-sm font-medium rounded-full mb-6 border border-white/20">
              Professional Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Strategic &{" "}
              <span className="text-secondary-400">Performance</span>{" "}
              Management
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              We help organisations across Africa achieve their goals through
              expert strategic planning, performance management systems, and
              organisational development support.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Domains */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Our Service Domains"
            subtitle="Two core service areas designed to drive organisational excellence and measurable impact."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICE_OFFERINGS.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.id} href={service.href} className="group">
                  <div className="h-full p-8 rounded-2xl border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 bg-white group-hover:bg-primary-50/30">
                    <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                      <Icon className={`w-7 h-7 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="flex items-start gap-2.5 text-sm text-neutral-700"
                        >
                          <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                          {offering}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Who We Serve"
            subtitle="We work with organisations of all sizes across the public, private, and non-profit sectors."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client) => {
              const Icon = client.icon;
              return (
                <div
                  key={client.label}
                  className="p-6 bg-white rounded-xl border border-neutral-200 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {client.label}
                  </h3>
                  <p className="text-sm text-neutral-600">{client.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Hoop Africa */}
      <section className="py-20 bg-white">
        <Container size="md">
          <SectionHeading
            title="Why Hoop Africa"
            subtitle="Our approach is rooted in African context, evidence-based practice, and genuine partnership."
          />

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "African Context",
                description:
                  "We understand the unique challenges and opportunities facing organisations on the continent.",
              },
              {
                title: "Evidence-Based",
                description:
                  "Every recommendation is grounded in data, research, and proven methodologies.",
              },
              {
                title: "Capacity Building",
                description:
                  "We don't just advise — we build internal capability so organisations sustain their own growth.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Discuss Your Needs
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Strengthen Your Organisation?"
        subtitle="Get in touch to discuss how our strategic and performance management services can drive results for your organisation."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Partner With Us", href: "/get-involved/partner" }}
      />
    </>
  );
}
