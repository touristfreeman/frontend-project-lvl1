
import {
  brainGame, repeatThreeTimes,
} from '../index';

const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getArrQuestionOfuse = (count = 0, array = []) => {
  if (count === repeatThreeTimes) {
    return array;
  }
  array.push(getRandInt(99));
  return getArrQuestionOfuse(count + 1, array);
};

const checkNumIsEven = (questionOfuse) => {
  const arrCheckRes = [];

  for (let i = 0; i <= 2; i += 1) {
    if (questionOfuse[i] % 2 === 0) {
      arrCheckRes.push('yes');
    } else {
      arrCheckRes.push('no');
    }
  }
  console.log(`threeTimes ${repeatThreeTimes}`);
  return arrCheckRes;
};

const questionOfuse = getArrQuestionOfuse();
const correctАnswer = checkNumIsEven(questionOfuse);
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => brainGame(rule, questionOfuse, correctАnswer);
