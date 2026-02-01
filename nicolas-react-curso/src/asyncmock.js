// Simula una base de datos con productos
const productosMock = [
    { id: 1, titulo: "Producto 1", precio: 100, imagen: "/imagenes/Objeto1.png", descripcion: "Sticker de Messi" },
    { id: 2, titulo: "Producto 2", precio: 200, imagen: "/imagenes/Objeto2.png", descripcion: "Otro sticker" }
]

// Función que simula fetch asíncrono con promesa
export const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simula éxito (90% de las veces) o error
            if (Math.random() > 0.1) {
                resolve(productosMock)  // Fulfilled
            } else {
                reject("Error al cargar productos desde la base de datos simulada")  // Rejected
            }
        }, 2000)  // Retraso de 2 segundos
    })
}