window.onload = function () {
    function extenderpalo(palo, circulo) {
        let elem = document.getElementById(palo);
        let pos = 0;
        let id = setInterval(frame, 10);
        let id2 = setInterval(frame2, 10);
        let circ = document.getElementById(circulo);
        let alturaCirculo = -50;

        function frame() {
            if (pos === 40) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.height = pos + "%";
            }
        }

        function frame2() {
            if (alturaCirculo === -650) {
                clearInterval(id2);
            } else {
                alturaCirculo -= 15;
                circ.style.top = alturaCirculo + "%";
            }
        }
    }

    function retraerpalo(palo, circulo) {
        let elem = document.getElementById(palo);
        let pos = 40;
        let id = setInterval(frame, 5);

        let id2 = setInterval(frame2, 5);
        let circ = document.getElementById(circulo);
        let alturaCirculo = -650;

        function frame() {
            if (pos === 0) {
                clearInterval(id);
            } else {
                pos--;
                elem.style.height = pos + "%";
            }
        }

        function frame2() {
            if (alturaCirculo === -50) {
                clearInterval(id2);
            } else {
                alturaCirculo -= -15;
                circ.style.top = alturaCirculo + "%";
            }
        }
    }


    extenderpalo("palo1", "parada1");
    document.getElementById('parada1').style.backgroundColor = "darkgreen";

    setTimeout(
        function () {
            document.getElementById('parada2').style.backgroundColor = "darkgreen";
            extenderpalo("palo2", "parada2");
            retraerpalo("palo1", "parada1");
        },
        2200
    );
    setTimeout(
        function () {
            document.getElementById('parada3').style.backgroundColor = "darkgreen";
            extenderpalo("palo3", "parada3");
            retraerpalo("palo2","parada2");
        },
        4000
    );
    setTimeout(
        function () {
            document.getElementById('parada4').style.backgroundColor = "darkgreen";
            extenderpalo("palo4", "parada4");
            retraerpalo("palo3", "parada3");
        },
        9800
    );
};
