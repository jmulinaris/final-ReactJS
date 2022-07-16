import React, {useState, useEffect} from "react";
import ItemList from "../ItemList";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import "./styles.css"


const ItemListContainer = ({greeting}) =>{
    const [productList, setProductList] = useState ([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()

    useEffect(()=>{

        const productsCollection = collection (db, "productos");

        if (categoryId) {
            const q = query (productsCollection, where ("category", "==", categoryId));
            getDocs(q)
            .then (result =>
                setProductList(result.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch ((error)=>{
                console.log(error);
            })
            .finally(()=> {
                setLoading(false);
            })
        } else {
            getDocs(productsCollection)
            .then (result =>
                setProductList(result.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch ((error)=>{
                console.log(error);
            })
            .finally(()=> {
                setLoading(false);
            })
        }
    }, [categoryId])

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
