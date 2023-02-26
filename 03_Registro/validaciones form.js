function validar(form) {
    let email = form.correo.value;
    let emailRE = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let letrascheck = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    let Letras = true;
    for (let i = 0; i < form.nombre.value.length; i++) {
        Letras = false;
        for (let j = 0; j < letrascheck.length; j++) {
            if (form.nombre.value.charAt(i) == letrascheck.charAt(j)) {
                Letras = true;
            }
        }
        if (Letras == false) {
            break;
        }
    }
    let fecha = form.fecha.value;
    let fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    let fechaIngresada = new Date(fecha);
    let dia = fechaIngresada.getDate();
    let mes = fechaIngresada.getMonth() + 1;
    if (fechaIngresada > fechaActual) {
        alert("La fecha ingresada es mayor a la actual. . .");
        form.fecha.focus();
        return false;
    }
    if (mes == 2 && dia > 29) {
        alert("El mes de febrero no tiene mas de 29 dias");
        form.fecha.focus();
        return false;
    }

    if (form.nombre.value.length <= 3) {
        alert("Favor de ingresar mas de tres caracteres en campo nombre . . .");
        form.nombre.focus();
        return false;
    }
    if (!Letras) {
        alert("Caracter especial detectado, ingresa un nombre válido . . .");
        form.nombre.focus();
        return false;
    }
    if (!emailRE.test(email)) {
        alert("Ingresa un correo valido");
        form.correo.focus();
        return false;
    }
}