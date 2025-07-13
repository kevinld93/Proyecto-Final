function validarFormulario() {
    
    let nombre=document.getElementById("nombre").value
    let email=document.getElementById("email").value
    let mensaje=document.getElementById("mensaje").value
    let mensajeE=document.getElementById("mensajeE")
    mensajeE.style.backgroundColor="white"
    mensajeE.style.color="red"
   

     
    if (nombre.trim()===""){
        mensajeE.textContent="El nombre no puede estar vacio"
       
        document.getElementById("nombre").style.borderColor="red"
        let nom=document.getElementById("nombre")
        nom.style.color="red"
     return false;
    }
    else{
        document.getElementById("nombre").style.borderColor="black"
    }
    
    
    if (email.trim()===""){
        mensajeE.textContent="El email no puede estar vacio"
        
        let email2=document.getElementById("email")
        email2.style.borderColor="red"
        return false;
        
    }
    else{
        document.getElementById("email").style.borderColor="black"
    }
     
    if(mensaje.trim()===""){
        mensajeE.textContent="El mensaje no puede estar vacio"
      
      let mensaje2=document.getElementById("mensaje") 
      mensaje2.style.borderColor="red"
        return false;
      
}
 else{
        document.getElementById("mensaje").style.borderColor="black"
    }
 
 alert("El formulario fue enviado")

 return true;
}