# Nomad 🧭

Landing page de **Nomad**, un organizador de viajes con IA pensado para mochileros que recorren Europa. La app ayuda a planificar itinerarios, reservar hostels, comparar alternativas y comparar formas de moverte (auto, bus, tren, avión).

> ⚠️ Esto es **solo la landing page**. La webapp todavía no es funcional: los formularios y botones son decorativos.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com)
- Tipografía [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Inter](https://fonts.google.com/specimen/Inter) vía `next/font`
- Diseño minimalista en paleta verde salvia + crema (sin imágenes externas)

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm start       # servir el build
```

## Estructura

```
app/
├── layout.tsx          # fuentes + metadata
├── globals.css         # paleta (sage/cream) + tokens Tailwind
├── page.tsx            # composición de la landing
└── components/
    ├── nav.tsx
    ├── hero.tsx        # incluye el mockup de itinerario en CSS
    ├── stats.tsx
    ├── features.tsx
    ├── how-it-works.tsx
    ├── destinations.tsx
    ├── cta.tsx
    ├── footer.tsx
    └── icons.tsx       # iconos de línea (SVG inline)
```

## Deploy en Vercel

1. Importá este repo en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Next.js automáticamente — no hace falta configurar nada.
3. Deploy. ✨
