import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, removeFromCart, clearCart, getTotalItems } = useCart()
    const totalItems = getTotalItems()
    const totalPrice = cart.reduce((total, item) => total + item.precio * item.quantity, 0)

    if (totalItems === 0) {
        return (
            <div className="cart">
                <h2>Carrito</h2>
                <p>El carrito está vacío.</p>
                <Link to="/">Volver al catálogo</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <h2>Carrito</h2>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imagen} alt={item.titulo} />
                        <div>
                            <h3>{item.titulo}</h3>
                            <p>Precio: ${item.precio}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Subtotal: ${item.precio * item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <p>Total items: {totalItems}</p>
                <p>Total precio: ${totalPrice}</p>
                <button onClick={clearCart}>Vaciar carrito</button>
                <Link to="/checkout">
                    <button>Ir al checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart