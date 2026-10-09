const carrito = [105, 125, 115];
let totalPagar = 0;

for (let i = 0; i < carrito.length; i++) {
    let precioArticulo = carrito[i];

    if(precioArticulo > 100) {

        let descuento = precioArticulo * 0.15;

        let precioDescuento = precioArticulo - descuento;
        totalPagar += precioDescuento;
    }
    else {

        totalPagar += precioArticulo;
    }
}

console.log("El total a pagar es: S/ " + totalPagar.toFixed(2));
console.log("Total elementos en el carrito: " + carrito.length);
