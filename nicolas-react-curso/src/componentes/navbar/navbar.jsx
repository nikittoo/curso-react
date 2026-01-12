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
                <Boton texto="Inicio" />
                <Boton texto="Productos" />
                <Boton texto="Contacto" />
            </div>

            <div className="carrito">
                <CartWidget limite={10} />
            </div>
            
        </nav>
    )
}

export default Navbar
