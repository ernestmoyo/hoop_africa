"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FOCUS_AREAS } from "@/lib/constants";

const COUNTRIES = ["All Countries", "Namibia", "Tanzania", "DR Congo"];

const PLACEHOLDER_STORIES = [
  {
    id: 1,
    title: "From Subsistence to Surplus: A Farmer's Journey in Rural Tanzania",
    excerpt:
      "Maria Josephat transformed her small plot into a thriving agricultural enterprise after attending our climate-smart farming workshops in Dodoma Region.",
    country: "Tanzania",
    focusArea: "agriculture",
    date: "2025-11-15",
    imagePlaceholder: "bg-gradient-to-br from-green-400 to-green-600",
  },
  {
    id: 2,
    title: "Building Digital Futures: Youth Tech Bootcamp in Windhoek",
    excerpt:
      "25 young Namibians completed our intensive 12-week coding bootcamp, with 18 securing internships at local tech companies within three months.",
    country: "Namibia",
    focusArea: "emerging-tech",
    date: "2025-10-22",
    imagePlaceholder: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "Community Health Workers Transforming Rural Healthcare in DRC",
    excerpt:
      "Our trained health workers in Kinshasa Province have reduced maternal mortality by 40% in their communities through improved prenatal care access.",
    country: "DR Congo",
    focusArea: "public-health",
    date: "2025-09-08",
    imagePlaceholder: "bg-gradient-to-br from-red-400 to-red-600",
  },
  {
    id: 4,
    title: "Solar Power Lights Up Remote Tanzanian Schools",
    excerpt:
      "12 schools in Mwanza Region now have reliable electricity for the first time, enabling evening study sessions and digital learning resources.",
    country: "Tanzania",
    focusArea: "energy-access",
    date: "2025-08-14",
    imagePlaceholder: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    id: 5,
    title: "Women's Cooperatives Driving Economic Change in Namibia",
    excerpt:
      "A network of 15 women-led cooperatives has generated over $120,000 in collective revenue, providing sustainable incomes for 200+ families.",
    country: "Namibia",
    focusArea: "empowerment",
    date: "2025-07-30",
    imagePlaceholder: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
  {
    id: 6,
    title: "Climate Resilience Training Reaches 500 Farmers in DRC",
    excerpt:
      "Smallholder farmers in eastern DRC are adopting climate-adaptive techniques that have increased yields by 35% despite changing rainfall patterns.",
    country: "DR Congo",
    focusArea: "climate-action",
    date: "2025-06-18",
    imagePlaceholder: "bg-gradient-to-br from-teal-400 to-teal-600",
  },
  {
    id: 7,
    title: "Scholarship Program Opens University Doors in Tanzania",
    excerpt:
      "30 first-generation university students from underserved communities received full scholarships, with mentoring support to ensure academic success.",
    country: "Tanzania",
    focusArea: "education",
    date: "2025-05-05",
    imagePlaceholder: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    id: 8,
    title: "Microfinance Initiative Lifts Families Above Poverty Line",
    excerpt:
      "450 families in Windhoek's informal settlements accessed micro-loans and financial literacy training, with a 94% repayment rate.",
    country: "Namibia",
    focusArea: "poverty-reduction",
    date: "2025-04-12",
    imagePlaceholder: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    id: 9,
    title: "Research Partnership Yields New Malaria Prevention Strategies",
    excerpt:
      "Collaborative research with local universities has produced evidence-based protocols now adopted by three regional health departments.",
    country: "Tanzania",
    focusArea: "research-development",
    date: "2025-03-20",
    imagePlaceholder: "bg-gradient-to-br from-indigo-400 to-indigo-600",
  },
];

function getFocusAreaLabel(id: string): string {
  const area = FOCUS_AREAS.find((a) => a.id === id);
  return area ? area.shortTitle : id;
}

function getFocusAreaColor(id: string): string {
  const area = FOCUS_AREAS.find((a) => a.id === id);
  return area ? area.color : "text-neutral-500";
}

export default function StoriesPage() {
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedFocusArea, setSelectedFocusArea] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStories = PLACEHOLDER_STORIES.filter((story) => {
    const matchesCountry =
      selectedCountry === "All Countries" ||
      story.country === selectedCountry;
    const matchesFocusArea =
      selectedFocusArea === "all" || story.focusArea === selectedFocusArea;
    const matchesSearch =
      searchQuery === "" ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesFocusArea && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
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
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/impact"
              className="inline-flex items-center text-primary-200 hover:text-white text-sm mb-6 gap-1 transition-colors"
            >
              Impact
              <span className="mx-2">/</span>
              <span className="text-white">Stories of Change</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stories of <span className="text-secondary-400">Change</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
              Behind every number is a human story. Discover how our programs
              are transforming lives and communities across the African continent.
            </p>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-0 z-30">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                aria-label="Search stories"
              />
            </div>

            {/* Country Filter */}
            <div className="relative w-full md:w-auto">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="appearance-none w-full md:w-48 px-4 py-2.5 pr-10 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
                aria-label="Filter by country"
              >
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            </div>

            {/* Focus Area Filter */}
            <div className="relative w-full md:w-auto">
              <select
                value={selectedFocusArea}
                onChange={(e) => setSelectedFocusArea(e.target.value)}
                className="appearance-none w-full md:w-56 px-4 py-2.5 pr-10 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
                aria-label="Filter by focus area"
              >
                <option value="all">All Focus Areas</option>
                {FOCUS_AREAS.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.shortTitle}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            </div>

            {/* Results Count */}
            <div className="text-sm text-neutral-500 whitespace-nowrap">
              {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"} found
            </div>
          </div>
        </Container>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <Container>
          {filteredStories.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                No stories found
              </h3>
              <p className="text-neutral-500 mb-6">
                Try adjusting your filters or search terms.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCountry("All Countries");
                  setSelectedFocusArea("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <Card key={story.id} className="group flex flex-col">
                  {/* Image Placeholder */}
                  <div
                    className={`relative h-52 ${story.imagePlaceholder} flex items-center justify-center`}
                  >
                    <BookOpen className="w-12 h-12 text-white/40" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="primary" className="bg-white/90 text-primary-700">
                        {getFocusAreaLabel(story.focusArea)}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="flex flex-col flex-1 p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {story.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(story.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {story.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {story.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center text-primary-600 font-semibold text-sm gap-1.5 group-hover:gap-2.5 transition-all">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredStories.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Stories
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-primary-50">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Have a Story to Share?
            </h2>
            <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
              If you or your community have been impacted by Hoop Africa
              Foundation programs, we would love to hear from you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Share Your Story
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Help Us Create More Stories of Change"
        subtitle="Every contribution supports real programs creating real impact in communities across Africa."
      />
    </>
  );
}
