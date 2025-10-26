import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.import || 3001

let numeroSecreto = 0
let intentosDisponibles = 0

// Enpoint de presentacion del juego
app.get('/', (req, res) => {
  res.json(
    {
      intro: 'Hola bienvenido al juego de Adivinar el número desde RESTapi',
      nuevoGame: 'Para iniciar un nuevo juego tienes que acceder a /juego/nuevo',
      paraAdivinar: 'Y para poder jugar se usa /juevo/adivinar, enviando un numero en la request {number: 25}'
    })
})

// Endpoint con la lógica para iniciar un nuevo juego
app.post('/juego/nuevo', (req, res) => {
  numeroSecreto = Math.floor(Math.random() * 100) + 1
  intentosDisponibles = 10
  res.json({ msg: '¡Nuevo juego iniciado! Tienes 10 intentos para adivinar.' })
})

// Endpoin para poder intentar adivinar el número

app.post('/juego/adivinar', (req, res) => {
  res.end('Aqui va la logica del game')
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('Hubo un error al intentar escuchar el server' + err)
  }
  console.log('Server ejecutandose correctamente...')
  console.log(`Server iniciado en http://localhost:${PORT}`)
})
