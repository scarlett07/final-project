var tdc= prompt("Ingresa el número de tarjeta");
var numberCardInverse =[];
var numberCardSum = 0;


var isValidCar= function(tdc){
  if (tdc.length===0){
      return alert("Ingresa un número válido");
  }else{
    numberCardInverse .split('');
    numberCardInverse .reverse();
    for(i=0;i<numberCardInverse.length;i++){
      if(i%2!==0){
        var result = 0;
        result =numberCardInverse[i]*2;
        if(result>=10){
          result= result.toString();
          var newDigit=parseInt(result[0])+parseInt(result[1]);
          else {
            newDigit=result;
          }
        }
      }else {
        
      }
    }
  }
}
