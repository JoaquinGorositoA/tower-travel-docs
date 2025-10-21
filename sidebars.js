// sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // =========================
    // Intro del manual
    // =========================
    { type: 'doc', id: 'intro', label: 'Introduccion' },

    // =========================
    // Módulo: Reservas Online
    // =========================
    {
      type: "category",
      label: "Reservas Online - Ventas",
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
            "reservas-online/general/seleccionar-solapa",  
            "reservas-online/general/filtros-y-resultados",
            "reservas-online/general/ver-tarifas-y-detalle",
            "reservas-online/general/carrito-y-servicios",
            "reservas-online/general/errores-y-validaciones",
            "reservas-online/general/menu-usuario",
            
          ],
        },

        // Alojamiento
        {
          type: "category",
          label: "Alojamiento",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/alojamiento/solapa-alojamiento",
            "reservas-online/alojamiento/busqueda",
            "reservas-online/alojamiento/listado-hoteles",
          ],
        },

        // Traslados
        {
          type: "category",
          label: "Traslados",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/traslados/filtros",
            "reservas-online/traslados/resultados",
            "reservas-online/traslados/anadir-al-carrito",
          ],
        },

        // Excursiones
        {
          type: "category",
          label: "Excursiones",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/excursiones/filtros",
            "reservas-online/excursiones/resultados",
            "reservas-online/excursiones/anadir-al-carrito",
          ],
        },

        // Asistencias
        {
          type: "category",
          label: "Asistencias",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/asistencias/asistencias",
            "reservas-online/asistencias/resultados-asistencias",
            "reservas-online/asistencias/anadir-asistencia-carrito",
          ],
        },

        // Eventuales
        {
          type: "category",
          label: "Eventuales",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/eventuales/eventuales",
            "reservas-online/eventuales/servicios",
            "reservas-online/eventuales/intro-campos-generales",
            "reservas-online/eventuales/campos-generales",
            "reservas-online/eventuales/campos-personas",
            "reservas-online/eventuales/campos-condiciones",
            "reservas-online/eventuales/codigo-promocional",
            "reservas-online/eventuales/liquidacion",
            "reservas-online/eventuales/calculo-eventuales",
            "reservas-online/eventuales/campos-liquidacion",
          ],
        },

        // Mis Reservas
        {
          type: "category",
          label: "Mis Reservas",
          collapsible: true,
          collapsed: true,
          items: [
            "reservas-online/mis-reservas/busqueda",
            "reservas-online/mis-reservas/busqueda-detalle",
            "reservas-online/mis-reservas/resultados",
            "reservas-online/mis-reservas/resultados-detalle",
            "reservas-online/mis-reservas/resultados-adicional",
            "reservas-online/mis-reservas/confirmacion",
            "reservas-online/mis-reservas/itinerario-servicios",
            "reservas-online/mis-reservas/acciones-factura",
            "reservas-online/mis-reservas/cancelar-solicitud-factura",
            "reservas-online/mis-reservas/impositivo",
            "reservas-online/mis-reservas/totales",
            "reservas-online/mis-reservas/finalizar",
            "reservas-online/mis-reservas/servicios-tomados",
            "reservas-online/mis-reservas/asociar-pasajeros",
            "reservas-online/mis-reservas/asociar-pasajeros-confirmar",
            "reservas-online/mis-reservas/servicios-coentarios",
            "reservas-online/mis-reservas/guardar-cotizacion",
            "reservas-online/mis-reservas/generar-itinerario",
            "reservas-online/mis-reservas/guardar-descargar",
            "reservas-online/mis-reservas/pdf-generado",
            "reservas-online/mis-reservas/vaciar-carrito",
            "reservas-online/mis-reservas/nueva-cotizacion",
            "reservas-online/mis-reservas/seleccionar-opcion",
            "reservas-online/mis-reservas/nueva-cotizacion-mismo-cliente",
          ],
        },
      ],
    },

    // =========================
    // Módulo: Aéreos
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


// --- Productos (Hoteles, Asistencias, Excursiones) ---
{
  type: "category",
  label: "Productos",
  link: { type: "generated-index", title: "Productos" }, // opcional
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
        // opcional:
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
      items: [
      ],
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
      items: [
      ],
    },
                {
      type: "category",
      label: "Paquetes",
      link: { type: "doc", id: "paquetes/paquetes-intro" },
      collapsible: true,
      collapsed: true,
      items: [
      ],
    },

 

  ],
},

// --- Operaciones (fuera de Productos) ---
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
  ],
};

module.exports = sidebars;
