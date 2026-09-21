// FASE DE ENTRADA:
let n1 = 3, n2 = 7, n3 = 5;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 16 ---");
if (n1 % 2 !== 0 && n2 % 2 !== 0 && n3 % 2 !== 0) {
    let sumaImpares = n1 + n2 + n3;
    let ultimoDigito = sumaImpares % 10;
    console.log("La suma de los tres números impares es:", sumaImpares);
    console.log("El último dígito del valor impreso es:", ultimoDigito);
} else {
    console.log("No todos los números son impares.");
}