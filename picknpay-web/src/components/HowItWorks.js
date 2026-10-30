import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover local options",
      description:
        "Explore nearby shops, everyday products, and local service providers in one marketplace.",
    },
    {
      number: "02",
      title: "Choose what suits you",
      description:
        "Compare available options and choose what fits your needs and whatever you can offer.",
    },
    {
      number: "03",
      title: "Arrange your next step",
      description:
        "Purchase or sell goods, contact or become a service provider through available features, or select delivery or pickup where offered or even become one of our delivery partners.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="border-t border-border bg-surface px-3 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section introduction */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand sm:text-sm">
            Simple by design
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
            How PicknPay works
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Find what you need locally, make an informed choice, and take the
            next step with less hassle.
          </p>
        </div>

        {/* Three steps */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-lg border border-border p-4 sm:p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-opal-lavender text-sm font-bold text-brand">
                {step.number}
              </span>

              <h3 className="mt-4 text-base font-bold text-ink sm:text-lg">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Optional action to begin */}
        <div className="mt-6">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Get started{" "}
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
