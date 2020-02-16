/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import {
  Greet, getNameSayHi, sayRules, cons, car, cdr, askQuestionNew, getNumbers, askQuestion, sayResult, getUseAnswer,
  getRandInt, checkNumIsgetPrimeFactors, checkValAndAnswUse, getResArithOperat, getRandomOperator,
} from '../index';


// разложить на простые множетели или получитьпростые множители
export const getPrimeFactors = (num, facCount = 2, newArrFactors = []) => {
  // console.log(`M-04 num ${num}`)
  const getPrimInt = (fc) => (fc % 2 !== 0 || fc === 2 ? fc : getPrimInt(fc + 1));

  if (num === 1) {
    return newArrFactors;
  }

  const primeInt = getPrimInt(facCount);

  if (num % primeInt === 0) {
    newArrFactors.push(primeInt);
    return getPrimeFactors(num / primeInt, facCount, newArrFactors);
  }

  return getPrimeFactors(num, facCount + 1, newArrFactors);
};


// фнц прогоняющая первый индекс по второму массиву.
export const findCopyFactor = (arr1Count, array2, arr2Count = 0) => { // сюда заходят arr1[i], arr2 2,2,3,3,17
 console.log(`findCopyFactor М-01, arr1Count ${arr1Count}, array2 ${array2}, arr2Count ${arr2Count}, array2[arr2Count] ${array2[arr2Count]}, array2.length ${array2.length - 1}`);
  
  // баз.сл. возвращает 
  if (arr2Count > array2.length - 1) {
    console.log('базовый случай в findCopyFactor');
    return cons(arr1Count, 'array2 over'); // проблемма возвращает аррей овер, возможно что то другое должна возвращать?
    // сюда нужно передать последнее число массива 17
  }

  if (arr1Count === array2[arr2Count]) { // ПРОБ взм сдесь не правильный выхо (не точно)
    return cons(arr1Count, arr2Count);
  }
  return findCopyFactor(arr1Count, array2, arr2Count + 1);
};


// произведение множителей
export const getProdFactors = (arrCommFactor, count = 0) => { // правильно работает
  console.log(`getProdFactors M-1.1 arrCommFactor ${arrCommFactor}, count ${count}, / ПРОБ не получает цифру 17`);
  if (count === arrCommFactor.length - 1) {
    console.log('');// 
    return arrCommFactor[count];
  }
  return arrCommFactor[count] * getProdFactors(arrCommFactor, count + 1);
};

// ------------------------------------------------------------
// новая поиск одинаковых множителей (взм, с последующим делением)
export const getCommonFactors = (arr1, arr2, arr3 = [], count1 = 0) => { // сюда заходят arr1 2,2,2,5,17, arr2 2,2,3,3,17 #pr1
  console.log(`getCommonFactors М-2,  arr1 ${arr1}, arr2 ${arr2}, arr3 ${arr3}, count1 ${count1}, заходит в функцию создания общего массива`);
  const currConmmFac = arr3;
  const pairFactors = findCopyFactor(arr1[count1], arr2); // ПРОБ взм, тут какие то кудри с возвратом пары из функции
  console.log(`car(pairFactors) ${car(pairFactors)} вернулось из findFactor`);
  
  // Базовый случай
  if (count1 >= arr1.length - 1) {
    // сюда добавим сохранение в массив числа 17 перед вызовом 
    currConmmFac.push(car(pairFactors));
    console.log(`getProdFactors(currConmmFac) М-7, ${getProdFactors(arr3)}, count1 ${count1}, arr1.length - 1 ${arr1.length - 1}, выход если счетчик равен длинне массива`);
    return getProdFactors(arr3); // ПРОБЛЕМА ТУТ взм: функция возвращает четыре а не 68, потому что не передает туда 17, потому что выходит раньше.
    // скорее всего это лишний вызов. Отсюда нужно вернуть перемноженный массив
  }

  if (cdr(pairFactors) === 'array2 over') {
    console.log(`getCommonFactors, М-6, arr1 ${arr1}, arr2 ${arr2}, arr3 ${arr3}, count1 ${count1}, pairFactors === 'array2 over'`);
    return getCommonFactors(arr1, arr2, arr3, count1 + 1);
  }
  

  // ДОБАВЛЯЕМ в третий массив общий делитель
 
  currConmmFac.push(car(pairFactors));
  console.log(`getCommonFactors М-3, currConmmFac ${currConmmFac} формируем новый массив`); // нужно представить, что будет если функция не встретит
  
  arr2.splice(cdr(pairFactors), 1);
  console.log(`getCommonFactors М-4, arr2 ${arr2} текущее состояние второго массива из него отнимается цифра и встраивается в третий массив`); // ПРОБ как тут так быстро появился второй массив?
  console.log(`getCommonFactors М-5,  arr1 ${arr1}, arr2 ${arr2}, arr3 ${arr3}, count1 ${count1} смотрим состояние значений перед вызовом функции с учвеличением первого счетчика`);
  return getCommonFactors(arr1, arr2, arr3, count1 + 1);
};

// переделка функции ферхней



export const getNod = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('Find the greatest common divisor of given numbers.');

  
  
  const coutnToThree = (count) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const twoRandIn = cons(680, 612); 
    const corrAnsw = getCommonFactors(getPrimeFactors(car(twoRandIn)), getPrimeFactors(cdr(twoRandIn))); // получили простые множетели и выяснили общие  
    console.log(corrAnsw);
    askQuestionNew(twoRandIn);
    const useAnsw = getUseAnswer(); // cc вывезти в консоль правильный ответ, что бы не высчитывать каждый раз
    const checkResult = checkValAndAnswUse(corrAnsw, useAnsw, name);
    sayResult(checkResult); // результат от проверки нужно вернуть, поэтому результат проверки нужно сохранить в отдельный идентификитор
    return checkResult === 'Correct!' ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
