onload = function(){
var formulario = document.forms[0];
comprobar.onclick = function(e){
  e.preventDefault();
  var ramM = document.getElementsByName('ramM')[0].value;
  var ramR=document.getElementsByName('ramR')[0].value;
  if(!(/^\d{1,2}$/.test(ramM))||!(/^\d{1,2}$/.test(ramR))){
    alert("Escribe un numero en la ram");
  }
  var cogeInput=document.querySelectorAll(".validacion");
  for(var i=0;i<cogeInput.length;i++){
    if(cogeInput[i].value==null || cogeInput[i].lenght.value==0){
      cogeInput[i].addClass("error");
      
    }
  }
}
}
