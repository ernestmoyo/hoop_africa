import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Image as ImageIcon,
  FileText,
  Palette,
  ChevronLeft,
  Mail,
  Phone,
  ArrowRight,
  Camera,
  Type,
  Square,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME, CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Media Kit",
  description: `Brand assets, logos, press materials, and media guidelines for ${SITE_NAME}. Everything journalists and partners need.`,
};

const brandColors = [
  {
    name: "Primary Purple",
    hex: "#7C3AED",
    tailwind: "primary-500",
    usage: "Main brand color, headings, buttons",
    swatch: "bg-primary-500",
  },
  {
    name: "Deep Purple",
    hex: "#5B21B6",
    tailwind: "primary-700",
    usage: "Dark backgrounds, hero sections",
    swatch: "bg-primary-700",
  },
  {
    name: "Royal Purple",
    hex: "#4C1D95",
    tailwind: "primary-900",
    usage: "Darkest brand elements",
    swatch: "bg-primary-900",
  },
  {
    name: "Gold / Amber",
    hex: "#F59E0B",
    tailwind: "secondary-500",
    usage: "Accents, CTAs, highlights",
    swatch: "bg-secondary-500",
  },
  {
    name: "Green",
    hex: "#10B981",
    tailwind: "accent-500",
    usage: "Success states, sustainability themes",
    swatch: "bg-accent-500",
  },
];

const logoAssets = [
  {
    name: "Primary Logo (Full Color)",
    description: "The main logo for light backgrounds",
    format: "SVG, PNG",
    preview: "bg-white border-2 border-neutral-200",
  },
  {
    name: "Primary Logo (White)",
    description: "For dark or colored backgrounds",
    format: "SVG, PNG",
    preview: "bg-primary-800",
  },
  {
    name: "Logo Mark (Icon Only)",
    description: "Compact icon mark for small spaces",
    format: "SVG, PNG",
    preview: "bg-neutral-50 border-2 border-neutral-200",
  },
  {
    name: "Logo Mark (Monochrome)",
    description: "Single-color version for print use",
    format: "SVG, PNG, EPS",
    preview: "bg-neutral-800",
  },
];

const pressDocuments = [
  {
    title: "Organization Fact Sheet",
    description: "Key facts, mission, programs, and impact statistics",
    format: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Boilerplate / About Us",
    description: "Standard organization description for press use",
    format: "DOCX, TXT",
    size: "45 KB",
  },
  {
    title: "Executive Bios",
    description: "Leadership team biographies and headshots",
    format: "PDF",
    size: "3.4 MB",
  },
  {
    title: "Press Release Template",
    description: "Branded template for joint press releases",
    format: "DOCX",
    size: "120 KB",
  },
  {
    title: "High-Resolution Photography",
    description: "Program photography approved for editorial use",
    format: "ZIP (JPEG)",
    size: "45 MB",
  },
];

const usageGuidelines = {
  dos: [
    "Use official logo files provided in the media kit",
    "Maintain minimum clear space around the logo",
    "Use approved brand colors from the palette",
    "Credit Hoop Africa Foundation in full on first mention",
    "Link to www.hoopafrica.org when publishing digitally",
  ],
  donts: [
    "Alter, distort, or recolor the logo",
    "Place the logo on visually busy backgrounds",
    "Use outdated or unofficial logo versions",
    "Crop or modify the logo proportions",
    "Imply endorsement without prior approval",
  ],
};

export default function MediaKitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1 text-primary-200 hover:text-white transition-colors mb-6 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Media <span className="text-secondary-400">Kit</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
            Everything journalists, partners, and media professionals need to
            accurately represent Hoop Africa Foundation. Download brand assets,
            press materials, and guidelines.
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors">
              <Download className="w-5 h-5" />
              Download Complete Media Kit
            </button>
          </div>
        </Container>
      </section>

      {/* Logo Assets */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Logo Assets"
            subtitle="Download our official logos in various formats and colorways"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logoAssets.map((logo) => (
              <Card key={logo.name} className="overflow-hidden">
                <div
                  className={`h-40 ${logo.preview} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                      <ImageIcon
                        className={`w-10 h-10 ${
                          logo.preview.includes("primary-800") ||
                          logo.preview.includes("neutral-800")
                            ? "text-white/50"
                            : "text-primary-300"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-xs ${
                        logo.preview.includes("primary-800") ||
                        logo.preview.includes("neutral-800")
                          ? "text-white/50"
                          : "text-neutral-400"
                      }`}
                    >
                      Logo Preview
                    </p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">
                    {logo.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-3">
                    {logo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {logo.format}
                    </span>
                    <button className="inline-flex items-center gap-1 text-primary-600 text-xs font-semibold hover:text-primary-700">
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Colors */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Brand Colors"
            subtitle="Our official color palette for consistent brand representation"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {brandColors.map((color) => (
              <Card key={color.name} className="overflow-hidden">
                <div className={`h-28 ${color.swatch}`} />
                <CardContent className="p-5">
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">
                    {color.name}
                  </h3>
                  <div className="space-y-1 text-xs text-neutral-500">
                    <p>
                      <span className="font-mono font-medium text-neutral-700">
                        {color.hex}
                      </span>
                    </p>
                    <p>Tailwind: {color.tailwind}</p>
                    <p className="text-neutral-400">{color.usage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Typography */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Typography"
            subtitle="Our official typefaces for print and digital use"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Type className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">Headings</h3>
                    <p className="text-sm text-neutral-500">Primary typeface</p>
                  </div>
                </div>
                <p
                  className="text-3xl font-bold text-neutral-900 mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Plus Jakarta Sans
                </p>
                <p className="text-neutral-500 text-sm mb-4">
                  Used for all headings, navigation, and display text. Bold and
                  semi-bold weights.
                </p>
                <p
                  className="text-lg text-neutral-700"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  0123456789
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Type className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">Body Text</h3>
                    <p className="text-sm text-neutral-500">Secondary typeface</p>
                  </div>
                </div>
                <p
                  className="text-3xl font-bold text-neutral-900 mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Inter
                </p>
                <p className="text-neutral-500 text-sm mb-4">
                  Used for body copy, paragraphs, and smaller UI elements.
                  Regular and medium weights.
                </p>
                <p
                  className="text-lg text-neutral-700"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  0123456789
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <SectionHeading
            title="Brand Usage Guidelines"
            subtitle="Please follow these guidelines when using our brand assets"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-accent-600 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Do
                </h3>
                <ul className="space-y-4">
                  {usageGuidelines.dos.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Don&apos;t
                </h3>
                <ul className="space-y-4">
                  {usageGuidelines.donts.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Press Documents */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Press Materials"
            subtitle="Downloadable documents for media and press coverage"
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {pressDocuments.map((doc) => (
              <Card key={doc.title}>
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900">{doc.title}</h3>
                    <p className="text-sm text-neutral-500">{doc.description}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right text-xs text-neutral-400">
                      <p>{doc.format}</p>
                      <p>{doc.size}</p>
                    </div>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Press Contact
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              For media inquiries, interview requests, or additional press
              materials, please contact our communications team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="mailto:media@hoopafrica.org"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                <Mail className="w-5 h-5" />
                media@hoopafrica.org
              </a>
              <a
                href={`tel:${CONTACTS.namibia.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                <Phone className="w-5 h-5" />
                {CONTACTS.namibia.phone}
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
