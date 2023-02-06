// Importamos Express desde la carpeta node_modules
const express = require("express")
const cors = require("cors") 
//llamar librería para decirle que el acceso es seguro al servidor

//Creamos la aplicación Express
const app = express()
app.use(cors())
//Usar la librería
app.use(express.json())
//habilitar la capacidad de recibir peticiones post que traigan contenido en formato json

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }

    asignarMokepon(mokepon) {
        this.mokepon = mokepon
    }

    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques) {
        this.ataques = ataques
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")
    
    res.send(id)
})


app.get("/limpiar", (req, res) => {

    jugadores.length = 0

    res.setHeader("Access-Control-Allow-Origin", "*")
    
    res.send('servidor Reiniciado')
})

app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon
    console.log(nombre)
    const mokepon = new Mokepon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    console.log(jugadorIndex)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || ""
    const y = req.body.y || ""

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    console.log(jugadorIndex)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })

})

//las variables req (la peticion) y res el objeto que permite manejar las respustas hacia el usuario.
//lo que estamos diciendo es que cuando en la URL raíz reciba una petición responda "Hola"

app.post("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []
    
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }

    res.end()
})

app.get("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})

//Le decimos que escuche en el puerto 8080 las peticiones de los clientes para que todo el tiempo pueda responderle.