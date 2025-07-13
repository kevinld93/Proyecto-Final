let botonesAgregar = document.getElementsByClassName("boton-agregar");
let carritoElemento = document.getElementById("carrito");


function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoElemento.innerHTML = '<i class="fas fa-shopping-cart"></i> Carrito (' + carrito.length + ')';
}


document.addEventListener("DOMContentLoaded", actualizarCarrito);



for (let boton of botonesAgregar) {
    boton.addEventListener("click", function () {


      
        let producto = {
            id: this.getAttribute("data-id"),
            nombre: this.getAttribute("data-nombre"),
            precio: this.getAttribute("data-precio")
        };

      
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
     });
}


document.addEventListener("DOMContentLoaded", function () {
    mostrarCarrito();
});

function mostrarCarrito() {
   
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let productList = document.getElementById("product-list");
    productList.innerHTML = ""; 

  
    let totalCount = 0;
    let totalPrice = 0;

    if (carrito.length === 0) {
        productList.innerHTML = "<p class='empty-cart'>No hay productos en el carrito.</p>";
        document.getElementById("total-count").textContent = "0";
        document.getElementById("total-price").textContent = "$0.00";
        document.getElementById("total").style.display = "none";
    } else {
   
        carrito.forEach((producto, index) => {
            let productHTML = `
                <div class="producto">
                    <h5>${producto.nombre}</h5>
                    <p>Precio: $${producto.precio}</p>
                    <p>ID: ${producto.id}</p>
                    <button class="eliminar-producto" data-index="${index}">Eliminar</button>
                    <hr>
                </div>
            `;
            productList.innerHTML += productHTML;
            totalCount++;
            totalPrice += parseFloat(producto.precio);
        });

    document.getElementById("total-count").textContent = totalCount;
    document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
    document.getElementById("total").style.display = "block";

 let botonesEliminar = document.querySelectorAll(".eliminar-producto");
 botonesEliminar.forEach(boton => {
            boton.addEventListener("click", function () {
                let index = parseInt(this.getAttribute("data-index"));
                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                carrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                mostrarCarrito();
                actualizarCarrito();
            });
        });
    }
}

function clearAllProducts() {
    localStorage.removeItem("carrito");
    totalPrice = 0
    totalCount = 0
    document.getElementById("total-count").textContent = totalCount;
    document.getElementById("total-price").textContent = "$" + totalPrice
    document.getElementById("total").style.display = "none"
    actualizarCarrito()
    mostrarCarrito(); 
}