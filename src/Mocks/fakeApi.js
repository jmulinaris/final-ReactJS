const products = [
    {id:1, name:"Tallarines", price:250, stock:36, image:"https://i.postimg.cc/fTsD38db/tallarines.jpg" },
    {id:2, name:"Cappellettis de carne", price:320, stock:22, image:"https://i.postimg.cc/JhSWRxmM/cappellettis.jpg" },
    {id:3, name:"Ravioles de 4 quesos", price:300, stock:26, image:"https://i.postimg.cc/vZHyhD3F/ravioles-cuatro.jpg" },
    {id:4, name:"Ravioles de verdura", price:320, stock:37, image:"https://i.postimg.cc/hjmsWdT5/ravioles-verdura.jpg" },
    {id:5, name:"Tapa de pascualina", price:200, stock:19, image:"https://i.postimg.cc/02Cx77G0/pascualina.jpg" },
];


export const getData = new Promise((resolve,reject) =>{
    let condition = true;
    setTimeout(()=>{
        if(condition){
            resolve(products)
        } else {
            reject("Salió mal")
        }
    }, 3000);
});