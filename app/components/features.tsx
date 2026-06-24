import { Bed, Compare, Route, Sparkles } from "./icons";

const features = [
  {
    icon: Sparkles,
    title: "AI itineraries",
    description:
      "Tell us where you want to go and how long you have. The AI builds a day-by-day plan tailored to you, with room to wander without rushing.",
  },
  {
    icon: Bed,
    title: "Hostels at the best price",
    description:
      "We compare hundreds of hostels and stays to find your ideal bed: cheap, well-located and full of good vibes.",
  },
  {
    icon: Compare,
    title: "Compare alternatives",
    description:
      "Two possible routes? Three cities you can't decide between? We show the options side by side so you choose without second-guessing.",
  },
  {
    icon: Route,
    title: "Move around smart",
    description:
      "Car, bus, train or plane: we compare price, time and carbon footprint on every leg so you travel exactly how you want.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-sage-600">
          Everything in one place
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Your trip, sorted end to end
        </h2>
        <p className="mt-4 text-lg text-muted">
          Stop jumping between twenty tabs. Nomad brings together everything you
          need to plan and book your next adventure.
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
            <h3 className="mt-5 font-display text-2xl font-bold text-ink">
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
