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
let selected
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanImagenEnemigo = document.getElementById("imagen-enemigo")
let selectedenemy

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

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
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

Capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

Ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
)

Langostelvis.ataques.push(
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

Tucapalma.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

Pydos.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(Hipodoge,Capipepo,Ratigueya,Langostelvis,Tucapalma,Pydos)

function iniciarJuego() {
    
    divMensajeFinal.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    divResultado.style.display = "none"

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `<Label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
        <input type="radio" name="mascota" id=${Mokepon.nombre} />${Mokepon.nombre}
        <img src=${Mokepon.imagen} alt=${Mokepon.nombre}>
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
        selected = "Hipodoge"
        spanImagenJugador.innerHTML = '<img id="img-hipodoge" src="./imagenes/pokemon-17.svg" alt="Hipodoge">'

    } else if(inputCapipepo.checked) {
        selected = "Capipepo"
        spanImagenJugador.innerHTML = '<img id="img-capipepo" src="./imagenes/pidgeot-seeklogo.com.svg" alt="Hipodoge">'
        
    } else if(inputRatigueya.checked) {
        selected = "Ratigueya"
        spanImagenJugador.innerHTML = '<img id="img-ratigueya" src="./imagenes/pokemon-5.svg" alt="Hipodoge">'

    } else if(inputLangostelvis.checked) {
        selected = "Langostelvis"
        spanImagenJugador.innerHTML = '<img id="img-langostelvis" src="./imagenes/charizard-logo-C9856A6142-seeklogo.com.png" alt="Hipodoge">'

    } else if(inputTucapalma.checked) {
        selected = "Tucapalma"
        spanImagenJugador.innerHTML = '<img id="img-tucapalma" src="./imagenes/butterfree-seeklogo.com.svg" alt="Hipodoge">'

    } else if(inputPydos.checked) {
        selected = "Pydos"
        spanImagenJugador.innerHTML = '<img id="img-pydos" src="./imagenes/dragonair-logo-D994877077-seeklogo.com.png" alt="Hipodoge">'

    } else {
        alert("Debes seleccionar un MOKEPON")
        location.reload()
    }

    if (selected) {
        spanMascotaJugador.innerHTML = selected 
    } 

    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"

    seleccionarMascotaEnemigo()

    document.querySelector(".cuadro2").scrollIntoView({behavior:"smooth"});
    
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)

    if(ataqueAleatorio == 1) {
        selectedenemy = "Hipodoge"
        spanImagenEnemigo.innerHTML = '<img id="img-hipodoge" src="./imagenes/pokemon-17.svg" alt="Hipodoge">'

    } else if(ataqueAleatorio == 2){
        selectedenemy = "Capipepo"
        spanImagenEnemigo.innerHTML = '<img id="img-capipepo" src="./imagenes/pidgeot-seeklogo.com.svg" alt="Hipodoge">'

    } else if(ataqueAleatorio == 3){
        selectedenemy = "Ratigueya"
        spanImagenEnemigo.innerHTML = '<img id="img-ratigueya" src="./imagenes/pokemon-5.svg" alt="Hipodoge">'

    } else if(ataqueAleatorio == 4){
        selectedenemy = "Langostelvis"
        spanImagenEnemigo.innerHTML = '<img id="img-langostelvis" src="./imagenes/charizard-logo-C9856A6142-seeklogo.com.png" alt="Hipodoge">'

    } else if(ataqueAleatorio == 5){
        selectedenemy = "Tucapalma"
        spanImagenEnemigo.innerHTML = '<img id="img-tucapalma" src="./imagenes/butterfree-seeklogo.com.svg" alt="Hipodoge">'

    } else {
        selectedenemy = "Pydos"
        spanImagenEnemigo.innerHTML = '<img id="img-pydos" src="./imagenes/dragonair-logo-D994877077-seeklogo.com.png" alt="Hipodoge">'
    } 
    
    if (selectedenemy){
        spanMascotaEnemigo.innerHTML = selectedenemy
    }
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
    return Math.floor(Math.random() * (max - min + 1)+ 1)
}

window.addEventListener('load', iniciarJuego)

