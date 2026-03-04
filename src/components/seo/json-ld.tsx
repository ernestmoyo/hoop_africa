import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, REGISTRATION_INFO, SOCIAL_LINKS, EMAIL } from "@/lib/constants";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    foundingDate: "2025-08-08",
    foundingLocation: {
      "@type": "Place",
      name: "Windhoek, Namibia",
    },
    areaServed: [
      { "@type": "Country", name: "Namibia" },
      { "@type": "Country", name: "Tanzania" },
      { "@type": "Country", name: "Democratic Republic of the Congo" },
    ],
    sameAs: Object.values(SOCIAL_LINKS),
    email: EMAIL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+264813022416",
        contactType: "Regional Office",
        areaServed: "NA",
      },
      {
        "@type": "ContactPoint",
        telephone: "+255755731262",
        contactType: "Headquarters",
        areaServed: "TZ",
      },
      {
        "@type": "ContactPoint",
        telephone: "+243829494537",
        contactType: "Regional Office",
        areaServed: "CD",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
