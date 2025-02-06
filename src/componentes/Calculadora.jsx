import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Calculadora = () => {
    const [operacion, setOperacion] = useState('');

    const handleClick = (e) => {
        // console.log(operacion);
        const boton = e.target.textContent;
        setOperacion(prevOperacion => prevOperacion + boton); // Agregar el número u operador
    };

    const Resultado = () => {
        setOperacion(eval(operacion) || "");
    }

    useEffect(() => {
        if (
            (
                (operacion[operacion.length - 2] === '/' ||
                    operacion[operacion.length - 2] === '*' ||
                    operacion[operacion.length - 2] === '+' ||
                    operacion[operacion.length - 2] === '-')
                &&
                (operacion[operacion.length - 1] === '+' ||
                    operacion[operacion.length - 1] === '-' ||
                    operacion[operacion.length - 1] === '*' ||
                    operacion[operacion.length - 1] === '/')
            )
        ) {
            alert("Error en la operación no puedes ingresar dos signos seguidos");
            // setOperacion('Error');
            // operacion.pop()
            setOperacion(operacion.slice(0, -1));
        } else {
            console.log("Operación actual:", operacion);
        }
    }, [operacion]);


    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" className='links' >Inicio</Link></li>
                </ul>
            </nav>

            <h1 className='h1center'>Calculadora</h1>

            <div className="container">
                <div className='section'>
                    <h1>Resultado: {operacion}</h1>
                </div>

            </div>

            <div className="container">
                <div className="section"> <button onClick={(e) => { handleClick(e) }}>1</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }} >2</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }} >3</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }} >0</button></div>
            </div>
            <div className="container">
                <div className="section"><button onClick={(e) => { handleClick(e) }} >4</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }} >5</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }} >6</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }} >+</button></div>
            </div>
            <div className="container">
                <div className="section"><button onClick={(e) => { handleClick(e) }}>7</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }}>8</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }}>9</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }}>-</button></div>
            </div>
            <div className="container">
                <div className="section"><button onClick={Resultado}>Enter</button></div>
                <div className="section"><button onClick={() => { setOperacion('') }}>Borrar</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }}>*</button></div>
                <div className="section"><button onClick={(e) => { handleClick(e) }}>/</button></div>
            </div>


        </>
    );
};

export default Calculadora;
