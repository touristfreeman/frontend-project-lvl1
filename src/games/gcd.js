import {
  Greet, getNameSayHi, sayRules, getNumbers, askQuestion, sayResult, getUseAnswer,
  getRandInt, checkNumIsgetPrimeFactors, checkValAndAnswUse, getResArithOperat, getRandomOperator,
} from '../index';


// разложить на простые множетели
const getPrimeFactors = (num, acc = 2, factors = []) => {
  const foo = (n) => (n % 2 !== 0 || n === 2 ? n : foo(n + 1)); // переименовать гетПраймИнт

  if (num === 17) {
    return factors;
  }
  const curAcc = foo(acc);
  if (num % curAcc === 0) {
    const allFactors = factors.push(curAcc);
    const accumulat = 2;
    return getPrimeFactors(num / curAcc, accumulat, factors);
  }
  return getPrimeFactors(num, acc + 1, factors);
};


const cons = (x, y) => (f) => f(x, y);
const car = (p1) => p1((x, y) => x);
const cdr = (p2) => p2((x, y) => y);


// фнц прогоняющая первый индекс по второму массиву.
const findCopy = (i, array2, arrCounter = 0) => {
  console.log(`marker 1, arrCounter ${arrCounter}, i - ${i}, array2[arrCounter] - ${array2[arrCounter]}`);
  if (i === array2[arrCounter]) {
    return cons(i, arrCounter);// cons(i, arrConter)(функция какая должна быть здесь?); #получитьИзПары
  }
  return findCopy(i, array2, arrCounter + 1);
};

// новая поиск одинаковых множителей (взм, с последующим делением)
const getCommonFactors = (arr1, arr2, arr3) => {
 // console.log(`marker 2, ${count1}, commonFactors`); //
  // findCopy(arr1[count1], arr2) //получаем два числа первый общий делитель, второе - делитель, который нужно удалить из второго массива. #получитьИзПары

  //БАЗОВЫЙ СЛУЧАЙ
  if (arr1 === '') {
    return 'hui';
  }

  // ДОБАВЛЯЕМ в третий массив общий делитель 
  const pairsFactors = findCopy(arr1[0], arr2);
  let currConmmFac = [];
  currConmmFac = car(pairsFactors);
  return getCommonFactors(arr1.shift, arr2, currConmmFac);

  //ФОРМИРУЕМ НОВЫЙ МАССИВ похоже получится, как я предполагал, типа засунуть функцию формирующую массив без 

  // const arr4 = arr2 // из этого массива будем вырезать #получитьИзПары
  // создать функцию, которая будет через пуш сохранять все значения массива, кроме номера массива полученного из функции findCopy
  // -- вызываем fineCopy с conunt1 + 1 и исправленной arr2
  // базовый случай "когда кончился первый массив" возвращает третий массив
  // если findCopy возвращает положительный результат то добавляется в третий массив, если не встретил, то завпускает еще один

  return ; // ПРОБЛЕМа возвращает массив
};
export default getCommonFactors;
