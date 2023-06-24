//Hacer una funcion que reciba como parametros una pila y un numero. La funcion debe retornar tantos elementos como diga el numero (segundo parametro).

class frutas {
    constructor(element) {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

let Frutas=[]
//ultima edición
/*const Frutas = ["manzana", "cebolla","apio","naranja", "papaya", "sandia", "melon"];*/
/*
function ListaFruta () {
    for (i = 0; i<Frutas.length; i++){
       let n = [i,i++]
    }
    ListaFruta = Frutas[n]
}*/


 Frutas.push("manzana");
 Frutas.push("cebolla");
 Frutas.push("apio");
 Frutas.push("naranja");
 Frutas.push("papaya");
 Frutas.push("sandia");
 Frutas.push("melon");



function listaFruta(Frutas, cantidad){
    let Frutas1 = []
        for (let i =0; i < cantidad ; i++){
        if (Frutas.length>0) {
            Frutas1.push(Frutas.pop())
        
        }
        
    }
  return Frutas1  
} 

let Frutas1 = listaFruta(Frutas,3)
console.log (Frutas1)

/*function ListaFruta () {
    for (i = 0; i<Frutas.length; i++){
       let n = [i,i++]
    }
    ListaFruta = Frutas[n]
}*/

console.log (Frutas)


 //let Frutas1 = []

// const ListaFrutas = function (n, Frutas) {
//     for (let i = 0; i < n; i++) {
//         Frutas1.push(Frutas.pop(n))
//     }
//     return Frutas;
// }
// console.log(Frutas,4)

//Primer intento
/*let Frutas1 = []
for (i=0;i<3;i++){
    Frutas1.push(Frutas.pop())
}


console.log(Frutas)
console.log(Frutas1)
*/

/*function ListaFrutal([Frutas], elemento) {
    const j = Frutas.length
    for (let i = 0; i < j; i++) {
        if (Frutas[j]=== elemento)
        return Frutas1

       // Frutas1.push(Frutas.pop());
    }
}

console.log((ListaFrutal,3))*/


/*
for(i = 0; i < 3; i++){

    Frutas1.push(Frutas.pop())
    }


console.log(Frutas)
console.log(Frutas1)
*/

//Escribe una funcion "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, y dos valores tambien de tipo Number "nuevo" y "viejo", de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (solo la primera vez), y hara pop de los elementos más nuevos.
//Entrada: reemplazar ([3,2,3,4,6,8,1,2,5,5],7,2)
//Salida: [3,2,3,4,6,8,1,7]

function reemplazar(pila, nuevo, viejo) {
    var encontrado = false;
    var pilaTemporal = [];
  
    while (pila.length > 0) {
      var elemento = pila.pop();
  
      if (elemento === viejo && !encontrado) {
        pilaTemporal.push(nuevo);
        encontrado = true;
      } else {
        pilaTemporal.push(elemento);
      }
    }
  
    // Revertir la pila temporal para obtener el orden correcto
    pilaTemporal.reverse();
  return pilaTemporal

  }
  
 
  var pila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
  var nuevaPila = reemplazar(pila, 7, 2);
  console.log(nuevaPila); 
  
  


//Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
//Recorrido Pueblo origen -> pueblo1 -> pueblo2 -> destino
//Regreso destino -> pueblo2 -> pueblo1 -> pueblo origen

function mostrarRecorrido(pueblos) {
    var recorridoIda = pueblos.join(' → ');
    var recorridoVuelta = pueblos.slice().reverse().join(' → ');
    console.log('Recorrido: ' + recorridoIda);
    console.log('Regreso: ' + recorridoVuelta);
  }
  

  var pueblos = ['Pueblo Origen', 'pueblo 1', 'pueblo 2', 'destino'];
  mostrarRecorrido(pueblos);
  

//Un almacen tiene capacidad para apilar "n" contenedores. Cada contenedor tiene un numero de identificacion. Cuando se desea retirar un contenedor especifico, deben retirarse primero los contenedores que están encima de el y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.

class Almacen {
    constructor() {
      this.pila1 = [];
      this.pila2 = [];
    }
  
    apilar(contenedor) {
      this.pila1.push(contenedor);
    }
  
    retirar(contenedor) {
      while (this.pila1.length > 0) {
        var contenedorActual = this.pila1.pop();
        if (contenedorActual === contenedor) {
          break;
        }
        this.pila2.push(contenedorActual);
      }
  
      while (this.pila2.length > 0) {
        this.pila1.push(this.pila2.pop());
      }
    }
  }
  
  
  var almacen = new Almacen();
  
  almacen.apilar("Contenedor 1");
  almacen.apilar("Contenedor 2");
  almacen.apilar("Contenedor 3");
  almacen.apilar("Contenedor 4");
  almacen.apilar("Contenedor 5");
  
  console.log("Pila antes del retiro:", almacen.pila1);
  
  almacen.retirar("Contenedor 3");
  
  console.log("Pila después del retiro:", almacen.pila1);
  