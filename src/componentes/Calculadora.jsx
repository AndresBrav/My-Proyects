import React from 'react'

const Calculadora = () => {
    return (
        <>
            <h1>Calculadora</h1>
            <div className="container">
                <div className="section"> <button>1</button></div>
                <div className="section"><button>2</button></div>
                <div className="section"><button>3</button></div>
                <div className="section"><button>0</button></div>
            </div>
            <div className="container">
                <div className="section"><button>4</button></div>
                <div className="section"><button>5</button></div>
                <div className="section"><button>6</button></div>
                <div className="section"><button>+</button></div>
            </div>
            <div className="container">
                <div className="section"><button>7</button></div>
                <div className="section"><button>8</button></div>
                <div className="section"><button>9</button></div>
                <div className="section"><button>-</button></div>
            </div>
            <div className="container">
                <div className="section"><button>Enter</button></div>
                <div className="section"><button>Borrar</button></div>
                <div className="section"><button>*</button></div>
                <div className="section"><button>/</button></div>
            </div>




        </>
    )
}

export default Calculadora