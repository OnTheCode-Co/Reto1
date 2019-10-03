$(document).ready(function (event) {

    // Funciones cookie

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
     * Funcion crear cookie o no dependiendo de si esta creada
     * o no.
     */
    function crearCK() {
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
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + nombre + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(nombre + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    }

    /**
     * comprobar si esta la cookie creada
     * si está, no poner el bloque de cookie
     * si no existe poner el bloque de cookie
     */
    if (getCookie('inicio') == "true") {
        document.getElementById("barraaceptacion").style.display = "none";
    }

    // Añadirle la funcion onClick al OK del bloque de cookies
    $("#ok").bind("click", function () {
        crearCK();
    });
});