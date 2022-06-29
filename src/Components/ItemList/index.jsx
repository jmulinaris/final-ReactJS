import React from 'react'
import Item from '../Item'
import "./styles.css"

const ItemList = ({productList}) => {
    return (
        <div>
            <h2 className="titulo-lista">Lista de productos</h2>
            {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    );
}

export default ItemList;