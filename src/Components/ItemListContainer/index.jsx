import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import { BeatLoader } from "react-spinners";
import { getData } from "../../Mocks/fakeApi";
import "./styles.css"


const ItemListContainer = ({greeting}) =>{
    const [productList, setProductList] = useState ([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getData
        .then (res => setProductList(res))
        .catch ((error)=>console.log(error))
        .finally(()=>setLoading(false))
    }, [])

    const onAdd = (quantity) => {
        console.log(`Agreaste al carrito ${quantity} unidades del producto`);
    }

    return (
        <div>
            <h1 className="titulo">{greeting}</h1>
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
            {loading ? <BeatLoader className="spinner" color="rgb(236, 114, 114)" cssOverride={{display:"flex", justifyContent:"center", marginTop:"5%"}}/> : <ItemList productList={productList}/>}
        </div>
    )
}

export default ItemListContainer;
