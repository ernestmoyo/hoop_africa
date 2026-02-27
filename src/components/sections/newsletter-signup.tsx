"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consent) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-800">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Get updates on our programs, impact stories, and opportunities to
            make a difference across Africa.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-white bg-white/10 rounded-xl p-6 max-w-md mx-auto">
              <CheckCircle className="w-6 h-6 text-accent-400" />
              <span className="text-lg font-medium">
                Thank you for subscribing!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  className="bg-secondary-500 hover:bg-secondary-600 gap-2 shrink-0"
                  disabled={!consent}
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </Button>
              </div>
              <label className="flex items-start gap-2 text-sm text-primary-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-white/30 bg-white/10 text-primary-500 focus:ring-primary-400"
                />
                <span>
                  I agree to receive newsletters from Hoop Africa Foundation.
                  You can unsubscribe at any time.
                </span>
              </label>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
