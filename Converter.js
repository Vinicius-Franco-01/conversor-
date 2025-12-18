function converter(){

const valor = Number(document.getElementById('valor').value);
const unidades = document.getElementById('unidades').value;

if(!valor || !unidades) {
    alert("Preencha todos os campos!");
    return;
}

if (unidades === 'G'){
   const mega =  valor * 1000
   const kilo = valor * 1000000
   const ohm = valor * 1000000000
   const mili = valor * 1000000000000
    document.getElementById('saida1').textContent = "Seu Resultado é em Megaohns: " + mega.toFixed(2);
    document.getElementById('saida2').textContent = "Seu Resultado é em Kilo-Ohns: " + kilo.toFixed(2);
    document.getElementById('saida3').textContent = "Seu Resultado é em Mili-Ohns: " + mili.toFixed(2);
    document.getElementById('saida4').textContent = "Seu Resultado é em Ohns: " + ohm.toFixed(2);
}
else if (unidades === 'M'){
    const giga =  valor * 0.001
    const kilo = valor * 1000
    const ohm = valor * 1000000 
    const mili = valor * 1000000000
    document.getElementById('saida1').textContent = "Seu Resultado é em Giga-Ohns: " + giga;
    document.getElementById('saida2').textContent = "Seu Resultado é em Kilo-Ohns: " + kilo.toFixed(2);
    document.getElementById('saida3').textContent = "Seu Resultado é em Mili-Ohns: " + mili.toFixed(2);
    document.getElementById('saida4').textContent = "Seu Resultado é em Ohns: " + ohm.toFixed(2);
}

else if (unidades === 'K'){
    const giga =  valor * 0.000001
    const mega = valor * 0.001
    const ohm = valor * 1000
    const mili = valor * 1000000
    document.getElementById('saida1').textContent = "Seu Resultado é em Giga-Ohns: " + giga;
    document.getElementById('saida2').textContent = "Seu Resultado é em Mega-Ohns: " + mega;
    document.getElementById('saida3').textContent = "Seu Resultado é em Mili-Ohns: " + mili.toFixed(2);
    document.getElementById('saida4').textContent = "Seu Resultado é em Ohns: " + ohm.toFixed(2);
}

else if (unidades === 'O'){
    const giga =  valor * 0.000000001 
    const mega = valor * 0.000001
    const kilo = valor * 0.001 
    const mili = valor * 1000
    document.getElementById('saida1').textContent = "Seu Resultado é em Giga-Ohns: " + giga;
    document.getElementById('saida2').textContent = "Seu Resultado é em Mega-Ohns: " + mega;
    document.getElementById('saida3').textContent = "Seu Resultado é em Mili-Ohns: " + mili;
    document.getElementById('saida4').textContent = "Seu Resultado é em Kilo-Ohns: " + kilo;
}

else{
    const giga =  valor * 0.000000000001
    const mega = valor * 0.000000001
    const kilo = valor * 0.000001
    const ohm = valor * 0.001 
    document.getElementById('saida1').textContent = "Seu Resultado é em Giga-Ohns: " + giga;
    document.getElementById('saida2').textContent = "Seu Resultado é em Mega-Ohns: " + mega;
    document.getElementById('saida3').textContent = "Seu Resultado é em Kilo-Ohns: " + kilo;
    document.getElementById('saida4').textContent = "Seu Resultado é em Ohns: " + ohm;
}


}