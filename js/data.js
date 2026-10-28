// data.js — Datos de los 3 emprendimientos. Es el único lugar donde se editan.
// Solo va información confirmada por los dueños. Lo que falta se deja vacío ("" o [])
// y la tarjeta simplemente no lo muestra.
//
// Cómo agregar una foto: guardarla en img/<id>/ (WebP, máximo 300 KB) y añadirla a "fotos":
//   { src: "img/alto-bonito/1.webp", alt: { es: "...", en: "..." }, esReferencia: false }
// Si la foto fue generada con IA, poner esReferencia: true (muestra la etiqueta "Imagen de referencia").
//
// Mapas: por ahora apuntan al municipio. Cuando llegue el pin exacto, reemplazar mapaEmbed por el
// enlace de Google Maps → Compartir → Insertar un mapa, y mapaLink por el enlace del pin.

const negocios = [
  {
    id: "don-elias",
    nombre: "Finca Don Elías",
    nombreAlterno: "Finca Las Brisas",
    dueno: "Don Elías",
    municipio: "Salento, Quindío",
    tipo: { es: "Tour de café", en: "Coffee tour" },
    descripcion: {
      es: "Finca cafetera familiar y orgánica, a unos 4 km del centro de Salento.",
      en: "Family-run organic coffee farm, about 4 km from downtown Salento."
    },
    servicios: {
      es: ["Tour de café"],
      en: ["Coffee tour"]
    },
    // Pendiente: verificar que el número siga activo.
    whatsapp: "573156061113",
    // Pendiente: confirmar el usuario exacto de Instagram.
    instagram: "",
    mapaEmbed: "https://maps.google.com/maps?q=Salento%2C%20Quind%C3%ADo%2C%20Colombia&z=13&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=Salento%2C%20Quind%C3%ADo%2C%20Colombia",
    fotos: []
  },
  {
    id: "la-divisa",
    nombre: "Finca La Divisa",
    nombreAlterno: "",
    dueno: "Javier y Ana",
    municipio: "Caicedonia, Valle del Cauca",
    tipo: { es: "Tour de café orgánico y camping", en: "Organic coffee tour & camping" },
    descripcion: {
      es: "Finca de café orgánico a las afueras de Caicedonia, con tour diario y zona de camping.",
      en: "Organic coffee farm on the outskirts of Caicedonia, with a daily tour and a camping area."
    },
    servicios: {
      es: ["Tour de café orgánico, todos los días a las 11 a. m. (en español)", "Camping"],
      en: ["Organic coffee tour, daily at 11 a.m. (in Spanish)", "Camping"]
    },
    // Pendiente: número de WhatsApp y redes sociales.
    whatsapp: "",
    instagram: "",
    mapaEmbed: "https://maps.google.com/maps?q=Caicedonia%2C%20Valle%20del%20Cauca%2C%20Colombia&z=13&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=Caicedonia%2C%20Valle%20del%20Cauca%2C%20Colombia",
    fotos: []
  },
  {
    id: "alto-bonito",
    nombre: "Finca Alto Bonito",
    nombreAlterno: "",
    dueno: "Henuar Mauricio Rentería",
    municipio: "Sevilla, Valle del Cauca",
    tipo: { es: "Alojamiento", en: "Accommodation" },
    descripcion: {
      es: "Alojamiento en finca en Sevilla, Valle del Cauca.",
      en: "Farm stay in Sevilla, Valle del Cauca."
    },
    servicios: {
      es: ["Alojamiento"],
      en: ["Accommodation"]
    },
    whatsapp: "573112225937",
    instagram: "",
    mapaEmbed: "https://maps.google.com/maps?q=Sevilla%2C%20Valle%20del%20Cauca%2C%20Colombia&z=13&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=Sevilla%2C%20Valle%20del%20Cauca%2C%20Colombia",
    fotos: []
  }
];
