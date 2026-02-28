import type { MetadataRoute } from "next";
import { SITE_URL, FOCUS_AREAS, SERVICE_OFFERINGS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/about/our-story",
    "/about/mission-vision",
    "/about/leadership",
    "/about/governance",
    "/about/where-we-work",
    "/our-work",
    "/impact",
    "/impact/stories",
    "/impact/dashboard",
    "/impact/annual-reports",
    "/get-involved",
    "/get-involved/donate",
    "/get-involved/partner",
    "/get-involved/volunteer",
    "/get-involved/careers",
    "/resources",
    "/resources/news",
    "/resources/publications",
    "/resources/media-kit",
    "/services",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/accessibility",
    "/legal/cookies",
  ];

  const focusAreaPages = FOCUS_AREAS.map((area) => area.href);
  const servicePages = SERVICE_OFFERINGS.map((service) => service.href);

  const allPages = [...staticPages, ...focusAreaPages, ...servicePages];

  return allPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("donate") ? 0.9 : 0.7,
  }));
}
