import "./ItemListContainer.css"

const ItemListContainer = ({ mensajeBienvenida }) => {
    return (
        <div className="itemListContainer">
            <h2>{mensajeBienvenida}</h2>
            <p>Aquí se mostrará el catálogo de productos próximamente.</p>
        </div>
    )
}

export default ItemListContainer