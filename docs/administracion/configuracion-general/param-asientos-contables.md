---
title: Parámetros de asientos contables
sidebar_label: Parámetros de asientos contables
---

# 🧮 Parámetros de asientos contables

Esta sección permite definir las **reglas automáticas** para la generación de asientos contables.  
A partir de estas configuraciones, el sistema determina cómo se imputan las operaciones  
en el **Plan de Cuentas** de manera consistente y automatizada.

---

## 🧭 Acceso

Desde la barra lateral:  
**Administración → Configuración general → Parámetros de asientos contables**

---

## 📋 Funcionalidad

El sistema permite:

- Configurar las **cuentas contables** que intervienen en cada tipo de operación.  
- Asociar **comprobantes** y **conceptos administrativos** con sus cuentas de débito y crédito.  
- Establecer **reglas de generación automática** para facturas, recibos, notas de crédito, pagos, etc.  
- Controlar los **asientos generados automáticamente** antes del cierre contable.

> 💡 Estas configuraciones son fundamentales para mantener la coherencia entre los módulos operativos y la contabilidad.

---

## ⚙️ Campos principales

- **Tipo de comprobante** (factura, recibo, nota de crédito, orden de pago, etc.)  
- **Cuenta contable de débito**  
- **Cuenta contable de crédito**  
- **Concepto administrativo**  
- **Descripción**  
- **Estado** (activo / inactivo)

---

## ⚙️ Ejemplo de uso

- Al emitir una factura, el sistema genera automáticamente el asiento de **venta**.  
- Al registrar una orden de pago, se genera el asiento correspondiente en la cuenta de **proveedores**.  

> 🔄 Los asientos automáticos se crean de acuerdo con las reglas configuradas aquí.

---

## 🧩 Observaciones

- Los cambios en las cuentas contables deben realizarse con precaución.  
- Los asientos automáticos pueden modificarse manualmente antes del cierre contable.  
- Cada tipo de documento tiene sus propias reglas de imputación.

---

<!-- ![Parámetros de asientos contables](/img/administracion/configuracion-general/param-asientos-contables.png) -->
