import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'
import "./styles.css"

const product = {id:1, name:"Tallarines", price:250, stock:36, image:"https://i.postimg.cc/fTsD38db/tallarines.jpg"};

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});

    useEffect(()=>{
            const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(product)
            }, 3000);
        });
        getData.then(res=> setProductDetail (res));
    },[])

    return (
        <ItemDetail productDetail={productDetail}/>
    )
}

export default ItemDetailContainer;