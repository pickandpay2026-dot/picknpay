import MasonryCard from "./MasonryCard";

export default function MasonryGrid({ items = [], className = "" }) {
  return (
    <div
      className={`
      grid grid-cols-3 gap-2 lg:gap-3
      max-sm:flex max-sm:overflow-x-auto max-sm:overscroll-x-contain
      max-sm:snap-x max-sm:snap-mandatory
      max-sm:pb-3 max-sm:[scrollbar-width:none]
      max-sm:[&::-webkit-scrollbar]:hidden
      ${className}
      `}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`
            min-w-0
            ${item.size === "large" ? "col-span-2" : ""}
            ${item.size === "tall" ? "row-span-2" : ""}
            max-sm:w-[82%] max-sm:shrink-0 max-sm:snap-start
          `}
        >
          <div className="max-sm:[&_p]:hidden max-sm:[&_h1]:hidden max-sm:[&_h2]:hidden max-sm:[&_h3]:hidden max-sm:[&_h4]:hidden max-sm:[&_span]:hidden">
            <MasonryCard
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
              size={item.size === "wide" ? "medium" : item.size}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
