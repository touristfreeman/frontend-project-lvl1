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
const findCopy = (arr1Count, array2, arr2Count = 0) => { // рефакторинг в одну строчку
  console.log(`М-1, arr2Count ${arr2Count}, arr1Count - ${arr1Count}, array2[arr2Count] - ${array2[arr2Count]}, array2.length ${array2.length - 1}`);
  if (arr2Count >= array2.length - 1) {
    return cons(arr1Count, arr2Count); // если массив закончился, то нужно вызвать еще раз функцию getCommonFactors с плюсовым счетчиком
  }
  return findCopy(arr1Count, array2, arr2Count + 1);
};

// новая поиск одинаковых множителей (взм, с последующим делением)
const getCommonFactors = (arr1, arr2, arr3, count1 = 0) => {
  console.log(`М-2, ${count1}`); //

  // Базовый случа
  if (count1 >= arr1.length - 1) {
    return 'hui';
  }
  // получаем пару фактов
  const pairFactors = findCopy(arr1[count1], arr2);
  // ДОБАВЛЯЕМ в третий массив общий делитель
  let currConmmFac = [];
  currConmmFac = car(pairFactors);
  console.log(`М-3, currConmmFac ${currConmmFac}`);
  // ФОРМИРУЕМ НОВЫЙ МАССИВ 
  arr2.splice(cdr(pairFactors), 1);
  console.log(`М-4, arr2 ${arr2}`);

  return getCommonFactors(arr1, arr2, arr3, count1 + 1);
  // ПРОБЛЕМа возвращает массив
};
export default getCommonFactors;
