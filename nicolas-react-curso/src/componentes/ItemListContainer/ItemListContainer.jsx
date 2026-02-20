import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { obtenerProductos, getProductsByCategory } from "../../asyncmock"

const ItemListContainer = ({ mensajeBienvenida }) => {
    const { categoryId } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const mensaje = categoryId ? `Productos de categoría ${categoryId}` : mensajeBienvenida

    useEffect(() => {
        const fetchProductos = categoryId ? getProductsByCategory(categoryId) : obtenerProductos()
        fetchProductos
            .then(data => {
                setProductos(data)
                setCargando(false)
            })
            .catch(error => {
                console.error(error)
                setCargando(false)
            })
    }, [categoryId])

    if (cargando) {
        return (
            <div className="itemListContainer">
                <h2>{mensaje}</h2>
                <p>Cargando productos...</p>
            </div>
        )
    }

    return (
        <div className="itemListContainer">
            <h2>{mensaje}</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer