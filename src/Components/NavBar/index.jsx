import React from "react";
import CartWidget from "../CartWidget/index";
import {Link} from "react-router-dom";
import "./styles.css"

const categories = [
    {
        id:1,
        path:"/category/pastas",
        name:"Pastas"
    },
    {
        id:2,
        path:"/category/pizzas",
        name:"Pizzas"
    },
    {
        id:3,
        path:"/category/empanadas",
        name:"Empanadas"
    },
    {
        id:4,
        path:"/category/frutas",
        name:"Frutas"
    },
    {
        id:5,
        path:"/category/verduras",
        name:"Verduras"
    },
];

const NavBar = () =>{

    return (
        <header>
            <Link className="nombre" to="/"> FRÖZEN</Link>
                <nav className="nav">
                    <ul className="nav__list">
                        {categories.map((category) => (
                        <Link className="link" to={category.path} key={category.id}>{category.name}</Link>
                        ))}
                    </ul>
                </nav>
                <Link className="cart" to="/cart"> <CartWidget /> </Link>
        </header>
    )
}


export default NavBar;
