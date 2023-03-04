function calcularInteresCompuesto(e) {
    let VALIDADO = true;
    let capitalInicial = document.getElementById("capital").value;
    let interesAnual = document.getElementById("interes").value;
    let numeroAnios = document.getElementById("años").value;
    if (capitalInicial == "" || interesAnual == "" || numeroAnios == "") {
        alert("Alguno(s) de los campos esta vacío o no es un número");
        VALIDADO = false;
    }
    try {
        capitalInicial = parseFloat(capitalInicial);
        interesAnual = parseInt(interesAnual);
        numeroAnios = parseInt(numeroAnios);
    } catch (exception) {
        alert("NO se ingreso un valor válido")
        VALIDADO = false;
    }
    if (VALIDADO) {
        if (capitalInicial <= 0 || interesAnual <= 0 || numeroAnios <= 0) {
            alert("Debe introducir valores mayores a 0");
            VALIDADO = false;
        }
        else if (capitalInicial > 1000000000 || interesAnual > 1000 || numeroAnios > 100) {
            VALIDADO = false;
            alert("Alguno(s) de los valores es/son demasiado grande(s)");
        }
        else if (numeroAnios % 1 != 0) {
            alert("El numero ingresado en 'A un plazo de: ' no es entero")
            VALIDADO = false;
        }
        else {
            VALIDADO = true;
        }
        if (VALIDADO) {
            let ans = capitalInicial * Math.pow((1 + interesAnual / 100), numeroAnios);
            document.getElementById("ans").value = ans;
            let tiempo = 0;
            let restanteI = 0;
            let cuota = 0;
            let cuotaI = 0;
            let montoI = 0;
            let interesI = 0;
            let final = 0;
            let finalI = 0;
            let interes = 0;
            let totalI = 0;
            let totalC = 0;
            let totalP = 0;
            let tiempoMeses = numeroAnios * 12;
            let monto = capitalInicial / tiempoMeses;
            let restante = capitalInicial;
            for (let i = 0; i < tiempoMeses; i++) {
                interes = restante * 0.08;
                cuota = interes + monto;
                restanteI += restante.toFixed(2) + "\n";
                tiempo += i + 1 + "\n";
                montoI += monto.toFixed(2) + "\n";
                cuotaI += cuota.toFixed(2) + "\n";
                interesI += interes.toFixed(2) + "\n";
                restante = capitalInicial - monto;
                capitalInicial = restante;
                final = restante;
                finalI += Math.abs(final.toFixed(2)) + "\n";
                totalI += interes;
                totalP = monto * tiempoMeses;
                totalC = totalP + totalI;
            }
            document.querySelector("#inversiones").textContent = restanteI;
            document.querySelector("#intereses").textContent = interesI;
            document.querySelector("#perro").textContent = montoI;
            document.querySelector("#cuota").textContent = cuotaI;
            document.querySelector("#periodo").textContent = tiempo;
            document.querySelector("#final").textContent = finalI;
            document.querySelector("#totalInteres").textContent = totalI.toFixed(2);
            document.querySelector("#totalPago").textContent = totalP.toFixed(2);
            document.querySelector("#totalCuota").textContent = totalC.toFixed(2);
        }
    }
    return false;
}