const productsBody = document.querySelector("#products");
const filtro = document.querySelector("#filtro");

const pesitos = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
});

function mostrarProductos(productos) {
    productsBody.innerHTML = productos.map(producto => `
        <tr>
            <td class="p-4 text-zinc-100">${producto.id}</td>
            <td class="p-4 text-zinc-100">${producto.nombre}</td>
            <td class="p-4 text-lime-400">${pesitos.format(producto.precio)}</td>
            <td class="p-4 text-violet-300">${producto.categoria}</td>
            <td class="p-4 text-zinc-100">${producto.stock}</td>
            <td class="p-4 text-lime-400">${pesitos.format(producto.precio * producto.stock)}</td>
        </tr>
    `).join("");
}

function filtrarProductos() {
    const categoria = filtro.value;

    const productosAMostrar = categoria === "todos"
        ? productosData
        : productosData.filter(producto => producto.categoria === categoria);

    mostrarProductos(productosAMostrar);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productosData);
});

filtro.addEventListener("change", filtrarProductos);