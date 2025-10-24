// sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // =========================
    // Intro del manual
    // =========================
    { type: "doc", id: "intro", label: "Introduccion" },

    // =========================
    // Comercial (nuevo)
    // =========================
    {
      type: "category",
      label: "Comercial",
      link: { type: "generated-index", title: "Comercial" }, // índice generado
      collapsible: true,
      collapsed: true,
      items: [
        // Dejá vacío por ahora o agregá docs cuando los tengas
      ],
    },

    // =========================
    // Productos
    // =========================
    {
      type: "category",
      label: "Producto",
      link: { type: "generated-index", title: "Producto" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Asistencias",
          collapsible: true,
          collapsed: true,
          items: [
            "asistencias/intro",
            "asistencias/buscar-prestador",
            "asistencias/acciones-listado",
            "asistencias/planes-del-prestador",
            "asistencias/editar-prestador",
            "asistencias/crear-plan",
            "asistencias/editar-plan",
            "asistencias/eliminar-plan",
          ],
        },
        {
          type: "category",
          label: "Excursiones",
          link: { type: "doc", id: "excursiones/excursiones-intro" },
          collapsible: true,
          collapsed: true,
          items: [
            "excursiones/excursiones-acciones-listado",
            "excursiones/excursiones-del-prestador",
            "excursiones/crear-excursion",
            "excursiones/editar-excursion",
            "excursiones/eliminar-excursion",
            "excursiones/excursiones-agregar-tarifa",
            "excursiones/excursiones-editar-prestador",
          ],
        },
        {
          type: "category",
          label: "Guias",
          link: { type: "doc", id: "guias/guias-intro" },
          collapsible: true,
          collapsed: true,
          items: [],
        },
        {
          type: "category",
          label: "Hoteles",
          collapsible: true,
          collapsed: true,
          items: [
            "hoteles/intro",
            "hoteles/crear-hotel",
            "hoteles/crear-contrato",
            "hoteles/agregar-tarifa",
            "hoteles/habitaciones",
            "hoteles/contratos",
            "hoteles/gestion-hoteles",
          ],
        },
        {
          type: "category",
          label: "Traslados",
          link: { type: "doc", id: "traslados/traslados-intro" },
          collapsible: true,
          collapsed: true,
          items: [],
        },
        {
          type: "category",
          label: "Paquetes",
          link: { type: "doc", id: "paquetes/paquetes-intro" },
          collapsible: true,
          collapsed: true,
          items: [],
        },
      ],
    },

    // =========================
    // Reservas Online - Ventas
    // =========================
    {
      type: "category",
      label: "Ventas - Reservas Online",
      collapsible: true,
      collapsed: true,
      items: [
        // General
        {
          type: "category",
          label: "General",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/general/ingreso-modulo",
            "reservas-online/general/seleccionar-cliente",
            // Página unificada (antes: seleccionar-solapa)
            "reservas-online/general/seleccionar-solapa",
            "reservas-online/general/nominacion",
            "reservas-online/general/file",
            "reservas-online/general/menu-usuario",
          ],
        },

        // 🔒 Servicios (oculto) — asegura que el panel lateral exista en esas páginas
        {
          type: "category",
          label: "Servicios (oculto)",
          className: "sidebar-hidden",
          collapsible: true,
          collapsed: true,
          items: [
            { type: "doc", id: "reservas-online/alojamiento/alojamiento", className: "sidebar-hidden" },
            { type: "doc", id: "reservas-online/traslados/traslados", className: "sidebar-hidden" },
            { type: "doc", id: "reservas-online/excursiones/excursiones", className: "sidebar-hidden" },
            { type: "doc", id: "reservas-online/asistencias/asistencias", className: "sidebar-hidden" },
          ],
        },

        // (Si más adelante reactivás Eventuales o Mis Reservas, agregalos acá)
      ],
    },

    // =========================
    // Operaciones
    // =========================
    {
      type: "category",
      label: "Operaciones",
      collapsible: true,
      collapsed: true,
      items: [
        "operaciones/intro",
        "operaciones/gestionar-reservas",
        "operaciones/enviar-mails",
        "operaciones/adjuntar-documentos",
        "operaciones/configurar-operativos",
      ],
    },

    // =========================
    // Aéreos
    // =========================
    {
      type: "category",
      label: "Aéreos",
      link: { type: "doc", id: "aereos/intro" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Cupos y Grupos",
          collapsible: true,
          collapsed: true,
          items: [
            "aereos/cupos-y-grupos/busqueda-resultados",
            "aereos/cupos-y-grupos/acciones-y-edicion",
            "aereos/cupos-y-grupos/crear-cupo",
          ],
        },
        {
          type: "category",
          label: "Interface",
          collapsible: true,
          collapsed: true,
          items: ["aereos/interface/interface"],
        },
        {
          type: "category",
          label: "Mis Reservas",
          collapsible: true,
          collapsed: true,
          items: ["aereos/mis-reservas/mis-reservas"],
        },
        {
          type: "category",
          label: "Voideado / Desestimado",
          collapsible: true,
          collapsed: true,
          items: ["aereos/voideado-desestimado/voideado-desestimado"],
        },
      ],
    },

    // =========================
    // Administración
    // =========================
    {
      type: "category",
      label: "Administración",
      collapsible: true,
      collapsed: true,
      items: [
        "administracion/medios-formas-pago",
        "administracion/reporte-tesoreria",
        "administracion/cobranzas",
        "administracion/movimiento-de-fondos",
        "administracion/cuentas-a-pagar",
        "administracion/carga-facturas-terceros",
        "administracion/reservas-admin",
        "administracion/contabilidad",
        "administracion/facturacion",
        "administracion/requerimiento-de-pago",
        "administracion/reportes",
        "administracion/rrhh",
        "administracion/configuracion-general",
      ],
    },
  ],
};

module.exports = sidebars;
