//const { application } = require("express")

const divMensajeFinal = document.getElementById("mensajeFinal")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionEligeTuAtaque = document.getElementById("elige-tu-ataque")

const divResultado = document.getElementById("resultado")
const divVersus = document.getElementById("versus")
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById("boton-revancha")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanImagenJugador = document.getElementById('imagen-jugador')
let selectedId
let imagenSelected
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanImagenEnemigo = document.getElementById("imagen-enemigo")
let selectedenemy
let imagenSelectedEne

const spanVictoriasJugador = document.getElementById("vidas-jugador")
const spanVictoriasEnemigo = document.getElementById("vidas-enemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

const botonArriba = document.getElementById("boton-arriba")
const botonIzquierda = document.getElementById("boton-izquierda")
const botonAbajo = document.getElementById("boton-abajo")
const botonDerecha = document.getElementById("boton-derecha")


let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let ataqueJugador = [] 
let jugadaJugador
let ataquesMokeponEnemigo = []
let ataqueEnemigo = []
let jugadaEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataqueAleatorio
let ataqueAleatorio1
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataquesDeTodos
let arrayAtaques = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let intervalo
let lienzo = mapa.getContext("2d")
let mapaBackground = new Image()
mapaBackground.src = './imagenes/mapa2.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 10
let imagenAtaqueJugador
let imagenAtaqueEnemigo

const anchoMaximoDelMapa = 520


if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
} 



alturaQueBuscamos = anchoDelMapa * 640 / 768

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, imagen, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let Hipodoge = new Mokepon("Hipodoge","./imagenes/pokemon-17.svg",5,"./imagenes/pokemon-17.svg")
let Capipepo = new Mokepon("Capipepo","./imagenes/pidgeot-seeklogo.com.svg",5,"./imagenes/pidgeot-seeklogo.com.svg")
let Ratigueya = new Mokepon("Ratigueya","./imagenes/pokemon-5.svg",5, "./imagenes/pokemon-5.svg")
let Langostelvis = new Mokepon("Langostelvis","./imagenes/charizard-logo-C9856A6142-seeklogo.com.png",5,"./imagenes/charizard-logo-C9856A6142-seeklogo.com.png")
let Tucapalma = new Mokepon("Tucapalma","./imagenes/butterfree-seeklogo.com.svg",5,"./imagenes/butterfree-seeklogo.com.svg")
let Pydos = new Mokepon("Pydos","./imagenes/dragonair-logo-D994877077-seeklogo.com.png",5,"./imagenes/dragonair-logo-D994877077-seeklogo.com.png")

const HIPODOGE_ATAQUES = [
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
]

Hipodoge.ataques.push(...HIPODOGE_ATAQUES)
//HipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES = [
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
]

Capipepo.ataques.push(...CAPIPEPO_ATAQUES)
//CapipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
]

Ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
//RatigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)

const LANGOSTELVIS_ATAQUES = [
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
]

Langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)
//LangostelvisEnemigo.ataques.push(...LANGOSTELVIS_ATAQUES)

const TUCAPALMA_ATAQUES = [
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
]

Tucapalma.ataques.push(...TUCAPALMA_ATAQUES)
//TucapalmaEnemigo.ataques.push(...TUCAPALMA_ATAQUES)

const PYDOS_ATAQUES = [
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"}, 
]

Pydos.ataques.push(...PYDOS_ATAQUES)
//PydosEnemigo.ataques.push(...PYDOS_ATAQUES)

mokepones.push(Hipodoge,Capipepo,Ratigueya,Langostelvis,Tucapalma,Pydos)

function iniciarJuego() {
    
    
    divMensajeFinal.style.display = "none"
    sectionVerMapa.style.display = "none"
   
    sectionReiniciar.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    divResultado.style.display = "none"

    mokepones.forEach((mokepon) => {
        let htmlPoderes = ""
        mokepon.ataques.forEach((poder) => {
            htmlPoderes += `<img class="poderes" src=${poder.img}>`
        })
        
        opcionDeMokepones = `<Label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <input type="radio" name="mascota" id=${mokepon.nombre} data-img="${mokepon.imagen}" />
        ${mokepon.nombre}
        <img class="elegir" src=${mokepon.imagen} alt=${mokepon.nombre}>
        <div class="div-poderes">
            ${htmlPoderes}
        </div>
        </Label>
        `
    
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")
        inputPydos = document.getElementById("Pydos")
          
    })

        botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
        botonReiniciar.addEventListener('click', reiniciarJuego)
        
        unirseAlJuego()
}

function unirseAlJuego(){

    fetch("http://localhost:8080/unirse")
        .then(function (res){
            if (res.ok) {
            res.text()
                .then(function(respuesta){
                    console.log(respuesta) 
                    jugadorId = respuesta  
                })
            }
        })
}


function seleccionarMascotaJugador() {

    if(inputHipodoge.checked) {
        selectedId = inputHipodoge.id
        imagenSelected = inputHipodoge.dataset.img

    } else if(inputCapipepo.checked) {
        selectedId = inputCapipepo.id
        imagenSelected = inputCapipepo.dataset.img
        
    } else if(inputRatigueya.checked) {
        selectedId = inputRatigueya.id
        imagenSelected = inputRatigueya.dataset.img

    } else if(inputLangostelvis.checked) {
        selectedId = inputLangostelvis.id
        imagenSelected = inputLangostelvis.dataset.img

    } else if(inputTucapalma.checked) {
        selectedId = inputTucapalma.id
        imagenSelected = inputTucapalma.dataset.img

    } else if(inputPydos.checked) {
        selectedId = inputPydos.id
        imagenSelected = inputPydos.dataset.img

    } else {
        alert("Debes seleccionar un MOKEPON")
        location.reload()
    }

    if (selectedId) {
        spanMascotaJugador.innerHTML = selectedId 
        spanImagenJugador.innerHTML = `<img class="imagen-selected" src="${imagenSelected}" alt="${selectedId}">`
    } 

    seleccionarMokepon(selectedId)

    // sectionSeleccionarAtaque.style.display = "flex"
    
    sectionVerMapa.style.display = "flex"
    
    sectionSeleccionarMascota.style.display = "none"

    extraerAtaques(selectedId)
    iniciarMapa()
    

    document.querySelector(".cuadro2").scrollIntoView({behavior:"smooth"});
    
}

function seleccionarMokepon(selectedId){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon:selectedId
        })
    })
}

function extraerAtaques(selectedId){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (selectedId === mokepones[i].nombre) {
        ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
    
}


function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {

    ataquesMokepon = `
        <button data-id="${ataque.id}" class="boton-ataque BAtaque">${ataque.nombre}
        <img class="img-ataque" src="${ataque.img}"}>
        </button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
        
    })
    
    
    botonFuego = document.getElementById('boton-fuego') 
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
    
}

function atacar(e) {
    const boton = e.currentTarget;
    
    if (boton.dataset.id === 'boton-fuego') {
        ataqueJugador.push("FIRE")
        jugadaJugador = "FIRE"
        console.log(ataqueJugador)
        imagenAtaqueJugador = '<img id="boton-fuego" src="./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png" class="Fuego">'
        
        
    } else if(boton.dataset.id === 'boton-agua') {
        ataqueJugador.push("WATER")
        console.log(ataqueJugador)
        jugadaJugador = "WATER"
        imagenAtaqueJugador = '<img id="boton-agua" src="./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png" class="Agua">'

    } else {
        ataqueJugador.push("GROUND")
        console.log(ataqueJugador)
        jugadaJugador = "GROUND"
        imagenAtaqueJugador = '<img id="boton-tierra" src="./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png" class="Tierra"></img>'

    }

    let spanImagenAtaqueJugador = document.getElementById("img-ataque-jugador")
    let parrafo1 = document.createElement("div")
    parrafo1.innerHTML = imagenAtaqueJugador   
    spanImagenAtaqueJugador.appendChild(parrafo1)

    //let spanImagenAtaqueEnemigo = document.getElementById("img-ataque-enemigo")
    //let parrafo2 = document.createElement("div")
    //spanImagenAtaqueEnemigo.appendChild(parrafo2)
    //parrafo2.innerHTML = imagenAtaqueJugador  

    //console.log(imagenAtaqueEnemigo)

        if (ataqueJugador.length === 5) {
            enviarAtaques()
            
            //crear variable obteniendo los datos de imagen y llamarlos en resultado del juego
        }
    
    //ataqueAleatorioEnemigo()
    //boton.style.background = '#3D3837'
    
    boton.disabled = true
    boton.removeEventListener('click', atacar)
}
    
function secuenciaAtaque() {
    

    botones.forEach((boton) =>{
        boton.addEventListener('click', atacar)
    })  
}

function enviarAtaques() {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)

}

function obtenerAtaques() {
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res) {
            if(res.ok) {
                res.json()
                .then(function ({ ataques }) {
                    
                    if (ataques.length === 5) {
                        ataqueEnemigo = ataques
                        console.log(ataqueEnemigo)
                        
                         
                        
                        pelea()
                        divResultado.style.display = "flex"
                        divVersus.style.display = "none"

                    }
                })
            }
    })
}


function seleccionarMascotaEnemigo(enemigo){
    //ataqueAleatorio = aleatorio(0, mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    spanImagenEnemigo.innerHTML = `<img class="imagen-selected" src="${enemigo.imagen}" alt="${enemigo.nombre}">`  
    //spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
    //spanImagenEnemigo.innerHTML = `<img class="imagen-selected" src="${mokepones[ataqueAleatorio].imagen}" alt="${mokepones[ataqueAleatorio].nombre}">`  
    ataquesMokeponEnemigo = enemigo.ataques
    
    secuenciaAtaque()
    
}
    
function ataqueAleatorioEnemigo(){
    console.log()
    ataqueAleatorio1 = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Fire"){
        ataqueEnemigo.push("FIRE")
        jugadaEnemigo = "FIRE"
        imagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png" class="Fuego">`
    }

    else if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Water"){
        ataqueEnemigo.push("WATER")
        jugadaEnemigo = "WATER"
        imagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png" class="Agua">`
    }

     else if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Ground") {
        ataqueEnemigo.push("GROUND")
        jugadaEnemigo = "GROUND"
        imagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png" class="Tierra"></img>`
    }
    
    console.log(ataqueEnemigo)
    ataquesMokeponEnemigo.splice([ataqueAleatorio1],1)

    divResultado.style.display = "flex"
    divVersus.style.display = "none"

    pelea()
}

function iniciarpelea() {
       if (ataqueJugador.length === 5) {
           pelea()
       }
    
    }

function pelea(){

        clearInterval(intervalo)

        //ataqueJugador vs ataqueEnemigo
        ataqueJugador.map((jugadaJugador, index) => {
            const jugadaEnemigo2 = ataqueEnemigo[index]
            console.log("Analizando jugada", jugadaJugador,"vs", jugadaEnemigo2)

            if(jugadaJugador === jugadaEnemigo2) {
                // indexAmbosOponentes(index, index)
                crearMensaje("TIE")   
    
            } else if(jugadaJugador === "FIRE" && jugadaEnemigo2 === "GROUND" || jugadaJugador === "WATER" && jugadaEnemigo2 === "FIRE" || jugadaJugador === "GROUND" && jugadaEnemigo2 ==="WATER" ){
                crearMensaje("YOU WON") 
                victoriasJugador++
                //spanVidasEnemigo.innerHTML = vidasEnemigo
                spanVictoriasJugador.innerHTML = victoriasJugador
    
    
            } else {
                crearMensaje("YOU LOST") 
                
                victoriasEnemigo++ //Es lo mismo que vidasJugador-= 1 o vidasJugador--
                spanVictoriasEnemigo.innerHTML = victoriasEnemigo
            }
        })

    
    document.querySelector("#resultado").scrollIntoView({behavior:"smooth"});

    revisarvidas()
}
    
function revisarvidas(){

    if(victoriasJugador === 3){
        mensajeFinal('CONGRATULATIONS, YOU ARE THE WINNER')
        
    } else if (victoriasEnemigo === 3) {
        mensajeFinal('YOU LOST, TRY AGAIN')
    
    } else if(ataqueJugador.length > 4) {
        
        if (victoriasJugador > victoriasEnemigo) {
            mensajeFinal('CONGRATULATIONS, YOU ARE THE WINNER')
            
        } else if (victoriasEnemigo > victoriasJugador) {
            mensajeFinal('YOU LOST, TRY AGAIN')
        
        } else {
        mensajeFinal('TIE, PLAY AGAIN')
        }
    }
}
function crearMensaje(resultadojuego) {

    let parrafo = document.createElement("div")
    parrafo.innerHTML = resultadojuego   
    divResultado.appendChild(parrafo)

}

function mensajeFinal(resultadoFinal){

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal  
    
    divMensajeFinal.appendChild(parrafo)

    // function deshabilitarBoton(btn) {
    //     btn.disabled = true 
    // }

//    botones.forEach(deshabilitarBoton)

    sectionEligeTuAtaque.style.display = "none"
    sectionReiniciar.style.display = "block"
    divMensajeFinal.style.display = "flex"

    document.querySelector("#mensajeFinal").scrollIntoView({behavior:"smooth"});

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    //HipodogeEnemigo.pintarMokepon()
    //CapipepoEnemigo.pintarMokepon()
    //RatigueyaEnemigo.pintarMokepon()
    //LangostelvisEnemigo.pintarMokepon()
    //TucapalmaEnemigo.pintarMokepon()
   //PydosEnemigo.pintarMokepon()

    mokeponesEnemigos.forEach(function (mokepon) {
            if(mokepon != undefined) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
            }
    })

}

function enviarPosicion(x, y) { 
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            x,
            y
        })

    })
    .then(function(res) {
        if(res.ok) {
            res.json()
                .then(function ( {enemigos} ){
                    //console.log(enemigos)
                    mokeponesEnemigos = enemigos.map(function (enemigo) {
                        let mokeponEnemigo = null
                        if (enemigo.mokepon != undefined) {
                            const mokeponNombre = enemigo.mokepon.nombre || ""
                            if (mokeponNombre === "Hipodoge") {
                                mokeponEnemigo = new Mokepon("Hipodoge","./imagenes/pokemon-17.svg",5,"./imagenes/pokemon-17.svg", enemigo.id)
                            } else if (mokeponNombre === "Capipepo"){
                                mokeponEnemigo = new Mokepon("Capipepo","./imagenes/pidgeot-seeklogo.com.svg",5,"./imagenes/pidgeot-seeklogo.com.svg", enemigo.id) 
                            } else if (mokeponNombre === "Ratigueya"){
                                mokeponEnemigo = new Mokepon("Ratigueya","./imagenes/pokemon-5.svg",5, "./imagenes/pokemon-5.svg", enemigo.id) 
                            } else if (mokeponNombre === "Langostelvis"){
                                mokeponEnemigo = new Mokepon("Langostelvis","./imagenes/charizard-logo-C9856A6142-seeklogo.com.png",5,"./imagenes/charizard-logo-C9856A6142-seeklogo.com.png", enemigo.id)
                            } else if (mokeponNombre === "Tucapalma"){
                                mokeponEnemigo = new Mokepon("Tucapalma","./imagenes/butterfree-seeklogo.com.svg",5,"./imagenes/butterfree-seeklogo.com.svg", enemigo.id)
                            } else if (mokeponNombre === "Pydos") {
                                mokeponEnemigo = new Mokepon("Pydos","./imagenes/dragonair-logo-D994877077-seeklogo.com.png",5,"./imagenes/dragonair-logo-D994877077-seeklogo.com.png", enemigo.id)
                            }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        //console.log( {mokeponEnemigo} )
                        
                        return mokeponEnemigo
                        }
                        
                    })
                    console.log( {mokeponesEnemigos} )
                    
                })
            }
    })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
    botonDerecha.style.backgroundColor = '#FFCC01'
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
    botonIzquierda.style.backgroundColor = '#FFCC01'
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
    botonAbajo.style.backgroundColor = '#FFCC01'
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
    botonArriba.style.backgroundColor = '#FFCC01'
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
    botonDerecha.style.backgroundColor = 'white'
    botonIzquierda.style.backgroundColor = 'white'
    botonAbajo.style.backgroundColor = 'white'
    botonArriba.style.backgroundColor = 'white'
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
        default:
            break
    }

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
}

function iniciarMapa(){

mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
intervalo = setInterval(pintarCanvas, 50)
//enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
window.addEventListener('keydown', sePresionoUnaTecla)
window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (selectedId === mokepones[i].nombre) {
        return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    console.log("revisarColision")
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = enemigo.x + enemigo.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    
    if(
        abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
        ) {
            return
        }
        
        //debugger
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("Se detecto una colision")

    enemigoId = enemigo.id

    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
    

    }



window.addEventListener('load', iniciarJuego)

