var numeroSecreto = parseInt(Math.random() * 11);
var contador = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Está certo! Parabens :)";
  } else if (document.getElementById("valor").value == "") {
    alert("Por favor, coloque um numero de 0 a 10");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Coloque um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Você errou! :(";
  }
