<?php
$arquivo = 'contador.txt';
$contador = file_exists($arquivo) ? (int)file_get_contents($arquivo) : 0;
echo "<h1>Total de visualizações: $contador</h1>";
?>