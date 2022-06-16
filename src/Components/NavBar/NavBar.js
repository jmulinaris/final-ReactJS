import React from "react";
import logo from "../../assets/logoTienda.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"

const NavBar = () =>{
    return (
        <header>
            <img src ={logo} alt ="logo" />
                <nav>
                    <a href =""> Pastas </a>
                    <a href =""> Pizzas</a>
                    <a href =""> Panificación</a>
                    <a href =""> Empanadas</a>
                    <a href =""> Frutas </a>
                    <a href =""> Verduras </a>
                    <a href =""> Carnes </a>
                </nav>
            <ShoppingCartIcon fontSize="large"/>
        </header>
    )
}


export default NavBar;
