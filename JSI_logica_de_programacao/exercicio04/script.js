const turista = prompt("Digite seu nome: ");
let visitouCidade = prompt("Já visitou alguma cidade? (S / N)");
let cidades = "";
let contagem = 0;

while (visitouCidade === "S") {
  contagem++;
  cidades += "- " + prompt("Digite o nome da cidade: ") + "\n";
  visitouCidade = prompt("Já visitou alguma outra cidade? (S / N)");
}

alert(`${turista} já visitou ${contagem} cidades. São elas:\n${cidades}`);
