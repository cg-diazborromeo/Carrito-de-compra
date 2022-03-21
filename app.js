const productos = [
    {
      nombre: "harina",
      precio: 50,
    },
    {
      nombre: "galletitas",
      precio: 100,
    },
    {
      nombre: "pollo",
      precio: 150,
    },
    {
      nombre: "leche",
      precio: 400,
    },
    {
      nombre: "gaseosa",
      precio: 500,
    },
  ],
  carrito = [];

//se pregunta al cleiente si quiere comprar
//con el while le exigimos al cliente que eliga entre si o no.
let seleccion = prompt("hola desea comprar algo si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresa una de las opciones, si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

//cuando la respuesta es si, con el metodo map le rrecorremos todos los prductos y precios del array
//si es no, lo despedimos y se corta el programa.
if (seleccion == "si") {
  alert("a continuación lista de productos");
  let todosLosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todosLosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por venir al supermecado! hasta luego!");
}

//cuando la respuesta sea distenta a no se le pide ingresar productos contemplando la opciones del array productos
//le pedimos productos y cuantas unidades
// con el metodo push se le agrega al array vacio carrito las unidades y productos elegidos.

while (seleccion != "no") {
  let producto = prompt("agrega un producto a tu carrito!");
  let precio = 0;

  if (
    producto == "harina" ||
    producto == "galletitas" ||
    producto == "pollo" ||
    producto == "leche" ||
    producto == "gaseosa"

  ) {
    //para hacer que el precio coinsida con el del producto se usa un case
      switch (producto) {
        case "harina":
          precio = 50;
          break;
        case "galletitas":
          precio = 100;
          break;
        case "pollo":
          precio = 150;
          break;
        case "leche":
          precio = 400;
          break;
        case "gaseosa":
          precio = 500;
          break;
        default:
          break;
      }
    let unidades = parseInt(
      prompt("cuantas unidades de ese producto queres llevar")
    );

    carrito.push({ producto, unidades, precio });
    console.log(carrito);

  } else {
    alert("no tenemos ese prodcto");
  }

  //estos es por si el uduario eligue un porducto que no esta disponible, pasar por el elsediciendo que no se cuenta con ese prodcuto
  //le preguntar si quiere seguir comprando y arancar de nuevo el ciclo
  seleccion = prompt("quiere seguir comprando si o no");

  //si el usuario elege la opcion de no seguir comprando
  //le rrecorremos el array con forEach que anteriormente estaba vacio y ahora tiene sus productos con el metodo map
  //luego en consola le mostramos el casa producto que eligio, cuantas unidades y el total a pagar por ese producto
  while (seleccion == "no") {
    alert("gracias por la compra chau");

    carrito.forEach((carritoFinal) => {
      console.log(
        `"producto:" ${carritoFinal.producto}, "unidades:" ${
          carritoFinal.unidades
        }, "total a pagar por producto:" ${carritoFinal.unidades * carritoFinal.precio}`
      );
    });
    break;
  }
}

//al final con el metodo reduce se calcula el total de todos los productos con sus unidades!
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es de:  ${total}`)
