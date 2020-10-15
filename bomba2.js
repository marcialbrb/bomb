alert("Tienes 5 segundos para desactivar la bomba");
    
var timer = setTimeout(bomba, 5000);

function bomba (){
    alert("BOOOOOOM");
    postClick();
}

var desactivar = document.getElementById("cableAmarillo");
desactivar.addEventListener("click", clickDesactivar);

function clickDesactivar (){
    clearTimeout(timer);
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

