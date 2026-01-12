import { useState } from "react"


const CartWidget = ({limite}) => {
    const [contador, setContador] = useState(0)

    // recordar crear funciones auxiliares
    const agregar = () => {
        if (contador < limite){
            setContador(contador + 1)
        }
    }

    const quitar = () => {
        if (contador > 0){
            setContador(contador - 1)
        } 
    }

    return (
        <div>
            <button onClick={agregar}>Agregar</button>
            <p>{contador}</p>
            <button onClick={quitar}>Quitar</button>
        </div>
    )
}

export default CartWidget