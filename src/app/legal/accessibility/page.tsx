import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ChevronLeft,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  Target,
  Users,
  Monitor,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_NAME, SITE_URL, CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `Accessibility Statement for ${SITE_NAME}. Our commitment to WCAG 2.2 Level AA compliance and digital inclusion for all users.`,
};

const accessibilityFeatures = [
  {
    title: "Semantic HTML Structure",
    description:
      "We use proper heading hierarchy, landmarks, and semantic elements to ensure logical page structure for assistive technologies.",
  },
  {
    title: "Keyboard Navigation",
    description:
      "All interactive elements and navigation can be accessed and operated using a keyboard alone, with visible focus indicators.",
  },
  {
    title: "Alternative Text",
    description:
      "All meaningful images include descriptive alternative text. Decorative images are marked as such so screen readers skip them.",
  },
  {
    title: "Color Contrast",
    description:
      "Text and interactive elements meet or exceed WCAG 2.2 Level AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text).",
  },
  {
    title: "Responsive Design",
    description:
      "Our website adapts to different screen sizes and supports text resizing up to 200% without loss of content or functionality.",
  },
  {
    title: "Form Accessibility",
    description:
      "All form inputs have associated labels, clear error messages, and instructions to guide users through the completion process.",
  },
  {
    title: "Link Purpose",
    description:
      "Links are descriptive and provide clear context about their destination. We avoid generic link text like 'click here.'",
  },
  {
    title: "ARIA Labels",
    description:
      "Where necessary, we use ARIA attributes to provide additional context for assistive technologies, enhancing the user experience.",
  },
];

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <Container className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-primary-200 hover:text-white transition-colors mb-6 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
              <Accessibility className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Accessibility Statement
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-primary-200 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Last Updated: February 1, 2026
            </span>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <Container size="md">
          {/* Commitment Banner */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                  Our Commitment to Accessibility
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {SITE_NAME} is committed to ensuring digital accessibility for
                  people with disabilities. We continually improve the user
                  experience for everyone and apply the relevant accessibility
                  standards. Accessibility is not just a compliance requirement
                  for us -- it is a core value aligned with our mission of
                  inclusion and empowerment across Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Standards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Conformance Standard
            </h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              We aim to conform to the{" "}
              <strong>
                Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
              </strong>{" "}
              standard. These guidelines explain how to make web content more
              accessible to people with a wide range of disabilities, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Monitor,
                  title: "Visual Disabilities",
                  desc: "Blindness, low vision, and color blindness",
                },
                {
                  icon: Users,
                  title: "Auditory Disabilities",
                  desc: "Deafness and hearing impairments",
                },
                {
                  icon: Accessibility,
                  title: "Motor Disabilities",
                  desc: "Limited fine motor control and physical limitations",
                },
                {
                  icon: Target,
                  title: "Cognitive Disabilities",
                  desc: "Learning disabilities and cognitive limitations",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title}>
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-500">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* WCAG Principles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              WCAG 2.2 Principles
            </h2>
            <p className="text-neutral-600 mb-6">
              WCAG 2.2 is organized around four principles, known as POUR. We
              strive to meet these principles across our entire website:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  letter: "P",
                  title: "Perceivable",
                  description:
                    "Information and user interface components must be presentable to users in ways they can perceive. This includes providing text alternatives, captions, and adaptable content.",
                  color: "bg-primary-600",
                },
                {
                  letter: "O",
                  title: "Operable",
                  description:
                    "User interface components and navigation must be operable. Users must be able to interact with all controls and navigation using keyboard, mouse, or assistive technologies.",
                  color: "bg-secondary-500",
                },
                {
                  letter: "U",
                  title: "Understandable",
                  description:
                    "Information and the operation of the user interface must be understandable. Content should be readable and predictable with clear input assistance.",
                  color: "bg-accent-500",
                },
                {
                  letter: "R",
                  title: "Robust",
                  description:
                    "Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies, both current and future.",
                  color: "bg-primary-500",
                },
              ].map((principle) => (
                <Card key={principle.letter}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 ${principle.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {principle.letter}
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Accessibility Features on This Website
            </h2>
            <p className="text-neutral-600 mb-6">
              We have implemented the following accessibility features to ensure
              an inclusive experience for all users:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Browser and Assistive Technology Compatibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Compatibility
            </h2>
            <p className="text-neutral-600 mb-4">
              Our website is designed to be compatible with the following
              assistive technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
            <p className="text-neutral-600 mt-4">
              Our site is tested with the latest versions of Chrome, Firefox,
              Safari, and Edge browsers for optimal accessibility support.
            </p>
          </div>

          {/* Known Limitations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Known Limitations
            </h2>
            <p className="text-neutral-600 mb-4">
              Despite our best efforts, some parts of the website may not yet
              fully meet all accessibility standards. Known limitations include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>
                Some older PDF documents may not be fully accessible. We are
                working to remediate these and provide alternative formats upon
                request.
              </li>
              <li>
                Some third-party embedded content (such as social media feeds or
                external maps) may not be fully accessible. We work with our
                vendors to improve this.
              </li>
              <li>
                Some interactive data visualizations may have limited
                accessibility. We provide text-based alternatives where
                possible.
              </li>
            </ul>
            <p className="text-neutral-600 mt-4">
              We are actively working to address these limitations and welcome
              your feedback to help us improve.
            </p>
          </div>

          {/* Assessment and Testing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Assessment and Testing
            </h2>
            <p className="text-neutral-600">
              We assess the accessibility of our website through a combination
              of automated testing tools, manual testing with assistive
              technologies, and user testing with people with disabilities. We
              conduct regular accessibility audits and address issues as they are
              identified. Our development team receives ongoing training in
              accessible web design and development practices.
            </p>
          </div>

          {/* Feedback and Contact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Feedback and Contact Information
            </h2>
            <p className="text-neutral-600 mb-6">
              We welcome your feedback on the accessibility of our website. If
              you encounter any accessibility barriers, need content in an
              alternative format, or have suggestions for improvement, please
              contact us:
            </p>

            <Card className="border-primary-200 bg-primary-50/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-neutral-700">
                      Email
                    </p>
                    <a
                      href="mailto:accessibility@hoopafrica.org"
                      className="text-primary-600 hover:underline"
                    >
                      accessibility@hoopafrica.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-neutral-700">
                      Phone
                    </p>
                    <a
                      href={`tel:${CONTACTS.namibia.phone.replace(/\s/g, "")}`}
                      className="text-primary-600 hover:underline"
                    >
                      {CONTACTS.namibia.phone}
                    </a>
                  </div>
                </div>
                <p className="text-sm text-neutral-500">
                  We try to respond to accessibility feedback within 5 business
                  days and will work with you to find a solution.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enforcement Procedure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Enforcement Procedure
            </h2>
            <p className="text-neutral-600">
              If you are not satisfied with our response to your accessibility
              concern, you may escalate the matter to the relevant regulatory
              authority in your jurisdiction. We are committed to working in good
              faith to resolve any accessibility issues and appreciate your
              patience as we continue to improve.
            </p>
          </div>

          {/* Related Legal Links */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">
              Related Legal Documents
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/legal/privacy"
                className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/legal/cookies"
                className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
