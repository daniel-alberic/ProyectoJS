// FASE DE ENTRADA:
let nombrePersona = "NANCY";
let edadPersona = 20;

// FASE DE PROCESO:
let edadModificada;
if (nombrePersona === "ANA" || nombrePersona === "JUANA" || nombrePersona === "NANCY") {
    edadModificada = edadPersona + (edadPersona * 0.30);
    console.log("--- EJERCICIO 19 ---");
    console.log("Nombre detectado. Incremento del 30%. Nueva edad:", edadModificada);
} else {
    edadModificada = edadPersona + (edadPersona * 0.90);
    console.log("--- EJERCICIO 19 ---");
    console.log("Nombre alternativo. Incremento del 90%. Nueva edad:", edadModificada);
}