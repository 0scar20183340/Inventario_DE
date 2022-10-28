import Inventario from "./inventario.js";
import Producto from "./producto.js";

const bAdd = document.getElementById('bAdd');
const bClean = document.getElementById('bClean');
const movimientos = document.getElementById('movimientos');
const menuAgregar = document.getElementById('menuAgregar');
const menuEliminar = document.getElementById('menuEliminar');
const menuBuscar = document.getElementById('menuBuscar');
const irEliminar = document.getElementById('irEliminar');
const irBuscar = document.getElementById('irBuscar');
const irAgregar = document.getElementById('irAgregar');
const menu = document.getElementById('menu');
const message = document.getElementById('message');
const alerta = document.getElementById('alerta');
const delBtn = document.getElementById('delBtn');
const inpDel = document.getElementById('inpDel');
const serBtn = document.getElementById('serBtn');
const inpSer = document.getElementById('inpSer');

const inputsAdd = {
  codigoP: document.getElementById('codigo'),
  nombreP: document.getElementById('nombre'),
  cantidadP: document.getElementById('cantidad'),
  costoP: document.getElementById('costo'),
}
const contenedorBuscado = {
  padre: document.getElementById('buscadoContent'),
  body: document.getElementById('bus'),
  codigo: document.getElementById('codigoB'),
  nombre: document.getElementById('nombreB'),
  cantidad: document.getElementById('cantB'),
  costo: document.getElementById('costoB')
}

// menuAgregar.remove();
menuEliminar.remove();
menuBuscar.remove();
alerta.remove();
contenedorBuscado.body.remove();

let pEliminado;

serBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(inventario.odatsil());
  console.log(inventario.listado());
  contenedorBuscado.body.remove();
  const p = inventario.buscar(Number(inpSer.value));
  if (!p) return;
  contenedorBuscado.codigo.innerHTML = p.codigo;
  contenedorBuscado.nombre.innerHTML = p.nombre;
  contenedorBuscado.costo.innerHTML = p.costo;
  contenedorBuscado.cantidad.innerHTML = p.cantidad;
  contenedorBuscado.padre.append(contenedorBuscado.body);
})

delBtn.addEventListener('click', event => {
  event.preventDefault();
  pEliminado = inventario.buscar(Number(inpDel.value));
  if (!pEliminado) return;
  inventario.eliminar(pEliminado.codigo);
  showDelMsg();
  addToMovments('removido', pEliminado);
})

irEliminar.addEventListener('click', event => {
  event.preventDefault();

  menuAgregar.remove();
  menuBuscar.remove();
  menu.append(menuEliminar);
})

irAgregar.addEventListener('click', event => {
  event.preventDefault();

  menuEliminar.remove();
  menuBuscar.remove();
  menu.append(menuAgregar);
})

irBuscar.addEventListener('click', event => {
  event.preventDefault();

  menuAgregar.remove();
  menuEliminar.remove();
  menu.append(menuBuscar);
})

function addToMovments(movimiento, producto) {
  const row = document.createElement('div');
  const itmMovimiento = document.createElement('div');
  const itmCodigo = document.createElement('div');
  const itmNombre = document.createElement('div');
  const itmCantidad = document.createElement('div');
  const itmCosto = document.createElement('div');
  row.classList.add('row');
  itmMovimiento.classList.add('col-3');
  itmCodigo.classList.add('col-2');
  itmNombre.classList.add('col-2');
  itmCantidad.classList.add('col-2');
  itmCosto.classList.add('col-2');

  itmMovimiento.innerHTML = movimiento;
  itmCodigo.innerHTML = producto.codigo;
  itmNombre.innerHTML = producto.nombre;
  itmCantidad.innerHTML = producto.cantidad;
  itmCosto.innerHTML = producto.costo;

  row.append(itmMovimiento, itmCodigo, itmNombre, itmCantidad, itmCosto);
  movimientos.append(row);
}

function showDelMsg() {
  message.append(alerta);
  setTimeout(() => {
    alerta.remove();
  }, 3000)
}

bAdd.addEventListener('click', event => {
  event.preventDefault();
  if(inventario.buscar(Number(inputsAdd.codigoP.value))){
    alert("Producto en existencia");
    return;
  }

  const p = new Producto(inputsAdd.codigoP.value, inputsAdd.nombreP.value, inputsAdd.cantidadP.value, inputsAdd.costoP.value);
  inventario.agreagar(p);
  addToMovments('añadido', p);
});

bClean.addEventListener('click', event => {
  event.preventDefault();

  inputsAdd.nombreP.value = '';
  inputsAdd.cantidadP.value = '';
  inputsAdd.costoP.value = '';
})

const inventario = new Inventario();
const producto = new Producto(1, "caca", 2, 30);
const producto2 = new Producto(2, "popo", 2, 30);

inventario.agreagar(producto);
inventario.agreagar(producto2);
console.log(inventario.odatsil());
console.log(inventario.listado());

