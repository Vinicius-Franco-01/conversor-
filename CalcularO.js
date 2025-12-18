function calcularO(){

const temperatura = Number(document.getElementById('temperatura').value);
const ohmica = Number(document.getElementById('ohmica').value);

if(!temperatura || !ohmica) {
    alert("Preencha todos os campos!");
    return;
}


let constantek = 234.5

let resistencia = ohmica * ((25 + constantek) / (temperatura + constantek))

 console.log("Seu resultado é: ", resistencia);

 document.getElementById('saida').textContent = "Seu Resultado é em miliohns: " + resistencia.toFixed(2);
}