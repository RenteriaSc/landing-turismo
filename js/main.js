// main.js — Pinta las tarjetas de los negocios y cambia el idioma de la página sin recargar.
// Usa "textos" y "whatsappMessage" de i18n.js, y "negocios" de data.js.

const SUPPORTED_LANGUAGES = ["es", "en"];
const LANGUAGE_STORAGE_KEY = "trendtech-language";

let currentLanguage = getInitialLanguage();

// Idioma guardado por el visitante; si no hay, el del navegador; si no es español, inglés.
function getInitialLanguage() {
  let savedLanguage = null;
  try {
    savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (error) {
    // Algunos navegadores bloquean localStorage (modo privado); seguimos sin él.
  }
  if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }
  return navigator.language.startsWith("es") ? "es" : "en";
}

function t(key) {
  return textos[currentLanguage][key];
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    // Ver getInitialLanguage.
  }
  translateStaticTexts();
  updateLanguageButtons();
  renderBusinessCards();
}

function translateStaticTexts() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
}

function updateLanguageButtons() {
  document.querySelectorAll(".language-switch__button").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function buildWhatsappUrl(phoneNumber) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

function buildInstagramUrl(username) {
  return `https://www.instagram.com/${username}/`;
}

// Galería de fotos que se desliza con el dedo. Sin fotos, muestra un recuadro de espera.
function renderGallery(business) {
  if (business.fotos.length === 0) {
    return `<div class="gallery gallery--empty"><span>${t("photoPending")}</span></div>`;
  }
  const photos = business.fotos.map((photo) => `
    <figure class="gallery__item">
      <img src="${photo.src}" alt="${photo.alt[currentLanguage]}" width="800" height="600" loading="lazy">
      ${photo.esReferencia ? `<figcaption class="gallery__label">${t("referenceImage")}</figcaption>` : ""}
    </figure>`).join("");
  return `<div class="gallery">${photos}</div>`;
}

// Línea "Para más información" con los íconos de las redes que el negocio tiene activas.
function renderSocialLinks(business) {
  const links = [];
  if (business.whatsapp) {
    links.push(`<a class="social-link" href="${buildWhatsappUrl(business.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>`);
  }
  if (business.instagram) {
    links.push(`<a class="social-link" href="${buildInstagramUrl(business.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>`);
  }
  if (links.length === 0) {
    return `<p class="business-card__more-info">${t("contactPending")}</p>`;
  }
  return `<div class="business-card__more-info"><span>${t("moreInfo")}</span>${links.join("")}</div>`;
}

function renderWhatsappButton(business) {
  if (!business.whatsapp) {
    return "";
  }
  return `
    <a class="button button--whatsapp" href="${buildWhatsappUrl(business.whatsapp)}" target="_blank" rel="noopener">
      ${ICONS.whatsapp}<span>${t("whatsappButton")}</span>
    </a>`;
}

function renderBusinessCard(business) {
  const alternateName = business.nombreAlterno ? ` <span class="business-card__alt-name">(${business.nombreAlterno})</span>` : "";
  const services = business.servicios[currentLanguage].map((service) => `<li>${service}</li>`).join("");

  return `
    <article class="business-card">
      ${renderGallery(business)}
      <div class="business-card__body">
        <p class="business-card__type">${business.tipo[currentLanguage]} · ${business.municipio}</p>
        <h3 class="business-card__title">${business.nombre}${alternateName}</h3>
        <p class="business-card__owner">${t("hostedBy")}: ${business.dueno}</p>
        <p class="business-card__description">${business.descripcion[currentLanguage]}</p>
        <ul class="business-card__services">${services}</ul>
        <ul class="business-card__trust">
          <li>${ICONS.check}${t("trustDirect")}</li>
          <li>${ICONS.check}${t("trustNoMiddlemen")}</li>
        </ul>
        ${renderSocialLinks(business)}
        <iframe class="business-card__map" src="${business.mapaEmbed}" title="${t("mapTitle")} ${business.nombre}"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="business-card__actions">
          ${renderWhatsappButton(business)}
          <a class="button button--secondary" href="${business.mapaLink}" target="_blank" rel="noopener">
            ${ICONS.pin}<span>${t("directionsButton")}</span>
          </a>
        </div>
      </div>
    </article>`;
}

function renderBusinessCards() {
  const list = document.getElementById("business-list");
  list.innerHTML = negocios.map(renderBusinessCard).join("");
}

const ICONS = {
  whatsapp: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.5-.3z"/></svg>`,
  instagram: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>`,
  pin: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5" fill="currentColor"/></svg>`,
  check: `<svg class="icon icon--small" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="3" d="M4 12.5l5 5L20 6.5"/></svg>`
};

document.querySelectorAll(".language-switch__button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(currentLanguage);
