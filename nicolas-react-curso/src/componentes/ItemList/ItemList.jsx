import { Link } from 'react-router-dom'
import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(producto => (
                <ItemCard key={producto.id}>
                    <h3>{producto.titulo}</h3>
                    <img src={producto.imagen} alt={producto.titulo} />
                    <p>Precio: ${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                    <Link to={`/item/${producto.id}`}>Ver detalle</Link>
                </ItemCard>
            ))}
        </>
    )
}

export default ItemList