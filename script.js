function waUrl(message = "Hi The Sweet Spot! I'd like to place an order.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

let gallery = [];
let currentIndex = 0;

function renderProducts() {
  const wrap = document.getElementById("categoryGrid");
  gallery = [];
  let globalIndex = 0;

  wrap.innerHTML = SITE.bakeCategories.map((cat, catIndex) => {
    const cards = cat.products.map((p, productIndex) => {
      const idx = globalIndex++;
      gallery.push({image:p.image, name:p.name});
      return `
        <article class="product-card">
          <div class="product-image" data-gallery-index="${idx}" tabindex="0" role="button" aria-label="Zoom ${p.name}">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
          </div>
          <div class="product-info">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
          </div>
        </article>`;
    }).join("");

    return `
      <section class="category">
        <div class="category-head">
          <h3>${cat.name}</h3>
          <p>${cat.description || ""}</p>
        </div>
        <div class="product-grid">${cards}</div>
      </section>`;
  }).join("");

  document.querySelectorAll(".product-image").forEach(el => {
    el.addEventListener("click", () => openLightbox(Number(el.dataset.galleryIndex)));
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(Number(el.dataset.galleryIndex)); }
    });
  });
}

function openLightbox(index) {
  if (!gallery.length) return;
  currentIndex = index;
  const item = gallery[currentIndex];
  document.getElementById("lightboxImage").src = item.image;
  document.getElementById("lightboxImage").alt = item.name;
  document.getElementById("lightboxCaption").textContent = item.name;
  const box = document.getElementById("lightbox");
  box.classList.add("open");
  box.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const box = document.getElementById("lightbox");
  box.classList.remove("open");
  box.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function moveLightbox(step) {
  currentIndex = (currentIndex + step + gallery.length) % gallery.length;
  openLightbox(currentIndex);
}

function setLink(id, href) {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
}

function init() {
  renderProducts();
  setLink("heroOrder", waUrl());
  setLink("whatsappCard", waUrl());
  setLink("instagramGallery", SITE.instagramUrl);
  setLink("aboutInstagram", SITE.instagramUrl);
  setLink("footerInstagram", SITE.instagramUrl);

  const zomato = document.getElementById("zomatoCard");
  if (SITE.zomatoUrl && !SITE.zomatoUrl.includes("PASTE-YOUR")) {
    zomato.href = SITE.zomatoUrl;
  } else {
    zomato.addEventListener("click", e => { e.preventDefault(); alert("Please add your Zomato URL in data.js."); });
  }

  document.getElementById("phoneText").textContent = SITE.phone1;
  document.getElementById("emailText").textContent = SITE.email;
  setLink("phoneCard", `tel:${SITE.phone1.replace(/\s/g,"")}`);
  setLink("emailCard", `mailto:${SITE.email}`);

  document.getElementById("offerBadge").textContent = SITE.offer.badge;
  document.getElementById("offerTitle").textContent = SITE.offer.title;
  document.getElementById("offerText").textContent = SITE.offer.text;
  document.getElementById("offerButton").textContent = SITE.offer.buttonText;
  setLink("offerButton", waUrl("Hi The Sweet Spot! I'd like to know more about the latest offer."));
  if (!SITE.offer.active) document.getElementById("offers").style.display = "none";
  document.getElementById("year").textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", open); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => moveLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => moveLightbox(1));
  document.getElementById("lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") moveLightbox(-1);
    if (e.key === "ArrowRight") moveLightbox(1);
  });
}
document.addEventListener("DOMContentLoaded", init);
