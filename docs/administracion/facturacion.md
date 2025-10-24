---
title: Facturación
sidebar_label: Facturación
sidebar_position: 9
---

# Listado de Facturación

**Descripción:** A través de esta opción se accede al **Listado de Facturación**.  
En la barra lateral de navegación, hacer clic en la opción **Facturación**, luego **Listado de Facturación**.

Se despliega la siguiente pantalla, que tiene tres solapas:
- **Reservas files a facturar (1):** se emiten las facturas de cada file o reserva.
- **Facturas manuales solicitadas (2):** se visualizan las solicitudes de facturas, para que el usuario de facturación pueda emitirlas.
- **Notas de crédito (3):** se visualizan todas las facturas realizadas que necesitan notas de crédito.

---

## Reservas files a facturar — Filtros

Se puede hacer la búsqueda por los siguientes filtros:
- **Reserva**
- **Unidad de negocio**
- **Área de negocio**
- **Cliente**
- **Fecha de alta**
- **Fecha de In**
- **Fecha de emisión:** este campo sólo se completa para la búsqueda de tickets aéreos, o si la factura ya fue emitida.
- **Ver sólo facturados**
- **Saldo menor a**

Botones:
- **Cancelar (1)**
- **Filtrar y Exportar (2)** → XLS
- **Filtrar (3)**

---

## Reservas files a facturar — Resultados y Grilla

- Selector de cantidad por página (10 / 25 / 50 / 100).
- Campo **Buscar** (texto libre).

**Columnas de la grilla:**
- **Reserva**
- **Liquidación**
- **Cliente**
- **Facturar A:** es el nombre de la persona titular de la reserva.
- **Reserva efectuada por:** es el nombre del vendedor que generó la reserva.
- **Fecha Reserva**
- **Fecha In:** es la fecha en que se debería empezar a disfrutar del servicio.
- **Venta**
- **Saldo:** es el monto que debe el cliente.
- **Tipo de factura**
- **Facturar**

### Tipo de factura (automático)
- **Factura tipo A**
- **Factura tipo B**
- **Factura tipo P**
- **Factura tipo T:** para generar este tipo de factura se debe cumplir con las siguientes validaciones: ser un **hotel de Argentina**, que ofrezca **sólo desayuno o sin comida** y ser **extranjero**; de esta manera se le descontará el **IVA Tur**.

**Acciones en grilla:**
- **Facturar (1):** permite emitir **varias facturas** de forma masiva de un mismo cliente (tildando en **Facturar**).
- **Vista Previa (2):** permite visualizar toda la información referida a la factura.

---

## Vista Previa

Deberá tildar cualquier factura y luego presionar el botón **Vista Previa (2)**.  
El sistema mostrará un formulario con los datos de la reserva **ya precargados**:

**Datos de la Reserva**
- **Código de reserva**
- **Reserva efectuada por**
- **Titular de la reserva**
- **Tipo de cambio del día**
- **Moneda de facturación:** es el **único** campo que el usuario podrá modificar.
- **Tipo de factura:** viene dado por la **condición fiscal del cliente** (definida en ABM de cliente en Producto).
- **Tipo de cambio promedio**

**Datos de Facturación**
- **Nro Cliente / Facturar A**
- **Nombre comercial**
- **CUIT**
- **Dirección fiscal**
- **Condición de IVA %:** porcentaje en el que se puede dividir la factura entre varias personas.

**Acciones**
- **Agregar:** permite añadir tantos clientes como se desee para repartir la factura, siempre que la **suma de porcentajes** no supere el **100%**.

**Conceptos (grilla)**
- **Grav 21**
- **Grav 10,5**
- **No computable**
- **Exento**
- **Total antes de Imp**
- **IVA 21**
- **IVA 10,5**
- **Imp País**
- **Perc RG 5463**
- **Perc IIBB Misiones**
- **Importe total**

**Leyenda:** texto opcional visible en la factura.

**Forma de pago** (selector):
- **Contado**
- **Cuenta Corriente**
- **Tarjeta de Crédito**
- **Tarjeta de Crédito + Contado**
- **Transferencia Bancaria**
- **Otra**

**Botones**
- **Facturar (1):** emite la factura.
- **Cerrar (2):** cierra la vista previa.

---

## Facturas manuales solicitadas

**Filtros:**
- **Clientes**
- **Concepto**
- **Solicitante**
- **Fecha de Solicitud**

**Botones:**
- **Cancelar (1)**
- **Filtrar y Exportar (2)** → Excel
- **Filtrar (3)**

**Resultados:**
- Selector de cantidad por página (10 / 25 / 50 / 100).
- Campo **Buscar**.

**Grilla:**
- **Cliente**
- **Título**
- **Moneda**
- **Importe**
- **Fecha Vto**
- **Solicitante**
- **Fecha de Solicitud**
- **Tipo de Factura**
- **Facturar**

**Acciones:**
- **Facturar (1):** emite la factura del cliente seleccionado.
- **Vista Previa (2):** muestra la factura a emitir (puede incluir **Nota de Crédito**).

En la **Vista Previa**:
- **Facturar (1)**
- **Cerrar (2)**

---

## Notas de Crédito

**Filtros:**
- **Número de Factura**
- **Reserva**
- **Clientes**
- **Fecha**
- **Estado de la Solicitud:** **Solicitada / Emitida / Rechazada**

**Botones:**
- **Cancelar (1)**
- **Filtrar y Exportar (2)** → Excel
- **Filtrar (3)**

**Resultados:**
- Selector de cantidad por página (10 / 25 / 50 / 100).
- Campo **Buscar**.

**Grilla:**
- **Estado**
- **Número**
- **Reserva**
- **Liquidación**
- **Fecha**
- **Tipo**
- **Cliente**
- **Facturar A**
- **Moneda**
- **Monto**
- **Motivo**
- **Solicitud**
- **Solicitada por**
- **Factura**
- **Nota de Crédito**

**Acciones sobre factura (columna “Factura”):**
- **Descargar**
- **Imprimir**
- **Visualizar**

Para emitir una **Nota de Crédito**, tildar una **factura emitida** y presionar **Emitir Nota de Crédito**.

---

## Formulario de Solicitud de Factura

**Descripción:** opción para clientes que realizaron una **compra que no es un Servicio Turístico**.  
Ruta: **Facturación → Formulario de Solicitud de Factura**.

**Filtros:**
- **Cliente**
- **Título**
- **Proyecto**
- **Tipo de Factura**
- **Moneda**
- **Fecha de Vencimiento**

**Detalle (grilla a completar):**
- **Concepto**
- **Centro de Costos**
- **Proyecto**
- **Importe**
- **Alícuota Impositiva**
- **Acciones** (eliminar ítems)

**Opciones:**
- **Agregar** (conceptos)
- **Leyenda** (texto opcional visible en la factura)

**Botones:**
- **Guardar (1):** guarda los datos → **Guardado exitosamente**.
- **Cancelar (2)**

**Luego de guardar:** el sistema se posiciona en **Facturas manuales solicitadas** (podrá filtrar y emitir).

---

## Nota de Crédito Manual

**Descripción:** acceso a **Nota de Crédito Manual**.  
Ruta: **Facturación → Nota de Crédito Manual**.

**Filtros:**
- **Cliente**
- **Título**
- **Tipo NC**
- **Tipo de Documento**
- **Moneda**
- **Número de Reserva**
- **Factura Asociada**

---

---

## Consulta de Comprobantes Emitidos

**Descripción:**  
A través de esta opción se accede a la **Consulta de Comprobantes Emitidos**, para visualizar las **facturas asociadas a las reservas**, las **Notas de Crédito** y las **Facturas Manuales**.

**Ruta:**  
En la barra lateral de navegación, hacer clic en **Facturación**, luego **Consulta de Comprobantes Emitidos**.

**Filtros:**
- **Comprobante:** Factura / Nota de Crédito / Nota de Crédito Manual / Proforma
- **Número de Documento**
- **Reserva**
- **Fecha**
- **Cliente**
