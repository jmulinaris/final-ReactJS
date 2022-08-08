import React, {useState, useContext} from 'react'
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase";
import { CartContext } from '../../Context/CartContext';
import "./styles.css";
import { Link } from 'react-router-dom';
import FinCompra from "../../Components/FinCompra"

    const initialForm = {
    name:"",
    phone:"",
    mail:"",
    verifMail:"",
    };

const Checkout = () => {

    const {cart, totalPrice, clear } = useContext(CartContext);
    const [form, setForm] = useState(initialForm);
    const [orderId, setOrderId] = useState("");

    const buyer = form;

    const {name, mail} = buyer;

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value,
        });
    };

    const finishPurchase = () =>{
        const ordersCollection = collection (db, "orders");
        addDoc (ordersCollection, {
            buyer,
            items: cart.map (product => ({
            id:product.id,
            name:product.name,
            price:product.price,
            quantity:product.quantity
        })),
            date: serverTimestamp(),
            total: totalPrice(),
        })
        .then (({id}) => setOrderId(id),
        clear()
    )
        cart.forEach((product) => {
        const updateCollection = doc(db, "productos", product.id);
        updateDoc(updateCollection, { stock: product.stock - product.quantity });
    });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        finishPurchase();
    };

    return (
        <div>
        { !orderId ?
            (
            <section>
                <div className="form">
                <h2>Completá tus datos para finalizar</h2>
                <form onSubmit={handleSubmit}>
                    <div className="part-form">
                        <input
                        type="text"
                        name="name"
                        placeholder="Ingresá tu nombre y apellido"
                        onChange = {handleChange}
                        required
                        />
                    </div>
                    <div className="part-form">
                        <input
                        type="number"
                        name="phone"
                        placeholder="Ingresá tu celular"
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className="part-form">
                        <input
                        type="email"
                        name="mail"
                        placeholder="Ingresá tu mail"
                        onChange ={handleChange}
                        required/>
                    </div>
                    <div className="part-form">
                        <input
                        type="email"
                        name="verifmail"
                        placeholder="Repetí tu mail"
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className="buttons-form">
                        <div>
                            <input className="button-form"
                            type="submit"
                            value="IR A PAGAR"/>
                        </div>
                        <div>
                            <button className="button-form"><Link to="/cart/">CANCELAR</Link></button>
                        </div>
                    </div>
                </form>
                </div>
            </section>
            ) : (
                <FinCompra name={name} mail={mail} orderId={orderId}/>
            )}
        </div>
        )
    }


export default Checkout;