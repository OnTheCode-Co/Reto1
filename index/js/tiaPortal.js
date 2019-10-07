///// simular que en realidad no son botones sino pulsadores

/**
 * Refrescar el valor de cotas al refrescarse la página
 */
$.get("./variables/cotas_in.html", function (result) {
    if (result.substring(1, (result.length - 2)) >= 0) {
        $("#propiedad1").val(result.substring(1, (result.length - 2)));
    }
});


/**
 * Simular pulsador en intro_cotas
 */
$.get("./variables/intro_cotas.html", function (result) {
    if (result.substring(1, (result.length - 2)) == 1) {
        //volver a poner el boton en false porque es un pulsador
        $("#boton_intro_cotas").val("0");
        $("#boton1").trigger("click");
    }
});

/**
 * Simular pulsador en intro_paradas
 */

/**
 * intervalo de refresco de lo que se quiera ejecutar en la función
 * Principalmente lectura de variables de la base de datos
 */

setInterval(function () {
    //lecturas de variables
    $.get("./variables/target_pos.html", function (result) {
        $('#infor1').val(result.substring(1, (result.length - 2)));
    });
    $.get("./variables/current_pos.html", function (result) {
        $('#infor2').val(result.substring(1, (result.length - 2)));
    });
    $.get("./variables/current_speed.html", function (result) {
        $('#infor3').val(result.substring(1, (result.length - 2)));
    });

    $.get("./variables/busy.html", function (result) {
        if (result.substring(1, (result.length - 2)) == 0) {
            $('#busy').attr("src", "./multimedia/alarma-verde.png");
        } else {
            $('#busy').attr("src", "./multimedia/alarma-roja.png");
        }
    });
    $.get("./variables/ready.html", function (result) {
        if (result.substring(1, (result.length - 2)) == 0) {
            $('#ready').attr("src", "./multimedia/alarma-verde.png");
        } else {
            $('#ready').attr("src", "./multimedia/alarma-roja.png");
        }
    });
    $.get("./variables/in_pos.html", function (result) {
        if (result.substring(1, (result.length - 2)) == 0) {
            $('#in_pos').attr("src", "./multimedia/alarma-verde.png");
        } else {
            $('#in_pos').attr("src", "./multimedia/alarma-roja.png");
        }
    });
    $.get("./variables/error.html", function (result) {
        if (result.substring(1, (result.length - 2)) == 0) {
            $('#error').attr("src", "./multimedia/alarma-verde.png");
        } else {
            $('#error').attr("src", "./multimedia/alarma-roja.png");
        }
    });


}, 200);