---
id: gestionar-reservas
title: ¿Cómo gestiono mis reservas?
sidebar_label: ¿Cómo gestiono mis reservas?
---

# 🧭 ¿Cómo gestiono mis reservas?

Desde el módulo **Operaciones**, la opción **Gestionar reservas** te permite **buscar, revisar y actualizar el estado operativo de los files** creados en el área de Ventas.  
Aquí podrás consultar los servicios asociados, verificar saldos y asignar responsables operativos.

---

## 🔍 ¿Cómo buscar un file?

Ingresá a **Operaciones → Gestionar reservas**.  
En el buscador superior, escribí el **número de file** o parte del **nombre del cliente**.  
Luego presioná **Buscar**, y el sistema mostrará los **files encontrados**.

---

## 📋 ¿Qué muestra el resultado de la búsqueda?

Al realizar una búsqueda, el sistema devuelve una **lista de files encontrados**, cada uno representado por una **fila principal (azul)** que contiene la información general de la reserva.

### 🔹 Información del file (fila azul)

Cada encabezado azul corresponde a un **file** o **reserva** e incluye los siguientes datos:

- **Cliente:** nombre comercial o agencia.  
- **Reserva:** número de file (por ejemplo, `CT-317`).  
- **Status:** estado actual de la reserva (por ejemplo, *FPC*).  
- **Fecha de alta:** fecha de creación de la reserva.  
- **Neto:** monto total sin impuestos o comisiones.  
- **Cobro:** monto cobrado hasta el momento.  
- **Saldo:** diferencia pendiente (se muestra en rojo si está impaga).  
- **Vendedor:** usuario que generó la reserva.  
- **Operativo:** menú desplegable para asignar un responsable operativo.  
- **Checkbox:**  
  - **Controlado:** marca la reserva como verificada.  
  - **Inconsistente:** señala que hay información pendiente o errores.  

Acciones disponibles desde esta fila:
- **Enviar mail**  
- **Ver documentos adjuntos**

---

## 🔽 Al desplegar el file

Al expandir la fila azul, se muestra el **detalle de los servicios asociados a esa reserva**, con la siguiente información:

| SERVICIO | DESCRIPCIÓN DEL SERVICIO | TITULAR | FECHA IN/OUT | ACCIONES |
|-----------|---------------------------|----------|---------------|-----------|
| Tipo de servicio (HOT, EXC, TRN) | Nombre del servicio, prestador y proveedor | Nombre del pasajero | Fechas de ingreso y salida | ✏️ Editar / 📎 Adjuntar |

> Desde este listado se gestionan todos los servicios operativos vinculados al file, como alojamiento, excursiones o traslados.

<!-- ![Resultados en Gestionar reservas](/img/operaciones/resultados-gestionar-reservas.png) -->

---

## ⚙️ ¿Qué acciones puedo realizar?

- **Asignar operativo:** seleccioná un usuario responsable desde el menú desplegable.  
- **Marcar como controlado:** si la reserva fue verificada.  
- **Marcar como inconsistente:** si presenta errores o diferencias.  
- **Enviar mail:** permite enviar comunicación directamente al cliente o proveedor.  
- **Ver documentos adjuntos:** abre los archivos asociados al file.  
- **Editar servicios:** ingresar a un servicio puntual y modificar sus datos.  
- **Adjuntar archivos:** subir documentación específica del servicio (por ejemplo, vouchers o comprobantes).

---

## 🧾 Observaciones

- Los totales en rojo indican **saldo pendiente**.  
- Los archivos adjuntos se cargan por servicio, no por file completo.  
- Los cambios en estado (controlado/inconsistente) son **visibles para todos los usuarios con rol operativo**.  

---

:::tip
💡 Este módulo permite tener un seguimiento completo del estado de cada reserva: desde la creación del file en ventas hasta su control operativo final.
:::
