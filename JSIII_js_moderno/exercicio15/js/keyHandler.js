import calculate from "./calculate.js";

const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '.',
  '%',
  ' ',
];

export function handleChangeKey (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });

  return charKeyBtn;
}

export function handleClearInput() {
  const input = document.getElementById('input');

  input.value = '';
  input.focus();
}



export function handleKeyDown (event) {
  event.preventDefault();

  if (allowedKeys.includes(event.key)) {
    input.value += event.key;
    return;
  }

  if (event.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }

  if (event.key === 'Enter') {
    calculatelate();
  }
}
