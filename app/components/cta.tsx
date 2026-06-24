import { ArrowRight, Check } from "./icons";

const perks = ["Free to start", "No card required", "Cancel anytime"];

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-sage-200 bg-paper px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sage-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-sage-100/70 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Your next adventure starts here
          </h2>
          <p className="mt-5 text-lg text-muted">
            Join the waitlist and be one of the first to plan trips across
            Europe with Nomad.
          </p>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Email"
              className="flex-1 rounded-full border border-sage-300/70 bg-cream px-5 py-3 text-ink placeholder:text-muted/70 focus:border-sage-500 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3 font-bold text-cream transition-colors hover:bg-sage-700"
            >
              Join now
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {perks.map((perk) => (
              <li key={perk} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-sage-600" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
