/**
 * Accedemos al boton del HTML mediante su ID y le agregamos un evento click.
 * Accedemos tambien a la etiqueta donde se mostrara el token y lo dejamos asignado a una variable
 */
var boton = document.getElementById("passGen");
boton.addEventListener("click", crearPassword);
var yourPass = document.getElementById("yourPass");

/**
  * Funcion para generar password aleatorias
  * Lo primerio que hacemos es crear un array vacio donde guardaremos los caracteres del token
  * Creamos tambien un array con todos los caracteres que utilizaremos para generar el token
  * Y por ultimo creamos dos arrays mas tambien vacios que utilizaremos para dar aleitoriedad al token
  * Creamos la longitud que tendra el token y la guardamos en una variable
  * Para finalizar borramos la etiqueta HTML donde mostraremos el token
  */
function crearPassword () {
    var password = [];
    var caracteres = ["a","c","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];
    var aleatorio1 = [];
    var aleatorio2 = [];
     var longitud = 15; /* Esta sera la longitud que tendra la password aleatoria */
    yourPass.innerText = "";

    /**
      * Con el primer ciclo for rellenamos el array aleatorio1 para crear el srting aleatorio de caracteres
      * que compondra el token.
      * Con el segundo ciclo for rellenamos el array aleatorio2 el cual usaremos para cambiar algunos
      * caracteres del array aleatorio1 para dar un mayor nivel de aleitoriedad al token.
      */
    for (i = 0; i < longitud; i++) {
        var valorMin = 1;
        var valorMax = caracteres.length-1;
        var resultado = aleatorio(valorMin, valorMax);
        aleatorio1.push(resultado);
    }
    for (i = 0; i < longitud; i++) {
        var valorMin = 1;
        var valorMax = caracteres.length;
        var resultado = aleatorio(valorMin, valorMax);
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
        var c = aleatorio1[p];
        var valor = caracteres[c];
        if(typeof valor == "string") {
            var num = aleatorio2[p];
            var d = esDivisible(num,2);
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
    for (pass of password){
        yourPass.innerText += pass;
    }
}

 /* Funcion para generar numeros aleatorios */
function aleatorio(min, max) {
     var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

 /* Funcion para saber si un numero es divisible */
esDivisible = (num, divisor) => {
    return num % divisor === 0 ? true : false;
}