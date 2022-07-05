import React, {useState, useEffect} from "react";
import ItemList from "../ItemList";
import { BeatLoader } from "react-spinners";
import { getProducts } from "../../Mocks/fakeApi";
import { useParams } from "react-router-dom";
import "./styles.css"


const ItemListContainer = ({greeting}) =>{
    const [productList, setProductList] = useState ([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true);
        getProducts (categoryId)
        .then ((res) => {
            setProductList(res);
        })
        .catch ((error)=>{
            console.log(error);
        })
        .finally(()=> {
            setLoading(false);
        })
    }, [categoryId])

    const onAdd = (quantity) => {
        console.log(`Agreaste al carrito ${quantity} unidades del producto`);
    }

    return (
        <div>
            <h1 className="titulo">{greeting}</h1>
            {loading ?
            <BeatLoader className="spinner" color="rgb(236, 114, 114)" cssOverride={{display:"flex", justifyContent:"center", marginTop:"5%"}}/>
            : <ItemList productList={productList}/>}
        </div>
    )
}

export default ItemListContainer;
