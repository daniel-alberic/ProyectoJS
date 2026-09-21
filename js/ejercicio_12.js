// FASE DE ENTRADA:
let numeroRango = 6;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 12 ---");
if (numeroRango >= 4 && numeroRango <= 10) {
    if (numeroRango % 2 === 0) {
        let cubo = numeroRango * numeroRango * numeroRango;
        console.log("El número es par. Su cubo es:", cubo);
    } else {
        let porcentaje16 = numeroRango * 0.16;
        console.log("El número es impar. El 16% es:", porcentaje16);
    }
} else {
    console.log("El número está fuera del rango de 4 a 10.");
}