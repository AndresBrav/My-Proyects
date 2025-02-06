import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculadora from './componentes/Calculadora'
import './assets/styles/diseño.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Inicio from './componentes/Inicio'
import Imagenes from './componentes/Imagenes'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/calculadora' element={<Calculadora />}></Route>
        <Route path='/imagenes' element={<Imagenes />}></Route>

      </Routes>
      
    </StrictMode>
  </BrowserRouter>

)
