<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>
<body >
<form action="Registro.php" method="post" >
 <p>Nombre de la conferencia: <input type="text" name="nombre" required  /></p>
 <p>CEDE: <input type="text" name="edad" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+"/></p>
 <?php $fcha = date("Y-m-d");
 echo"<p>Fecha de la conferencia: <input type= date name= edad value=  $fcha  min=  $fcha  max= 2090-12-31T12:00Z  /></p>"
 ?>

<p>hora de inicio: <input type="time" name="inicio" value="00:00:00" max="22:00:00" min="07:00:00" step="1"/></p>
<p>hora de termino: <input type="time" name="termino" value="00:00:00" max="22:00:00" min="07:00:00" step="1"/></p>


<p>Nombre(s) del conferencista: <input type="text" name="nomco" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+"/></p>
<p>Apellido paterno: <input type="text" name="ap" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+"/></p>
<p>Apellido materno: <input type="text" name="am" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+"/></p>

<p>Numero de lugares: <input type="number" name="num" required min="0" pattern="[0-9]+" /></p>
 <p><input type="submit" /></p>
</form>

</body>
</html>