import { cons, car, cdr } from './index';

export const getPrimInt = (num) => (num % 2 !== 0 || num === 2 ? num : getPrimInt(num + 1));

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
