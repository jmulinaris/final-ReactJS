import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/index";
import NavBar from "./Components/NavBar/index"
import Cart from "./Components/Cart/index"

const App = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda online" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido a la tienda online" />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
