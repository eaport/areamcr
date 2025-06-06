<?php
$arquivo = 'contador.txt';

$contador = file_exists($arquivo) ? (int)file_get_contents($arquivo) : 0;

$contador++;

file_put_contents($arquivo, $contador);

echo "Visualizações: $contador";
?>