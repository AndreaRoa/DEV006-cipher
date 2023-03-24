function cipher(){
    let saveMessage = document.getElementById("message").value;
    let newMessage = "";
   let offset = Number(displacement.value);
   for (let i = 0; i<saveMessage.length; i++){
      let messageAscci = saveMessage.charCodeAt(i);

      if (messageAscci >= 65 && messageAscci <= 90){
         newMessage += String.fromCharCode(((messageAscci - 65 + offset)  % 26)+ 65);
         console.log(newMessage);
           }
      if(messageAscci >=97 && messageAscci <=122){
         newMessage += String.fromCharCode(((messageAscci - 97 + offset)  % 26)+ 97);   
         }
      if (messageAscci === 32) {
        newMessage += " ";
        }
         messageTwo.innerHTML = (newMessage);
   }
   }

   function decipher(){
    let saveMessage = document.getElementById("message").value;
    let newMessage = "";  
    let offset = Number(displacement.value);
    for (let i = 0; i<saveMessage.length; i++){
       let messageAscci = saveMessage.charCodeAt(i);
 
       if (messageAscci >= 65 && messageAscci <= 90){
          newMessage += String.fromCharCode(((messageAscci - 65 - offset)  % 26)+ 65);
          console.log(newMessage);
            }
       if(messageAscci >=97 && messageAscci <=122){
          newMessage += String.fromCharCode(((messageAscci - 97 - offset)  % 26)+ 97);   
          }
       if (messageAscci === 32) {
         newMessage += " ";
         }
          messageTwo.innerHTML = (newMessage);
    }
 }
 
 export default cipher;