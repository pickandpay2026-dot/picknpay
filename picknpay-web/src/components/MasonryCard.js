import Link from "next/link";

export default function MasonryCard({
  imageSrc,
  title,
  subtitle,
  href = "#",
  size = "medium",
  imageAlt,
}) {
  const sizeClasses = {
    small: "h-14 sm:h-16",
    medium: "h-16 sm:h-20",
    large: "h-20 sm:h-24",
    tall: "h-24 sm:h-28",
  };

  const heightClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <Link
      href={href}
      aria-label={`${title}${subtitle ? `: ${subtitle}` : ""}`}
      className={`group relative isolate block w-full h-36 sm:${heightClass} overflow-hidden rounded-md border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
    >
      {/* Background image */}
      <img
        src={imageSrc}
        alt={imageAlt || title || ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 motion-reduce:transition-none group-hover:scale-105 group-hover:opacity-60"
      />

      {/* Dark overlay: desktop only */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/25 to-transparent sm:block"
      />

      {/* Text: desktop only */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden flex-col gap-0.5 p-2 sm:flex">
        {subtitle && (
          <span className="truncate text-[9px] font-medium uppercase tracking-wide text-opal-lavender">
            {subtitle}
          </span>
        )}

        {title && (
          <h3 className="line-clamp-2 text-xs font-bold leading-tight text-white">
            {title}
          </h3>
        )}

        <span className="hidden items-center gap-1 text-[10px] font-medium text-white/90 sm:group-hover:inline-flex sm:group-focus-visible:inline-flex">
          Explore ↗
        </span>
      </div>

      {/* Thin hover border */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-md border border-white/0 transition-colors group-hover:border-white/60 group-focus-visible:border-white/80"
      />
    </Link>
  );
}
