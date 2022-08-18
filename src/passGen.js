/**
 * Accedemos al boton del HTML mediante su ID y le agregamos un evento click.
 * Accedemos tambien a la etiqueta donde se mostrara el token y lo dejamos asignado a una variable
 */
const botonGen = document.getElementById("passGen");
const yourPass = document.getElementById("yourPass");
const botonOTP = document.getElementById("genOTP");
const passOTP = document.getElementById("passOTP");
const moduloPass = document.querySelector(".moduloGen");
let otp;
moduloPass.addEventListener("click",(e) => {
    let generador = e.target.id;
    switch(generador) {
        case "passGen":
            yourPass.innerText = "";
            crearPassword(generador);
            break;
        case "genOTP":
            if(e.target.checked === true) {
                crearPassword(generador);
                otp = setInterval(() => {
                    passOTP.innerText = "";
                    crearPassword(generador);
                }, 5000);
            }
            if(e.target.checked === false) {
                clearInterval(otp);
                passOTP.innerText = "";
            }
            break;
    }
});

/**
 * Funcion para generar password aleatorias
 * Lo primerio que hacemos es crear un array vacio donde guardaremos los caracteres del token
 * Creamos tambien un array con todos los caracteres que utilizaremos para generar el token
 * Y por ultimo creamos dos arrays mas tambien vacios que utilizaremos para dar aleitoriedad al token
 * Creamos la longitud que tendra el token y la guardamos en una variable
 * Para finalizar borramos la etiqueta HTML donde mostraremos el token
 */
function crearPassword (modo) {
    let password = [];
    let caracteres = ["a","c","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];
    let aleatorio1 = [];
    let aleatorio2 = [];
    let longitud = 15; /* Esta sera la longitud que tendra la password aleatoria */

    /**
     * Con el primer ciclo for rellenamos el array aleatorio1 para crear el srting aleatorio de caracteres
     * que compondra el token.
     * Con el segundo ciclo for rellenamos el array aleatorio2 el cual usaremos para cambiar algunos
     * caracteres del array aleatorio1 para dar un mayor nivel de aleitoriedad al token.
     */
    for (i = 0; i < longitud; i++) {
        let valorMin = 1;
        let valorMax = caracteres.length-1;
        let resultado = aleatorio(valorMin, valorMax);
        aleatorio1.push(resultado);
    }
    for (i = 0; i < longitud; i++) {
        let valorMin = 1;
        let valorMax = caracteres.length;
        let resultado = aleatorio(valorMin, valorMax);
        aleatorio2.push(resultado);
    }

    /**
     * Con este ciclo recorremos el array aleatorio1 y cada valor del array lo cambiamos por el caracter
     * que corresponde del array caracteres.
     * Despues validamos que el caracter es de tipo texto.
     * Si no es de tipo texto lo guardamos en el array password como valor del token
     * Si es de tipo texto miramos el valor que tienen el array aleatorio2 la misma posición, si dicho
     * valor es par ponemos el caracter en mayúscula y la guardamos en el array password, si es impar
     * la dejamos en minúscula y la guardamos en el array.
     */
    for (p in aleatorio1) {
        let c = aleatorio1[p];
        let valor = caracteres[c];
        if(typeof valor == "string") {
            let num = aleatorio2[p];
            let d = esDivisible(num,2);
            if(d) {
                valor = valor.toUpperCase();
                password.push(valor);
            } else {
                password.push(valor);
            }
        } else {
            password.push(valor);
        }
    }

    /**
     * Este ciclo muestra la password en la etiqueta yourPass la cual guardamos al principio en la variable yourPass
     * Utilizamos innerText para crear contenido en dicha etiqueta dentro del HTML
     * El += es lo mismo que poner que la variable es igual a la propia variable mas la variable pass
     */
    switch(modo) {
        case "passGen":
            for (pass of password){
                yourPass.innerText += pass;
            };
            break;
        case "genOTP":
            for (pass of password){
                passOTP.innerText += pass;
            }
            break;
    }
}

/* Funcion para generar numeros aleatorios */
function aleatorio(min, max) {
    let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

/* Funcion para saber si un numero es divisible */
esDivisible = (num, divisor) => {
    return num % divisor === 0 ? true : false;
}