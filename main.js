/* const btnCalcular = document.querySelector("#btnCalcular");

const calcularImc = () => {

  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const resultado = document.querySelector("#resultado");
  const imagen = document.querySelector("#imagen");
  const imc =

    parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));

  if (imc.toFixed(2) < 18.5) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/BajoPeso.png";

  } else if (imc.toFixed(2) < 24.9) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/Normal.png";

  } else if (imc.toFixed(2) < 34.9) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/SobrePeso.png";

  } else {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/Obeso.png";
  }
};

btnCalcular.addEventListener("click", calcularImc); */


let agregarInfo = () => {

  let peso = document.querySelector(`#peso`);
  let altura = document.querySelector(`#altura`);
  let resultado = document.querySelector(`#resultado`);
  let imagen = document.querySelector(`#imagen`);
  let calculoIMC = parseFloat(peso.value) / Math.pow(altura.value, 2)

  switch (true) {

    case (calculoIMC.toFixed(2) < 18.5):
      resultado.innerHTML = calculoIMC.toFixed(2)
      imagen.src = "./img/BajoPeso.png"

      break;

    case (calculoIMC.toFixed(2) <= 24.9):
      resultado.innerHTML = calculoIMC.toFixed(2)
      imagen.src = "./img/Normal.png"

      break;

    case (calculoIMC.toFixed(2) <= 29.9):
      resultado.innerHTML = calculoIMC.toFixed(2)
      imagen.src = "./img/SobrePeso.png"

      break;

    case (calculoIMC.toFixed(2) <= 34.9):
      resultado.innerHTML = calculoIMC.toFixed(2)
      imagen.src = "./img/Obeso.png"

      break;

    default:
      alert(`Disculpe, no tenemos información para este el imc de ${calculoIMC.toFixed(2)}`)
      break;
  }


}

let btnCalcular = document.querySelector(`#btnCalcular`)

btnCalcular.addEventListener(`click`, agregarInfo)


//Quitar información

let btnBorrar = document.querySelector(`#btnQuitar`)

let quitarInfo = () => {
  let resultado = document.querySelector(`#resultado`)
  let imagen = document.querySelector(`#imagen`)
  let peso = document.querySelector(`#peso`)
  let altura = document.querySelector(`#altura`)

  resultado.innerHTML = ""
  imagen.src = ""
  peso.value = ""
  altura.value = ""


}


btnBorrar.addEventListener(`click`,quitarInfo)




