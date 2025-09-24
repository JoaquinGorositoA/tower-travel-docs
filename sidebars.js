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
            "reservas-online/eventuales/calculo-eventuales",
            "reservas-online/eventuales/campos-liquidacion",
          ],
        },
        {
          type: "category",
          label: "Mis Reservas",
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
  ],
};

module.exports = sidebars;
