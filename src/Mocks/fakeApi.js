const products = [
    {
        id:1,
        name:"Tallarines",
        price:250,
        stock:36,
        image:"https://i.postimg.cc/fTsD38db/tallarines.jpg",
        category:"pastas",
        description:"Tallarines de huevo Bettini por 500gr. Rinde para 3 personas"
    },
    {
        id:2,
        name:"Cappellettis de carne",
        price:320,
        stock:22,
        image:"https://i.postimg.cc/JhSWRxmM/cappellettis.jpg",
        category:"pastas",
        description:"Cappellettis de carne Bettini por 500gr. Rinde para 3 personas"
    },
    {
        id:3,
        name:"Ravioles de 4 quesos",
        price:300,
        stock:26,
        image:"https://i.postimg.cc/vZHyhD3F/ravioles-cuatro.jpg",
        category:"pastas",
        description:"Ravioles de cuatro quesos Bettini por 500gr. Rinde para 3 personas"
    },
    {
        id:4,
        name:"Ravioles de verdura",
        price:320,
        stock:37,
        image:"https://i.postimg.cc/hjmsWdT5/ravioles-verdura.jpg",
        category:"pastas",
        description:"Ravioles de verdura Bettini por 500gr. Rinde para 3 personas"
    },
    {
        id:5,
        name:"Tapa de pascualina",
        price:200,
        stock:19,
        image:"https://i.postimg.cc/02Cx77G0/pascualina.jpg",
        category:"pastas",
        description:"Tapas de pascualina Bettini por 2 unidades"
    },
    {
        id:6,
        name:"Pizza de muzzarella",
        price:500,
        stock:22,
        image:"https://i.postimg.cc/WbQ52k5R/pizza-muzza.jpg",
        category:"pizzas",
        description:"Pizza de muzzarella por 535gr. Rinde para 8 personas"
    },
    {
        id:7,
        name:"Pizza especial",
        price:540,
        stock:12,
        image:"https://i.postimg.cc/MHZpfHtq/pizza-esp.jpg",
        category:"pizzas",
        description:"Pizza de muzzarella y jamón por 535gr. Rinde para 8 personas"
    },
    {
        id:8,
        name:"Empanadas de carne",
        price:520,
        stock:9,
        image:"https://i.postimg.cc/YCkcRZYy/empanadas.png",
        category:"empanadas",
        description:"Empanadas de carne x 4 unidades"
    },
    {
        id:9,
        name:"Empanadas de pollo",
        price:490,
        stock:7,
        image:"https://i.postimg.cc/tRDJ6KfD/empanadas-pollo.webp",
        category:"empanadas",
        description:"Empanadas de pollo x 4 unidades"
    },
    {
        id:10,
        name:"Mix de frutos rojos",
        price:1000,
        stock:15,
        image:"https://i.postimg.cc/kXnj1bTq/frutos-rojos.png",
        category:"frutas",
        description:"Mix de frutos rojos 100% natural: hecho con arándanos, moras, frutillas y frambuesas, con todas sus propiedades y nutrientes"
    },
    {
        id:11,
        name:"Frutillas",
        price:900,
        stock:10,
        image:"https://i.postimg.cc/1RW6SV99/frutillas.jpg",
        category:"frutas",
        description:"¿Frutillas todo el año? ¡Sí, en el freezer! Riquísimas, nutritivas y super prácticas: abrís el freezer y ¡listas para consumir! Sin azúcar agregada ni conservantes"
    },
    {
        id:12,
        name:"Pimientos",
        price:600,
        stock:16,
        image:"https://i.postimg.cc/yx52C6Q7/pimientos.png",
        category:"verduras",
        description:"¡Seguimos sumando opciones para la huerta en tu freezer! Ricos en vitamina C y vitamina A sin conservantes ni aditivos ¡listos para cocinar!"
    },
    {
        id:13,
        name:"Zanahoria",
        price:550,
        stock:16,
        image:"https://i.postimg.cc/pTgXqvfn/zanahoria.png",
        category:"verduras",
        description:"Zanahoria en cubos lista para cocinar"
    },
    {
        id:14,
        name:"Choclo",
        price:750,
        stock:16,
        image:"https://i.postimg.cc/SNLN7wJJ/choclo.png",
        category:"verduras",
        description:"Riquísimo: en sabor y en fibra. Listo para cocinar y ser parte de tus ensaladas, rellenos y recetas"
    },
];

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const filteredProducts = products.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(filteredProducts) : resolve(products);
        }, 1000);
    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const foundProducts = products.find(
            (prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(foundProducts);
        }, 1000);
    });
};