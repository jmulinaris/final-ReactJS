import React, {useState, useEffect, useContext} from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase";
import { CartContext } from '../../Context/CartContext';
import FinCompra from '../FinCompra';
import Form from '../Form';
import "./styles.css";

const initialForm = {
    name:"",
    address:"",
    phone:"",
    mail:"",
    verifmail:"",
};

const Checkout = () => {

    const {cart, totalPrice, clear } = useContext(CartContext);
    const {form, setForm} = useState(initialForm);
    const {errors, setErrors} = useState("");
    const [orderId, setOrderId] = useState("");

    const order = {
    buyer: {
        name: "name",
        address: "address",
        phone: "phone",
        mail: "mail",
        date: serverTimestamp(),
    },
    items: cart.map (product => ({
        id:product.id,
        name:product.name,
        price:product.price,
        quantity:product.quantity
    })),
    total: totalPrice(),
}

    const finishPurchase = () =>{
        const ordersCollection = collection (db, "orders");
        addDoc (ordersCollection, order)
        .then (({id}) => setOrderId(id),
        // clear()
    )
}

    useEffect(() => {
    if (orderId) {
        console.log(orderId);
        // goCheckout();
    }
}, [orderId]);


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value,
        });
    };

    const handleBlur = (e) =>{
        handleChange(e);
        // setErrors(validateForm(form));
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(orderId);
        finishPurchase();
    };

    return (
        <div>
        {!orderId ?
        (
        <section>
            <div className="form">
            <h2>Formulario de compra</h2>
            <form onSubmit = {handleSubmit}>
                <div className="part-form">
                    <label>Nombre y apellido: </label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Nombre y apellido"
                    onBlur = {handleBlur}
                    onChange = {handleChange}
                    value={form.name}
                    required
                    />
                </div>
                <div className="part-form">
                    <label>Domicilio: </label>
                    <input
                    type="text"
                    name="address"
                    placeholder="Domicilio"
                    onBlur = {handleBlur}
                    onChange ={handleChange}
                    value={form.address}
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
                    value={form.phone}
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
                    value={form.mail}
                    required
                    />
                </div>
                <div className="part-form">
                    <label>Repite el correo: </label>
                    <input
                    type="email"
                    name="verifmail"
                    placeholder="Repite el correo electrónico"
                    onBlur = {handleBlur}
                    onChange ={handleChange}
                    value={form.verifMail}
                    required
                    />
                </div>
                <div className="part-form">
                    <input
                    className="button-pagar"
                    type="submit"
                    value="PAGAR"
                    />
                </div>
            </form>
            </div>
        </section>
            ) : (
                <FinCompra />
            )}
        </div>
        )
}

export default Checkout;