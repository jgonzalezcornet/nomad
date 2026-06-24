import { Logo } from "./icons";

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Funciones", href: "#funciones" },
  { label: "Destinos", href: "#destinos" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sage-900/5 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-ink">
          <Logo className="h-7 w-7 text-sage-600" />
          <span className="font-display text-xl font-semibold tracking-tight">
            Nomad
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#empezar"
          className="rounded-full bg-sage-600 px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-sage-700"
        >
          Empezar gratis
        </a>
      </nav>
    </header>
  );
}
