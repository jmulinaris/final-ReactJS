import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/index";
import NavBar from "./Components/NavBar/index"
import Cart from "./Components/Cart/index"
import CartCustomProvider from "./Context/CartContext";
import PaginaNoEncontrada from "./Components/PaginaNoEncontrada";

const App = () => {
  return (
      <BrowserRouter>
        <CartCustomProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<PaginaNoEncontrada />}/>
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
  )
}

export default App;
