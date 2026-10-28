# Trendtech

Landing page bilingüe (español / inglés) que conecta a turistas extranjeros por WhatsApp con 3 emprendimientos turísticos del Eje Cafetero afectados por el terremoto del 10 de agosto de 2026.

**Página pública:** https://renteriasc.github.io/landing-turismo/

## Problema que resuelve

Los pequeños emprendedores turísticos de Salento (Quindío), Caicedonia y Sevilla (Valle del Cauca) perdieron gran parte de sus visitantes tras el sismo. Solo se promocionan en español, por redes personales o voz a voz, y el turista extranjero termina reservando con intermediarios que se quedan con buena parte de la ganancia.

Esta página muestra en pocos segundos, en inglés y en español, qué ofrece cada negocio (fotos, servicios y ubicación) y tiene un botón que abre WhatsApp directo con el dueño, sin intermediarios.

## Tecnologías

- HTML5 semántico
- CSS propio (Flexbox y Grid), mobile-first
- JavaScript puro para el cambio de idioma y las tarjetas
- Google Maps insertado (iframe, sin clave de API)
- Enlaces `wa.me` de WhatsApp
- GitHub Pages para publicar

## Cómo verlo localmente

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en cualquier navegador.

No hace falta instalar nada ni levantar un servidor.

## Estructura de carpetas

```
landing-turismo/
├── index.html        ← la página completa
├── css/
│   └── styles.css    ← estilos y paleta de colores
├── js/
│   ├── data.js       ← datos de los 3 negocios (ES y EN)
│   ├── i18n.js       ← textos fijos de la página en ES y EN
│   └── main.js       ← pinta las tarjetas y cambia el idioma
├── img/
│   ├── hero.svg      ← ilustración de la portada
│   ├── don-elias/
│   ├── la-divisa/
│   └── alto-bonito/
└── README.md
```

Para cambiar los datos de un negocio solo se edita `js/data.js`.

## Integrantes del equipo

- Sebastian Renteria Cruz
- [Integrantes]

[Universidad] · [Materia] · 2026
