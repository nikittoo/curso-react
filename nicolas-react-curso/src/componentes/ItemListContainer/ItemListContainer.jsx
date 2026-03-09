import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Services/config'

const ItemListContainer = ({ mensajeBienvenida }) => {
    const { categoryId } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const mensaje = categoryId ? `Productos de categoría ${categoryId}` : mensajeBienvenida

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                let data;
                if (categoryId) {
                    const productsRef = collection(db, 'cursoReact')
                    const q = query(productsRef, where('category', '==', categoryId))
                    const snapshot = await getDocs(q)
                    data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                } else {
                    const productsRef = collection(db, 'cursoReact')
                    const snapshot = await getDocs(productsRef)
                    data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                }
                setProductos(data)
                setCargando(false)
            } catch (error) {
                console.error(error)
                setCargando(false)
            }
        }
        fetchProductos()
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