const productosMock = [
    { id: 1, titulo: "Producto 1", precio: 100, imagen: "/imagenes/Objeto1.jpg", descripcion: "Sticker de Messi", category: "deportes" },
    { id: 2, titulo: "Producto 2", precio: 200, imagen: "/imagenes/Objeto2.jpg", descripcion: "Sticker pinceles", category: "arte" }
]

export const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(productosMock)
            } else {
                reject("Error al cargar productos desde la base de datos simulada")  // Rejected
            }
        }, 2000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                const productosFiltrados = productosMock.filter(producto => producto.category === category)
                resolve(productosFiltrados)
            } else {
                reject("Error al cargar productos por categoría")
            }
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                const producto = productosMock.find(producto => producto.id === parseInt(id))
                if (producto) {
                    resolve(producto)
                } else {
                    reject("Producto no encontrado")
                }
            } else {
                reject("Error al cargar el producto")
            }
        }, 2000)
    })
}