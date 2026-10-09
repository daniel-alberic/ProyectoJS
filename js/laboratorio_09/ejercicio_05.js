// Simulamos los precios que va escaneando el cajero (el 0 al final significa que finaliza la compra)
const preciosEscaneados = [45, 120, 30, 0]; 
let indice = 0;
let totalPagar = 0;
let precioArticulo;

do {
    // Simulamos que escaneamos el producto actual
    precioArticulo = preciosEscaneados[indice];
    indice++;

    // Si el precio es diferente de 0, lo sumamos a la compra
    if (precioArticulo !== 0) {
        totalPagar += precioArticulo;
        console.log("Producto escaneado por valor de: S/ " + precioArticulo);
    }

} while (precioArticulo !== 0); // El ciclo se repite mientras el precio NO sea 0

console.log("--- FIN DE LA COMPRA ---");
console.log("El total a pagar es: S/ " + totalPagar.toFixed(2));