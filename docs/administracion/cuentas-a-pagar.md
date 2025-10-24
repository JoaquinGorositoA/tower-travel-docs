---
title: Cuentas a Pagar
sidebar_label: Cuentas a Pagar
sidebar_position: 5
---

Pago a proveedores tiene distintos componentes:
- ABM Datos bancarios de proveedores
- Carga de factura de terceros
- Pagos a procesar
- Ordenes de Servicio

En la barra lateral, hacer clic en **Cuentas a Pagar** y luego en **Carga de Facturas de terceros**.  
Se despliegan distintas opciones, comenzaremos por la **carga de datos bancarios de proveedores**.

<!-- ![Slide: Portada](/img/administracion/cuentas-a-pagar/01.png) -->

---

## Datos bancarios de proveedores

En primer lugar, se encuentra una pantalla para **filtrar datos**.  
En este caso podemos filtrar los datos bancarios ya cargados, por **razón social del proveedor**.

Se despliegan los siguientes campos:
- **Nombre de la cuenta**
- **Banco**
- **Moneda**
- **Destino** (nacional o internacional)
- **Si está habilitada o no para usarse en Tower**
- **Default:** la cuenta default es la que aparece en la Orden de Pago

Pueden realizarse distintas acciones: **visualizar, editar y eliminar**.  
No se puede eliminar un registro **si ya se utilizó**.  
Hacer clic en **agregar datos bancarios**.

<!-- ![Slide: Filtro y listado de cuentas](/img/administracion/cuentas-a-pagar/02.png) -->

---

En primer lugar, aparece el **nombre del proveedor** de la búsqueda de la pantalla anterior.  
Cada proveedor puede **tener más de una cuenta bancaria**.

Los otros campos a completar son los siguientes:
- **Descripción de la cuenta**
- **Tipo de cuenta:** Local (argentina) o Comex (del exterior)
- **Titular de la cuenta** igual a razón social. En caso de ser distintos, los tres campos de abajo se habilitan para completar
- **Banco:** los bancos Comex deben tipearse y los bancos argentinos vienen en una lista desplegable
- **Número de Cuenta:** campo numérico, no acepta caracteres especiales
- **Moneda:** se despliegan todas las monedas, no sólo las oficiales de Tower
- **Swift:** es un código internacional de cuentas
- **Tiene corresponsal:** es un agente representante de otro banco. En caso de contestar **sí**, debe completarse los tres campos de abajo:
  - **Banco Corresponsal**
  - **Abba**
  - **Domicilio**

Hacer clic en **Guardar** para completar la operación.

<!-- ![Slide: Alta de cuenta bancaria de proveedor](/img/administracion/cuentas-a-pagar/03.png) -->

---

## Pagos a procesar

En esta pantalla se visualizan **todos los servicios y gastos** en sus diferentes **estados y condiciones**.  
Asimismo, se inicia el **proceso de pago a proveedores** a través de la **generación de la orden de servicio**.

En el menú de la izquierda, hacer clic en **Cuentas a pagar** y **Pagos a Procesar**.  
Consta de dos solapas, para diferenciar:
- **Servicios Asociados a Reservas** (1)
- **Factura de Gastos de Terceros** (2)

En esta pantalla se puede **filtrar y exportar** a un archivo **.csv** (3) o sólo **filtrar** (4).

<!-- ![Slide: Pagos a procesar - solapas](/img/administracion/cuentas-a-pagar/04.png) -->

---

### Pagos a procesar – Servicios en reserva

Los principales **campos para filtrar** son:
- **Número de Reserva**
- **Proveedor:** proveedor asociado a los servicios de la reserva
- **Fecha desde/hasta:** seleccionar reserva por fecha
- **Cliente**
- **Vendedor**
- **UN**
- **Área**
- **Estado del servicio:** se despliega un menú de opciones
- **Factura del proveedor cargada**
- **Proveedor con cuenta corriente**

<!-- ![Slide: Filtros servicios en reserva](/img/administracion/cuentas-a-pagar/05.png) -->

---

Al filtrar, se despliega un **listado** con el resultado de la búsqueda, con los siguientes datos:

En la **primera mitad** del listado (figura de arriba) se despliegan los campos:
- **Prod:** es el tipo de producto (ejemplo **AIR** es aéreo)
- **Fecha:** de In
- **Proveedor**
- **Prestador**
- **Servicio:** descripción del servicio
- **Número de confirmación**
- **Estado:** es el estado del servicio, la sigla comienza con **S**, ejemplo **SOK** está confirmado y se puede pagar
- **Cliente**
- **Cupo:** es para **cupos aéreos** (campo no obligatorio)

En la **segunda mitad** del listado (figura de abajo) se despliega:
- **Fecha de vencimiento:** es la fecha de vencimiento del pago al proveedor. El sistema completa automáticamente este campo de acuerdo con la **política de pago** de la compañía.
- **Política de Pago:** consta de tres niveles: 1) el **vencimiento propio del servicio**, 2) la **política acordada con el proveedor** o 3) **política general de Tower Travel**
- **Vencimiento**
- **Número de OS:** cuando el servicio esté incluido en una OS
- **Número de OP:** significa que el servicio ya está **pago**
- **Campo para seleccionar:** se usa para **generar la OS**. Solo los servicios en estado **SOK** pueden avanzarse a Orden de Servicio. Cualquier otro estado tendrá **grisado** el campo de selección.

La **orden de servicio se genera por proveedor**, es decir que solo pueden incluirse servicios **del mismo proveedor**.  
En caso de seleccionarse servicios de **distintos proveedores** el sistema mostrará un **mensaje de error**.  
En una misma **Orden de Servicio** pueden incluirse **servicios en distintas monedas**.

<!-- ![Slide: Listado servicios en reserva](/img/administracion/cuentas-a-pagar/06.png) -->

---

### Pagos a procesar – Facturas de Gastos de Terceros

Las **Ordenes de Servicio** de **gastos no asociados a reserva** (luz, agua, librería, etc.) se dan de alta en esta pantalla.  
Está resaltada la solapa **Factura de Terceros gastos** (1).  
Haciendo clic en **Filtrar** (2), se despliegan las **facturas de gastos** que cumplan con los filtros.

Los campos que se despliegan son los siguientes:
- **Proveedor**
- **Tipo de Documento**
- **Tipo de Factura**
- **Fecha Contable**
- **Moneda**
- **Tipo de Cambio**
- **Total Factura**

<!-- ![Slide: Facturas de gastos de terceros](/img/administracion/cuentas-a-pagar/07.png) -->

---

Para **generar la Orden de Servicio**, **seleccionar** el ítem a pagar en la última columna (1) y hacer clic en **Procesar** (2).

<!-- ![Slide: Selección y procesar OS](/img/administracion/cuentas-a-pagar/08.png) -->

---

Una vez seleccionado el botón **Procesar**, se abre el formulario de **Orden de Servicio** donde deben completarse los siguientes datos:
- **Cuenta bancaria proveedor:** este campo muestra las cuentas asociadas al proveedor cargadas en **Datos Bancarios Proveedor**. Si bien es un campo no obligatorio, es **muy importante** dado que son los datos que posteriormente usará **Tesorería** para **efectivizar el pago**.
- **Moneda de pago:** pueden ser **ARS, USD o EUR**
- **Fecha de vencimiento de la OS**
- **Fecha:** corresponde a la fecha del día de la generación y no se puede editar
- **Observaciones:** campo texto libre (1)

Si la Orden de Servicio incluye **servicios en monedas distintas** a la moneda de pago, debe seleccionarse **qué tipo de cambio** debe utilizarse.  
Existen **tres tipos de cambio**:
- **Sistema:** es el tipo de cambio configurado en el sistema
- **Negociado:** es un tipo de cambio convenido con el proveedor que debe ingresarse en forma manual
- **Comex** (3): se ingresa en oportunidad de generarse la **Orden de Pago**

En **Adicionales** (3) se agregan los ítems **adicionales a pagar** (impositivos, percepciones, por ejemplo).

Al hacer clic en **Guardar y Procesar Orden de servicio** (5), se procesa la orden y se desplegará un **listado de las OS** ya procesadas.

<!-- ![Slide: Formulario OS](/img/administracion/cuentas-a-pagar/09.png) -->

---

Se despliegan las **Ordenes de Servicio generadas**, en tres solapas distintas:
- **Servicios en File** (1)
- **Facturas de terceros y gastos** (2)
- **Aéreos** (3)

Se muestra la **OS** que acabamos de generar (4), que es la **288**.  
Se despliega:
- **Fecha de alta de la OS**
- **Proveedor**
- **Monto de pago**
- **Creado Por:** usuario creador de la OS
- **Tipo de cambio:** en este caso utiliza tipo de cambio del sistema
- **Estado:** **impaga**
- **Observaciones:** se muestra las observaciones que se cargaron en la pantalla anterior

Se observan también las acciones de **visualizar, editar y eliminar** (5).  
Si la OS está **paga** no se puede **editar** y **eliminar**.

<!-- ![Slide: Listado OS](/img/administracion/cuentas-a-pagar/10.png) -->

---

El **analista de Tesorería** es quien genera la **Orden de Pago**, **seleccionando** la OS a pagar en la primera columna (1).  
Luego hace clic en **Procesar** (2).

<!-- ![Slide: Selección OS para OP](/img/administracion/cuentas-a-pagar/11.png) -->

---

Se despliega la siguiente pantalla:
- Se muestran los **datos bancarios del proveedor** (1)
- Se puede **pagar con un anticipo** ya realizado (2)
- Luego se da de alta la **forma de pago** (en este caso efectivo, USD) (3)
- Se hace clic en **Guardar y Generar Orden de Pago** (4)
- La **diferencia** entre **lo pagado** y **lo que debemos pagar** debe ser **cero**. Esto se muestra en el **campo diferencia** (5)

<!-- ![Slide: Generar Orden de Pago](/img/administracion/cuentas-a-pagar/12.png) -->

---

El sistema muestra el **mensaje de guardado ok** y vuelve a la pantalla anterior, donde la **Orden de Pago 352** tiene **status OK** (1).  
Haciendo clic en la **impresora** (2) se puede **imprimir** la Orden de Pago, que se despliega abajo.  
La Orden de Pago puede **enviarse a una impresora** o **generar un archivo pdf**.

<!-- ![Slide: Listado OP e impresión](/img/administracion/cuentas-a-pagar/13.png) -->
