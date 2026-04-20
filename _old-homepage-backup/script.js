/* ============================================================
   GOOD ADVERTORIALS - portfolio v4 (iteration 2)
   Static phones, click-to-preview modal, marquee runs via CSS
   ============================================================ */

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
  },
  {
    slug: "arq8-listicle",
    brand: "Arq8",
    title: "Listicle presell, the cornerstone template.",
    desc:  "10+ versions shipped. Established the master listicle architecture reused across brands.",
    metric: { value: "10", unit: "+" },
    metricLabel: "Versions shipped",
    tag: "Flagship build",
  },
  {
    slug: "arq8-longform",
    brand: "Arq8",
    title: "Longform editorial for considered buyers.",
    desc:  "Companion to the listicle. Used for deeper-funnel audiences and remarketing.",
    metric: { value: "LONGFORM", unit: "" },
    metricLabel: "Format variant",
    tag: "Variant",
  },
  {
    slug: "caraway",
    brand: "Caraway",
    title: "Bakeware presell, housewares vertical.",
    desc:  "Proved the listicle formula transfers out of supplements into home goods.",
    metric: { value: "V2", unit: "" },
    metricLabel: "Iteration",
    tag: "Cross-vertical",
  },
  {
    slug: "audien",
    brand: "Audien",
    title: "Hearing aid presell, health vertical.",
    desc:  "Five iterations. Risk-reversal and social proof density tuned for an older demo.",
    metric: { value: "V5", unit: "" },
    metricLabel: "Iteration",
    tag: "Iterated build",
  },
  {
    slug: "longevity",
    brand: "Longevity",
    title: "Supplement review page, longevity category.",
    desc:  "Review-style editorial that passed belief threshold for a premium-priced SKU.",
    metric: { value: "REVIEW", unit: "" },
    metricLabel: "Format",
    tag: "Editorial",
  },
  {
    slug: "nirapet",
    brand: "Nira Pet",
    title: "6-reasons listicle, pet health.",
    desc:  "Built on a separate store. Template portability across Shopify environments.",
    metric: { value: "6", unit: " reasons" },
    metricLabel: "Listicle format",
    tag: "Multi-store",
  },
  {
    slug: "ella",
    brand: "Ella",
    title: "Hybrid listicle, women's wellness.",
    desc:  "Mockup-driven concept piece. Template as pitch tool for new accounts.",
    metric: { value: "CONCEPT", unit: "" },
    metricLabel: "Design variant",
    tag: "Concept work",
  },
];

// -------- Device wall ---------------------------------------------------------
(function renderDeviceWall() {
  const wall = document.getElementById("wallGrid");
  if (!wall) return;

  wall.innerHTML = PAGES.map(p => `
    <button type="button" class="phone" data-slug="${p.slug}" data-brand="${p.brand}" aria-label="View ${p.brand} preview">
      <div class="phone__screen">
        <div class="phone__notch"></div>
        <img class="phone__img"
             src="assets/screenshots/${p.slug}.png"
             alt="${p.brand}"
             loading="lazy" />
        <span class="phone__label">${p.brand}</span>
        <span class="phone__cta">View preview →</span>
      </div>
    </button>
  `).join("");

  wall.addEventListener("click", (e) => {
    const phone = e.target.closest(".phone");
    if (!phone) return;
    openPreview(phone.dataset.slug, phone.dataset.brand);
  });
})();

// -------- Preview modal -------------------------------------------------------
const previewEl    = document.getElementById("preview");
const previewImg   = document.getElementById("previewImg");
const previewBrand = document.getElementById("previewBrand");
const previewClose = document.getElementById("previewClose");
const previewScroll = previewEl ? previewEl.querySelector(".preview__scroll") : null;

function openPreview(slug, brand) {
  if (!previewEl) return;
  previewImg.src = `assets/screenshots/${slug}.png`;
  previewImg.alt = brand;
  previewBrand.textContent = brand;
  if (previewScroll) previewScroll.scrollTop = 0;
  previewEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("preview-open");
}
function closePreview() {
  if (!previewEl) return;
  previewEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("preview-open");
  // clear src after close so we don't hold the big image
  setTimeout(() => { previewImg.src = ""; }, 250);
}
if (previewClose) previewClose.addEventListener("click", closePreview);
if (previewEl) {
  previewEl.addEventListener("click", (e) => {
    if (e.target === previewEl) closePreview();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && previewEl?.getAttribute("aria-hidden") === "false") closePreview();
});

// -------- Case studies --------------------------------------------------------
(function renderCases() {
  const cases = document.getElementById("casesList");
  if (!cases) return;

  cases.innerHTML = PAGES.map(p => `
    <article class="case">
      <div class="case__thumb">
        <img src="assets/screenshots/${p.slug}.png" alt="${p.brand}" loading="lazy" />
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

// -------- Smooth scroll -------------------------------------------------------
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
