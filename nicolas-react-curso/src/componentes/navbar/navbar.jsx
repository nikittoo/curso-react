import { Link } from 'react-router-dom'
import Boton from "../boton/boton"
import Titulo from "../titulo/titulo"
import CartWidget from "../CartWidget/CartWidget"
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="logo">
                <Titulo texto="Mi Tienda" />
            </div>

            <div className="links">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/category/deportes" className="nav-link">Deportes</Link>
                <Link to="/category/arte" className="nav-link">Arte</Link>
                <Link to="/contacto" className="nav-link">Contacto</Link>
                <Link to="/cart" className="nav-link">Carrito</Link>
                <Link to="/checkout" className="nav-link">Checkout</Link>
            </div>

            <div className="carrito">
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
            
        </nav>
    )
}

export default Navbar
