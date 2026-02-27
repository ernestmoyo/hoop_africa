import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE_NAME}. Reach our offices in Namibia, Tanzania, and the DR Congo. Contact us for partnerships, donations, media inquiries, or general questions.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
