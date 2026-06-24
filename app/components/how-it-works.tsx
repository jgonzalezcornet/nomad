const steps = [
  {
    number: "01",
    title: "Contanos tu viaje",
    description:
      "Destino, fechas, presupuesto y tu vibe. Mochilero relajado o ruta intensa: vos elegís el ritmo.",
  },
  {
    number: "02",
    title: "La IA arma el plan",
    description:
      "En segundos tenés itinerario, hostels y transporte entre ciudades, todo balanceado a tu bolsillo.",
  },
  {
    number: "03",
    title: "Reservá y partí",
    description:
      "Ajustá lo que quieras, guardá todo en un solo lugar y salí con el plan en el bolsillo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-sage-900 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-sage-300">
            Cómo funciona
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            De la idea a la ruta en tres pasos
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl font-semibold text-sage-500">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">
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
