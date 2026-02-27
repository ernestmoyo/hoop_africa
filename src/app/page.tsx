import { Hero } from "@/components/sections/hero";
import { ImpactCounter } from "@/components/sections/impact-counter";
import { FocusAreasGrid } from "@/components/sections/focus-areas-grid";
import { FeaturedStory } from "@/components/sections/featured-story";
import { Partners } from "@/components/sections/partners";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactCounter />
      <FocusAreasGrid />
      <FeaturedStory />
      <Partners />
      <CtaBanner />
      <NewsletterSignup />
    </>
  );
}
