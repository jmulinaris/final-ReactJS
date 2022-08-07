import React, {useState, useEffect, useContext, createFactory} from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
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
    const {errors, setErrors} = useState({});
    const [orderId, setOrderId] = useState("");

    const buyer = form;

    const {name, mail, verifMail} = buyer;

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
    )
}

//     useEffect(() => {
//     if (orderId) {
//         clear();
//     }
// }, [orderId]);

    const handleBlur = (e) =>{
        // handleChange(e);
        // setErrors(validateForm(form));
    };

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
                <h2>Formulario de compra</h2>
                <form onSubmit={handleSubmit}>
                    <div className="part-form">
                        <label>Nombre y apellido: </label>
                        <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        onBlur = {handleBlur}
                        onChange = {handleChange}
                        required
                        />
                    </div>
                    <div className="part-form">
                        <label>Celular: </label>
                        <input
                        type="number"
                        name="phone"
                        placeholder="Celular"
                        onBlur = {handleBlur}
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className="part-form">
                        <label>Correo electrónico: </label>
                        <input
                        type="email"
                        name="mail"
                        placeholder="Correo electrónico"
                        onBlur = {handleBlur}
                        onChange ={handleChange}
                        required/>
                    </div>
                    <div className="part-form">
                        <label>Repite el correo: </label>
                        <input
                        type="email"
                        name="verifmail"
                        placeholder="Repite el correo electrónico"
                        onBlur = {handleBlur}
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className="part-form">
                        <input className="button-pagar"
                        type="submit"
                        value="IR A PAGAR"/>
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