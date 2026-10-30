"use client";

import { useEffect, useState } from "react";

// Each object defines one marketplace card.
// Update the image URL, text, or href here when needed.
const slides = [
  {
    title: "Shop Local",
    description:
      "Discover fresh produce, groceries, pharmacies, and everyday essentials from businesses near you.",
    buttonText: "Explore Shops",
    href: "/shops",
    image: "/images/grocery-pnp.jpg",
    position: "center",
  },
  {
    title: "Delivery or Pickup",
    description:
      "Get your purchases delivered conveniently or choose local pickup where available.",
    buttonText: "Explore Delivery",
    href: "/delivery",
    image: "/images/delivery-pnp-webp.jpg",
    position: "center",
  },
  {
    title: "Local Services",
    description:
      "Find local professionals for repairs, cleaning, beauty, and other everyday needs.",
    buttonText: "Explore Services",
    href: "/services",
    image: "/images/services-pnp-webp.jpg",
    position: "center",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const totalSlides = slides.length;

  // Wrap around so the carousel never reaches a dead end.
  function showNext() {
    setActiveIndex((current) => (current + 1) % totalSlides);
  }

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  }

  // Automatically advance every 6 seconds.
  // Respect visitors who prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(showNext, 6000);

    return () => window.clearInterval(timer);
  }, []);

  // Record where a mobile swipe begins.
  function handleTouchStart(event) {
    setTouchStart(event.touches[0].clientX);
  }

  // Move slides when the visitor swipes left or right.
  function handleTouchEnd(event) {
    if (touchStart === null) return;

    const distance = touchStart - event.changedTouches[0].clientX;

    if (distance > 50) showNext();
    if (distance < -50) showPrevious();

    setTouchStart(null);
  }

  return (
    <section
      aria-label="Explore PicknPay marketplace"
      className="w-full overflow-hidden py-8 sm:py-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel stage: center card is active, side cards peek in. */}
      <div className="relative mx-auto h-[340px] w-full max-w-7xl sm:h-[390px]">
        {slides.map((slide, index) => {
          // Calculate each card's circular position.
          // With three slides, positions are -1, 0, and 1.
          const offset =
            ((index - activeIndex + totalSlides + 1) % totalSlides) - 1;

          const isActive = offset === 0;

          return (
            <article
              key={slide.title}
              aria-hidden={!isActive}
              className={`absolute left-1/2 top-1/2 h-[280px] w-[78%] max-w-[680px] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-in-out sm:h-[330px] ${
                isActive ? "z-20 opacity-100" : "z-10 opacity-55"
              }`}
              style={{
                transform: `translate(calc(-50% + ${offset * 78}%), -50%) scale(${isActive ? 1 : 0.82})`,
                backgroundImage: `linear-gradient(90deg, rgba(20,18,35,0.86), rgba(20,18,35,0.15)), url("${slide.image}")`,
                backgroundSize: "cover",
                backgroundPosition: slide.position,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div className="flex h-full max-w-lg flex-col items-start justify-center p-5 text-white sm:p-9">
                <span className="mb-3 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  PicknPay Marketplace
                </span>

                <h2 className="text-2xl font-extrabold sm:text-4xl">
                  {slide.title}
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/90 sm:text-base">
                  {slide.description}
                </p>

                <a
                  href={slide.href}
                  tabIndex={isActive ? 0 : -1}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand transition hover:bg-opal-lavender focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                >
                  {slide.buttonText}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Previous arrow, slide indicators, and next arrow. */}
      <div className="mt-4 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-xl text-ink transition hover:bg-opal-lavender focus-visible:outline-2 focus-visible:outline-brand"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${slide.title} slide`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-brand"
                  : "w-2.5 bg-brand/25 hover:bg-brand/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={showNext}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-xl text-ink transition hover:bg-opal-lavender focus-visible:outline-2 focus-visible:outline-brand"
        >
          →
        </button>
      </div>
    </section>
  );
}
