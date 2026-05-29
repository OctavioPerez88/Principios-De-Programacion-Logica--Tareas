// Como entrada de datos tendremos, el nombre del producto, el precio unitario y la cantidad en stock. imprimir en consola:
// - El mensaje: == SISTEMA BASICO DE INVENTARIO ==
// - producto registrado: [nombre del producto]
// - precio unitario: $[precio del producto]
// unidades disponibles: [cantidad en stock]
// valor total del inventario: [precio unitario * cantidad en stock]

import promptSync from 'prompt-sync'; // Importamos la función promptSync para poder solicitar datos al usuario en la consola.
import fs from 'node:fs'; // Importamos el módulo fs para poder escribir en un archivo de texto.
const prompt = promptSync(); // Creamos una instancia de promptSync para usarla en código.
const archivo = './inventario.json'; //Damos el nombre del archivo donde se guardará el inventario.

// Primero leemos el inventario actual
let inventario = { producto1: {}, producto2: {} }; 
if (fs.existsSync(archivo)) { 
    const datos = fs.readFileSync(archivo, 'utf-8'); 
    inventario = JSON.parse(datos); 
}

// Si el archivo del inventario no existe, solicitamos al usuario que ingrese los datos de los productos.

if (!fs.existsSync(archivo)) { // verificamos si existe, de lo contrario solicitamos los datos de los productos al usuario.
    console.log( "== SISTEMA BASICO DE INVENTARIO ==\n" );
    console.log( "No se encontró un archivo de inventario existente. Por favor, ingrese los datos de los productos.\n" );
//primer producto

const producto1 = {
    nombre: prompt( "Ingrese el nombre del primer producto: " ),
    precio: parseFloat(prompt( "Ingrese el precio unitario: " )),
    cantidad: parseInt(prompt( "Ingrese la cantidad en stock: " ))
};
//segundo producto

const producto2 = {
    nombre: prompt( "Ingrese el nombre del segundo producto: " ),
    precio: parseFloat(prompt( "Ingrese el precio unitario: " )),
    cantidad: parseInt(prompt( "Ingrese la cantidad en stock: " ))
};


fs.writeFileSync(archivo, JSON.stringify({ producto1, producto2 }, null, 2)); 
inventario = { producto1, producto2 }; 
}

console.clear(); 

console.log( "== SISTEMA BASICO DE INVENTARIO ==\n" );
console.log( `Producto registrado: ${inventario.producto1.nombre}` );
console.log( `Precio unitario: $${inventario.producto1.precio}` );
console.log( `Unidades disponibles: ${inventario.producto1.cantidad}` );
console.log( `Valor total del inventario: $${inventario.producto1.precio * inventario.producto1.cantidad}\n\n` );

console.log( `Producto registrado: ${inventario.producto2.nombre}` );
console.log( `Precio unitario: $${inventario.producto2.precio}` );
console.log( `Unidades disponibles: ${inventario.producto2.cantidad}` );
console.log( `Valor total del inventario: $${inventario.producto2.precio * inventario.producto2.cantidad}\n\n` );
console.log( `Valor total de los productos en inventario: $${(inventario.producto1.precio * inventario.producto1.cantidad) + (inventario.producto2.precio * inventario.producto2.cantidad)}\n\n` );
console.log( "== FIN DEL SISTEMA DE INVENTARIO ==" );