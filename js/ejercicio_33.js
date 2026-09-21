// FASE DE ENTRADA:
let numDosCifras = 55;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 33 ---");
let decena = Math.floor(numDosCifras / 10);
let unidad = numDosCifras % 10;

if (decena === unidad) {
    console.log("El número es capicúa.");
} else {
    console.log("El número no es capicúa.");
}