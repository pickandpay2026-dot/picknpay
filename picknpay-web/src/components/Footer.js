"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About PicknPay", href: "/#about" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Explore shops", href: "/shops" },
  { label: "Find services", href: "/services" },
];

const marketplaceLinks = [
  { label: "Local merchants", href: "/shops" },
  { label: "Local services", href: "/services" },
  { label: "Delivery & pickup", href: "/delivery" },
];

const accountLinks = [
  { label: "Sign in", href: "/login" },
  { label: "Create an account", href: "/signup" },
];

export default function Footer() {
  // `new Date()` is not stable during prerendering, so the year is computed
  // on the client. The rendered output is identical after hydration.
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t border-border bg-surface px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        {/* Brand and introduction */}
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-brand">
              PicknPay
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              Your local world, all in one place. Discover nearby merchants,
              everyday essential delivered, and local service providers.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold text-ink">Quick links</h3>

            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace links */}
          <div>
            <h3 className="text-sm font-bold text-ink">Marketplace</h3>

            <ul className="mt-3 space-y-2">
              {marketplaceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account and support */}
          <div>
            <h3 className="text-sm font-bold text-ink">Your account</h3>

            <ul className="mt-3 space-y-2">
              {accountLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-5 text-sm font-bold text-ink">Need help?</h3>

            <p className="mt-2 text-sm text-muted">
              Email:pickandpay2026@gmail.com
              <br />
              Telephone:0119801199
              <br />
              Whatsapp No. :+254727555076
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} PicknPay. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-brand">
              Privacy policy
            </Link>

            <Link href="/terms" className="hover:text-brand">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
