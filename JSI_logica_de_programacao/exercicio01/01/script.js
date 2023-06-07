const nome = prompt('Digite seu nome:');
const sobrenome = prompt('Digite seu sobrenome:');
const campoDeEstudo = prompt('Digite campo de estudo:');
const anoDeNascimento = prompt('Digite seu ano de nascimento:');

alert(`
  Olá ${nome} ${sobrenome}!
  Você tem ${2023 - parseInt(anoDeNascimento)}.
  Seu interesse é ${campoDeEstudo}.
`);
