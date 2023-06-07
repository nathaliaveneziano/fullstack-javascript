let opcao = "";

do {
  opcao = prompt(`
  Seja bem vindo(a)

  Escolha uma das opções abaixo:
  1. Opção Um
  2. Opção Dois
  3. Opção Três
  4. Opção Quatro
  5. Sair do programa`);

  switch (opcao) {
    case '1':
      alert('Você escolheu a opção 1');
      break;
    case '2':
      alert('Você escolheu a opção 2');
      break;
    case '3':
      alert('Você escolheu a opção 3');
      break;
    case '4':
      alert('Você escolheu a opção 4');
      break;
    case '5':
      alert('Encerrando...');
      break;
    default:
      alert('Opção inválida.');
      break;
  }
} while (opcao !== '5');
