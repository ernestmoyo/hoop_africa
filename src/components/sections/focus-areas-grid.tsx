"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FOCUS_AREAS } from "@/lib/constants";

export function FocusAreasGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <Container>
        <SectionHeading
          title="Our Focus Areas"
          subtitle="We address Africa's most pressing challenges across nine interconnected sectors, creating holistic and sustainable impact."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={area.href} className="group block">
                  <div className="p-6 rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 h-full bg-white group-hover:bg-primary-50/50">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary-100 ${area.color} group-hover:bg-primary-200 transition-colors`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {area.shortTitle}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
