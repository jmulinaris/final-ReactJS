import React from 'react'
import { useForm } from '../../Hooks/useForm';
import "./styles.css";

const initialForm = {
    name:"",
    address:"",
    phone:"",
    mail:"",
    verifmail:"",
};

const validationsForm = (form) => {
    let errors = {};

    // if (!form.name.trim()){
    //     errors.name = "El campo 'Nombre y apellido' es requerido"
    // }

    // if (!form.address.trim()){
    //     errors.address = "El campo 'Domicilio' es requerido"
    // }

    // if (!form.phone){
    //     errors.phone = "El campo 'Celular' es requerido"
    // }

    // if (!form.mail){
    //     errors.mail = "El campo 'Correo electrónico' es requerido"
    // }

    // if (!form.verifmail){
    //     errors.verifmail = "El campo 'Repite el correo' es requerido"
    // }

    if (form.mail !== form.verifmail){
        errors.verifmail = "Los mails no coinciden"
    }

    return errors
};

const Form = () => {

    const {form, errors, loading, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm)
    return (
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
                    onChange ={handleChange}
                    value={form.name}
                    required
                    />
                    {errors.name && <p className="error-form">{errors.name}</p>}
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
                    {errors.address && <p className="error-form">{errors.address}</p>}
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
                    {errors.phone && <p className="error-form">{errors.phone}</p>}
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
                    {errors.mail && <p className="error-form">{errors.mail}</p>}
                </div>
                <div className="part-form">
                    <label>Repite el correo: </label>
                    <input
                    type="email"
                    name="verifmail"
                    placeholder="Repite el correo electrónico"
                    onBlur = {handleBlur}
                    onChange ={handleChange}
                    value={form.verifmail}
                    required
                    />
                    {errors.verifmail && <p className="error-form">{errors.verifmail}</p>}
                </div>
                {form.mail !== form.verifmail ?
                    <p></p>
                    :
                    <div className="part-form">
                    <input className="button-pagar"
                    type="submit"
                    value="PAGAR"
                    />
                    </div>}
            </form>
        </div>
    )
}

export default Form;