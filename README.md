# Jude's Cut

Landing page. Static HTML + Tailwind CSS v4 (browser build, no install, no build step)
+ vanilla JavaScript. Two client-facing variants share one brand (royal blue + cream),
one product set, one photography set.

| | Variant A, Warm gallery | Variant B, Midnight boutique |
|---|---|---|
| Where | `index.html` | `variant-b/index.html` |
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

All photography is hotlinked from Unsplash (free license) and was vision-verified to read
as menswear editorial: garments on real people, full-body looks, warm consistent grading.
A shared treatment in `styles.css` (`.photo`: saturate 0.88, contrast 1.03) unifies them
further. Swap `src` URLs for real product photography at the same aspect ratios when you
have it. URL template: `https://images.unsplash.com/{id}?q=80&w={w}&h={h}&fit=crop&auto=format`

| Slot | Unsplash photo id | Crop |
|---|---|---|
| Hero: all-black overcoat look | `photo-1617137977259-bb83e191f377` | 900x1200 |
| Range: Outerwear (belted overcoat) | `photo-1619603364904-c0498317e145` | 900x1100 |
| Range: Tailoring (blue tweed three-piece) | `photo-1594938298603-c8148c4dae35` | 900x1100 |
| Range: Shirting (white collar close-up) | `photo-1603252109612-24fa03d145c8` | 900x1100 |
| Range: Knitwear (navy cardigan, tie) | `photo-1642886513133-cdbee2639272` | 900x1100 |
| Best seller: The Camden Overcoat (beige trench) | `photo-1737508945707-ebdccee97cc5` | 640x840 |
| Best seller: The Royal Suit (navy suit, buttoning) | `photo-1507679799987-c73779587ccf` | 640x840 |
| Best seller: The City Shirt (all-black, crosswalk) | `photo-1645466478772-99f652533d44` | 640x840 |
| Best seller: The Smart Layer (layered jacket) | `photo-1515938736719-95b568dc8dd8` | 640x840 |
| Best seller: The Heavy Tee (boxy tee, terracotta) | `photo-1597436684771-9c1c4a4adce2` | 640x840 |
| Fit promise (sewing machine, hands) | `photo-1606501126768-b78d4569d3f9` | 1000x1250 |

The Best Sellers prices ($185, $240, $65, $150, $45) are placeholder copy, not real data;
swap for real pricing (the reference shop, ellscrotchet.shop, lists prices in Naira).
# jude-s-cut
