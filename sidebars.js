// sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Reservas Online",
      link: { type: "doc", id: "reservas-online/index" },
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
            "reservas-online/general/descripcion",
            "reservas-online/general/seleccionar-cliente",
            "reservas-online/general/seleccionar-solapa",
            "reservas-online/general/filtros",
            "reservas-online/general/ver-tarifas",
            "reservas-online/general/detalle.tarifas",
            "reservas-online/general/anadir-al-carrito",
            "reservas-online/general/error-sin-tarifa",
            "reservas-online/general/servicios-tomados",
            "reservas-online/general/ir-a-carrito",
            "reservas-online/general/total-de-servicios",
            "reservas-online/general/agregar-servicio",
            "reservas-online/general/agregar-otro-servicio",
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

        // Asistencias
        // Eventuales
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
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
