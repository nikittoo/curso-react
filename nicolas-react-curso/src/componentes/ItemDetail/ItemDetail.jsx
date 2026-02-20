// Código para ItemDetail.jsx
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
    return (
        <div className="itemDetail">
            <h2>{producto.titulo}</h2>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p>Categoría: {producto.category}</p>
        </div>
    )
}

export default ItemDetail