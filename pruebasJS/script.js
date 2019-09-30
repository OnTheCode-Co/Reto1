window.onload = function () {
    let slider1 = document.getElementById("slider1");
    let propiedad1 = document.getElementById("propiedad1");
    propiedad1.addEventListener("input", function () {
        cambioPropiedad(slider1, propiedad1);
    });
    slider1.addEventListener("input", function () {
        cambioSlider(slider1, propiedad1);
    });

    let slider2 = document.getElementById("slider2");
    let propiedad2 = document.getElementById("propiedad2");
    slider2.addEventListener("input", function () {
        cambioSlider(slider2, propiedad2);
    });
    propiedad2.addEventListener("input", function () {
        cambioPropiedad(slider2, propiedad2);
    });
    cambioSlider(slider1, propiedad1);
    cambioSlider(slider2, propiedad2);


    function cambioSlider(slider, propiedad) {
        console.log(slider.value);
        propiedad.value = slider.value;
    }

    function cambioPropiedad(slider, propiedad) {
            console.log(parseInt(propiedad.value));
            if (Number.isNaN(propiedad.value) === false){
                slider.value = propiedad.value;
            }
            else{
                slider.value = 0;
            }
    }

};