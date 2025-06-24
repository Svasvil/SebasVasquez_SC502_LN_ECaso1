<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Servicio</title>
      <script src="Desarrollo.js"></script>
       <link rel="stylesheet" href="Estilos.css">
</head>
<body>


<div class="menu">
    
  
        <a href="index.html">Inicio</a>
        <a href="Contacto.html">Contacto</a>
        <a href="Servicios.html">Servicios</a>
        <a href="registro.php">Registro</a>
      
      
</div>
<div class="info">

<?php
    $nombre = "Sebas IT Solutions";
    $tipoServicio = "Ingenieria en Sistemas de Computacion";
    $telefono = 83751152;
    $ubicacion= "Escazu San Jose Costa Rica";

    echo "<h1>Bienvenido a: $nombre</h1>";
    echo "<p>Ofrecemos servicios en: $tipoServicio</p>";
    echo "<p>Contactanos a: $telefono</p>";
    echo "<p>Econtranos en: $ubicacion</p>";
?>
</div>

    <h2 class= "titulos">Formulario de Registro de Servicio</h2>
    <form id="registroForm">
        <label for="nombreCompleto">Nombre completo</label><br>
        <input type="text" id="nombreCompleto" name="nombreCompleto"><br><br>

        <label for="servicio">Servicio:</label><br>
        <input type="text" id="servicio" name="servicio"><br><br>

        <label for="precio">Precio:</label><br>
        <input type="number" id="precio" name="precio"><br><br>

       
    </form>


     <button type="submit" class="mensaje" onclick="php(); return false;">Mostrar Datos</button>
      <div class="msj">  <span id="msj"></span></div><br>

</body>
</html>