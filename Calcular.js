function calcular(){

const temperatura = Number(document.getElementById('temperatura').value);
const isolacao = Number(document.getElementById('isolacao').value);

if(!temperatura || !isolacao) {
    alert("Preencha todos os campos!");
    return;
}


let constantek = 0.50**((40-temperatura)/10)

let resistencia = isolacao * constantek

 console.log("Seu resultado é: ", resistencia);

 document.getElementById('saida').textContent = "Seu Resultado é em OHNS: " + resistencia.toFixed(2);
}