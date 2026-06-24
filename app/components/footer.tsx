import { Logo } from "./icons";

const columns = [
  {
    title: "Product",
    links: ["Features", "How it works", "Destinations", "Pricing"],
  },
  {
    title: "Company",
    links: ["About Nomad", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Travel guides", "Community", "Help", "Privacy"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-sage-900/5 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 text-ink">
              <Logo className="h-8 w-8 text-sage-600" />
              <span className="font-display text-2xl font-bold tracking-tight">
                Nomad
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The AI travel planner for backpackers who want to explore Europe
              without the stress.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-bold text-ink">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sage-900/5 pt-8 text-sm text-muted sm:flex-row">
          <p>© 2026 Nomad. All rights reserved.</p>
          <p>Made with ☕ for backpackers.</p>
        </div>
      </div>
    </footer>
  );
}
