import React from 'react'
import "./styles.css"


const Item = ({product}) => {
    return (
        <div className="card">
            <img src={product.image} alt="{product.name}" />
            <div>
                <p>{product.name}</p>
                <p>${product.price}</p>
            </div>
            <button className='boton-comprar'>
                COMPRAR
            </button>
        </div>
    )
}

export default Item;