const atividade1 = (nome) => {
  console.log(`Ola ${nome}`);
};

const atividade2 = (idade) => {
  console.log(idade >= 18 ? "maior de idade" : "menor de idade");
};

const atividade3 = (palavra) => {
  let inverso = palavra.split().reverse().join();
  if (palavra == inverso) return console.log("True");

  console.log("False");
};

const atividade4 = (...nums) => {
  let arrayNums = [...nums];
  let maior = arrayNums[0];
  arrayNums.map((val) => {
    if (val > maior) maior = val;
  });
  console.log(maior);
};

const atividade5 = (base, expoente) => {
  console.log(base ** expoente);
};
