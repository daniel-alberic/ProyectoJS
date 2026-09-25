<?php
//FASE DE ENTRADA
$precioLicencia = 120;
$cantidadLicencia = 40;

//FASE DE PROCESO
$compraTotal = $precioLicencia * $cantidadLicencia; //4800

if ($compraTotal > 5000) {
    $flete = 0;
}
else {
    $flete = 150;
}

$totalPagar = $compraTotal * $flete; //720000

//FASE DE SALIDA
echo ":::::::::::::::::::BOLETA:::::::::::::::::::::::" . "<br>" ;
echo "🪪 Precio de licencia: " . $precioLicencia . "<br>" ;
echo "🪪 Cantidad de licencias: " . $cantidadLicencia . "<br>";
echo "💰 totalPagar: " . $totalPagar . "<br>";

?>