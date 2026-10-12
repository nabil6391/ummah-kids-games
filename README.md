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
| Archery of the Sunnah | `/archery-of-the-sunnah/` | `archery-of-the-sunnah` |
| Fanoos Nights | `/fanoos-nights/` | `fanoos-nights` |
| Iftar Grove | `/iftar-grove/` | `iftar-grove` |
| Zellige Studio | `/zellige-studio/` | `zellige-studio` |
| Sadaqah Well | `/sadaqah-well/` | `sadaqah-well` |
| Masjid Makers | `/masjid-maker/` | `masjid-maker` |
| Stories by the Fire | `/family-deen-stories/` | `family-deen-stories` |
| Muslim Detective | `/family-deen-detective/` | `family-deen-detective` |
| House of Knowledge | `/family-deen-house/` | `family-deen-house` |
| Quran Treasure Hunt | `/family-deen-treasure/` | `family-deen-treasure` |
| Teach Me, Baba/Mama! | `/family-deen-teach-me/` | `family-deen-teach-me` |
| Alphabet Moves | `/alphabet-moves/` | `../mediapipe-games/alphabet-moves` |

## Update the site
```bash
./build.sh            # rebuilds Vite games from sibling folders
git add -A && git commit -m "Update games" && git push
```
Pages serves the `main` branch root, so a push is a deploy (takes ~1 minute).

## Analytics and feedback
`site-extras.js` is added to the hub and every game by `inject-extras.sh` (run automatically at the end of `build.sh`, safe to re-run).

* **Feedback (WhatsApp +60 11-6198 1135):** the hub has a green "Feedback & ideas" button in the top bar and a banner with four ready-made messages (suggest a new game, idea for an existing game, general feedback, report a problem). Every game has a green "Feedback" pill at the bottom-left that opens a grown-ups dialog with the same choices, with the game name pre-filled. Edit the messages in `build-hub.py` (hub) and `site-extras.js` (games).
* **Analytics, self-hosted Plausible (on):** `https://stats.nabilmh.com` (Hetzner, `/opt/plausible`, see `~/StudioProjects/HETZNER_RUNBOOK.md`). `site-extras.js` loads it on every page except localhost. In Plausible, add the site `nabil6391.github.io` (change `data-domain` in `site-extras.js` if the hub moves to another domain). Cookieless, no personal data.
* **Analytics, optional GoatCounter (off unless configured):** (GoatCounter, cookieless, no personal data, off until configured):**
  1. Sign up at goatcounter.com and pick a site code, e.g. `nabilmh`.
  2. Set `GOATCOUNTER_CODE` at the top of `site-extras.js`, commit and push.
  3. Each game is its own path (`/noor-defenders/` ...), so the dashboard shows visits per game.
  4. For the command line, create an API token (Settings > API) and run
     `curl -H "Authorization: Bearer $TOKEN" https://nabilmh.goatcounter.com/api/v0/stats/hits` (or `/api/v0/stats/total`).
* It is not loaded on `localhost`. Banana Basket is hosted separately and has no button or analytics.
* The hub (`index.html`) is generated: edit the `GAMES` list in `build-hub.py`, then `python3 build-hub.py && ./inject-extras.sh`. Thumbnails live in `thumbs/<slug>.webp`.
