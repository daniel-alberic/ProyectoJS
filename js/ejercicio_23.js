// FASE DE ENTRADA:
let horasTotales = 50;
let pagoHoraNormal = 20;

// FASE DE PROCESO:
let pagoTotal = 0;
if (horasTotales <= 40) {
    pagoTotal = horasTotales * pagoHoraNormal;
} else {
    let horasExtras = horasTotales - 40;
    let pagoBase = 40 * pagoHoraNormal;
    if (horasExtras <= 8) {
        pagoTotal = pagoBase + (horasExtras * (pagoHoraNormal * 2));
    } else {
        let pagoPrimeras8 = 8 * (pagoHoraNormal * 2);
        let horasRestantes = horasExtras - 8;
        let pagoRestantes = horasRestantes * (pagoHoraNormal * 3);
        pagoTotal = pagoBase + pagoPrimeras8 + pagoRestantes;
    }
}

// FASE DE SALIDA:
console.log("--- EJERCICIO 23 ---");
console.log("El pago total con horas extras es:", pagoTotal);