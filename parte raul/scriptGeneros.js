if (window.XMLHttpRequest) {
  var xhr = new XMLHttpRequest();
}else if (ActiveXObject("Microsoft.XMLHTTP")){
  var xhr = ActiveXObject("Microsoft.XMLHTTP")
}

function listaJuegos(e) {
  $("img.imagenGeneros").addClass("oculto");
  $("p.pGeneros").addClass("oculto");
  $(document.getElementById(e.target.id)).removeClass("oculto");
  $(document.getElementById(e.target.id)).parent().parent().css({left: "30%", position: "absolute"});
  xhr.onreadystatechange = gestionarDatos;
  xhr.open('GET', e.target.id + '.txt', true);
  xhr.send();
  var fotoGenero=$(document.createElement("img")).css({width:"80%", float: "left"}).attr("src", e.target.id + ".png").attr("class", "listaJuegos");
  $(".fotos").append(fotoGenero);
  $(document.getElementById(e.target.id)).attr("onclick", "listaGeneros(event);");
}

function gestionarDatos(){
  if (xhr.readyState == 4 && xhr.status == 200) {
    texto.innerText = xhr.responseText;
  }else if(xhr.readyState == 4 && xhr.status != 200) {
    var str = "Se ha producido el error: " + xhr.status;
    str += "\n " + xhr.statusText;
    str += "\n Más información";
    str += "\n " + xhr.getAllResponseHeaders;
  }
}

function listaGeneros (e){
  $("img.imagenGeneros").removeClass("oculto");
  $("p.pGeneros").removeClass("oculto");
  $("img.listaJuegos").addClass("oculto");
  $("p#texto").addClass("oculto");
  $("button.volver").addClass("oculto");
  $(document.getElementById(e.target.id)).attr("onclick", "listaJuegos(event);");
  $(document.getElementById(e.target.id)).parent().parent().css({left: "initial", position: "initial"});
}
