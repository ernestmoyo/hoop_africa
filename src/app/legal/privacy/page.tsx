import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ChevronLeft, Mail, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SITE_NAME, SITE_URL, CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, protect, and share your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)",
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
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Privacy Policy
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
          <div className="prose prose-lg prose-neutral max-w-none">
            {/* Introduction */}
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-12 not-prose">
              <p className="text-neutral-700 leading-relaxed">
                Hoop Africa Foundation (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed
                to protecting your privacy and personal data. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website{" "}
                <Link href={SITE_URL} className="text-primary-600 hover:underline">
                  {SITE_URL}
                </Link>{" "}
                or engage with our services. This policy is designed to comply
                with applicable data protection laws, including the EU General
                Data Protection Regulation (GDPR), the Tanzania Data Protection
                Act, and other relevant legislation.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-neutral-50 rounded-xl p-6 mb-12 not-prose">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">
                Table of Contents
              </h2>
              <nav aria-label="Privacy policy sections">
                <ol className="space-y-2 text-sm">
                  {[
                    "Information We Collect",
                    "How We Use Your Information",
                    "Legal Bases for Processing (GDPR)",
                    "Sharing and Disclosure of Information",
                    "International Data Transfers",
                    "Data Retention",
                    "Your Rights and Choices",
                    "Cookies and Tracking Technologies",
                    "Children's Privacy",
                    "Security Measures",
                    "Third-Party Links",
                    "Changes to This Policy",
                    "Contact Us",
                  ].map((item, index) => (
                    <li key={item}>
                      <a
                        href={`#section-${index + 1}`}
                        className="text-primary-600 hover:underline"
                      >
                        {index + 1}. {item}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-neutral-600 mb-4">
                We may collect the following categories of personal information:
              </p>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3 mt-6">
                1.1 Information You Provide Directly
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, and postal address when you contact us,
                  subscribe to our newsletter, or submit forms on our website.
                </li>
                <li>
                  <strong>Donation Information:</strong> Payment details and
                  billing information when you make a donation (processed
                  securely through third-party payment processors).
                </li>
                <li>
                  <strong>Volunteer and Career Applications:</strong>{" "}
                  Professional information, CV/resume, and related data when you
                  apply for positions or volunteer opportunities.
                </li>
                <li>
                  <strong>Communications:</strong> The content of messages,
                  emails, and other communications you send to us.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3 mt-6">
                1.2 Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  <strong>Device and Browser Information:</strong> IP address,
                  browser type, operating system, device identifiers, and screen
                  resolution.
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on
                  pages, referring URLs, click patterns, and navigation paths.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> Information
                  collected through cookies, web beacons, and similar
                  technologies. See our{" "}
                  <Link
                    href="/legal/cookies"
                    className="text-primary-600 hover:underline"
                  >
                    Cookie Policy
                  </Link>{" "}
                  for details.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-neutral-600 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  To respond to your inquiries, process donations, and provide
                  the services you request.
                </li>
                <li>
                  To send you updates, newsletters, and communications about our
                  programs and impact (with your consent where required).
                </li>
                <li>
                  To process and manage volunteer and employment applications.
                </li>
                <li>
                  To improve our website, services, and user experience through
                  analytics.
                </li>
                <li>
                  To comply with legal obligations and protect our legitimate
                  interests.
                </li>
                <li>
                  To detect, prevent, and address security issues, fraud, or
                  technical problems.
                </li>
                <li>
                  To fulfill any other purpose for which you provide consent.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                3. Legal Bases for Processing (GDPR)
              </h2>
              <p className="text-neutral-600 mb-4">
                If you are located in the European Economic Area (EEA), the
                United Kingdom, or another jurisdiction that requires a legal
                basis for processing personal data, we rely on the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  <strong>Consent:</strong> Where you have given clear consent
                  for us to process your personal data for a specific purpose
                  (e.g., subscribing to our newsletter).
                </li>
                <li>
                  <strong>Contractual Necessity:</strong> Where processing is
                  necessary to fulfill a contract or take steps at your request
                  prior to entering into a contract.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> Where processing is
                  necessary for our legitimate interests (such as improving our
                  services), provided those interests are not overridden by your
                  rights.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Where processing is
                  necessary to comply with a legal requirement.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4. Sharing and Disclosure of Information
              </h2>
              <p className="text-neutral-600 mb-4">
                We do not sell your personal information. We may share your data
                in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  vendors who assist us in operating our website, processing
                  donations, sending communications, and providing other
                  services, under strict confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  regulation, legal process, or governmental request.
                </li>
                <li>
                  <strong>Protection of Rights:</strong> To protect the rights,
                  property, or safety of {SITE_NAME}, our users, or the public.
                </li>
                <li>
                  <strong>With Your Consent:</strong> For any other purpose
                  disclosed to you at the time of collection, with your consent.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5. International Data Transfers
              </h2>
              <p className="text-neutral-600 mb-4">
                As an organization operating across multiple African countries
                (Namibia, Tanzania, and the Democratic Republic of Congo), your
                information may be transferred to and processed in countries
                other than the one in which it was collected. We ensure that
                appropriate safeguards are in place to protect your data in
                accordance with applicable law, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>Standard Contractual Clauses approved by relevant authorities.</li>
                <li>
                  Adequacy decisions where the receiving country provides
                  adequate data protection.
                </li>
                <li>
                  Your explicit consent where other safeguards are not
                  available.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-neutral-600 mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including to satisfy legal, accounting, or reporting
                requirements. Specific retention periods include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  <strong>Contact inquiries:</strong> Up to 2 years after the last interaction.
                </li>
                <li>
                  <strong>Donation records:</strong> As required by applicable tax and financial regulations (typically 7 years).
                </li>
                <li>
                  <strong>Newsletter subscriptions:</strong> Until you unsubscribe or withdraw consent.
                </li>
                <li>
                  <strong>Application data:</strong> Up to 12 months after the recruitment process concludes.
                </li>
                <li>
                  <strong>Website analytics:</strong> Up to 26 months.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-neutral-600 mb-4">
                Depending on your location and applicable law, you may have the
                following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  <strong>Right of Access:</strong> Request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of
                  inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data, subject to legal obligations.
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Request that we
                  limit the processing of your data in certain circumstances.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Request a copy of
                  your data in a structured, commonly used, machine-readable
                  format.
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests or for direct marketing purposes.
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Where processing
                  is based on consent, you may withdraw consent at any time.
                </li>
              </ul>
              <p className="text-neutral-600 mt-4">
                To exercise any of these rights, please contact us using the
                details in Section 13 below. We will respond to your request
                within 30 days (or as required by applicable law).
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-neutral-600">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. For detailed information about the
                types of cookies we use, how to manage your cookie preferences,
                and your choices, please refer to our{" "}
                <Link
                  href="/legal/cookies"
                  className="text-primary-600 hover:underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-neutral-600">
                Our website is not directed to individuals under the age of 16.
                We do not knowingly collect personal information from children
                under 16. If we become aware that we have inadvertently
                collected personal data from a child under 16, we will take
                steps to delete that information promptly. If you believe we
                have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                10. Security Measures
              </h2>
              <p className="text-neutral-600">
                We implement appropriate technical and organizational security
                measures to protect your personal data against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include encryption of data in transit (SSL/TLS), secure server
                environments, access controls, and regular security assessments.
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                11. Third-Party Links
              </h2>
              <p className="text-neutral-600">
                Our website may contain links to third-party websites, services,
                or applications. This Privacy Policy does not apply to those
                third-party sites. We encourage you to review the privacy
                policies of any third-party sites you visit. We are not
                responsible for the privacy practices or content of third-party
                websites.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                12. Changes to This Policy
              </h2>
              <p className="text-neutral-600">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, legal requirements, or
                other factors. When we make material changes, we will update the
                &quot;Last Updated&quot; date at the top of this page and, where
                appropriate, notify you via email or a prominent notice on our
                website. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                13. Contact Us
              </h2>
              <p className="text-neutral-600 mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-neutral-50 rounded-xl p-6 not-prose space-y-3">
                <p className="font-semibold text-neutral-900">{SITE_NAME}</p>
                <p className="text-neutral-600">Data Protection Inquiries</p>
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
                  <Link href={SITE_URL} className="text-primary-600 hover:underline">
                    {SITE_URL}
                  </Link>
                </p>
              </div>
              <p className="text-neutral-600 mt-4">
                If you are not satisfied with our response, you may have the
                right to lodge a complaint with a supervisory authority in your
                jurisdiction.
              </p>
            </section>
          </div>

          {/* Related Legal Links */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">
              Related Legal Documents
            </h3>
            <div className="flex flex-wrap gap-3">
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
