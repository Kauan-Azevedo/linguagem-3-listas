const atividade1 = () => {
  console.log("Olá Mundo");
};

const atividade2 = (num) => {
  console.log(`O número informado foi ${num}`);
};

const atividade3 = (n1, n2) => {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
};

const atividade4 = (n1, n2, n3, n4) => {
  console.table({ n1, n2, n3, n4 });
  console.log(`Media: ${(n1 + n2 + n3 + n4) / 4}`);
};

const atividade5 = (metro) => {
  console.log(`${metro * 100} cm`);
};

const atividade6 = (raio) => {
  console.log(`${3.14 * (raio * raio)} m²`);
};

const atividade7 = (altura, largura) => {
  console.log(`${altura * largura * 2} m²`);
};

const atividade8 = (valHora, horas) => {
  console.log(`${valHora * horas}`);
};

const atividade9 = (farenheit) => {
  console.log(`${((5 * (farenheit - 32)) / 9).toFixed(2)}`);
};

const atividade10 = (celsius) => {
  console.log(`${(celsius * 1.8 + 32).toFixed(2)}`);
};
