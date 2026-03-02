import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import './ItemCount.css'

const ItemCount = ({ stock, product }) => {
    const [count, setCount] = useState(1)
    const [added, setAdded] = useState(false)
    const { addToCart } = useCart()

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        addToCart(product, count)
        setAdded(true)
    }

    if (added) {
        return <p>Producto agregado al carrito</p>
    }

    return (
        <div className="itemCount">
            <button onClick={decrement} disabled={count === 1}>-</button>
            <span>{count}</span>
            <button onClick={increment} disabled={count === stock}>+</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount