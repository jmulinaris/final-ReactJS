import React from 'react'

const FinCompra = (name, mail, orderId) => {
    return (
        <div>
            <p>Muchas gracias por tu compra! Te enviaremos un mail con el link de pago</p>
            <p>Nombre del comprador: {name}</p>
            <p>Email comprador: {mail}</p>
            <p>ID de compra: {orderId}</p>
        </div>
    )
}

export default FinCompra;