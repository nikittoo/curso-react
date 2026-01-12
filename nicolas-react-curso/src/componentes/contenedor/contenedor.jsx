import "./contenedor.css"

const Contenedor = ({ mensajeBienvenida }) => {
    return (
        <div className="contenedor">
            <h2>{mensajeBienvenida}</h2>
            <p>Aquí se mostrará el catálogo de productos próximamente.</p>
        </div>
    )
}

export default Contenedor