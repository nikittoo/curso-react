
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./componentes/navbar/navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {

  function saludarConMiNombre() {
    console.log("Hola, mi nombre es Nicolas Racca")
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensajeBienvenida="¡Bienvenida a la tienda!" />} />
        <Route path="/category/:id" element={<div>Categoría: {window.location.pathname.split('/')[2]}</div>} />
        <Route path="/item/:id" element={<div>Item: {window.location.pathname.split('/')[2]}</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
