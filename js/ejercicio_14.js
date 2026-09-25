// FASE DE ENTRADA:
let numeroEj14 = -24; 

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 14 ---");
// Tomamos el valor absoluto para evaluar el segundo dígito fácilmente
let segundoDigito = Math.abs(numeroEj14) % 10; 

if (numeroEj14 >= -54 && numeroEj14 <= -20) {
    if (segundoDigito % 2 === 0) {
        console.log("El segundo dígito es par. El doble es:", numeroEj14 * 2);
    } else {
        console.log("El segundo dígito es impar. La tercera parte es:", numeroEj14 / 3);
    }
} else {
    console.log("El número está fuera del rango de -54 a -20.");
}