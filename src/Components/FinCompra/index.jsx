import { Link } from 'react-router-dom';

const FinCompra = ({name, mail, orderId}) => {


    return (
        <section className="container-fin">
            <div>
                <p>Muchas gracias por tu compra! Te enviaremos un mail con el link de pago</p>
                <p>Nombre del comprador: {name}</p>
                <p>Email comprador: {mail}</p>
                <p>ID de compra: {orderId}</p>
            </div>
            <div>
                <button className="button-volver"><Link to="/">Cerrar</Link></button>
            </div>
        </section>
    )
}

export default FinCompra;