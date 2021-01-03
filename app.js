//VARAIBLES

const header = document.querySelector(".header");
const inputDia = document.querySelector(".dia");
const inputMes = document.querySelector(".mes");
const inputAnio = document.querySelector(".anio");
const button = document.querySelector(".header-button");
const divError = document.querySelector(".errores");
const main = document.querySelector("main");
let control = false;
let fechaNacimiento = [];

//LISTENERS

document.addEventListener("DOMContentLoaded", paginaCargada);
button.addEventListener("click", seDioClick);
inputDia.addEventListener("blur", verificarDia);
inputMes.addEventListener("blur", verificarMes);
inputAnio.addEventListener("blur", verificarAnio);

//Functions

function paginaCargada(e) {
    main.classList.add("hidden");
}

function seDioClick(e) {
    header.style.display = "none";
    let fechaActual = new Date();
    let fechaDeNacimiento = new Date(
        `${fechaNacimiento[2]}/0${fechaNacimiento[1]}/${fechaNacimiento[0]}`
    );
    let resta = fechaActual.getTime() - fechaDeNacimiento.getTime();
    resta = resta / 1000 / 86400 / 7;
    mostrarWeeks(resta);
}

function verificarDia(e) {
    if (e.target.value > 0 && e.target.value < 31) {
        correcto(e.target);
        let diaNacimiento = parseInt(e.target.value);
        fechaNacimiento.push(diaNacimiento);
    } else {
        incorrecto(e.target, "Por favor ingresa un día valido");
    }
}

function verificarMes(e) {
    if (e.target.value > 0 && e.target.value < 13) {
        correcto(e.target);
        let mesNacimiento = limpiarMes(e.target.value);
        mesNacimiento = parseInt(mesNacimiento);
        fechaNacimiento.push(mesNacimiento);
    } else {
        incorrecto(e.target, "Por favor ingresa un mes valido");
        console.log("Mes incorrecto");
    }
}

function verificarAnio(e) {
    if (e.target.value > 1940 && e.target.value < 2020) {
        correcto(e.target);
        let anioNacimiento = parseInt(e.target.value);
        fechaNacimiento.push(anioNacimiento);
    } else {
        incorrecto(e.target, "Por favor ingresa un año valido");
        console.log("Año incorrecto");
    }
}

function correcto(elemento) {
    elemento.classList.remove("incorrecto");
    elemento.classList.add("correcto");
    if (control === true) {
        divError.classList.add("hidden");
        console.log("Se elimina el error");
        control = false;
    }
}

function incorrecto(elemento, texto) {
    elemento.classList.remove("correcto");
    elemento.classList.add("incorrecto");
    if (control === false) {
        console.log("Se añade el error");
        divError.classList.remove("hidden");
        divError.classList.add("error");
        divError.innerHTML = "<p>" + texto + "</p> ";
        console.log("Se añade el error terminado");
        control = true;
    }
}

function limpiarMes(valor) {
    if (valor > 0 && valor <= 09) {
        return valor.replace("0", "");
    } else {
        return valor;
    }
}

//Mostrar las weeks
function mostrarWeeks(semanasVividas) {
    const weeks = document.querySelectorAll(".weeks");
    console.log(weeks);
    let semanasVividass = semanasVividas;
    main.classList.remove("hidden");
    for (let i = 0; i < semanasVividass; i++) {
        weeks[i].style.backgroundColor = "green";
    }
}
