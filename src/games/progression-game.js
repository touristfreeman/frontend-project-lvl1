import {
  Greet, getNameSayHi, sayRules, car, cdr, askQuestion, getUseAnswer,
  getRandInt, checkUseAnswAndSayRes, cons,
} from '../index';

const getNumberSeries = () => {
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

const getStringNumSeries = (numberSeries, colon, stirnForUse = '', count = 0) => {
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

const gameBrainProgression = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('What number is missing in the progression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const stringNumSeries = getStringNumSeries(getNumberSeries(), getRandInt(8));
    askQuestion(car(stringNumSeries));
    console.log(`hint ${cdr(stringNumSeries)}`);
    const checkResult = checkUseAnswAndSayRes(cdr(stringNumSeries), getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
export default gameBrainProgression;
