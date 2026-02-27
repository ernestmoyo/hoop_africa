"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CtaBanner({
  title = "Ready to Make a Difference?",
  subtitle = "Join us in unlocking Africa's human capital. Every contribution helps build stronger communities across the continent.",
  primaryCta = { label: "Donate Now", href: "/get-involved/donate" },
  secondaryCta = { label: "Partner With Us", href: "/get-involved/partner" },
}: CtaBannerProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={primaryCta.href}>
            <Button size="lg" className="bg-secondary-500 hover:bg-secondary-600 gap-2">
              <Heart className="w-5 h-5" />
              {primaryCta.label}
            </Button>
          </Link>
          <Link href={secondaryCta.href}>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2"
            >
              {secondaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
