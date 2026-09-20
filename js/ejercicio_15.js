// FASE DE ENTRADA:
const num1 = 45;
const num2 = 20;
const num3 = 100;
const num4 = 80;

// FASE DE PROCESO & SALIDA:
// Evaluamos ambas condiciones usando el operador && (Y)
if (num1 > num2 && (num3 + num4) > 167) {
    console.log("¡Condicion cumplida!");
    console.log("Números en orden descendente:", num3, num4, num1, num2);
}
else {
    console.log("❌ Las condiciones no se cumplen");
}