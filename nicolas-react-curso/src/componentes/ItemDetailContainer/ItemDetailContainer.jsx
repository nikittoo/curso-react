// Código para ItemDetailContainer.jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../asyncmock"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProducto(data)
                setCargando(false)
            })
            .catch(error => {
                console.error(error)
                setCargando(false)
            })
    }, [id])

    if (cargando) {
        return (
            <div className="itemDetailContainer">
                <p>Cargando producto...</p>
            </div>
        )
    }

    if (!producto) {
        return (
            <div className="itemDetailContainer">
                <p>Producto no encontrado.</p>
            </div>
        )
    }

    return (
        <div className="itemDetailContainer">
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer