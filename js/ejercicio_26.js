// FASE DE ENTRADA:
const numeroEnteroUno = 8;
const numeroEnteroDos = 4;

// FASE DE PROCESO:
let numerosIguales = numeroEnteroUno == numeroEnteroDos;
let numerosNoIguales = numeroEnteroUno != numeroEnteroDos;
let numeroPrimero = numeroEnteroUno > numeroEnteroDos;
let numeroSegundo = numeroEnteroDos > numeroEnteroUno;
let MayorIgualPrimero = numeroEnteroUno >= numeroEnteroDos;
let MayorIgualSegundo = numeroEnteroDos >= numeroEnteroUno;

// FASE DE SALIDA:
console.log("Numeros Iguales:", numerosIguales);
console.log("Numeros No Iguales:", numerosNoIguales);
console.log("Numero Entero Primero:", numeroPrimero);
console.log("Numero Entero Secundario:", numeroSegundo);
console.log("Primero Mayor Igual:", MayorIgualPrimero);
console.log("Segundo Mayor Igual:", MayorIgualSegundo);