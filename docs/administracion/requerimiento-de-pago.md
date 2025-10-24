---
title: Requerimiento de Pago
sidebar_label: Requerimiento de Pago
sidebar_position: 10
---

# Requerimiento  de Pago

## Listado de Requerimiento de Pago

**Descripción:**  
A través de esta opción se accede Listado de Requerimientos de Pago que permite registrar pagos anticipados a proveedores y habilita a usuarios que no pertenecen al área de administración a generar solicitudes de pago, sin importar el concepto ni el proveedor asociado.

En la barra lateral de navegación,  hacer clic en la opción **Requerimiento de Pago**,  luego **Listado de Requerimiento de Pago**.

Se despliega el siguiente formulario el cual deberá completar los siguientes campos para realizar la búsqueda:

- Fecha de Emisión
- Tipo de Requerimiento
- Proveedor
- Estado
- Creado por
- Proyecto

Luego visualizará dos botones que permitirá **Cancelar** y **Filtrar**.

El botón **Filtrar (1)** sólo muestra  algunos datos específicos según los criterios seleccionados.

El botón **Cancelar (2)** servirá para detener o anular la acción antes de ser completada.

**Visualizará los resultados en un campo desplegable que le permitirá escoger entre:**
- 10 Registros
- 25 Registros
- 50 Registros
- 100 Registros

El formulario contará con un campo denominado **Buscar**, ubicado en la parte superior derecha de la pantalla. Al ingresar texto en este campo, por ejemplo, un nombre de usuario, cliente o cualquier valor correspondiente a alguna columna del listado, el sistema aplicará un filtro en tiempo real. De esta manera, los resultados se actualizarán automáticamente a medida que se escribe una palabra o frase, mostrando únicamente los registros que coincidan con la búsqueda realizada, permitiendo localizar rápidamente los registros deseados.

La grilla que se despliega contiene los siguientes campos que se detallan a continuación:

- **Tipo:** Es el tipo de Requerimiento de Pago, son los siguientes por Proveedor/ Por Imputación Contable.
- **Numero**
- **Fecha de Emisión**
- **Fecha de Vencimiento**
- **Proveedor/Título**
- **Creado por**
- **Moneda de Pago**
- **Total**
- **Estado:** Indica la situación actual del registro, Pendiente/ Anulado/Pago.
- **Acciones**

Al hacer clic en el icono **ver** se abrirá un formulario que detallará toda la información  del Requerimiento de Pago.

Al hacer clic en el **tachito**, el sistema eliminará de forma permanente el registro, y queda actualizado el listado.

Cuando  el campo **Estado** se encuentre en **Pendiente** es por que no se le ha generado una **Orden de pago**, luego de generarla la **naturalidad** cambia a un **anticipo**.

---

También tendrá la opción de hacer clic en **Agregar Requerimiento del Pago** y se abrirá un formulario con un campo de selección con **dos opciones**, cada uno con **campos diferentes**:

**Proveedor:**

**Imputación contable:** Solo se visualizan las cuentas contables.

Al seleccionar la opción **Proveedor** deberá completar los siguientes campos:

- Proveedor
- Cuenta bancaria proveedor
- Moneda de Pago
- Fecha de Emisión
- Título
- Fecha de Vencimiento

Al seleccionar la opción **Proveedor** deberá completar los siguientes que se encuentran en la **grilla**:

- Moneda
- Importe
- Acciones

Y de manera opcional tendrá un campo de **observaciones** donde podrá escribir comentarios o información relacionada con el registro que se esta creando.

En el campo **Acciones**, visualizará un icono, que permitirá **eliminar la Imputación Contable** que se haya creado.

Al finalizar el formulario se visualizarán dos botones que permitirán **Generar (1)** e **interrumpir (2)** o **salir de la acción** sin guardar los cambios realizados.

El sistema mostrará un mensaje indicando **Guardado exitosamente**.

---

Al seleccionar la opción **Imputación Contable** deberá completar los siguientes campos:

- Fecha de Emisión
- Numero
- Moneda de Pago
- Título
- Fecha de Vencimiento
- Proyecto

En el campo **Acciones**, visualizará un icono, que permitirá **eliminar la Imputación Contable** que se haya creado.

Al finalizar el formulario se visualizarán dos botones que permitirán **Generar (1)** e **interrumpir (2)** o **salir de la acción** sin guardar los cambios realizados.

Y de manera opcional tendrá un campo de **observaciones** donde podrá escribir comentarios o información relacionada con el registro que se esta creando.

El sistema mostrará un mensaje indicando **Guardado exitosamente**.

---

# Requerimiento  de Pago

## Reporte RP

**Descripción:**  
A través de esta opción se accede al **Reporte RP**, consultando todos los **seguimientos de anticipos**.

En la barra lateral de navegación,  hacer clic en la opción **Reporte RP**,  luego **Seguimiento de los Anticipos**.

Se despliega el siguiente formulario el cual deberá completar los siguientes campos para realizar la búsqueda:

- Proveedor
- Fecha de orden de pago desde
- Fecha de orden de pago hasta
- Numero de orden de pago
- Opciones

Se visualizarán dos botones que permitirán **Filtrar (1)** (sólo muestra algunos datos específicos según los criterios seleccionados) e **interrumpir (2)** o **salir de la acción** sin guardar los cambios realizados.

**Visualizará los resultados en un campo desplegable que le permitirá escoger entre:**
- 10 Registros
- 25 Registros
- 50 Registros
- 100 Registros

El formulario contará con un campo denominado **Buscar**, ubicado en la parte superior derecha de la pantalla. Al ingresar texto en este campo, por ejemplo, un nombre de usuario, cliente o cualquier valor correspondiente a alguna columna del listado, el sistema aplicará un filtro en tiempo real. De esta manera, los resultados se actualizarán automáticamente a medida que se escribe una palabra o frase, mostrando únicamente los registros que coincidan con la búsqueda realizada, permitiendo localizar rápidamente los registros deseados.

Luego visualizará una **grilla** que contiene los siguientes campos que se detallan a continuación:

- Proveedor
- Nro de orden de pago
- Fecha
- Moneda
- Importe Total
- Importe Aplicado OS
- Saldo
- Acciones

Al hacer clic en la columna **Acciones** en el icono **recuperar**,  se podrá **recuperar** la Orden de Servicio, si el registro ya se encuentra **aplicado a una OS** no permitirá recuperar.

Sólo se podrán recuperar las **Ordenes de Servicio que tienen saldo**.

Al hacer clic en **recuperar**, se abrirá un formulario donde deberá completar los siguientes campos:

- Cuenta Bancaria Proveedor
- Moneda de Pago
- Fecha de Vto OS
- Fecha

También visualizará el campo **Observaciones** donde podrá escribir alguna información relevante a la Orden de Servicio.

Como opcional podrá **agregar Adicionales**, seleccionando la información correspondiente por cada campo que se menciona a continuación:

- Gastos y Diferencias
- Moneda
- Monto
- Descripción

Se visualizará un icono, que permitirá **eliminar** algún registro ya agregado.

También se visualizará una **grilla de Anticipos** que contiene los siguientes campos:

- Nro de OP
- Fecha
- Moneda
- Saldo
- Acciones

Se podrá hacer una **búsqueda filtrando los anticipos** por cualquiera de los siguientes campos y presionar el botón **Filtrar (1)**:

- Numero de requerimiento
- Fecha de OP
- Moneda
- Todos

**Visualizará los resultados en un campo desplegable que le permitirá escoger entre:**
- 10 Registros
- 25 Registros
- 50 Registros
- 100 Registros

La **Grilla** contiene los siguientes campos que se detallan a continuación:

- Proveedor
- Nro de requerimiento
- Nro de OP
- Fecha OP
- Moneda Req
- Importe Total
- Importe Aplicado
- Saldo

Luego se visualizarán los resultados de los registros que están relacionados a ese **proveedor** y deberá **seleccionar mínimo un registro** y presionar el botón **Agregar** para que el mismo sea añadido como **anticipo**.

**Botones (al final):**
- **Guardar orden de servicio** (muestra **Guardado exitosamente**)
- **Cancelar**

---

# Requerimiento  de Pago

## Ordenes de Servicio

Luego de creada la **Orden de Servicio**, se **recupera el dinero del Anticipo** el cual **queda en negativo** y se **regresa por defecto a Tower**.

Por ultimo el sistema mostrará un formulario donde podrá **filtrar** la información deseada y **exportar** la información del reporte para descargarlo en formato **Excel**. Se recomienda que ejecute el **reporte** desde la **solapa** “Servicios en File” por los siguientes campos:

- Numero de reserva
- Nro de OS/RP
- Usuario
- Proveedor
- Estatus
- Fecha de Alta
- Fecha de vto OS/RP

**Botones:**
- **Cancelar**
- **Filtrar y Exportar**
- **Filtrar**
