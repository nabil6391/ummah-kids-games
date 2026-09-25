# 🌙 Ummah Kids Games

Live: https://nabil6391.github.io/ummah-kids-games/

Static GitHub Pages site hosting built copies of the games. The **source** for each game
lives in its own folder next to this one in `~/StudioProjects/games/`:

| Game | Path on site | Source folder |
|---|---|---|
| Banana Basket | links to https://nabil6391.github.io/banana-basket/ | `banana-basket` (own repo) |
| Noor Defenders | `/noor-defenders/` | `noor-defenders` |
| Tayyib Treats | `/tayyib-treats/` | `tayyib-treats` |
| Eid Bazaar Math | `/eid-bazaar-math/` | `eid-bazaar-math` |
| Strong Believer | `/strong-believer/` | `strong-believer` |
| Eid Sweets Bakery | `/eid-sweets-bakery/` | `eid-sweets-bakery` |
| Hajj Journey | `/hajj-journey/` | `hajj-journey` |
| Modest Style Studio | `/modest-dress-up/` | `modest-dress-up` |
| Sadaqah Siblings | `/sadaqah-siblings/` | `sadaqah-siblings` |
| Last Light | `/last-light/` | `last-light` (Defold release bundle) |

## Update the site
```bash
./build.sh            # rebuilds Vite games from sibling folders
git add -A && git commit -m "Update games" && git push
```
Pages serves the `main` branch root, so a push is a deploy (takes ~1 minute).

Last Light uses Defold and is not rebuilt by `build.sh`. To update it, build the
`last-light` project for `wasm-web` and copy the resulting web bundle into
`ummah-kids-games/last-light/`.
