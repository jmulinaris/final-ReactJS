import React, {createContext, useState, useEffect} from 'react'
import { useLocalStorage } from '../Components/LocalStorage';

export const CartContext = createContext();
const {Provider} = CartContext;

const CartCustomProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage("cart", []);
    const [quantityProducts, setQuantityProducts] = useState(0);

    const getQuantity = () =>{
        let quantity = 0;
        cart.forEach(product => quantity += product.quantity);
        setQuantityProducts(quantity);
    }

    useEffect (() =>{
        getQuantity();
    }, [cart]);

    const addProduct = (product) =>{
        if (isInCart(product.id)){
            const found = cart.find (p => p.id === product.id)
            const index = cart.indexOf(found);
            const aux = [...cart];
            aux[index].quantity += product.quantity;
            setCart(aux)
        } else {
            setCart([...cart, product]);
        }
    }

    const deleteProduct = (id) =>{
        setCart(cart.filter (product => product.id !== id));
    }

    const isInCart = (id) =>{
        return cart.some (products => products.id === id);
    }

    const clear = () =>{
        setCart([]);
    }

    const totalPrice = () =>{
        return cart.reduce ((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () =>{
        return cart.reduce ((acc, productAct) => acc + productAct.quantity, 0);
    }

    return (
        <Provider value={{cart, addProduct, deleteProduct, isInCart, clear, quantityProducts, totalPrice, totalProducts }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;