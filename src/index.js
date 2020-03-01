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
export const getPrimInt = (num) => (num % 2 !== 0 || num === 2 ? num : getPrimInt(num + 1));

// -------------------------------------------------------------------------------------
export const checkPrimInt = (num, count = 2) => {
  if (count === num) {
    return 'yes';
  }
  return num % count === 0 ? 'no' : checkPrimInt(num, count + 1);
};

export const getSimpleFact = (num, facCount = 2, newArrFactors = []) => {
  if (num === 1) {
    return newArrFactors;
  }

  const primeInt = getPrimInt(facCount);

  if (num % primeInt === 0) {
    newArrFactors.push(primeInt);
    return getSimpleFact(num / primeInt, facCount, newArrFactors);
  }

  return getSimpleFact(num, facCount + 1, newArrFactors);
};

export const findCopyFactor = (arr1Count, array2, arr2Count = 0) => {
  if (arr2Count > array2.length - 1) {
    return cons(arr1Count, 'array2 over');
  }

  if (arr1Count === array2[arr2Count]) {
    return cons(arr1Count, arr2Count);
  }

  return findCopyFactor(arr1Count, array2, arr2Count + 1);
};

export const getProdFactors = (arrCommFactor, count = 0) => {
  if (count === arrCommFactor.length - 1) {
    return arrCommFactor[count];
  }
  return arrCommFactor[count] * getProdFactors(arrCommFactor, count + 1);
};

export const getCommonFact = (arr1, arr2, arr3 = [], count1 = 0) => {
  const currConmmFac = arr3;
  const pairFactors = findCopyFactor(arr1[count1], arr2);

  if (count1 >= arr1.length - 1) {
    currConmmFac.push(car(pairFactors));
    return getProdFactors(arr3);
  }

  if (cdr(pairFactors) === 'array2 over') {
    return getCommonFact(arr1, arr2, arr3, count1 + 1);
  }

  currConmmFac.push(car(pairFactors));
  arr2.splice(cdr(pairFactors), 1);
  return getCommonFact(arr1, arr2, arr3, count1 + 1);
};


export const checkUseAnswAndSayRes = (correctAnswer, useAnswer, useName) => {
  if (String(correctAnswer) === useAnswer) {
    console.log('Correct!');
    return true;
  }
  return console.log(`\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
};
// --------------------------
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
