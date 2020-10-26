var reloj = document.getElementsByClassName("reloj")[0];
var temp = 5;                                              //Temporizador inica en 5 segundos

var timerTemp = setInterval(mostrarTemp,1000)                              //Realizar la funcion mostrarTemp cada 1000ms
function mostrarTemp() { 
    
    if (temp >= 0) {
        reloj.innerHTML = "00:"+"0"+temp;                   //Primero muestro el temp en 5 segundos
        temp = temp - 1;                                    //Luego le resto uno para el prox ciclo mostrar 4 segundos
    }
}
alert("Tienes 5 segundos para desactivar la bomba");
var timer = setTimeout(bomba, 5000);

function bomba (){
    alert("BOOOOOOM");
    alert("Todos morimos, POR QUÉ NO HICISTE NADA? :(")
    postClick();
}

var desactivar = document.getElementById("cableAmarillo");
desactivar.addEventListener("click", clickDesactivar);

function clickDesactivar (){
    clearTimeout(timer);
    clearTimeout(timerTemp);
    alert("Bomba desactivada, buen trabajo!");
    desactivar.removeEventListener("click",clickDesactivar)
    explota.removeEventListener("click", clickExplota);
    explota2.removeEventListener("click", clickExplota);
    postClickCumplido();

}

explota = document.getElementById("cableRojo");
explota2 = document.getElementById("cableVerde");

explota.addEventListener("click", clickExplota);
explota2.addEventListener("click", clickExplota);

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
