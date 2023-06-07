const numero = prompt("Digite um número: ");
let tabuada = "";

for (let i = 1; i <= 20; i++) {
  tabuada += `${numero} x ${i} = ${numero * i}\n`;
}

alert(tabuada);
