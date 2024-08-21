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

const atividade4 = () => {
  let array = [];
  array.push(1);
  array.push(2);
  array.push(3);

  console.log(array);
};

const atividade5 = () => {
  let animais = [];
  const addAnimals = setInterval(() => {
    if (animais.length == 0) {
      animais.push("Gato");
      console.log(animais);
    } else if (animais.length == 1) {
      animais.push("Cachorro");
      console.log(animais);
    } else if (animais.length == 2) {
      animais.push("Papagaio");
      console.log(animais);
    } else {
      clearInterval(addAnimals);
    }
  }, 1000);

  setTimeout(() => {
    const removeAnimals = setInterval(() => {
      animais.splice(0, 1);
      console.log(animais);
      if (animais.length == 0) clearInterval(removeAnimals);
    }, 2000);
  }, 3500);
};
