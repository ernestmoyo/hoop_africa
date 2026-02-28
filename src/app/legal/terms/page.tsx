import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ChevronLeft, Mail, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SITE_NAME, SITE_URL, CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${SITE_NAME}. Please read these terms carefully before using our website and services.`,
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.2) 1px, transparent 1px)",
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
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Terms of Use
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
                Welcome to the {SITE_NAME} website. By accessing or using our
                website at{" "}
                <Link href={SITE_URL} className="text-primary-600 hover:underline">
                  {SITE_URL}
                </Link>
                , you agree to be bound by these Terms of Use. If you do not
                agree with any part of these terms, please do not use our
                website. These terms apply to all visitors, users, and others
                who access or use our services.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                1. About Hoop Africa Foundation
              </h2>
              <p className="text-neutral-600">
                {SITE_NAME} is a non-profit organization registered under
                Section 21 of the Companies Act of the United Republic of Namibia
                (Registration Number: 21/2022/1459). The
                organization was founded on August 8, 2025, in Windhoek,
                Namibia. We operate across Namibia, Tanzania, and the Democratic
                Republic of Congo, focusing on unlocking Africa&apos;s human capital
                through strategic management, research, innovation, and
                sustainable development.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                2. Acceptance of Terms
              </h2>
              <p className="text-neutral-600">
                By using this website, you confirm that you are at least 16
                years of age and have the legal capacity to enter into these
                Terms of Use. If you are accessing the website on behalf of an
                organization, you represent that you have the authority to bind
                that organization to these terms.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                3. Use of the Website
              </h2>
              <p className="text-neutral-600 mb-4">
                You agree to use our website only for lawful purposes and in a
                manner that does not infringe on the rights of others or
                restrict their use of the site. You must not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  Use the website in any way that violates applicable local,
                  national, or international laws or regulations.
                </li>
                <li>
                  Transmit or facilitate the transmission of unsolicited
                  advertising, spam, or other forms of solicitation.
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the
                  website, other user accounts, or computer systems connected to
                  the website.
                </li>
                <li>
                  Introduce viruses, malware, or other technologically harmful
                  material to the website.
                </li>
                <li>
                  Use automated tools, scripts, or bots to access or scrape
                  content from the website without our prior written consent.
                </li>
                <li>
                  Impersonate or attempt to impersonate {SITE_NAME}, a staff
                  member, or any other person or entity.
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits any other
                  user from using or enjoying the website.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-neutral-600 mb-4">
                All content on this website, including but not limited to text,
                graphics, logos, images, photographs, audio, video, software,
                and the design and arrangement of the website (collectively,
                &quot;Content&quot;), is the property of {SITE_NAME} or its content
                suppliers and is protected by international copyright,
                trademark, and other intellectual property laws.
              </p>
              <p className="text-neutral-600">
                You may not reproduce, distribute, modify, create derivative
                works from, display, perform, republish, download, store, or
                transmit any Content from this website without our prior written
                consent, except for personal, non-commercial use such as viewing
                or printing individual pages for your own reference.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5. Donations
              </h2>
              <p className="text-neutral-600 mb-4">
                If you choose to make a donation through our website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>
                  Donations are processed securely through third-party payment
                  processors. We do not store your full payment card details on
                  our servers.
                </li>
                <li>
                  Donations are voluntary contributions and are generally
                  non-refundable. If you believe a donation was made in error,
                  please contact us within 30 days.
                </li>
                <li>
                  We will use reasonable efforts to apply donations in
                  accordance with any specified purpose. However, we reserve the
                  right to redirect funds where needs are greatest if the
                  specified program is fully funded or discontinued.
                </li>
                <li>
                  Tax deductibility of donations depends on your jurisdiction.
                  Please consult your tax advisor for guidance.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                6. User Submissions
              </h2>
              <p className="text-neutral-600">
                Any information, feedback, suggestions, ideas, or other
                communications you submit to us through the website (including
                via contact forms, email, or social media) will be treated as
                non-confidential and non-proprietary unless otherwise stated. By
                submitting such content, you grant {SITE_NAME} a non-exclusive,
                royalty-free, perpetual, and worldwide right to use, reproduce,
                modify, adapt, publish, translate, and distribute such content
                for any purpose related to our mission.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                7. Third-Party Links and Services
              </h2>
              <p className="text-neutral-600">
                Our website may contain links to third-party websites, services,
                or resources. These links are provided for your convenience
                only. We do not control, endorse, or assume responsibility for
                the content, privacy policies, or practices of any third-party
                websites. You access third-party websites at your own risk, and
                we encourage you to review their terms and privacy policies
                before interacting with them.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-neutral-600 mb-4">
                The website and all content, materials, and services provided
                through it are offered on an &quot;as is&quot; and &quot;as available&quot; basis,
                without any warranties of any kind, either express or implied,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>Implied warranties of merchantability and fitness for a particular purpose.</li>
                <li>
                  Warranties regarding the accuracy, reliability, completeness,
                  or timeliness of content.
                </li>
                <li>
                  Warranties that the website will be uninterrupted,
                  error-free, or free from viruses or other harmful components.
                </li>
              </ul>
              <p className="text-neutral-600 mt-4">
                We make reasonable efforts to ensure the accuracy of information
                on our website but do not guarantee that all content is current,
                complete, or error-free.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-neutral-600">
                To the fullest extent permitted by applicable law, {SITE_NAME},
                its directors, officers, employees, agents, and affiliates shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to
                your use of, or inability to use, the website or its content.
                This includes, without limitation, damages for loss of profits,
                goodwill, data, or other intangible losses, even if we have been
                advised of the possibility of such damages.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                10. Indemnification
              </h2>
              <p className="text-neutral-600">
                You agree to indemnify, defend, and hold harmless {SITE_NAME},
                its officers, directors, employees, agents, and affiliates from
                and against any and all claims, liabilities, damages, losses,
                costs, and expenses (including reasonable legal fees) arising out
                of or in connection with your use of the website, violation of
                these Terms of Use, or infringement of any third-party rights.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                11. Modifications to These Terms
              </h2>
              <p className="text-neutral-600">
                We reserve the right to modify or update these Terms of Use at
                any time, at our sole discretion. Changes will be effective
                immediately upon posting the revised terms on this page. We will
                update the &quot;Last Updated&quot; date accordingly. Your continued use
                of the website after any changes constitutes your acceptance of
                the revised terms. We encourage you to review these terms
                periodically.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                12. Governing Law and Jurisdiction
              </h2>
              <p className="text-neutral-600">
                These Terms of Use shall be governed by and construed in
                accordance with the laws of the United Republic of Tanzania,
                without regard to its conflict of law principles. Any disputes
                arising from or relating to these terms or your use of the
                website shall be subject to the exclusive jurisdiction of the
                courts of Tanzania.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                13. Severability
              </h2>
              <p className="text-neutral-600">
                If any provision of these Terms of Use is found to be
                unenforceable or invalid by a court of competent jurisdiction,
                that provision shall be limited or eliminated to the minimum
                extent necessary, and the remaining provisions shall continue in
                full force and effect.
              </p>
            </section>

            {/* Section 14 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                14. Entire Agreement
              </h2>
              <p className="text-neutral-600">
                These Terms of Use, together with our{" "}
                <Link
                  href="/legal/privacy"
                  className="text-primary-600 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal/cookies"
                  className="text-primary-600 hover:underline"
                >
                  Cookie Policy
                </Link>
                , constitute the entire agreement between you and {SITE_NAME}{" "}
                regarding your use of the website and supersede all prior
                agreements and understandings.
              </p>
            </section>

            {/* Section 15 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                15. Contact Us
              </h2>
              <p className="text-neutral-600 mb-4">
                If you have questions about these Terms of Use, please contact
                us:
              </p>
              <div className="bg-neutral-50 rounded-xl p-6 not-prose space-y-3">
                <p className="font-semibold text-neutral-900">{SITE_NAME}</p>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <a
                    href="mailto:legal@hoopafrica.org"
                    className="text-primary-600 hover:underline"
                  >
                    legal@hoopafrica.org
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
            </section>
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
