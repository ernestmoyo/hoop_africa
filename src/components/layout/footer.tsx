import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  SITE_NAME,
  SITE_TAGLINE,
  CONTACTS,
  SOCIAL_LINKS,
  REGISTRATION_INFO,
  EMAIL,
} from "@/lib/constants";

const footerLinks = {
  about: [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Mission & Vision", href: "/about/mission-vision" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Where We Work", href: "/about/where-we-work" },
  ],
  work: [
    { label: "Public Health", href: "/our-work/public-health" },
    { label: "Education", href: "/our-work/education" },
    { label: "Agriculture", href: "/our-work/agriculture" },
    { label: "Climate Action", href: "/our-work/climate-action" },
    { label: "Emerging Tech", href: "/our-work/emerging-tech" },
  ],
  involved: [
    { label: "Donate", href: "/get-involved/donate" },
    { label: "Partner With Us", href: "/get-involved/partner" },
    { label: "Volunteer", href: "/get-involved/volunteer" },
    { label: "Careers", href: "/get-involved/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Accessibility", href: "/legal/accessibility" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main footer */}
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt={SITE_NAME}
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-neutral-400 mb-6 max-w-md">
              {SITE_TAGLINE}. African-founded, African-led. Unlocking potential
              across Namibia, Tanzania, and the Democratic Republic of Congo.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="font-medium text-neutral-200">{EMAIL}</span>
              </a>
              {Object.values(CONTACTS).map((contact) => (
                <div key={contact.country} className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
                  <span className="font-medium text-neutral-200">{contact.country}:</span>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
                { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-primary-600 text-neutral-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2.5">
              {footerLinks.involved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
              <span>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span>
                Registered under {REGISTRATION_INFO.type} of the {REGISTRATION_INFO.act} | Reg No: {REGISTRATION_INFO.number}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span>Aligned with AU Agenda 2063 & UN SDGs</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
