const metros = prompt('Digite uma medida em metros (m): ');
const opcaoConversao = prompt('Digite uma opção de conversão (mm / cm / dm / dam / hm / km):');

switch(opcaoConversao) {
  case 'mm':
    alert(`${metros}m equivale a ${metros * 1000}mm`);
    break;
  case 'cm':
    alert(`${metros}m equivale a ${metros * 100}cm`);
    break;
  case 'dm':
    alert(`${metros}m equivale a ${metros * 10}mm`);
    break;
  case 'dam':
    alert(`${metros}m equivale a ${metros / 10}mm`);
    break;
  case 'hm':
    alert(`${metros}m equivale a ${metros / 100}mm`);
    break;
  case 'km':
    alert(`${metros}m equivale a ${metros / 1000}mm`);
    break;
  default:
    alert('Opção inválida!');
}