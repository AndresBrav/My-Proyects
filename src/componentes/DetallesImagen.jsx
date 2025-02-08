import React from 'react'
import { useParams } from 'react-router';
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

const imagenes = [
    { id: 1, src: paisaje, lugar: "frankfurt" },
    { id: 2, src: paisaje2, lugar: "frankfurt" },
    { id: 3, src: paisaje3, lugar: "frankfurt" },
    { id: 4, src: paisaje4, lugar: "frankfurt" },
    { id: 5, src: paisaje5, lugar: "frankfurt" },
    { id: 6, src: paisaje6, lugar: "frankfurt" },
    { id: 7, src: paisaje7, lugar: "frankfurt" },
    { id: 8, src: paisaje8, lugar: "frankfurt" },
    { id: 9, src: paisaje9, lugar: "frankfurt" },
    { id: 10, src: paisaje10, lugar: "frankfurt" },
    { id: 11, src: paisaje11, lugar: "frankfurt" },
    { id: 12, src: paisaje12, lugar: "frankfurt" }
];

const DetallesImagen = () => {



    // Obtenemos el parámetro 'id' de la URL
    const { id } = useParams();
    console.log(id);
    const imagenActual = imagenes.find(a => a.id === parseInt(id));
    return (
        <>
            <div className='ddiv'>
                <h1>{imagenActual.lugar}</h1>
                <img className='dimg' src={imagenActual.src} />
                <h1 className='dh1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae odio autem laborum nesciunt quis corrupti voluptatibus animi soluta? Laudantium tempore doloremque nulla at error totam dolorem nostrum veritatis ea.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et culpa alias repellendus magnam. Magni accusantium atque laboriosam error rerum facere nulla odit ea, minima consequuntur ratione corrupti ut, vero autem!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos voluptatem ea quo obcaecati maxime tempora accusantium optio perferendis, impedit unde temporibus, repellat quam vitae ex, non reprehenderit dolorum est.
                    Officiis ducimus quia amet deleniti consequatur voluptatibus modi exercitationem aliquam architecto ratione, a veritatis reiciendis ad sit libero voluptas eligendi optio laboriosam vel quis eveniet aliquid doloremque! Sit, earum quia.
                    Ea quae velit aliquid pariatur debitis repellat eaque exercitationem quibusdam, dolores quisquam dolor incidunt explicabo tempore dolorum necessitatibus alias libero reiciendis voluptate perspiciatis. Nostrum quo vero, dolore tempora harum quae!
                </h1>
            </div>

        </>

    )
}

export default DetallesImagen