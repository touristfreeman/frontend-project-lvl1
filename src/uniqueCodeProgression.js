import { cons, getRandInt } from './index';

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