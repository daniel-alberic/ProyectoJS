// FASE DE ENTRADA:
let notaA = 10, notaB = 15, notaC = 16, notaD = 18;

// FASE DE PROCESO:
// Identificamos y sumamos las 3 mayores, descartando la menor (asumiendo notaA como la menor para este ejemplo)
let sumaTresMejores = notaB + notaC + notaD;
let promedioTres = sumaTresMejores / 3;

// FASE DE SALIDA:
console.log("--- EJERCICIO 9 ---");
console.log("Nota que no se tomó en cuenta (la menor):", notaA);
console.log("Promedio de las 3 mejores notas:", promedioTres);