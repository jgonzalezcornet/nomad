import { ArrowRight, Bed, MapPin, Route, Sparkles } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sage-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-sage-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <span
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-sage-300/60 bg-paper px-4 py-1.5 text-sm font-semibold text-sage-700"
            style={{ animationDelay: "0.05s" }}
          >
            <Sparkles className="h-4 w-4 text-sage-600" />
            Your AI travel companion
          </span>

          <h1
            className="animate-rise mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Plan your trip across Europe{" "}
            <span className="text-sage-600">without losing your way</span>.
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "0.25s" }}
          >
            Nomad builds your day-by-day itinerary, finds the best-located
            hostels and compares how to get between cities. You just pack the
            backpack.
          </p>

          <form
            id="get-started"
            className="animate-rise mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.35s" }}
          >
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Email"
              className="flex-1 rounded-full border border-sage-300/70 bg-paper px-5 py-3 text-ink placeholder:text-muted/70 focus:border-sage-500 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3 font-bold text-cream transition-colors hover:bg-sage-700"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p
            className="animate-rise mt-4 text-sm text-muted"
            style={{ animationDelay: "0.45s" }}
          >
            Free to start · No card required · Made for backpackers
          </p>
        </div>

        <div
          className="animate-rise relative"
          style={{ animationDelay: "0.4s" }}
        >
          <ItineraryCard />
        </div>
      </div>
    </section>
  );
}

function ItineraryCard() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div
        className="animate-float absolute -right-4 -top-5 z-10 flex items-center gap-2 rounded-2xl border border-sage-200 bg-paper px-4 py-2.5 shadow-lg shadow-sage-900/5"
        aria-hidden="true"
      >
        <Sparkles className="h-4 w-4 text-clay" />
        <span className="text-sm font-bold text-ink">Itinerary ready ✨</span>
      </div>

      <div className="rounded-3xl border border-sage-200 bg-paper p-6 shadow-xl shadow-sage-900/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Your trip
            </p>
            <p className="font-display text-2xl font-bold text-ink">
              Backpacking Iberia
            </p>
          </div>
          <div className="rounded-2xl bg-sage-50 px-3 py-2 text-right">
            <p className="text-xs text-muted">12 days</p>
            <p className="font-bold text-sage-700">€640</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Lisbon", "Seville", "Barcelona"].map((city) => (
            <span
              key={city}
              className="rounded-full bg-sage-100 px-3 py-1 text-sm font-semibold text-sage-700"
            >
              {city}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-3">
          <ItineraryRow
            icon={<Bed className="h-4 w-4" />}
            title="Sunset Hostel · Lisbon"
            meta="Day 1–4 · €18/night"
          />
          <ItineraryRow
            icon={<Route className="h-4 w-4" />}
            title="Night bus to Seville"
            meta="6 h · €22 · -40% CO₂"
          />
          <ItineraryRow
            icon={<MapPin className="h-4 w-4" />}
            title="Free walking tour"
            meta="Day 5 · Seville"
          />
        </ul>

        <div className="mt-5 rounded-2xl bg-sage-50 p-4">
          <p className="text-xs font-semibold text-muted">
            The AI compared it for you
          </p>
          <div className="mt-2 flex items-end gap-2">
            <Bar label="Bus" value="h-10" highlight />
            <Bar label="Train" value="h-16" />
            <Bar label="Car" value="h-12" />
            <Bar label="Plane" value="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ItineraryRow({
  icon,
  title,
  meta,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
}) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-sage-100 bg-cream/60 px-3 py-2.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-ink">{title}</p>
        <p className="text-xs text-muted">{meta}</p>
      </div>
    </li>
  );
}

function Bar({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5">
      <div
        className={`w-full rounded-md ${value} ${
          highlight ? "bg-sage-500" : "bg-sage-200"
        }`}
      />
      <span className="text-[10px] font-semibold text-muted">{label}</span>
    </div>
  );
}
