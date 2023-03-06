function problema1() {
    let input = document.querySelector('#p1-input').value;
    let inputArr = input.split(' ');
    let ans = '';
    inputArr.forEach(function (palabras) {
        ans += palabras.split('').reverse().join('') + ' ';
    });
    document.querySelector('#p1-output').textContent = ans;
}
function problema2() {
    let x1 = document.querySelector('#p2-x1').value;
    let x2 = document.querySelector('#p2-x2').value;
    let x3 = document.querySelector('#p2-x3').value;
    let x4 = document.querySelector('#p2-x4').value;
    let x5 = document.querySelector('#p2-x5').value;
    let y1 = document.querySelector('#p2-y1').value;
    let y2 = document.querySelector('#p2-y2').value;
    let y3 = document.querySelector('#p2-y3').value;
    let y4 = document.querySelector('#p2-y4').value;
    let y5 = document.querySelector('#p2-y5').value;
    let VALIDADO = true;

    if (x1 == "" || x2 == "" || x3 == "" || x4 == "" || x5 == "" || y1 == "" || y2 == "" || y3 == "" || y4 == "" || y5 == "") {
        alert("Alguno(s) de los campos esta vacío o no es un número");
        VALIDADO = false;
    }
    try {
        x1 = parseFloat(x1);
        x2 = parseFloat(x2);
        x3 = parseFloat(x3);
        x4 = parseFloat(x4);
        x5 = parseFloat(x5);
        y1 = parseFloat(y1);
        y2 = parseFloat(y2);
        y3 = parseFloat(y3);
        y4 = parseFloat(y4);
        y5 = parseFloat(y5);
    }
    catch (e) {
        alert("Alguno(s) de los campos no es un número");
        VALIDADO = false;
    }
    if (VALIDADO) {
        if (x1 > 1000000 || x2 > 1000000 || x3 > 1000000 || x4 > 1000000 || x5 > 1000000 || y1 > 1000000 || y2 > 1000000 || y3 > 1000000 || y4 > 1000000 || y5 > 1000000) {
            alert("Alguno(s) de los campos tiene un valor muy grande (>1000000)");
            VALIDADO = false;
        }
        if (VALIDADO) {
            let v1 = [x1, x2, x3, x4, x5];
            let v2 = [y1, y2, y3, y4, y5];
            let ans = 0;
            let n = 5;
            for (let i = 0; i < n; i++) {
                ans += v1[i] * v2[i];
            }
            document.querySelector('#p2-output').textContent = "\nEl mínimo producto escalar entre ambos vectores es: " + ans;
        }
    }
}
function problema3() {
    let VALIDADO = true;
    let alfabetoFOR = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let input = document.querySelector('#p3-input').value;
    let espaciosRE = /\s/;
    if (espaciosRE.test(input)) {
        alert("El texto ingresado no debe contener espacios . . .")
        VALIDADO = false;
    }
    if (VALIDADO) {
        input = input.toUpperCase();
        let inputArr = input.split(',');
        let ans = '';
        let letrasDiferentes = 0;
        let textoFinal = '';       
        inputArr.forEach(function (palabras, i) {
            ans = palabras.split('');
            ans.forEach(function (letras, j) {
                alfabetoFOR.forEach(function (AlfabetoLetras, k) {
                    if (letras == AlfabetoLetras) {
                        alfabetoFOR.splice(k, 1);
                        letrasDiferentes++;
                    }
                });
            });
            textoFinal += "\nLa palabra: '" + palabras + "' tiene " + letrasDiferentes + " letras diferentes.";
            letrasDiferentes = 0;
            alfabetoFOR = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        });
        document.querySelector('#p3-output').textContent = textoFinal;
    }
}



// function problema3() {

//     // let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     // let p3_input = document.querySelector('#p3-input').value;
//     // let p3_array = p3_input.split(',');
//     // p3_array = p3_array3.map(function (palabras) {
//     //         return palabras.replace(/\s/g, '').toUppercase();
//     // });
//     // // alerts no sirven a partir de aca .   ¿??????

//     // let p3_ans = '';
//     // p3_array.forEach(function(palabra, i) {
//     //     let letras_unicas = [];
//     //     let palabras_array = palabra.split('');
//     //     alfabeto.forEach(function (letra, j) {
//     //         palabras_array.forEach(function(letras_palabras, k){
//     //             if (letras_palabras == letra) {
//     //                 if (letras_unicas.indexOf(letra) < 0) {
//     //                     letras_unicas.push(letra);
//     //                 }
//     //             }
//     //         });
//     //     });
//     // });
//     // p3_ans += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
//     // document.querySelector('#p3-output').textContent = p3_ans;
// }