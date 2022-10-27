const pi = 3.14;
const salir = 0;
const cuadrado = 1;
const circulo = 2;
const triangulo = 3;
const despedida = "Muchas gracias por usar la calculadora de superficies";

let opcion = 0;

//Ingreso de opcion
do {
     opcion =  prompt("Elija que superficie quiere calcular ( 1-cuadrado/rectangulo || 2-Circulo || 3-triangulo || 0-Salir");

    if (opcion >3 || opcion < 0 || isNaN(opcion)){
        alert("por favor ingrese un valor correcto. El valor que acaba de ingresar fue: " + opcion);
    }

} while (opcion > 3 || opcion < 0 || isNaN(opcion) );
    

//evalua segun lo seleccionado
switch(parseInt(opcion)){

    case salir:

        alert(despedida);
        break;

    case cuadrado:
        let lado1 = parseInt(prompt("indique el lado 1",0));
        let lado2 = parseInt(prompt("indique el lado 2",0));
        
        alert("La superficie del cuadrado es: " + supCuadrado(lado1,lado2));
        alert(despedida );
        break;
    
    case circulo:
        let radio = parseInt(prompt("indique el radio",0));
        
        alert("La superficie del radio es: " + supCirculo(radio));
        alert(despedida );
        break;

    case triangulo:
        let base = parseInt(prompt("indique la base",0));
        let altura = parseInt(prompt("indique la altura",0));
        
        alert("La superficie del triangulo es: " + supTriangulo(base,altura));
        alert(despedida );
        break;

    default:
        alert(despedida);
        break;
}

//***         FUNCIONES       ***/

function supCuadrado(lado1,lado2){    
    return lado1 * lado2;
}

function supCirculo(radio){    
    return pi * radio**2;
}

function supTriangulo(base,altura){
    
    return (supCuadrado(base,altura) / 2);
}

