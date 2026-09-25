// FASE DE ENTRADA:
let numA = 5, numB = 7, numC = 12;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 21 ---");
if (numC > numA && numC > numB) {
    let promedioNum = (numA + numB + numC) / 3;
    console.log("El tercer número es mayor. El promedio es:", promedioNum);
} else if (numA % 2 !== 0 && numB % 2 !== 0 && numC % 2 !== 0) {
    console.log("Todos son impares. Con incremento del 89%:");
    console.log("Número 1:", numA + (numA * 0.89));
    console.log("Número 2:", numB + (numB * 0.89));
    console.log("Número 3:", numC + (numC * 0.89));
} else {
    console.log("No se cumple ninguna de las condiciones principales.");
}