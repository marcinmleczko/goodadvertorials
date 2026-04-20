/* ============================================================
   MARCIN / ADVERTORIAL - portfolio
   ============================================================ */

// -------- Data ---------------------------------------------------------------
const PAGES = [
  {
    slug: "forbes",
    brand: "Forbes Health",
    title: "GLP-1 listicle for Forbes Health.",
    desc:  "Ran as a paid editorial unit. Listicle format scaled cold traffic across multiple offers.",
    metric: { value: "PUBLISHED", unit: "" },
    metricLabel: "Editorial placement",
    tag: "Published work",
    tagFeatured: true,
    scrollDur: 45,
  },
  {
    slug: "arq8-listicle",
    brand: "Arq8",
    title: "Listicle presell, the cornerstone template.",
    desc:  "10+ versions shipped. Established the master listicle architecture reused across brands.",
    metric: { value: "10", unit: "+" },
    metricLabel: "Versions shipped",
    tag: "Flagship build",
    scrollDur: 38,
  },
  {
    slug: "arq8-longform",
    brand: "Arq8",
    title: "Longform editorial for considered buyers.",
    desc:  "Companion to the listicle. Used for deeper-funnel audiences and remarketing.",
    metric: { value: "LONGFORM", unit: "" },
    metricLabel: "Format variant",
    tag: "Variant",
    scrollDur: 52,
  },
  {
    slug: "caraway",
    brand: "Caraway",
    title: "Bakeware presell, housewares vertical.",
    desc:  "Proved the listicle formula transfers out of supplements into home goods.",
    metric: { value: "V2", unit: "" },
    metricLabel: "Iteration",
    tag: "Cross-vertical",
    scrollDur: 40,
  },
  {
    slug: "audien",
    brand: "Audien",
    title: "Hearing aid presell, health vertical.",
    desc:  "Five iterations. Risk-reversal and social proof density tuned for an older demo.",
    metric: { value: "V5", unit: "" },
    metricLabel: "Iteration",
    tag: "Iterated build",
    scrollDur: 44,
  },
  {
    slug: "longevity",
    brand: "Longevity",
    title: "Supplement review page, longevity category.",
    desc:  "Review-style editorial that passed belief threshold for a premium-priced SKU.",
    metric: { value: "REVIEW", unit: "" },
    metricLabel: "Format",
    tag: "Editorial",
    scrollDur: 36,
  },
  {
    slug: "nirapet",
    brand: "Nira Pet",
    title: "6-reasons listicle, pet health.",
    desc:  "Built on a separate store. Template portability across Shopify environments.",
    metric: { value: "6", unit: " reasons" },
    metricLabel: "Listicle format",
    tag: "Multi-store",
    scrollDur: 42,
  },
  {
    slug: "ella",
    brand: "Ella",
    title: "Hybrid listicle, women's wellness.",
    desc:  "Mockup-driven concept piece. Template as pitch tool for new accounts.",
    metric: { value: "CONCEPT", unit: "" },
    metricLabel: "Design variant",
    tag: "Concept work",
    scrollDur: 34,
  },
];

// -------- Ticker data -------------------------------------------------------
const TICKER_ITEMS = [
  { k: "PAGES SHIPPED",       v: "40+" },
  { k: "BRANDS",              v: "7" },
  { k: "FEATURED IN",         v: "FORBES" },
  { k: "AVG BUILD TIME",      v: "3 DAYS" },
  { k: "LISTICLE FORMAT",     v: "BATTLE-TESTED" },
  { k: "MASTER TEMPLATES",    v: "3" },
  { k: "STORES",              v: "MULTI" },
  { k: "CATEGORIES",          v: "HEALTH / HOUSEWARES / PET / WELLNESS" },
  { k: "RISK REVERSAL",       v: "BEAT YOUR CONTROL OR IT'S FREE" },
  { k: "STATUS",              v: "2 SLOTS OPEN Q2" },
];

// -------- Render: Ticker ----------------------------------------------------
(function renderTicker() {
  const track = document.getElementById("tickerTrack");
  if (!track) return;

  const build = () => TICKER_ITEMS.map(i =>
    `<span class="ticker__item"><span>${i.k}</span><strong>${i.v}</strong><span class="sep">//</span></span>`
  ).join("");

  track.innerHTML = build() + build();
})();

// -------- Render: Device wall ----------------------------------------------
(function renderDeviceWall() {
  const wall = document.getElementById("wallGrid");
  if (!wall) return;

  wall.innerHTML = PAGES.map((p, i) => `
    <div class="phone" data-dur="${p.scrollDur}" data-offset="${i}">
      <div class="phone__screen">
        <div class="phone__notch"></div>
        <img class="phone__img"
             src="../assets/screenshots/${p.slug}.png"
             alt="${p.brand}"
             loading="lazy" />
        <div class="phone__label"><span class="dot"></span>${p.brand}</div>
      </div>
    </div>
  `).join("");

  // Start a Web Animations API scroll for each phone once the image loads.
  function startPhoneAnim(phone) {
    const img = phone.querySelector(".phone__img");
    const screen = phone.querySelector(".phone__screen");
    if (!img || !screen) return;

    const screenH = screen.getBoundingClientRect().height;
    const imgH    = img.getBoundingClientRect().height;
    const maxOffset = Math.max(0, imgH - screenH);

    if (maxOffset <= 0) return; // nothing to scroll

    const dur = (parseFloat(phone.dataset.dur) || 40) * 1000;
    const offset = parseFloat(phone.dataset.offset) || 0;
    const startTime = -(offset * 1500) % dur; // stagger starts so phones aren't in lockstep

    const anim = img.animate([
      { transform: "translateY(0)" },
      { transform: `translateY(-${maxOffset}px)`, offset: 0.45 },
      { transform: `translateY(-${maxOffset}px)`, offset: 0.55 },
      { transform: "translateY(0)" },
    ], {
      duration: dur,
      iterations: Infinity,
      easing: "linear",
    });
    anim.currentTime = Math.abs(startTime);

    phone.addEventListener("mouseenter", () => anim.pause());
    phone.addEventListener("mouseleave", () => anim.play());
    phone._anim = anim;

    // restart on resize (dimensions change)
    let rtimer;
    window.addEventListener("resize", () => {
      clearTimeout(rtimer);
      rtimer = setTimeout(() => {
        anim.cancel();
        startPhoneAnim(phone);
      }, 250);
    }, { once: true });
  }

  document.querySelectorAll(".phone").forEach(phone => {
    const img = phone.querySelector(".phone__img");
    if (!img) return;
    if (img.complete && img.naturalHeight > 0) {
      // give layout a tick
      requestAnimationFrame(() => startPhoneAnim(phone));
    } else {
      img.addEventListener("load", () => {
        requestAnimationFrame(() => startPhoneAnim(phone));
      }, { once: true });
    }
  });
})();

// -------- Render: Case studies ---------------------------------------------
(function renderCases() {
  const cases = document.getElementById("casesList");
  if (!cases) return;

  cases.innerHTML = PAGES.map(p => `
    <article class="case">
      <div class="case__thumb">
        <img src="../assets/screenshots/${p.slug}.png" alt="${p.brand}" loading="lazy" />
      </div>
      <div class="case__body">
        <div class="case__brand">
          <span>${p.brand}</span>
          <span class="case__tag ${p.tagFeatured ? "case__tag--featured" : ""}">${p.tag}</span>
        </div>
        <h3 class="case__title">${p.title}</h3>
        <p class="case__desc">${p.desc}</p>
      </div>
      <div class="case__meta">
        <div class="case__metric">${p.metric.value}<span class="unit">${p.metric.unit}</span></div>
        <div class="case__metric-label">${p.metricLabel}</div>
      </div>
    </article>
  `).join("");
})();

// -------- Smooth scroll ----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
