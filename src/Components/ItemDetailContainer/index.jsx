import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'
import "./styles.css"
import {getProduct} from "../../Mocks/fakeApi"
import { useParams } from 'react-router-dom'
import { BeatLoader } from "react-spinners";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        getProduct (id)
        .then((res)=>{
            setProduct (res);
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() =>{
            setLoading(false);
        });
    },[id])

    return (
        <div>
            {loading ? (
                <BeatLoader className="spinner" color="rgb(236, 114, 114)" cssOverride={{display:"flex", justifyContent:"center", marginTop:"5%"}}/>
            ) : (
                <>
                    <ItemDetail product={product}/>
                </>
            )}
        </div>
    )
}

export default ItemDetailContainer;