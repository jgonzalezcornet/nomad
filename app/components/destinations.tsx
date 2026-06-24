import { MapPin } from "./icons";

const destinations = [
  {
    city: "Lisboa",
    country: "Portugal",
    price: "€16",
    tag: "Miradores",
    gradient: "from-sage-300 to-sage-600",
  },
  {
    city: "Barcelona",
    country: "España",
    price: "€19",
    tag: "Playa + ciudad",
    gradient: "from-[#e0a87f] to-clay",
  },
  {
    city: "Praga",
    country: "Chequia",
    price: "€12",
    tag: "Barata",
    gradient: "from-sage-500 to-sage-800",
  },
  {
    city: "Ámsterdam",
    country: "Países Bajos",
    price: "€24",
    tag: "Bici-friendly",
    gradient: "from-sage-200 to-sage-500",
  },
  {
    city: "Roma",
    country: "Italia",
    price: "€20",
    tag: "Historia",
    gradient: "from-[#d6a06d] to-[#a85f3c]",
  },
  {
    city: "Berlín",
    country: "Alemania",
    price: "€17",
    tag: "Vida nocturna",
    gradient: "from-sage-400 to-sage-700",
  },
];

export function Destinations() {
  return (
    <section id="destinos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-sage-600">
            Inspiración
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            ¿A dónde te lleva la mochila?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Destinos favoritos de la comunidad, con precios reales de hostel por
            noche.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest) => (
          <article
            key={dest.city}
            className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-cream"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${dest.gradient}`}
              aria-hidden="true"
            />
            <div
              className="grain absolute inset-0 opacity-20 mix-blend-overlay"
              aria-hidden="true"
            />

            <div className="relative flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/20 px-3 py-1 text-sm backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" />
                {dest.country}
              </span>
              <span className="rounded-full bg-cream/20 px-3 py-1 text-sm backdrop-blur-sm">
                {dest.tag}
              </span>
            </div>

            <div className="relative">
              <h3 className="font-display text-3xl font-semibold">
                {dest.city}
              </h3>
              <p className="mt-1 text-cream/90">
                Hostels desde{" "}
                <span className="font-semibold">{dest.price}</span> /noche
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
