"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FeaturedStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 bg-neutral-50" ref={ref}>
      <Container>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-200 to-primary-100 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-primary-400">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-300/50 flex items-center justify-center">
                    <Quote className="w-12 h-12 text-primary-500" />
                  </div>
                  <p className="text-sm text-primary-600 font-medium">Featured story photo</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-400 rounded-xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
              Story of Change
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Transforming Communities Through Education
            </h2>
            <blockquote className="border-l-4 border-primary-500 pl-6 mb-6">
              <p className="text-lg text-neutral-700 italic leading-relaxed">
                &ldquo;Before Hoop Africa&apos;s program, I never imagined I could pursue higher
                education. Now I&apos;m helping my entire community access opportunities
                we never thought possible.&rdquo;
              </p>
            </blockquote>
            <p className="text-neutral-600 mb-2 font-medium">
              &mdash; Community Leader, Windhoek, Namibia
            </p>
            <p className="text-sm text-neutral-500 mb-8">
              Empowerment Programs &middot; Namibia
            </p>
            <Link href="/impact/stories">
              <Button variant="outline" className="gap-2">
                Read More Stories
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
