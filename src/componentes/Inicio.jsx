import React from 'react'
import { Link } from 'react-router'

const Inicio = () => {
    return (
        <>
            <h1>Esto es el inicio</h1>
            <nav>
                <ul>
                    <li><Link to="/calculadora" className='links' >Calculadora</Link></li>
                    <li><Link to="/imagenes" className='links' >Imagenes</Link></li>
                    
                    <li>Estas</li>
                </ul>
            </nav>
        </>

    )
}

export default Inicio