const displacement=document.getElementById("displacement").value;
const messageTwo=document.getElementById("messageTwo");
function cipher(){
  const saveMessage=document.getElementById("message").value;
  let newMessage="";
  const offset = Number(displacement);
  for (let i = 0; i<saveMessage.length; i++){
    const messageAscci = saveMessage.charCodeAt(i);

    if (messageAscci >= 65 && messageAscci <= 90){
      newMessage += String.fromCharCode(((messageAscci - 65 + offset)  % 26)+ 65);
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
  const saveMessage = document.getElementById("message").value;
  let newMessage = "";  
  const offset = Number(displacement.value);
  for (let i = 0; i<saveMessage.length; i++){
    const messageAscci = saveMessage.charCodeAt(i);
 
    if (messageAscci >= 65 && messageAscci <= 90){
      newMessage += String.fromCharCode(((messageAscci - 65 - offset)  % 26)+ 65);
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
 
export {cipher,decipher};