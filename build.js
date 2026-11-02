// Genera el sitio estático en dist/. Uso: node build.js
const fs = require('fs');
const path = require('path');
const { site, projects, CATS } = require('./src/data');
const logo = require('./src/logo.json');

const DIST = path.join(__dirname, 'dist');
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const catLabel = (p) => p.cats.map((c) => CATS[c]).join(' · ');

const logoSvg = (cls = '') => `<svg class="${cls}" viewBox="0 0 ${logo.w} ${logo.h}" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="${logo.d}"/></svg>`;
const arrow = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

const img = (im, { cls = '', eager = false, sizes = '100vw', zoom = false } = {}) => `<img class="${cls}" src="${esc(im.src)}" alt="${esc(im.alt)}" width="${im.w}" height="${im.h}" sizes="${sizes}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${zoom ? ' data-zoom' : ''}>`;

const statBlock = (s) => `<div class="stat"><div class="stat__n" data-count="${s.n}" data-pre="${esc(s.pre || '')}" data-suf="${esc(s.suf)}">${esc(s.pre || '')}${s.n}${esc(s.suf)}</div><p>${esc(s.label)}</p></div>`;

const fig = (im, opts = {}) => `<button class="shot${opts.bg ? ' shot--bg' : ''}" type="button" aria-label="Ampliar: ${esc(im.alt)}">${img(im, { zoom: true, sizes: opts.sizes || '(max-width: 900px) 100vw, 70vw' })}</button>`;

const blocks = {
  lede: (b) => `<p class="lede" data-reveal>${esc(b.text)}</p>`,
  text: (b) => `<p class="prose" data-reveal>${esc(b.text)}</p>`,
  quote: (b) => `<blockquote class="quote" data-reveal>${esc(b.text)}</blockquote>`,
  cols: (b) => `<div class="cols">${b.items.map((c) => `<div class="col" data-reveal><h3>${esc(c.title)}</h3>${c.body ? `<p>${esc(c.body)}</p>` : ''}${c.list ? `<ul>${c.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</div>`).join('')}</div>`,
  stats: (b) => `<div class="stats" data-reveal>${b.items.map(statBlock).join('')}${b.note ? `<p class="stats__note">${esc(b.note)}</p>` : ''}</div>`,
  palette: (b) => `<div class="palette" data-reveal>${b.colors.map(([n, h]) => `<button class="swatch" type="button" data-copy="${h}" aria-label="Copiar ${esc(n)} ${h}"><span class="swatch__chip" style="background:${h}"></span><span class="swatch__name">${esc(n)}</span><span class="swatch__hex">${h}</span></button>`).join('')}</div><p class="hint">${esc(b.hint)}</p>`,
  spacing: (b) => `<div class="spacing" data-reveal><h3>${esc(b.title)}</h3><div class="spacing__bars">${b.values.map((v) => `<div class="spacing__row"><span class="mono">${v}</span><span class="spacing__bar" style="--v:${v}"></span></div>`).join('')}</div><p>${esc(b.note)}</p></div>`,
  image: (b) => `<figure class="figure" data-reveal>${fig(b.image, { bg: b.bg })}${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>`,
  grid: (b) => `<figure class="figure" data-reveal><div class="grid grid--${b.cols}">${b.images.map((im) => fig(im, { bg: b.bg, sizes: `(max-width: 900px) 100vw, ${Math.round(70 / b.cols)}vw` })).join('')}</div>${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>`,
  tabs: (b, ctx) => {
    const id = `${ctx.slug}-tabs`;
    return `<div class="tabs" data-tabs data-reveal><div class="tabs__list" role="tablist" aria-label="Pantallas">${b.tabs.map(([n], i) => `<button role="tab" type="button" id="${id}-t${i}" aria-selected="${i === 0}" aria-controls="${id}-p${i}"${i ? ' tabindex="-1"' : ''}>${esc(n)}</button>`).join('')}</div><div class="tabs__stage">${b.tabs.map(([, im], i) => `<div role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}"${i ? ' hidden' : ''}>${fig(im)}</div>`).join('')}</div></div>`;
  },
  browser: (b) => `<figure class="figure" data-reveal><div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span>${esc(b.url)}</span></div><div class="browser__view" tabindex="0" aria-label="Vista desplazable de la página completa">${img(b.image, { sizes: '(max-width: 900px) 100vw, 70vw' })}</div></div>${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>`,
  steps: (b) => `<ol class="steps" style="--count:${b.items.length}">${b.items.map(([t, d], i) => `<li data-reveal><span class="mono">0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}</ol>`,
  attrs: (b) => `<dl class="attrs">${b.items.map(([t, d]) => `<div data-reveal><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>`,
};

const nav = (home) => `<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="nav" data-nav>
  <a class="nav__logo" href="/" aria-label="Enoc Narváez, inicio">${logoSvg()}<span>Enoc Narváez</span></a>
  <nav aria-label="Principal"><a href="${home ? '' : '/'}#trabajo">Trabajo</a><a href="${home ? '' : '/'}#sobre-mi">Sobre mí</a><a class="nav__cta" href="#contacto">Contacto</a></nav>
</header>`;

const footer = () => `<footer class="footer" id="contacto">
  <p class="eyebrow">Contacto</p>
  <button class="footer__mail" type="button" data-copy="${site.email}" title="Copiar correo" aria-label="Hablemos: copiar el correo ${site.email}">Hablemos</button>
  <div class="footer__row">
    <a class="footer__address" href="mailto:${site.email}">${site.email} ${arrow}</a>
    <ul class="footer__links">
      <li><a href="${site.behance}" rel="noopener" target="_blank">Behance ${arrow}</a></li>
      <li><a href="${site.linkedin}" rel="noopener" target="_blank">LinkedIn ${arrow}</a></li>
    </ul>
  </div>
  <div class="footer__base">
    <span>© ${new Date().getFullYear()} ${site.fullName}</span>
    <span>${site.city} · <time data-clock>--:--</time></span>
    <a href="#contenido">Volver arriba</a>
  </div>
</footer>
<div class="toast" role="status" aria-live="polite" data-toast></div>`;

const page = ({ title, desc, body, accent, on, soft, home, image }) => `<!doctype html>
<html lang="es"${home ? ' class="is-home"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
${image && process.env.URL ? `<meta property="og:image" content="${esc(process.env.URL + image)}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">` : ''}
<meta name="theme-color" content="${accent || '#ECEFF1'}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Instrument+Sans:wght@400..600&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
${accent ? `<style>:root{--accent:${accent};--on-accent:${on};--soft:${soft}}</style>` : ''}
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
${nav(home)}
${body}
${footer()}
<div class="lightbox" data-lightbox hidden role="dialog" aria-modal="true" aria-label="Imagen ampliada">
  <button class="lightbox__close" type="button" aria-label="Cerrar">Cerrar</button>
  <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Imagen anterior">←</button>
  <img alt="">
  <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Imagen siguiente">→</button>
  <span class="lightbox__count mono" aria-live="polite"></span>
</div>
<div class="cursor" data-cursor aria-hidden="true"><span>Ver caso</span></div>
<script src="/main.js" defer></script>
</body>
</html>`;

const coverStyle = (p) => `--tile:${p.coverBg || p.accent};--tile-on:${p.coverBg ? p.accent : p.on}`;
// recorta la franja superior de portadas que son láminas con encabezado, sin tocar la imagen original
const cropStyle = (p) => (p.coverCrop ? `;--img-h:${100 + p.coverCrop}%;--img-y:-${(p.coverCrop / (100 + p.coverCrop) * 100).toFixed(2)}%` : '');
const vtStyle = (p) => `view-transition-name:cover-${p.slug}`;

const card = (p, i) => `<li class="card" data-cats="${p.cats.join(' ')}" data-reveal>
  <a href="/proyectos/${p.slug}/" data-case data-preview="${esc(p.cover.src)}">
    <div class="card__tile card__tile--${p.fit}${p.coverBg ? ' is-soft' : ''}" style="${coverStyle(p)};${vtStyle(p)}${cropStyle(p)}">${img(p.cover, { sizes: '(max-width: 900px) 100vw, 60vw' })}</div>
    <div class="card__meta">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.kind)}</p>
      <span class="mono">${esc(catLabel(p))}</span>
      <span class="mono">${esc(p.year)}</span>
    </div>
  </a>
</li>`;

const row = (p, i) => `<li class="row" data-cats="${p.cats.join(' ')}">
  <a href="/proyectos/${p.slug}/" data-preview="${esc(p.cover.src)}">
    <span class="mono row__n">${String(i + 1).padStart(2, '0')}</span>
    <span class="row__title">${esc(p.title)}</span>
    <span class="row__kind">${esc(p.kind)}</span>
    <span class="mono row__cat">${esc(catLabel(p))}</span>
    <span class="mono row__year">${esc(p.year)}</span>
  </a>
</li>`;

const letters = (word) => `<span class="word" aria-hidden="true">${[...word].map((c, i) => `<span class="ltr" style="--i:${i}">${c}</span>`).join('')}</span>`;

const home = () => {
  const counts = { all: projects.length };
  Object.keys(CATS).forEach((c) => { counts[c] = projects.filter((p) => p.cats.includes(c)).length; });
  const reel = projects.filter((p) => p.fit === 'cover').slice(0, 7);
  const reelItems = (hidden) => reel.map((p) => `<a href="/proyectos/${p.slug}/" class="reel__item" style="${cropStyle(p).slice(1)}" data-case${hidden ? ' aria-hidden="true" tabindex="-1"' : ''}>${img({ ...p.cover, alt: hidden ? '' : p.cover.alt }, { sizes: '40vw' })}</a>`).join('');
  const ordered = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  return `<main id="contenido">
  <section class="hero">
    <div class="hero__stage">
      <h1 class="hero__name" data-hero-name aria-label="${site.name}">
        <span class="hero__line">${letters('Enoc')}</span>
        <span class="hero__line">${letters('Narváez')}</span>
      </h1>
      <div class="hero__intro"><p>${esc(site.role)}. ${esc(site.bio)}</p></div>
    </div>
    <div class="hero__foot">
      <span class="mono">${site.city}</span>
      <span class="mono"><time data-clock>--:--</time> hora local</span>
      <a class="mono hero__down" href="#trabajo">Ver trabajo ↓</a>
    </div>
  </section>
  <div class="reel" data-reel><div class="reel__track">${reelItems(false)}${reelItems(true)}</div></div>

  <section class="work" id="trabajo">
    <div class="work__head">
      <h2 class="display">Trabajo</h2>
      <div class="views" role="group" aria-label="Cambiar vista">
        <button type="button" data-view="grid" aria-pressed="true" aria-label="Ver en cuadrícula" title="Cuadrícula"><svg viewBox="0 0 18 18" aria-hidden="true"><path fill="currentColor" d="M2 2h6v6H2zM10 2h6v6h-6zM2 10h6v6H2zM10 10h6v6h-6z"/></svg></button>
        <button type="button" data-view="list" aria-pressed="false" aria-label="Ver en lista" title="Lista"><svg viewBox="0 0 18 18" aria-hidden="true"><path fill="currentColor" d="M2 3h14v2H2zM2 8h14v2H2zM2 13h14v2H2z"/></svg></button>
      </div>
      <div class="filters" role="group" aria-label="Filtrar por disciplina">
        <button type="button" data-filter="all" aria-pressed="true">Todo<sup>${counts.all}</sup></button>
        ${Object.entries(CATS).map(([k, v]) => `<button type="button" data-filter="${k}" aria-pressed="false">${v}<sup>${counts[k]}</sup></button>`).join('')}
      </div>
    </div>
    <ul class="cards" data-cards>${ordered.map(card).join('')}</ul>
    <ul class="rows" data-rows hidden>${ordered.map(row).join('')}</ul>
    <div class="preview" data-preview-float aria-hidden="true"><img alt=""></div>
  </section>

  <section class="impact" id="impacto">
    <h2 class="display" data-reveal>Diseño que se nota en los números</h2>
    <ul class="impact__grid">
      ${site.impact.map((s) => `<li data-reveal><div class="stat__n" data-count="${s.n}" data-pre="${esc(s.pre)}" data-suf="${esc(s.suf)}">${esc(s.pre)}${s.n}${esc(s.suf)}</div><p>${esc(s.label)}</p>${s.slug ? `<a class="mono" href="/proyectos/${s.slug}/">${esc(s.source)} →</a>` : `<span class="mono">${esc(s.source)}</span>`}</li>`).join('')}
    </ul>
  </section>

  <section class="process" id="proceso">
    <h2 class="display" data-reveal>Cómo trabajo</h2>
    <ol class="process__list" data-accordion-h>
      ${site.process.map((s, i) => `<li class="${i === 0 ? 'is-open' : ''}"><button type="button" aria-expanded="${i === 0}"><span class="mono">0${i + 1}</span><span class="process__title">${esc(s.title)}</span></button><div class="process__body"><p>${esc(s.body)}</p><ul>${s.tags.map((t) => `<li class="mono">${esc(t)}</li>`).join('')}</ul></div></li>`).join('')}
    </ol>
  </section>

  <section class="about" id="sobre-mi">
    <div class="about__intro">
      <div class="about__photo" data-reveal>${img({ src: '/img/enoc.webp', w: 1090, h: 1280, alt: 'Retrato de Enoc Narváez' }, { sizes: '(max-width: 900px) 100vw, 35vw' })}</div>
      <div class="about__text">
        <h2 class="display" data-reveal>Sobre mí</h2>
        <p class="lede" data-reveal>Soy diseñador gráfico, web y UX/UI. Me especializo en soluciones visuales funcionales, modernas y alineadas a los objetivos de cada marca.</p>
        <p class="prose" data-reveal>Vengo de la informática educativa y enseñé diseño durante casi una década en la UNAN-Managua. Por eso me importa tanto que una interfaz se entienda como que se vea bien. Hoy soy Diseñador UX/UI en Grupo LAFISE, donde trabajo en interfaces móviles de productos digitales, con foco en inteligencia artificial y Behavior Design.</p>
        <ul class="chips" data-reveal>${site.tools.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="marquee" aria-label="Organizaciones con las que he trabajado"><div class="marquee__track">${[0, 1].map((n) => `<span${n ? ' aria-hidden="true"' : ''}>${site.clients.map((c) => `<b>${esc(c)}</b>`).join('<i>✦</i>')}<i>✦</i></span>`).join('')}</div></div>
    <div class="about__cv">
      <div>
        <h3 class="eyebrow">Experiencia</h3>
        <div class="exp">${site.experience.map((e) => `<details class="exp__item" name="exp"><summary><span class="exp__role">${esc(e.role)}</span><span class="exp__org">${esc(e.org)}</span><span class="mono">${esc(e.when)}</span></summary><ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></details>`).join('')}</div>
      </div>
      <div>
        <h3 class="eyebrow">Formación</h3>
        <ul class="edu">${site.education.map((e) => `<li><strong>${esc(e.title)}</strong><span>${esc(e.org)}</span><span class="mono">${esc(e.when)}</span></li>`).join('')}</ul>
      </div>
    </div>
  </section>
</main>`;
};

const caseBody = (p, i) => {
  const next = projects[(i + 1) % projects.length];
  const ctx = { slug: p.slug };
  return `<div class="progress" data-progress aria-hidden="true"></div>
<main id="contenido" class="case">
  <section class="case__head">
    <a class="mono case__back" href="/#trabajo">← Todos los proyectos</a>
    <p class="mono case__cat">${esc(catLabel(p))} · ${esc(p.year)}</p>
    <h1 class="case__title">${esc(p.title)}</h1>
    <p class="case__tag">${esc(p.tagline)}</p>
    <dl class="facts">${p.facts.map(([k, v]) => `<div><dt class="mono">${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
  </section>
  <div class="case__cover case__cover--${p.fit}${p.coverBg ? ' is-soft' : ''}" style="${coverStyle(p)};${vtStyle(p)}">${img(p.cover, { eager: true })}</div>
  <div class="case__layout">
    <nav class="rail" aria-label="Secciones del proyecto" data-rail><ol>${p.sections.map((s, n) => `<li><a href="#${s.id}"><span class="mono">0${n + 1}</span>${esc(s.label)}</a></li>`).join('')}</ol></nav>
    <div class="case__content">
      ${p.sections.map((s, n) => `<section class="chapter" id="${s.id}" data-chapter>
        <p class="mono chapter__n">0${n + 1} / ${esc(s.label)}</p>
        <h2 data-reveal>${esc(s.title)}</h2>
        ${s.blocks.map((b) => blocks[b.type](b, ctx)).join('\n')}
      </section>`).join('\n')}
      ${p.behance ? `<a class="behance" href="${p.behance}" rel="noopener" target="_blank">Ver la presentación completa en Behance ${arrow}</a>` : ''}
    </div>
  </div>
  <a class="next" href="/proyectos/${next.slug}/" style="--tile:${next.accent};--tile-on:${next.on}">
    <span class="mono">Siguiente proyecto</span>
    <span class="next__title">${esc(next.title)} ${arrow}</span>
    <span class="next__kind">${esc(next.kind)}</span>
  </a>
</main>`;
};

function write(rel, content) {
  const f = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const a = path.join(from, e.name);
    const b = path.join(to, e.name);
    if (e.isDirectory()) copyDir(a, b); else fs.copyFileSync(a, b);
  }
}

fs.rmSync(DIST, { recursive: true, force: true });
copyDir(path.join(__dirname, 'public'), DIST);
fs.copyFileSync(path.join(__dirname, 'src/styles.css'), path.join(DIST, 'styles.css'));
fs.copyFileSync(path.join(__dirname, 'src/main.js'), path.join(DIST, 'main.js'));
write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -14 ${logo.w + 16} ${logo.w + 16}"><path fill="#${logo.fill.map((c) => c.toString(16).padStart(2, '0')).join('')}" fill-rule="evenodd" d="${logo.d}"/></svg>`);

write('index.html', page({
  title: `${site.name} · ${site.role}`,
  desc: site.description,
  body: home(),
  home: true,
  image: '/og/home.jpg',
}));

projects.forEach((p, i) => {
  write(`proyectos/${p.slug}/index.html`, page({
    title: `${p.title} · ${site.name}`,
    desc: `${p.kind}. ${p.tagline}`,
    body: caseBody(p, i),
    accent: p.accent, on: p.on, soft: p.soft,
    image: `/og/${p.slug}.jpg`,
  }));
});

write('404.html', page({
  title: `Página no encontrada · ${site.name}`,
  desc: 'Esta página no existe.',
  body: `<main id="contenido" class="notfound"><h1 class="display">Esta página no existe</h1><p class="prose">Puede que el enlace haya cambiado. El trabajo sigue en el mismo lugar.</p><a class="btn" href="/#trabajo">Ver proyectos</a></main>`,
}));

console.log(`Listo: ${projects.length + 2} páginas en dist/`);
