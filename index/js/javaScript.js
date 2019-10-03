$(document).ready(function (event) {
    window.onload = function () {

        //Definicion de variables //

        var cotas = document.getElementById("propiedad1");
        var barraProgreso = document.getElementById("relleno_barra")

        //////////////////////////
        document.getElementById("boton1").addEventListener("click", function () {

            barraProgreso.style.width = ((cotas.value / 5) + "%")


        });


        //let sliderCotas = document.getElementById("slider1");
        //let sliderParadas = document.getElementById("slider2");

        /* Variables de clase ------------------------------------------------------------------------------------------- */

        /*
        sliderCotas.addEventListener("input", function () {
        /* -------------------------------------------------------------------------------------------------------------- */

        /* Eventos ------------------------------------------------------------------------------------------------------ */

        // deSlideraInput(sliderCotas, inputCota);


        /*  $("#slider_parada").bind("input", function () {
              deSlideraInput($("#slider_parada"), $("#paradas_input"));
          });
      */
        $("#slider_cota").bind("onchange", function () {
            deInputaSlider($("#slider_cota"), $("#slider_cota").val());
        });

        /* $("#paradas_input").bind("input", function () {
             deInputaSlider($("#slider_parada"), $("#paradas_input"));
         });
     */

        function deSlideraInput(slider, input) {
            console.log(slider.value);
            input.value = slider.value;
        }

        function deInputaSlider(slider, input) {
            console.log(input.value);
            if (input === inputCota && input.value > 500) {
                input.value = 500;
            }
            if (input === inputParada && input.value > 4) {
                input.value = 4;
            }
            if (!Number.isNaN(parseInt(input.value))) {
                slider.value = input.value;
            } else {
                slider.value = 0;
            }

        }

        //SLIDERS
        //Cogemos el valor del input y lo transladamos al slider cuando se pulsa una tecla

        let inputParada = document.getElementById("propiedad2");
        let inputCota = document.getElementById("propiedad1");

        inputCota.addEventListener("input", function () {
            console.log(document.getElementById("propiedad1").value);
            var cota = inputCota.value;
            if (cota > 500) {
                inputCota.value = 500;
            } else if (cota < 0) {
                inputCota.value = 0;
            }
            $("#slider_cota").slider('value', cota);
        });

        inputParada.addEventListener("input", function () {
            var parada = inputParada.value;
            if (parada > 4) {
                inputParada.value = 4;
            } else if (parada < 0) {
                inputParada.value = 0;
            }
            $("#slider_parada").slider('value', parada);
        });

    };

    // Foco en cota o parada y hacer click a Enter
    $("#propiedad1").keypress(function (e) {
        hazClick(e, "#boton1");
    });
    $("#propiedad2").keypress(function (e) {
        hazClick(e, "#boton2");
    });
    $("#slider_cota").keypress(function (e) {
        hazClick(e, "#boton1");
    });
    $("#slider_parada").keypress(function (e) {
        hazClick(e, "#boton2");
    });
    function hazClick(enter, boton) {
        if (enter.keyCode == 13) {
            $(boton).trigger("click");
        }
    }

//SLIDERS
//Creación y valores por defecto de los sliders

    //alert("hola");
    $("#slider_cota").slider({
        max: 500,
        min: 0,
        range: "min",
        value: 0
    }).slider("pips", {
        rest: "pip"
    });
    //SLIDERS
    //Cuando la bola del slider se para, recogemos el valor y lo pasamos al input
    $("#slider_cota").on("slide", function (event, ui) {
        var val = ui.value;
        document.getElementById("propiedad1").value = val;
    });
    //SLIDERS
    //Creación y valores por defecto de los sliders
    $("#slider_parada").slider({
        max: 4,
        min: 0,
        range: "min",
        value: 0
    }).slider("pips", {
        rest: "pip"
    });
    //SLIDERS
    //Cuando la bola del slider se para, recogemos el valor y lo pasamos al input
    $("#slider_parada").on("slide", function (event, ui) {
        var val = ui.value;
        document.getElementById("propiedad2").value = val;
    });
});