import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    return (
        <div className="card">
            <img src={product.image} alt="{product.name}" />
            <div className="info-product">
                <p>{product.name}</p>
                <p><b>Precio: ${product.price}</b></p>
            </div>
            <button className='boton-detalle'>
                <Link to={`/detail/${product.id}`}>
                VER DETALLE
                </Link>
            </button>
        </div>
    )
}

export default Item;