import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.import || 3001

let numeroSecreto = 0
let intentosDisponibles = 0

function validateNumber(res, number) {
  if (!number) {
    return res.status(400).json({ msg: 'Debes enviar un número entre 1 y 100' })
  } else if (isNaN(number)) {
    return res.status(400).json({ msg: 'El valor enviado tiene que ser un número entre 1 y 100' })
  } else if (number < 1 || number > 100) {
    return res.status(400).json({ msg: 'El valor tiene que ser mayor que 1 y menor que 100' })
  } else {
    return true
  }
}

function WinnerOrLoser(number, secretNumber, intentos, res) {
  if (number === secretNumber) {
    res.status(200).json({ msg: '¡Ganaste! El número era ' + secretNumber })
    intentosDisponibles = 0
  }
  if (intentos <= 0) {
    return res.status(200).json({ msg: '¡Perdiste! Se acabaron los intentos. El número era ' + secretNumber })
  }
  intentosDisponibles--
}

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
  res.json({ msg: `¡Nuevo juego iniciado! Tienes ${intentosDisponibles} intentos para adivinar.` })
})

// Endpoin para poder intentar adivinar el número

app.post('/juego/adivinar', (req, res) => {
  const userNumber = req.body.numero
  if (validateNumber(res, userNumber)) {
    WinnerOrLoser(userNumber, numeroSecreto, intentosDisponibles, res)
    if (userNumber > numeroSecreto) {
      res.status(200).json({ msg: '¡Muy alto! Te quedan ' + intentosDisponibles + ' intentos.' })
    } else if (userNumber < numeroSecreto) {
      res.status(200).json({ msg: '¡Muy bajo! Te quedan ' + intentosDisponibles + ' intentos.' })
    }
  }
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('Hubo un error al intentar escuchar el server' + err)
  }
  console.log('Server ejecutandose correctamente...')
  console.log(`Server iniciado en http://localhost:${PORT}`)
})
