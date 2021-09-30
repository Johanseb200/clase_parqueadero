function ticks() {
    horaActual = new Date().toLocaleString();
    mireloj = document.getElementById("reloj");
    mireloj.innerHTML = horaActual;
}

setInterval(ticks,1000);