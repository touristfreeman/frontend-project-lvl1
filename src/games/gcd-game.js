import runBrainGame from '../index';

const getPrimInt = (num) => (num % 2 !== 0 || num === 2 ? num : getPrimInt(num + 1));

const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getArrRandNum = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    array.push(getRandInt(999));
  }
  return array;
};


const getSimpleFact = (num, facCount = 2, newArrFactors = []) => {
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


const getArrSimpleFact = (arr, array = []) => {
  for (let i = 0; i < 3; i += 1) {
    array.push(getSimpleFact(arr[i]));
  }
  return array;
};

const getGCD = (arrFact1, arrFact2) => {
  let arr3 = 1;
  for (let i = 0; i <= arrFact1.length - 1; i += 1) {
    for (let j = 0; j <= arrFact1.length - 1; j += 1) {
      if (arrFact1[i] === arrFact2[j]) {
        arr3 *= arrFact2[j];
        arrFact2.splice(j, 1);
        break;
      }
    }
  }
  return arr3;
};

const getArrGCD = (arr1, arr2) => {
  const array = [];

  for (let i = 0; i < 3; i += 1) {
    array.push(getGCD(arr1[i], arr2[i]));
  }
  return array;
};

const getArrQuest = (arr1, arr2, array = []) => {
  for (let i = 0; i <= arr1.length - 1; i += 1) {
    array.push(`${arr1[i]} ${arr2[i]}`);
  }
  return array;
};

const arrRandNum1 = getArrRandNum(getRandInt(999));
const arrRandNum2 = getArrRandNum(getRandInt(999));
const arrSimpleFact1 = getArrSimpleFact(arrRandNum1);
const arrSimpleFact2 = getArrSimpleFact(arrRandNum2);
const arrGCD = getArrGCD(arrSimpleFact1, arrSimpleFact2);
const arrQuest = getArrQuest(arrRandNum1, arrRandNum2);

const questionOfuse = arrQuest;
const correctАnswer = arrGCD;
const rule = 'Find the greatest common divisor of given numbers.';

export default () => runBrainGame(rule, questionOfuse, correctАnswer);
