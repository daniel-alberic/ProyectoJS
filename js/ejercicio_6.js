// FASE DE ENTRADA:
let anioActual = 2026, mesActual = 9, diaActual = 20;
let anioNacimiento = 2000, mesNacimiento = 5, diaNacimiento = 12;

// FASE DE PROCESO:
let edadAnios = anioActual - anioNacimiento;
let edadMeses = mesActual - mesNacimiento;
let edadDias = diaActual - diaNacimiento;

if (edadDias < 0) {
    edadMeses--;
    edadDias += 30;
}
if (edadMeses < 0) {
    edadAnios--;
    edadMeses += 12;
}

// FASE DE SALIDA:
console.log("--- EJERCICIO 6 ---");
console.log("Edad exacta:", edadAnios, "años,", edadMeses, "meses y", edadDias, "días.");