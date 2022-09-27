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

let mokepones = []
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
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataqueAleatorio
let ataqueAleatorio1
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
//let lienzo = mapa.getContext("2d")

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
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

Capipepo.ataques.push(
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
)

Ratigueya.ataques.push(
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

Langostelvis.ataques.push(
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

Tucapalma.ataques.push(
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
)

Pydos.ataques.push(
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fire', id: 'boton-fuego', img: "./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png"},
    { nombre: 'Water', id: 'boton-agua', img: "./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png"},
    { nombre: 'Ground', id: 'boton-tierra', img: "./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png"},
)

mokepones.push(Hipodoge,Capipepo,Ratigueya,Langostelvis,Tucapalma,Pydos)

function iniciarJuego() {
    
    
    divMensajeFinal.style.display = "none"
    sectionVerMapa.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    divResultado.style.display = "none"

    mokepones.forEach((mokepon) => {

        
        opcionDeMokepones = `<Label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <input type="radio" name="mascota" id=${mokepon.nombre} data-img="${mokepon.imagen}" />${mokepon.nombre}
        <img class="elegir" src=${mokepon.imagen} alt=${mokepon.nombre}><div class="div-poderes"><img class="poderes" src=${mokepon.ataques[0].img}><img class="poderes" src=${mokepon.ataques[1].img}><img class="poderes" src=${mokepon.ataques[2].img}><img class="poderes" src=${mokepon.ataques[3].img}><img class="poderes" src=${mokepon.ataques[4].img}></div>
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
    
    // sectionVerMapa.style.display = "flex"
    // let imagenDeCapipepo = new Image()
    // imagenDeCapipepo.src = Capipepo.imagen
    // lienzo.drawImage(
    //      imagenDeCapipepo,
    //      20,
    //      40,
    //      100,
    //      100
    // )
    
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
        spanImagenAtaqueJugador = '<img id="boton-fuego" src="./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png" class="Fuego">'
        
        
    } else if(boton.dataset.id === 'boton-agua') {
        ataqueJugador.push("WATER")
        console.log(ataqueJugador)
        jugadaJugador = "WATER"
        spanImagenAtaqueJugador = '<img id="boton-agua" src="./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png" class="Agua">'

    } else {
        ataqueJugador.push("GROUND")
        console.log(ataqueJugador)
        jugadaJugador = "GROUND"
        spanImagenAtaqueJugador = '<img id="boton-tierra" src="./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png" class="Tierra"></img>'

    }
    ataqueAleatorioEnemigo()
    //boton.style.background = '#3D3837'
    boton.disabled = true
    boton.removeEventListener('click', atacar)
}
    
function secuenciaAtaque() {

    botones.forEach((boton) =>{
        boton.addEventListener('click', atacar)
    })  
}

function seleccionarMascotaEnemigo(){
    ataqueAleatorio = aleatorio(0, mokepones.length-1)
    
    
    spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
    spanImagenEnemigo.innerHTML = `<img class="imagen-selected" src="${mokepones[ataqueAleatorio].imagen}" alt="${mokepones[ataqueAleatorio].nombre}">`  
    ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques
    secuenciaAtaque()
    
}
    
function ataqueAleatorioEnemigo(){
    ataqueAleatorio1 = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Fire"){
        ataqueEnemigo.push("FIRE")
        jugadaEnemigo = "FIRE"
        spanImagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1200px-Pokémon_Fire_Type_Icon.svg.png" class="Fuego">`
    }

    else if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Water"){
        ataqueEnemigo.push("WATER")
        jugadaEnemigo = "WATER"
        spanImagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1024px-Pokémon_Water_Type_Icon.svg.png" class="Agua">`
    }

     else if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Ground") {
        ataqueEnemigo.push("GROUND")
        jugadaEnemigo = "GROUND"
        spanImagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1200px-Pokémon_Ground_Type_Icon.svg.png" class="Tierra"></img>`
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

        if(jugadaJugador === jugadaEnemigo) {
            // indexAmbosOponentes(index, index)
            crearMensaje("TIE")   

        } else if(jugadaJugador === "FIRE" && jugadaEnemigo === "GROUND" || jugadaJugador === "WATER" && jugadaEnemigo === "FIRE" || jugadaJugador === "GROUND" && jugadaEnemigo ==="WATER" ){
        crearMensaje("YOU WON") 
        victoriasJugador++
        //spanVidasEnemigo.innerHTML = vidasEnemigo
        spanVictoriasJugador.innerHTML = victoriasJugador


        } else {
        crearMensaje("YOU LOST") 
        
        victoriasEnemigo++ //Es lo mismo que vidasJugador-= 1 o vidasJugador--
        spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        }
    
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

window.addEventListener('load', iniciarJuego)

