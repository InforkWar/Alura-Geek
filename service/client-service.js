const crearNuevoProducto = (category, img, name, price) => {
    const linea = document.createElement("section");
    const contenido =`
        
            <div class="producto">
                <img src=${img} alt="">
                <h3>${name}</h3>
                <h3 class="price">${price}</h3>
                <a href="#">Ver producto</a>
            </div>
        
    
    `;

    linea.innerHTML = contenido;
    return linea;
};

const starwars = document.querySelector("[data-starwars]"); 
const consolas = document.querySelector("[data-consolas]");
const diversos = document.querySelector("[data-diversos]");


const http = new XMLHttpRequest();

http.open("GET","https://fake-api-tau-green.vercel.app/product");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach(elemento => {
        switch (elemento.category){
            case "starwars":
                const nuevoStar = crearNuevoProducto(elemento.category, elemento.img, elemento.name, elemento.price);
                starwars.appendChild(nuevoStar);
                break;
            case "consolas":
                const nuevoConsolas = crearNuevoProducto(elemento.category, elemento.img, elemento.name, elemento.price);
                consolas.appendChild(nuevoConsolas);
                break;
            case "diversos":
                const nuevoDiversos = crearNuevoProducto(elemento.category, elemento.img, elemento.name, elemento.price);
                diversos.appendChild(nuevoDiversos);
                break;
            
        }
    });
}
