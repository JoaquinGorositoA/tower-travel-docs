---
id: enviar-mails
title: ¿Cómo notifico al proveedor?
sidebar_label: ¿Cómo notifico al proveedor?
---

## Envío de correos

El módulo **Operaciones** permite enviar distintos tipos de correos automáticos o personalizados a clientes, agencias y prestadores.

### Tipos de correo disponibles

1. **Solicitud**
   - Utilizado para requerir disponibilidad o información adicional.  
   - Incluye datos del servicio, fechas y observaciones.

2. **Confirmación**
   - Se envía al prestador o pasajero para confirmar la reserva.  
   - Contiene número de file, nombre del pasajero y fechas.

3. **Modificación**
   - Informa cambios en el itinerario, horario o condiciones del servicio.  
   - Incluye comentario del operador y datos actualizados.

4. **Cancelación**
   - Se genera automáticamente o de forma manual.  
   - Notifica la baja del servicio y condiciones aplicadas.

<!-- ![Tipos de correos](/img/operaciones/mails/tipos.png) -->

---

## Plantillas de correo

Cada tipo de correo posee una plantilla predefinida que puede editarse antes del envío.  
Los campos dinámicos (ej.: *nombre del cliente, fecha, servicio*) se completan automáticamente.

> Las plantillas se configuran desde el área de administración y pueden adaptarse a cada operador o idioma.

---

## Confirmación de envío

Al presionar **Enviar**, el sistema mostrará el mensaje:

> “El correo fue enviado con éxito.”

Si ocurre un error, se visualizará una alerta indicando el motivo (falta de dirección, error de servidor, etc.).
