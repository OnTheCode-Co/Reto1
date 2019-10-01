window.onload = function () {

    /* Variables de clase ------------------------------------------------------------------------------------------- */

    let sliderCotas = document.getElementById("slider1");
    let sliderParadas = document.getElementById("slider2");

    let inputParada = document.getElementById("propiedad2");
    let inputCota = document.getElementById("propiedad1");

    /* -------------------------------------------------------------------------------------------------------------- */

    /* Eventos ------------------------------------------------------------------------------------------------------ */

    sliderCotas.addEventListener("input", function () {
        deSlideraInput(sliderCotas, inputCota);
    });

    sliderParadas.addEventListener("input", function () {
        deSlideraInput(sliderParadas, inputParada);
    });

    inputCota.addEventListener("input", function () {
        deInputaSlider(sliderCotas, inputCota);
    });
    inputParada.addEventListener("input", function () {
        deInputaSlider(sliderParadas, inputParada);
    });

    function deSlideraInput(slider, input) {
        console.log(slider.value);
        input.value = slider.value;
    }

    function deInputaSlider(slider, input) {
        console.log(input.value);
        if (input === inputCota && input.value > 100) {
            input.value = 100;
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


    /* -------------------------------------------------------------------------------------------------------------- */

    /* Poner a 0 los campos de texto y slider ----------------------------------------------------------------------- */

    inputParada.value = 0;
    inputCota.value = 0;
    deInputaSlider(sliderCotas, inputCota);
    deInputaSlider(sliderParadas, inputParada);

    /* -------------------------------------------------------------------------------------------------------------- */
};
