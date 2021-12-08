function validar_nombre(nombre){
   
    let tamano=String(nombre).length;

        for(x=0; x<tamano; x++){
            c=nombre.charAt(x);

            if (!((c >= 'a' && c <='z') || (c >= 'A' && c <='Z') || c=='ñ' || c=='Ñ')){
                return "El campo debe contener solo letras";
            }else{
                return ""
            }
        }
        if (nombre == ""){
            return "El campo no puede estar vacío";
        }else{
            return ""
        }
        }


function validar_username(username){
    if (username == ""){
        return "El campo no puede estar vacío";
    }else{
        return ""
    }
}

function validar_cedula(cedula){
    let contar=0;
    while(cedula!=0){
        cedula=Math.trunc(cedula/10);
        contar=contar+1;
    }
    if(contar>5 && contar<=10){
        return "";
    }else{
        return "La cédula debe contener entre 6 y 10 números";
    }
}
function validar_email(email) {
    
            if ((/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email))){
                return "";
               }else{
                return "La dirección de email debe seguir la estructura ejemplo@gmail.com";
               }
}

function validar_contrasena(contrasena){
    if (contrasena == ""){
        return "El campo no puede estar vacío";
    }else{
        return ""
    }
}
function validar_botonregistrar(nombre, username, cedula, email, contrasena){
    var val_nombre = validar_nombre(nombre);
    var val_username = validar_username(usermane);
    var val_cedula = validar_cedula(cedula);
    var val_email = validar_email(email);
    var val_contrasena = validar_contrasena(contrasena);
    if (val_nombre == "" && val_username == "" && val_cedula=="" && val_email == "" && val_contrasena==""){
        return true;
    }else{
        return false;
    }
}


function validar_botonlogin(username, contrasena){
    if (username == ""|| contrasena=="" ){
        return false;
    }else{
        return true;
    }
}

    

