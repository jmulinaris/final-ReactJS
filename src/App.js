import React from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer texto="Bienvenido a la tienda online"/>
    </>
  )
}

export default App;
