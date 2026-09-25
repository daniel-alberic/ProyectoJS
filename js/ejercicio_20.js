// FASE DE ENTRADA:
let dinero = 428;

// FASE DE PROCESO:
let b200 = Math.floor(dinero / 200);
dinero = dinero % 200;

let b100 = Math.floor(dinero / 100);
dinero = dinero % 100;

let b50 = Math.floor(dinero / 50);
dinero = dinero % 50;

let b20 = Math.floor(dinero / 20);
dinero = dinero % 20;

let b10 = Math.floor(dinero / 10);
dinero = dinero % 10;

let m5 = Math.floor(dinero / 5);
dinero = dinero % 5;

let m2 = Math.floor(dinero / 2);
dinero = dinero % 2;

let m1 = dinero;

// FASE DE SALIDA:
console.log("--- EJERCICIO 20 ---");
console.log("Billetes de 200:", b200);
console.log("Billetes de 100:", b100);
console.log("Billetes de 50:", b50);
console.log("Billetes de 20:", b20);
console.log("Billetes de 10:", b10);
console.log("Monedas de 5:", m5);
console.log("Monedas de 2:", m2);
console.log("Monedas de 1:", m1);