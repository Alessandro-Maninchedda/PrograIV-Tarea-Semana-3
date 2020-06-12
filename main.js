$(document).ready(function(){
   var subtotal = 0;
   var ultimo_operador = "";
   $(".numero").click(function(){
     var numero = $(".total-calcu").val() + $(this).val();
     $(".total-calcu").val(numero);
   });
   $(".operador").click(function(){
     var numero = $(".total-calcu").val(); 
     var operador = $(this).val(); 
     ultimo_operador = operador;
     if(numero != ""){
       if(ultimo_operador == "+"){
         subtotal = parseInt(subtotal) + parseInt(numero);
       }else if(ultimo_operador == "-"){
         subtotal = parseInt(subtotal) - parseInt(numero);
       }
       else if(ultimo_operador == "/"){
         subtotal = parseInt(subtotal) / parseInt(numero);
       }else{
         subtotal = parseInt(subtotal) * parseInt(numero);
       }
       alert(subtotal);
       $(".total-calcu").val(''); 
       $(".sub-total").val(
               $(".sub-total").val()  + numero + operador
       );
     }
   });
   $(".total-operacion").click(function(){
     var numero = $(".total-calcu").val();
     if(numero != ""){
       if(ultimo_operador == "+"){
         subtotal = parseInt(subtotal) + parseInt(numero);
       }else if(ultimo_operador == "-"){
         subtotal = parseInt(subtotal) - parseInt(numero);
       }
       else if(ultimo_operador == "/"){
         subtotal = parseInt(subtotal) / parseInt(numero);
       }else{
         subtotal = parseInt(subtotal) * parseInt(numero);
       }
     }
     $(".total-calcu").val(subtotal);
   });
 });
