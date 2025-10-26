const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log("Solicitando saludo", req.body);
    res.end("Hola Nodejs HTTP");
})

server.listen(0, (err, res) => {
    console.log("Server bien duro ejecutandose en http://localhost:" + server.address().port);
})