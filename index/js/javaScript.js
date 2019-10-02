window.onload = function () {
    //let sliderCotas = document.getElementById("slider1");
    //let sliderParadas = document.getElementById("slider2");

    //let inputParada = document.getElementById("propiedad2");
    //let inputCota = document.getElementById("propiedad1");

    /*sliderCotas.addEventListener("input", function () {
        deSlideraInput(sliderCotas, inputCota);
    }); */

    /*sliderParadas.addEventListener("input", function () {
        deSlideraInput(sliderParadas, inputParada);
    });

    inputCota.addEventListener("input", function () {
        deInputaSlider(sliderCotas, inputCota);
    });*/

    /*inputParada.addEventListener("input", function () {
        deInputaSlider(sliderParadas, inputParada);
    })

    function deSlideraInput(slider, input) {
        console.log(slider.value);
        input.value = slider.value;
    }

    function deInputaSlider(slider, input) {
        console.log(input.value);
        if (input.value>100){
            input.value = 100;
        }
        if (!Number.isNaN(parseInt(input.value))){
            slider.value = input.value;
        }
    }*/

    document.getElementById("propiedad1").addEventListener("keyup", function(){
        var cota = document.getElementById("propiedad1").value;
        $("#slider_cota").slider('value', cota);
    });

    document.getElementById("propiedad2").addEventListener("keyup", function(){
        var parada = document.getElementById("propiedad2").value;
        $("#slider_parada").slider('value', parada);
    });

};

$(document).ready(function(event){
    //alert("hola");
    $("#slider_cota").slider({
        max: 100,
        min: 0,
        range: false,
        value: 0
    }).slider("pips", {
        rest: "pip"
    });

    $("#slider_cota").on("slidestop", function(event, ui) {
        var val = ui.value;
        document.getElementById("propiedad1").value = val;
    });


    $("#slider_parada").slider({
        max: 4,
        min: 0,
        range: false,
        value: 0
    }).slider("pips", {
        rest: "pip"
    });

    $("#slider_parada").on("slidestop", function(event, ui) {
        var val = ui.value;
        document.getElementById("propiedad2").value = val;
    });
    
    
})