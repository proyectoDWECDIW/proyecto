function listaJuegos(e) {
  $("img.imagenGeneros").addClass("oculto");
  $("p.pGeneros").addClass("oculto");
  $(document.getElementById(e.target.id)).removeClass("oculto");
  var fotoGenero=$(document.createElement("img")).attr("style", "width:75%;").attr("src", e.target.id + ".png").attr("class", "listaJuegos");
  $(".fotos").append(fotoGenero);
  $(document.getElementById(e.target.id)).attr("onclick", "listaGeneros(event);");
}

function listaGeneros (e){
  $("img.imagenGeneros").removeClass("oculto");
  $("p.pGeneros").removeClass("oculto");
  $("img.listaJuegos").addClass("oculto");
  $("button.volver").addClass("oculto");
  $(document.getElementById(e.target.id)).attr("onclick", "listaJuegos(event);");
}
