"use client";

import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Partners() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Our Partners"
          subtitle="We collaborate with organizations across Africa and globally to drive sustainable change."
        />

        {/* Partner logo placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400"
            >
              <Handshake className="w-8 h-8" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/get-involved/partner">
            <Button variant="outline" className="gap-2">
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
