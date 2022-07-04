import React from 'react'
import Item from '../Item'
import "./styles.css"

const ItemList = ({productList}) => {
    return (
        <div>
            {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    );
}

export default ItemList;