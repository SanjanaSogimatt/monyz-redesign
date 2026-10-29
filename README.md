# Monyz landing page redesign

Next.js 15 + Tailwind 3 redesign of monyz.co, built with the `landing-page-design` skill.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content
All copy lives in `lib/content.ts`.

- **Founder photo:** put the image in `public/` (e.g. `public/arthur.jpg`) and set `FOUNDER_PHOTO = "/arthur.jpg"`. Until then a branded monogram slot is shown at the original 1226 x 1121 ratio.
- **Client logos:** shown as text wordmarks (`clients` array). To use the real SVGs, swap the `<li>` text in `app/page.tsx` for `<img>` tags.
- **Booking form:** validates on the client and fakes a send. Replace the `TODO` in `components/BookingForm.tsx` with your API route, Calendly or CRM.
- **Legal pages:** `/privacy` and `/terms` are placeholders.

## Strategy (skill output)
- **Layout:** A, classic hero plus sections. The offer is easy to grasp from one hero, so there's no need for a long-form story.
- **Primary action:** book a 20 minute intro call. One CTA, repeated in the nav and at the bottom.
- **Sections:** hero, client wordmarks, problem and solution, stats, tagline reveal, three ways in, how it works, founder, FAQ (8), booking with risk reversal, footer.
- **SEO:** index. Title and meta are in `app/layout.tsx`, OG image is generated, FAQ schema is on the page.
- **To confirm with Monyz:** the process steps, FAQ answers and risk-reversal promises are draft copy. The stats, offers, clients and socials come from the live site.

## Banknote layer (v2)
- **Hero:** your engraved skyline (`public/skyline.jpg`) inside a framed note. Mint payment routes arc between landmarks and "beep" when they land, the water glints, and the moon glows. All of it is one SVG overlay in `components/HeroScene.tsx`, pinned to the image's 2560×1024 coordinates. To move a route, edit the landmark points `P`.
- **Banknote kit:** `components/Guilloche.tsx` (Rosette, Band, Corner/Corners, Microtext), all generated with math and drawn in on scroll.
- **Follow the money line:** `components/FollowLine.tsx`. It draws down the left gutter as you scroll and only shows on screens 1400px and wider.
- **Pieces:** a quiet client logo row, the banknote stats card, a cream tagline section with a rosette that rotates on scroll, an oval banknote portrait, the booking form as a cheque, and an engraved footer.
- **Three ways in:** `components/OfferCards.tsx` (Option B1). Each card has a big outlined numeral and a banknote rosette in the top-right corner, and turns mint on hover or keyboard focus while the rosette rotates. Set `decor="engraving"` or `"none"` in `app/page.tsx` to switch variants. The engraving variant uses `public/offers/`.
- **Client logos:** text wordmarks for now. Swap in the real SVGs as cream (`#F4FBF6`) one-colour files.
- Everything falls back to static when the visitor turns off motion.

## Design system
- **Colors:** Monyz palette (ink `#0E1F13` / `#17321F`, mint `#02FE93`, paper `#F4FBF6`). Backgrounds are flat, and only the hero headline uses a gradient on text.
- **Type:** Geist, with Geist Mono for numbers and labels. Sizes stick to Tailwind's default scale.
- **Spacing:** locked in `tailwind.config.ts` to 0/2/4/8/12/16/24/32/40/48/64/80/96 px, so off-scale classes don't exist.
- **Radius:** nested radii follow outer minus gap (a 24px card with 8px padding has 16px inner corners).
- **Icons:** Phosphor.
- **Motion:** everything uses `cubic-bezier(0.22,1,0.36,1)`. Scroll reveals use IntersectionObserver. The tagline lights up word by word. Reduced motion is respected.
