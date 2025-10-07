---
id: crear-plan
title: Crear plan
sidebar_label: Crear plan
---

## Crear plan de asistencia

Para crear un nuevo plan, seleccionar el prestador correspondiente y hacer clic en **Crear plan**.  
El sistema mostrará el formulario con las siguientes solapas:

### 🟩 Datos generales

- **Nombre del plan**  
- **Proveedor / Prestador**  
- **Descripción breve**  
- **Vigencia** (fecha desde / hasta)  
- **Moneda** (predeterminada o seleccionable)  
- **Estado** (activo / inactivo)

<!-- ![Datos Generales](/img/asistencias/crear-plan-datos.png) -->

### 🟩 Políticas de cancelación

Indicar condiciones generales y plazos.  
Puede agregarse texto libre o usar una plantilla predefinida.

### 🟩 Tarifas

Cargar tarifas según tipo de pasajero o rango etario.  
Ejemplo de estructura:

| Edad | Tipo pasajero | Monto (USD) | Vigencia | |
|------|----------------|-------------|-----------|-|
| 0–5  | Niño           | 10          | 01/01–31/12 | |
| 6–65 | Adulto         | 20          | 01/01–31/12 | |

> Las tarifas pueden cargarse manualmente o mediante importación masiva.

### 🟩 Fechas de vencimiento

Definir condiciones de pago o límites de confirmación:
- **Días después de la reserva**
- **Días antes de inicio del viaje**

### 🟩 Edades y ocupación

- Configurar **rango de edades** para aplicar reglas específicas por plan.
- Indicar cantidad máxima de pasajeros o cobertura por grupo.

### 🟩 Guardar y confirmar

Presionar **Guardar** para confirmar la creación.  
El sistema mostrará:  
> “El plan fue creado con éxito.”

<!-- ![Crear Plan](/img/asistencias/crear-plan.png) -->
