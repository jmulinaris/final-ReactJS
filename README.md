## Ecommcerce FRÖZEN
***
Coder House: Proyecto final de React


Tienda virtual para comprar alimentos congelados

## Alcance
***
* NavBar que contiene dos componentes:  NavBar y CartWidget.
* Componente ItemCount que permite aumentar y disminuir la cantidad a comprar, teniendo en cuenta el stock disponible.
* Componente ItemListContainer que renderiza el listado de productos. Se muestran las cards dinámicamente usando mapping y una promise manual.
* Componente ItemDetailContainer que muestra el detalle de cada producto.
* Se agrega funcionalidad al botón agregar al carrito, al apretar desaparece y aparece otro botón finalizar compra que lleva al Cart.
* Se crea el CartContext y funciones para agregar/eliminar productos del Cart.
* Se crea la vista del Cart
* Dejo de usar la fakeApi y traigo los datos de productos con firebase
* Creo orden de compra y la almaceno en firebase
* Creo aviso de que la página no existe cuando se tipea mal en el navegador
* Creo componente de checkout


## Tecnologías
***
Teconologías utilizadas en el proyecto
* [react]: Version 18.1.0
* [react-dom]: Version 18.1.0
* [react-router-dom]: Version 6.3.0
* [react-spinners]: Version 0.13.2
* [firebase]: Version 9.9.0

## Instalación
***
Pasos para clonar el repo:
```
$ git clone https://github.com/julimulinaris/e-commerce
$ npm install
$ npm start
```


