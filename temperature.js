"use strict";
function Medida(valor, tipo){
  this.valor_=valor;
  this.tipo_=tipo;
}

 function Temperatura (valor, tipo){
   Medida.call(this, valor, tipo);
 }

 Temperatura.prototype = new Medida();

 Medida.prototype.get_valor = function(){ return this.valor_; }

 Medida.prototype.get_tipo = function(){ return this.tipo_; }

 Medida.prototype.set_valor = function(valor){ this.valor_=valor; }

 Medida.prototype.set_tipo = function(tipo){ this.tipo_=tipo; }

 Temperatura.prototype.pasar_a_f = function(){ return (this.get_valor()*9/5)+32; }

 Temperatura.prototype.pasar_a_c = function(){ return (this.get_valor()-32)*5/9; }

 function convertir(){
     var result=new Temperatura();
     var temp=original.value;

     if(temp){
       var regexp = /([-+]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*([fFcC])/;
       var valor = temp.match(regexp);

       if(valor){
         var temp_=new Temperatura();

         temp_.set_valor(parseFloat(valor[1]));
         temp_.set_tipo(valor[2]);

         if (temp_.get_tipo() == 'c' || temp_.get_tipo() == 'C') {
           result.set_valor(temp_.pasar_a_f());
           result.set_tipo("Fahrenheit");
         }else {
           result.set_valor(temp_.pasar_a_c());
           result.set_tipo("Celsius");
         }
         result = result.get_valor() + " " + result.get_tipo();
         converted.innerHTML = result;
       }
       else {
         converted.innerHTML = "ERROR! Pruebe algo como esto '-4.2C' o '-4.2e15C'";
       }
     }
   }
