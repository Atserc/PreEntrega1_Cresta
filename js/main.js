function promedio(nota1,nota2,nota3){
    if (nota3 != 0){
        resultado = (nota1 + nota2 + nota3) / 3;
    } else if(nota2 != 0) {
        resultado = (nota1 + nota2) / 2;
    } else {
        resultado = nota1; 
    }
    return resultado;
}

function cadaMateria (nombreMateria, salidaMateria){
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let resultado;
    let cantExamenes = parseFloat(prompt("¿ Rindió uno, dos o tres examenes ?"));
    switch (cantExamenes) {
        case 1:
            nota1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
            break;
        case 2:
            nota1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
            nota2 = parseFloat(prompt("Ingrese la nota del segundo examen:"));
            break;
        case 3:
            nota1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
            nota2 = parseFloat(prompt("Ingrese la nota del segundo examen:"));
            nota3 = parseFloat(prompt("Ingrese la nota del tercer examen:"));
            break;
        default:
            alert("numero incorrecto de examenes ingresado");
            break;
    }
    if ((nota1 <= 10)&&(nota2 <= 10)&&(nota3 <= 10)){
        resultado = promedio(nota1,nota2,nota3);
        let aprobacion;
        if (resultado > 4) {
            aprobacion = "aprobado";
        } else {
            aprobacion = "desaprobado";
        }
        salidaMateria = salidaMateria + "En la materia " + nombreMateria + " su promedio es " + resultado.toFixed(2) + ", por lo tanto está " + aprobacion +"." + "\n";
    }
    else{
        salidaMateria = "notas ingresadas incorrectas";
    }
    return salidaMateria;
}



let cantMaterias = parseInt(prompt("Ingrese cuantas materias rindio:"));
let nombreMateria;
let resultadosFinales = "";
for (i=1;i<=cantMaterias;i++){
    nombreMateria = (prompt("Ingrese el nombre de la materia:"));
    resultadosFinales = cadaMateria(nombreMateria,resultadosFinales);
}
alert(resultadosFinales);