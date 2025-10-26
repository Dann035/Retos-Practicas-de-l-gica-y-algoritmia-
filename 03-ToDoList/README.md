# 🎯 Reto Nivel 3: El Anotador (API CRUD en Memoria)

Construir una API RESTful completa para gestionar una lista de tareas (To-Do list). La API debe correr en `Express.js` y persistir los datos en la memoria del servidor (usando variables globales).

## Requerimientos

### 1. Estado del Servidor

El servidor debe mantener el estado de las tareas usando dos variables globales:

* `let tareas = [];`
* `let proximoId = 1;`

Cada objeto `tarea` dentro del array `tareas` debe seguir el siguiente esquema:
```json
{
  "id": 1,
  "texto": "Completar el Reto Nivel 3",
  "completada": false
}