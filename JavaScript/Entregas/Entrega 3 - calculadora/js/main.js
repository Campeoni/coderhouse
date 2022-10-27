// Elementos del HTML
const visor             = document.getElementById("visor");
const visorAnt          = document.getElementById("visorAnt");

const btnBorMemo        = document.getElementById("btnBorMemo"); 
const btnMuestra        = document.getElementById("btnMuestra");
const btnDivide         = document.getElementById("btnDivide");
const btnSiete          = document.getElementById("btnSiete");
const btnOcho           = document.getElementById("btnOcho");
const btnNueve          = document.getElementById("btnNueve");
const btnMultiplica     = document.getElementById("btnMultiplica");
const btnCuatro         = document.getElementById("btnCuatro");
const btnCinco          = document.getElementById("btnCinco");
const btnSeis           = document.getElementById("btnSeis");
const btnResta          = document.getElementById("btnResta");
const btnUno            = document.getElementById("btnUno");
const btnDos            = document.getElementById("btnDos");
const btnTres           = document.getElementById("btnTres");
const btnSuma           = document.getElementById("btnSuma");
const btnBorraTodo      = document.getElementById("btnBorraTodo");
const btnCero           = document.getElementById("btnCero");
const btnPunto          = document.getElementById("btnPunto");
const btnIgual          = document.getElementById("btnIgual");
const memoriPlace       = document.getElementById("memoriPlace");
const memoriBtnCanc     = document.getElementById("memoriBtnCanc");
const memoriBtnAccept   = document.getElementById("memoriBtnAccept");
const calculatorView    = document.getElementById("calculatorView");
const tableView         = document.getElementById("tableView");

// Constantes
const operadores    = ['+','-','*','/'] ;
const teclasValidas    = ['0','1','2','3','4','5','6','7','8','9','.','-','*','/','+','Enter','Backspace','Escape'] ;

// Variables
let numeroAOperar = "";
let numeroAux = "";
let banderaUsoPunto = false;

memoriPlace.get
document.addEventListener("keydown", (event)=>{     
    if (teclasValidas.includes(event.key)){
        switch (event.key) {
            case '-': {
                subtractionKey();
                break;
            }
            case '+': {
                additionKey();
                break;
            }
            case '*': {
                multiplicationKey();
                break;
            }
            case '/': {
                divisionKey();
                break;
            }
            case '.': {
                pointKey();
                break;
            }
            case 'Enter': {
                equalKey ();
                break;
            }
            case 'Backspace':
            case 'Escape':{
                ackey();
                break;
            }
            default:{
                concatena(event.key);
            }
        } 
    }
});

btnNueve.addEventListener("click", ()=>{
    concatena('9');
});  

btnOcho.addEventListener("click", ()=>{
    concatena('8');
    
});         

btnSiete.addEventListener("click", ()=>{
    concatena('7');
});        

btnSeis .addEventListener("click", ()=>{
    concatena('6');
});

btnCinco.addEventListener("click", ()=>{
    concatena('5');
});

btnCuatro.addEventListener("click", ()=>{
    concatena('4');
});

btnTres.addEventListener("click", ()=>{
    concatena('3');
});

btnDos.addEventListener("click", ()=>{
    concatena('2');
});

btnUno.addEventListener("click", ()=>{
    concatena('1');
});

btnCero.addEventListener("click", ()=>{
    concatena('0');
});

btnBorMemo.addEventListener("click", ()=>{
    localStorage.clear();
    visorAnt.innerText ='0';
    visor.innerText = '0'; 
    banderaUsoPunto = false;
});       

btnMuestra.addEventListener("click", ()=>{
    memoriPlace.classList.remove("displayHiddent");
    calculatorView.classList.add("displayHiddent");
    let contenido = "";    
    const f =localStorage.length;

    for (let i = 1 ; i<= f; i++){
        
        contenido +=
        `<tr>
            <th scope="row">${i}</th>
            <td>  ${localStorage[i]} </td>
        </tr>`;
    };

    tableView.innerHTML = `
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Valor</th>
        </tr>
    </thead>
    <tbody> 
        ${contenido}
    </tbody> `; 

    for (let i = 1 ; i<= f; i++){
        tableView.rows[i].addEventListener("click",()=>{
            visor.innerText = tableView.rows[i].cells[1].innerText;  

            for(let i2 = 1; i2<=f; i2++){
                tableView.rows[i2].classList.remove("selection");
            };

            tableView.rows[i].classList.add("selection");

        });
    };
});   


memoriBtnCanc.addEventListener("click",()=>{
    memoriPlace.classList.add("displayHiddent");
    calculatorView.classList.remove("displayHiddent");
    visor.innerText = 0;
    banderaUsoPunto = false;
});

memoriBtnAccept.addEventListener("click",()=>{
memoriPlace.classList.add("displayHiddent");
calculatorView.classList.remove("displayHiddent");

});

btnBorraTodo.addEventListener("click", ()=>{
    ackey();
});

btnDivide.addEventListener("click", ()=>{
    divisionKey();
});       

btnMultiplica.addEventListener("click", ()=>{
    multiplicationKey();    
});

btnResta.addEventListener("click", ()=>{
    subtractionKey();
});

btnSuma.addEventListener("click", ()=>{
    additionKey();
});


btnPunto.addEventListener("click", ()=>{
    pointKey();
});

btnIgual.addEventListener("click", ()=>{
    equalKey();
});

function pointKey(){
    if(!banderaUsoPunto) {
        concatena('.');
        banderaUsoPunto = true;
    };    
};

function ackey(){
    visor.innerText = "0";
    banderaUsoPunto = false;
};

function equalKey (){
    let cantOperadores = hayOperadores(visor.innerText);
    let fixDecimal = 0;

    if (!operadores.includes(visor.innerText[visor.innerText.length-1]) && (visor.innerText.length > 1 && cantOperadores.length > 0)){
        banderaUsoPunto = false;
        
        localStorage.setItem(localStorage.length+1,visor.innerText);             
        fixDecimal =  parseFloat(resultado(localStorage.getItem(localStorage.length))).toFixed(2);

        visorAnt.innerText = (` ${visor.innerText} =  ${fixDecimal.toString()}`);      
        visor.innerText = "0";
    };
};

function divisionKey(){
    if (visor.innerText[0]=== '0' && visor.innerText.length === 1){
        concatena('0/');
    } else {    
        concatena('/');
    };  
    banderaUsoPunto = false;
};

function multiplicationKey(){
    if (visor.innerText[0]=== '0' && visor.innerText.length === 1){
        concatena('0*');
    } else {
        concatena('*');
    };  
    banderaUsoPunto = false;
};
function additionKey(){
    if (visor.innerText[0]=== '0' && visor.innerText.length === 1){
        concatena('0+');
    } else {
        concatena('+');
    };  
    banderaUsoPunto = false;
};

function subtractionKey(){
    if (visor.innerText[0]=== '0' && visor.innerText.length === 1){
        concatena('0-');
    } else {
        concatena('-');
    };  
    banderaUsoPunto = false;
};

function concatena(ingreso){
    
    if (visor.innerText.length > 1){
        if(operadores.includes(ingreso) && operadores.includes(visor.innerText[visor.innerText.length-1])) {
            visor.innerText = visor.innerText.slice(0,-1) + ingreso;
        }else{
            visor.innerText = visor.innerText + ingreso;
        }
    }else {
        visor.innerText[0] === '0' ? visor.innerText = ingreso : visor.innerText = visor.innerText + ingreso;
    }
};

function resultado (estructura){

    estructura = armaEstructura(estructura);
    
    while (hayOperadores(estructura).length>=1){
        let estructuraAux = [];

        switch (true) {
            case estructura.includes("/") || estructura.includes("*"): {                

                let calcAux = "";
                const f = estructura.length;

                for (let i=1; i<f; i=i+2){
                    
                    if (calcAux === "" ){
                        calcAux = estructura[i-1];
                    } 

                    if (estructura[i].includes("-") || estructura[i].includes("+")){

                        estructuraAux.push(calcAux.toString());
                        estructuraAux.push(estructura[i]);
                        calcAux = "";

                    } else {
                        if (estructura[i].includes("*")){
                            calcAux = parseFloat(calcAux) * parseFloat(estructura[i+1]);
                        }else{
                            if (estructura[i+1]=== "0"){
                                return "Infinito";
                            } else {
                                calcAux = parseFloat(calcAux) / parseFloat(estructura[i+1]);
                            }
                        }
                    }                     
                }

                if (calcAux === "" ){
                    estructuraAux.push(estructura[f-1]);
                }else {
                    estructuraAux.push(calcAux.toString());
                }
                break;
            }
            case estructura.includes("+") || estructura.includes("-"): {
                let calcAux = "";
                const f = estructura.length;

                for (let i=1; i<f; i=i+2){
                    
                    if (calcAux === "" ){
                        calcAux = estructura[i-1];
                    } 

                    if (estructura[i].includes("+")){
                        calcAux = parseFloat(calcAux)  + parseFloat(estructura[i+1]);
                    }else{
                        calcAux =  parseFloat(calcAux)  - parseFloat(estructura[i+1]);
                    }
                }              
                
                estructuraAux.push(calcAux.toString());
                break;
            }
        }            
        estructura = estructuraAux;
    }
    
    return estructura;
}

function armaEstructura(estructura){
    const f = estructura.length;
    let acumulador="";
    let nuevaEstructura = [];

    for(let i = 0 ; i < f; i++ ){
        if (operadores.includes(estructura[i])){
            nuevaEstructura.push(acumulador);
            nuevaEstructura.push(estructura[i]);
            acumulador = "";
        }else{
            acumulador = acumulador + estructura[i];
        }
    }
    nuevaEstructura.push(acumulador);

    return nuevaEstructura;
};

function hayOperadores(estructura){
    return Array.from(estructura).filter(element=>{ return operadores.includes(element)});
}


