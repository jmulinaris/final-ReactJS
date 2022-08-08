import { Link } from "react-router-dom";
import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cart, totalPrice, totalProducts, deleteProduct, clear } = useContext(CartContext);

  return (
    cart.length === 0 ?
      <>
        <h3 className="cart-title"> No hay productos en el carrito, comprá <Link className="cart-link" to="/"> acá </Link></h3>
      </>
      :
    <div>
        <div>
          <div>
              {cart.map (product =>
              <div className="cart-detail" key={product.id}>
              <p> {product.quantity} </p>
              <p> {product.name} </p>
              <p> ${product.price}</p>
              <p> Subtotal: ${product.quantity * product.price}</p>
              <p className="delete-button" onClick={() =>deleteProduct(product.id)}><RemoveCircleIcon/></p>
              </div>)}
          </div>
            <div className="cart-resume">
              <p> Total productos: {totalProducts()} </p>
              <p className="cart-total" >Total: ${totalPrice()}</p>
            </div>
        </div>
        <div className="cart-buttons">
            <button className="clear-button" onClick={()=> clear()}><DeleteIcon fontSize="small"/>
                VACIAR
            </button>
            <button className="cart-button">
              <Link to="/Checkout"> FINALIZAR</Link>
            </button>
            <button className="cart-button">
              <Link to="/"> VOLVER</Link>
            </button>
          </div>
      </div>
  )
}

export default Cart;

