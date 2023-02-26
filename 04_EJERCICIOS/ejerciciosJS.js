function calcularGanancia(){
    let capital = document.getElementById("capital").value;
    let meses = document.getElementById("meses").value;
    let ganancia = capital * meses * 0.02;
    document.getElementById("ganancia").value = ganancia;
}
function calcularComision() {
    let sueldo = document.getElementById("sueldoBase").value;
    let venta1 = document.getElementById("venta1").value;
    let venta2 = document.getElementById("venta2").value;
    let venta3 = document.getElementById("venta3").value;
    venta1 = parseInt(venta1);
    venta2 = parseInt(venta2);
    venta3 = parseInt(venta3);
    let comision = (venta1 + venta2 + venta3) * 0.1;
    document.getElementById("comision").value = comision;
    sueldo = parseInt(sueldo);
    let ans = sueldo + comision;
    document.getElementById("total").value = ans;
}
function calcularDescuento() {
    let precio = document.getElementById("precio").value;
    let descuento = .15;
    precio = parseInt(precio);
    let descuentoTotal = precio * descuento;
    document.getElementById("descuento").value = descuentoTotal;
    let ans = precio + descuentoTotal;
    document.getElementById("totalCompra").value = ans;
}
function calcularCalificacion() {
    let parcial1 = document.getElementById("calificacion1").value;
    let parcial2 = document.getElementById("calificacion2").value;
    let parcial3 = document.getElementById("calificacion3").value;
    let examenFinal = document.getElementById("examenFinal").value;
    let trabajoFinal = document.getElementById("trabajoFinal").value;
    parcial1 = parseInt(parcial1);
    parcial2 = parseInt(parcial2);
    parcial3 = parseInt(parcial3);
    examenFinal = parseInt(examenFinal);
    trabajoFinal = parseInt(trabajoFinal);
    let promedio = (parcial1 + parcial2 + parcial3) / 3;
    let calificacion = (promedio * .55) + (examenFinal * .3) + (trabajoFinal * .15);
    document.getElementById("calificacionFinal").value = calificacion;
}
function calcularPorcentaje() {
    let hombres = document.getElementById("hombres").value;
    let mujeres = document.getElementById("mujeres").value;
    hombres = parseInt(hombres);
    mujeres = parseInt(mujeres);
    let total = hombres + mujeres;
    let porcentajeHombres = (hombres / total) * 100;
    let porcentajeMujeres = (mujeres / total) * 100;
    document.getElementById("porcentajeHombres").value = porcentajeHombres;
    document.getElementById("porcentajeMujeres").value = porcentajeMujeres;
}
function calcularEdad() {
    let fechaNacimiento = document.getElementById("añoNacimiento").value;
    let fechaActual = document.getElementById("añoActual").value;
    fechaNacimiento = parseInt(fechaNacimiento);
    fechaActual = parseInt(fechaActual);
    let edad = fechaActual - fechaNacimiento;
    document.getElementById("edad").value = edad;
}
function calcularOperacion() {
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    let ans;
    if (n1 == n2) {
        ans = n1 * n2;
    }
    else if (n1 > n2) {
        ans = n1 - n2;
    }
    else {
        ans = n1 + n2;
    }
    document.getElementById("resultado").value = ans;
}
function calcularMayor() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
    let ans;
    if (n1 > n2 && n1 > n3) {
        ans = n1;
    }
    else if (n2 > n1 && n2 > n3) {
        ans = n2;
    }
    else {
        ans = n3;
    }
    //Tambien es válido:
    //let ans = Math.max(numeros);, si estos estan en un array
    document.getElementById("mayor").value = ans;
}
function calcularHorasExtras() {
    let horas = document.getElementById("horas").value;
    let pago = document.getElementById("pagoHora").value;
    pago = parseInt(pago);
    horas = parseInt(horas);
    let primeras8 = 8*2*pago;
    let ans;
    if (horas <= 40) {
        ans = 0;
    }
    else if (horas > 40 && horas <= 48) {
        ans = (horas - 40) * 2;
    }
    else if (horas > 48){
        ans = primeras8 + ((horas - 48) * 3);
    }
    let final = ans + (pago*horas);
    document.getElementById("pago").value = ans;
    document.getElementById("final").value = final;
}
function calcularUtilidad() {
    let salario = document.getElementById("salario").value;
    let tiempo = document.getElementById("tiempo").value;
    salario = parseInt(salario);
    tiempo = parseInt(tiempo);
    let ans;
    if (tiempo < 1) {
        ans = salario * 0.05;
    }
    else if (tiempo >= 1 && tiempo < 2) {
        ans = salario * 0.07;
    }
    else if (tiempo >= 2 && tiempo < 5) {
        ans = salario * 0.1;
    }
    else if (tiempo >= 5 && tiempo < 10) {
        ans = salario * 0.15;
    }
    else {
        ans = salario * 0.2;
    }
    document.getElementById("utilidad").value = ans;
}