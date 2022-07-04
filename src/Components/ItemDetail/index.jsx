import React from 'react'
import ItemCount from '../ItemCount';
import "./styles.css"

const ItemDetail = ({product}) => {
    return (
        <div className='container'>
            <div>
                <img className="imagen-detalle" src={product.image} alt='{product.name}' />
                <div>
                    <h1 className="nombre-producto">{product.name}</h1>
                    <h2>${product.price}</h2>
                    <h3>Stock: {product.stock}</h3>
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;