<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<meta http-equiv="X-UA-Compatible" content="ie=edge">-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="CSS/materialize.css">
    <link rel="stylesheet" href="CSS/color.css">
    <!-- Font Awesome Icons -->
<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>

<!-- Plugin CSS 
<link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

<!-- Theme CSS - Includes Bootstrap 
<link href="css/creative.min.css" rel="stylesheet">-->
</head>
    <title>
        Registro Conferencias
    </title>



<body>
    <form action="Registro.php" method="post">
        <p>Nombre de la conferencia: <input type="text" name="nombre" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" /></p>
        <p>SEDE: <input type="text" name="sede" required  /></p>
<?php 
date_default_timezone_set('America/Los_Angeles');
$fcha = date("Y-m-d");
echo"<p>Fecha de la conferencia: <input type= date name= fcha value=  $fcha  min=  $fcha  max= 2090-12-31T12:00Z  /></p>"
 ?>
        <p>Hora de inicio: <input type="time" name="inicio" value="00:00:00" max="22:00:00" min="07:00:00" step="1"/></p>
        <p>Hora de termino: <input type="time" name="termino" value="00:00:00" max="22:00:00" min="07:00:00" step="1"/></p>
        <p>Nombre(s) del conferencista: <input type="text" name="nomco" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" /></p>
        <p>Apellido paterno: <input type="text" name="ap" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+"/></p> 
        <p>Apellido materno: <input type="text" name="am" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+"/></p>
        <p>Numero de lugares: <input type="number" name="nlugares" required min="0" pattern="[0-9]+"/></p>
        <p><input type="submit" /></p>
       </form>
</body>
</html>