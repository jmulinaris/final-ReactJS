import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.css"


const Item = ({product}) => {
    return (
        <div className="card">
            <img src={product.image} alt="{product.name}" />
            <div className="info-product">
                <p>{product.name}</p>
                <p>${product.price}</p>
            </div>
            <Link className='boton-detalle' to={`/detail/${product.id}`}>
                VER DETALLE
            </Link>
        </div>
    )
}

export default Item;