import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // El render lo que hace es mostrar algo en pantalla
  <StrictMode>
    <App />
  </StrictMode>,
)
