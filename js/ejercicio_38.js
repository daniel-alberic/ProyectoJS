// 1. Primero, vamos a crear un arreglo
// con los sueldos de los colaboradores

const sueldoColaboradores = [
    2500, 1300, 4800, 5300, 1200, 5800, 1380, 6899, 4578, 5487,1500, 2300, 4100, 3200, 1900, 5500, 2800, 3400, 4900, 6100, 
    2100, 3800, 4200, 1350, 2750, 3100, 4600, 5200, 1850, 3950, 
    2400, 3300, 4700, 5800, 1600, 2900, 4300, 3600, 5100, 6400, 
    2200, 3700, 4400, 1450, 2650, 3250, 4850, 5300, 1950, 4150
];

const porcentajeAguinaldo = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++) {

    let sueldoBase = sueldoColaboradores[i];
    let aguinaldo = sueldoBase * porcentajeAguinaldo;
    let totalPagar = sueldoBase + aguinaldo;

    console.log("Sueldo Base: ", sueldoBase);
    console.log("Aguinaldo: ", aguinaldo.toFixed(2));
    console.log("Total a Pagar: ", totalPagar.toFixed(2));
};