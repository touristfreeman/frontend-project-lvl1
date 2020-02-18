/* eslint-disable padded-blocks */
/* eslint-disable max-len */
import {
    Greet, getNameSayHi, sayRules, cons, car, cdr,
    askQuestionNew, sayResult, getUseAnswer,
    getRandInt, checkValAndAnswUse,
  } from '../index';

export const getNumberSeries = () => {
  const initialNum = getRandInt(9);
  const difference = getRandInt(9);
  // let NumberSeries = [initialNum];
  // console.log(`NumberSeries m-2 ${NumberSeries} обьявляем массив числового ряда`);

  const getNumArray = (arr = [initialNum], count = 0) => {
    const array = arr;
    console.log(`getNumArray m-4, array ${array}, conunt ${count}, difference ${difference} первый заход в функцию `);
    if (count >= 9) {
      return array; // или даже возвращаем пару, если понадобится или пару вернем из внешенй функции
    }
    array.push(array[count] + difference);
    return getNumArray(array, count + 1);
  };
  // console.log(`getNumberSeries m-3 вывод перед конечный возврат массива NumberSeries ${array} из ф. getNumberSeries`);
  return getNumArray();
};

/* for (let i = 0; i <= 10; i += 1) {
    NumberSeries.push(initialNum + difference);
    console.log(`getNumberSeries m-1 ${getNumberSeries} пров-ем добавление числового ряда`); 
  } */

export const brainProgression = () => {


};
