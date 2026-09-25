// FASE DE ENTRADA:
let nota1 = 16;
let nota2 = 19;
let nota3 = 17;

// FASE DE PROCESO:
let promedio = (nota1 + nota2 + nota3) / 3;

// FASE DE SALIDA:
console.log("--- EJERCICIO 7 ---");
console.log("Promedio:", promedio);

if (promedio > 18) {
    console.log("Condición: Excelente y Aprobado");
} else if (promedio > 10.5) {
    console.log("Condición: Aprobado");
} else {
    console.log("Condición: Desaprobado");
}