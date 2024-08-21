const atividade1 = () => {
  for (let i = 1; i <= 10; i++) console.log(i);
};

const atividade2 = () => {
  for (let i = 10; i >= 1; i--) console.log(i);
};

const atividade3 = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) console.log(i);
  }
};

const atividade4 = () => {
  let total = 0;
  for (let i = 1; i <= 50; i++) total += i;
  console.log(total);
};

const atividade5 = () => {
  for (let i = 0; i <= 10; i++) console.log(`5 x ${i} = ${5 * i}`);
};

const atividade6 = () => {
  for (let i = 0; i <= 10; i++) console.log(`2 elevado a ${i} = ${2 ** i}`);
};
