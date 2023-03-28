
const cipher = {
  //  decifrar
 
  decode: function (offset, message) {
    let newAscci;
    let newMessage = "";

    if (!offset,!message){
      throw new TypeError("Ingrese clave y mensaje.");
    }
    if(!offset){
      throw new TypeError("Ingrese clave.");
    }
    if(!message){

      throw new TypeError("Ingrese el mensaje.");
    }
    if(offset === 0){
      throw new TypeError("Ingrese un valor entero");
    }
    else{

      for (let i = 0; i < message.length; i++) {
        const menssageAscci = message.charCodeAt(i);
        if (menssageAscci >= 65 && menssageAscci <= 90) {
          newAscci = ((menssageAscci - 65 - offset) % 26) + 65;
          if (newAscci < 65) {
            newAscci = newAscci + 26;
          }
        } else if (menssageAscci >= 97 && menssageAscci <= 122) {
          newAscci = ((menssageAscci - 97 - offset) % 26) + 97;
          if (newAscci < 97) {
            newAscci = newAscci + 26;
          }
        } else newAscci = menssageAscci;
        newMessage += String.fromCharCode(newAscci);
      }
      return newMessage;
    }
  },

  //cifrar
  encode: function (offset, message) { //offset numero // message cadena de texto
    let newAscci;
    let newMessage = "";

    if (!offset,!message){
      throw new TypeError("Ingrese clave y mensaje.");
    }
    if(!offset){
      throw new TypeError("Ingrese clave.");
    }
    if(!message){
      throw new TypeError("Ingrese mensaje");
    }
    if(!offset === 0){
      throw new TypeError("Ingrese un valor entero");
    }
    else{

      for (let i = 0; i < message.length; i++) {
        const menssageAscci = message.charCodeAt(i);
        if (menssageAscci >= 65 && menssageAscci <= 90) {
          newAscci = ((menssageAscci - 65 + offset) % 26) + 65;
          if (newAscci < 65) {
            newAscci = newAscci + 26;
          }
        } else if (menssageAscci >= 97 && menssageAscci <= 122) {
          newAscci = ((menssageAscci - 97 + offset) % 26) + 97;
          if (newAscci < 97) {
            newAscci = newAscci + 26;
          }
        } else newAscci = menssageAscci;
        newMessage += String.fromCharCode(newAscci);
      }
  
      return newMessage;
    }
  },
};

export default cipher;