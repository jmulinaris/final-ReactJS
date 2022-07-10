import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../Context/CartContext";

const CartWidget = () =>{

    const {quantityProducts} = useContext (CartContext);

    return (
        <div className="cart">
            <ShoppingCartIcon className="carrito" fontSize="large"/>
            <p className="counterCart">{quantityProducts}</p>
        </div>
    )
}

export default CartWidget;