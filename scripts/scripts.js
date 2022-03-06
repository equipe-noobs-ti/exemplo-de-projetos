$(document).ready(function(){    
    $("button").click(function(){
       var cep =  $("#cep").val()
       
      $.get("https://viacep.com.br/ws/"+cep+"/json", function(data, status){
        document.getElementById("texto").innerHTML = JSON.stringify(data);
      });
    });
  });