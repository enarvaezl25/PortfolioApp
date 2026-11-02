(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* Hora local de Managua */
  const clockFmt = new Intl.DateTimeFormat('es-NI', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Managua' });
  const tick = () => $$('[data-clock]').forEach((el) => { el.textContent = clockFmt.format(new Date()); });
  tick();
  setInterval(tick, 20000);

  /* Menú: línea inferior al desplazarse y sección actual marcada */
  const nav = $('[data-nav]');
  const onNavScroll = () => nav.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onNavScroll, { passive: true });
  onNavScroll();
  const navLinks = $$('nav a:not(.nav__cta)', nav).filter((a) => a.hash && $(a.hash) && a.pathname === location.pathname);
  if (navLinks.length) {
    const navSpy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const link = navLinks.find((a) => a.hash === `#${e.target.id}`);
        if (e.isIntersecting) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach((a) => navSpy.observe($(a.hash)));
  }

  /* Aparición al hacer scroll */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); revealIO.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal]').forEach((el) => revealIO.observe(el));

  /* Contadores */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      countIO.unobserve(e.target);
      const { count, pre, suf } = e.target.dataset;
      const end = Number(count);
      if (reduced) return;
      const t0 = performance.now();
      const dur = 1100;
      const step = (t) => {
        const k = clamp((t - t0) / dur, 0, 1);
        const eased = 1 - Math.pow(1 - k, 3);
        e.target.textContent = `${pre}${Math.round(end * eased)}${suf}`;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach((el) => countIO.observe(el));

  /* Nombre del hero: el peso de cada letra responde al cursor */
  const heroName = $('[data-hero-name]');
  if (heroName && !reduced) {
    const ltrs = $$('.ltr', heroName);
    const REST = 340;
    const PEAK = 800;
    const current = ltrs.map(() => REST);
    let target = null;
    let centers = [];
    const measure = () => {
      centers = ltrs.map((l) => {
        const r = l.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 + scrollY };
      });
    };
    let radius = 300;
    const resize = () => { measure(); radius = Math.max(220, innerWidth * 0.26); };
    addEventListener('resize', resize);
    document.fonts && document.fonts.ready.then(resize);
    resize();

    if (finePointer) {
      addEventListener('pointermove', (e) => { target = { x: e.clientX, y: e.clientY + scrollY }; }, { passive: true });
      document.documentElement.addEventListener('pointerleave', () => { target = null; });
    }
    const t0 = performance.now();
    const frame = (t) => {
      const visible = scrollY < innerHeight * 1.1;
      if (visible) {
        ltrs.forEach((l, i) => {
          let goal = REST;
          if (target && centers[i]) {
            const d = Math.hypot(target.x - centers[i].x, target.y - centers[i].y);
            const k = clamp(1 - d / radius, 0, 1);
            goal = REST + (PEAK - REST) * k * k;
          } else if (!finePointer) {
            // en táctil una ola lenta recorre las letras
            const w = Math.sin((t - t0) / 900 - i * 0.55);
            goal = REST + (PEAK - REST) * Math.max(0, w) * 0.75;
          }
          if (Math.abs(goal - current[i]) < 0.5) return;
          current[i] += (goal - current[i]) * 0.14;
          l.style.fontVariationSettings = `"wght" ${current[i].toFixed(0)}, "wdth" 100, "opsz" 96`;
        });
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  /* Reel: se desplaza solo y acelera con la velocidad del scroll */
  const reel = $('[data-reel]');
  if (reel && !reduced) {
    const track = $('.reel__track', reel);
    let x = 0;
    let last = scrollY;
    let boost = 0;
    let half = track.scrollWidth / 2;
    addEventListener('resize', () => { half = track.scrollWidth / 2; });
    addEventListener('load', () => { half = track.scrollWidth / 2; });
    const loop = () => {
      const dy = scrollY - last;
      last = scrollY;
      boost += (dy * 0.5 - boost) * 0.1;
      if (half === 0) half = track.scrollWidth / 2;
      x -= 0.6 + boost;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      track.style.transform = `translate3d(${x}px,0,0)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  /* Filtros y vistas del listado */
  const cards = $('[data-cards]');
  const rows = $('[data-rows]');
  if (cards) {
    const transition = (fn) => {
      if (document.startViewTransition && !reduced) {
        // el navegador aborta la transición si la pestaña está oculta; el cambio se aplica igual
        const t = document.startViewTransition(fn);
        [t.ready, t.updateCallbackDone, t.finished].forEach((p) => p.catch(() => {}));
      } else fn();
    };
    let filter = 'all';
    const apply = () => {
      const match = (el) => filter === 'all' || el.dataset.cats.split(' ').includes(filter);
      [...$$('li', cards), ...$$('li', rows)].forEach((el) => {
        el.hidden = !match(el);
        if (filter !== 'all') el.classList.add('is-in');
      });
      // ritmo asimétrico recalculado sobre lo que queda visible
      $$('.card', cards).filter((c) => !c.hidden).forEach((c, i) => {
        const pos = i % 4;
        c.dataset.span = pos === 0 || pos === 3 ? 'wide' : 'narrow';
      });
    };
    apply();
    $$('[data-filter]').forEach((btn) => btn.addEventListener('click', () => {
      filter = btn.dataset.filter;
      $$('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      transition(apply);
    }));
    $$('[data-view]').forEach((btn) => btn.addEventListener('click', () => {
      const list = btn.dataset.view === 'list';
      $$('[data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      transition(() => { cards.hidden = list; rows.hidden = !list; });
    }));
  }

  /* Vista previa flotante de la lista */
  const float = $('[data-preview-float]');
  if (float && finePointer) {
    const im = $('img', float);
    let tx = 0, ty = 0, cx = 0, cy = 0, on = false;
    $$('.row a').forEach((a) => {
      a.addEventListener('pointerenter', () => { im.src = a.dataset.preview; float.classList.add('is-on'); on = true; });
      a.addEventListener('pointerleave', () => { float.classList.remove('is-on'); on = false; });
    });
    addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const move = () => {
      cx += (tx - cx) * 0.14; cy += (ty - cy) * 0.14;
      if (on) float.style.transform = `translate3d(${cx + 28}px,${cy - 120}px,0)`;
      requestAnimationFrame(move);
    };
    move();
  }

  /* Etiqueta que sigue al cursor sobre las tarjetas */
  const cursor = $('[data-cursor]');
  if (cursor && finePointer && !reduced) {
    document.documentElement.classList.add('has-cursor');
    let tx = 0, ty = 0, cx = 0, cy = 0;
    addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const move = () => {
      cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
      cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      requestAnimationFrame(move);
    };
    move();
    $$('.card__tile').forEach((t) => {
      t.addEventListener('pointerenter', () => cursor.classList.add('is-on'));
      t.addEventListener('pointerleave', () => cursor.classList.remove('is-on'));
    });
  }

  /* Acordeón horizontal del proceso */
  const proc = $('[data-accordion-h]');
  if (proc) {
    const items = $$(':scope > li', proc);
    const open = (it) => items.forEach((x) => {
      const isIt = x === it;
      x.classList.toggle('is-open', isIt);
      $('button', x).setAttribute('aria-expanded', String(isIt));
    });
    items.forEach((it) => {
      $('button', it).addEventListener('click', () => open(it));
      if (finePointer) it.addEventListener('pointerenter', () => open(it));
    });
  }

  /* Copiar al portapapeles */
  const toast = $('[data-toast]');
  let toastTimer;
  const say = (msg) => {
    toast.textContent = msg;
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-on'), 1800);
  };
  $$('[data-copy]').forEach((el) => el.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(el.dataset.copy);
      say(`Copiado: ${el.dataset.copy}`);
    } catch {
      say(el.dataset.copy);
    }
  }));

  /* Pestañas de pantallas */
  $$('[data-tabs]').forEach((box) => {
    const tabs = $$('[role=tab]', box);
    const panels = $$('[role=tabpanel]', box);
    const select = (i, focus) => {
      tabs.forEach((t, n) => {
        t.setAttribute('aria-selected', String(n === i));
        t.tabIndex = n === i ? 0 : -1;
      });
      panels.forEach((p, n) => { p.hidden = n !== i; });
      if (focus) tabs[i].focus();
      tabs[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduced ? 'auto' : 'smooth' });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') select((i + 1) % tabs.length, true);
        if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length, true);
      });
    });
  });

  /* Índice lateral y barra de progreso de cada caso */
  const progress = $('[data-progress]');
  if (progress) {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const links = $$('[data-rail] a');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => {
          const active = l.getAttribute('href') === `#${e.target.id}`;
          l.classList.toggle('is-active', active);
          if (active) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    $$('[data-chapter]').forEach((c) => spy.observe(c));
  }

  /* Visor de imágenes */
  const box = $('[data-lightbox]');
  if (box) {
    const shots = $$('.shot');
    const view = $('img', box);
    const count = $('.lightbox__count', box);
    let at = 0;
    let opener = null;
    const visibleShots = () => shots.filter((s) => s.offsetParent !== null);
    let list = shots;
    const show = (i) => {
      at = (i + list.length) % list.length;
      const im = $('img', list[at]);
      view.src = im.currentSrc || im.src;
      view.alt = im.alt;
      count.textContent = `${at + 1} / ${list.length}`;
    };
    const close = () => {
      box.hidden = true;
      document.documentElement.classList.remove('no-scroll');
      opener && opener.focus();
    };
    shots.forEach((s) => s.addEventListener('click', () => {
      list = visibleShots();
      opener = s;
      show(list.indexOf(s));
      box.hidden = false;
      document.documentElement.classList.add('no-scroll');
      $('.lightbox__close', box).focus();
    }));
    $('.lightbox__close', box).addEventListener('click', close);
    $('.lightbox__nav--prev', box).addEventListener('click', () => show(at - 1));
    $('.lightbox__nav--next', box).addEventListener('click', () => show(at + 1));
    box.addEventListener('click', (e) => { if (e.target === box) close(); });
    addEventListener('keydown', (e) => {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(at + 1);
      if (e.key === 'ArrowLeft') show(at - 1);
      if (e.key === 'Tab') {
        const f = $$('button', box);
        const idx = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(idx + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });
  }
})();
