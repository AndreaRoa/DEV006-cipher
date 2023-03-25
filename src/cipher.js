

const cipher = {
  //  decifrar
  decode: function (offset, message) {
    let newAscci;
    let newMessage = "";
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
  },

  //cifrar
  encode: function (offset, message) { //offset numero // message cadena de texto
    let newAscci;
    let newMessage = "";
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
  },
};

export default cipher;