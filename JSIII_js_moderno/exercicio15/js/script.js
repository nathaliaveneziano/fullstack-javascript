import calculate from './calculate.js';
import copyToClipboardFunction from './copyToClipboard.js';
import {
  handleChangeKey,
  handleKeyDown,
  handleClearInput,
} from './keyHandler.js';
import themeSwitcher from './themeSwitcher.js';

// Pega o valor do botão e adiciona no input
document
  .querySelectorAll('.charKey')
  .forEach((charKeyBtn) => handleChangeKey(charKeyBtn));

// Limpa o input e foca nele
document.getElementById('clear').addEventListener('click', handleClearInput);

// Bloqueia teclas que não fazem parte da calculadora, cria função para o Backspace e Enter
document.getElementById('input').addEventListener('keydown', handleKeyDown);

// Funções que efetuarão o cálculo presente no input
document.getElementById('equal').addEventListener('click', calculate);

// Trocando o tema
document
  .getElementById('themeSwitcher')
  .addEventListener('click', themeSwitcher);

// Copiando valor para a área de ttransferências
document
  .getElementById('copyToClipboard')
  .addEventListener('click', copyToClipboardFunction);
