
import Navbar from "./componentes/navbar/navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {

  function saludarConMiNombre() {
    console.log("Hola, mi nombre es Nicolas Racca")
  }


  return (
    <>
      <Navbar />
      <ItemListContainer mensajeBienvenida="¡Bienvenida a la tienda!" />
    </>
  )
}

export default App
