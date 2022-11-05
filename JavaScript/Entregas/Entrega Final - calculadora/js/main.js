// Elementos del HTML
const visor = document.getElementById("visor");
const visorAnt = document.getElementById("visorAnt");
const tableView = document.getElementById("tableView");

const btnAyuda = document.getElementById("btnAyuda");
const btnBorMemo = document.getElementById("btnBorMemo");
const btnMuestra = document.getElementById("btnMuestra");
const btnBorraTodo = document.getElementById("btnBorraTodo");
const btnBlue = document.getElementById("btnBlue");
const btnMep = document.getElementById("btnMep");
const btnOficial = document.getElementById("btnOficial");
const btnSolidario = document.getElementById("btnSolidario");
const btnSiete = document.getElementById("btnSiete");
const btnOcho = document.getElementById("btnOcho");
const btnNueve = document.getElementById("btnNueve");
const btnMultiplica = document.getElementById("btnMultiplica");
const btnCuatro = document.getElementById("btnCuatro");
const btnCinco = document.getElementById("btnCinco");
const btnSeis = document.getElementById("btnSeis");
const btnResta = document.getElementById("btnResta");
const btnUno = document.getElementById("btnUno");
const btnDos = document.getElementById("btnDos");
const btnTres = document.getElementById("btnTres");
const btnSuma = document.getElementById("btnSuma");
const btnCero = document.getElementById("btnCero");
const btnPunto = document.getElementById("btnPunto");
const btnIgual = document.getElementById("btnIgual");
const btnDivide = document.getElementById("btnDivide");

// Elemento HTML memoria
const memoriPlace = document.getElementById("memoriPlace");
const calculatorView = document.getElementById("calculatorView");
const memoriBtnCanc = document.getElementById("memoriBtnCanc");
const memoriBtnAccept = document.getElementById("memoriBtnAccept");

// Constantes
const operadores = ["+", "-", "*", "/"];
const teclasValidas = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "-",
  "*",
  "/",
  "+",
  "Enter",
  "Backspace",
  "Escape",
];
const apiCripto = "https://criptoya.com/api/dolar";
const divDolar = document.getElementById("divDolar");

//validadores 
const validaInicio = ()=>{
  let flag = false;

  if (visor.innerText[0] === "0" && visor.innerText.length === 1){
    flag = true;
  }
  return flag;
}

// Variables
let numeroAOperar = "";
let numeroAux = "";
let cotizaciones = [];

//Recupera la cotizacion del dolar en sus diferentes cotizaciones
setInterval(() => {
  fetch(apiCripto)
    .then((respuesta) => respuesta.json())
    .then(({ blue, mep, oficial, solidario }) => {
      //Inicializo
      cotizaciones = [];

      cotizaciones.push({ indice: "blue", valor: blue });

      cotizaciones.push({ indice: "mep", valor: mep });

      cotizaciones.push({ indice: "oficial", valor: oficial });

      cotizaciones.push({ indice: "solidario", valor: solidario });
    })
    .catch((error) => {
      console.log(error);
    });
}, 2000);

function buscaCotiza(indice) {
  const f = visor.innerText.length;
  if ((validaInicio()) || operadores.includes(visor.innerText[f - 1])  ) {
    cotizaciones.forEach((cotizacion) => {
      if (cotizacion.indice === indice) {
        visor.innerText = visor.innerText + cotizacion.valor.toString();
      }
    });
  }
}

document.addEventListener("keydown", (event) => {
  if (teclasValidas.includes(event.key)) {
    switch (event.key) {
      case "-":
        subtractionKey();
        break;

      case "+":
        additionKey();
        break;

      case "*":
        multiplicationKey();
        break;

      case "/":
        divisionKey();
        break;

      case ".":
        pointKey();
        break;

      case "Enter":
        //se pone el foco en el enter y luego se pierde. Esto es porque sino queda el foco en algun boton y con el enter simulaba el click en el boton del foco
        btnIgual.focus();
        btnIgual.blur();
        equalKey();
        break;

      case "Backspace":
      case "Escape":
        ackey();
        break;

      default:
        concatena(event.key);
    }
  }
});

btnAyuda.addEventListener("click", () => {
  Swal.fire({
    title: "Ayuda",
    html:
    '<b>Memoria:</b> Cada vez que se hace una operación se guarda en memoría. Se puede borrar toda la memoria ó buscar seleccionar 1 para recuperarla.</br></br> ' +
    '<b>Coizacion:</b> Solo se podrá poner la cotización del dolar seleccionada si el visor esta en 0 ó es el comienzo de un nuevo operador.</br> ',        
    confirmButtonText: "Aceptar",
    background: "#ADEAD9",
  });
});

btnBlue.addEventListener("click", () => {
  buscaCotiza("blue");
});

btnMep.addEventListener("click", () => {
  buscaCotiza("mep");
});

btnOficial.addEventListener("click", () => {
  buscaCotiza("oficial");
});

btnSolidario.addEventListener("click", () => {
  buscaCotiza("solidario");
});

btnNueve.addEventListener("click", () => {
  concatena("9");
});

btnOcho.addEventListener("click", () => {
  concatena("8");
});

btnSiete.addEventListener("click", () => {
  concatena("7");
});

btnSeis.addEventListener("click", () => {
  concatena("6");
});

btnCinco.addEventListener("click", () => {
  concatena("5");
});

btnCuatro.addEventListener("click", () => {
  concatena("4");
});

btnTres.addEventListener("click", () => {
  concatena("3");
});

btnDos.addEventListener("click", () => {
  concatena("2");
});

btnUno.addEventListener("click", () => {
  concatena("1");
});

btnCero.addEventListener("click", () => {
  concatena("0");
});

btnBorMemo.addEventListener("click", () => {
  localStorage.clear();
  visorAnt.innerText = "0";
  visor.innerText = "0";
});

btnMuestra.addEventListener("click", () => {
  memoriPlace.classList.remove("displayHiddent");
  calculatorView.classList.add("displayHiddent");
  let contenido = "";
  const f = localStorage.length;

  for (let i = 1; i <= f; i++) {
    contenido += `<tr>
            <th scope="row">${i}</th>
            <td>  ${localStorage[i]} </td>
        </tr>`;
  }

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

  for (let i = 1; i <= f; i++) {
    tableView.rows[i].addEventListener("click", () => {
      visor.innerText = tableView.rows[i].cells[1].innerText;

      for (let i2 = 1; i2 <= f; i2++) {
        tableView.rows[i2].classList.remove("selection");
      }
      tableView.rows[i].classList.add("selection");
    });
  }
});

memoriBtnCanc.addEventListener("click", () => {
  memoriPlace.classList.add("displayHiddent");
  calculatorView.classList.remove("displayHiddent");
  visor.innerText = 0;
});

memoriBtnAccept.addEventListener("click", () => {
  memoriPlace.classList.add("displayHiddent");
  calculatorView.classList.remove("displayHiddent");
});

btnBorraTodo.addEventListener("click", () => {
  ackey();
});

btnDivide.addEventListener("click", () => {
  divisionKey();
});

btnMultiplica.addEventListener("click", () => {
  multiplicationKey();
});

btnResta.addEventListener("click", () => {
  subtractionKey();
});

btnSuma.addEventListener("click", () => {
  additionKey();
});

btnPunto.addEventListener("click", () => {
  pointKey();
});

btnIgual.addEventListener("click", () => {
  equalKey();
});

function pointKey() {
  permitePunto();

  if (permitePunto()) {
    concatena(".");
  }
}

function ackey() {
  visor.innerText = "0";
}

function equalKey() {
  let cantOperadores = hayOperadores(visor.innerText);
  let fixDecimal = 0;

  if (
    !operadores.includes(visor.innerText[visor.innerText.length - 1]) &&
    visor.innerText.length > 1 &&
    cantOperadores.length > 0
  ) {
    localStorage.setItem(localStorage.length + 1, visor.innerText);
    fixDecimal = parseFloat(
      resultado(localStorage.getItem(localStorage.length))
    ).toFixed(2);

    visorAnt.innerText = ` ${visor.innerText} =  ${fixDecimal.toString()}`;
    visor.innerText = "0";
  }
}

function divisionKey() {
  if (validaInicio()) {
    concatena("0/");
  } else {
    concatena("/");
  }
}

function multiplicationKey() {
  if (validaInicio()) {
    concatena("0*");
  } else {
    concatena("*");
  }
}

function additionKey() {
  if (validaInicio()) {
    concatena("0+");
  } else {
    concatena("+");
  }
}

function subtractionKey() {
  if (validaInicio()) {
    concatena("0-");
  } else {
    concatena("-");
  }
}

function concatena(ingreso) {
  if (visor.innerText.length > 1) {
    if (
      operadores.includes(ingreso) &&
      operadores.includes(visor.innerText[visor.innerText.length - 1])
    ) {
      visor.innerText = visor.innerText.slice(0, -1) + ingreso;
    } else {
      visor.innerText = visor.innerText + ingreso;
    }
  } else {
    visor.innerText[0] === "0"
      ? (visor.innerText = ingreso)
      : (visor.innerText = visor.innerText + ingreso);
  }
}

function resultado(estructura) {
  estructura = armaEstructura(estructura);
  while (hayOperadores(estructura).length >= 1) {
    let estructuraAux = [];

    switch (true) {
      case estructura.includes("/") || estructura.includes("*"): {
        estructuraAux = divideMultiplica(estructura);
        break;
      }
      case estructura.includes("+") || estructura.includes("-"): {
        estructuraAux = sumaResta(estructura);
        break;
      }
    }
    estructura = estructuraAux;
  }
  return estructura;
}

function armaEstructura(estructura) {
  const f = estructura.length;
  let acumulador = "";
  let nuevaEstructura = [];

  for (let i = 0; i < f; i++) {
    if (operadores.includes(estructura[i])) {
      nuevaEstructura.push(acumulador);
      nuevaEstructura.push(estructura[i]);
      acumulador = "";
    } else {
      acumulador = acumulador + estructura[i];
    }
  }
  nuevaEstructura.push(acumulador);

  return nuevaEstructura;
}

function hayOperadores(estructura) {
  return Array.from(estructura).filter((element) => {
    return operadores.includes(element);
  });
}

function divideMultiplica(estructura) {
  let calcAux = "";
  let estructuraAux = [];
  const f = estructura.length;

  for (let i = 1; i < f; i = i + 2) {
    if (calcAux === "") {
      calcAux = estructura[i - 1];
    }

    if (estructura[i].includes("-") || estructura[i].includes("+")) {
      estructuraAux.push(calcAux.toString());
      estructuraAux.push(estructura[i]);
      calcAux = "";
    } else {
      if (estructura[i].includes("*")) {
        calcAux = parseFloat(calcAux) * parseFloat(estructura[i + 1]);
      } else {
        if (estructura[i + 1] === "0") {
          return "Infinito";
        } else {
          calcAux = parseFloat(calcAux) / parseFloat(estructura[i + 1]);
        }
      }
    }
  }

  if (calcAux === "") {
    estructuraAux.push(estructura[f - 1]);
  } else {
    estructuraAux.push(calcAux.toString());
  }
  return estructuraAux;
}

function sumaResta(estructura) {
  let calcAux = "";
  let estructuraAux = [];
  const f = estructura.length;

  for (let i = 1; i < f; i = i + 2) {
    if (calcAux === "") {
      calcAux = estructura[i - 1];
    }

    if (estructura[i].includes("+")) {
      calcAux = parseFloat(calcAux) + parseFloat(estructura[i + 1]);
    } else {
      calcAux = parseFloat(calcAux) - parseFloat(estructura[i + 1]);
    }
  }

  estructuraAux.push(calcAux.toString());
  return estructuraAux;
}

function permitePunto() {
  const f = visor.innerText.length;
  let pointFlag = true;

  if (f > 0) {
    pointFor: for (let i = f - 1; i >= 0; i--) {
      switch (true) {
        case visor.innerText[i] === ".":
          pointFlag = false;
          break;

        case operadores.includes(visor.innerText[i]):
          break pointFor;

        default:
          continue;
      }
    }
  }
  return pointFlag;
}
