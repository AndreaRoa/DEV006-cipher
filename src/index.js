import cipher from './cipher.js';


const displacement=document.getElementById("displacement");
const messageTwo=document.getElementById("messageTwo");
const saveMessage=document.getElementById("message");

function getEncode(){
  const messageEncode=cipher.encode(Number(displacement.value),saveMessage.value);
  messageTwo.innerHTML=messageEncode;
}

function getDecode(){
  const messageDecode=cipher.decode(Number(displacement.value),saveMessage.value);
  messageTwo.innerHTML=messageDecode;
}

document.getElementById("encode").addEventListener("click",getEncode);
document.getElementById("decode").addEventListener("click",getDecode);

