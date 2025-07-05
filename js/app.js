//registro
alert("Registrate para ver los productos de maquillaje")
let nombre = prompt("Ingresa tu nombre");
console.log("nombre ingresado:", nombre);

//Array de productos como objetos
const productos = [
  { nombre: "Rimel", precio: 5600, tipo: "waterproof"},
  { nombre: "Rubor", precio: 3200, tipo: "liquido"},
  { nombre: "Broncer", precio: 8600, tipo:"en polvo"},
  { nombre: "Iluminador", precio: 4200, tipo: "en barra"},
  { nombre: "Labial", precio: 5100, tipo: "brillo"},
  { nombre: "Delineador", precio: 6000, tipo: "en gel" }
];

function mostrarProductos() {
  console.log("Productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
    console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
  }
}
mostrarProductos();

function elegirProducto() {
  let eleccion = prompt(
    "Elige un producto:\n1. Rimel\n2. Rubor\n3. Broncer\n4. Iluminador\n5. Labial\n6. Delineador"
  );
  let indice = parseInt(eleccion) - 1;

  //validacion
  if (indice >= 0 && indice < productos.length) {
    return indice;
  } else {
    alert("Opción inválida. Intentá de nuevo.");
    return elegirProducto(); // vuelve a pedir
  }
}

function calcularTotal(indiceProducto) {
  let cantidad = prompt("¿Cuántas unidades querés comprar?");
  cantidad = parseInt(cantidad);

  // Validacion
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida. Intentá de nuevo.");
    return calcularTotal(indiceProducto);
  }

  // datos del producto elegido
  let productoElegido = productos[indiceProducto];
  let total = productoElegido.precio * cantidad;
  alert("Elegiste " + cantidad + " x " + productoElegido.nombre + "\nTotal a pagar: $" + total);

  console.log("----- RESUMEN DE COMPRA -----");
  console.log("Producto: " + productoElegido.nombre);
  console.log("Cantidad: " + cantidad);
  console.log("Precio unitario: $" + productoElegido.precio);
  console.log("TOTAL A PAGAR: $" + total);
  console.log("-------------------------------");
}

let productoElegido = elegirProducto();
calcularTotal(productoElegido);

console.log("¡Gracias por tu compra!");
