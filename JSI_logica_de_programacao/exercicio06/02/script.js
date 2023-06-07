const palavra = prompt("Digite uma palavra:");
let palindromo = "";

for (let i = (palavra.length - 1); i >= 0; i--) {
  palindromo += palavra[i];
}

if (palavra === palindromo) {
  alert(`${palavra} é um palindromo`);
} else {
  alert(`A palavra não é um palindromo.
  Palavra = ${palavra}
  Palindromo = ${palindromo}`);
}
