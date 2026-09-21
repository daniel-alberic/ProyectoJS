// FASE DE ENTRADA:
let numRango35 = 46;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 35 ---");
let d35 = Math.floor(numRango35 / 10);
let u35 = numRango35 % 10;
let sumaCifras = d35 + u35;

console.log("Suma de cifras:", sumaCifras);

if (u35 === 6) {
    console.log("La segunda cifra es 6. Su tercera parte es:", u35 / 3);
} else if (u35 % 2 !== 0) {
    console.log("La segunda cifra es impar. Su quinta parte es:", u35 / 5);
}