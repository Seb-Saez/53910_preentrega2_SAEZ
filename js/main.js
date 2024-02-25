let vestidos = [
    { nombre: "riu", color: "blanco", talle: "l", precio: 3800 },
  { nombre: "brooklyn", color: "negro", talle: "m", precio: 3500 },
  { nombre: "said", color: "rojo", talle: "m", precio: 3800 },
  { nombre: "rayo", color: "rojo", talle: "m", precio: 3500 },
  { nombre: "arezzo", color: "negro", talle: "xl", precio: 3500 },
  { nombre: "margarita", color: "celeste", talle: "l", precio: 3500 },
  { nombre: "gema", color: "negro", talle: "m", precio: 3800 },
  { nombre: "radiohead", color: "rojo", talle: "l", precio: 3500 },
  { nombre: "luca", color: "gris", talle: "s", precio: 3500 },
  { nombre: "galileo", color: "gris", talle: "m", precio: 3800 },
  { nombre: "huali", color: "verde", talle: "m", precio: 3500 },
  { nombre: "cameron", color: "negro", talle: "m", precio: 3500 },
  { nombre: "benito", color: "rosa", talle: "s", precio: 3800 },
  { nombre: "plate", color: "plata", talle: "s", precio: 3500 },
  { nombre: "valley", color: "negro", talle: "s", precio: 3500 },
  { nombre: "curie", color: "gris", talle: "l", precio: 3800 },
  { nombre: "marge", color: "naranja", talle: "m", precio: 3500 },
  { nombre: "may", color: "celeste", talle: "m", precio: 3800 },
  { nombre: "harrison", color: "plata", talle: "l", precio: 3500 },
  { nombre: "uxmal", color: "azul", talle: "s", precio: 3500},
  { nombre: "bayron", color: "azul", talle: "xl", precio: 3500},
  { nombre: "tarola", color: "amarillo", talle: "xl", precio: 3500},
  { nombre: "lamborgoti", color: "naranja", talle: "xl", precio: 3500},
];



let mensaje1 = "Estos son nuestros vestidos:\n";

vestidos.forEach(el => {
    mensaje1 += `Nombre: ${el.nombre}, Color: ${el.color}, Talle: ${el.talle}, Precio: ${el.precio}\n`;
})

alert(mensaje1);

// Filtrar vestidos por talle

let talle_seleccionado = prompt("Seleccione un solo talle entre s, m, l o xl");
let vestidos_talles = vestidos.filter(vestido => vestido.talle === talle_seleccionado);


// Mostrar el nuevo array con los vestidos del talle seleccionado
let mensaje2 = "Vestidos en el talle seleccionado:\n(en el siguiente paso necesita el nombre de 1 o mas vestidos)\n";

vestidos_talles.forEach(vestido => {
  mensaje2 += `Nombre: ${vestido.nombre}, Color: ${vestido.color}, Talle: ${vestido.talle}, Precio: ${vestido.precio}\n`;
});

console.log("Vestidos filtrados por talle:" , vestidos_talles);

alert(mensaje2);

// Filtrar a vestidos seleccionados por el nombre para alquilar

let vestidos_seleccionados = [];

while (true) {
  let nombreVestido = prompt("Ingrese el nombre del vestido que desea agregar al carrito (o escriba 'x' para finalizar):\n");

  // Verificar si el usuario quiere salir
  if (nombreVestido.toLowerCase() === 'x') {
    break;
  }

  // Buscar el vestido por nombre en el array de talles y sumarlo al array de alquiler
  let vestidoEncontrado = vestidos_talles.find(vestido => vestido.nombre === nombreVestido);

  if (vestidoEncontrado) {
    // Agregar el vestido al array de alquiler
    vestidos_seleccionados.push(vestidoEncontrado);
    alert("Vestido agregado:", vestidoEncontrado);
  } else {
    alert("No se encontró ningún vestido con ese nombre.");
  }
}

// Mostrar el array de vestidos seleccionados para alquiler
console.log("Usted ha reservado los siguientes vestidos:", vestidos_seleccionados);



let total_alquiler = vestidos_seleccionados.reduce((total, vestido) => total + vestido.precio , 0);



console.log("El total de su alquier es de:" , total_alquiler);



