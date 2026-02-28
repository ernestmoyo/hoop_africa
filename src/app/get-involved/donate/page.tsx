"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Shield,
  Lock,
  CheckCircle,
  CreditCard,
  Users,
  GraduationCap,
  Sprout,
  Cpu,
  Stethoscope,
  ArrowRight,
  Star,
  Globe,
  Repeat,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { REGISTRATION_INFO } from "@/lib/constants";

const PRESET_AMOUNTS = [
  {
    amount: 25,
    label: "$25",
    impact: "School supplies for 5 students",
    icon: GraduationCap,
    popular: false,
  },
  {
    amount: 50,
    label: "$50",
    impact: "Climate-smart farming training for 1 farmer",
    icon: Sprout,
    popular: false,
  },
  {
    amount: 100,
    label: "$100",
    impact: "Training for 1 community health worker",
    icon: Stethoscope,
    popular: true,
  },
  {
    amount: 250,
    label: "$250",
    impact: "Full tech bootcamp sponsorship for 1 participant",
    icon: Cpu,
    popular: false,
  },
];

const TRUST_SIGNALS = [
  {
    icon: Shield,
    title: "Registered Non-Profit",
    description: `${REGISTRATION_INFO.type}, Reg No: ${REGISTRATION_INFO.number}`,
  },
  {
    icon: CheckCircle,
    title: "92% to Programs",
    description: "Of every dollar goes directly to communities",
  },
  {
    icon: Lock,
    title: "Secure & Encrypted",
    description: "Your payment information is protected",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Operating across Namibia, Tanzania & DRC",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I know my donation is making a real difference. The transparency reports show exactly where the money goes.",
    name: "Sarah M.",
    role: "Monthly Donor",
  },
  {
    quote:
      "Sponsoring a bootcamp participant was the most rewarding $250 I've ever spent. I got to see the direct impact.",
    name: "James K.",
    role: "One-time Donor",
  },
  {
    quote:
      "Hoop Africa's commitment to accountability sets them apart. I've been donating monthly for over a year.",
    name: "Dr. Amina R.",
    role: "Recurring Supporter",
  },
];

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handlePresetSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomFocus = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const displayAmount = isCustom
    ? customAmount
      ? `$${customAmount}`
      : "$0"
    : selectedAmount
    ? `$${selectedAmount}`
    : "$0";

  const effectiveAmount = isCustom
    ? parseFloat(customAmount) || 0
    : selectedAmount || 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-500/20 backdrop-blur-sm rounded-full mb-6">
              <Heart className="w-8 h-8 text-secondary-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Lives <span className="text-secondary-400">Today</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl mx-auto">
              Your donation unlocks Africa&apos;s human capital. 92% of every dollar
              goes directly to programs that create lasting change in communities
              across the continent.
            </p>
          </div>
        </Container>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-4 bg-accent-50 border-b border-accent-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {TRUST_SIGNALS.map((signal) => (
              <div
                key={signal.title}
                className="flex items-center gap-2 text-sm"
              >
                <signal.icon className="w-4 h-4 text-accent-600 flex-shrink-0" />
                <span className="font-medium text-accent-800">
                  {signal.title}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Donation Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Donation Form Column */}
            <div className="lg:col-span-7">
              <Card hover={false} className="border-2 border-primary-100">
                <CardContent className="p-8 md:p-10">
                  {/* Frequency Toggle */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-neutral-900 mb-4">
                      Choose Your Gift
                    </h2>
                    <div className="inline-flex bg-neutral-100 rounded-lg p-1">
                      <button
                        onClick={() => setFrequency("one-time")}
                        className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                          frequency === "one-time"
                            ? "bg-white text-primary-700 shadow-sm"
                            : "text-neutral-600 hover:text-neutral-800"
                        }`}
                        aria-pressed={frequency === "one-time"}
                      >
                        One-Time
                      </button>
                      <button
                        onClick={() => setFrequency("monthly")}
                        className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                          frequency === "monthly"
                            ? "bg-white text-primary-700 shadow-sm"
                            : "text-neutral-600 hover:text-neutral-800"
                        }`}
                        aria-pressed={frequency === "monthly"}
                      >
                        <Repeat className="w-4 h-4" />
                        Monthly
                      </button>
                    </div>
                    {frequency === "monthly" && (
                      <p className="mt-3 text-sm text-accent-600 flex items-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        Monthly donations provide reliable, sustained impact.
                        Cancel anytime.
                      </p>
                    )}
                  </div>

                  {/* Preset Amounts */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4">
                      Select Amount
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {PRESET_AMOUNTS.map((preset) => (
                        <button
                          key={preset.amount}
                          onClick={() => handlePresetSelect(preset.amount)}
                          className={`relative p-5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                            selectedAmount === preset.amount && !isCustom
                              ? "border-primary-500 bg-primary-50 shadow-md"
                              : "border-neutral-200 bg-white hover:border-primary-300 hover:shadow-sm"
                          }`}
                          aria-pressed={selectedAmount === preset.amount && !isCustom}
                        >
                          {preset.popular && (
                            <span className="absolute -top-2.5 right-3 inline-flex items-center px-2.5 py-0.5 bg-secondary-500 text-white text-[11px] font-bold rounded-full">
                              <Star className="w-3 h-3 mr-0.5" />
                              POPULAR
                            </span>
                          )}
                          <div className="flex items-center gap-3 mb-2">
                            <preset.icon
                              className={`w-5 h-5 ${
                                selectedAmount === preset.amount && !isCustom
                                  ? "text-primary-600"
                                  : "text-neutral-400"
                              }`}
                            />
                            <span
                              className={`text-2xl font-bold ${
                                selectedAmount === preset.amount && !isCustom
                                  ? "text-primary-700"
                                  : "text-neutral-900"
                              }`}
                            >
                              {preset.label}
                            </span>
                            {frequency === "monthly" && (
                              <span className="text-sm text-neutral-500">/mo</span>
                            )}
                          </div>
                          <p className="text-sm text-neutral-600">
                            {preset.impact}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                      Or Enter Custom Amount
                    </h3>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-neutral-400">
                        $
                      </span>
                      <input
                        type="number"
                        min="1"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setIsCustom(true);
                          setSelectedAmount(null);
                        }}
                        onFocus={handleCustomFocus}
                        className={`w-full pl-10 pr-4 py-4 text-xl font-semibold border-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          isCustom
                            ? "border-primary-500 bg-primary-50"
                            : "border-neutral-200 bg-white"
                        }`}
                        aria-label="Custom donation amount"
                      />
                      {frequency === "monthly" && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500">
                          /month
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary & CTA */}
                  <div className="bg-primary-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-700 font-medium">
                        Your {frequency === "monthly" ? "monthly" : "one-time"}{" "}
                        donation
                      </span>
                      <span className="text-3xl font-bold text-primary-700">
                        {displayAmount}
                      </span>
                    </div>
                    {frequency === "monthly" && effectiveAmount > 0 && (
                      <p className="text-sm text-neutral-600">
                        That is{" "}
                        <span className="font-semibold">
                          ${(effectiveAmount * 12).toLocaleString()}
                        </span>{" "}
                        per year of sustained impact.
                      </p>
                    )}
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-secondary-500 hover:bg-secondary-600 text-lg py-5 gap-2"
                    disabled={effectiveAmount <= 0}
                  >
                    <Heart className="w-5 h-5" />
                    {effectiveAmount > 0
                      ? `Donate ${displayAmount}${frequency === "monthly" ? "/month" : ""}`
                      : "Select an Amount"}
                  </Button>

                  {/* Security Badges */}
                  <div className="mt-6 flex items-center justify-center gap-6 text-xs text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      SSL Encrypted
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      Secure Payment
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5" />
                      All Cards Accepted
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              {/* Impact Breakdown */}
              <Card hover={false}>
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-secondary-500" />
                    Where Your Money Goes
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-neutral-700 font-medium">
                          Direct Programs
                        </span>
                        <span className="font-bold text-accent-600">92%</span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-3">
                        <div className="bg-accent-500 h-3 rounded-full w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-neutral-700 font-medium">
                          Administration
                        </span>
                        <span className="font-bold text-primary-600">5%</span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-3">
                        <div className="bg-primary-400 h-3 rounded-full w-[5%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-neutral-700 font-medium">
                          Fundraising
                        </span>
                        <span className="font-bold text-secondary-600">3%</span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-3">
                        <div className="bg-secondary-400 h-3 rounded-full w-[3%]" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent-50 rounded-lg p-4 border border-accent-100">
                    <p className="text-sm text-accent-800 font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-1.5 text-accent-600" />
                      92 cents of every dollar directly funds programs and
                      services for communities across Africa.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Signals Detailed */}
              <Card hover={false}>
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-neutral-900 mb-6">
                    Your Trust, Our Priority
                  </h3>
                  <div className="space-y-4">
                    {TRUST_SIGNALS.map((signal) => (
                      <div key={signal.title} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                          <signal.icon className="w-4 h-4 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-neutral-900">
                            {signal.title}
                          </h4>
                          <p className="text-xs text-neutral-500">
                            {signal.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Impact Calculator */}
              {effectiveAmount > 0 && (
                <Card hover={false} className="border-secondary-200 bg-secondary-50">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      Your Impact at {displayAmount}
                      {frequency === "monthly" ? "/month" : ""}
                    </h3>
                    <ul className="space-y-3">
                      {effectiveAmount >= 25 && (
                        <li className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                          School supplies for{" "}
                          {Math.floor(effectiveAmount / 5)} students
                        </li>
                      )}
                      {effectiveAmount >= 50 && (
                        <li className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                          Climate training for{" "}
                          {Math.floor(effectiveAmount / 50)} farmer
                          {Math.floor(effectiveAmount / 50) > 1 ? "s" : ""}
                        </li>
                      )}
                      {effectiveAmount >= 100 && (
                        <li className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                          Health worker training for{" "}
                          {Math.floor(effectiveAmount / 100)} community
                          {Math.floor(effectiveAmount / 100) > 1
                            ? " members"
                            : " member"}
                        </li>
                      )}
                      {frequency === "monthly" && (
                        <li className="flex items-start gap-2 text-sm text-neutral-700 pt-2 border-t border-secondary-200">
                          <Repeat className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">
                            ${(effectiveAmount * 12).toLocaleString()} annual
                            sustained impact
                          </span>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              What Our Donors Say
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.name} hover={false}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-secondary-400 fill-secondary-400"
                      />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Other Ways to Support
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/get-involved/partner" className="group">
              <div className="text-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
                <Users className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-primary-700">
                  Corporate Partnership
                </h3>
                <p className="text-sm text-neutral-600">
                  Align your brand with impact
                </p>
              </div>
            </Link>
            <Link href="/get-involved/volunteer" className="group">
              <div className="text-center p-6 bg-accent-50 rounded-xl hover:bg-accent-100 transition-colors">
                <Heart className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-accent-700">
                  Volunteer Your Skills
                </h3>
                <p className="text-sm text-neutral-600">
                  Give your time and expertise
                </p>
              </div>
            </Link>
            <Link href="/contact" className="group">
              <div className="text-center p-6 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors">
                <Globe className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-secondary-700">
                  Legacy Giving
                </h3>
                <p className="text-sm text-neutral-600">
                  Leave a lasting legacy
                </p>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-primary-50">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is my donation tax-deductible?",
                a: "Hoop Africa Foundation is a registered non-profit organization under Section 21 of the Companies Act of the United Republic of Namibia (Reg No: 21/2022/1459). Tax deductibility depends on your country's regulations. We provide official donation receipts for all contributions.",
              },
              {
                q: "How is my donation used?",
                a: "92% of every dollar goes directly to our programs across health, education, agriculture, technology, and other focus areas. Only 5% covers administration and 3% goes to fundraising efforts.",
              },
              {
                q: "Can I cancel my monthly donation?",
                a: "Absolutely. Monthly donations can be cancelled at any time with no penalties. Simply contact our team or use the link in your confirmation email.",
              },
              {
                q: "Do you accept non-monetary donations?",
                a: "Yes! We accept in-kind donations including equipment, professional services, and other resources. Please contact us to discuss how your contribution can help.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-6 border border-neutral-200"
              >
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-neutral-600">
              Have more questions?{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                Contact our team
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
