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
      items: [
        {
          type: "doc",
          id: "comercial/ingreso-modulo",
          label: "¿Cómo ingreso al módulo Comercial?",
        },
        {
          type: "doc",
          id: "comercial/gestion-clientes",
          label: "¿Cómo creo o gestiono un cliente?",
        },
        {
          type: "doc",
          id: "comercial/asociar-tarifario",
          label: "¿Cómo asocio un tarifario a un cliente?",
        },
      ],
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
                {
                  type: "doc",
                  id: "paquetes/paquetes-crear-configuracion",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "paquetes/paquetes-crear-paquete",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "paquetes/paquetes-editar",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "paquetes/paquetes-eliminar",
                  className: "sidebar-hidden",
                },
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
            {
              type: "category",
              label: "Páginas internas (oculto)",
              className: "sidebar-hidden",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "reservas-online/general/filtros-y-resultados",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "reservas-online/general/ver-tarifas-y-detalle",
                  className: "sidebar-hidden",
                },
                {
                  type: "doc",
                  id: "reservas-online/general/carrito-y-servicios",
                  className: "sidebar-hidden",
                },
              ],
            },
          ],
        },

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
        // -------------------------
        // Páginas ocultas: Alojamiento / Traslados / Excursiones / Asistencias
        // -------------------------
        {
          type: "doc",
          id: "reservas-online/alojamiento/alojamiento",
          className: "sidebar-hidden",
        },
        {
          type: "doc",
          id: "reservas-online/traslados/traslados",
          className: "sidebar-hidden",
        },
        {
          type: "doc",
          id: "reservas-online/excursiones/excursiones",
          className: "sidebar-hidden",
        },
        {
          type: "doc",
          id: "reservas-online/asistencias/asistencias",
          className: "sidebar-hidden",
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
        // ========================
        // Submódulos anidados
        // ========================

        {
          type: "category",
          label: "Tesorería",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Caja",
              items: [
                "administracion/tesoreria/caja/arqueo",
                "administracion/tesoreria/caja/movimiento-de-fondo",
                "administracion/tesoreria/caja/orden-de-pago",
                "administracion/tesoreria/caja/orden-de-servicio",
              ],
            },
            {
              type: "category",
              label: "Cobranzas",
              items: [
                "administracion/tesoreria/cobranzas/cobranza",
                "administracion/tesoreria/cobranzas/listado-recibos",
                "administracion/tesoreria/cobranzas/reporte-anticipos",
                "administracion/tesoreria/cobranzas/venta-por-cliente",
              ],
            },
            {
              type: "category",
              label: "Configuración",
              items: [
                "administracion/tesoreria/configuracion/conceptos-a-afacturar",
                "administracion/tesoreria/configuracion/medios-pago-cobro",
                {
                  type: "category",
                  label: "Formas de pago",
                  items: [
                    "administracion/tesoreria/configuracion/formas de pago/cajas",
                    "administracion/tesoreria/configuracion/formas de pago/chequeras",
                    "administracion/tesoreria/configuracion/formas de pago/cuentas-bancarias",
                    "administracion/tesoreria/configuracion/formas de pago/gastos-y-diferencias",
                    "administracion/tesoreria/configuracion/formas de pago/retenciones",
                    "administracion/tesoreria/configuracion/formas de pago/tarjetas",
                    "administracion/tesoreria/configuracion/formas de pago/valores-a-depositar",
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "category",
          label: "Contabilidad",
          collapsible: true,
          collapsed: true,
          items: [
            "administracion/contabilidad/centro-de-costo",
            "administracion/contabilidad/cierre",
            "administracion/contabilidad/generar-asiento-contable",
            "administracion/contabilidad/plan-de-cuentas",
            "administracion/contabilidad/proyectos",
            "administracion/contabilidad/sicore",
            {
              type: "category",
              label: "Reportes contables",
              items: [
                "administracion/contabilidad/reportes-contables/balance",
                "administracion/contabilidad/reportes-contables/consolidado",
                "administracion/contabilidad/reportes-contables/diferencia-de-cambio-facturacion",
                "administracion/contabilidad/reportes-contables/diferencia-de-cambios",
                "administracion/contabilidad/reportes-contables/libro-diario",
                "administracion/contabilidad/reportes-contables/libro-iva-ventas",
                "administracion/contabilidad/reportes-contables/libro-mayor",
                "administracion/contabilidad/reportes-contables/precepciones",
                "administracion/contabilidad/reportes-contables/provision-de-costo",
                "administracion/contabilidad/reportes-contables/renta-mensual",
                "administracion/contabilidad/reportes-contables/reporte-analitico-cobranzas",
              ],
            },
          ],
        },

        {
          type: "category",
          label: "Cuentas a pagar",
          items: [
            "administracion/cuentas-a-pagar/datos-bancarios-proveedores",
            "administracion/cuentas-a-pagar/ordenes-de-servicio",
            "administracion/cuentas-a-pagar/pagos-a-procesar",
            {
              type: "category",
              label: "Carga factura terceros",
              items: [
                "administracion/cuentas-a-pagar/carga-factura-terceros/asociados-a-reservas",
                "administracion/cuentas-a-pagar/carga-factura-terceros/factura-gastos",
                "administracion/cuentas-a-pagar/carga-factura-terceros/iva-compras",
              ],
            },
          ],
        },

        {
          type: "category",
          label: "Configuración general",
          items: [
            "administracion/configuracion-general/comisiones-tolerancia",
            "administracion/configuracion-general/param-apartado-impositivo",
            "administracion/configuracion-general/param-asientos-contables",
            "administracion/configuracion-general/param-bsp",
            "administracion/configuracion-general/param-iva",
            "administracion/configuracion-general/param-otros-impuestos",
            "administracion/configuracion-general/politica-cobranza",
          ],
        },

        {
          type: "category",
          label: "Facturación",
          items: [
            "administracion/facturacion/consulta-comprobantes-emitidos",
            "administracion/facturacion/listado-facturacion",
            "administracion/facturacion/nota-credito-manual",
            "administracion/facturacion/solicitud-factura",
          ],
        },

        {
          type: "category",
          label: "Reportes",
          items: [
            "administracion/reportes/aging-clientes",
            "administracion/reportes/aging-proveedores",
            "administracion/reportes/bitacora-files",
          ],
        },

        // {
        //   type: "category",
        //   label: "RRHH",
        //   items: [
        //     "administracion/rrhh/asignacion-esquema-comisiones",
        //     "administracion/rrhh/comisiones",
        //     "administracion/rrhh/esquema-comisiones",
        //     "administracion/rrhh/listado-liquidaciones",
        //     "administracion/rrhh/reporte-comisiones-liquidadas",
        //   ],
        // },

        {
          type: "category",
          label: "Requerimiento de pago",
          items: [
            "administracion/requerimiento-de-pago/listado",
            {
              type: "category",
              label: "Reportes RP",
              items: [
                "administracion/requerimiento-de-pago/reportes-rp/seguimiento-anticipos",
              ],
            },
          ],
        },

        {
          type: "category",
          label: "BSP",
          items: [
            "administracion/bsp/conciliacion",
            "administracion/bsp/reclamos",
            "administracion/bsp/resporte-ajustes",
          ],
        },

        // ========================
        // Archivos raíz (ordenados al final)
        // ========================

        // "administracion/medios-formas-pago",
        // "administracion/reporte-tesoreria",
        // "administracion/cobranzas",
        // "administracion/movimiento-de-fondos",
        // "administracion/cuentas-a-pagar",
        // "administracion/carga-facturas-terceros",
        // "administracion/reservas-admin",
        // "administracion/contabilidad",
        // "administracion/facturacion",
        // "administracion/requerimiento-de-pago",
        // "administracion/reportes",
        // "administracion/rrhh",
        // "administracion/configuracion-general",
        // "administracion/tesoreria",
        // "administracion/bsp",
      ],
    },
  ],
};

module.exports = sidebars;
