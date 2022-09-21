const divMensajeFinal = document.getElementById("mensajeFinal")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")

const divResultado = document.getElementById("resultado")
const divVersus = document.getElementById("versus")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
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

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotaJugador
let ataquesMokepon
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new Mokepon("Hipodoge","./imagenes/pokemon-17.svg",5)
let Capipepo = new Mokepon("Capipepo","./imagenes/pidgeot-seeklogo.com.svg",5)
let Ratigueya = new Mokepon("Ratigueya","./imagenes/pokemon-5.svg",5)
let Langostelvis = new Mokepon("Langostelvis","./imagenes/charizard-logo-C9856A6142-seeklogo.com.png",5)
let Tucapalma = new Mokepon("Tucapalma","./imagenes/butterfree-seeklogo.com.svg",5)
let Pydos = new Mokepon("Pydos","./imagenes/dragonair-logo-D994877077-seeklogo.com.png",5)

Hipodoge.ataques.push(
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

Capipepo.ataques.push(
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
)

Ratigueya.ataques.push(
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

Langostelvis.ataques.push(
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

Tucapalma.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

Pydos.ataques.push(
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

mokepones.push(Hipodoge,Capipepo,Ratigueya,Langostelvis,Tucapalma,Pydos)

function iniciarJuego() {
    
    divMensajeFinal.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    divResultado.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `<Label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <input type="radio" name="mascota" id=${mokepon.nombre} data-img="${mokepon.imagen}" />${mokepon.nombre}
        <img src=${mokepon.imagen} alt=${mokepon.nombre}>
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

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
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

    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"

    extraerAtaques(selectedId)
    seleccionarMascotaEnemigo()

    document.querySelector(".cuadro2").scrollIntoView({behavior:"smooth"});
    
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

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(0, mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
    spanImagenEnemigo.innerHTML = `<img class="imagen-selected" src="${mokepones[ataqueAleatorio].imagen}" alt="${mokepones[ataqueAleatorio].nombre}">`  
    
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {

    ataquesMokepon = `
        <button id="${ataque.id}" class="boton-ataque">${ataque.nombre}
        <img class="img-ataque" src="${ataque.img}"}>
        </button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
        
    })
    
}
function ataqueFuego(){

    ataqueJugador = "FUEGO"
    spanImagenAtaqueJugador = '<img id="imagen-fuego" src="./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png" class="Fuego">'
    ataqueAleatorioEnemigo()
    }

    function ataqueAgua(){
    ataqueJugador = "AGUA"
    spanImagenAtaqueJugador = '<img id="imagen-agua" src="./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png" class="Agua">'
    ataqueAleatorioEnemigo()
    }

    function ataqueTierra(){
    ataqueJugador = "TIERRA"
    spanImagenAtaqueJugador = '<img id="imagen-tierra" src="./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png" class="Tierra"></img>'

    ataqueAleatorioEnemigo()
    
}

function ataqueAleatorioEnemigo(){
    ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
        spanImagenAtaqueEnemigo = '<img id="imagen-fuego" src="./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png" class="Fuego">'


    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
        spanImagenAtaqueEnemigo = '<img id="imagen-agua" src="./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png" class="Agua">'

    } else {
        ataqueEnemigo = "TIERRA"
        spanImagenAtaqueEnemigo = '<img id="imagen-tierra" src="./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png" class="Tierra"></img>'
    }

    divResultado.style.display = "flex"
    divVersus.style.display = "none"

    pelea() 

}

function pelea(){

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")

    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" || ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" || ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA" ){
    crearMensaje("GANASTE") 
    vidasEnemigo = vidasEnemigo - 1
    spanVidasEnemigo.innerHTML = vidasEnemigo


    } else {
        crearMensaje("PERDISTE") 
        
        vidasJugador = vidasJugador - 1 //Es lo mismo que vidasJugador-= 1 o vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    document.querySelector("#resultado").scrollIntoView({behavior:"smooth"});

    revisarvidas()
}

function revisarvidas(){
    if (vidasEnemigo == 0){
        mensajeFinal('FELICITACIONES, ERES EL GANADOR')
        
    } else if (vidasJugador == 0){
        mensajeFinal('PERDISTE, VUELTE A INTENTARLO')
    }
}

function crearMensaje(resultadojuego){

    let parrafo = document.createElement("div")
    parrafo.innerHTML = resultadojuego   
    divResultado.appendChild(parrafo)

    let imagenataqueJugador = document.getElementById("img-ataque-jugador")
    let parrafo1 = document.createElement("div")
    parrafo1.innerHTML = spanImagenAtaqueJugador   
    imagenataqueJugador.appendChild(parrafo1)

    let imagenataqueEnemigo = document.getElementById("img-ataque-enemigo")
    let parrafo2 = document.createElement("div")
    parrafo2.innerHTML = spanImagenAtaqueEnemigo   
    imagenataqueEnemigo.appendChild(parrafo2)

}

function mensajeFinal(resultadoFinal){

    //let divMensajeFinal = document.getElementById("mensajeFinal")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal  
    
    divMensajeFinal.appendChild(parrafo)

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

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

window.addEventListener('load', iniciarJuego)

