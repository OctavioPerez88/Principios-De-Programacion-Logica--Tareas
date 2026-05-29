//Imprimir en consola:
// - Si el numero de productos es 0, el mensaje: "Alerta te quedaste sin productos"
// - Si el numero de productos es menor a 5, el mensaje: "Alerta te quedan pocos productos"
// - Si el numero de productos es mayor o igual a 5, el mensaje: "Tienes suficientes productos"

let numeroDeProductos = 0;

let mensaje = numeroDeProductos === 0 ? "Alerta te quedaste sin productos" 
                : numeroDeProductos < 5 ? "Alerta te quedan pocos productos"
                : "Tienes suficientes productos"

console.log(mensaje)