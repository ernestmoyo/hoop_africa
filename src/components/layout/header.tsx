"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                width={200}
                height={56}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors",
                      activeDropdown === item.label && "text-primary-600 bg-primary-50"
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <button
                className="hidden md:flex items-center gap-1 px-2 py-2 text-sm text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">EN</span>
              </button>

              {/* Donate button */}
              <Link href="/get-involved/donate">
                <Button size="sm" className="hidden sm:inline-flex gap-2">
                  <Heart className="w-4 h-4" />
                  Donate
                </Button>
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} />
        )}
      </header>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="lg:hidden bg-white border-t border-neutral-200 shadow-xl">
      <nav className="px-4 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === item.label ? null : item.label
                    )
                  }
                  className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform",
                      expandedItem === item.label && "rotate-180"
                    )}
                  />
                </button>
                {expandedItem === item.label && (
                  <div className="pl-4 space-y-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-3 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        {/* Mobile donate button */}
        <div className="pt-4 border-t border-neutral-200">
          <Link href="/get-involved/donate" onClick={onClose}>
            <Button className="w-full gap-2">
              <Heart className="w-4 h-4" />
              Support Our Mission
            </Button>
          </Link>
        </div>

        {/* Language switcher mobile */}
        <div className="flex items-center gap-4 px-3 pt-3">
          <button className="text-sm font-medium text-primary-600">EN</button>
          <button className="text-sm font-medium text-neutral-400 hover:text-primary-600">SW</button>
          <button className="text-sm font-medium text-neutral-400 hover:text-primary-600">FR</button>
        </div>
      </nav>
    </div>
  );
}
