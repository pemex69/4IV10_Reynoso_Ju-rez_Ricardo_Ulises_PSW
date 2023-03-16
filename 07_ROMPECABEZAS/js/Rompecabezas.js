//Tenemos que hacer un mapeo sobre las imagenes que se van a trabajar
//para el rompecabezas, porque debemos saber donde esta situada
//cada pieza y a partir de ello compararla con la imagen principal
//si hacen match ganamos si no hay que seguir comparando el orden
//hasta que coincidan
let instrucciones = ["Utiliza las flechas de navegacion para mover las piezas",
    "Ordena las piezas[ hasta alcanzar el objetivo"];
//Aquí van las flechas
let movimientos = []
//Matriz para las posiciones del romecabezas
let rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let rompeCorrecto = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Tenemos que identificar donde esta el punto de partida de la pieza vacia
let filaVacia = 2;
let columnaVacia = 2;

//Necsito una funcion para recorrer el arreglo para pasar por cada elemento
function mostrarInstrucciones() {
    for (let i = 0; i < instrucciones.length; i++) {
        //Otra funcion que enliste la instruccion
        mostrarInstruccionesEnLista(instrucciones[i], "lista-instrucciones");
    }
}
function mostrarInstruccionesEnLista(instruccion, id) {
    let ul = document.getElementById(idLista);
    let li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}
function checarSiGane() {
    //Recorrer las piezas y checar si coinciden
    for (let i = 0; i < rompe.length; i++) {
        for (let j = 0; j < rompe[i].length; j++) {
            let rompeActual = rompe[i][j];
            if (rompeActual != rompeCorrecto[i][j]) {
                return false;
            }
        }
    }
    return true;
}
function mostrarCartelGanador() {
    if (checarSiGane) {
        alert("Wiiiiii a mimir (o.o)/ ")
    }
    return false;
}
/**
Vamos a crear una funcion que se encargue de poder intercambiar las posiciones de las piezas
porque dentro del rompecabezas necesitamos mover
arreglo[1][2] = arreglo[0][0] 
arreglo[0][0] = arreglo[1][2]
 */
function intercambiarPosicionesRompe(filaPos1, filaPos2, columnaPos1, columnaPos2) {
    let pos1 = rompe[filaPos1][columnaPos1];
    let pos2 = rompe[filaPos2][columnaPos2];
    //Intercambio
    rompe[filaPos1][columnaPos1] = pos2;
    rome[filaPos2][columnaPos2] = pos1;
}
//Tenemos que actualizar la fila vacia porque esa es la que se mueve
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
    filaVacia = nuevaFila
    columnaVacia = nuevaColumna
}
//Validar si la posicion dentro del rompecabezas es la correcta de la pieza para eso:
function posicionValida(fila, columna) {
    return (fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}
//Tenemos que mover las piezas a lo que el cuerpo se estara moviendo e intercambiando las posiciones para ello tenemos que saber que teclas de navegacion se estan presionando y hacia que direccion debe de moverse
//ARRIBA = 38
//ABAJO = 40
//IZQUIERDA = 37
//DERECHA = 39

function moverEnDireccion(direccion) {
    let nuevaFilaPiezaVacia;
    let nuevaColumnaPiezaVacia;
    //Mover pieza hacia la abajo
    if (direccion === codigosDeDireccion.ABAJO) {
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }
    //Si se mueve hacia arriba
    else if (direccion === codigosDeDireccion.ARRIBA) {
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }
    //Si se mueve hacia la derecha
    else if (direccion === codigosDeDireccion.DERECHA) {
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }
    //Si se mueve hacia la izquierda
    else if (direccion === codigosDeDireccion.IZQUIERDA) {
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }
    //Si la nueva posicion es valida, se intercambia
    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambiarPosicionesRompe(filaVacia, columnaVacia, nuevaColumnaPiezaVacia, nuevaFilaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //Agregar el ultimo movimiento que recibe la direccion del movimiento
        agregarUltimoMovimiento(direccion);
    }
}
function intercambiarPosiciones(idPieza1, idPieza2) {
    let elementoPieza1 = document.getElementById(idPieza1);
    let elementoPieza2 = document.getElementById(idPieza2);
    let padre = elementoPieza1.parentNode;
    let clonElementoPieza1 = elementoPieza1.cloneNode(true);
    let clonElementoPieza2 = elementoPieza2.cloneNode(true);
    padre.replaceChild(clonElementoPieza1, elementoPieza2);
    padre.replaceChild(clonElementoPieza2, elementoPieza1);
}

let codigosDireccion = {
    ARRIBA: 38,
    ABAJO: 40,
    IZQUIERDA: 37,
    DERECHA: 39
}

//Vamos a actualizar los movimientos
function actualizarUltimoMovimiento(direccion) {
    let ultimoMov = document.getElementById('flecha');
    switch (direccion) {
        case codigosDireccion.ARRIBA:
            ultimoMov.textContent = "↑";
            break;
        case codigosDireccion.ABAJO:
            ultimoMov.textContent = "↓";
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMov.textContent = "←";
            break;
        case codigosDireccion.DERECHA:
            ultimoMov.textContent = "→";
            break;

        }
}
function mezclarPiezas(veces) {
    if (veces <= 0) {
        alert("Holi wiii");
        return;
    }
    let direcciones = [codigosDireccion.ARRIBA, codigosDireccion.ABAJO, codigosDireccion.IZQUIERDA, codigosDireccion.DERECHA];
    let direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    //Mando a llamar a mover en direccion
    moverEnDireccion(direccion);
    setTimeout(function () {
        mezclarPiezas(veces - 1);
    }, 100);
}

function capturarTeclas() {
    document.body.onkeydown = (function(evento){ 
        if(evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.IZQUIERDA || evento.which === codigosDireccion.DERECHA){
            moverEnDireccion(evento.which);
            //Actualizar el ultimo movimiento
            actualizarUltimoMovimiento(evento.which);
            let gano = checarSiGane();
            if (gano) {
                setTimeout(function () {
                    mostrarCartelGanador();
                } , 500);
            }
        }
    });
}
function iniciar() {
    mezclarPiezas(60);
    capturarTeclas();
}
iniciar();
mostrarInstrucciones(instrucciones);
