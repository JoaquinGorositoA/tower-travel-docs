---
title: Cobranzas
sidebar_label: Cobranzas
sidebar_position: 3
---

# Cobranzas

**Descripción:** A través de esta opción se accede a la emisión de recibos para registrar las cobranzas. En la barra lateral de navegación, para acceder hacer clic en la opción Tesorería, luego Cobranzas y por último Recibos.  
Se despliega la siguiente pantalla, que tiene tres solapas:
- **Asociados a reservas:** emisión de recibos para cobranzas de files (1)
- **Anticipo:** emisión de recibos por anticipo de clientes. Estos quedan asociados a la cuenta corriente del cliente para su posterior aplicación. (2)
- **Factura sin reservas:** emisión de recibos de cobranzas de facturas emitidas (3)

La pantalla presenta filtros para realizar una búsqueda.

<!-- ![Pantalla inicial](/img/administracion/cobranzas/01.png) -->

---


Para generar el recibo puede buscarse la reserva, a través de los siguientes filtros:
- **Número de reserva**
- **Fecha de alta desde/hasta** (es la fecha de alta de la reserva)
- **Cliente** (corresponde al Nombre Comercial con el cual el cliente fue dado de alta en el MAE de clientes)

Hacer clic en **Filtrar** (1).

<!-- ![Asociados a reservas - filtros](/img/administracion/cobranzas/02.png) -->

---

- Cobranzas
- Recibos

Como resultado de la búsqueda, se despliega el siguiente cuadro, que tiene los siguientes campos:
- **Titular**
- **Cliente:** muestra la razón social y debería ser el Nombre Comercial
- **Número de Reserva**
- **Vencimiento** del saldo de la reserva
- **Moneda:** la moneda del file
- **Cobrado:** es la sumatoria de las cobranzas asociadas a la reserva
- **Saldo:** es la diferencia entre total a cobrar y lo cobrado

Seleccionar los files de la **misma moneda**, sobre los que se quiera crear el recibo (1).  
El sistema los **totaliza automáticamente** (2).  
Los recibos **deben ser del mismo cliente**.  
Hacer clic en **Procesar** (3).

<!-- ![Resultados - selección](/img/administracion/cobranzas/03.png) -->

---

- Cobranzas
- Recibos

Se despliega la siguiente pantalla, que tiene cinco secciones:
1. **Datos Generales** (1)
2. **Datos de Recibo** (2)
3. **Anticipos** (3)
4. **Adicionales** (4)
5. **Formas de Cobro** (5)

<!-- ![Recibo - secciones](/img/administracion/cobranzas/04.png) -->

---

- Cobranzas

**Datos Generales**
- **Nombre del cliente y Razón Social** (1)
- **Fecha recibo:** es la fecha del día en el cual se genera
- **Moneda de cobro:** corresponde a la moneda en la cual se está realizando la cobranza, tiene un desplegable con las monedas disponibles (ARS, USD o EUR)
- **Fecha cotización:** puede ser una fecha pasada; por ejemplo, por una transferencia del cliente, realizada en fecha pasada
- **Cotización:** entre la moneda de reserva y la moneda de cobro. El sistema muestra la cotización para la fecha del recibo. La misma se actualiza si se cambia el dato del campo Fecha de Cotización. Asimismo, puede editarse y completarse manualmente (2)

**Datos de la reserva**
- **Nro Reserva**
- **Moneda de Reserva**
- **Total Venta Moneda de Reserva**
- **Saldo Moneda de Reserva**
- **Saldo Moneda de Cobro:** corresponde al saldo en la moneda de la reserva por la cotización. El campo es editable y debe completarse con el valor real de la cobranza. Si el valor ingresado es mayor que el Saldo en la moneda de cobro el sistema genera automáticamente un saldo a favor en la cuenta corriente del cliente
- **Saldo a cobrar:** suma de los saldos en la moneda de cobro (4)

<!-- ![Datos generales y de reserva](/img/administracion/cobranzas/05.png) -->

---

En este apartado, se buscan los **anticipos** que el cliente tenga en su cuenta corriente.  
Los mismos pueden buscarse por **Número de recibo**, **Fecha de recibo** o bien tildando **Todos**.  
El sistema solo mostrará los anticipos existentes en la **misma moneda** de la cobranza.  
Una vez listados los anticipos, desde el **checkbox** del lado derecho se seleccionan aquellos que se deseen aplicar.  
El sistema moverá los anticipos seleccionados al apartado donde el valor de la columna **Saldo** puede ser editado para aplicar un valor menor.  
Los anticipos se aplican con **signo negativo** en el recibo disminuyendo el saldo a cobrar que incluso puede ser cero.  
**Si el recibo tiene saldo a favor no se puede aplicar un anticipo.**

<!-- ![Anticipos](/img/administracion/cobranzas/06.png) -->

---

**4. Sección Adicionales**  
Debe hacerse clic en **Agregar adicional** (1).  
Hay dos tipos de adicionales:
- Los del recibo que **no afectan el file** (por ejemplo, un redondeo u otro tipo de ajuste)
- Los que nacen en el recibo y **afectan al file**, incorporando el concepto en el **Apartado Administrativo** del file

Los adicionales deben estar cargados en la sección **Gastos y Diferencias**.

Deben completarse los siguientes campos:
- **Nombre:** se despliega una serie de opciones (2)
- **Monto:** puede ser positivo o negativo
- **Número de reserva:** se despliegan las reservas incluidas en este recibo para seleccionar a cuál o cuáles les corresponde el adicional
- **Descripción**
- **Acciones:** puede eliminarse el adicional

El **Total General a cobrar** (3) es la suma algebraica de **Total a Cobrar – Anticipos ± Adicionales**.

<!-- ![Adicionales](/img/administracion/cobranzas/07.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Recibos

La quinta y última sección contiene:
- **Formas de Cobro:** aquí se ingresan las formas de Cobro de este recibo. El **Total formas de Cobro** debe coincidir con el **Total General a cobrar** (1). El sistema informa la diferencia entre ambos valores a efectos de control
- **Observaciones:** es un campo de texto libre que luego puede verse en el recibo (2)

Para generar el recibo, debe hacerse clic en el botón **Guardar y generar el recibo** (3).

<!-- ![Formas de cobro](/img/administracion/cobranzas/08.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Recibos

Al guardar el recibo, el Sistema despliega un **listado de recibos** que se muestra a continuación:  
Al hacer clic en el botón de la **impresora**, se pueden **imprimir** el recibo que se presenta en la próxima página.  
A este listado también se puede llegar por **Tesorería / Cobranzas / Listado Recibos**.

<!-- ![Listado de recibos](/img/administracion/cobranzas/09.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Recibos

El recibo muestra:
1) **Número y fecha**  
2) **Datos del emisor:** Elementa SRL  
3) **Datos del cliente**  
4) **Detalle del recibo**  
5) Se puede **descargar y enviar por correo** desde **Imprimir**

<!-- ![Recibo - detalle](/img/administracion/cobranzas/10.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Recibos

Así se ve el recibo luego de dar clic en **Imprimir**.

<!-- ![Recibo - impresión](/img/administracion/cobranzas/11.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos

Un **anticipo** ocurre cuando el cliente deja plata en cuenta, pero no lo asocia a reserva.  
Se ingresa en la **segunda solapa** de Cobranzas y se despliega la pantalla que se muestra a continuación.  
Existen dos tipos de anticipo:
- **Asociado a Cliente**
- **Imputación Contable** (para un gasto no asociado a una reserva)

<!-- ![Anticipos - tipos](/img/administracion/cobranzas/12.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos – Asociado a Cliente

Deben completarse los siguientes campos…
- **Cliente**
- **Fecha del recibo** (1): lo trae el sistema y no puede editarse
- **Moneda de Cobro** (2)
- **Fecha cotización** (3): puede ser actual o día anterior
- **Cotización**
- **Monto**: importe recibido

<!-- ![Anticipo asociado a cliente - campos](/img/administracion/cobranzas/13.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos - Asociado a Cliente

Igual que la solapa anterior (Cobranzas), tiene la opción de **agregar gastos adicionales**.  
Para agregar un adicional, hacer clic en **Agregar Adicionales** (1), seleccionar el **tipo de adicional** que se desea agregar (2) y luego el **Monto y Descripción** (3).  
También deben darse de alta la o las **formas de cobro** (4).  
Luego hacer clic en **Guardar** (5).  
Las secciones **Adicionales** y **Forma de Cobro** funcionan igual que en recibos **asociados a reservas** – Ver slides 8 y 9.

<!-- ![Anticipo asociado a cliente - adicionales](/img/administracion/cobranzas/14.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos – Imputación Contable

El **Anticipo – Imputación Contable** difiere del anterior Anticipo ya que **no** se utiliza cliente ni reserva asociada.  
Deben completarse los siguientes campos:
- **Tipo:** imputación contable (1)
- **Fecha del recibo**
- **Moneda de Cobro**
- **Fecha cotización**
- **Título**
- **Imputación contable** (2): debe elegirse la imputación contable
- **Importe** (3): debe elegirse el monto del anticipo contable


<!-- ![Anticipo imputación contable - campos](/img/administracion/cobranzas/15.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos – Imputación Contable

Al igual que los anticipos asociados a reserva, se agregan:
1) **Importes adicionales**  
2) **Formas de cobro**  

Luego se hace clic en **Guardar y Generar recibo** (3).

<!-- ![Anticipo imputación contable - adicionales](/img/administracion/cobranzas/16.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos – Imputación Contable

Una vez generado el anticipo, **puede aplicarse a una reserva**.  
Una vez creado el anticipo nos lleva a un **listado de reservas**, que se había desplegado anteriormente (1).  
Seleccionar la **reserva a aplicar** (2).

<!-- ![Aplicar anticipo a reserva](/img/administracion/cobranzas/17.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos – Imputación Contable

Se despliega la sección **Filtrar Anticipos** (1) y se puede **seleccionar los distintos anticipos** para esta reserva.  
El concepto de **adicional no se aplica** a la reserva, porque es un concepto extra que debe pagar el cliente.

<!-- ![Filtrar anticipos](/img/administracion/cobranzas/18.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Anticipos – Imputación Contable

Como en los casos anteriores, se **guarda y genera el recibo**.

<!-- ![Generar recibo desde anticipo](/img/administracion/cobranzas/19.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Factura sin Reserva

Sirve para **cobrar facturas emitidas no asociadas a reservas** (ejemplo: gastos de marketing).  
Se puede filtrar por:
- **Cliente**
- **Número de factura**
- **Fecha de Alta desde/hasta** (es la fecha de alta de la factura)

La factura manual se selecciona desde este listado.  
Se selecciona la factura (1) y luego debe hacerse clic en **Procesar** (2).

<!-- ![Factura sin reserva - filtros](/img/administracion/cobranzas/20.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Factura sin Reserva

El formato para generar el recibo es **el mismo** que vimos anteriormente.  
Deben completarse los siguientes campos:
- **Fecha del recibo:** es la de hoy (1)
- **Moneda de cobro**
- **Cotización:** se carga automáticamente (2)
- **Fecha de cotización:** puede ser hoy o una fecha anterior (3)

El sistema trae los **datos de la factura manual** generada (4).  
Se puede **aplicar anticipos** (5).  
Se puede ingresar **Adicionales**, que son conceptos que deben cobrarse al cliente como temas impositivos o redondeo. Se cargan de la misma manera que fue explicado en el slide 8.  
Por último, se debe **cargar la/las formas de cobro** igual que en el slide 9.  
En este caso cobraremos a través de una **transferencia**.  
Luego se hace clic en **Guardar y Generar Recibo**.

<!-- ![Factura sin reserva - generar recibo](/img/administracion/cobranzas/21.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Factura sin Reserva

Se generó el siguiente recibo para el **pago de la factura sin reserva**.

<!-- ![Recibo generado - factura sin reserva](/img/administracion/cobranzas/22.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Reporte de Anticipos y Saldos a Favor

Para utilizar el **reporte de anticipos** hacer clic en **Tesorería**, luego **Cobranzas** y luego **Reporte de Anticipos**.  
Se despliegan campos para filtrar.  
La diferencia entre **Anticipo** y **Saldo a Favor** radica en **cómo se originan**, pero el uso/aplicación es igual en ambos casos.  
El **Anticipo** se origina en un recibo de anticipo, mientras que el **Saldo a favor** se origina en un recibo de reserva cuando el monto cobrado es mayor al valor a cancelar – ver slide 6.

<!-- ![Reporte anticipos/saldos - intro](/img/administracion/cobranzas/23.png) -->

---

- Manual de Usuario / Administración
- Cobranzas
- Reporte de Anticipos y Saldos a Favor

Se puede filtrar los anticipos por:
- **Clientes**
- **Fecha de recibo desde/hasta**
- **Número de recibo**
- **Tipo de recibo**

Existe la opción de **elegir todos** los recibos, aquellos que **tienen saldo** o los **aplicados** (1).  
Hacer clic en **Filtrar** (2).  
Se despliega el listado de anticipos, que contiene los siguientes campos (3):
- **Cliente**
- **Nro de recibo** (donde se generó el anticipo)
- **Tipo** (Anticipo y Asociado a Reserva)
- **Fecha** y **Moneda**
- **Importe Total** del anticipo
- **Importe aplicado** y el **Saldo** (diferencia entre las dos columnas anteriores)

El sistema tiene un **totalizador** para la columna **Importe Total**.  
Al hacer clic en **Importe aplicado**, se abre un **pop-up** con la información del recibo donde se aplicó el importe.



<!-- ![Reporte anticipos/saldos - listado](/img/administracion/cobranzas/24.png) -->
