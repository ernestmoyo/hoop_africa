import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Clock,
  Tag,
  ChevronLeft,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "News & Updates",
  description: `Latest news, announcements, and stories from ${SITE_NAME}. Stay informed about our impact across Africa.`,
};

const featuredArticle = {
  title: "Hoop Africa Foundation Launches New Health Initiative in Dar es Salaam",
  excerpt:
    "Our newest program aims to improve access to primary healthcare services for over 5,000 families in underserved communities across Tanzania's largest city.",
  date: "2025-12-15",
  readTime: "5 min read",
  category: "Programs",
  image: "/images/placeholder-news-featured.jpg",
  href: "#",
};

const newsArticles = [
  {
    title: "Partnership Announcement: Collaborating with Local Universities for Research",
    excerpt:
      "We are excited to announce new research partnerships with leading universities in Namibia and Tanzania to advance evidence-based development solutions.",
    date: "2025-12-01",
    readTime: "3 min read",
    category: "Partnerships",
    image: "/images/placeholder-news-1.jpg",
    href: "#",
  },
  {
    title: "Youth Empowerment Workshop Reaches 500 Participants in Windhoek",
    excerpt:
      "Our skills development workshop series has now reached a milestone of 500 young participants in Windhoek, Namibia, equipping them with digital and entrepreneurial skills.",
    date: "2025-11-18",
    readTime: "4 min read",
    category: "Education",
    image: "/images/placeholder-news-2.jpg",
    href: "#",
  },
  {
    title: "Annual Report 2025: A Year of Growth and Impact",
    excerpt:
      "Reflecting on a transformative year as we expanded operations across three countries and launched focus area programs.",
    date: "2025-11-05",
    readTime: "6 min read",
    category: "Reports",
    image: "/images/placeholder-news-3.jpg",
    href: "#",
  },
  {
    title: "Climate Resilience Project Begins in the Democratic Republic of Congo",
    excerpt:
      "Our climate change adaptation initiative launches in Kinshasa, focusing on sustainable agriculture practices and community-level climate resilience building.",
    date: "2025-10-22",
    readTime: "4 min read",
    category: "Climate Action",
    image: "/images/placeholder-news-4.jpg",
    href: "#",
  },
  {
    title: "Emerging Tech Hub Opens Doors for African Innovators",
    excerpt:
      "A new innovation hub dedicated to AI, data science, and emerging technologies now provides resources and mentorship to aspiring African tech leaders.",
    date: "2025-10-10",
    readTime: "3 min read",
    category: "Technology",
    image: "/images/placeholder-news-5.jpg",
    href: "#",
  },
  {
    title: "Food Security Initiative Supports 2,000 Farming Families",
    excerpt:
      "Our agriculture program has provided training, seeds, and sustainable farming techniques to over 2,000 families across rural Tanzania.",
    date: "2025-09-28",
    readTime: "5 min read",
    category: "Agriculture",
    image: "/images/placeholder-news-6.jpg",
    href: "#",
  },
  {
    title: "Hoop Africa Foundation Joins UN SDG Alliance Network",
    excerpt:
      "We are proud to join the broader network of organizations aligned with the United Nations Sustainable Development Goals for continental impact.",
    date: "2025-09-15",
    readTime: "3 min read",
    category: "Announcements",
    image: "/images/placeholder-news-7.jpg",
    href: "#",
  },
  {
    title: "Community Health Workers Trained in Rural Namibia",
    excerpt:
      "Our public health program has trained 150 community health workers across rural Namibia, improving healthcare access in remote communities.",
    date: "2025-09-01",
    readTime: "4 min read",
    category: "Public Health",
    image: "/images/placeholder-news-8.jpg",
    href: "#",
  },
];

const categories = [
  "All",
  "Programs",
  "Partnerships",
  "Education",
  "Reports",
  "Climate Action",
  "Technology",
  "Agriculture",
  "Announcements",
  "Public Health",
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-10 right-20 w-72 h-72 bg-secondary-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1 text-primary-200 hover:text-white transition-colors mb-6 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            News & <span className="text-secondary-400">Updates</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
            Stay informed about the latest developments, milestones, and stories
            from our programs across Africa.
          </p>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-neutral-200 bg-white sticky top-0 z-20">
        <Container>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" role="tablist" aria-label="News categories">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={category === "All"}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "bg-primary-600 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Featured Story"
            subtitle="Our most recent highlight"
          />

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tag className="w-10 h-10 text-primary-600" />
                  </div>
                  <p className="text-primary-600 font-medium text-sm">
                    Featured Image Placeholder
                  </p>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="accent">{featuredArticle.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featuredArticle.date)}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                  <Link
                    href={featuredArticle.href}
                    className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:gap-2 transition-all"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </Container>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            title="All Articles"
            subtitle="Browse our complete collection of news and updates"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link key={article.title} href={article.href} className="group">
                <Card className="h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="w-6 h-6 text-primary-400" />
                      </div>
                      <p className="text-primary-400 text-xs">Image Placeholder</p>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-neutral-500">
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <span className="flex items-center gap-1 text-xs text-neutral-500">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want Updates Delivered to You?"
        subtitle="Subscribe to our newsletter and never miss important news about our work across Africa."
        primaryCta={{ label: "Subscribe Now", href: "/resources" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
