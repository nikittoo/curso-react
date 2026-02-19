import { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { obtenerProductos } from "../asyncmock"

const ItemListContainer = ({ mensajeBienvenida }) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        obtenerProductos()
            .then(data => {
                setProductos(data)
                setCargando(false)
            })
            .catch(error => {
                console.error(error)
                setCargando(false)
            })
    },[])

    if (cargando) {
        return (
            <div className="itemListContainer">
                <h2>{mensajeBienvenida}</h2>
                <p>Cargando productos...</p>
            </div>
        )
    }

    return (
        <div className="itemListContainer">
            <h2>{mensajeBienvenida}</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer