alert("Ingresa tus datos")

    var limite = prompt("¿Cuántos usuarios ingresarán?")

    document.write("<h1>Datos de los usuarios</h1>"); 
	
for (var i = 1; i <= limite; i++) {
    
    alert("Usuario " + i)
    
    var nombre = prompt("Ingresa tu nombre")
    var apellido = prompt("Ingresa tu apellido")
    var edad = prompt("¿Cúal es tu edad?")
    var escuela =prompt("¿En qué escuela estás?")
    var materia = prompt("Materia favorita")

    document.write("<h2>" + i + " - Datos de "+ nombre +"</h2>");
	document.write("Nombre Completo: " + nombre + " " + apellido + "<br>");
    document.write("Edad: " + edad + "<br>");
    document.write("Escuela: " + escuela + "<br>");
    document.write("Materia favorita: " + materia + "<br>" + "<br>");

}
