---
title: Carga de Facturas de Terceros
sidebar_label: Carga de facturas de terceros
sidebar_position: 6
---

# Carga de Facturas de Terceros

## Asociados a Reservas

**Descripción:** A través de esta opción se podrá visualizar todos los servicios que estén asociados a una reserva.  
En la barra lateral de navegación: **Cuentas a Pagar → Carga Factura de Terceros → Asociados a Reservas**.

Se mostrará un formulario con campos para filtrar:
- Proveedor
- Fecha factura desde
- Fecha factura hasta
- Fecha Carga
- Número de Factura
- Proyecto

<!-- ![Asociados a Reservas - Filtros](/img/administracion/carga-facturas-terceros/01.png) -->

---

Luego se visualizará un botón **Filtrar** (1).  
Se mostrarán los resultados con selector de cantidad por página:
- 10 registros
- 25 registros
- 50 registros
- 100 registros

Además, hay un campo **Buscar** (arriba a la derecha) para filtrar en la grilla por texto libre (por ejemplo, un nombre o un valor de alguna columna).

<!-- ![Asociados a Reservas - Paginación y búsqueda](/img/administracion/carga-facturas-terceros/02.png) -->

---

La grilla mostrará:
- Proveedor
- Número de Factura
- Fecha de Factura
- Fecha Contable
- Fecha de Vencimiento
- Moneda
- Cotización
- IVA
- Total
- Total Otros Impuestos
- Total Final
- Acciones

En **Acciones** se puede:
- **Detalles**: ver proveedor, datos de la factura, **Conceptos** y **Otros Impuestos**.

<!-- ![Asociados a Reservas - Grilla](/img/administracion/carga-facturas-terceros/03.png) -->

---

En **Acciones** también aparece un ícono para **Borrar** (1):  
se abre un formulario con la información general de la factura a terceros, y al final el botón **Borrar**.

<!-- ![Asociados a Reservas - Borrar](/img/administracion/carga-facturas-terceros/04.png) -->

---

Podés hacer clic en **Agregar Factura** y buscar por:
- Proveedor
- Moneda
- Tipo
- Número
- Buscar

Luego hacé clic en **Buscar y seleccionar** (1).  
Los resultados permiten elegir:
- 10 registros
- 25 registros
- 50 registros
- 100 registros

El campo **Buscar** (derecha) filtra en la grilla por texto libre.

<!-- ![Asociados a Reservas - Agregar Factura / Buscar y seleccionar](/img/administracion/carga-facturas-terceros/05.png) -->

---

La grilla de selección incluye:
- Monto
- Nombre del Servicio
- Nro de reserva / Titular
- Fecha In
- Total Costo

Podés tildar (check) los servicios que el proveedor **facturará** y ver el **total** de los seleccionados en la moneda en la que se realizó la cotización.

> Nota: el proveedor puede cotizar en una moneda distinta a la de la factura que enviará.

<!-- ![Asociados a Reservas - Selección de servicios](/img/administracion/carga-facturas-terceros/06.png) -->

---

Completá los **Datos de Facturación**, **Conceptos**, **Otros Impuestos** y, al final, **Observaciones**.  
Hacé clic en **Guardar** (1). El sistema mostrará **Guardado exitosamente**.

<!-- ![Asociados a Reservas - Guardar](/img/administracion/carga-facturas-terceros/07.png) -->

---

## Factura de Gastos

**Descripción:** A través de esta opción se podrán cargar las **facturas de gastos**.  
Ruta: **Cuentas a Pagar → Carga Facturas de Terceros → Factura de Gastos**.

Filtros disponibles:
- Proveedor
- Fecha factura desde
- Fecha factura hasta
- Fecha Carga
- Número de Factura
- Proyecto

<!-- ![Factura de Gastos - Filtros](/img/administracion/carga-facturas-terceros/08.png) -->

---

Al presionar **Filtrar** (1):
- Selector de cantidad por página: 10 / 25 / 50 / 100
- Campo **Buscar** (derecha): filtra por texto libre sobre la grilla

<!-- ![Factura de Gastos - Paginación y búsqueda](/img/administracion/carga-facturas-terceros/09.png) -->

---

Grilla con:
- Proveedor
- Número de Factura
- Fecha de Factura
- Fecha Contable
- Fecha de Vencimiento
- Moneda
- Cotización
- IVA
- Total
- Total Otros Impuestos
- Total Final
- Acciones

En **Acciones**:
- **Eliminar**: borra el registro y muestra **Eliminado exitosamente**.
- **Detalles**: abre un formulario con datos generales y un botón **Volver** para regresar.

<!-- ![Factura de Gastos - Grilla y Acciones](/img/administracion/carga-facturas-terceros/10.png) -->

---

**Agregar Factura**: completá los **Datos de la Factura de Gastos**.  
Verás dos botones:
- **Guardar** (1): muestra **Guardado Exitosamente**
- **Cancelar** (2): desestima la acción

<!-- ![Factura de Gastos - Agregar, Guardar/Cancelar](/img/administracion/carga-facturas-terceros/11.png) -->

---

## IVA Compras

**Descripción:** Acceso al **IVA Compras**.  
Ruta: **Cuentas a Pagar → Carga Facturas de Terceros → IVA Compras**.

Filtros:
- Proveedor
- Número de Comprobante
- Número de Reserva
- Fecha de Factura
- Fecha de Carga
- Fecha Contable

Botones:
- **Filtrar** (1): muestra datos según filtros
- **Filtrar y Exportar** (2): además exporta a **.csv**
- **Cancelar** (3)

Selector por página: 10 / 25 / 50 / 100  
Campo **Buscar** (derecha): filtra por texto libre.

La grilla muestra:
- Proveedor
- CUIT
- T. Doc
- Tipo
- Número
- Fecha de Factura
- Fecha Contable
- Moneda de Factura

<!-- ![IVA Compras](/img/administracion/carga-facturas-terceros/12.png) -->

---

## Pagos a Procesar (Acceso desde Carga de Facturas)

**Descripción:** Acceso a **Pagos a Procesar / Generar Orden de Servicio**.  
Ruta: **Cuentas a Pagar → Carga Factura de Terceros → Pagos a Procesar**.

Solapas:
- **Servicios en Reserva**
- **Facturas de terceros Gastos**

### Servicios en Reserva — filtros
- Número de Reserva
- Proveedor
- Fecha In desde / hasta
- Cadena Hotelera
- Número de Confirmación
- Fecha de Vencimiento desde / hasta
- Cliente
- Titular / Pax
- Vendedor
- Unidad de Negocio
- Área de Negocio
- Estado del Servicio
- Moneda de Costo
- Producto
- Número de Ticket
- Fecha Factura
- Operador de Cuenta a pagar
- Estado del Pago
- Factura del proveedor cargada
- Proveedor con cuenta Corriente

Botones:
- **Filtrar** (1)
- **Filtrar y Exportar** (2) → genera **.csv**
- **Cancelar** (3)

Selector por página: 10 / 25 / 50 / 100  
Campo **Buscar** (derecha): filtra por texto libre.

La grilla muestra (entre otros):
- Prod
- Fecha
- Proveedor
- Prestador
- Servicio
- Nro. de Confirmación
- Estatus Reserva
- Cliente
- Vendedor
- Cupo
- Titular
- Moneda Costo
- Saldo
- Vencimiento
- Nro OS
- Nro OP
- Migrado
- Cobrado
- Voucher

Al final de la grilla (derecha) se puede **seleccionar** con check uno o más pagos a **procesar** y presionar **Procesar** (1) para **ejecutar la(s) Orden(es) de Servicio**.

Al procesar, se muestra el detalle general de la(s) OS y se completan:
- **Moneda de pago**
- **Fecha de Vto OS**
- **Observaciones**
- **Tipo de cambio**: Sistema / Negociado / Comex

Grilla adicional con:
- Código Cupo
- Nombre del Titular
- Nro de Confirmación
- Moneda
- Total Costo
- Total a Pagar

Podés **Agregar Adicionales**:
- Gastos y Diferencias
- Moneda
- Monto
- Descripción

Solapa **Anticipos**:
- Nro de OP
- Fecha
- Moneda
- Saldo
- Acciones

Botones:
- **Guardar y generar Orden de Servicio** (1) → **Guardado Exitosamente**
- (Opcional) Otros controles de navegación/edición

El resultado se ve en una grilla con:
- Tipo de Doc
- Nro
- Fecha Alta
- Proveedor / Título
- Moneda de Pago
- Creado Por
- Tipo de Cambio
- Monto
- Estado OP
- Observaciones
- Acciones

Selector por página: 10 / 25 / 50 / 100  
Campo **Buscar** (derecha): filtra por texto libre.

También se abre una ventana con **tres solapas**; seleccioná **Factura de Terceros Gastos** para ver la OS creada.

<!--
Imágenes sugeridas:
- /img/administracion/carga-facturas-terceros/13.png
- /img/administracion/carga-facturas-terceros/14.png
- /img/administracion/carga-facturas-terceros/15.png
-->
