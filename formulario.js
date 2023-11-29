// se cambian todas las variables declaradas con var por let. Var ya no es recomendable usarlo
// Se agregaron ; en más de 15 lineas para que javascript entendiera cuando termina una instruccion

let formulario = document.querySelector(".formulario") // no existe ningun elemento con id form, solo la etiqueta form con la clase .formulario. Se cambia #form


// crean todas las las variables y se invoca la funcion agregarInvitado usando de argumentos lo escrito en el formulario
formulario.onsubmit = function (event) { // se cambia el nombre del parametro e por event para no afectar el nombre de e 

  // se agrega un prevent deafult para que no se refresque la pagina despues de hacer el submit y que se quede el texto 
  event.preventDefault();

  // se crean las variables n,e y na y se le asigna el objeto de cada input con sus respectivos atributos y valores
  let n = formulario.elements[0];
  console.log(typeof(n));
  let e = formulario.elements[1]; 
  let na = formulario.elements[2];

  // se le asignan los valores (lo que introdujo el usuario) de los objetos n,e y na a las variables nombre,edad y nacionalidad
  let nombre = n.value;
  let edad = e.value;
  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  // se verifican que  las variables nombre y edad cumplan los criterios
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error");
  }

  // de no haber ningun error se invoca la funcion agregar Invitado con las variable previamente obtenidas de edad nombre y nacionalidad
  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad); // llama a la function agrerar invitado pasandole como argumentos las letibales creadas del formulario submit
  }
}

/* el siguiente codigo se repite a partir de la linea 98:

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);
*/

// funcion para mostrar en el DOM lo introducido en el formulario por el usuario 
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }


  // obtiene la referencia de una lista creada con id lista-de-invitados del html 
  let lista = document.getElementById("lista-de-invitados");

  // crea un nuevo item para una lista
  let elementoLista = document.createElement("li"); 
  
  // se añade la clase "elemento-lista" a la variable elementoLista 
  elementoLista.classList.add("elemento-lista"); 
  // se cambia added por add

  // se agrega a la lista ul del HTML el elementoLista
  lista.appendChild(elementoLista);

  // el siguiente codigo se puede realizar con la funcion crearElemento: 

  /*
  let spanNombre = document.createElement("span");
  let inputNombre = document.createElement("input");
  let espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
  */

  // funcion para crear elementos (etiquetas de cierre o de autocierre) y colocar dentro de ellas el texto deseado
  // asimismo, dichas etiquetas son agregadas a la variable elementoLista
  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span");
    let inputNombre = document.createElement("input");
    let espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // se crean los elementos a mostrar en el DOM
  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // se crea un boton para eliminar toda la etiqueta <li>
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  let corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  }
}