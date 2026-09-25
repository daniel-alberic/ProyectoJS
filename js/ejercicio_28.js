// FASE DE ENTRADA:
const añoIngreso = 2018;
let tiempoServicio = 2; 
let tiempo = "2 años";
let sueldoBase = 1500;
let nombreTrabajador = "Antonio Perez";
let aumentoSueldo = 0.15;
let porcentajeSegundoAumento = 0.12;

// FASE DE PROCESO:
let montoCobrar = sueldoBase * aumentoSueldo; //225
let montoAlternativo = sueldoBase * porcentajeSegundoAumento; //180

// FASE DE SALIDA:
if (tiempoServicio < 4){
    sueldoBase * aumentoSueldo;
console.log("👨‍🏭 Nombre del Trabajador:", nombreTrabajador);
console.log("⏰ Tiempo de Servicio:", tiempo);
console.log("💰 Aumento de (15%):", montoCobrar);
}
else {
    console.log("👨‍🏭 Nombre del Trabajador:", nombreTrabajador);
    console.log("⏰ Tiempo de Servicio:", tiempo);
    console.log("💰 Aumento de (12%):", montoAlternativo);
}






