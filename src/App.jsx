import React from "react";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/index";
import NavBar from "./Components/NavBar/index"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda online"/>
      <ItemDetailContainer/>
    </>
  )
}

export default App;
