const dayjs = require('dayjs');

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const age = today.diff(birthday, 'year');
  const nextBirthday = birthday.add(age + 1, 'year');
  const daysToBirthday = nextBirthday.diff(today, 'day') + 1;

  console.log(`- Idade: ${age} anos
  - Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}
  - Dias para completar ${age + 1} anos: ${daysToBirthday}
  -----------------------------------------------`);
}

birthday('1987-03-14');
birthday('1959-01-31');
birthday('2020-05-13');
birthday('2023-05-06');
