// scripts/make-admin-md.mjs
// Crea todos los MD de Administración + carpetas de imágenes (sin números en el nombre).
// Uso:
//   node scripts/make-admin-md.mjs            → crea y SALTA si el archivo ya existe
//   node scripts/make-admin-md.mjs --overwrite → crea y SOBRESCRIBE todos

import { mkdirSync, writeFileSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const base = join(rootDir, "docs", "administracion");
const imgBase = join(rootDir, "static", "img", "administracion");

// ← agregá/ajustá acá los módulos de Administración
const pages = [
  { slug: "medios-formas-pago",      title: "Medios y Formas de Pago" },
  { slug: "reporte-tesoreria",       title: "Reporte Tesorería" },
  { slug: "cobranzas",               title: "Cobranzas" },
  { slug: "movimiento-de-fondos",    title: "Movimiento de Fondos" },
  { slug: "cuentas-a-pagar",         title: "Cuentas a Pagar" },
  { slug: "carga-facturas-terceros", title: "Carga de facturas de terceros" },
  { slug: "reservas-admin",          title: "Reservas" },
  { slug: "contabilidad",            title: "Contabilidad" },
  { slug: "facturacion",             title: "Facturación" },
  { slug: "requerimiento-de-pago",   title: "Requerimiento de Pago" },
  { slug: "reportes",                title: "Reportes" },
  { slug: "rrhh",                    title: "RRHH" },
  { slug: "configuracion-general",   title: "Configuración general" },
];

const overwrite = process.argv.includes("--overwrite");

// Asegurar carpetas base
mkdirSync(base, { recursive: true });
mkdirSync(imgBase, { recursive: true });

pages.forEach((p, i) => {
  const md = `---
title: ${p.title}
sidebar_label: ${p.title}
sidebar_position: ${i + 1}
---

# ${p.title}
**Objetivo:** (resumen en una línea)

> 🧭 **Acceso:** Menú → **Administración** → **${p.title}**

---

## 🚀 Flujo rápido
1) …
2) …
3) …

---

## 🔎 Búsqueda / Filtros
Descripción breve.
<!-- ![Búsqueda](/img/administracion/${p.slug}/01-filtros.png) -->

---

## 📋 Resultados
Campos y acciones.
<!-- ![Resultados](/img/administracion/${p.slug}/02-resultados.png) -->

---

## 🧾 Detalle
Datos + acciones.
<!-- ![Detalle](/img/administracion/${p.slug}/03-detalle.png) -->

---

## ✉️ Envío / Descarga (si aplica)
Acciones/mensajes.
<!-- ![Envío](/img/administracion/${p.slug}/04-envio.png) -->

---

## ✅ Validaciones habituales
- …

## ⚠️ Errores frecuentes
- …
`;

  const filePath = join(base, `${p.slug}.md`);

  try {
    writeFileSync(filePath, md, { flag: overwrite ? "w" : "wx" });
    console.log(overwrite ? "↻ sobrescrito:" : "✔ creado:", filePath);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log("↷ salteado (ya existe):", filePath);
    } else {
      throw err;
    }
  }

  // Carpeta de imágenes por módulo
  mkdirSync(join(imgBase, p.slug), { recursive: true });
});

console.log("\nListo ✅  Exportá las capturas a: static/img/administracion/<slug>/ y completá el contenido en cada MD.");
