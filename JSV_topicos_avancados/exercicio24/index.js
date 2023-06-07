function imc(width, height) {
  return new Promise((resolve, reject) => {
    if (typeof width !== 'number' || typeof height !== 'number') {
      reject('arguments must be a number');
    } else {
      resolve(width / (height * height));
    }
  });
}

function showIMC(width, height) {
  imc(width, height)
    .then((result) => {
      console.log(`O resultado do IMC foi de ${result}`);

      if (result < 18.5) console.log('Situação: MAGREZA');
      else if (result < 25) console.log('Situação: NORMAL');
      else if (result < 30) console.log('Situação: SOBREPESO');
      else if (result < 40) console.log('Situação: OBESIDADE');
      else console.log('Situação: OBESIDADE GRAVE');
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Calculando IMC para ${width} e ${height}...`);
}

showIMC(71, 1.74);
showIMC(48, 1.6);
showIMC(71, 'texto');
showIMC(82, 1.72);
showIMC(120, 1.8);

showIMC(109, 1.71);
