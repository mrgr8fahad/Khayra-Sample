# Khayra — Homepage (Next.js)

Homepage for Khayra, built with Next.js 16 (App Router), React 19 and TypeScript from the Khayra asset pack.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Deploys to Vercel as-is (no environment variables needed).

## Structure

```
src/
  app/
    layout.tsx        Fonts, metadata, header + footer
    page.tsx          Homepage — composes the sections below
    globals.css       Design tokens, buttons, shared helpers
    icon.svg          Favicon (Khayra mark)
  components/
    Header            Sticky nav, Services dropdown, mobile menu
    Hero              Headline, CTAs, stats, hero image
    TrustBar          "Trusted by" client row
    Services          6 service cards
    WhyUs             Image + 4 benefits
    Process           4-step process
    Industries        6 industry tiles
    CtaBanner         Purple call-to-action banner
    Footer
    ui.tsx            Logo, ArrowRight, IconBadge
  data/content.ts     ALL page copy (edit text here, not in components)
public/
  icons/ logo/ images/   From the asset pack
```

Styling is plain CSS Modules with the pack's tokens (`--khayra-purple` etc.) in `globals.css`. There's no Tailwind.
Fonts are self-hosted through `@fontsource-variable`: Plus Jakarta Sans for headings and Inter for body text.

## Before going live

- **Stats and client names are placeholders** from the design concept (`src/data/content.ts`). Replace them with verified figures and approved client logos. Client names currently render as text wordmarks; see the note in `TrustBar.tsx` for switching to logo files.
- **Hero and about images** are low-resolution crops from the flattened mockup (530px and 470px wide). They look soft on retina screens. Swap in the original photos at about 1200px wide and rebuild the stat cards in code if needed.
- **The logo** is an editable approximation from the pack, not an official brand file.
- These links point to pages that don't exist yet: `/contact`, `/services/*`, `/work`, `/about` and `/blog`.
