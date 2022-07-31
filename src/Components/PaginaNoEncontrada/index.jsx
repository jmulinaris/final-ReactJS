import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.css"

const PaginaNoEncontrada = () => {
    return (
        <div>
            <p> La página ingresada no existe
                <Link className="link-inicio" to="/">Volver al inicio</Link>
            </p>
        </div>
    )
}

export default PaginaNoEncontrada;