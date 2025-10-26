# 🎯 El Reto: Nivel 2 - El Adivinador (Versión API)
La Misión: Crear una API que maneje un juego de "adivina el número". El servidor "piensa" un número y el cliente (Postman) intenta adivinarlo.

### 1. El Estado del Servidor
Igual que antes, define tus variables de estado globales (arriba, fuera de las rutas):

```javascript
  let numeroSecreto = 0;
  let intentosRestantes = 0;
```
### 2. Endpoint 1: El "Inicio" (POST /juego/nuevo)
Necesitas una ruta para (re)iniciar el juego.

Ruta: POST /juego/nuevo

Lógica:

Genera un número secreto nuevo (del 1 al 100).

Pista: numeroSecreto = Math.floor(Math.random() * 100) + 1;

Reinicia los intentos.

intentosRestantes = 10;

Responde con un JSON que confirme el inicio.

Ej: { "mensaje": "¡Nuevo juego iniciado! Tienes 10 intentos para adivinar." }

3. Endpoint 2: El "Intento" (POST /juego/adivinar)
Esta es la ruta principal. Aquí es donde recibes el número del usuario.

Ruta: POST /juego/adivinar

Input: Esta vez, necesitas leer el req.body. El usuario (Postman) te enviará un JSON así:

JSON

{
    "numero": 45
}
Pista: Vas a leer ese 45 usando const numeroDelUsuario = req.body.numero;

Lógica Principal (¡Aquí está la candela!):

Chequeo 1: ¿Quedan intentos?

Si intentosRestantes <= 0, responde que el juego terminó y que debe iniciar uno nuevo. (Ej: { "mensaje": "¡Juego terminado! Inicia uno nuevo en /juego/nuevo" })

Si quedan intentos, resta 1 a intentosRestantes.

Consigue el numeroDelUsuario del req.body.

Chequeo 2 (La Lógica del Juego):

Si numeroDelUsuario === numeroSecreto (¡Ganó!):

Responde con un mensaje de victoria (Ej: { "mensaje": "¡Ganaste! El número era " + numeroSecreto }).

Opcional (buena práctica): Pon intentosRestantes = 0; para que no pueda seguir jugando.

Si intentosRestantes === 0 (¡Perdió!):

Responde que perdió y revela el número (Ej: { "mensaje": "¡Perdiste! Se acabaron los intentos. El número era " + numeroSecreto }).

Si numeroDelUsuario > numeroSecreto (¡Muy alto!):

Responde que es muy alto y cuántos intentos le quedan (Ej: { "mensaje": "¡Muy alto! Te quedan " + intentosRestantes + " intentos." }).

Si numeroDelUsuario < numeroSecreto (¡Muy bajo!):

Responde que es muy bajo y cuántos intentos le quedan (Ej: { "mensaje": "¡Muy bajo! Te quedan " + intentosRestantes + " intentos." }).

¡Listo, asere! Ahí tienes el plano. Acuérdate de usar Postman:

Primero llamas a POST /juego/nuevo para empezar.

Luego llamas a POST /juego/adivinar (enviando el JSON en el body) varias veces hasta que ganes o pierdas.

¡Rómpelo! Y me avisas cómo te queda ese código. ¡Dale!