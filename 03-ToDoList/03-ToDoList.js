import express from 'express'
import pc from 'picocolors'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001

const tasks = []
let nextId = 1

function validateNewTask (data) {
  if (!data.text && !data.complete) {
    return 'Faltan datos para crear la tarea'
  }
  if (typeof data.text !== 'string' && typeof data.complete !== 'boolean') {
    return 'Los datos de text tienen que ser de tipo string y los de complete (true o false)'
  }
  const isExist = tasks.find(task => task.id === nextId)
  if (isExist) {
    return 'Esta tarea ya existe'
  }
}

app.get('/', (req, res) => {
  return res.status(200).json({ 'msg ': 'BIENVENIDO a la To Do List' })
})

app.get('/tasks', (req, res) => {
  return res.status(200).json({
    msg: 'Estas son tus tareas :',
    task: tasks
  })
})

app.post('/tasks', (req, res) => {
  const data = req.body

  const msgValidateDate = validateNewTask(data)
  if (msgValidateDate) {
    return res.status(400).json({ msg: msgValidateDate })
  }

  const newTask = { id: nextId, text: data.text, complete: data.complete }
  tasks.push(newTask)

  if (tasks.length === nextId) {
    nextId++
  }

  return res.status(201).json({
    msg: 'Tarea creada con exito',
    task: newTask
  })
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(pc.red('Ah ocurrido un problema al escuchar el server..:', err))
  }
  console.log(pc.yellow('Servidor ejecutandose...'))
  console.log(pc.blue('Servidor escuchando en http://localhost:' + PORT))
})
