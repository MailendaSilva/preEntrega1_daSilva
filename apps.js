//aplicar una funcion
function pedidoListo()
{
    alert ("Tu pedido está listo! Si queres agregar algo podes hacerlo")
}

//Crear un algoritmo con un condicional.
let edad = prompt("Ingresá tu edad para ver nuestro menu")
if (edad >= 18) {
    alert ("Podes acceder a las bebidas alcholicas del menu")
}
else {

    alert("Las bebidas alcholicas no podrán ser elegidas por vos. En caso que desees consumir una, llamá a un mayor y refresca la página o dale ACEPTAR y elegi que otra cosa llevar!")
}
//Crear un algoritmo utilizando un ciclo.
alert ("Te pedimos disculpas! hoy solo tenemos el combo 1 pero con un descuento del 50%")
let pedido = prompt("Ingrese su pedido")
while (pedido !== "combo1" && pedido !== "combo 1") {
    pedido = prompt("Disculpanos no tenemos! Ingresa otro pedido");
}
pedidoListo();



