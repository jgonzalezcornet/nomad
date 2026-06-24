const stats = [
  { value: "+120", label: "ciudades europeas" },
  { value: "+15.000", label: "hostels comparados" },
  { value: "28", label: "países cubiertos" },
  { value: "100%", label: "en español" },
];

export function Stats() {
  return (
    <section className="border-y border-sage-900/5 bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-semibold text-sage-700">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
