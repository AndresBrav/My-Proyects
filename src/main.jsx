import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculadora from './componentes/Calculadora'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import './assets/styles/diseño.css'
import './assets/styles/diseñoimagenes.css'
import './assets/styles/detallesimagen.css'

import Inicio from './componentes/Inicio'
import Imagenes from './componentes/Imagenes'
import DetallesImagen from './componentes/DetallesImagen'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/calculadora' element={<Calculadora />}></Route>
        <Route path='/imagenes' element={<Imagenes />}></Route>
        <Route path='/imagenesDetalle/:id' element={<DetallesImagen />}></Route>

      </Routes>
      
    </StrictMode>
  </BrowserRouter>

)
