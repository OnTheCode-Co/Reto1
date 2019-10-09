$(document).ready(function (event) {

    /**
     * comprobar si esta la cookie creada
     * si está, no poner el bloque de cookie
     * si no existe poner el bloque de cookie
     */
    if (getCookie('inicio') == "true") {
        document.getElementById("barraaceptacion").style.display = "none";
        // desactivar animaciones
        let c = document.getElementsByClassName("anim")
        for (let i = 0; i < c.length; i++) {
            c[i].style.display = "none";
        }
        $("#titulo").css({
            "opacity": "1",
            "border-bottom": "3px solid #25daa5",
            "width": "90vw"
        });
    } else {
        // cuando no exista la cookie aún
        $("#titulo").css({
            "animation-name": "aparicion-titulo",
            "animation-delay": "5s",
            "animation-duration": "1.5s",
            "animation-fill-mode": "forwards"
        });
        setTimeout(function () {
            document.getElementById("barraaceptacion").style.display = "block";
        }, 5000);
    }

    // Añadirle la funcion onClick al OK del bloque de cookies
    $("#ok").bind("click", function () {
        siCookie();
    });

    // Funciones cookies

    /**
     *  Funcion crear cookie
     * @param nombre
     * @param valor
     * @param dias
     */
    function crearCookie(nombre, valor, dias) {
        if (dias) {
            var date = new Date();
            date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
            var duracion = "; expires=" + date.toGMTString();
        } else duracion = "";
        document.cookie = nombre + "=" + valor + duracion + "; path=/";
    }

    /**
     * Funcion crear cookie o no dependiendo de si está ya creada
     *
     */
    function siCookie() {
        let galleta = getCookie('inicio');
        if (galleta == null && galleta != "true") {
            document.cookie = crearCookie("inicio", "true", 1);
        }
        document.getElementById("barraaceptacion").style.display = "none";
    }

    /**
     * Obtener la cookie.
     * @param nombre
     * @returns {string}
     */
    function getCookie(nombre) {
        var valorCookie = document.cookie;
        var cookie = valorCookie.indexOf(" " + nombre + "=");
        if (cookie == -1) {
            cookie = valorCookie.indexOf(nombre + "=");
        }
        if (cookie == -1) {
            valorCookie = null;
        } else {
            cookie = valorCookie.indexOf("=", cookie) + 1;
            var c_end = valorCookie.indexOf(";", cookie);
            if (c_end == -1) {
                c_end = valorCookie.length;
            }
            valorCookie = unescape(valorCookie.substring(cookie, c_end));
        }
        return valorCookie;
    }
});