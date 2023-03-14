    document.getElementById("textOne").addEventListener("keyup",result); 
        function result(e){
       let palabra = e.target.value.toUpperCase();
        this.value =palabra;
       console.log(palabra)

       document.getElementById("encode").addEventListener("click",cifrar);
        function cifrar(e){
        let frase = document.getElementById("textOne").value;
        console.log(frase)
        let desplazamiento = document.getElementById("displacement").value;
        document.getElementById("messageOne").value = cifrar(frase,desplazamiento);
     };


                };

    





     document.getElementById("cipher").addEventListener("click",descifrar);
     function descifrar(e){
         let frase = document.getElementById("textOne").value;
         let desplazamiento = document.getElementById("displacement").value;
         document.getElementById("messageTwo").value = descifrar(frase,desplazamiento);
      };

      function cifrar(frase,desplazamiento){
        let resultado = "";
        let abcdario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      }