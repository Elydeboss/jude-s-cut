# Jude's Cut

Landing page. Static HTML + Tailwind CSS v4 (browser build, no install, no build step)
+ vanilla JavaScript. Two client-facing variants share one brand (royal blue + cream),
one product set, one photography set.

| | Variant A, Warm gallery | Variant B, Midnight boutique |
|---|---|---|
| Where | `index.html` | `variant-b/index.html` |

`shop.html` is the shared store catalog: best-seller cards on both variants link to it,
it carries its own "Shop" nav link on both variants, and prices there are placeholders.
| Theme | Light cream, locked | Deep ink, locked |
| Type | Outfit, sentence case | Bricolage Grotesque, sentence case |
| Shape system | Pills + 24px media + arch hero | Pills + 24px media + 32px feature panel |
| Hero | Full-bleed poster, cream scrim | Full-width rounded photo plate, centered overlay copy |
| Range | Asymmetric editorial image grid | Category snap rail, landscape cards, arrows |
| Best sellers | Uniform 3-column product grid | Product snap rail, portrait cards, arrows |
| Proof | Centered quote band, then royal CTA band | Rounded royal panel: quote + commitments |

Open `choose.html` for a one-page picker to send the client.

## Run it

Open `index.html` (or `choose.html`) in a browser. That is the whole setup.

Optional, for a local URL instead of a file path:

```sh
npm start          # serves the folder at http://localhost:5173
```

No `npm install` needed. Everything (Tailwind, the Outfit font, Phosphor icons) loads
from CDNs; the page also needs internet for the placeholder images.

## Files that matter

| File | Purpose |
|---|---|
| `index.html` | The entire page: markup, Tailwind utilities, theme tokens (`@theme` block in the head) |
| `styles.css` | Plain CSS the utilities do not cover: focus rings, reveal system, hero entrance, scrollbar hiding |
| `script.js` | Mobile menu toggle + IntersectionObserver scroll reveal (respects reduced motion) |
| `favicon.svg` | Royal arch mark |

## One-time cleanup (old SvelteKit version)

The previous SvelteKit scaffolding is no longer used. Remove it:

```sh
cd "/home/elijah/Desktop/jude's-cut"
rm -rf src static node_modules .svelte-kit build package-lock.json svelte.config.js vite.config.js jsconfig.json .gitignore
```

Keep: `index.html`, `styles.css`, `script.js`, `favicon.svg`, `package.json`, `README.md`.

## Production note

The Tailwind browser build is prototype-grade (it compiles utilities in the browser on
load). Before real hosting, either keep it and accept the runtime cost, or move the
tokens into a compiled Tailwind setup; the markup works unchanged with the Tailwind CLI
(`npx @tailwindcss/cli -i input.css -o styles.css`). The Outfit font also loads from
Google Fonts here; self-host the woff2 files for production.

## Images

All photography is hotlinked from Unsplash (free license), vision-verified to show African
menswear - agbada, senator sets, kaftans and ankara print sets - so the page reads as the
brand it is. A shared treatment in `styles.css` (`.photo` / `.photo-b`) unifies the grading.
Swap `src` URLs for real product photography at the same aspect ratios when you have it.
URL template: `https://images.unsplash.com/{id}?q=80&w={w}&h={h}&fit=crop&auto=format`

| Slot | Unsplash photo id | Crop |
|---|---|---|
| Hero (both variants): kaftan gown with kente panelling | `photo-1663044022648-08bf87cfdc05` | 1800x1200 |
| Range: Agbada (satin agbada, studio) | `photo-1776880471112-708c211e6a4b` | 900x1100 |
| Range: Senator wear (embroidered tunic) | `photo-1751374858042-b8b9ff8480aa` | 900x1100 |
| Range: Trousers (kaftan with print trousers) | `photo-1791892135406-fbb706896cbe` | 900x1100 |
| Range: Ankara sets (wax-print two-piece) | `photo-1790862303813-8fdee084284d` | 900x1100 |
| Best seller: The Emerald Agbada | `photo-1663044022557-7d5d4c1d5318` | 640x840 |
| Best seller: The Sky Senator | `photo-1751374881982-2a69257bd207` | 640x840 |
| Best seller: The Kente Panel | `photo-1663043994777-7ed4b4e6cba3` | 640x840 |
| Best seller: The Forest Set | `photo-1663044022726-889ee51a682e` | 640x840 |
| Fit promise: wax print fabric bolts | `photo-1768212565424-efa3a3852b81` | 1000x1250 |

Prices on the Best Sellers sections and the Shop page are placeholder copy, not real
data; swap for real pricing (the reference shop, ellscrotchet.shop, lists prices in Naira).
# jude-s-cut
