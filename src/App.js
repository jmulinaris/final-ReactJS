import React from "react";
import ItemListContainer from "./Components/ItemListContainer/index";
import NavBar from "./Components/NavBar/index"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer texto="Bienvenido a la tienda online"/>
    </>
  )
}

export default App;
