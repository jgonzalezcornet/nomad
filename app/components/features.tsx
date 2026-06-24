import { Bed, Compare, Route, Sparkles } from "./icons";

const features = [
  {
    icon: Sparkles,
    title: "Itinerarios con IA",
    description:
      "Contanos a dónde querés ir y cuánto tiempo tenés. La IA arma un plan día por día a tu medida, con tiempo para perderte sin apuro.",
  },
  {
    icon: Bed,
    title: "Hostels al mejor precio",
    description:
      "Comparamos cientos de hostels y alojamientos para encontrar tu cama ideal: barata, bien ubicada y con buena onda.",
  },
  {
    icon: Compare,
    title: "Compará alternativas",
    description:
      "¿Dos rutas posibles? ¿Tres ciudades en duda? Te mostramos las opciones lado a lado para que decidas sin dar vueltas.",
  },
  {
    icon: Route,
    title: "Movete inteligente",
    description:
      "Auto, bus, tren o avión: comparamos precio, tiempo y huella de carbono en cada tramo para que elijas como quieras viajar.",
  },
];

export function Features() {
  return (
    <section id="funciones" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-sage-600">
          Todo en un solo lugar
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Tu viaje, resuelto de punta a punta
        </h2>
        <p className="mt-4 text-lg text-muted">
          Dejá de saltar entre veinte pestañas. Nomad junta todo lo que
          necesitás para planear y reservar tu próxima aventura.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-3xl border border-sage-200 bg-paper p-8 transition-colors hover:border-sage-400"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-600 group-hover:text-cream">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              {feature.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
