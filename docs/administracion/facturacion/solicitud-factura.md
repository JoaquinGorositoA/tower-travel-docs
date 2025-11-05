---
title: Solicitud de factura
sidebar_label: Solicitud de factura
---

# 🧮 Solicitud de factura

Esta sección permite **solicitar la emisión de una factura**,  
ya sea vinculada a una reserva (file) o a un **concepto manual** no asociado a una operación específica.

El objetivo es que las solicitudes de facturación sean registradas y aprobadas  
por el área administrativa antes de su emisión final.

---

## 🧭 Acceso

Desde la barra lateral:  
**Administración → Facturación → Solicitud de factura**

---

## 📋 Funcionalidad

El sistema permite generar solicitudes de facturación a partir de distintos orígenes:

- **Desde un file:** el sistema completa automáticamente los datos del cliente, importe y servicio.  
- **Desde un concepto manual:** se deben ingresar los datos de forma libre.  

> 💡 Las solicitudes se envían al sector contable para su validación y posterior emisión del comprobante AFIP.

---

## ⚙️ Campos principales

- **Cliente / razón social**  
- **Tipo de comprobante** (Factura A, B, C o Proforma)  
- **Fecha de solicitud**  
- **Importe total y moneda**  
- **Concepto a facturar** (si no proviene de un file)  
- **Observaciones**  
- **Estado de la solicitud** (pendiente / aprobada / emitida)

---

## 🧾 Proceso general

1. El usuario crea una nueva solicitud completando los datos requeridos.  
2. El área administrativa revisa la información.  
3. Una vez validada, se genera la factura definitiva desde el módulo de Facturación.  

> 🔄 Las solicitudes pueden editarse o cancelarse mientras estén pendientes de aprobación.

---

## 📤 Acciones disponibles

- **Crear solicitud de factura**  
- **Editar / eliminar** registros  
- **Aprobar o rechazar** solicitudes  
- **Exportar listado** (Excel o PDF)  

---

## 🧩 Observaciones

- Las solicitudes se vinculan automáticamente con los módulos de **Contabilidad** y **Tesorería**.  
- En el caso de conceptos manuales, se deben utilizar los **conceptos a facturar** definidos previamente.  
- Las facturas emitidas desde solicitudes mantienen trazabilidad con el usuario y fecha de origen.

---

<!-- ![Solicitud de factura](/img/administracion/facturacion/solicitud-factura.png) -->
