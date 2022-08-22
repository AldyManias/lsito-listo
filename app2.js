// //practica de condicional if
// let cuota1 = 20000
// let disponible = 30000
// let posiblePago= efectivo + debito
// let debito = false
// if (disponible >= cuota1) {
//     console.log("has pagado en su totalidad de la cuota")
// } else if(debito) {
//     console.log ("peudes pagar con debito ingresando los datos de su tarjeta")
// } else{
//     console.log("no tenemos otro medio posible de pago")
// }
//posible switch para evaluar mas opacion en logar de hacer tantos else if else if
// switch (metododePago) {
//     case efectivo:
//         console.log ("si pagas en efectivo dirigite a un rapipago/pagofacil con el siguiente codigo" + 2354788941);
//         break;

//     case debito:
//         console.log("como pagas en debito ingresara el numero de la tarjeta cuando se lo solicitemos");

//     default:
//         console.log("no tenemos otro metodo de pago");
//         break;
// }
let numero1= parseInt(prompt("ingrese un numero"));
let numero2= parseInt(prompt("ingrese otro numero"));
let operacion = prompt ("que operacion matematica vas a realizar");
console.log (operacion)
switch (operacion) {
    case "suma":
        console.log ( numero1 + numero2);
        break;

    case "resta":
        console.log ( numero1 - numero2);
        break;

    case "multiplicacion":
        console.log ( numero1 * numero2);
        break;

    case "division":
        console.log ( numero1 / numero2);
        break;

    default:
    console.log("no existe otro tipo de operacion matematica");
    break;
    
}




