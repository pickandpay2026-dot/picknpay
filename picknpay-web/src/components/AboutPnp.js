export default function AboutPnp() {
  const pillars = [
    {
      number: "01",
      title: "Shop local",
      description:
        "Picknpay connects you with nearby shops and local merchants.",
    },
    {
      number: "02",
      title: "Find services",
      description:
        "Picknpay enables you to get help from the comfort of your home with just a click.",
    },
    {
      number: "03",
      title: "Choose convenience",
      description:
        "Picknpay makes it easy to choose convenient delivery or pickup options when shopping locally.",
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-border bg-pearl px-3 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section introduction */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand sm:text-sm">
            About PicknPay
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
            Your local world, all in one place.
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
            PicknPay connects customers with nearby merchants and service
            providers, making it easier to discover everyday essentials, explore
            local options, and arrange convenient delivery or pickup where
            available.
          </p>
        </div>

        {/* The three pillars */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="rounded-lg border border-border bg-surface p-4 sm:p-5"
            >
              <span className="text-xs font-bold text-brand">
                {pillar.number}
              </span>

              <h3 className="mt-2 text-base font-bold text-ink sm:text-lg">
                {pillar.title}
              </h3>

              <p className="mt-2 text-sm leading-5 text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
