"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  CheckCircle,
  Building2,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_NAME, CONTACTS, SOCIAL_LINKS } from "@/lib/constants";

// export const metadata: Metadata is not used in client components
// Metadata is exported from a separate layout or via generateMetadata

const departments = [
  {
    value: "general",
    label: "General Inquiries",
    description: "General questions about Hoop Africa Foundation",
    email: "info@hoopafrica.org",
  },
  {
    value: "partnerships",
    label: "Partnerships",
    description: "Corporate, institutional, and NGO collaboration",
    email: "partnerships@hoopafrica.org",
  },
  {
    value: "donations",
    label: "Donations",
    description: "Questions about giving and financial support",
    email: "donate@hoopafrica.org",
  },
  {
    value: "media",
    label: "Media",
    description: "Press inquiries, interviews, media requests",
    email: "media@hoopafrica.org",
  },
  {
    value: "careers",
    label: "Careers",
    description: "Job opportunities and volunteer positions",
    email: "careers@hoopafrica.org",
  },
];

const offices = [
  {
    country: CONTACTS.namibia.country,
    city: CONTACTS.namibia.city,
    phone: CONTACTS.namibia.phone,
    flag: "🇳🇦",
    address: "Windhoek, Namibia",
    type: "Founding Office",
    email: "namibia@hoopafrica.org",
  },
  {
    country: CONTACTS.tanzania.country,
    city: CONTACTS.tanzania.city,
    phone: CONTACTS.tanzania.phone,
    flag: "🇹🇿",
    address: "Dar es Salaam, Tanzania",
    type: "Registered Office",
    email: "tanzania@hoopafrica.org",
  },
  {
    country: CONTACTS.drc.country,
    city: CONTACTS.drc.city,
    phone: CONTACTS.drc.phone,
    flag: "🇨🇩",
    address: "Kinshasa, DR Congo",
    type: "Regional Office",
    email: "drc@hoopafrica.org",
  },
];

const socialLinks = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter / X" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "general",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In production, this would send the form data to an API
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        <div className="absolute top-10 right-20 w-72 h-72 bg-secondary-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/10 text-primary-100 border border-white/20 mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-secondary-400">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Have a question, want to partner with us, or interested in
              supporting our mission? We would love to hear from you. Reach out
              to the right team below.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we will get back to you within 2
                business days.
              </p>

              {isSubmitted ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your
                      message and respond within 2 business days.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          department: "general",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="text-primary-600 font-semibold hover:text-primary-700"
                    >
                      Send Another Message
                    </button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                          />
                        </div>
                      </div>

                      {/* Department Select */}
                      <div>
                        <label
                          htmlFor="department"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Department <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="department"
                          name="department"
                          required
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                        >
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                        <p className="text-xs text-neutral-500 mt-1">
                          {
                            departments.find(
                              (d) => d.value === formData.department
                            )?.description
                          }
                        </p>
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is your message about?"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-vertical"
                        />
                      </div>

                      {/* Privacy Notice */}
                      <p className="text-xs text-neutral-500">
                        By submitting this form, you agree to our{" "}
                        <Link
                          href="/legal/privacy"
                          className="text-primary-600 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                        . We will only use your information to respond to your
                        inquiry.
                      </p>

                      {/* Submit Button */}
                      <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Department Routing */}
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary-600" />
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  {departments.map((dept) => (
                    <div
                      key={dept.value}
                      className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {dept.label}
                        </p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-xs text-primary-600 hover:underline"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">
                        Response Time
                      </h4>
                      <p className="text-xs text-neutral-500">
                        We typically respond within
                      </p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">
                    1-2 Business Days
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-600" />
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-neutral-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-600">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Our Offices"
            subtitle="Reach us at any of our three offices across Africa"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.country} className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-primary-500 to-primary-600" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl" role="img" aria-label={`${office.country} flag`}>
                      {office.flag}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">
                        {office.country}
                      </h3>
                      <Badge variant="outline">{office.type}</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">
                          {office.city}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-neutral-700 hover:text-primary-600 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-primary-600 hover:underline text-sm"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Where to Find Us"
            subtitle="Our presence across the African continent"
          />

          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">
                  Interactive Map
                </h3>
                <p className="text-primary-500 text-sm max-w-md">
                  An interactive map showing our offices in Windhoek (Namibia),
                  Dar es Salaam (Tanzania), and Kinshasa (DR Congo) will be
                  displayed here.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {offices.map((office) => (
                    <span
                      key={office.country}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm font-medium text-primary-700 shadow-sm"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full" />
                      {office.city}, {office.country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to donate, volunteer, or explore partnership
            opportunities, we are here to help you get involved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved/donate">
              <Button
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 gap-2"
              >
                Donate Now
              </Button>
            </Link>
            <Link href="/get-involved/partner">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
