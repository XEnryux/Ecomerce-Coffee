function validaciones(evento){
   //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
   if(avatar.value == ''){
    errores.push('Debe seleccionar su avatar en formato JPG - PNG ó JPEG');
    avatar.classList.add('is-invalid');   
    //errores['last_name'] = 'El campo nombre no puede estar vacio...';
}else{
    avatar.classList.add('is-valid');
    avatar.classList.remove('is-invalid');
}
}   