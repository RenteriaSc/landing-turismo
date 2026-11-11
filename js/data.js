// data.js — Datos de los 3 emprendimientos. Es el único lugar donde se editan.
// Solo va información confirmada por los dueños. Lo que falta se deja vacío ("" o [])
// y la tarjeta simplemente no lo muestra.
//
// Cómo agregar una foto: guardarla en img/<id>/ (WebP, máximo 300 KB) y añadirla a "fotos":
//   { src: "img/alto-bonito/1.webp", alt: { es: "...", en: "..." }, esReferencia: false }
// Si la foto fue generada con IA, poner esReferencia: true (muestra la etiqueta "Imagen de referencia").
// Opcional: posicion: "center top" para elegir qué parte de la foto se ve cuando se recorta.
// Con 2 o más fotos, la galería muestra flechas para pasar de una a otra.
//
// Mapas: por ahora apuntan al municipio. Cuando llegue el pin exacto, reemplazar mapaEmbed por el
// enlace de Google Maps → Compartir → Insertar un mapa, y mapaLink por el enlace del pin.
//
// safety: 2 o 3 frases cortas sobre el estado de la zona (ES y EN). Si se deja vacío ([]), el bloque no se muestra.

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
    // Estado de la zona después del sismo (bloque "Estado de la zona" / "Safety" de la tarjeta).
    // Confirmado por el dueño (noviembre de 2026).
    safety: {
      es: ["Vía de acceso habilitada", "Finca revisada y en perfecto estado después del sismo", "Zona verificada y segura para recibir visitantes"],
      en: ["Access road open", "Property inspected and in perfect condition after the earthquake", "Area verified and safe to welcome visitors"]
    },
    whatsapp: "573156061113",
    mapaEmbed: "https://maps.google.com/maps?q=Salento%2C%20Quind%C3%ADo%2C%20Colombia&z=13&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=Salento%2C%20Quind%C3%ADo%2C%20Colombia",
    fotos: [
      {
        src: "img/don-elias/1.webp",
        alt: { es: "Casa de la finca con techo de teja, barandas naranjas y banderas de colores", en: "Farmhouse with a tiled roof, orange railings and colorful flags" },
        esReferencia: false
      },
      {
        src: "img/don-elias/2.webp",
        alt: { es: "Don Elías, con sombrero y poncho, sirviendo café junto a costales de café", en: "Don Elías, wearing a hat and poncho, pouring coffee next to coffee sacks" },
        esReferencia: false,
        posicion: "center 20%"
      }
    ]
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
    // Estado de la zona después del sismo (bloque "Estado de la zona" / "Safety" de la tarjeta).
    // Confirmado por el dueño (noviembre de 2026).
    safety: {
      es: ["Vía de acceso habilitada", "Finca revisada y en perfecto estado después del sismo", "Zona verificada y segura para recibir visitantes"],
      en: ["Access road open", "Property inspected and in perfect condition after the earthquake", "Area verified and safe to welcome visitors"]
    },
    whatsapp: "573113619486",
    mapaEmbed: "https://maps.google.com/maps?q=Caicedonia%2C%20Valle%20del%20Cauca%2C%20Colombia&z=13&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=Caicedonia%2C%20Valle%20del%20Cauca%2C%20Colombia",
    fotos: [
      {
        src: "img/la-divisa/1.webp",
        alt: { es: "Entrada de la Finca La Divisa con su letrero de madera, un seto verde y árboles grandes", en: "Entrance to Finca La Divisa with its wooden sign, a green hedge and tall trees" },
        esReferencia: false
      },
      {
        src: "img/la-divisa/2.webp",
        alt: { es: "Terraza techada con mesa de billar, mesa de ping-pong y vista a los cafetales", en: "Covered terrace with a pool table, a ping-pong table and a view of the coffee fields" },
        esReferencia: false
      },
      {
        src: "img/la-divisa/3.webp",
        alt: { es: "Plato servido con limón exprimido y una salsa al lado", en: "A served dish with a squeeze of lime and a dipping sauce" },
        esReferencia: false
      }
    ]
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
    // Estado de la zona después del sismo (bloque "Estado de la zona" / "Safety" de la tarjeta).
    // Confirmado por el dueño (noviembre de 2026).
    safety: {
      es: ["Vía de acceso habilitada", "Finca revisada y en perfecto estado después del sismo", "Zona verificada y segura para recibir visitantes"],
      en: ["Access road open", "Property inspected and in perfect condition after the earthquake", "Area verified and safe to welcome visitors"]
    },
    whatsapp: "573112225937",
    mapaEmbed: "https://maps.google.com/maps?q=Sevilla%2C%20Valle%20del%20Cauca%2C%20Colombia&z=13&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=Sevilla%2C%20Valle%20del%20Cauca%2C%20Colombia",
    fotos: [
      {
        src: "img/alto-bonito/1.webp",
        alt: { es: "Casa blanca de la finca con matas en materas y un arcoíris en el cielo", en: "White farmhouse with potted plants and a rainbow in the sky" },
        esReferencia: false,
        posicion: "center bottom"
      },
      {
        src: "img/alto-bonito/2.webp",
        alt: { es: "Piscina sobre pasto sintético, rodeada de cultivos y faroles", en: "Pool on artificial grass, surrounded by crops and lanterns" },
        esReferencia: false
      }
    ]
  }
];

// Sección "¿Quieres ser parte de la página?": WhatsApp del equipo que recibe a los negocios nuevos.
const JOIN_WHATSAPP_NUMBER = "573229285903";
