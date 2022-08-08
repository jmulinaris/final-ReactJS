import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useContext(CartContext);

    const onAdd = (quantity) => {
        addProduct ({...product, quantity:quantity});
        setGoToCart(true);
    }

    return (
        <div className='container'>
            <div>
                <img className="imagen-detalle" src={product.image} alt='{product.name}' />
            </div>
                <div className='detalle-producto'>
                    <section>
                        <h1 className="nombre-producto">{product.name}</h1>
                        <h4>{product.description}</h4>
                        <h2><b>${product.price}</b></h2>
                        <h3>Stock: {product.stock}</h3>
                    </section>
                    {
                        goToCart
                        ? <Link className="finish-button" to="/cart">VER CARRITO</Link>
                        : <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                    }
                </div>
        </div>
    )
}

export default ItemDetail;