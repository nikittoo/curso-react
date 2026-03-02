import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { getTotalItems } = useCart()
    const totalItems = getTotalItems()

    return (
        <div className="cart-widget">
            <span>🛒 {totalItems}</span>
        </div>
    )
}

export default CartWidget