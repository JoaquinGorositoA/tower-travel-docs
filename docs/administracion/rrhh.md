---
title: RRHH
sidebar_label: RRHH
---

# RRHH

## Esquema de Comisiones

**Descripción:**  
A través de esta opción se podrá acceder al Esquema de Comisiones del vendedor/promotor de Tower, dependiendo de la unidad de Negocio.  
En la barra lateral de navegación, hacer clic en **RRHH**, luego **Esquema de Comisiones**.

**Grilla (columnas):**
- Unidad de Negocio
- Nombre del Esquema
- Moneda
- Vigencia
- Acciones

**Acciones:**
- **Editar:** abre un formulario para actualizar la información requerida y, debajo, la grilla de **Rangos**.
- **Eliminar rango (icono en Acciones):** elimina un rango de la grilla (pide confirmación).

**Editar — Campos:**
- Unidad de Negocio
- Nombre del Esquema
- Moneda
- Vigencia

**Rangos (listado dentro del esquema):**
- Agregar rango (**Add**): se agrega a la grilla.
- Se puede agregar más de un rango (histórica).

**Botones:**
- **Grabar:** “Registro actualizado exitosamente”.
- **Cancelar:** salir sin guardar.

**Nota:**  
Para calcular la comisión, en caso de moneda extranjera, se tomará en cuenta el **tipo de cambio** de la **fecha de emisión** de la operación (solo para venta).

---

## Asignación Esquema de Comisiones

**Descripción:**  
Permite asignar vendedores o promotores al esquema configurado.  
En la barra lateral de navegación, hacer clic en **RRHH**, luego **Asignación Esquema de Comisiones**.

**Búsqueda — Campos:**
- Unidad de Negocio

**Listado de Vendedores/Asesores**
- **Grilla (columnas):**
  - Nombre (con checkbox para seleccionar)
  - Moneda
  - Unidad de negocio
  - Puntos Período de pago
  - Acción (icono para registrar/asignar)
- **Acción:** asigna al vendedor al Esquema (se listan los asignados).
- **Guardar:** “Registro guardado exitosamente”.

**Quitar Vendedor (acción):**
- Quita al vendedor del esquema.

**Otras acciones:**
- **Agregar vendedores / promotores:** registra un vendedor/promotor si no existe en la lista.
- **Acciones (iconos de usuario):** editar información.

**Botones:**
- **Guardar**
- **Cancelar**

**Listado de Promotores**
- **Grilla (columnas):**
  - Nombre (checkbox)
  - Unidad de negocio
  - Moneda
  - Puntos período de pago
  - Acción (icono)
- **Acción:** asigna al promotor al Esquema (igual a vendedores).

---

## Detalle de Comisiones

**Descripción:**  
Acceso al **detalle de comisiones** generadas por vendedor/promotor.

**Grilla principal (columnas):**
- Unidad de Negocio
- Vendedor/Promotor
- Tipo de operación (venta, cobranzas, otros)
- Periodo de pago
- Moneda
- Estado (Generado, Aprobado, Anulado, Pagado)
- Monto comisionable
- Monto comisión
- Tareas (Acciones)
- Sueldo del vendedor/promotor para el periodo seleccionado

**Desplegable (detalle):**
- **Grilla secundaria (columnas):**
  - Entidad proveedor/cliente
  - Moneda comisionable
  - Monto comisionable
  - % de comisión
  - Monto de comisión
  - Unidad de Negocio
  - Fecha
  - Tipo de operación
- **Exportar Excel (icono en Acciones):** exporta el detalle seleccionado.

**Tareas — Estados:**
- **Generado:** procesos para actualización (Cómo se Genera).
- **Aprobado:** supervisor autoriza la liquidación de vendedores/promotores.
- **Pagado:** administración registra el pago.
- **Anulado:** deshabilita una liquidación aprobada (siempre que no esté pagada).

---

## Reporte de comisiones

**Filtros:**
- Moneda
- Unidad de Negocio
- Desde el período de pago
- Hasta el período de pago

La etiqueta **Vendedor/Promotor** permite alternar entre **Reporte de comisiones por Vendedores** o **por Promotores**.

**Acciones:**
- **Filtrar**
- **Limpiar** (vacía el filtro)

**Reporte — Vendedor (campos):**
- Vendedor
- Unidad de Negocio
- Período de pago
- Comisiones por Venta
- Comisiones por Cobranzas
- Monto de comisión
- Monto de Sueldo
- Monto Neto a pagar

**Reporte — Promotor (campos):**
- Promotor
- Unidad de Negocio
- Período de pago
- Monto de comisión
- Monto de Sueldo

*(Incluye un resumen en la parte inferior.)*

---

## Configuración de comisiones

**Descripción:**  
Configura reglas generales por **Unidad de Negocio** (alcance general).  
En la barra lateral: **RRHH → Configuración de comisiones**.

**Campos:**
- Unidad de negocio
- Moneda
- Porcentaje
- Importe
- Plazo de Cobranza
- Periodo
- Sueldo por periodo

**Compatibilidades de configuración:**
- Porcentaje vs Plazo de cobranza
- Importe vs Plazo de cobranza

**Botones:**
- **Guardar:** aplica la regla de carácter general
- **Cancelar**

**Resultados (grilla):**
- Moneda
- Porcentaje
- Importe
- Plazo de Cobranzas
- Periodo
- Sueldo de periodo

---

## Prorrateo de Sueldos

**Descripción:**  
Permite distribuir el sueldo (monto fijo) entre salario y comisión variable según objetivos.  
Ruta: **RRHH → Prorrateo de sueldos**.

**Campos:**
- Unidad de Negocio
- Vendedor
- Promotor
- Porcentaje
- Periodo de pago
