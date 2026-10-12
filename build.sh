#!/usr/bin/env bash
# Rebuilds every game from its source folder into this site.
# Usage: ./build.sh   (then commit + push; GitHub Pages serves the repo root)
# Kids games live next to this folder (games/ummah-kids-games/<name>); Alphabet Moves is in games/mediapipe-games.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
KIDS="$(dirname "$HERE")"
MEDIA="$(dirname "$KIDS")/mediapipe-games"
build() { # name, source dir
  echo "== building $1"
  (cd "$2" && { [ -d node_modules ] || npm install --no-audit --no-fund; })
  (cd "$2" && npx vite build --base=./ --outDir "$HERE/$1" --emptyOutDir --logLevel warn)
}
GAMES=(noor-defenders tayyib-treats eid-bazaar-math strong-believer eid-sweets-bakery hajj-journey modest-dress-up sadaqah-siblings
  archery-of-the-sunnah fanoos-nights iftar-grove zellige-studio sadaqah-well masjid-maker
  family-deen-stories family-deen-detective family-deen-house family-deen-treasure family-deen-teach-me)
for g in "${GAMES[@]}"; do build "$g" "$KIDS/$g"; done
build alphabet-moves "$MEDIA/alphabet-moves"
"$HERE/inject-extras.sh"
touch "$HERE/.nojekyll"
echo "done"
