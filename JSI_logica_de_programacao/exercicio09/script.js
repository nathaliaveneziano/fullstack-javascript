function calcularAreaTriangulo() {
  const base = prompt("Digite a base do triângulo:");
  const altura = prompt("Digite a altura do triângulo:");
  return `A área do triangulo é de ${(base * altura) / 2}`;
}

function calcularAreaRetangulo() {
  const base = prompt("Digite a base do retângulo:");
  const altura = prompt("Digite a altura do retângulo:");
  return `A área do retângulo é de ${base * altura}`;
}

function calcularAreaQuadrado() {
  const lado = prompt("Digite a base do quadrado:");
  return `A área do quadrado é de ${lado * lado}`;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"));
  const baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"));
  const altura = prompt("Digite a altura do trapézio:");
  return `A área do trapézio é de ${((baseMaior + baseMenor) * altura) / 2}`;
}

function calcularAreaCirculo() {
  const raio = prompt("Digite o raio do círculo:");
  return `A área do círculo é de ${raio * raio * 3.14}`;
}

function exibirMenu() {
  return prompt(`
  Calculadora Geométrica:
  1. Área do triângulo
  2. Área do retângulo
  3. Área do quadrado
  4. Área do trapézio
  5. Área do círculo
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
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
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
