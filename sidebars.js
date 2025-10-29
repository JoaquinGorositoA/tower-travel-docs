/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // =========================
    // Intro del manual
    // =========================
    { type: "doc", id: "intro", label: "Introducción" },

    // =========================
    // Comercial
    // =========================
    {
      type: "category",
      label: "Comercial",
      link: { type: "generated-index", title: "Comercial" },
      collapsible: true,
      collapsed: true,
      items: [],
    },

    // =========================
    // Producto
    // =========================
    {
      type: "category",
      label: "Producto",
      link: { type: "generated-index", title: "Producto" },
      collapsible: true,
      collapsed: true,
      items: [
        // -------------------------
        // Asistencias
        // -------------------------
        {
          type: "category",
          label: "Asistencias",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "asistencias/intro",
              label: "¿Qué puedo hacer en Asistencias?",
            },
            {
              type: "doc",
              id: "asistencias/buscar-prestador",
              label: "¿Cómo gestiono mis prestadores?",
            },
            {
              type: "category",
              label: "Acciones internas (oculto)",
              className: "sidebar-hidden",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "asistencias/planes-del-prestador",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "asistencias/editar-prestador",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "asistencias/crear-plan",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "asistencias/editar-plan",
                  className: "sidebar-hidden",
                },
              ],
            },
          ],
        },

        // -------------------------
        // Excursiones
        // -------------------------
        {
          type: "category",
          label: "Excursiones",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "excursiones/excursiones-intro",
              label: "¿Qué puedo hacer en Excursiones?",
            },
            {
              type: "doc",
              id: "excursiones/excursiones-acciones-listado",
              label: "¿Cómo gestiono mis excursiones?",
            },
            {
              type: "category",
              label: "Acciones internas (oculto)",
              className: "sidebar-hidden",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "excursiones/habilitar-prestador",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "excursiones/excursiones-del-prestador",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "excursiones/crear-excursion",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "excursiones/editar-excursion",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "excursiones/eliminar-excursion",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "excursiones/excursiones-agregar-tarifa",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "excursiones/excursiones-editar-prestador",
                  className: "sidebar-hidden",
                },
              ],
            },
          ],
        },

        // -------------------------
        // Guías
        // -------------------------
        {
          type: "category",
          label: "Guías",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "guias/guias-intro",
              label: "¿Qué puedo hacer en Guías?",
            },
            {
              type: "doc",
              id: "guias/guias-acciones-listado",
              label: "¿Cómo gestiono mis guías?",
            },
            {
              type: "category",
              label: "Acciones internas (oculto)",
              className: "sidebar-hidden",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "guias/guias-crear",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "guias/guias-agregar-tarifa",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "guias/guias-editar",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "guias/guias-eliminar",
                  className: "sidebar-hidden",
                },
              ],
            },
          ],
        },

        // -------------------------
        // Hoteles
        // -------------------------
        {
          type: "category",
          label: "Hoteles",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "hoteles/intro",
              label: "¿Qué puedo hacer en Hoteles?",
            },
            {
              type: "doc",
              id: "hoteles/gestion-hoteles",
              label: "¿Cómo gestiono los hoteles?",
            },
            {
              type: "category",
              label: "Acciones internas (oculto)",
              className: "sidebar-hidden",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "hoteles/crear-hotel",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "hoteles/habitaciones",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "hoteles/crear-contrato",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "hoteles/contratos",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "hoteles/agregar-tarifa",
                  className: "sidebar-hidden",
                },
              ],
            },
          ],
        },

        // -------------------------
        // Traslados
        // -------------------------
        {
          type: "category",
          label: "Traslados",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "traslados/traslados-intro",
              label: "¿Qué puedo hacer en Traslados?",
            },
            {
              type: "doc",
              id: "traslados/traslados-acciones-listado",
              label: "¿Cómo gestiono mis traslados?",
            },
            {
              type: "category",
              label: "Acciones internas (oculto)",
              className: "sidebar-hidden",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "traslados/traslados-crear",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "traslados/traslados-agregar-tarifa",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "traslados/traslados-editar",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "traslados/traslados-eliminar",
                  className: "sidebar-hidden",
                },
              ],
            },
          ],
        },

        // -------------------------
        // Paquetes
        // -------------------------
        {
  type: "category",
  label: "Paquetes",
  collapsible: true,
  collapsed: true,
  items: [
    {
      type: "doc",
      id: "paquetes/paquetes-intro",
      label: "¿Qué puedo hacer en Paquetes?",
    },
    {
      type: "doc",
      id: "paquetes/paquetes-acciones-listado",
      label: "¿Cómo gestiono mis paquetes?",
    },
    {
      type: "category",
      label: "Acciones internas (oculto)",
      className: "sidebar-hidden",
      collapsible: true,
      collapsed: true,
      items: [
        { type: "doc", id: "paquetes/paquetes-crear-configuracion", className: "sidebar-hidden" },
        { type: "doc", id: "paquetes/paquetes-crear-paquete", className: "sidebar-hidden" },
        { type: "doc", id: "paquetes/paquetes-editar", className: "sidebar-hidden" },
        { type: "doc", id: "paquetes/paquetes-eliminar", className: "sidebar-hidden" },
      ],
    },
  ],
},

      ],
    },

    // =========================
    // Ventas - Reservas Online
    // =========================
    {
      type: "category",
      label: "Ventas - Reservas Online",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "General",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/general/ingreso-modulo",
            "reservas-online/general/seleccionar-cliente",
            "reservas-online/general/seleccionar-solapa",
            "reservas-online/general/nominacion",
            "reservas-online/general/file",
            "reservas-online/general/menu-usuario",
          ],
        },

        // -------------------------
        // Aéreos
        // -------------------------
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
        // "operaciones/adjuntar-documentos",
        "operaciones/configurar-operativos",
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
