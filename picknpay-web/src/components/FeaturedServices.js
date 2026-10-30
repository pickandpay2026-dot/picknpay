import MasonryCard from "./MasonryCard";

const services = [
  {
    id: "plumbing",
    title: "Plumbing",
    subtitle: "Home repairs",
    imageSrc: "/images/plumbing-pnp.jpg",
    imageAlt: "Plumbing repair service",
    href: "/services",
    size: "large",
  },
  {
    id: "barber",
    title: "Barbers & salons",
    subtitle: "Personal care",
    imageSrc: "/images/services-pnp-webp.jpg",
    imageAlt: "Barber and salon services",
    href: "/services",
    size: "medium",
  },
  {
    id: "electrical",
    title: "Electrical repairs",
    subtitle: "Home maintenance",
    imageSrc: "/images/electrician-pnp.jpg",
    imageAlt: "Electrical repair service",
    href: "/services",
    size: "tall",
  },
  {
    id: "cleaning",
    title: "Home cleaning",
    subtitle: "A cleaner space",
    imageSrc: "/images/cleaning-pnp.jpg",
    imageAlt: "Home cleaning service",
    href: "/services",
    size: "medium",
  },
  {
    id: "mechanic",
    title: "Mechanics",
    subtitle: "Vehicle maintenance",
    imageSrc: "/images/mechanic-pnp.jpg",
    imageAlt: "Vehicle mechanic at work",
    href: "/services",
    size: "large",
  },
  {
    id: "laundry",
    title: "Laundry",
    subtitle: "Wash and care",
    imageSrc: "/images/laundry-pnp.jpg",
    imageAlt: "Laundry and garment care service",
    href: "/services",
    size: "medium",
  },
  {
    id: "carpentry",
    title: "Carpentry",
    subtitle: "Furniture and woodwork",
    imageSrc: "/images/carpentry-pnp.jpg",
    imageAlt: "Carpenter working with wood",
    href: "/services",
    size: "medium",
  },
  {
    id: "tutoring",
    title: "Tutoring",
    subtitle: "Learning support",
    imageSrc: "/images/tutoring-pnp.jpg",
    imageAlt: "Tutor helping a student study",
    href: "/services",
    size: "tall",
  },
  {
    id: "gardening",
    title: "Gardening",
    subtitle: "Outdoor care",
    imageSrc: "/images/gardening-pnp.jpg",
    imageAlt: "Gardener maintaining a garden",
    href: "/services",
    size: "medium",
  },
];

export default function FeaturedServices() {
  return (
    <section className="w-full px-2 py-12 sm:px-3">
      <div className="mb-5 px-2">
        <h2 className="text-3xl font-bold text-ink">Services around you</h2>

        <p className="mt-2 text-muted">
          Find local professionals for everyday needs.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4">
        {services.map((service) => (
          <div key={service.id} className="w-64 shrink-0 sm:w-72">
            <MasonryCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
}
