// FASE DE ENTRADA:
let comisionTrabajadorActual = 1000;
let ventaT1 = 800, ventaT2 = 1200, ventaT3 = 900, ventaT4 = 1100;

// FASE DE PROCESO:
let mediaAritmetica = (ventaT1 + ventaT2 + ventaT3 + ventaT4) / 4;
let comisionFinal = comisionTrabajadorActual;

if (comisionTrabajadorActual < mediaAritmetica) {
    comisionFinal = comisionTrabajadorActual / 2;
} else if (comisionTrabajadorActual >= mediaAritmetica) {
    comisionFinal = comisionTrabajadorActual * 2;
}

// FASE DE SALIDA:
console.log("--- EJERCICIO 37 ---");
console.log("Media aritmética de ventas:", mediaAritmetica);
console.log("Comisión modificada:", comisionFinal);