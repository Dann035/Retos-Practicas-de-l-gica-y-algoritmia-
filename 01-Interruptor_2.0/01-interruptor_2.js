import express from 'express'

const app = express()
app.use(express.json())

// Lee el puerto de las variables de entorno o usa 3001 por defecto
const PORT = process.env.PORT || 3001

let contador = 0

// Obtener el valor actual del contador
app.get('/contador', (req, res) => {
  res.status(200).json({ valor: contador })
})

// Incrementar el contador
app.post('/contador/incrementar', (req, res) => {
  contador++
  res.status(200).json({
    msg: 'El contador ha incrementado en +1',
    valor: contador
  })
})

// Decrementar el contador
app.post('/contador/decrementar', (req, res) => {
  contador--
  res.status(200).json({
    msg: 'El contador ha decrementado en -1',
    valor: contador
  })
})

// Restablecer el contador a 0
app.post('/contador/reset', (req, res) => {
  contador = 0
  res.status(200).json({
    msg: 'Contador restablecido a 0',
    valor: contador
  })
})

// Asignar un valor específico al contador
app.put('/contador', (req, res) => {
  const { valor } = req.body
  if (typeof valor !== 'number') {
    return res.status(400).json({ error: 'El valor proporcionado debe ser un número.' })
  }
  contador = valor
  res.status(200).json({
    msg: `El contador se ha establecido en ${valor}`,
    valor: contador
  })
})

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err)
    return
  }
  console.log('Servidor ejecutándose...')
  console.log(`Servidor habilitado en http://localhost:${PORT}`)
})
