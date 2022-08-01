import React from 'react'

const Checkout = ({ name, email, orderId }) => {
    return (
        <div>
            <p>Muchas gracias por tu compra! Te enviaremos un mail para continuar con el pago</p>
            <p>Nombre del comprador: {name}</p>
            <p>Email comprador: {email}</p>
            <p>ID de compra: {orderId}</p>
        </div>
    )
}

export default Checkout;