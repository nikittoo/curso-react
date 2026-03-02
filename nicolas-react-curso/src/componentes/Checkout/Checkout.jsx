import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { addOrder } from '../../Services/firestoreService'
import './Checkout.css'

const Checkout = () => {
    const { cart, clearCart, getTotalItems } = useCart()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: ''
    })
    const [orderPlaced, setOrderPlaced] = useState(false)

    const totalItems = getTotalItems()
    const totalPrice = cart.reduce((total, item) => total + item.precio * item.quantity, 0)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const order = {
            buyer: formData,
            items: cart,
            total: totalPrice,
            date: new Date()
        }
        try {
            const orderId = await addOrder(order)
            console.log('Pedido guardado con ID:', orderId)
            clearCart()
            setOrderPlaced(true)
        } catch (error) {
            console.error('Error al guardar el pedido:', error)
        }
    }

    if (orderPlaced) {
        return (
            <div className="checkout">
                <h2>¡Pedido realizado!</h2>
                <p>Gracias por tu compra. Recibirás un email de confirmación.</p>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    if (totalItems === 0) {
        return (
            <div className="checkout">
                <h2>Checkout</h2>
                <p>No hay items en el carrito.</p>
                <Link to="/">Volver al catálogo</Link>
            </div>
        )
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <div className="checkout-summary">
                <h3>Resumen del pedido</h3>
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{item.titulo} x {item.quantity} - ${item.precio * item.quantity}</p>
                    </div>
                ))}
                <p>Total: ${totalPrice}</p>
            </div>
            <form onSubmit={handleSubmit} className="checkout-form">
                <label>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Dirección:
                    <textarea name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <button type="submit">Confirmar pedido</button>
            </form>
        </div>
    )
}

export default Checkout