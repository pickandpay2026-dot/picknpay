"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Controls the shape of each masonry tile.
const SHAPE = {
  tall: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
  tiny: "aspect-[3/2]",
};

// Replace placeholder image paths with files that exist in /public/images.
const COLUMNS = [
  {
    title: "Local Services",
    subtitle: "Find trusted people to help.",
    href: "/services",
    tiles: [
      {
        tag: "Home repairs",
        category: "Home",
        title: "Plumbing",
        img: "/images/plumbing-pnp.jpg",
        shape: "tall",
      },
      {
        tag: "Personal care",
        category: "Personal care",
        title: "Barbers & salons",
        img: "/images/barber-pnp.jpg",
        shape: "wide",
      },
      {
        tag: "Home maintenance",
        category: "Home",
        title: "Electrical repairs",
        img: "/images/electrical-pnp.jpg",
        shape: "wide",
      },
      {
        tag: "Cleaning services",
        category: "Home",
        title: "Home cleaning",
        img: "/images/cleaner-pnp.jpg",
        shape: "tall",
      },
      {
        tag: "Cleaning services",
        category: "Garden",
        title: "Compound cleaning",
        img: "/images/c-cleaning-pnp.jpg",
        shape: "tiny",
      },
      {
        tag: "Cleaning services",
        category: "Garden",
        title: "Grass cutting",
        img: "/images/grass-cutter-pnp.jpg",
        shape: "tiny",
      },
    ],
  },
  {
    title: "Delivery & Pickup",
    subtitle: "Get orders your way.",
    href: "/delivery",
    tiles: [
      {
        tag: "Convenience",
        category: "Delivery",
        title: "Local delivery",
        img: "/images/local-delivery-pnp.jpg",
        shape: "tall",
      },
      {
        tag: "At your doorstep",
        category: "Delivery",
        title: "Home delivery",
        img: "/images/grocery-drop-pnp.jpg",
        shape: "wide",
      },
      {
        tag: "Collect your order",
        category: "Pickup",
        title: "Store pickup",
        img: "/images/pickup-pnp.jpg",
        shape: "wide",
      },
      {
        tag: "Local logistics",
        category: "Delivery",
        title: "Delivery partners",
        img: "/images/couriers-pnp.jpg",
        shape: "tall",
      },
    ],
  },
  {
    title: "Local Merchants",
    subtitle: "Shop local businesses.",
    href: "/shops",
    tiles: [
      {
        tag: "Fresh produce",
        category: "Groceries",
        title: "Groceries",
        img: "/images/groceries-pnp.jpg",
        shape: "tall",
      },
      {
        tag: "Everyday needs",
        category: "Household",
        title: "Household essentials",
        img: "/images/household-pnp.jpg",
        shape: "wide",
      },
      {
        tag: "Health essentials",
        category: "Health",
        title: "Pharmacies",
        img: "/images/pharmacy-pnp.jpg",
        shape: "wide",
      },
      {
        tag: "Shop nearby",
        category: "Groceries",
        title: "Local food shops",
        img: "/images/fresh-food-pnp.jpg",
        shape: "tall",
      },
    ],
  },
];

export default function MarketplaceColumns() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [filters, setFilters] = useState({});

  // Identify the card closest to the left edge while swiping on mobile.
  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    if (!cards.length) return;

    const nearestIndex = cards.reduce((nearest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - track.scrollLeft);
      const nearestDistance = Math.abs(
        cards[nearest].offsetLeft - track.scrollLeft,
      );

      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setActive(nearestIndex);
  }

  // Move to the selected marketplace category.
  function goTo(index) {
    const track = trackRef.current;
    const card = track?.children[index];

    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActive(index);
  }

  return (
    <section
      id="marketplace"
      aria-labelledby="marketplace-showcase-title"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Section introduction uses PicknPay's existing theme tokens. */}
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua">
        One local marketplace
      </p>

      <h2
        id="marketplace-showcase-title"
        className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
      >
        Everything closer to home
      </h2>

      <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
        Discover local services, neighborhood merchants, and convenient delivery
        or pickup in one place.
      </p>

      <nav
        className="mt-5 flex gap-2 overflow-x-auto pb-1 md:hidden"
        aria-label="Marketplace categories"
      >
        {COLUMNS.map((column, index) => (
          <button
            key={column.title}
            type="button"
            aria-current={active === index ? "true" : undefined}
            onClick={() => goTo(index)}
            className={`shrink-0 rounded-2×1 border px-2 py-1.5 text-xs font-semibold transition ${active === index ? "border-brand bg-brand/20 text-ink" : "border-border bg-surface/70 text-muted"}`}
          >
            {column.title === "Local Services"
              ? "Services"
              : column.title === "Local Merchants"
                ? "Merchants"
                : column.title}
          </button>
        ))}
      </nav>

      {/* Mobile: snap between peekaboo columns; each column scrolls independently. */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-4 md:overflow-visible"
      >
        {COLUMNS.map((column) => (
          <article
            key={column.title}
            className="glass-panel flex h-[min(38rem,72vh)] min-h-[28rem] w-[88%] shrink-0 snap-center flex-col rounded-1xl.5 border border-border p-3 sm:p-4 md:h-[38rem] md:min-h-0 md:w-auto md:shrink md:snap-none"
          >
            <header className="mb-4 flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-ink">{column.title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted">
                  {column.subtitle}
                </p>
              </div>

              <Link
                href={column.href}
                aria-label={`View all ${column.title.toLowerCase()}`}
                className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-brand transition hover:bg-brand/10"
              >
                View all
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </header>

            {/* The card stays fixed while its masonry content scrolls. */}
            <div
              className="mb-3 flex shrink-0 flex-wrap gap-1.5"
              aria-label={`${column.title} filters`}
            >
              {[
                "All",
                ...new Set(column.tiles.map((tile) => tile.category)),
              ].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={(filters[column.title] || "All") === filter}
                  onClick={() =>
                    setFilters((current) => ({
                      ...current,
                      [column.title]: filter,
                    }))
                  }
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold transition ${(filters[column.title] || "All") === filter ? "border-aqua/50 bg-aqua/10 text-aqua" : "border-border text-muted hover:text-ink"}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div
              tabIndex={0}
              aria-label={`${column.title} categories`}
              className="min-h-0 flex-1 snap-y snap-mandatory overflow-y-auto overscroll-contain pr-1 [scrollbar-width:thin] [scrollbar-color:var(--pnp-border)_transparent]"
            >
              <div className="columns-2 gap-2 pb-3 sm:gap-3">
                {column.tiles
                  .filter(
                    (tile) =>
                      (filters[column.title] || "All") === "All" ||
                      tile.category === filters[column.title],
                  )
                  .map((tile) => (
                    <Link
                      key={tile.title}
                      href={column.href}
                      className="group mb-2 block snap-start break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-surface sm:mb-3"
                    >
                      <div className={`relative w-full ${SHAPE[tile.shape]}`}>
                        <Image
                          src={tile.img}
                          alt={tile.title}
                          fill
                          sizes="(min-width: 768px) 20vw, 75vw"
                          className="object-cover opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-[9px] font-semibold uppercase leading-4 tracking-wide text-aqua sm:text-[10px]">
                          {tile.tag}
                        </p>
                        <p className="mt-0.5 text-xs font-bold leading-4 text-ink">
                          {tile.title}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dots provide a second way to move between columns. */}
      <div
        className="mt-3 flex justify-center gap-2 md:hidden"
        aria-label="Marketplace category navigation"
      >
        {COLUMNS.map((column, index) => (
          <button
            key={column.title}
            type="button"
            aria-label={`Show ${column.title}`}
            aria-current={active === index ? "true" : undefined}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-200 ${
              active === index
                ? "w-6 bg-brand"
                : "w-2 bg-muted/40 hover:bg-muted/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
