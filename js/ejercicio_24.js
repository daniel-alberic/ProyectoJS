// FASE DE ENTRADA:
let notaAlumno = 15;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 24 ---");
if (notaAlumno >= 17 && notaAlumno <= 20) {
    console.log("Calificación: A");
} else if (notaAlumno >= 14 && notaAlumno <= 16) {
    console.log("Calificación: B");
} else if (notaAlumno >= 11 && notaAlumno <= 13) {
    console.log("Calificación: C");
} else if (notaAlumno >= 7 && notaAlumno <= 10) {
    console.log("Calificación: D");
} else if (notaAlumno < 7) {
    console.log("Calificación: F");
} else {
    console.log("Nota fuera de rango (1 a 20).");
}