import React, {useEffect, useState} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () =>{
        setCount (count-1);
    }

    const increase = () =>{
        setCount (count+1);
    }

    useEffect (() =>{
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div>
            <div className="counter">
            <section>
                    <button className="counter-button" disabled={count <= 1} onClick={decrease}>-</button>
                    <span className="numero">{count}</span>
                    <button className="counter-button" disabled={count >= stock} onClick={increase}>+</button>
            </section>
                <p>({stock} disponibles)</p>
            </div>
            <div>
                <button className="add-button" disabled={stock <= 0} onClick={()=> onAdd(count)}> <AddShoppingCartIcon className="addCarrito" fontSize="small"/>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount;
