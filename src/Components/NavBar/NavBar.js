import React from "react";
import logo from "../../assets/logoTienda.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () =>{
    return (
        <header>
            <a className="nombre" href ="#"> FRÖZEN</a>
                <nav className="nav">
                    <ul className="nav__list">
                        <li><a className="nav__link" href ="#"> Pastas </a></li>
                        <li><a className="nav__link" href ="#"> Pizzas</a></li>
                        <li><a className="nav__link" href ="#"> Panificación</a></li>
                        <li><a className="nav__link" href ="#"> Empanadas</a></li>
                        <li><a className="nav__link" href ="#"> Frutas </a></li>
                        <li><a className="nav__link" href ="#"> Verduras </a></li>
                        <li><a className="nav__link" href ="#"> Carnes </a></li>
                    </ul>
                </nav>
                <CartWidget />
        </header>
    )
}


export default NavBar;
