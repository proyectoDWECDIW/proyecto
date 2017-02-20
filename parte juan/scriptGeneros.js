function listaJuegos(e) {
  var miE = e.target;
  console.log(miE);
  $("img").addClass("oculto");
  $("p").addClass("oculto");
  miE.style.display = "inline-block";

  var fotoGenero=$(document.createElement("img")).attr("style", "width:75%;").attr("src", e.target.id + ".png");
  $("body").append(fotoGenero);
}
