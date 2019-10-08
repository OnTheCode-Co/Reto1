/**
 * Inicio del javaScript de la base de datos
 */
leerPulsadoresActivados();
refrescoDeLecturas();

//TODO los listener en el otro javascript
// $("#r-cotas").click(function () {
//
//     var origen = cogerVariable("./variables/origen.html");
//
//
//     if (origen != "1") {
//         // no esta seleccionado y cambia el modo
//         if (!$("#r-cotas").checked()) {
//             $("#r-cotas").val("1");
//             $("#parada_cota").val("0");
//             $("#form_r_cotas").submit();
//         }
//     }
// });
//
// /**
//  * Comprobar y poner el modo parada
//  */
//
// $("#r-paradas").click(function () {
//     var origen = cogerVariable("./variables/origen.html");
//     if (origen != "1") {
//         // no esta seleccionado y cambia el modo
//         if (!$("#r-paradas").checked()) {
//             $("#r-paradas").val("1");
//             $("#cota_parada").val("0");
//             $("#form_r_paradas").submit();
//         }
//     }
//
//     /*var origen = cogerVariable("./variables/origen.html");
//     var cotas = cogerVariable("./variables/cotas.html");
//     var paradas = cogerVariable("./variables/paradas.html");
//
//     if (origen != "1") {
//
//     } else {
//         if (paradas != "1") {
//             $("#r-paradas").prop("checked", true);
//         } else {
//             $("#r-cotas").prop("checked", true);
//         }
//     }*/
//     //$("#form_r_paradas").submit();
// });

/**
 * intervalo de refresco de lo que se quiera ejecutar en la función
 * Principalmente lectura de variables de la base de datos
 */

/*
* TODO listener del boton reset, que lea de la base de datos la variable de reset, si
*  esta en false (0), ponerlo a true (1), y viceversa
 */
$("#boton_reset").click(function () {
    // para leer de la bbdd usar funcion cogerVariable();
    let reset = cogerVariable("./variables/reset.html");
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
    if (cogerVariable("./variables/current_speed.html")[2] != '"') {
        setInterval(function () {
            //lecturas de variables
            $('#infor1').val(cogerVariable("./variables/target_pos.html"));
            $('#infor2').val(cogerVariable("./variables/current_pos.html"));
            $('#infor3').val(cogerVariable("./variables/current_speed.html"));

            //leer variables imagenes normales
            leeVariableYPonImagen("./variables/busy.html", '#busy');
            leeVariableYPonImagen("./variables/ready.html", '#ready');
            leeVariableYPonImagen("./variables/in_pos.html", '#in_pos');

            // leer variable error
            let error = cogerVariable("./variables/error.html");
            if (error == 1) {
                $('#luz_error').attr("src", "./multimedia/alarma-roja.png");
            }
        }, 1500);
    } else {
        //alert("No hay conexion con el servidor");
    }
}

/**
 * Llama ajax para cogerVariable variables, leerlas y pasarlas
 * @param html
 * @returns {String con el valor de la variable de la base de datos}
 */
function cogerVariable(html) {
    var texto;
    $.ajax({
        async: false,
        type: 'GET',
        url: html,
        success: function (data) {
            texto = data.substring(1, (data.length - 2));
        }
    });
    return texto;
};

function leeVariableYPonImagen(html, etiqueta) {
    let resultado = cogerVariable(html);
    if (resultado == 1) {
        $(etiqueta).attr("src", "./multimedia/alarma-verde.png");
    } else {
        $(etiqueta).attr("src", "./multimedia/alarma-roja.png");
    }
};


/**
 * Lo primero que se debe ejecutar para el tema de los pulsadores de ARI y volver
 * a poner datos de cota y/o parada
 */
function leerPulsadoresActivados() {
    /**
     * Refrescar el valor de cotas al refrescarse la página
     */
    let p_c = cogerVariable("./variables/cotas_in.html");
    if (p_c >= 0) {
        $("#propiedad_cota").val(p_c);
        $("#propiedad_cota").trigger("input");
    }

    /**
     * Refrescar el valor de parada al refrescarse la página
     */
    let p_p = cogerVariable("./variables/parada_in.html");
    if (p_p >= 0) {
        $("#propiedad_parada").val(p_p);
        $("#propiedad_parada").trigger("input");
    }

    /**
     * Simular pulsador en intro_cotas
     */
    let b_i_c = cogerVariable("./variables/intro_cotas.html");
    if (b_i_c == 1) {
        //volver a poner el boton en false porque es un pulsador
        $("#boton_intro_cotas").val("0");
        $("#boton_cota").trigger("click");
    } else {
        console.log("XD")
    }

    /**
     * Simular pulsador en intro_paradas
     */
    let b_i_p = cogerVariable("./variables/intro_paradas.html");
    if (b_i_p == 1) {
        //volver a poner el boton en false porque es un pulsador
        $("#boton_intro_paradas").val("0");
        $("#boton_parada").trigger("click");
    }

}


/**
 * boton en reset TODO no es pulsador, es boton
 */
// $.get("./variables/reset.html", function (result) {
//     if (result.substring(1, (result.length - 2)) == 1) {
//         //volver a poner el boton en false porque es un pulsador
//         $("#boton_intro_reset").val("0");
//         $("#boton_reset").trigger("click");
//         // TODO algo más creo que tenía que hacer pero no me acuerdo
//
//     }
// });