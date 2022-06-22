//Desafio complementario 1
/*
let entrada = prompt("Ingrese un dato:");

while (entrada != "ESC"){
    alert("Ingresaste "+ entrada);
    entrada = prompt ("Ingrese otro dato, para salir ingrese ESC: ")
}
*/


//Desafio 1 primera opcion

function sumNotas(notaUno, notaDos, notaTres, notaCuatro) {
    let sum = notaUno + notaDos + notaTres + notaCuatro
    return sum
}

function promedioNotas() {
    let primeraNota = parseFloat(prompt("Ingrese la primer nota"))
    let segundaNota = parseFloat(prompt("Ingrese la segunda nota"))
    let terceraNota = parseFloat(prompt("Ingrese la tercera nota"))
    let cuartaNota = parseFloat(prompt("Ingrese la cuarta nota"))

    let resultadoSum = sumNotas(primeraNota, segundaNota, terceraNota, cuartaNota)

    let promedio = resultadoSum / 4

    alert("El promedio de sus notas es: " + promedio)

}

promedioNotas()


//desafio 1 segunda opcion

function suma(comida, bebida, extra,) {
    let sum= comida + bebida + extra
    return sum
}

function total(){
    let com = parseFloat(prompt("Ingrese el costo de su comida"))
    let beb = parseFloat(prompt("Ingrese el costo de su bebida"))
    let ext = parseFloat(prompt("Ingrese el costo del extra"))

    let totalPagar =  suma(com, beb, ext)

    alert("El total a pagar es: $" + totalPagar)
}

total()

//desafio 1 opcion 3

function calculo(){
    let costo = parseFloat(prompt("Ingrese el costo a pagar"))
    let cuotas = parseInt(prompt("Ingrese las cuotas"))

    let precioCuota = costo / cuotas

    alert("El precio por cuota es: $" + precioCuota)
}

calculo()


