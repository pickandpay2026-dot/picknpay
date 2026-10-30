import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent">
      {/* Decorative brand colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-opal-lavender/60 blur-3xl" />
        <div className="absolute -left-20 top-64 h-64 w-64 rounded-full bg-aqua/50 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-iridescent-pink/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        {/* Main heading and actions */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-flex rounded-full border border-brand/15 bg-surface/80 px-4 py-2 text-sm font-semibold text-brand">
            Your neighborhood marketplace
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Your needs.
            <br />
            Your budget.
            <br />
            Your Delivery choices!
            <br />
            <span className="text-brand">Your local options.</span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-muted sm:text-lg lg:mx-0">
            Discover local merchants and service providers ,alongside your
            doorstep delivery option or,get to become one and connect with
            customers .
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/shops"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Explore Shops
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand/30 bg-surface px-7 py-3 font-semibold text-brand transition hover:bg-opal-lavender/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Find Local Services
            </Link>
          </div>

          <p className="text-sm text-muted">
            Meet sellers .Buy service or product. Get delivery .
          </p>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
}
