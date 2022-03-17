// Un hash que mapea precio y producto. 
// Un hash abierto que mapea el producto y el precio que va agregando, para al final mostrarlo.
// Un array vacio para llenar con la suma del valor de la compra a medida que agrega productos.

const productos = new Map (
  "harina", 50,
  "galletitas", 100,
  "pollo", 150,
  "leche", 400,
  "gaseosa", 500
)

const carrito = new Map ();
const carritoSum = [];


//se pregunta al cliente si quiere comprar
//con el while le exigimos al cliente que elija entre si o no.
let seleccion = prompt("hola desea comprar algo si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa una de las opciones, si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

//cuando la respuesta es si, con el metodo for rrecorremos en bucle todos los prductos y precios del array, que imprime con el console.log
// VER SI ESTA BIEN ESCRITO EL MENSAJE EN PANTALLA (CON EL LOG). NO SE BIEN LA SINTAXIS!
//si es no, lo despedimos y se corta el programa.
if(seleccion == "si"){
  alert("a continuación lista de productos")
  for (let [prod, precio] of productos) {
    console.log(`${prod} - ${valor} pesos la unidad.`);
  }
}else if (seleccion == "no") {
  alert("gracias por venir al supermecado! hasta luego!")
}

//cuando la respuesta sea distenta a no se le pide ingresar productos contemplando la opciones del Map productos
//le pedimos productos y cuantas unidades
// con el metodo set se le agrega al Map vacio carrito, las unidades y productos elegidos.
// con el segundo método push se le agrega al array vacio carritoSum el valor del precio * unidades seleccionadas.
//VER LO QUE PONE EL CONSOLE LOG, NO SE BIEN LA SINTAXIS ESA.

while(seleccion != "no") {
    let prod = prompt("agrega un producto a tu carrito!")
    if (prod == "harina" || prod == "galletitas" || prod == "pollo" || prod == "leche" || prod == "gaseosa"){
      let unidades = parseInt(prompt("cuantas unidades de ese producto queres llevar"));
      carrito.set("prod", unidades)
      carritoSum.push(productos[prod] * unidades)
      console.log(carrito)
    }else{
      alert("no tenemos ese prodcto")
    }
    //estos es por si el uduario elije un porducto que no esta disponible, pasar por el else diciendo que no se cuenta con ese prodcuto
    //le preguntar si quiere seguir comprando y arancar de nuevo el ciclo
    seleccion = prompt("quiere seguir comprando si o no");

    //si el usuario elege la opcion de no seguir comprando
    //le recorremos el map que anteriormente estaba vacio y ahora tiene sus productos y las unidades, lo mostramos con un console.log 
    //luego en un alert le mostramos el precio final (obtenido en la funcion con el bucle For).
    while(seleccion == "no"){
    alert("gracias por la compra chau")

    for (let [product, unid] of carrito) {
      console.log(`${product} - ${unid} unidades.`);
    }
    
    function SumaFinal(carritoSum) {
      let canasta = 0;
      for (let i of carritoSum) {
        canasta = canasta + i;
      }
      return canasta
    }

    alert(`Monto final a abonar: ${SumaFinal}.`);
    break
  }
  }

  //que faltaría?
  //ver como hacer para calcular el precio total de los productos que eligió - CREO QUE ESTÁ, VER BIEN LA SINTAXIS!