---
title: Medios y Formas de Pago
sidebar_label: Medios y Formas de Pago
sidebar_position: 1
---

# Medios y Formas de Pago y Cobro

## ABM de Medios de Pago y Cobro
**Descripción**  
- Este Manual describe en el alta de medios de Pago y Cobro que se usarán en Tower Travel. Los medios de pago y cobro funcionan como “padre” de las formas de pago. 
- En la barra lateral, hacer clic en la opción Tesorería, luego Configuración y por último ABM Medios de Pago y Cobro.

- Se despliegan los medios de pago y cobro ya creados. Se puede revisar de a 10 registros, y al hacer clic en Siguiente se pasa a los siguientes 10 registros (1).
- También se puede buscar un medio de pago y cobro determinado en el campo Buscar (2). Esta es una pantalla sencilla, no se necesitan filtros.
- Para dar de alta un medio de pago, hacer clic en Agregar Medios de Pago y Cobro (3).

Para dar de alta un medio de pago, debe ingresarse:  
- **Nombre** (campo alfanumérico)  
- **Aplica para Pago:** medio de pago para todos los documentos que generan pagos  
- **Aplica para Cobro:** medios de pago solo para recibos  
- **Aplica Tarjeta**  
- **Usa Bancos** (usa bancos en la operatoria normal)  
- **Usa Chequera**  
- **Usa control de Numeración** (uso exclusivo para chequeras)  
- **Usa Arqueo**  
- **Usa Caja**  
- **Usa Cartera** 
- **Retenciones**  
- **Valores a depositar**  

- Todos los campos aparecen por default en **SI**, debe revisarse uno por uno. 
- Hacer clic en **Crear**.

## Baja y Modificación de Medios de Pago y Cobro
- Una vez creado el nuevo registro, se puede Habilitar o Inhabilitar el registro (1). Si está habilitado, aparece en los listados de medios de pago
- También se puede visualizar el registro, editarlo o eliminarlo (2). Si no figura el campo eliminar, el medio de pago ya fue usado en el sistema y no puede eliminarse (3).

## ABM de Formas de Pago y Cobro
- Al hacer clic en Tesorería → Configuración → Formas de Pago, se despliegan las distintas formas de pago y cobro para dar de alta.
- No se puede dar de alta una Forma de Pago/Cobro “desde cero”: solo se puede agregar o dar de alta sobre una existente.  
- Las Formas de Pago son las siguientes: 
  - **Cuenta Bancaria** 
  - **Caja**
  - **Tarjeta**
  - **Chequera**
  - **Valores a Depositar**
  - **Retenciones**  
- También pueden darse de alta **Gastos y Diferencias**.  
- En primer lugar, daremos de alta una **Cuenta Bancaria**.

## ABM de Cuentas Bancarias
- En este apartado se visualizan y dan de alta las cuentas bancarias de la compañía. Las mismas son utilizadas por los Medios de Cobro/Pago en los cuales la opción de **Cuenta Bancaria** está en **SI**.
- Al hacer clic en **ABM de cuentas bancarias** se despliega el listado de las cuentas bancarias de Tower ya creadas.
- Para dar de alta una nueva cuenta bancaria para Tower hacer clic en **Agregar Cuenta Bancaria**. 
- Las dos últimas columnas muestran si la cuenta está habilitada o no, y los íconos de visualización, edición y borrado (para el caso en que la cuenta bancaria no esté siendo utilizada).

Deben completarse los siguientes campos:  
- **Nombre** de la cuenta bancaria  
- **Tipo de Cuenta**: caja de ahorro o cuenta corriente  
- **Moneda**: seleccionar la moneda de un desplegable  
- **Imputación contable**: se despliega el Plan de Cuentas (sirve para realizar los registros contables correspondientes)  
- **Sucursal**  
- **Número de Cuenta**  
- **CBU**: debe ser un CBU real, tiene 22 dígitos  
- **Alias**: campo no obligatorio  
- **Descubierto**: campo no obligatorio (¿la cuenta acepta o no descubierto?)  
- **Chequera**: haciendo clic en el campo, la cuenta acepta chequera (2)  
- Para guardar la cuenta, hacer clic en **Crear**.

## ABM de Cajas
- Para dar de alta una caja de Tower, hacer clic en **ABM Cajas** en el menú. Se despliega el listado. 
- Hacer clic en **Agregar Caja**.

- En este apartado se visualizan y dan de alta las cajas de la compañía. Las mismas son utilizadas por los Medios de Pago y Cobro en los cuales la opción de **Maneja Caja** está en **SI**.  
Completar los campos marcados con un asterisco: 
-**Nombre** 
-**Moneda** 
-**Responsable** 
-**Tesorero**  
-**Control**: quién realiza el arqueo y cierre de caja.  
-**Imputación contable**  
-Hacer clic en **Crear** para dar de alta la caja.

## ABM de Tarjetas
- Para dar de alta una tarjeta, hacer clic en **ABM Tarjetas**.
- Hacer clic en **Agregar tarjetas**.

Completar los siguientes campos:  
- **Nombre**  
- **Cobro** o **Pago** (la tarjeta puede usarse para cobro o pago, no para ambas)  
- **Imputación contable** (se despliegan las cuentas contables del Plan de Cuentas)  
- Hacer clic en **Crear** para dar de alta la tarjeta.

## ABM de Chequeras
- Para dar de alta una chequera, hacer clic en **ABM Chequeras**. 
- Luego hacer clic en **Agregar Chequeras**.

Completar los campos marcados con un asterisco:  
- **Nombre** de la chequera  
- **Imputación contable**  
- **Cuenta bancaria** asociada a la chequera (vinculada con las cuentas bancarias dadas de alta anteriormente)  
- **Moneda** (se completa automáticamente a partir de la Cuenta Bancaria)  
- Si se hace clic en el campo **Autonumeración**, se habilitan los campos **Número desde** y **Número hasta**.  
- Hacer clic en **Crear** para dar de alta la chequera.
 
## ABM de Valores a Depositar
- Hacer clic en **Valores a depositar**.
- Luego hacer clic en **Agregar Valores a depositar**.

Completar los campos marcados con un asterisco:  
- **Nombre**  
- **Imputación contable** del **recibo**  
- **Imputación contable** de la **orden de pago**  
- Hacer clic en **Agregar** para dar de alta los valores a depositar.

## ABM de Retenciones
- Para dar de alta una retención, hacer clic en **ABM Retenciones**. Las retenciones son específicas por jurisdicción y se trata de dinero retenido por clientes a Tower. 
- Luego hacer clic en **Agregar Retención**.

Completar los campos marcados con un asterisco:  
- **Nombre**  
- **Habilita Jurisdicción**  
- **Imputación contable**  
- **Impacta en**: recibo / orden de pago  
- **Adjuntar archivo** (se puede guardar el archivo de la retención)  
- **Habilitado**  
- Hacer clic en **Guardar** para dar de alta la retención.

## ABM de Conceptos a Facturar
- Para dar de alta un concepto a facturar hacer clic en **ABM Conceptos a Facturar**. 
- Se usa en el formulario de **Solicitud de Factura Manual**. 
- Sirve para facturas que no están vinculadas a Reservas; debe colocarse un concepto en la factura. 
- Hacer clic en **Agregar Conceptos**.

Completar los campos marcados con un asterisco:  
- **Concepto**  
- **Imputación Contable**  
- Hacer clic en **Crear**.

## ABM de Gastos y Diferencias
- Para dar de alta un gasto y diferencia, hacer clic en **ABM Gastos y Diferencias**.  
- “Gastos y diferencias” se utiliza en una sección llamada **Adicionales**, tanto en los **Recibos** como en **Órdenes de Pago**.
- A través de **Gastos y Diferencias**, se puede gestionar redondeos o conceptos extraordinarios no vinculados con la reserva. 
- Hacer clic en **Agregar Gastos y diferencias**.

Completar los campos marcados con un asterisco:  
- **Nombre** del gasto o diferencia  
- **Imputación contable**  
- **Impacta en Recibo** (SI/NO)  
- **Impacta en Orden de Pago** (SI/NO)  
- **Impacta en OS** (SI/NO)  
- **Apartado administrativo** (SI/NO). Es una sección que aparece en la liquidación del file. Son conceptos adicionales en la cobranza.  
Cuando se selecciona el **Apartado administrativo**, se despliega **Aplica IVA** (SI/NO).  
- Hacer clic en **Crear**.
