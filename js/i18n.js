// i18n.js — Textos fijos de la página en español (es) e inglés (en).
// En el HTML, cada elemento con data-i18n="clave" toma el texto de esa clave.

const textos = {
  es: {
    impactTitle: "¿Por qué existe esta página?",
    impactText: "El terremoto del 10 de agosto de 2026 golpeó el Eje Cafetero. Muchas familias que viven del turismo se quedaron sin visitantes. Reservar directo con ellas las ayuda a salir adelante.",
    impactStat1Number: "238.000+",
    impactStat1Label: "viviendas destruidas o dañadas",
    // TODO: confirmar esta cifra con el reporte de la UNGRD (venía de France 24).
    impactStat2Number: "314.000",
    impactStat2Label: "personas damnificadas en el Valle del Cauca",
    impactStat3Number: "750+",
    impactStat3Label: "vías, puentes y acueductos afectados",
    impactSource: "Fuente: UNGRD, 10 de septiembre de 2026",

    heroEyebrow: "Eje Cafetero, Colombia",
    heroTitle: "Visita la región cafetera de Colombia — reserva directo con familias locales",
    heroSubtitle: "Tours de café y alojamiento en Salento, Caicedonia y Sevilla. Escríbeles por WhatsApp, sin intermediarios.",
    heroButton: "Ver emprendimientos",

    stepsTitle: "Cómo funciona",
    step1: "Elige un lugar",
    step2: "Mira fotos y ubicación",
    step3: "Escríbele por WhatsApp",

    businessesTitle: "Emprendimientos",
    businessesLead: "Familias que siguen recibiendo visitantes después del terremoto.",
    hostedBy: "Te recibe",
    trustDirect: "Contacto directo con la familia",
    trustNoMiddlemen: "Sin intermediarios",
    whatsappButton: "Escribir por WhatsApp",
    messageLanguage: "Idioma del mensaje:",
    directionsButton: "Cómo llegar",
    mapTitle: "Mapa de",
    photoPending: "Fotos próximamente",
    referenceImage: "Imagen de referencia",
    previousPhoto: "Foto anterior",
    nextPhoto: "Foto siguiente",
    safetyTitle: "Estado de la zona",

    joinTitle: "¿Quieres que tu negocio sea parte de la página?",
    joinText: "Ponte en contacto con nosotros por WhatsApp. Es gratis y te conecta directo con turistas extranjeros.",
    joinButton: "Contáctanos por WhatsApp",


    footerTeam: "Equipo: Sebastian Renteria Cruz, Michael Esteban Arciniegas Silva, Adrian Fernando Solano Estrada, Evans Jose Solís Muñoz, Duvia Daniela Giraldo Raigoza",
    footerCourse: "Universidad EAN · Trend + Tech · 2026"
  },

  en: {
    impactTitle: "Why does this page exist?",
    impactText: "The August 10, 2026 earthquake hit Colombia's Coffee Region. Many families who live from tourism lost their visitors. Booking directly with them helps them get back on their feet.",
    impactStat1Number: "238,000+",
    impactStat1Label: "homes destroyed or damaged",
    impactStat2Number: "314,000",
    impactStat2Label: "people affected in Valle del Cauca",
    impactStat3Number: "750+",
    impactStat3Label: "roads, bridges and water systems affected",
    impactSource: "Source: UNGRD, September 10, 2026",

    heroEyebrow: "Coffee Region, Colombia",
    heroTitle: "Visit Colombia's Coffee Region — book directly with local families",
    heroSubtitle: "Coffee tours and farm stays in Salento, Caicedonia and Sevilla. Message them on WhatsApp, no middlemen.",
    heroButton: "See places",

    stepsTitle: "How it works",
    step1: "Pick a place",
    step2: "See photos and location",
    step3: "Message them on WhatsApp",

    businessesTitle: "Places",
    businessesLead: "Local families still welcoming visitors after the earthquake.",
    hostedBy: "Hosted by",
    trustDirect: "Book directly with the family",
    trustNoMiddlemen: "No middlemen",
    whatsappButton: "Message on WhatsApp",
    messageLanguage: "Message language:",
    directionsButton: "Get directions",
    mapTitle: "Map of",
    photoPending: "Photos coming soon",
    referenceImage: "Reference image",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    safetyTitle: "Safety",

    joinTitle: "Want your business to be part of this page?",
    joinText: "Get in touch with us on WhatsApp. It's free and connects you directly with international travelers.",
    joinButton: "Contact us on WhatsApp",


    footerTeam: "Team: Sebastian Renteria Cruz, Michael Esteban Arciniegas Silva, Adrian Fernando Solano Estrada, Evans Jose Solís Muñoz, Duvia Daniela Giraldo Raigoza",
    footerCourse: "Universidad EAN · Trend + Tech · 2026"
  }
};

// Mensaje que llega prellenado al WhatsApp del dueño. El visitante elige el idioma en cada tarjeta;
// por defecto va en inglés, como pide la guía.
const whatsappMessages = {
  en: "Hi! I found you on Trendtech and I'd like more information.",
  es: "¡Hola! Los encontré en Trendtech y me gustaría recibir más información."
};

// Mensaje prellenado del botón "Contáctanos" (lo recibe el equipo; va en español porque escriben los dueños).
const joinWhatsappMessage = "¡Hola! Estoy interesado en que mi establecimiento aparezca en la página de Trendtech. ¿Me pueden dar más información?";
