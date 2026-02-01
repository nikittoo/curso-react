import { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { obtenerProductos } from "../asyncmock"

const ItemListContainer = ({ mensajeBienvenida }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos()
            .then(data => setProductos(data))
            .catch(error => console.error(error)
            )
    },[])

    return (
        <div className="itemListContainer">
            <h2>{mensajeBienvenida}</h2>
            {cargando ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer