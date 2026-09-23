# 🌙 Ummah Kids Games

Live: https://nabil6391.github.io/ummah-kids-games/

Static GitHub Pages site hosting built copies of the kids' games. The **source** for each game
lives in its own folder next to this one in `~/StudioProjects/`:

| Game | Path on site | Source folder |
|---|---|---|
| Banana Basket | links to https://nabil6391.github.io/banana-basket/ | `banana-basket` (own repo) |
| Noor Defenders | `/noor-defenders/` | `noor-defenders` |
| Tayyib Treats | `/tayyib-treats/` | `tayyib-treats` |
| Eid Bazaar Math | `/eid-bazaar-math/` | `eid-bazaar-math` |
| Strong Believer | `/strong-believer/` | `strong-believer` |

## Update the site
```bash
./build.sh            # rebuilds all four games from the sibling source folders
git add -A && git commit -m "Update games" && git push
```
Pages serves the `main` branch root, so a push is a deploy (takes ~1 minute).
