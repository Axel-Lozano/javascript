//Desafio complementario 1
/*
let entrada = prompt("Ingrese un dato:");

while (entrada != "ESC"){
    alert("Ingresaste "+ entrada);
    entrada = prompt ("Ingrese otro dato, para salir ingrese ESC: ")
}



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

*/


//desafio 1 opcion 3  
//agregue el desafio complementario 2
let entrada = prompt("Desea realizar una operacion? (si) o (no)");
const clientes = [];


while (entrada !== "no") {

    if (entrada == "si") {
        let nombre = prompt("Ingrese su nombre:");
        let costo = parseFloat(prompt("Ingrese el costo del producto: "));
        let cuotas = parseInt(prompt("Ingrese las cuotas (3 10% interes, 6 20% interes, 9 30% interes o 12 40% interes)"));

        class operciones {
            constructor(nombre, cuotas, costo) {
                this.nombre = nombre;
                this.cuotas = cuotas;
                this.costo = costo;
            }
        }

        let cliente = new operciones (nombre, cuotas, costo);

        clientes.push(cliente)
        console.log(clientes)

        function cuotasTres() {
            let interes = costo * 10 / 100;

            let total = costo + interes;

            let numCuotas = total / 3;

            alert("El total a pagar con el interes es:  $" + total + " | El monto por cuota es:$" + numCuotas);

        }

        function cuotasSeis() {
            let interes = costo * 20 / 100;

            let total = costo + interes;

            let numCuotas = total / 6;

            alert("El total a pagar con el interes es:  $" + total + " | El monto por cuota es:$" + numCuotas);

        }

        function cuotasNueve() {
            let interes = costo * 30 / 100;

            let total = costo + interes;

            let numCuotas = total / 9;

            alert("El total a pagar con el interes es:  $" + total + " | El monto por cuota es:$" + numCuotas);

        }

        function cuotasDoce() {
            let interes = costo * 40 / 100;

            let total = costo + interes;

            let numCuotas = total / 12;

            alert("El total a pagar con el interes es:  $" + total + " | El monto por cuota es:$" + numCuotas);

        }

        switch (cuotas) {
            case 3:
                cuotasTres();
                break;

            case 6:
                cuotasSeis();
                break;

            case 9:
                cuotasNueve()
                break;

            case 12:
                cuotasDoce()
                break;

            default:
                alert("Operacion invalida");

                break;
        }
    }else{
        alert("Operacion invalida")
    }

    entrada = prompt("Desea realizar otra operacion? (si) o (no)")
}

