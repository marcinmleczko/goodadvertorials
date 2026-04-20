/* ============================================================
   MARCIN / ADVERTORIAL - portfolio
   ============================================================ */

// -------- Data ---------------------------------------------------------------
const PAGES = [
  {
    slug: "caraway-bakeware",
    brand: "Caraway",
    title: "Bakeware listicle, housewares vertical.",
    desc:  "Proved the listicle formula transfers out of supplements into home goods.",
    metric: { value: "V2", unit: "" },
    metricLabel: "Iteration",
    tag: "Cross-vertical",
    notes: [
      { at: 0.00, label: "Editorial frame", text: "Leading with a trusted third-party voice (Women's Health) to borrow credibility before selling anything." },
      { at: 0.18, label: "The lead",        text: "Hook built around a relatable kitchen pain point, not the product. Pulls the reader into the story first." },
      { at: 0.42, label: "Mechanism",       text: "Explaining why ceramic non-stick is the breakthrough. Education bridges straight into the product reveal." },
      { at: 0.68, label: "Proof stack",     text: "Ratings, press logos, UGC imagery. Belief threshold for a premium housewares purchase." },
      { at: 0.88, label: "Soft CTA",        text: "Editorial-style close, ends on 'see for yourself' energy rather than a hard sell." },
    ],
  },
  {
    slug: "forbes",
    brand: "Forbes Health",
    title: "GLP-1 listicle for Forbes Health.",
    desc:  "Ran as a paid editorial unit. Listicle format scaled cold traffic across multiple offers.",
    metric: { value: "1", unit: " of 1" },
    metricLabel: "Forbes placement",
    tag: "Published work",
    tagFeatured: true,
    notes: [
      { at: 0.00, label: "Lead",          text: "Opens with what we lead with for this customer avatar. Frames the GLP-1 category in Forbes' editorial voice." },
      { at: 0.18, label: "Education",     text: "Explains why traditional dieting fails. Plants the problem before the reader meets any brand." },
      { at: 0.40, label: "Category primer", text: "Teaches the mechanism. Reader gets smart before seeing options, which increases trust in the ranking." },
      { at: 0.62, label: "The ranking",   text: "Listicle format. Each provider stack-ranked on the reader's real criteria." },
      { at: 0.85, label: "Branded CTA",   text: "Each card ends on a Forbes-approved click-out. Editorial → commerce handoff." },
    ],
  },
  {
    slug: "arq8",
    brand: "Arq8",
    title: "Creatine gummies listicle, the cornerstone template.",
    desc:  "10+ versions shipped. Established the master listicle architecture reused across brands.",
    metric: { value: "10", unit: "+" },
    metricLabel: "Versions shipped",
    tag: "Flagship build",
    notes: [
      { at: 0.00, label: "Hero hook",     text: "Angle-led headline, not brand-led. This is the master listicle skeleton we reuse across every vertical." },
      { at: 0.20, label: "Problem agitate", text: "Why the reader's current creatine routine is failing them. Builds tension before the solution lands." },
      { at: 0.45, label: "The 7 reasons", text: "Numbered list of reasons this beats the category. Each reason is its own mini-persuasion unit." },
      { at: 0.72, label: "Social proof",  text: "Reviews, before/after, expert quotes. Density tuned to match the creatine-curious audience." },
      { at: 0.92, label: "Risk reversal", text: "Guarantee stamp. Ends on permission to try. 'No risk to you' energy." },
    ],
  },
  {
    slug: "audien",
    brand: "Audien",
    title: "Hearing aid presell, health vertical.",
    desc:  "Risk-reversal and social proof density tuned for an older demo.",
    metric: { value: "V1", unit: "" },
    metricLabel: "Iteration",
    tag: "Iterated build",
    notes: [
      { at: 0.00, label: "Demo-tuned lead", text: "Larger type, calmer pacing. Everything tuned for an older reader who needs reassurance, not hype." },
      { at: 0.30, label: "Fear + relief",  text: "Names the fear (cost, stigma) and dissolves it. Classic older-demo objection handling." },
      { at: 0.55, label: "Proof density",  text: "Heavy reviews, doctor language, trust badges. Older buyers need more signal before they believe." },
      { at: 0.82, label: "Guarantee",      text: "45-day trial up-front, not buried. Risk-reversal carries the conversion on this page." },
    ],
  },
  {
    slug: "caraway-cutting-boards",
    brand: "Caraway",
    title: "Cutting boards listicle, second Caraway variant.",
    desc:  "Extended the Caraway formula into a new SKU line. Same skeleton, fresh angle.",
    metric: { value: "V1", unit: "" },
    metricLabel: "New SKU variant",
    tag: "Variant",
    notes: [
      { at: 0.00, label: "Same skeleton",  text: "Caraway bakeware template, re-angled for cutting boards. Proves the architecture ports across SKUs." },
      { at: 0.25, label: "New angle",      text: "Material story (hardwood vs plastic) becomes the new hook, category education built for this product." },
      { at: 0.58, label: "Gift positioning", text: "Reframed for gifting. Small tweak, big conversion impact for housewares." },
      { at: 0.88, label: "CTA",            text: "Editorial button style preserved. Visually consistent with the rest of the Caraway funnel." },
    ],
  },
  {
    slug: "nirapet",
    brand: "Nira Pet",
    title: "6-reasons listicle, pet health.",
    desc:  "Built on a separate store. Template portability across Shopify environments.",
    metric: { value: "6", unit: " reasons" },
    metricLabel: "Listicle format",
    tag: "Multi-store",
    notes: [
      { at: 0.00, label: "Cross-store",    text: "Built on a separate Shopify store (nira-pet-ip). Proves template portability across environments." },
      { at: 0.22, label: "Pet-owner hook", text: "Emotional lead, your dog's comfort. Pet vertical buys on love, not spec sheets." },
      { at: 0.55, label: "6 reasons",      text: "Numbered listicle tuned to pet-parent objections. Each point answers a 'but what about...' worry." },
      { at: 0.88, label: "Vet-style close", text: "Authority layer + softer CTA. Pet buyers convert on reassurance, not urgency." },
    ],
  },
  {
    slug: "arq8longnew",
    brand: "Arq8",
    title: "Longform editorial for considered buyers.",
    desc:  "Companion to the listicle. Deeper-funnel audiences and remarketing.",
    metric: { value: "V1", unit: "" },
    metricLabel: "Longform variant",
    tag: "Variant",
    notes: [
      { at: 0.00, label: "Deep funnel",    text: "Companion page to the listicle. Built for warm audiences who need more story before converting." },
      { at: 0.25, label: "Longform story", text: "Reader-as-hero narrative. Works the bottom of the funnel where short-form has already done its job." },
      { at: 0.55, label: "Mechanism deep-dive", text: "The 'how' in depth. Ingredient science, manufacturing, sourcing. Builds expert trust." },
      { at: 0.85, label: "Considered CTA", text: "Assumes a more informed reader. Closes on spec + guarantee, not hype." },
    ],
  },
  {
    slug: "longevity",
    brand: "The Longevity Store",
    title: "HDR review editorial, longevity category.",
    desc:  "Review-style editorial that passed belief threshold for a premium-priced SKU.",
    metric: { value: "V1", unit: "" },
    metricLabel: "Review editorial",
    tag: "Editorial",
    notes: [
      { at: 0.00, label: "Review frame",   text: "Positioned as a product review, not an ad. Editorial distance builds trust for a premium SKU." },
      { at: 0.25, label: "Reviewer voice", text: "First-person narrator tries the product. Reader rides along. Skepticism first, belief earned." },
      { at: 0.55, label: "HDR details",    text: "High-contrast imagery, rich product shots. Visual premium-ness matches the price point." },
      { at: 0.85, label: "Belief threshold", text: "By this point the reader has seen enough proof to justify the price. Close is quiet, confident." },
    ],
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

// -------- Wall: swipe dots on mobile ---------------------------------------
function setupWallDots() {
  const rail = document.getElementById("wallGrid");
  const dotsEl = document.getElementById("wallDots");
  if (!rail || !dotsEl) return;
  const phones = Array.from(rail.querySelectorAll(".phone"));
  if (!phones.length) return;

  dotsEl.innerHTML = phones.map((_, i) =>
    `<button class="dot" type="button" data-i="${i}" aria-label="Scroll to page ${i + 1}"></button>`
  ).join("");
  const dots = Array.from(dotsEl.querySelectorAll(".dot"));

  const step = () => {
    if (phones.length < 2) return rail.clientWidth;
    return phones[1].getBoundingClientRect().left - phones[0].getBoundingClientRect().left;
  };
  const update = () => {
    const s = step();
    const i = s ? Math.max(0, Math.min(phones.length - 1, Math.round(rail.scrollLeft / s))) : 0;
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
  };

  dots.forEach(d => d.addEventListener("click", () => {
    rail.scrollTo({ left: parseInt(d.dataset.i, 10) * step(), behavior: "smooth" });
  }));
  rail.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

// -------- Render: Device wall ----------------------------------------------
(function renderDeviceWall() {
  const wall = document.getElementById("wallGrid");
  if (!wall) return;
  // Wire up swipe-dots after we've rendered all phones.
  setTimeout(setupWallDots, 0);

  wall.innerHTML = PAGES.map((p) => `
    <button class="phone" type="button" data-slug="${p.slug}" data-brand="${p.brand}" aria-label="Open ${p.brand} preview">
      <div class="phone__screen">
        <img class="phone__img"
             src="assets/screenshots/${p.slug}-thumb.webp"
             alt="${p.brand}"
             loading="lazy"
             decoding="async" />
        <div class="phone__label"><span class="dot"></span>${p.brand}</div>
      </div>
    </button>
  `).join("");

  // -------- Modal: full screenshot viewer ---------------------------------
  const modal = document.createElement("div");
  modal.className = "previewer";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="previewer__backdrop" data-close></div>
    <div class="previewer__dialog" role="dialog" aria-modal="true">
      <div class="previewer__head">
        <span class="previewer__brand"></span>
        <button class="previewer__close" type="button" aria-label="Close" data-close>&times;</button>
      </div>
      <div class="previewer__stage">
        <div class="previewer__frame">
          <div class="previewer__scroll">
            <img class="previewer__img" alt="" />
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const imgEl    = modal.querySelector(".previewer__img");
  const brandEl  = modal.querySelector(".previewer__brand");
  const scrollEl = modal.querySelector(".previewer__scroll");

  function openPreview(slug, brand) {
    imgEl.src = `assets/screenshots/${slug}.png`;
    imgEl.alt = brand;
    brandEl.textContent = brand;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      scrollEl.scrollTop = 0;
    });
  }

  function closePreview() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closePreview();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closePreview();
  });

  document.querySelectorAll(".phone").forEach(phone => {
    phone.addEventListener("click", () => {
      openPreview(phone.dataset.slug, phone.dataset.brand);
    });
  });
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

// -------- Wins rail: dots on mobile ----------------------------------------
(function winsRail() {
  const rail = document.getElementById("winsRail");
  const dotsEl = document.getElementById("winsDots");
  if (!rail || !dotsEl) return;
  const cards = Array.from(rail.querySelectorAll(".win"));
  if (!cards.length) return;
  dotsEl.innerHTML = cards.map((_, i) =>
    `<button class="dot" type="button" data-i="${i}" aria-label="Scroll to card ${i + 1}"></button>`
  ).join("");
  const dots = Array.from(dotsEl.querySelectorAll(".dot"));
  const step = () => cards.length < 2 ? rail.clientWidth :
    cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
  const update = () => {
    const s = step();
    const i = s ? Math.max(0, Math.min(cards.length - 1, Math.round(rail.scrollLeft / s))) : 0;
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
  };
  dots.forEach(d => d.addEventListener("click", () =>
    rail.scrollTo({ left: parseInt(d.dataset.i, 10) * step(), behavior: "smooth" })));
  rail.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// -------- Hero: auto-calculate go-live date (today + 7 days, push weekends to Monday)
(function heroDate() {
  const el = document.getElementById("heroDate");
  if (!el) return;
  const d = new Date();
  d.setDate(d.getDate() + 7);
  const day = d.getDay(); // 0=Sun, 6=Sat
  if (day === 6) d.setDate(d.getDate() + 2);
  if (day === 0) d.setDate(d.getDate() + 1);
  el.textContent = d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
})();

// -------- Nav: add glass blur only after scroll ---------------------------
(function navScrollGlass() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const toggle = () => {
    if (window.scrollY > 8) nav.classList.add("nav--scrolled");
    else nav.classList.remove("nav--scrolled");
  };
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
})();

// -------- Email copy-to-clipboard ----------------------------------------
(function emailCopy() {
  const wireUp = (btn, defaultSelector) => {
    if (!btn) return;
    const email = btn.dataset.email || "";
    const defaultEl = defaultSelector ? btn.querySelector(defaultSelector) : null;
    const defaultHTML = defaultEl ? defaultEl.innerHTML : "";
    let timer;

    const markCopied = () => {
      btn.classList.add("is-copied");
      if (defaultEl) defaultEl.textContent = "Copied ✓";
      clearTimeout(timer);
      timer = setTimeout(() => {
        btn.classList.remove("is-copied");
        if (defaultEl) defaultEl.innerHTML = defaultHTML;
      }, 2000);
    };

    const fallbackCopy = () => {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        markCopied();
      } catch (e) {
        window.prompt("Copy this email:", email);
      }
      document.body.removeChild(ta);
    };

    btn.addEventListener("click", () => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(markCopied).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
    });
  };

  wireUp(document.getElementById("emailCopyBtn"), ".btn--copy__default");
  wireUp(document.getElementById("footEmailBtn"), null);
})();
