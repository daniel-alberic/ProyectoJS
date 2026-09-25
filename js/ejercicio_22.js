// FASE DE ENTRADA:
let numeroEntero = 123;

// FASE DE PROCESO & SALIDA:
console.log("--- EJERCICIO 22 ---");
if (numeroEntero >= 100 && numeroEntero <= 999) {
    let centenas = Math.floor(numeroEntero / 100);
    let decenas = Math.floor((numeroEntero % 100) / 10);
    let unidades = numeroEntero % 10;

    let rC = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"][centenas];
    let rD = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"][decenas];
    let rU = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][unidades];

    console.log("El número en romanos es:", rC + rD + rU);
} else {
    console.log("El número no es de 3 dígitos positivos.");
}