import {
  Greet, getNameSayHi, sayRules, cons, car, cdr, askQuestion, sayResult, getUseAnswer,
  getRandInt, checkValAndAnswUse,
} from '../index';

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

// в вызов этой функции нужно передать в colon вызов рандомного числа до 9
// еще возможно вызов самой этой функции вложить в вызов функции askQuestion
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


export const brainProgression = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('What number is missing in the progression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const numrSeries = getNumberSeries();
    const stringNumSeries = getStringNumSeries(numrSeries, getRandInt(8));
    askQuestion(car(stringNumSeries));
    console.log(cdr(stringNumSeries));
    const checkResult = checkValAndAnswUse(cdr(stringNumSeries), getUseAnswer(), name);
    sayResult(checkResult);
    return checkResult === 'Correct!' ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
