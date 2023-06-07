let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial: "));
let opcao = "";

do {
  opcao = prompt(`
Saldo disponível: R$ ${saldo}

1. Adicionar dinheiro
2. Retirar dinheiro
3. Sair
`);

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado: "));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser retirado: "));
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");
