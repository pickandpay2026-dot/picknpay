export default function MarketplaceTicker() {
  const messages = [
    "Shop from local businesses",
    "Discover trusted service providers",
    "Choose delivery or pickup",
    "Find options that fit your budget",
  ];

  return (
    <section
      aria-label="PicknPay marketplace highlights"
      className="ticker-glass"
    >
      <div className="animate-ticker">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center gap-8 px-5 py-3"
            aria-hidden={group === 1}
          >
            {messages.map((message) => (
              <span
                key={message}
                className="ticker-item flex shrink-0 items-center whitespace-nowrap text-sm"
              >
                <span aria-hidden="true" className="ticker-separator mr-2">
                  ✦
                </span>
                {message}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
