const catalogo = [];
let opcao = "";

do {
  opcao = prompt(`
  Quantidade de imóveis cadastrados: ${catalogo.length}

  Opção:
  1. Salvar um imóvel
  2. Mostrar imóveis
  3. Sair
  `);

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Digite o nome do proprietário:");
      imovel.quartos = prompt("Digite a quantidade de quartos: ");
      imovel.banheiros = prompt("Digite a quantidade de banheiros: ");
      imovel.garagem = prompt("Possui garagem? (Sim / Não)");

      const confirmacao = confirm(`Salvar esse imóvel?
      Nome do proprietário: ${catalogo[i].proprietario}
      Quantidade de quartos: ${catalogo[i].quartos}
      Quantidade de banheiros: ${catalogo[i].banheiros}
      Possui garagem: ${catalogo[i].garagem}
      `);

      if (confirmacao) {
        catalogo.push(imovel);
        alert('Imóvel salvo com sucesso!');
      } else {
        alert("Voltando ao menu.");
      }

      break;
    case "2":
      if (catalogo.length === 0) {
        alert("Nenhum imóvel cadastrado.");
      } else {
        for (let i = 0; i < catalogo.length; i++) {
          alert(`Imóvel ${i + 1}
      Nome do proprietário: ${catalogo[i].proprietario}
      Quantidade de quartos: ${catalogo[i].quartos}
      Quantidade de banheiros: ${catalogo[i].banheiros}
      Possui garagem: ${catalogo[i].garagem}
----------------------------------------------------------------\n`);
        }
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
