#!/usr/bin/env bash
# Adds site-extras.js (analytics + WhatsApp feedback button) to the hub and every game's built index.html. Safe to re-run.
set -euo pipefail
cd "$(dirname "$0")"
for f in index.html */index.html; do
  [ -f "$f" ] || continue
  grep -q 'site-extras.js' "$f" && continue
  case "$f" in index.html) src="./site-extras.js" ;; *) src="../site-extras.js" ;; esac
  python3 - "$f" "$src" <<'PY'
import sys
p, src = sys.argv[1:]
s = open(p, encoding='utf-8').read()
tag = f'<script src="{src}" defer></script>'
i = s.rfind('</body>')
s = s[:i] + tag + '\n' + s[i:] if i != -1 else s + '\n' + tag + '\n'
open(p, 'w', encoding='utf-8').write(s)
PY
  echo "injected: $f"
done
