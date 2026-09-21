// FASE DE ENTRADA:
let n1 = 14, n2 = 15, n3 = 13, n4 = 16;

// FASE DE PROCESO:
let promedio4 = (n1 + n2 + n3 + n4) / 4;

// FASE DE SALIDA:
console.log("--- EJERCICIO 8 ---");
console.log("Promedio de 4 notas:", promedio4);

if (promedio4 >= 10.5) {
    console.log("Condición: APROBADO");
    if (promedio4 >= 13) {
        console.log("Mensaje: Certificado en MS-OFFICE");
    }
} else {
    console.log("Condición: DESAPROBADO");
}