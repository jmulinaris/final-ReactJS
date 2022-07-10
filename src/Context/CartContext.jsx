import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext();
const {Provider} = CartContext;

const CartCustomProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [quantityProducts, setQuantityProducts] = useState(0);

    const getQuantity = () =>{
        let quantity = 0;
        products.forEach(product => quantity += product.quantity);
        setQuantityProducts(quantity);
    }

    useEffect (() =>{
        getQuantity();
    }, [products]);

    const addProduct = (product) =>{
        if (isInCart(product.id)){
            const found = products.find (p => p.id === product.id)
            const index = products.indexOf(found);
            const aux = [...products];
            aux[index].quantity += product.quantity;
            setProducts(aux)
        } else {
            setProducts([...products, product]);
        }
    }

    const deleteProduct = (id) =>{
        setProducts(products.filter (product => product.id !== id));
    }

    const isInCart = (id) =>{
        return products.some (products => products.id === id);
    }

    const clear = () =>{
        setProducts([]);
    }

    return (
        <Provider value={{products, addProduct, deleteProduct, isInCart, clear, quantityProducts}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;