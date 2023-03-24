document.getElementById("encode").addEventListener("click",cipher);
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


   document.getElementById("decipher").addEventListener("click",decipher);
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

/*let cerrar =document.querySelectorAll(".close")[0];
let abrir =document.querySelectorAll(".InformationButton")[0];
let modal=document.querySelectorAll(".modalClose")[0];
let modalContainer =document.querySelectorAll(".modalContainer")[0];

abrir.addEventListener("click",function(e){
   e.preventDefault();
   modalContainer.style.opacity = "1";
   modalContainer.style.visibility = "visible";
   modal.classList.toggle("modalClose");
}); */
