import React from 'react'
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
    return (
        <div className='container'>
            <div>
                <img className="imagen-detalle" src={product.image} alt='{product.name}' />
            </div>
                <div className='detalle-producto'>
                    <h1 className="nombre-producto">{product.name}</h1>
                    <h2>${product.price}</h2>
                    <h4>{product.description}</h4>
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
        </div>
    )
}

export default ItemDetail;