let formulario=document.querySelector(".formulario3");
let inputsFormu=document.querySelectorAll(".rgt2 input");

const expresiones = {
    nombres: /^[a-zA-ZÀ-ÿ\s]{4,}$/,
    apellidos: /^[a-zA-ZÀ-ÿ\s]{4,}$/,
    documento: /^[0-9]{6,}$/,
    direccion: /^[a-zA-ZÀ-ÿ0-9\s\#\.\/\_\-]{7,200}$/,
    telefono: /^[0-9]{10,16}$/,
    cargo: /^[a-zA-Z\s]+$/,

    // Registrar usuario
    nombreUsuario: /^[0-9a-zA-ZÀ-ÿ\s\_\-]{4,}$/,
    password: /^(?=.[a-z])(?=.[A-Z])(?=.\d)[A-Za-z\d@$!%?&]{8,}$/
}
let validarFormulario=(e)=>{
    switch(e.target.name){
        case "Nombre":
            if (expresiones.nombres.test(e.target.value)) {
                
            }else{
                document.getElementById('grupo_Nombre').classList.add(formulario3__grupo-correcto);
            }
        break;
        case "Papellido":
            
        break;
        case "Sapellido":
            
        break;
        case "Contraseña":
            
        break;
        case "Ccontraseña":
            
        break;
    }
}

inputsFormu.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});