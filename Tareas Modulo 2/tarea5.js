console.log("=== NÚMEROS PRIMOS DEL 1 AL 20 ===");

for (let numero = 2; numero <= 20; numero++) {

    let esPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor == 0) {
            esPrimo = false;
        }

    }

    if (esPrimo == true) {
        console.log(numero);
    }
}