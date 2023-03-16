
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length
    );
}

const palabras = ['arco', 'sogeking', 'pato', 'psw', 'dolar', 'peso', 'casa', 'perro', 'gato', 'javascript', 'hipopotomonstrosesquipedaliofobia', 'cecyt', 'dictamen', 'creditos', 'fisica', 'gabrielnosabeenseñar', 'manigod', 'mexico', 'mexicano', 'doctorsimi', 'mamalucha'];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraGUIONES = palabra.replace(/./g, "_ ");
let errores = 0;

document.querySelector('#calcular').addEventListener('click', () => {
    const letra = document.querySelector('#letra').value;
    let correcto = false;
    for (const i in palabra) {
        if (palabra[i] === letra) {
            palabraGUIONES = palabraGUIONES.replaceAt(i*2, letra);
            correcto = true;
        }
    }
    if (!correcto) {
        errores++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(204.8*errores) + 'px 0px';
        if (errores === 5) {
            alert('DICTAMINADO!');
            alert('La palabra era: ' + palabra);
        }
        else {
            if (palabraGUIONES.indexOf('_') < 0) {
                document.querySelector('#win').style.display = 'flex';
            }
        }
    }
    document.querySelector('#output').innerHTML = palabraGUIONES;
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
});

const btn = document.querySelector('#reload');
btn.addEventListener('click', function() {
  location.reload();
});
