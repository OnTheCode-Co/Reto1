window.onload = function () {
    let barraVerde = document.getElementById("caminoRecorrido");
    let barras = document.getElementsByClassName("barras");
    let paradas = document.getElementsByClassName("parada");
    let iBV = setInterval(rellenarBarra, 100);
    let iAB;
    let width = 0;
    let alturaBarra = 0;
    let alturaCirculo = 25;

    function rellenarBarra() {
        if (width === 100) {
            clearInterval(iBV);
        } else {
            switch (width) {
                case 3:
                    alargar(document.getElementById("barra1"), document.getElementById("punto1"));
                    break;
                case 33:
                    alargar(document.getElementById("barra2"), document.getElementById("punto2"));
                    break;
                case 66:
                    alargar(document.getElementById("barra3"), document.getElementById("punto3"));
                    break;
                case 97:
                    alargar(document.getElementById("barra4"), document.getElementById("punto4"));
                    break;
            }
            width++;
            barraVerde.style.width = width + "%";
        }
    }

    function alargar(barra,punto) {
        iAB = setInterval(function () {
            if (alturaBarra === 300) {
                clearInterval(iAB);
                alturaCirculo = 25;
                alturaBarra = 0;
            } else {
                alturaBarra++;
                alturaCirculo++;
                punto.style.bottom = alturaCirculo +"%";
                barra.style.height = alturaBarra + "%";
            }
        }, 1);
    }


};