#!/usr/bin/env python3
"""Generates index.html (the hub) from the GAMES list below. Run: python3 build-hub.py && ./inject-extras.sh"""
import html, json

# slug, title, genre, ages, section, new?, blurb
GAMES = [
 ("alphabet-moves","Alphabet Moves","Camera","4–9","camera",1,"18 camera games: trace letters in the sky, jump the rope, dodge, dance and more. Needs a webcam, or play with taps and keys."),
 ("strong-believer","Strong Believer","Camera","6–12","camera",0,"Archery, desert gallops and races from the Sunnah. Your body is the controller, and the video never leaves your device."),
 ("banana-basket","Banana Basket","Arcade","5–10","play",0,"Read the Hadith of the Day, then catch falling bananas, dodge the Storm Cloud's bombs and unlock powers!"),
 ("archery-of-the-sunnah","Archery of the Sunnah","Arcade","","play",1,"Aim, draw and loose your arrow at balloons and targets. Earn stars and coins, then unlock the Armory."),
 ("noor-defenders","Noor Defenders","Strategy","6–12","play",0,"Grumpy Gloomies are heading for the masjid! Build good-deed towers to cheer them up and keep the lanterns shining."),
 ("tayyib-treats","Tayyib Treats","Casual","4–9","play",0,"Hungry animal friends need good, wholesome food. Pick the tayyib treats, not the junk!"),
 ("eid-bazaar-math","Eid Bazaar Math","Learning","5–8","play",0,"Help Amina and Zaid get ready for Eid by adding dates, lanterns and gifts, with read-aloud and counting helpers."),
 ("eid-sweets-bakery","Eid Sweets Bakery","Sim","5–11","play",0,"Bake, decorate and box Eid treats, then share them with your neighbours."),
 ("hajj-journey","Hajj Journey","Board","6–12","play",0,"Travel through the stations of Hajj together in a gentle family board game."),
 ("modest-dress-up","Modest Style Studio","Dress up","5–11","play",0,"Help Amina choose modest outfits for Eid, school, the masjid and more."),
 ("sadaqah-siblings","Sadaqah Siblings","Puzzle","6–12","play",0,"Work together to deliver food, water and gifts before iftar."),
 ("fanoos-nights","Fanoos Nights","Adventure","","play",1,"Collect lanterns from the workshop and light up the neighbourhood before Fajr."),
 ("iftar-grove","Iftar Grove","Casual","","play",1,"Share dates and water with your neighbours before the sun sets."),
 ("zellige-studio","Zellige Studio","Puzzle","","play",1,"Paint one tile and its mirror twins light up too. Fill every tile to make the pattern glow."),
 ("sadaqah-well","Sadaqah Well","Sim","5–99","play",1,"Dig a well, build a village and keep the charity flowing. Sadaqah jariyah, one drink at a time."),
 ("masjid-maker","Masjid Makers","Adventure","","play",1,"Travel through time across a world map and build more than 80 real masjids."),
 ("family-deen-stories","Stories by the Fire","Family","","family",1,"A parent reads aloud, the child predicts what happens, then the story and ayah are revealed."),
 ("family-deen-detective","Muslim Detective","Family","","family",1,"Everyday ethics cases: investigate, find the Islamic evidence, decide, and see the consequences."),
 ("family-deen-house","House of Knowledge","Family","","family",1,"A cooperative escape room: the child has the room, the parent has the scroll."),
 ("family-deen-treasure","Quran Treasure Hunt","Family","","family",1,"Clues are solved with a real mushaf. The fog lifts off the island map as you read."),
 ("family-deen-teach-me","Teach Me, Baba/Mama!","Family","","family",1,"The child becomes the teacher! A party game with six modes and a Family Book."),
]
EXTERNAL = {"banana-basket": "https://nabil6391.github.io/banana-basket/"}
SECTIONS = {  # key: (title, subtitle, emoji, gradient)
 "play":   ("Play & learn", "Games for children, on their own or with family", "🎮", "linear-gradient(135deg,#ffd37a,#ff9f45)"),
 "camera": ("Move with your camera", "Your body is the controller. Nothing is recorded or uploaded, and every game also works with taps and keys", "📷", "linear-gradient(135deg,#8fd6ff,#4f9be8)"),
 "family": ("Family Deen", "Parent + child games. The grown-up leads the conversation", "👨‍👩‍👧", "linear-gradient(135deg,#c3b2f5,#8670d6)"),
}
GENRE_EMOJI = {"Arcade":"🎯","Strategy":"♟️","Puzzle":"🧩","Learning":"🔢","Sim":"🏗️","Adventure":"🧭","Casual":"🍬","Board":"🎲","Dress up":"👗","Camera":"📷","Family":"👨‍👩‍👧"}

WA = '601161981135'
from urllib.parse import quote
def wa(msg): return f'https://wa.me/{WA}?text=' + quote(msg)

def url(s): return EXTERNAL.get(s, f"./{s}/")
def card(g, big=False):
    s,t,genre,ages,sec,new,blurb = g
    meta = genre + (f" · Ages {ages}" if ages else "")
    ext = ' target="_blank" rel="noopener"' if s in EXTERNAL else ""
    return f'''<a class="card{" big" if big else ""}" href="{url(s)}"{ext} data-sec="{sec}" data-genre="{genre}" data-text="{html.escape((t+" "+genre+" "+blurb).lower())}">
  <div class="thumb"><img src="./thumbs/{s}.webp" alt="" loading="lazy" width="640" height="400">{'<span class="new">New</span>' if new else ''}<span class="go">Play ▶</span></div>
  <div class="meta"><span class="genre">{GENRE_EMOJI.get(genre,"")} {meta}</span><h3>{html.escape(t)}</h3>{f"<p>{html.escape(blurb)}</p>" if big else ""}</div>
</a>'''

def row(title, sub, games, icon=""):
    return f'''<section class="row" data-row><div class="rowhead"><h2>{icon} {title}</h2><span>{sub}</span></div>
<div class="grid">{"".join(card(g) for g in games)}</div></section>'''

new_games = [g for g in GAMES if g[5] and g[4] != "family"]
feat = GAMES[0]
genres = {}
for g in GAMES: genres[g[2]] = genres.get(g[2],0)+1
tiles = "".join(f'<a class="tile" href="#" data-filter="sec:{k}" style="background:{v[3]}"><span>{v[2]}</span><b>{v[0]}</b><small>{sum(1 for g in GAMES if g[4]==k)} games</small></a>' for k,v in SECTIONS.items())
tiles += "".join(f'<a class="tile" href="#" data-filter="genre:{k}" style="background:{bg}"><span>{GENRE_EMOJI[k]}</span><b>{k}</b><small>{genres[k]} games</small></a>' for k,bg in [("Puzzle","linear-gradient(135deg,#9be7c4,#3fb68b)"),("Arcade","linear-gradient(135deg,#ffb3a7,#ee6c5a)"),("Sim","linear-gradient(135deg,#f6d98a,#d9a441)")])

page = f'''<!doctype html>
<html lang="en" data-hub="1">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ummah Kids Games — free Islamic games for children</title>
<meta name="description" content="Free games for Muslim families: learn, share, count and move. No sign-in, no ads.">
<meta name="theme-color" content="#faf6ef">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌙</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&display=swap" rel="stylesheet">
<style>
:root{{--bg:#faf6ef;--panel:#fff;--ink:#2b2118;--mute:#7b6d5e;--line:#eadfce;--accent:#f2761b;--accent-d:#d45f0a;--r:18px}}
*{{box-sizing:border-box}}
body{{margin:0;background:var(--bg);color:var(--ink);font:15px/1.4 system-ui,-apple-system,'Segoe UI',sans-serif}}
a{{color:inherit;text-decoration:none}}
h1,h2,h3,.brand,.tile b,.hero h2{{font-family:'Baloo 2',system-ui,sans-serif}}
.top{{position:sticky;top:0;z-index:20;display:flex;align-items:center;gap:14px;padding:10px 18px;background:rgba(250,246,239,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}}
.brand{{font-weight:800;font-size:1.25rem;white-space:nowrap}}
.search{{flex:1;max-width:460px;position:relative}}
.search input{{width:100%;padding:9px 14px 9px 36px;border:1px solid var(--line);border-radius:999px;background:#fff;font:inherit;color:inherit}}
.search input:focus{{outline:2px solid var(--accent);border-color:transparent}}
.search:before{{content:'🔍';position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:.9rem;opacity:.6}}
.top .note{{margin-left:auto;color:var(--mute);font-size:.85rem;white-space:nowrap}}
main{{max-width:1240px;margin:0 auto;padding:16px 22px 40px}}
.tiles{{display:flex;gap:12px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}}
.tile{{flex:0 0 150px;height:112px;border-radius:var(--r);padding:12px;color:#fff;display:flex;flex-direction:column;justify-content:flex-end;position:relative;box-shadow:0 2px 6px rgba(0,0,0,.08)}}
.tile span{{position:absolute;top:10px;left:12px;font-size:1.9rem}}
.tile b{{font-size:1.05rem;line-height:1.1;text-shadow:0 1px 2px rgba(0,0,0,.25)}}.tile small{{opacity:.9}}
.hero{{position:relative;margin:16px 0 8px;border-radius:24px;overflow:hidden;min-height:300px;color:#fff;display:flex;align-items:flex-end;background:#333}}
.hero img{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}}
.hero:after{{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,12,4,.85) 0%,rgba(20,12,4,.35) 60%,rgba(20,12,4,0) 100%)}}
.hero div{{position:relative;z-index:1;padding:28px;max-width:520px}}
.hero small{{letter-spacing:.1em;text-transform:uppercase;opacity:.85;font-size:.75rem}}
.hero h2{{margin:4px 0 6px;font-size:2.2rem;line-height:1}}.hero p{{margin:0 0 16px;opacity:.92}}
.btn{{display:inline-block;background:var(--accent);color:#fff;font-weight:700;padding:10px 22px;border-radius:999px}}.btn:hover{{background:var(--accent-d)}}
.row{{margin-top:26px}}
.rowhead{{display:flex;align-items:baseline;gap:12px;margin-bottom:10px;flex-wrap:wrap}}
.rowhead h2{{margin:0;font-size:1.45rem}}.rowhead span{{color:var(--mute);font-size:.88rem}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:16px}}
.card{{display:block;background:var(--panel);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;transition:transform .15s,box-shadow .15s}}
.card:hover,.card:focus-visible{{transform:translateY(-3px);box-shadow:0 10px 24px rgba(60,40,10,.14);outline:none}}
.thumb{{position:relative;aspect-ratio:16/10;background:#e8dcc4;overflow:hidden}}
.thumb img{{width:100%;height:100%;object-fit:cover;display:block}}
.new{{position:absolute;top:8px;right:8px;background:#7c5cf0;color:#fff;font-size:.7rem;font-weight:800;padding:2px 9px;border-radius:999px}}
.go{{position:absolute;right:8px;bottom:8px;background:var(--accent);color:#fff;font-weight:700;font-size:.82rem;padding:4px 12px;border-radius:999px;opacity:0;transform:translateY(4px);transition:.15s}}
.card:hover .go,.card:focus-visible .go{{opacity:1;transform:none}}
.meta{{padding:10px 12px 12px}}.meta h3{{margin:2px 0 0;font-size:1.05rem;line-height:1.15}}
.genre{{font-size:.76rem;color:var(--mute);font-weight:600}}
.wabtn{{background:#25d366;color:#fff;font-weight:800;padding:8px 16px;border-radius:999px;white-space:nowrap;font-family:'Baloo 2',system-ui,sans-serif}}.wabtn:hover{{background:#1ebe5a}}
.fb{{margin:30px 0 0;padding:24px;border-radius:24px;background:linear-gradient(135deg,#1f8f55,#25d366);color:#fff;display:grid;grid-template-columns:1.2fr 1fr;gap:22px;align-items:center}}
.fb h2{{margin:0 0 6px;font-size:1.7rem;line-height:1.1}}.fb p{{margin:0;opacity:.95}}
.fbbtns{{display:grid;grid-template-columns:1fr 1fr;gap:10px}}
.fbbtns a{{background:#fff;color:#14532d;font-weight:800;padding:12px 14px;border-radius:14px;text-align:center;font-family:'Baloo 2',system-ui,sans-serif}}.fbbtns a:hover{{background:#eafff2}}
@media(max-width:860px){{.fb{{grid-template-columns:1fr}}.wabtn{{padding:8px 12px;font-size:.85rem}}}}
.filtered .fb{{display:none}}
.empty{{display:none;padding:40px 0;color:var(--mute);text-align:center}}
.filtered .hero,.filtered [data-row]{{display:none}}
#results{{display:none;margin-top:18px}}.filtered #results{{display:block}}
#results h2{{margin:6px 0 12px}}.back{{color:var(--accent-d);font-weight:700}}
.about{{margin:36px 0 0;padding:26px;border-radius:24px;background:#2c3e2f;color:#eef3e8}}
.about h2{{margin:0 0 6px;font-size:1.6rem}}.about p{{margin:0;max-width:640px;opacity:.9}}
footer{{max-width:1400px;margin:0 auto;padding:20px 24px 40px;color:var(--mute);font-size:.85rem}}
@media(max-width:860px){{
 .top .note{{display:none}}.hero{{min-height:240px}}.hero h2{{font-size:1.7rem}}main{{padding:12px 14px 30px}}
}}
</style>
</head>
<body>
<header class="top">
  <a class="brand" href="./">🌙 Ummah Kids Games</a>
  <label class="search"><input id="q" type="search" placeholder="Search games  ( / )" autocomplete="off" aria-label="Search games"></label>
  <span class="note">Free · no sign-in · no ads</span>
  <a class="wabtn" href="{wa("Assalamu alaikum! I have an idea for Ummah Kids Games: ")}" target="_blank" rel="noopener">💬 Feedback &amp; ideas</a>
</header>
<main id="main">
  <div class="tiles">{tiles}</div>
  <a class="hero" href="{url(feat[0])}"><img src="./thumbs/{feat[0]}.webp" alt=""><div><small>New · {feat[2]} games</small><h2>{feat[1]}</h2><p>{html.escape(feat[6])}</p><span class="btn">Play now ▶</span></div></a>
  {row("New on the shelf","Recently added", new_games, "✨")}
  <section class="fb" id="feedback">
    <div>
      <h2>Got an idea? Tell us on WhatsApp 💚</h2>
      <p>These games are new, and your ideas decide what we fix and build next. Suggest a brand new game, tell us how to make one of these better, or report a bug. It opens WhatsApp with a message ready to edit and send.</p>
    </div>
    <div class="fbbtns">
      <a href="{wa("Assalamu alaikum! I would love a game about: ")}" target="_blank" rel="noopener">🎮 Suggest a new game</a>
      <a href="{wa("Assalamu alaikum! I have an idea to improve one of your games. The game is: ")}" target="_blank" rel="noopener">💡 Idea for an existing game</a>
      <a href="{wa("Assalamu alaikum! Feedback on Ummah Kids Games: ")}" target="_blank" rel="noopener">💬 General feedback</a>
      <a href="{wa("Assalamu alaikum! Something is broken. The game is: ")}" target="_blank" rel="noopener">🐞 Report a problem</a>
    </div>
  </section>
  {row(SECTIONS["camera"][0], SECTIONS["camera"][1], [g for g in GAMES if g[4]=="camera"], "📷")}
  {row(SECTIONS["family"][0], SECTIONS["family"][1], [g for g in GAMES if g[4]=="family"], "👨‍👩‍👧")}
  {row("All games", f"{len(GAMES)} games", GAMES, "🗂️")}
  <section id="results"><a href="#" data-filter="" class="back">← Back to all games</a><h2 id="rtitle">Results</h2><div class="grid" id="rgrid"></div><p class="empty" id="empty">No games match that. Try another word.</p></section>
  <section class="about"><h2>Made for Muslim families</h2><p>Every game is free, works in the browser, and has no sign-in, no ads and no tracking of children. Games with a camera keep the video on your device. Tell us what you think using the 💬 button.</p></section>
</main>
<footer>© Ummah Kids Games · Games for the whole family.</footer>
<script>
const ALL=[...[...document.querySelectorAll('[data-row]')].pop().querySelectorAll('.card')].map(c=>c.cloneNode(true));
const $=s=>document.querySelector(s), main=$('#main'), grid=$('#rgrid');
function show(title,list){{main.classList.add('filtered');$('#rtitle').textContent=title;grid.replaceChildren(...list.map(c=>c.cloneNode(true)));$('#empty').style.display=list.length?'none':'block';}}
function apply(f,q){{
  if(q){{show('Search: '+q,ALL.filter(c=>c.dataset.text.includes(q.toLowerCase())));return}}
  if(!f){{main.classList.remove('filtered');return}}
  if(f==='all')return show('All games',ALL);
  const [k,v]=f.split(':');
  const name=$('.tile[data-filter="'+f+'"] b').textContent;
  show(name,ALL.filter(c=>c.dataset[k==='sec'?'sec':'genre']===v));
}}
document.addEventListener('click',e=>{{const a=e.target.closest('[data-filter]');if(!a)return;e.preventDefault();$('#q').value='';apply(a.dataset.filter);scrollTo({{top:0,behavior:'smooth'}})}});
$('#q').addEventListener('input',e=>apply('',e.target.value.trim()));
addEventListener('keydown',e=>{{if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){{e.preventDefault();$('#q').focus()}}}});
</script>
</body>
</html>
'''
open('index.html','w',encoding='utf-8').write(page)
print("wrote index.html with", len(GAMES), "games")
