import Image from "next/image";
import { MapPin } from "./icons";

const destinations = [
  {
    city: "Lisbon",
    country: "Portugal",
    price: "€16",
    tag: "Viewpoints",
    image: "/destinations/lisbon.jpg",
  },
  {
    city: "Barcelona",
    country: "Spain",
    price: "€19",
    tag: "Beach + city",
    image: "/destinations/barcelona.jpg",
  },
  {
    city: "Prague",
    country: "Czechia",
    price: "€12",
    tag: "Budget-friendly",
    image: "/destinations/prague.jpg",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    price: "€24",
    tag: "Bike-friendly",
    image: "/destinations/amsterdam.jpg",
  },
  {
    city: "Rome",
    country: "Italy",
    price: "€20",
    tag: "History",
    image: "/destinations/rome.jpg",
  },
  {
    city: "Berlin",
    country: "Germany",
    price: "€17",
    tag: "Nightlife",
    image: "/destinations/berlin.jpg",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-sage-600">
          Inspiration
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Where will your backpack take you?
        </h2>
        <p className="mt-4 text-lg text-muted">
          Community favorites, with real hostel prices per night.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest) => (
          <article
            key={dest.city}
            className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl p-6 text-cream"
          >
            <Image
              src={dest.image}
              alt={`${dest.city}, ${dest.country}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-sage-900/85 via-sage-900/25 to-sage-900/10"
              aria-hidden="true"
            />

            <div className="relative flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/20 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" />
                {dest.country}
              </span>
              <span className="rounded-full bg-cream/20 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                {dest.tag}
              </span>
            </div>

            <div className="relative">
              <h3 className="font-display text-3xl font-bold">{dest.city}</h3>
              <p className="mt-1 text-cream/90">
                Hostels from{" "}
                <span className="font-bold">{dest.price}</span> /night
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
