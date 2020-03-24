
import { runBrainGame } from '../index';
import getRandInt from './utils';

const getArrRandInt = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    array.push(getRandInt(9) + getRandInt(9));
  }
  return array;
};

const checkPrimInt = (num, count = 2) => {
  if (count === num) {
    return 'yes';
  }
  return num % count === 0 ? 'no' : checkPrimInt(num, count + 1);
};

const checArrkPrimInt = (arrNum) => {
  const arrayResult = [];
  for (let i = 0; i < 3; i += 1) {
    arrayResult.push(checkPrimInt(arrNum[i]));
  }
  return arrayResult;
};

const arrRandInt = getArrRandInt();
const resCheckPrimtIn = checArrkPrimInt(arrRandInt);

const questionOfuse = arrRandInt;
const correctАnswer = resCheckPrimtIn;
const rule = 'Find the greatest common divisor of given numbers.';

export default () => runBrainGame(rule, questionOfuse, correctАnswer);
