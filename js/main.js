function promedio(resultado,nota1,nota2,nota3){
    if (nota3 != 0){
        resultado = (nota1 + nota2 + nota3) / 3;
    } else if(nota2 != 0) {
        resultado = (nota1 + nota2) / 2;
    } else {
        resultado = nota1; 
    }
}

function cadaMateria (nombreMateria, salidaMateria){
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let resultado;
    let cantExamenes = parseInt(prompt("¿ Rindió uno, dos o tres examenes ?"));
    switch (cantExamenes) {
        case 1:
            nota1 = parseInt(prompt("Ingrese la nota del primer examen:"));
            break;
        case 2:
            nota1 = parseInt(prompt("Ingrese la nota del primer examen:"));
            nota2 = parseInt(prompt("Ingrese la nota del segundo examen:"));
            break;
        case 3:
            nota1 = parseInt(prompt("Ingrese la nota del primer examen:"));
            nota2 = parseInt(prompt("Ingrese la nota del segundo examen:"));
            nota3 = parseInt(prompt("Ingrese la nota del tercer examen:"));
            break;
        default:
            alert("numero incorrecto de examenes ingresado");
            break;
    }

    promedio(resultado,nota1,nota2,nota3);
    /*
    let aprobacion;
    if (promedio > 7) {
        aprobacion = "aprobado";
    } else {
        aprobacion = "desaprobado";
    }
    + ", por lo tanto está " + aprobacion  
    */

    salidaMateria = salidaMateria + "En la materia " + nombreMateria + "su promedio es " + resultado + "." + "\n";
    console.log(salidaMateria)
}



let cantMaterias = parseInt(prompt("Ingrese cuantas materias rindio:"));
let nombreMateria;
let resultadosFinales = "";
for (i=1;i<=cantMaterias;i++){
    nombreMateria = (prompt("Ingrese el nombre de la materia:"));
    cadaMateria(nombreMateria,resultadosFinales);
}
alert(resultadosFinales);