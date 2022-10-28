
export default class Inventario {
  constructor(){
    this.first = null;
    this.ultimo = null;
  }

  
  agregar(producto) {
    if (!this.first) {
      this.first = producto;
      this.ultimo = producto;
  } else {
      this.ultimo.next = producto;
      producto.ant = this.ultimo;
      this.ultimo = producto;
  }
  }

 

  buscar(codigo){
    let aux = this.first;

    while (aux != null) {
        if (aux.codigo == codigo) {
            return aux;
        } else {
            aux = aux.next;
        }
    }
    return false;
  }


  eliminar(codigo){
    let aux = this.first;

    while (aux != null) {
        if (aux.codigo == codigo) {
            if (aux.ant) {
                aux.ant.next = aux.next;
            } else {
                this.first = aux.next;
            }
            if (aux.next) {
                aux.next.ant = aux.ant;
            } else {
                this.ultimo = aux.ant;
            }
            return true;
        } else {
            aux = aux.next;
        }
    }
    return false;

  }



  listado(){
    let res="";
    let temp=this.first;
    while(temp!=null){
        res+=temp.palabra + " ";
        temp=temp.next;
    }
    return res;
  }

  ListadoInv(){
    let temp = this.first;
    while (temp) {
        let aux = temp.next;
        temp.next = temp.ant;
        temp.ant = aux;
        temp = temp.ant;
    }
    let aux = this.first;
    this.first = this.ultimo;
    this.ultimo = aux;
 
  }

 


objetoTexto(producto ={}){
  return  `{codigo: ${producto.codigo}, nombre: ${producto.nombre}, cantidad: ${producto.cantidad}, costo: ${producto.costo}}`;
}
}
