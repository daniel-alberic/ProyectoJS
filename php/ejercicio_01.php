<?php
//FASE DE ENTRADA: DECLARACIÓN DE VARIABLES Y PREGUNTAS

// let producto = "Zapatillas Adidas";
$producto = "Zapatos adidas";
// const curso = "Lógica y Programación";
$precio = 350;
$descuento = 0.08;
$igv = 0.18;

//FASE DE PROCESO: ES LA LÓGICA DEL PROGRAMA
$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

//FASE DE SALIDA: Impresión de resultados.
//Modo JavaScript: console.log("El precio del producto es: ", precio);
echo "El precio del producto es: " . $precio . "<br>";
echo "El IGV es: " . $precioIGV;
echo "El descuento es: S/ " . $precioDescuento ."<br>";
echo "El precio final es: S/ " . $precioFinal . "<br>";


?>