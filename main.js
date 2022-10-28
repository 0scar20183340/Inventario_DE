import Inventario from "./inventario.js";
import Producto from "./producto.js";

const inventario = new Inventario();
const producto = new Producto(1, "caca", 2, 30);
const producto2 = new Producto(2, "popo", 2, 30);

inventario.agreagar(producto);
inventario.agreagar(producto2);
console.log(inventario.odatsil());

console.log(3);

