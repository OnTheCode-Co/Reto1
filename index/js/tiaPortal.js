///// simular que en realidad no son botones sino pulsadores
/**
 * MODO COTAS O PARADAS
 */
/*$("#r-cotas").bind("focus", function () {
    $("#form_r_cotas").submit();
});*/

/*$("#r-paradas").focus( function () {
    $("#form_r_paradas").submit();
});*/

/**
 * intervalo de refresco de lo que se quiera ejecutar en la función
 * Principalmente lectura de variables de la base de datos
 */

/*
* TODO listener del boton reset, que lea de la base de datos la variable de reset, si
*  esta en false (0), ponerlo a true (1), y viceversa
 */
$("#boton_reset").click(function () {
    // para leer de la bbdd usar funcion coger();
    let reset = coger("./variables/reset.html").responseText;
    // hacerle submit al form que engloba el boton reset cuando se compruebe
    // habiendo cambiado los valores
    if (reset == 0) {
        $("#boton_intro_reset").val("1");
    } else {
        $("#boton_intro_reset").val("0");
    }
    $("#reset_form").submit();
});

function refrescoDeLecturas() {
    // if pa porsi no hay conexion con el server no haga llamadas toodo el rato
    if (coger("./variables/current_speed.html").responseText[2] != "=") {
        setInterval(function () {
            //lecturas de variables
            let infor1 = coger("./variables/target_pos.html").responseText;
            let infor2 = coger("./variables/current_pos.html").responseText;
            let infor3 = coger("./variables/current_speed.html").responseText;
            $('#infor1').val(infor1.substring(1, (infor1.length - 2)));
            $('#infor2').val(infor2.substring(1, (infor2.length - 2)));
            $('#infor3').val(infor3.substring(1, (infor3.length - 2)));

            //leer variables imagenes normales
            leeVariableYPonImagen("./variables/busy.html", '#busy');
            leeVariableYPonImagen("./variables/ready.html", '#ready');
            leeVariableYPonImagen("./variables/in_pos.html", '#in_pos');

            // leer variable error
            let error = coger("./variables/error.html").responseText;
            if (error.substring(1, (error.length - 2)) == 1) {
                $('#luz_error').attr("src", "./multimedia/alarma-roja.png");
            }
        }, 1500);
    } else {
        //alert("No hay conexion con el servidor");
    }
}

/**
 * Llama ajax para coger variables y leerlas
 * @param html
 * @returns {*|{getAllResponseHeaders, abort, setRequestHeader, readyState, getResponseHeader, overrideMimeType, statusCode}}
 */
function coger(html) {
    return $.ajax({
        async: false,
        type: 'GET',
        url: html,
        success: function (data) {
            return data;
        }
    });
};

function leeVariableYPonImagen(html, etiqueta) {
    let resultado = coger(html).responseText;
    if (resultado.substring(1, (resultado.length - 2)) == 1) {
        $(etiqueta).attr("src", "./multimedia/alarma-verde.png");
    } else {
        $(etiqueta).attr("src", "./multimedia/alarma-roja.png");
    }
};


/**
 * Lo primero que se debe ejecutar para el tema de los pulsadores de ARI y volver
 * a poner datos de cota y/o parada
 */
function primero() {
    /**
     * Refrescar el valor de cotas al refrescarse la página
     */
        //alert(coger("./variables/cotas_in.html"));
        //coger("./variables/cotas_in.html");
    let p_c = coger("./variables/cotas_in.html").responseText;
    if (p_c.substring(1, (p_c.length - 2)) >= 0) {
        $("#propiedad_cota").val(p_c.substring(1, (p_c.length - 2)));
        $("#propiedad_cota").trigger("input");
    }

    /**
     * Refrescar el valor de parada al refrescarse la página
     */
    let p_p = coger("./variables/parada_in.html").responseText;
    if (p_p.substring(1, (p_p.length - 2)) >= 0) {
        $("#propiedad_parada").val(p_p.substring(1, (p_p.length - 2)));
        $("#propiedad_parada").trigger("input");
    }

    /**
     * Simular pulsador en intro_cotas
     */
    let b_i_c = coger("./variables/intro_cotas.html").responseText;
    if (b_i_c.substring(1, (b_i_c.length - 2)) == 1) {
        //volver a poner el boton en false porque es un pulsador
        $("#boton_intro_cotas").val("0");
        $("#boton_cota").trigger("click");
    }

    /**
     * Simular pulsador en intro_paradas
     */
    let b_i_p = coger("./variables/intro_paradas.html").responseText;
    if (b_i_p.substring(1, (b_i_p.length - 2)) == 1) {
        //volver a poner el boton en false porque es un pulsador
        $("#boton_intro_paradas").val("0");
        $("#boton_parada").trigger("click");
    }

}


/**
 * boton en reset TODO no es pulsador, es boton
 */
$.get("./variables/reset.html", function (result) {
    if (result.substring(1, (result.length - 2)) == 1) {
        //volver a poner el boton en false porque es un pulsador
        $("#boton_intro_reset").val("0");
        $("#boton_reset").trigger("click");
        // TODO algo más creo que tenía que hacer pero no me acuerdo

    }
});

primero();
refrescoDeLecturas();

