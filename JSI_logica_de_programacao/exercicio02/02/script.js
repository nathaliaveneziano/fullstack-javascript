const atacante = prompt("Qual o nome do personagem atacante: ");
const poderDeAtaque = prompt("Qual é o seu poder de ataque? ");

const defensor = prompt("Qual o nome do personagem defensor: ");
let pontosDeVida = prompt("Qual pontos de vida ele possui? ");
const poderDeDefesa = prompt("Qual é o seu poder de defesa? ");
const possuiEscudo = prompt("Ele possui um escudo? (Sim / Não) ");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert (`${atacante} causou ${danoCausado} pontos de danos em ${defensor}`);
alert(`${atacante}
Poder de ataque: ${poderDeAtaque}

${defensor}
Pontos de vida: ${pontosDeVida}
Poder de defesa: ${poderDeDefesa}
Possui escudo: ${possuiEscudo}`);