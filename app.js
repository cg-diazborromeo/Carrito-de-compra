// dos arrays uno tiene los productos, el otro esta vacio(sera llenado con las opciones del cliente)
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
  ];

  const carrito = [];


//se pregunta al cliente si quiere comprar
//con el while le exigimos al cliente que elija entre si o no.
let seleccion = prompt("hola desea comprar algo si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa una de las opciones, si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

//cuando la respuesta es si, con el metodo map le rrecorremos todos los prductos y precios del array
//si es no, lo despedimos y se corta el programa.
if(seleccion == "si"){
  alert("a continuación lista de productos")
  let todosLosProductos = productos.map(producto => producto.nombre + " " + producto.precio +"$");
  alert(todosLosProductos.join(" - "))
}else if (seleccion == "no") {
  alert("gracias por venir al supermecado! hasta luego!")
}

//cuando la respuesta sea distenta a no se le pide ingresar productos contemplando la opciones del array productos
//le pedimos productos y cuantas unidades
// con el metodo push se le agrega al array vacio carrito las unidades y productos elegidos.

while(seleccion != "no") {
    let prod = prompt("agrega un producto a tu carrito!")
    if (prod == "harina" || prod == "galletitas" || prod == "pollo" || prod == "leche" || prod == "gaseosa"){
      let unidades = parseInt(prompt("cuantas unidades de ese producto queres llevar"));
      carrito.push({prod, unidades})
      console.log(carrito)
    }else{
      alert("no tenemos ese prodcto")
    }
    //estos es por si el uduario eligue un porducto que no esta disponible, pasar por el elsediciendo que no se cuenta con ese prodcuto
    //le preguntar si quiere seguir comprando y arancar de nuevo el ciclo
    seleccion = prompt("quiere seguir comprando si o no");

    //si el usuario elege la opcion de no seguir comprando
    //le rrecorremos el array que anteriormente estaba vacio y ahora tiene sus productos con el metodo map
    //luego en un alert le mostramos el carrito y con el metodo join le mostramos sus productos separados con el ( - )
    while(seleccion == "no"){
    alert("gracias por la compra chau")
    let CarritoCliente = carrito.map(prodcliente => prodcliente.prod + " " + prodcliente.unidades + prodcliente.unidades);
    alert(CarritoCliente.join(" - "))
    break
  }
  }

  //que faltaría?
  //ver como hacer para calcular el precio total de los productos que eligió