const atividade1 = () => {
  let array = [];
  array[1] = "ana";
  array[3] = "claudio";
  array[7] = "jose";

  console.log(array.length);
  console.log(array);
};

const atividade2 = () => {
  let array = [1, 2, 3, 4, 5];
  console.log(array);
  array[0] = 100;
  console.log(array);
};

const atividade3 = () => {
  let meuArray = [];
  meuArray.push(1);
  meuArray.push(2);
  meuArray.push(3);

  console.log(meuArray);

  meuArray[0] = meuArray[0] * 2;

  console.log(meuArray);
};
