function createLabel(text, htmlFor) {
  const label = document.createElement('label');
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(type, name, id, value = '') {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.className = id;
  input.id = id;
  input.value = value;
  return input;
}

// Buttton Add Tech
const addTechBtn = document.getElementById('add-tech');
const formDev = document.getElementById('form-dev');
const devsArray = [];
let cont = 0;

addTechBtn.addEventListener('click', function (event) {
  const ulTechnologies = document.getElementById('technologies');
  const liForm = document.createElement('li');
  liForm.id = `tech-${cont}`;
  liForm.className = 'tech';

  const labelName = createLabel('Tecnologia: ', 'tech-name');
  const inputName = createInput('text', 'tech-name', `tech-name-${cont}`);

  const labelExp = createLabel('Experiência: ');
  const inputRadio1 = createInput(
    'radio',
    `tech-exp-${cont}`,
    `tech-exp-${cont}-1`,
    '0-2 anos'
  );
  const labelExp1 = createLabel('0-2 anos', `tech-exp-${cont}-1`);
  const inputRadio2 = createInput(
    'radio',
    `tech-exp-${cont}`,
    `tech-exp-${cont}-2`,
    '3-4 anos'
  );
  const labelExp2 = createLabel('3-4 anos', `tech-exp-${cont}-2`);
  const inputRadio3 = createInput(
    'radio',
    `tech-exp-${cont}`,
    `tech-exp-${cont}-3`,
    '5+ anos'
  );
  const labelExp3 = createLabel('5+ anos', `tech-exp-${cont}-3`);

  const btnRemove = document.createElement('button');
  btnRemove.type = 'buttton';
  btnRemove.innerText = 'Remover tecnologia';
  btnRemove.addEventListener('click', function (event) {
    ulTechnologies.removeChild(liForm);
  });

  liForm.append(
    labelName,
    inputName,
    labelExp,
    inputRadio1,
    labelExp1,
    inputRadio2,
    labelExp2,
    inputRadio3,
    labelExp3,
    btnRemove
  );
  ulTechnologies.appendChild(liForm);
  cont++;
});

formDev.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullname').value;
  const liTechs = document.querySelectorAll('.tech');

  let technologies = [];
  liTechs.forEach(function (tech) {
    const techName = document.querySelector(
      `#${tech.id} input[name="tech-name"]`
    ).value;
    const techExp = document.querySelector(
      `#${tech.id} input[type="radio"]:checked`
    ).value;

    technologies.push({
      name: techName,
      expperiencia: techExp,
    });
  });

  devsArray.push({ fullName, technologies });
  alert('Dev cadastrado com sucesso');

  document.getElementById('fullname').value = '';
  liTechs.forEach(function (tech) {
    tech.remove();
  });

  console.log(devsArray);
});
