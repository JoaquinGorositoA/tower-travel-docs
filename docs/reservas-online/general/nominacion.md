---
id: nominacion
title: Nominación y Finalización
sidebar_label: Nominación y Finalización
---

# Nominación y Finalización
**Objetivo:** identificar al titular, cargar los datos obligatorios de cada pasajero y asignar los servicios antes de **reservar**.

## Dónde aparece
Desde **Carrito** → **INICIAR RESERVA** (o **NOMINAR**, según entorno).

## 1) Elegir titular
En la grilla de **Nominaciones**, seleccionar el **titular** (radio en la columna correspondiente).

## 2) Datos obligatorios por pasajero
Completar, por cada fila:
- **Tipo** de pasajero  
- **Nombre** y **Apellido**  
- **Documento**  
- **Nacionalidad**

<!-- > Otros campos (fecha de nacimiento, teléfono, email) pueden mostrarse según configuración. -->

## 3) Asignar servicios a cada pasajero
- Columna **Acciones** → **Agregar servicios**.
- Se abre el modal **Seleccionar servicios para [Nombre]** con:
  - Botón **TILDAR TODOS**
  - Lista de servicios del carrito (checklist)
  - **CANCELAR** / **CONFIRMAR**
- Al **CONFIRMAR**:
  - La columna **Servicios** muestra lo asignado para ese pasajero.
  - En la parte inferior se generan los **paneles por servicio** con la asignación visible (por ejemplo, por habitación/turno/categoría si corresponde).
- Volver a **Acciones** y usar **Guardar** para conservar los cambios de la fila (o **Cancelar** para descartarlos).

## 4) Controles inferiores (paneles por servicio)
Los paneles listan cada **servicio** del carrito y permiten verificar rápidamente qué pasajeros están asignados.  
Si el servicio lo requiere, ahí mismo se ajusta información adicional (por ejemplo, categoría **Adulto/Menor** o selectores específicos).

## Botones al pie (Nominación)
- **CANCELAR**: sale sin confirmar (puede solicitar confirmación si hay cambios sin guardar).
- **GUARDAR E IR AL CARRITO**: guarda las nominaciones y regresa a **Carrito**.
- **RESERVAR**: valida datos y disponibilidad, y crea la reserva.

## Validaciones habituales
- **Titular** seleccionado.  
- **Datos obligatorios** completos en cada pasajero.  
- **Asignación** de servicios coherente (solo quienes usarán cada servicio).  
- **Documento** en formato válido (y no duplicado para el mismo file).  
- **Edades/categorías** compatibles con las reglas del servicio (si aplica).