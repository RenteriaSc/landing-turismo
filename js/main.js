// main.js — Pinta las tarjetas de los negocios y cambia el idioma de la página sin recargar.
// Usa "textos" y "whatsappMessages" de i18n.js, y "negocios" de data.js.

const SUPPORTED_LANGUAGES = ["es", "en"];
const LANGUAGE_STORAGE_KEY = "trendtech-language";

let currentLanguage = getInitialLanguage();
// Idioma del mensaje de WhatsApp; es independiente del idioma de la página.
let messageLanguage = "en";

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
  // Botón "Contáctanos": abre WhatsApp del equipo con el mensaje prellenado.
function setupJoinButton() {
  const button = document.getElementById("join-button");
  button.href = `https://wa.me/${JOIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(joinWhatsappMessage)}`;
  button.insertAdjacentHTML("afterbegin", ICONS.whatsapp);
}

document.querySelectorAll(".top-bar .language-switch__button").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function buildWhatsappUrl(phoneNumber) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessages[messageLanguage])}`;
}

// Cambia el idioma del mensaje en todos los enlaces de WhatsApp sin volver a pintar las tarjetas
// (así los mapas no se recargan).
function setMessageLanguage(language) {
  messageLanguage = language;
  document.querySelectorAll("a[data-whatsapp]").forEach((link) => {
    link.href = buildWhatsappUrl(link.dataset.whatsapp);
  });
  document.querySelectorAll(".message-language .language-switch__button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.messageLanguage === messageLanguage));
  });
}

// Galería de fotos que se desliza con el dedo o con las flechas. Sin fotos, muestra un recuadro de espera.
function renderGallery(business) {
  if (business.fotos.length === 0) {
    return `<div class="gallery gallery--empty"><span>${t("photoPending")}</span></div>`;
  }
  const photos = business.fotos.map((photo) => `
    <figure class="gallery__item">
      <img src="${photo.src}" alt="${photo.alt[currentLanguage]}" width="800" height="600" loading="lazy"
        ${photo.posicion ? `style="object-position: ${photo.posicion}"` : ""}>
      ${photo.esReferencia ? `<figcaption class="gallery__label">${t("referenceImage")}</figcaption>` : ""}
    </figure>`).join("");
  if (business.fotos.length === 1) {
    return `<div class="gallery">${photos}</div>`;
  }
  return `
    <div class="gallery-wrap">
      <div class="gallery">${photos}</div>
      <button class="gallery__arrow gallery__arrow--prev" type="button" data-gallery-step="-1" aria-label="${t("previousPhoto")}" disabled>${ICONS.chevronLeft}</button>
      <button class="gallery__arrow gallery__arrow--next" type="button" data-gallery-step="1" aria-label="${t("nextPhoto")}">${ICONS.chevronRight}</button>
    </div>`;
}

// Mueve la galería una foto a la izquierda o a la derecha.
function moveGallery(arrow) {
  const gallery = arrow.closest(".gallery-wrap").querySelector(".gallery");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  gallery.scrollBy({ left: gallery.clientWidth * Number(arrow.dataset.galleryStep), behavior: reduceMotion ? "auto" : "smooth" });
}

// Desactiva la flecha izquierda en la primera foto y la derecha en la última.
function updateGalleryArrows(gallery) {
  const wrap = gallery.closest(".gallery-wrap");
  if (!wrap) {
    return;
  }
  const maxScroll = gallery.scrollWidth - gallery.clientWidth;
  wrap.querySelector(".gallery__arrow--prev").disabled = gallery.scrollLeft <= 1;
  wrap.querySelector(".gallery__arrow--next").disabled = gallery.scrollLeft >= maxScroll - 1;
}

function renderWhatsappButton(business) {
  if (!business.whatsapp) {
    return "";
  }
  return `
    <a class="button button--whatsapp" href="${buildWhatsappUrl(business.whatsapp)}" data-whatsapp="${business.whatsapp}" target="_blank" rel="noopener">
      ${ICONS.whatsapp}<span>${t("whatsappButton")}</span>
    </a>`;
}

// Selector "Idioma del mensaje: EN | ES" que va encima del botón de WhatsApp.
function renderMessageLanguageSwitch(business) {
  if (!business.whatsapp) {
    return "";
  }
  const buttons = [["en", "English"], ["es", "Español"]].map(([language, label]) => `
    <button class="language-switch__button" type="button" data-message-language="${language}"
      aria-pressed="${language === messageLanguage}">${label}</button>`).join("");
  return `
    <div class="message-language">
      <span>${t("messageLanguage")}</span>
      <div class="language-switch" role="group" aria-label="${t("messageLanguage")}">${buttons}</div>
    </div>`;
}

// Bloque "Estado de la zona": recuadro verde suave con los ítems de safety del negocio.
function renderSafety(business) {
  const items = business.safety ? business.safety[currentLanguage] : [];
  if (!items || items.length === 0) {
    return "";
  }
  const list = items.map((item) => `<li>${ICONS.check}<span>${item}</span></li>`).join("");
  return `
    <section class="safety" aria-label="${t("safetyTitle")}">
      <h4 class="safety__title">${ICONS.shield}${t("safetyTitle")}</h4>
      <ul class="safety__list">${list}</ul>
    </section>`;
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
        ${renderSafety(business)}
        <iframe class="business-card__map" src="${business.mapaEmbed}" title="${t("mapTitle")} ${business.nombre}"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        ${renderMessageLanguageSwitch(business)}
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
  pin: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5" fill="currentColor"/></svg>`,
  shield: `<svg class="icon icon--small" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z"/></svg>`,
  chevronLeft: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M15 5l-7 7 7 7"/></svg>`,
  chevronRight: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`,
  check: `<svg class="icon icon--small" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="3" d="M4 12.5l5 5L20 6.5"/></svg>`
};

// Botón "Contáctanos": abre WhatsApp del equipo con el mensaje prellenado.
function setupJoinButton() {
  const button = document.getElementById("join-button");
  button.href = `https://wa.me/${JOIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(joinWhatsappMessage)}`;
  button.insertAdjacentHTML("afterbegin", ICONS.whatsapp);
}

document.querySelectorAll(".top-bar .language-switch__button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

// Las tarjetas se vuelven a pintar al cambiar de idioma, así que escuchamos los clics en la lista.
document.getElementById("business-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-message-language]");
  if (button) {
    setMessageLanguage(button.dataset.messageLanguage);
  }
  const arrow = event.target.closest("[data-gallery-step]");
  if (arrow) {
    moveGallery(arrow);
  }
});

// "scroll" no burbujea, por eso se escucha en fase de captura para todas las galerías.
document.getElementById("business-list").addEventListener("scroll", (event) => {
  if (event.target.classList && event.target.classList.contains("gallery")) {
    updateGalleryArrows(event.target);
  }
}, true);

setupJoinButton();
setLanguage(currentLanguage);
