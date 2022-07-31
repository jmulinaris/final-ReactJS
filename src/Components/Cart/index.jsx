import { Link } from "react-router-dom";
import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase";

const Cart = () => {
  const { cart, totalPrice, totalProducts, deleteProduct, clear } = useContext(CartContext);

  const order = {
    buyer: {
      name: "Julieta",
      email: "julieta@gmail.com",
      phone: "3512258102",
      adress: "Olmos 5821",
      date: serverTimestamp(),
    },
      items: cart.map (product => ( { id:product.id, name:product.name, price:product.price, quantity:product.quantity } )),
      total: totalPrice(),
  }

  const finishPurchase = () =>{
      const ordersCollection = collection (db, "orders");
      addDoc (ordersCollection, order)
      .then (({id}) => console.log(id),
      clear())
  }

  if (cart.length === 0){
    return (
      <>
        <h3 className="cart-title"> No hay productos en el carrito, comprá <Link className="cart-link" to="/"> acá </Link></h3>
      </>
      );
    }

  return (
    <>
      <div>
          {cart.map (product =>
          <div className="cart-detail" key={product.id}>
          <p> Cantidad: {product.quantity} </p>
          <p> Producto: {product.name} </p>
          <p> Precio: ${product.price}</p>
          <p> Subtotal: ${product.quantity * product.price}</p>
          <p className="delete-button" onClick={() =>deleteProduct(product.id)}><RemoveCircleIcon/></p>
      </div>)}
      </div>
        <div className="cart-resume">
          <p> Total productos: {totalProducts()} </p>
          <p className="cart-total" >Total: ${totalPrice()}</p>
          <button className="clear-button" onClick={()=> clear()}><DeleteIcon fontSize="small"/> Vaciar Carrito</button>
          <button className="cart-finish-button" onClick={()=>finishPurchase()} > Finalizar compra</button>
        </div>
    </>
    );
  }


export default Cart;