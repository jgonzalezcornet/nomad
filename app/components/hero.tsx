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
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-sage-300/60 bg-paper px-4 py-1.5 text-sm text-sage-700"
            style={{ animationDelay: "0.05s" }}
          >
            <Sparkles className="h-4 w-4 text-sage-600" />
            Tu compañero de viaje con IA
          </span>

          <h1
            className="animate-rise mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Planeá tu viaje por Europa{" "}
            <span className="text-sage-600">sin perder el rumbo</span>.
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "0.25s" }}
          >
            Nomad arma tu itinerario día por día, encuentra los hostels mejor
            ubicados y compara cómo moverte entre ciudades. Vos solo hacé la
            mochila.
          </p>

          <form
            id="empezar"
            className="animate-rise mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.35s" }}
          >
            <input
              type="email"
              placeholder="tu@email.com"
              aria-label="Email"
              className="flex-1 rounded-full border border-sage-300/70 bg-paper px-5 py-3 text-ink placeholder:text-muted/70 focus:border-sage-500 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3 font-medium text-cream transition-colors hover:bg-sage-700"
            >
              Empezar gratis
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p
            className="animate-rise mt-4 text-sm text-muted"
            style={{ animationDelay: "0.45s" }}
          >
            Gratis para empezar · Sin tarjeta · Hecho para mochileros
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
        <span className="text-sm font-medium text-ink">Itinerario listo ✨</span>
      </div>

      <div className="rounded-3xl border border-sage-200 bg-paper p-6 shadow-xl shadow-sage-900/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">
              Tu viaje
            </p>
            <p className="font-display text-2xl font-semibold text-ink">
              Mochileando Iberia
            </p>
          </div>
          <div className="rounded-2xl bg-sage-50 px-3 py-2 text-right">
            <p className="text-xs text-muted">12 días</p>
            <p className="font-semibold text-sage-700">€640</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Lisboa", "Sevilla", "Barcelona"].map((city) => (
            <span
              key={city}
              className="rounded-full bg-sage-100 px-3 py-1 text-sm text-sage-700"
            >
              {city}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-3">
          <ItineraryRow
            icon={<Bed className="h-4 w-4" />}
            title="Hostel Sunset · Lisboa"
            meta="Día 1–4 · €18/noche"
          />
          <ItineraryRow
            icon={<Route className="h-4 w-4" />}
            title="Bus nocturno a Sevilla"
            meta="6 h · €22 · -40% CO₂"
          />
          <ItineraryRow
            icon={<MapPin className="h-4 w-4" />}
            title="Free walking tour"
            meta="Día 5 · Sevilla"
          />
        </ul>

        <div className="mt-5 rounded-2xl bg-sage-50 p-4">
          <p className="text-xs text-muted">La IA comparó por vos</p>
          <div className="mt-2 flex items-end gap-2">
            <Bar label="Bus" value="h-10" highlight />
            <Bar label="Tren" value="h-16" />
            <Bar label="Auto" value="h-12" />
            <Bar label="Avión" value="h-8" />
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
        <p className="truncate text-sm font-medium text-ink">{title}</p>
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
      <span className="text-[10px] text-muted">{label}</span>
    </div>
  );
}
