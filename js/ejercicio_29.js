// FASE DE ENTRADA:
let montoCompra = 350;

// FASE DE PROCESO:
let netoFinal = montoCompra;
if (montoCompra > 300) {
    netoFinal = montoCompra - (montoCompra * 0.18);
}

// FASE DE SALIDA:
console.log("--- EJERCICIO 29 ---");
console.log("El monto neto a pagar es:", netoFinal);