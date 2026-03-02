// Código para ItemDetail.jsx
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
    return (
        <div className="itemDetail">
            <h2>{producto.titulo}</h2>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p>Categoría: {producto.category}</p>
            <p>Stock: {producto.stock}</p>
            <ItemCount stock={producto.stock} product={producto} />
        </div>
    )
}

export default ItemDetail