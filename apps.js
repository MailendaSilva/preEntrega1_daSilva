//aplicar una funcion
function pedidoListo() {
    alert("Tu pedido está listo! Si queres agregar algo podes hacerlo")
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
let pedido;
alert ("Por hoy solo tenemos disponible combo 1 y 2 pero al 50%!!")
pedido = prompt('Elija que va a comer hoy: 1: Hamburguesa simple con papas y gaseosa \n 2: Hamburguesa doble con papas y gaseosa \n 3: Hamburguesa triple con papas y gaseosa \n 4: Nuggets con papas y gaseosa \n 5: Menu infantil');
while (pedido !== "1" && pedido !== "2") {
    pedido = prompt ("Solo tenemos 1 y 2. Por favor elegi entre esos")
    switch (pedido) {
        case "1":
            console.log("pediste combo 1, ya está en preparación!");
            break;
        case "2":
            console.log("pediste combo 2, ya está en preparación!");
            break;
        case "3":
            console.log("pediste combo 3, no está disponible");
            break;
        case "4":
            console.log("pediste combo 4, no está disponible");
            break;
        default:
            console.log("Disculpanos! El pedido que ingresaste no está disponible");
            break;
    }
}
pedidoListo();

let bebidasAlcholicas = prompt ("Si sos mayor de 18 podes agregar bebidas, deseas hacerlo?")
if (bebidasAlcholicas == "Si")
{
    bebidasAlcholicas = prompt ("Seleccioná que deseas agregar: \n 1: Cerveza 1 litro \n 2: Cerveza en lata")
    switch (bebidasAlcholicas) {
        case "1":
            console.log("Agregaste cerveza de un litro");
            break;
        case "2":
            console.log("Agregaste cerveza en lata");
            break;    
}
alert ("sumaste a tu pedido una bebida" )
} else
{
    pedidoListo();
}


