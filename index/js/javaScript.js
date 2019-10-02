window.onload = function() {

    //Definicion de variables //

    var cotas = document.getElementById("propiedad1");
    var barraProgreso = document.getElementById("relleno_barra")

    //////////////////////////
    document.getElementById("boton1").addEventListener("click", function() {

        barraProgreso.style.width = ((cotas.value/5) + "%")



    })





    //let sliderCotas = document.getElementById("slider1");
    //let sliderParadas = document.getElementById("slider2");

    /* Variables de clase ------------------------------------------------------------------------------------------- */

    //let inputParada = document.getElementById("propiedad2");
    //let inputCota = document.getElementById("propiedad1");


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
    document.getElementById("propiedad1").addEventListener("keyup", function() {
        var cota = document.getElementById("propiedad1").value;
        $("#slider_cota").slider('value', cota);
    });

    document.getElementById("propiedad2").addEventListener("keyup", function() {
        var parada = document.getElementById("propiedad2").value;
        $("#slider_parada").slider('value', parada);
    });

};
//SLIDERS
//Creación y valores por defecto de los sliders
$(document).ready(function(event) {
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
    $("#slider_cota").on("slidestop", function(event, ui) {
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
    $("#slider_parada").on("slidestop", function(event, ui) {
        var val = ui.value;
        document.getElementById("propiedad2").value = val;
    });




})