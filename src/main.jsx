import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculadora from './componentes/Calculadora'
import './assets/styles/diseño.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculadora></Calculadora>
  </StrictMode>,
)
