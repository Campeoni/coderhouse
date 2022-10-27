const pi = 3.14;
const salir = 0;
const cuadrado = 1;
const circulo = 2;
const triangulo = 3;
const buscar = 4;
const despedida = "Muchas gracias por usar asistente";

let opcion = 0;
let selector = 0;
let flagFin = true;

let calculadorObj = {
    lado1: 0,
    lado2: 0,
    radio: 0,   
    cadena: [], 

    supCuadrado(lado1, lado2) {
        return lado1 * lado2;                
    },

    supCirculo(radio){    
        return pi * radio**2;
    },
    
    supTriangulo(base,altura){        
        return (this.supCuadrado(base,altura) / 2);
    }
}

//Ingreso de opcion
do {
     opcion =  prompt("Elija que accion desea realizar ( 1-calcular sup. del cuadrado/rectangulo || 2-calculcar sup. del Circulo || 3-calcular sup. del triangulo || 4-buscar un valor en una cadena || 0-Salir");

    if (opcion >4 || opcion < 0 || isNaN(opcion)){
        alert("por favor ingrese un valor correcto. El valor que acaba de ingresar fue: " + opcion);
    }

} while (opcion > 4 || opcion < 0 || isNaN(opcion) );
    

//evalua segun lo seleccionado
switch(parseInt(opcion)){

    case salir:

        alert(despedida);
        break;

    case cuadrado:
        calculadorObj.lado1= parseInt(prompt("indique el lado 1",0));
        calculadorObj.lado2= parseInt(prompt("indique el lado 2",0));

        alert("La superficie del cuadrado es: " + calculadorObj.supCuadrado(calculadorObj.lado1, calculadorObj.lado2)); 
        alert(despedida );
        break;
    
    case circulo:
        calculadorObj.radio = parseInt(prompt("indique el radio",0));
        
        alert("La superficie del radio es: " + calculadorObj.supCirculo(calculadorObj.radio));
        alert(despedida );
        break;

    case triangulo:
        calculadorObj.lado1 = parseInt(prompt("indique la base",0));
        calculadorObj.lado2 = parseInt(prompt("indique la altura",0));
        
        alert("La superficie del triangulo es: " + calculadorObj.supTriangulo(calculadorObj.lado1,calculadorObj.lado2));
        alert(despedida );
        break;

    case buscar:
        
        selector = parseInt(prompt("debe ingresar numeros del 1 al 100. Indique 0 cuando quiera finalizar"));

        do { 
            
            if (selector === 0){
                flagFin = false;
            } else {
                if (selector > 0 && selector <= 100) {
                    calculadorObj.cadena.push(selector);
                }else{
                    alert("la opcion seleccionada no es correcta. Por favor ingrese un numero del 1 al 100 ó 0 para finalizar");
                }
                selector = parseInt(prompt("indique otro numero",0));
            }     
            
        }while (flagFin)

        selector = parseInt(prompt("indique el numero que se desea buscar del 1 al 100. el asistente devolvera cuales fueros las posiciones y la cantidad de veces que fueron ingresados"));
        flagFin = true;
        do{
            if (selector > 0 && selector <= 100) {
                
                calculadorObj.cadena.forEach((item, index) => {
                    if (item === selector) {
                        alert(`la posicion en la que se ingreso el numero ${selector} , fue la nro ${index+1} `);
                    }                    
                })
                alert(`la cantidad de veces ingresado fue ${calculadorObj.cadena.filter(elemento => elemento === selector).length}`);
                flagFin = false;                
            } else
            {
                alert("el valor seleccionado no es correcto");
                selector = parseInt(prompt("indique un numero",0));
            }
        }while (flagFin)
        
        alert(despedida );
        break;

    default:
        alert(despedida);
        break;
}



