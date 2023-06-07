const vagas = [];

function listarVagas() {
  if (vagas.length === 0) {
    return alert("Não há vagas disponíveis!");
  } else {
    // for (let i = 0; i <= array.length; i++) {
    //   return alert(`Vaga ${i}
    // Nome: ${array[i].nome}
    // Quantidade de Candidatos: ${array[i].candidatos.length}`);
    // }

    const vaga = vagas.reduce(function (texto, vaga, indice) {
      texto += `${indice} - ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`;

      return texto;
    }, "Vagas: \n");

    return alert(vaga);
  }
}

function criarVaga() {
  const nome = prompt("Nome da vaga: ");
  const descricao = prompt("Descricao da vaga: ");
  const data = prompt("Insira uma data limite (dd/mm/aaaa): ");
  const candidatos = [];

  const confirmacao = confirm(`Deseja salvar essa vaga?
Nome da vaga: ${nome}
Descrição: ${descricao}
Data limite: ${data}
  `);

  if (confirmacao) {
    vagas.push({
      nome,
      descricao,
      data,
      candidatos,
    });
    return alert("Vaga salva com sucesso!");
  } else {
    return alert("Voltando ao menu.");
  }
}

function visualizarVaga() {
  const indice = parseInt(prompt("Digite o índice da vaga: "));

  if (indice < 0 || indice > vagas.length) {
    return alert("Opção inválida!");
  } else {
    const vaga = vagas[indice];
    const candidatos = vaga.candidatos.reduce(function (texto, candidato) {
      return `${texto}\n - ${candidato}`;
    }, "");

    return alert(`Vaga ${indice}
Nome da vaga: ${vaga.nome}
Descrição: ${vaga.descricao}
Data limite: ${vaga.data}
Quantidade de Candidatos: ${vaga.candidatos.length}
Candidatos inscritos: ${candidatos ? candidatos : 'Nenhum candidato inscrito'}`);
  }
}

function inscreverCandidato() {
  const candidato = prompt("Nome do(a) candidato(a): ");
  const indice = parseInt(prompt("Digite o índice da vaga: "));

  if (indice < 0 || indice > vagas.length) {
    return alert("Opção inválida!");
  } else {
    const vaga = vagas[indice];

    const confirmacao = confirm(`Deseja inscrever o candicato na vaga?
Nome da vaga: ${vaga.nome}
Descrição: ${vaga.descricao}
Data limite: ${vaga.data}
Candidatos Inscritos: ${vaga.candidatos.length}
  `);

    if (confirmacao) {
      vaga.candidatos.push(candidato);
      return alert(`Candidato(a) ${candidato} cadastrado com sucesso!`);
    } else {
      return alert("Voltando ao menu.");
    }
  }
}

function removerVaga() {
  const indice = parseInt(prompt("Digite o índice da vaga: "));

  if (indice < 0 || indice > vagas.length) {
    return alert("Opção inválida!");
  } else {
    const vaga = vagas[indice];

    const confirmacao = confirm(`Deseja remover a vaga?
Nome da vaga: ${vaga.nome}
Descrição: ${vaga.descricao}
Data limite: ${vaga.data}
Candidatos Inscritos: ${vaga.candidatos.length}
  `);

    if (confirmacao) {
      vagas.splice(indice, 1);
      return alert(`Vaga removida com sucesso!`);
    } else {
      return alert("Voltando ao menu.");
    }
  }
}

function exibirMenu() {
  return prompt(`
  Bem vindo(a) ao nosso sistema de vagas, escolha uma das opções abaixo:
  1. Listar vagas disponíveis
  2. Criar uma nova vaga
  3. Visualizar uma vaga
  4. Inscrever um candidato em uma vaga
  5. Excluir uma vaga
  6. Sair
  `);
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = listarVagas();
        break;
      case "2":
        resultado = criarVaga();
        break;
      case "3":
        resultado = visualizarVaga();
        break;
      case "4":
        resultado = inscreverCandidato();
        break;
      case "5":
        resultado = removerVaga();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida.");
        break;
    }

    if (resultado) {
      alert(resultado);
    }
  } while (opcao !== "6");
}

executar();
