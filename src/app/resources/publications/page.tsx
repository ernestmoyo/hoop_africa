import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  BookOpen,
  ChevronLeft,
  Calendar,
  Users,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Publications",
  description: `Research papers, reports, and policy briefs from ${SITE_NAME}. Evidence-based insights for Africa's development.`,
};

const publicationTypes = [
  "All",
  "Research Papers",
  "Annual Reports",
  "Policy Briefs",
  "Working Papers",
  "Case Studies",
];

const featuredPublication = {
  title: "Unlocking Human Capital: A Framework for Sustainable Development in Sub-Saharan Africa",
  authors: "Hoop Africa Research Team",
  date: "2025-11",
  type: "Research Paper",
  abstract:
    "This comprehensive paper presents a multi-dimensional framework for human capital development across Sub-Saharan Africa, examining the interconnections between health, education, technology, and economic empowerment. Drawing on field data from Namibia, Tanzania, and the DRC, we propose actionable strategies for organizations and policymakers.",
  pages: 42,
  downloads: 1250,
  href: "#",
};

const publications = [
  {
    title: "Annual Report 2025: A Year of Foundations and Growth",
    authors: "Hoop Africa Foundation",
    date: "2025-12",
    type: "Annual Report",
    abstract:
      "Our inaugural annual report documenting the foundation's establishment, early programs, partnerships, and impact metrics across three African nations.",
    pages: 36,
    downloads: 890,
    href: "#",
  },
  {
    title: "Public Health Access in Rural Namibia: Challenges and Opportunities",
    authors: "Dr. A. Mwanga, R. Kapenda, L. Shilongo",
    date: "2025-10",
    type: "Research Paper",
    abstract:
      "An analysis of healthcare accessibility barriers in rural Namibian communities, with data-driven recommendations for improving primary care delivery and health financing models.",
    pages: 28,
    downloads: 640,
    href: "#",
  },
  {
    title: "Digital Skills for Africa's Youth: A Policy Brief",
    authors: "Hoop Africa Education Unit",
    date: "2025-09",
    type: "Policy Brief",
    abstract:
      "Policy recommendations for integrating digital literacy and emerging technology skills into educational curricula across Sub-Saharan African nations.",
    pages: 12,
    downloads: 520,
    href: "#",
  },
  {
    title: "Climate Resilience in the Congo Basin: Community Perspectives",
    authors: "M. Lukusa, J. Kabongo, Hoop Africa Climate Team",
    date: "2025-08",
    type: "Working Paper",
    abstract:
      "A qualitative study examining community-level perceptions of climate change impacts and adaptive strategies in the Democratic Republic of Congo.",
    pages: 22,
    downloads: 380,
    href: "#",
  },
  {
    title: "Sustainable Agriculture Practices: Lessons from Tanzanian Smallholders",
    authors: "S. Mushi, P. Temu, A. Kamara",
    date: "2025-08",
    type: "Case Study",
    abstract:
      "Documenting successful sustainable farming interventions among smallholder farming families in rural Tanzania, including impact on food security and income.",
    pages: 18,
    downloads: 310,
    href: "#",
  },
  {
    title: "Energy Access and Economic Development: A Cross-Country Analysis",
    authors: "Hoop Africa Energy Research Group",
    date: "2025-07",
    type: "Research Paper",
    abstract:
      "A comparative analysis of the relationship between energy access and economic growth across Namibia, Tanzania, and the DRC, with implications for policy and investment.",
    pages: 34,
    downloads: 450,
    href: "#",
  },
  {
    title: "Youth Empowerment Programs: Impact Evaluation Framework",
    authors: "R. Ndlovu, T. Haipinge",
    date: "2025-06",
    type: "Working Paper",
    abstract:
      "Presenting a rigorous impact evaluation methodology for assessing the effectiveness of youth empowerment and skills development programs in African contexts.",
    pages: 16,
    downloads: 290,
    href: "#",
  },
];

function formatPublicationDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

function getTypeBadgeVariant(type: string): "primary" | "secondary" | "accent" | "outline" {
  switch (type) {
    case "Research Paper":
      return "primary";
    case "Annual Report":
      return "secondary";
    case "Policy Brief":
      return "accent";
    case "Working Paper":
      return "outline";
    case "Case Study":
      return "primary";
    default:
      return "outline";
  }
}

export default function PublicationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-secondary-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1 text-primary-200 hover:text-white transition-colors mb-6 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Publications & <span className="text-secondary-400">Research</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
            Access our research papers, annual reports, policy briefs, and
            working papers that drive evidence-based development across Africa.
          </p>
        </Container>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-6 border-b border-neutral-200 bg-white">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="search"
                placeholder="Search publications..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                aria-label="Search publications"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto" role="tablist" aria-label="Publication types">
              {publicationTypes.map((type) => (
                <button
                  key={type}
                  role="tab"
                  aria-selected={type === "All"}
                  className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    type === "All"
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Publication */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Featured Publication"
            subtitle="Our most impactful recent research"
          />

          <Card className="overflow-hidden border-2 border-primary-100">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-8 lg:p-12 flex flex-col justify-center text-white">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <Badge className="bg-secondary-500 text-white border-0 w-fit mb-4">
                  {featuredPublication.type}
                </Badge>
                <div className="space-y-3 text-primary-100 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatPublicationDate(featuredPublication.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {featuredPublication.pages} pages
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {featuredPublication.downloads.toLocaleString()} downloads
                  </div>
                </div>
              </div>
              <CardContent className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3">
                  {featuredPublication.title}
                </h3>
                <p className="text-sm text-primary-600 font-medium mb-4">
                  <Users className="w-4 h-4 inline-block mr-1" />
                  {featuredPublication.authors}
                </p>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {featuredPublication.abstract}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    Read Summary
                  </button>
                </div>
              </CardContent>
            </div>
          </Card>
        </Container>
      </section>

      {/* Publications Grid */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            title="All Publications"
            subtitle="Browse our complete library of research and reports"
          />

          <div className="space-y-6">
            {publications.map((pub) => (
              <Card key={pub.title} className="overflow-hidden">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <FileText className="w-8 h-8 text-primary-500" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge variant={getTypeBadgeVariant(pub.type)}>
                          {pub.type}
                        </Badge>
                        <span className="text-sm text-neutral-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatPublicationDate(pub.date)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium mb-3">
                        {pub.authors}
                      </p>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                        {pub.abstract}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5" />
                          {pub.pages} pages
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3.5 h-3.5" />
                          {pub.downloads.toLocaleString()} downloads
                        </span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="shrink-0 flex lg:flex-col gap-2">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                        <Download className="w-4 h-4" />
                        PDF
                      </button>
                      <button className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-neutral-600 text-sm font-medium rounded-lg hover:bg-neutral-50 transition-colors">
                        Cite
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
              Load More Publications
            </button>
          </div>
        </Container>
      </section>

      {/* Research Partnership CTA */}
      <section className="py-20 bg-primary-50">
        <Container size="md">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Collaborate on Research
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              We welcome partnerships with researchers, academic institutions,
              and organizations interested in evidence-based development
              solutions for Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Contact Research Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-involved/partner"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Partnership Opportunities
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
