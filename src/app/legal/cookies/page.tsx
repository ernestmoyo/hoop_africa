import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ChevronLeft, Mail, Calendar, Info } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_NAME, SITE_URL, CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${SITE_NAME}. Learn about the cookies and similar technologies we use on our website.`,
};

const cookieCategories = [
  {
    name: "Strictly Necessary Cookies",
    badge: "Required",
    badgeVariant: "accent" as const,
    description:
      "These cookies are essential for the website to function properly. They enable core functionality such as security, session management, and accessibility preferences. These cookies do not store any personally identifiable information and cannot be disabled.",
    cookies: [
      {
        name: "session_id",
        purpose: "Maintains user session state across page requests",
        duration: "Session",
        type: "First-party",
      },
      {
        name: "csrf_token",
        purpose: "Prevents cross-site request forgery attacks for form submissions",
        duration: "Session",
        type: "First-party",
      },
      {
        name: "cookie_consent",
        purpose: "Stores your cookie consent preferences",
        duration: "1 year",
        type: "First-party",
      },
    ],
  },
  {
    name: "Analytics Cookies",
    badge: "Optional",
    badgeVariant: "primary" as const,
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website by understanding which pages are most popular, how visitors navigate the site, and where errors occur.",
    cookies: [
      {
        name: "_ga",
        purpose: "Google Analytics - Distinguishes unique users by assigning a randomly generated number",
        duration: "2 years",
        type: "Third-party (Google)",
      },
      {
        name: "_ga_*",
        purpose: "Google Analytics - Used to persist session state",
        duration: "2 years",
        type: "Third-party (Google)",
      },
      {
        name: "_gid",
        purpose: "Google Analytics - Distinguishes users for analytics purposes",
        duration: "24 hours",
        type: "Third-party (Google)",
      },
    ],
  },
  {
    name: "Functional Cookies",
    badge: "Optional",
    badgeVariant: "secondary" as const,
    description:
      "These cookies enable enhanced functionality and personalization, such as remembering your preferred language or region, or retaining form data. If you disable these cookies, some or all of these features may not function properly.",
    cookies: [
      {
        name: "preferred_lang",
        purpose: "Stores your language preference for the website",
        duration: "1 year",
        type: "First-party",
      },
      {
        name: "font_size",
        purpose: "Stores your preferred font size setting for accessibility",
        duration: "1 year",
        type: "First-party",
      },
    ],
  },
  {
    name: "Marketing Cookies",
    badge: "Optional",
    badgeVariant: "outline" as const,
    description:
      "These cookies may be set through our site by social media platforms and advertising partners. They may be used to build a profile of your interests and show you relevant content on other sites. They do not store personal information directly but are based on uniquely identifying your browser and device.",
    cookies: [
      {
        name: "_fbp",
        purpose: "Facebook Pixel - Used to deliver, measure, and improve the relevancy of ads",
        duration: "3 months",
        type: "Third-party (Meta)",
      },
      {
        name: "li_sugr",
        purpose: "LinkedIn Insight Tag - Used for tracking and analytics",
        duration: "3 months",
        type: "Third-party (LinkedIn)",
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 60% 60%, rgba(255,255,255,0.2) 1px, transparent 1px)",
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
              <Cookie className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Cookie Policy
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-primary-200 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Effective Date: August 8, 2025
            </span>
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
          {/* Introduction */}
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-12">
            <p className="text-neutral-700 leading-relaxed">
              This Cookie Policy explains how {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) uses cookies and similar tracking technologies when you
              visit our website at{" "}
              <Link
                href={SITE_URL}
                className="text-primary-600 hover:underline"
              >
                {SITE_URL}
              </Link>
              . It explains what these technologies are, why we use them, and
              your rights to control their use. This policy should be read
              alongside our{" "}
              <Link
                href="/legal/privacy"
                className="text-primary-600 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* What Are Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              Cookies are small text files that are placed on your device
              (computer, tablet, or mobile phone) when you visit a website. They
              are widely used to make websites work efficiently, provide a better
              browsing experience, and supply information to website owners.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Cookies can be &quot;persistent&quot; (they remain on your device until they
              expire or you delete them) or &quot;session&quot; cookies (they are deleted
              when you close your browser). Cookies can also be &quot;first-party&quot;
              (set by the website you are visiting) or &quot;third-party&quot; (set by a
              different website or service).
            </p>
          </div>

          {/* Why We Use Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Why We Use Cookies
            </h2>
            <p className="text-neutral-600 mb-4">
              We use cookies and similar technologies for several reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>
                <strong>Essential operation:</strong> To ensure our website
                functions correctly and securely.
              </li>
              <li>
                <strong>Performance and analytics:</strong> To understand how
                visitors use our website, so we can improve it.
              </li>
              <li>
                <strong>Functionality:</strong> To remember your preferences and
                settings for a personalized experience.
              </li>
              <li>
                <strong>Outreach:</strong> To measure the effectiveness of our
                communications and outreach efforts.
              </li>
            </ul>
          </div>

          {/* Cookie Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Types of Cookies We Use
            </h2>

            <div className="space-y-8">
              {cookieCategories.map((category) => (
                <Card key={category.name} className="overflow-hidden">
                  <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {category.name}
                    </h3>
                    <Badge variant={category.badgeVariant}>
                      {category.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Cookie Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" role="table">
                        <thead>
                          <tr className="border-b border-neutral-200">
                            <th
                              scope="col"
                              className="text-left py-3 pr-4 font-semibold text-neutral-700"
                            >
                              Cookie Name
                            </th>
                            <th
                              scope="col"
                              className="text-left py-3 pr-4 font-semibold text-neutral-700"
                            >
                              Purpose
                            </th>
                            <th
                              scope="col"
                              className="text-left py-3 pr-4 font-semibold text-neutral-700"
                            >
                              Duration
                            </th>
                            <th
                              scope="col"
                              className="text-left py-3 font-semibold text-neutral-700"
                            >
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.cookies.map((cookie) => (
                            <tr
                              key={cookie.name}
                              className="border-b border-neutral-100 last:border-0"
                            >
                              <td className="py-3 pr-4 font-mono text-xs text-primary-600 whitespace-nowrap">
                                {cookie.name}
                              </td>
                              <td className="py-3 pr-4 text-neutral-600 text-xs">
                                {cookie.purpose}
                              </td>
                              <td className="py-3 pr-4 text-neutral-500 text-xs whitespace-nowrap">
                                {cookie.duration}
                              </td>
                              <td className="py-3 text-neutral-500 text-xs whitespace-nowrap">
                                {cookie.type}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Similar Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Similar Technologies
            </h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              In addition to cookies, we may use the following similar
              technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>
                <strong>Web beacons (pixel tags):</strong> Small transparent
                images embedded in web pages or emails that help us track user
                interaction and measure campaign effectiveness.
              </li>
              <li>
                <strong>Local storage:</strong> A browser feature that allows
                websites to store data locally on your device, similar to
                cookies but with larger capacity.
              </li>
              <li>
                <strong>Session storage:</strong> Similar to local storage but
                data is cleared when the browser session ends.
              </li>
            </ul>
          </div>

          {/* Managing Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              How to Manage Cookies
            </h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              You have several options for managing cookies:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                  Cookie Consent Banner
                </h3>
                <p className="text-neutral-600 text-sm">
                  When you first visit our website, you will see a cookie
                  consent banner that allows you to accept or reject optional
                  cookies. You can change your preferences at any time by
                  clicking the cookie settings link in our website footer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                  Browser Settings
                </h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  Most web browsers allow you to control cookies through their
                  settings. You can typically set your browser to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-600 text-sm">
                  <li>Block all cookies</li>
                  <li>Block only third-party cookies</li>
                  <li>Accept all cookies</li>
                  <li>Clear all cookies when you close the browser</li>
                  <li>Notify you when a cookie is being set</li>
                </ul>
                <p className="text-neutral-600 mt-4 text-sm">
                  Please note that blocking or deleting cookies may affect your
                  experience on our website and may prevent certain features from
                  functioning properly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                  Opt-Out Links
                </h3>
                <p className="text-neutral-600 mb-3 text-sm">
                  You can opt out of certain third-party cookies using the
                  following resources:
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-600 text-sm">
                  <li>
                    Google Analytics:{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                  <li>
                    Network Advertising Initiative:{" "}
                    <a
                      href="https://optout.networkadvertising.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      NAI Opt-Out Tool
                    </a>
                  </li>
                  <li>
                    Digital Advertising Alliance:{" "}
                    <a
                      href="https://optout.aboutads.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      DAA Opt-Out Tool
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Do Not Track */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Do Not Track Signals
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals
              to websites that you do not want your online activities tracked. As
              there is currently no universally accepted standard for how to
              interpret DNT signals, our website does not currently respond to
              DNT signals. However, you can manage your cookie preferences
              through the methods described above.
            </p>
          </div>

          {/* Updates to This Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Changes to This Cookie Policy
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect
              changes in the cookies we use, changes in technology, or for other
              operational, legal, or regulatory reasons. When we make changes, we
              will update the &quot;Last Updated&quot; date at the top of this page. We
              encourage you to review this policy periodically to stay informed
              about our use of cookies.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 mb-6">
              If you have questions or concerns about our use of cookies, please
              contact us:
            </p>

            <div className="bg-neutral-50 rounded-xl p-6 space-y-3">
              <p className="font-semibold text-neutral-900">{SITE_NAME}</p>
              <p className="text-neutral-600">Cookie and Privacy Inquiries</p>
              <div className="flex items-center gap-2 text-neutral-600">
                <Mail className="w-4 h-4 text-primary-500" />
                <a
                  href="mailto:privacy@hoopafrica.org"
                  className="text-primary-600 hover:underline"
                >
                  privacy@hoopafrica.org
                </a>
              </div>
              <div className="space-y-1 text-sm text-neutral-500">
                <p>Namibia: {CONTACTS.namibia.phone} ({CONTACTS.namibia.city})</p>
                <p>Tanzania: {CONTACTS.tanzania.phone} ({CONTACTS.tanzania.city})</p>
                <p>DR Congo: {CONTACTS.drc.phone} ({CONTACTS.drc.city})</p>
              </div>
              <p className="text-sm text-neutral-500">
                Website:{" "}
                <Link
                  href={SITE_URL}
                  className="text-primary-600 hover:underline"
                >
                  {SITE_URL}
                </Link>
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-6 mb-12 flex items-start gap-4">
            <Info className="w-6 h-6 text-secondary-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">
                Need Help?
              </h3>
              <p className="text-neutral-600 text-sm">
                If you need assistance understanding or managing cookies, or if
                you require this information in an alternative format, please{" "}
                <Link
                  href="/contact"
                  className="text-primary-600 hover:underline"
                >
                  contact us
                </Link>{" "}
                and we will be happy to help.
              </p>
            </div>
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
                href="/legal/accessibility"
                className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                Accessibility Statement
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
