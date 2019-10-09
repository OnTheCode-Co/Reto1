window.onload = function() {


    var tar = document.getElementById("tar");
    var tab = document.getElementById("tab");
    var tarImg = document.getElementById("tar-img");
    var tabImg = document.getElementById("tab-img");
    var csi = document.getElementById("csi");
    var cid = document.getElementById("cid");
    var csd = document.getElementById("csd");
    var cii = document.getElementById("cii");
    var sevron = document.getElementById("sevron");
    var daw = document.getElementById("daw");


    csi.addEventListener("mouseover", function() {
        tab.style.right = "350";
        tab.style.bottom = "20";
        csd.style.left = "0%";
        csd.style.top = "0%";
        csd.style.width = "100%";
        csd.style.height = "100%";
        csd.style.borderRadius = "0px";
        csd.style.backgroundColor = "#25daa5";
        sevron.style.transition = "all 0.5s ease-in-out";
        sevron.style.opacity = "1";
        csd.style.color = "black";
     
    })

    cid.addEventListener("mouseover", function() {
        tar.style.right = "-250";
        tar.style.bottom = "-300";
        tab.style.transform = "rotate(90deg)";
        tab.style.right = "-10%";
        tab.style.bottom = "-40%";
        cii.style.left = "0%";
        cii.style.top = "0%";
        cii.style.width = "100%";
        cii.style.height = "100%";
        cii.style.borderRadius = "0px";
        cii.style.backgroundColor = " #ffbb00";
        daw.style.opacity = "1";
        cii.style.color = "black";



    })


    csi.addEventListener("mouseout", function() {
        tab.style.right = ("44px");
        tab.style.bottom = ("-19px");
        tab.style.transform = "rotate(45deg)";
        tar.style.right = ("-51px");
        tar.style.bottom = ("-108px");
        csd.style.left = "-40%";
        csd.style.top = "20%";
        csd.style.width = "700px";
        csd.style.height = "700px";
        csd.style.borderRadius = "100%";
        csd.style.backgroundColor = "#333333"
        sevron.style.opacity = "0";
        csd.style.color = "transparent";
        csd.style.borderColor = "transparent";

    })


    cid.addEventListener("mouseout", function() {
        tar.style.right = ("-51px");
        tar.style.bottom = ("-108px");
        tab.style.right = ("44px");
        tab.style.bottom = ("-19px");
        tab.style.transform = "rotate(45deg)";
        cii.style.left = "60%";
        cii.style.top = "-80%";
        cii.style.width = "700px";
        cii.style.height = "700px";
        cii.style.borderRadius = "100%";
        cii.style.backgroundColor = "#333333";
        daw.style.opacity = "0";
        cii.style.color = "transparent";

        cii.style.borderColor = "black";

    })
};