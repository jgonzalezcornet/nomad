const steps = [
  {
    number: "01",
    title: "Tell us about your trip",
    description:
      "Destination, dates, budget and your vibe. Laid-back backpacker or intense route: you set the pace.",
  },
  {
    number: "02",
    title: "The AI builds the plan",
    description:
      "In seconds you get an itinerary, hostels and transport between cities, all balanced to your budget.",
  },
  {
    number: "03",
    title: "Book it and go",
    description:
      "Tweak anything you want, keep it all in one place and hit the road with the plan in your pocket.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sage-900 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-sage-300">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            From idea to route in three steps
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl font-extrabold text-sage-500">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-sage-100/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
