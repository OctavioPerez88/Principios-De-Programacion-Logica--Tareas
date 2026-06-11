document.addEventListener("DOMContentLoaded", function() {

    const boton = document.getElementById("btnAnalizar");

    boton.addEventListener("click", function() {

        let numero = Number(document.getElementById("numero").value);

        if (isNaN(numero)) {
            document.getElementById("resultado").innerHTML =
                "Por favor ingresa un número válido.";
            return;
        }

        let tipoParidad = "";
        let tipoPrimo = "";

        // Par o impar
        if (numero % 2 === 0) {
            tipoParidad = "par";
        } else {
            tipoParidad = "impar";
        }

        // Primo o no primo
        let esPrimo = true;

        if (numero <= 1) {
            esPrimo = false;
        } else {
            for (let divisor = 2; divisor < numero; divisor++) {

                if (numero % divisor === 0) {
                    esPrimo = false;
                    break;
                }

            }
        }

        if (esPrimo) {
            tipoPrimo = "primo";
        } else {
            tipoPrimo = "no es primo";
        }

        document.getElementById("resultado").innerHTML =
            `El número ${numero} es ${tipoParidad} y ${tipoPrimo}`;

    });

});