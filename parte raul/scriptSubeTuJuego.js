onload = function(){
var formulario = document.forms[0];

comprobar.onclick = function(e){
  console.log(e);
  e.preventDefault();
  //Errores 1
  var err = document.getElementsByClassName('errores')[0];
  var errList ="";
  //Errores 2
  var err2 = document.getElementsByClassName('errores2')[0];
  var errList2 ="";
  //Errores 3
  var err3 = document.getElementsByClassName('errores3')[0];
  var errList3 ="";
  var ret = true;
  //Ram validacion
  var ramMin = document.getElementsByName('ramM')[0].value;
  var cogeramM=ramM.value;
  var longramM=ramM.value.length;
  var ramReq=document.getElementsByName('ramR')[0].value;
  if(!(/^\d{1,2}$/.test(ramMin))||longramM==0||cogeramM==null){
    errList2 += "Escribe algo en Ram o un numero <br/>";
    ret = false;
    $("#ramM").addClass("error");
    $(".error").css("border-color","red");
  }
  var cogeramR=ramR.value;
  var longramR=ramR.value.length;
  if(!(/^\d{1,2}$/.test(ramReq))||longramR==0||cogeramR==null){
    errList3 += "Escribe algo en Ram o un numero <br/>"
    ret = false;
    $("#ramR").addClass("error");
    $(".error").css("border-color","red");
  }
  //Valida nombre
  var cogeNombre=nombre.value;
  var longNombre=nombre.value.length;
  if(longNombre==0||cogeNombre==null){
    errList += "Escribe el nombre del juego <br/>"
    ret = false;
    $("#nombre").addClass("error");
    $(".error").css("border-color","red");
  }
  //Valida check
  var gen = document.getElementsByName("genero")[0].selectedIndex;
  if (gen == null || gen == 0){
      errList += "Escoja un genero <br/>";
      ret = false;
      $("#genero").addClass("error");
      $(".error").css("border-color","red");
  }
  //Valida descripcion del juego
  var cogeDescr=descripcion.value;
  var longDescr=descripcion.value.length;
  if(longDescr==0||cogeDescr==null){
    errList += "Escribe alguna descripcion del juego <br/>"
    ret = false;
    $("#descripcion").addClass("error");
    $(".error").css("border-color","red");
  }
  //Valida CPU de requisitos Minimos
  var cogeCPUM=cpuM.value;
  var longCPUM=cpuM.value.length;
  if(longCPUM==0||cogeCPUM==null){
    errList2 += "Escribe algo en CPU <br/>"
    ret = false;
    $("#cpuM").addClass("error");
    $(".error").css("border-color","red");
  }
  //Valida GPU de requisitos Minimos
  var cogeGPUM=gpuM.value;
  var longGPUM=gpuM.value.length;
  if(longGPUM==0||cogeGPUM==null){
    errList2 += "Escribe algo en GPU <br/>";
    ret = false;
    $("#gpuM").addClass("error");
    $(".error").css("border-color","red");
  }
  //Valida HDD requisitos Minimos
  var cogeHdd=hddM.value;
  var longHdd=hddM.value.length;
  if(longHdd==0||cogeHdd==null){
    errList2 += "Escribe algo en HDD <br/>";
    ret = false;
    $("#hddM").addClass("error");
    $(".error").css("border-color","red");
  }
  //Validacion Caratula
  var cogeCaratula=archivo.value.length;
  if(cogeCaratula==0){
    errList2 += "Tienes que enviar una caratula<br/>";
    ret = false;
  }
  //Validar que sea una imagen
  if(cogeCaratula==0|| !$('#archivo').val().match(/.(jpg)|(JPEG)$/)) {
    errList2 += "No has puesto un archivo imagen<br/>";
    ret = false;
  }
  //Valida Cpu requisitos Recomendados
  var cogecpuR=cpuR.value;
  var longcpuR=cpuR.value.length;
  if(longcpuR==0||cogecpuR==null){
    errList3 += "Escribe algo en CPU <br/>"
    ret = false;
    $("#cpuR").addClass("error");
    $(".error").css("border-color","red");
  }
  //Valida Tarjeta Grafica requisitos Recomendados
  var cogegpuR=gpuR.value;
  var longgpuR=gpuR.value.length;
  if(longgpuR==0||cogegpuR==null){
    errList3 += "Escribe algo en GPU <br/>"
    ret = false;
    $("#gpuR").addClass("error");
    $(".error").css("border-color","red");
  }
  //Valida HDD requisitos Recomendados
  var cogeHddR=hddR.value;
  var longHddR=hddR.value.length;
  if(longHddR==0||cogeHddR==null){
    errList3 += "Escribe algo en HDD <br/>"
    ret = false;
    $("#hddR").addClass("error");
    $(".error").css("border-color","red");
  }
  if (ret){
    errList2 = "Tu petición se ha enviado correctamente";
    err.style.color="blue";
    err2.style.color="blue";
    err3.style.color="blue";
  }else{
    err.style.color="red";
    err2.style.color="red";
    err3.style.color="red";
  }

  err.innerHTML = errList;
  err2.innerHTML = errList2;
  err3.innerHTML = errList3;
  return ret;

}

// Parte de Raul:
$('#archivo').fileinput({mainClass: "input-group-lg"});

}
