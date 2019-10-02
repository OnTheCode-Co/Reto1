alert("cooooooooo");

//document.cookie = "nombrecookie=valorcookie; max-age=un dia; path=/";
//document.cookie = "c_animacion=true; max-age=86400; path=/";

//alert(document.cookie);
/*
function getCookie(c_animacion){
    if(c_animacion == true){
        alert("Animación activa");
    }else{
        alert("Animacón DESACTIVADA");
    }
}
*/
/*
    function getCookie(c_animacion){
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1){
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1){
            c_value = null;
        }else{
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1){
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
    }
     
    function setCookie(c_name,value,exdays){
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
    }
     
    if(getCookie('tiendaaviso')!="1"){
        document.getElementById("barraaceptacion").style.display="block";
    }
    function PonerCookie(){
        setCookie('tiendaaviso','1',365);
        document.getElementById("barraaceptacion").style.display="none";
    }
    */