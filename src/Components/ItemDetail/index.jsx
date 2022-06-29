import React from 'react'
import "./styles.css"

const ItemDetail = ({productDetail}) => {
    return (
        <div className='container'>
            <div>
                <div>
                    <h1 className="nombre-producto">{productDetail.name}</h1>
                </div>
                <img className="imagen-detalle" src={productDetail.image} alt='{productDetail.name}' />
            </div>
        </div>
    )
}

export default ItemDetail;