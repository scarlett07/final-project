
var originalMessage=prompt("Hola, por favor escribe el mensaje que quieres cifrar").toUpperCase();
var originalMessageAscii=[];
var encryptedMessageAscii=[];
var encryptedMessage=[];
var message='';
var messageEncriptedAscii=[];
var messageDecipherAscii=[];
var messageDecipher=[];
var messageOrigin='';


var cipher = function (originalMessage){
  originalMessage=originalMessage.split('');
  if (originalMessage.length===0){
    return alert('Ingresa un mensaje válido')
  }else{
    for(i=0;i<originalMessage.length;i++){
      originalMessageAscii.push(originalMessage[i].charCodeAt(0));
      }
    for (j=0;j<originalMessageAscii.length;j++){
      if(originalMessageAscii[j]===32){
        originalMessageAscii[j]=encryptedMessageAscii.push(' ');
      }else{
        encryptedMessageAscii.push(((originalMessageAscii[j]-65+33)%26+65));
      }
    }
    for(k=0;k<encryptedMessageAscii.length;k++){
      if (encryptedMessageAscii[k]===' '){
        encryptedMessageAscii[k]=encryptedMessage.push(' ');
      }else{
        encryptedMessage.push(String.fromCharCode(encryptedMessageAscii[k]));
      }
    }
    message = encryptedMessage.join('');
    return document.write('Tu mensaje encriptado es: '+ message);
  }
}


cipher(originalMessage);


var decipher=function(message){
  message=message.split('');
  for(i=0;i<message.length;i++){
    messageEncriptedAscii.push(message[i].charCodeAt(0));
    }
  for (j=0;j<messageEncriptedAscii.length;j++){
    if(messageEncriptedAscii[j]===32){
      messageEncriptedAscii[j]=messageDecipherAscii.push(' ');
    }else{
      messageDecipherAscii.push(((messageEncriptedAscii[j]+65-33)%26+65));
    }
  }
  for(k=0;k<messageDecipherAscii.length;k++){
    if (messageDecipherAscii[k]===' '){
      messageDecipherAscii[k]=messageDecipher.push(' ');
    }else{
    messageDecipher.push(String.fromCharCode(messageDecipherAscii[k]));
    }
  }
  messageOrigin = messageDecipher.join('');
   return document.write('<br>Tu mensaje desencriptado es: '+ messageOrigin);
}


 decipher(message);
