export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="final-cta mx-auto my-10 max-w-6xl p-6 sm:p-8 lg:p-10"
    >
      <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-aqua/20 bg-aqua/5 px-3 py-1 text-xs font-semibold tracking-wider text-aqua">
            <span aria-hidden="true">✦</span>
            YOUR NEXT DISCOVERY STARTS HERE
          </span>

          <h2
            id="final-cta-title"
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl"
          >
            Everything you need,
            <span className="block welcome-title-accent">
              closer than ever.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Connect with local merchants and service providers ,alongside your
            doorstep delivery option or,get to become one and connect with
            customers.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-row flex-wrap gap-3 md:w-auto">
          <a href="#marketplace" className="final-cta-button">
            Explore PicknPay
            <span aria-hidden="true">↗</span>
          </a>

          <a href="#how-it-works" className="final-cta-secondary">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
