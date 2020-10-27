window.onload = getRndInteger(0,3);                        //Carga la página y se elige un número al azar que determina cual será el desactivador
                                                           //Los numeros estan entren 0 y 3, especificamente 0,1,2.
function getRndInteger(min, max) {
    let numero = Math.floor(Math.random() * (max - min)) + min;
    return numbRandom(numero)                                  //Como numero lo necesito para determinar el desactiv, lo mando a la funcion que
                                                               //se encarga de determinar que numero corresponde a el desactivador
}

let reloj = document.getElementsByClassName("reloj")[0];
let temp = 5;                                                   // Inicio el temporizador en 5 segundos

let timerTemp = setInterval(mostrarTemp,1000)                              //Realizar la funcion mostrarTemp cada 1000ms
function mostrarTemp() { 
    
    if (temp >= 0) {
        reloj.innerHTML = "00:"+"0"+temp;                   //Primero muestro el temp en 5 segundos
        temp = temp - 1;                                    //Luego le resto uno para el prox ciclo mostrar 4 segundos
    }
}

alert("Tienes 5 segundos para desactivar la bomba");        //Alerta que indica instrucciones
let timer = setTimeout(bomba, 5000);                        //Inicia el tiempo para que la bomba explote (Esta sincronizado con el temporizador)



function numbRandom (numero){
    if(numero==0) {
        desactivar = document.getElementById("cableAmarillo");
        desactivar.addEventListener("click", clickDesactivar);
    
        explota = document.getElementById("cableRojo");
        explota2 = document.getElementById("cableVerde");

        explota.addEventListener("click", clickExplota);
        explota2.addEventListener("click", clickExplota);
    }

    if(numero==1){
        desactivar = document.getElementById("cableVerde");
        desactivar.addEventListener("click", clickDesactivar);
    
        explota = document.getElementById("cableRojo");
        explota2 = document.getElementById("cableAmarillo");

        explota.addEventListener("click", clickExplota);
        explota2.addEventListener("click", clickExplota);
    }

    if(numero==2){
        desactivar = document.getElementById("cableRojo");
        desactivar.addEventListener("click", clickDesactivar);
    
        explota = document.getElementById("cableAmarillo");
        explota2 = document.getElementById("cableVerde");

        explota.addEventListener("click", clickExplota);
        explota2.addEventListener("click", clickExplota);
    }
}

function bomba (){
    alert("BOOOOOOM");
    alert("Todos morimos, POR QUÉ NO HICISTE NADA? :(")
    postClick();
}

function clickDesactivar (){
    clearTimeout(timer);
    clearTimeout(timerTemp);
    alert("Bomba desactivada, buen trabajo!");
    desactivar.removeEventListener("click",clickDesactivar)
    explota.removeEventListener("click", clickExplota);
    explota2.removeEventListener("click", clickExplota);
    postClickCumplido();

}

function clickExplota () {
    clearTimeout(timer);
    clearTimeout(timerTemp);
    alert("BOOOOOOOM");

    postClick();
}

function postClick(){
    explota.removeEventListener("click",clickExplota)
    explota2.removeEventListener("click",clickExplota)
    desactivar.removeEventListener("click",clickDesactivar);
    explota.addEventListener("click", clickFin);
    explota2.addEventListener("click", clickFin);
    desactivar.addEventListener("click", clickFin);
}

function clickFin() {
    alert("La bomba ha explotado, morimos todos :(")
}

function postClickCumplido(){
    explota.addEventListener("click", clickCumplido);
    explota2.addEventListener("click", clickCumplido);
    desactivar.addEventListener("click",clickCumplido);
}

function clickCumplido(){
    alert("La bomba ya fue desactivada, estamos vivos gracias a ti :)")
}
