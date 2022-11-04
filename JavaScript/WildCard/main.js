/* const apiFotos = "https://jsonplaceholder.typicode.com/photos";
const contenedorFotos = document.getElementById("contenedorFotos");

fetch(apiFotos)
    .then(respuesta => respuesta.json())
    .then((datos)=>{
        mostrarFotos(datos);
    })
    .catch(error =>{console.log(error);});

function mostrarFotos(datos) {

    datos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto.thumbnailUrl;
        contenedorFotos.appendChild(img);
        
    });
}
 */


/*
const apiCripto = "https://criptoya.com/api/dolar";
const divDolar = document.getElementById("divDolar");

 setInterval(()=>{
    
    fetch(apiCripto)
        .then(respuesta => respuesta.json())
        .then(({blue, ccb, ccl, mep, oficial, solidario})=>{
            divDolar.innerHTML=`
                <h2> Tipos de Dolar: </h2>
                <p>Dolar oficial: ${oficial}</p>
                <p>Dolar solidario: ${solidario}</p>                
                <p>Dolar blue: ${blue}</p>
                <p>Dolar mep: ${mep}</p>
                <p>Dolar ccl: ${ccl}</p>
                <p>Dolar ccb: ${ccb}</p>
            `
        })
        .catch(error =>{console.log(error);});
},2000)


function mostrarFotos(datos) {

    datos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto.thumbnailUrl()
        
    });
} */

/* //Ruta relativa
const listado = document.getElementById("listado");
const listadoProductos = "json/productos.json";


fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(producto =>{
            listado.innerHTML +=`
                <h2> Nombre ${producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
                <p>Id: ${producto.id}</p>            
            `
        })
    })    
    .catch(error =>{console.log(error);})
    .finally(()=> {console.log("proceso finalizado")});
     */

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7227b3dc1fmshbdd13516333081fp15e04ejsn372a59d82ab9',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));