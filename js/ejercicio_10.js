// FASE DE ENTRADA:
let a = 45, b = 12, c = 30;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 10 ---");
// Ordenamiento básico con lógica condicional simple
let menor, medio, mayor;

if (a <= b && a <= c) {
    menor = a;
    if (b <= c) { medio = b; mayor = c; } else { medio = c; mayor = b; }
} else if (b <= a && b <= c) {
    menor = b;
    if (a <= c) { medio = a; mayor = c; } else { medio = c; mayor = a; }
} else {
    menor = c;
    if (a <= b) { medio = a; mayor = b; } else { medio = b; mayor = a; }
}

console.log("Números ordenados en forma ascendente:", menor, medio, mayor);