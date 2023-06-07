const fila = [];
let nome = "";
let opcao = "";

do {
  let texto = "";

  if (fila.length === 0) {
    texto = "Sem pacientes na fila";
  } else {
    for (let i = 0; i <= fila.length - 1; i++) {
      texto += `${i + 1}° ${fila[i]} \n`;
    }
  }

  opcao = prompt(`
Pacientes na fila:
${texto}

Opção:
1. Novo paciente
2. Consultar paciente
3. Sair
  `);

  switch (opcao) {
    case "1":
      nome = prompt("Digite o nome do novo paciente:");
      fila.push(nome);
      break;
    case "2":
      nome = fila.shift();
      if (nome) {
        alert(`Consultando paciente ${nome}`);
      } else {
        alert("Sem pacientes na fila.");
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
