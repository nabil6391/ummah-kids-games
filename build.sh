#!/usr/bin/env bash
# Rebuilds every game from its sibling source folder into this site.
# Usage: ./build.sh   (then commit + push; GitHub Pages serves the repo root)
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$(dirname "$HERE")"
GAMES=(noor-defenders tayyib-treats eid-bazaar-math strong-believer)
for g in "${GAMES[@]}"; do
  echo "== building $g"
  (cd "$SRC/$g" && [ -d node_modules ] || npm install --no-audit --no-fund)
  (cd "$SRC/$g" && npx vite build --base=./ --outDir "$HERE/$g" --emptyOutDir --logLevel warn)
done
touch "$HERE/.nojekyll"
echo "done"
