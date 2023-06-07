const baralho = [];
let carta = "";
let opcao = "";

do {
  opcao = prompt(`
Cartas no baralho: ${baralho.length}

Opção:
1. Adicionar uma carta
2. Puxar uma carta
3. Sair
  `);

  switch (opcao) {
    case "1":
      carta = prompt("Digite uma nova carta:");
      baralho.unshift(carta);
      break;
    case "2":
      carta = baralho.shift();
      if (carta) {
        alert(`Carta puxada = ${carta}`);
      } else {
        alert("Sem cartas na fila.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
      break;
  }
} while (opcao !== "3");
