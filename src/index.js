import readlineSync from 'readline-sync';

export const cons = (x, y) => (f) => f(x, y);
export const car = (p1) => p1((x) => x);
export const cdr = (p2) => p2((x, y) => y);

export const Greet = () => console.log('Welcome to the Brain Games!');
export const sayRules = (rules) => console.log(rules);
export const getNameSayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name} !`);
  return name;
};
export const askQuestion = (question) => console.log(`Question: ${question}`);
export const sayResult = (result) => console.log(result);
export const getUseAnswer = () => readlineSync.question('Your answer: ');

export const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const checkUseAnswAndSayRes = (correctAnswer, useAnswer, useName) => {
  if (String(correctAnswer) === useAnswer) {
    console.log('Correct!');
    return true;
  }
  return console.log(`\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
};

// возможно пригодится для последней функции
// export const getPrimInt = (num) => (num % 2 !== 0 || num === 2 ? num : getPrimInt(num + 1));


// ------------ похоже она только для функции prime


export const checkPrimInt = (num, count = 2) => {
  if (count === num) {
    return 'yes';
  }
  return num % count === 0 ? 'no' : checkPrimInt(num, count + 1);
};
// -------------------------------------------------------------------------------------


export const getNumberSeries = () => {
  const initialNum = getRandInt(9);
  const difference = getRandInt(9);

  const getNumArray = (arr = [initialNum], count = 0) => {
    const array = arr;
    if (count >= 9) {
      return array; // или даже возвращаем пару, если понадобится или пару вернем из внешенй функции
    }
    array.push(array[count] + difference);
    return getNumArray(array, count + 1);
  };
  return getNumArray();
};

export const getStringNumSeries = (numberSeries, colon, stirnForUse = '', count = 0) => {
  if (count > 9) {
    return cons(stirnForUse, numberSeries[colon]);
  }

  if (colon === count) {
    const string = `${stirnForUse} ..`;
    return getStringNumSeries(numberSeries, colon, string, count + 1);
  }

  const string = `${stirnForUse} ${numberSeries[count]}`;
  return getStringNumSeries(numberSeries, colon, string, count + 1);
};
