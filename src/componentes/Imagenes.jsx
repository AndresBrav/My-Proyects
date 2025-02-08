import React, { useState } from 'react';
import paisaje from '../assets/imagenes/paisaje.jpg';
import paisaje2 from '../assets/imagenes/paisaje2.jpg';
import paisaje3 from '../assets/imagenes/paisaje3.jpeg';
import paisaje4 from '../assets/imagenes/paisaje4.jpeg';
import paisaje5 from '../assets/imagenes/paisaje5.jpeg';
import paisaje6 from '../assets/imagenes/paisaje6.webp';
import paisaje7 from '../assets/imagenes/paisaje7.jpg';
import paisaje8 from '../assets/imagenes/paisaje8.jpeg';
import paisaje9 from '../assets/imagenes/paisaje9.jpeg';
import paisaje10 from '../assets/imagenes/paisaje10.jpeg';
import paisaje11 from '../assets/imagenes/paisaje11.png';
import paisaje12 from '../assets/imagenes/paisaje12.jpg';
import DetallesImagen from './DetallesImagen';
import { Link } from 'react-router';

const imagenes = [
    { id: 1, src: paisaje },
    { id: 2, src: paisaje2 },
    { id: 3, src: paisaje3 },
    { id: 4, src: paisaje4 },
    { id: 5, src: paisaje5 },
    { id: 6, src: paisaje6 },
    { id: 7, src: paisaje7 },
    { id: 8, src: paisaje8 },
    { id: 9, src: paisaje9 },
    { id: 10, src: paisaje10 },
    { id: 11, src: paisaje11 },
    { id: 12, src: paisaje12 }
];

const Imagenes = () => {
    return (
        <div className="grid-container">
            {imagenes.map((i, pos) => (
                <Link key={i.id} to={`/imagenesDetalle/${i.id}`} className="links">
                    <img 
                        className='acceso'
                        src={i.src}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Imagenes;
