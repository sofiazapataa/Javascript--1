// Variables y arrays
const productos = ["Remera", "Pantalón", "Campera"];
const precios = [5000, 8000, 15000];

// Función 1: mostrar productos
function mostrarProductos() {
  console.log("Productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
    console.log(i + 1 + ". " + productos[i] + " - $" + precios[i]);
  }
}

// Función 2: elegir producto
function elegirProducto() {
  let eleccion = prompt("Elige un producto:\n1. Remera\n2. Pantalón\n3. Campera");
  let indice = parseInt(eleccion) - 1;
  
  if (indice >= 0 && indice < productos.length) {
    return indice;
  } else {
    alert("Opción inválida. Elegí de nuevo.");
    return elegirProducto(); // vuelve a pedir
  }
}

// Función 3: calcular total
function calcularTotal(indiceProducto) {
  let cantidad = prompt("¿Cuántas unidades querés comprar?");
  cantidad = parseInt(cantidad);

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida.");
    return;
  }

  let total = precios[indiceProducto] * cantidad;
  alert("Elegiste " + cantidad + " x " + productos[indiceProducto] + "\nTotal a pagar: $" + total);
  console.log("Compra confirmada. Total: $" + total);
}

// Ejecución del simulador
alert("¡Bienvenido al Simulador de Compras!");
mostrarProductos();

let productoElegido = elegirProducto();
calcularTotal(productoElegido);

console.log("Gracias por tu compra.");
