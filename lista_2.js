const atividade1 = (n1, n2) => {
  if (n1 > n2) console.log(`${n1} maior que ${n2}`);
  else if (n2 > n1) console.log(`${n2} maior que ${n1}`);
  else if (n1 == n2) console.log(`${n1} e ${n2} sao iguais`);
};

const atividade2 = (n1) => {
  console.log(`${n1 >= 0 ? "positivo" : "negativo"}`);
};

const atividade3 = (letra) => {
  if (letra.toUpperCase() == "M") console.log("M - Masculino");
  else if (letra.toUpperCase() == "F") console.log("F - Feminino");
  else console.log("Sexo invalido");
};

const atividade4 = (letra) => {
  const vogais = ["a", "e", "i", "o", "u"];
  for (let vog of vogais) {
    if (letra.toLowerCase() == vog) {
      console.log(`${letra} é vogal`);
      return;
    }
  }
  console.log(`${letra} é consoante`);
};

const atividade5 = (n1, n2) => {
  const media = (n1 + n2) / 2;
  const corte = 7;
  if (media >= corte) console.log("Aprovado");
  else if (media < corte) console.log("Reprovado");
  else if (media == 10) console.log("Aprovado com distinção");
};

const atividade6 = (nums) => {
  let maior = nums[0];
  nums.map((val) => {
    if (val > maior) maior = val;
  });
  console.log(maior);
};

const atividade7 = (nums) => {
  let maior = nums[0];
  let menor = nums[0];
  nums.map((val) => {
    if (val >= maior) maior = val;
    if (val <= menor) menor = val;
  });
  console.log(`Maior: ${maior}\nMenor: ${menor}`);
};

const atividade8 = (nums) => {
  let menor = nums[0];
  nums.map((val) => {
    if (val < menor) menor = val;
  });
  console.log(menor);
};

const atividade9 = (nums) => {
  nums = nums.sort((a, b) => b - a);
  console.log(nums);
};
