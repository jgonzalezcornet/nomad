import { Logo } from "./icons";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Destinations", href: "#destinations" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sage-900/5 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 text-ink">
          <Logo className="h-9 w-9 text-sage-600" />
          <span className="font-display text-2xl font-bold tracking-tight">
            Nomad
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-semibold text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#get-started"
          className="rounded-full bg-sage-600 px-6 py-2.5 text-base font-bold text-cream transition-colors hover:bg-sage-700"
        >
          Get started
        </a>
      </nav>
    </header>
  );
}
