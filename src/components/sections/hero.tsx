"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-primary-100 text-sm font-medium rounded-full mb-6 border border-white/20">
              African-Founded &middot; African-Led &middot; Continental Impact
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Unlocking Africa&apos;s{" "}
            <span className="text-secondary-400">Human Capital</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-primary-100 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Supporting and addressing neglected areas across the continent through
            strategic management, research, innovation, and sustainable
            development initiatives.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/get-involved/donate">
              <Button size="lg" className="bg-secondary-500 hover:bg-secondary-600 gap-2">
                <Heart className="w-5 h-5" />
                Support Our Mission
              </Button>
            </Link>
            <Link href="/our-work">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm text-primary-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-400 rounded-full" />
              Operating in 3 Countries
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary-400 rounded-full" />
              9 Focus Areas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-300 rounded-full" />
              Registered Non-Profit (Tanzania)
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
