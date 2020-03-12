
import { brainGame, arrQuestionOfuse, getRandInt } from '../index';

const checkNumIsEven = (questionOfuse) => {
  const arrCheckRes = [];

  for (let i = 0; i <= 2; i += 1) {
    if (questionOfuse[i] % 2 === 0) {
      arrCheckRes.push('yes');
    } else {
      arrCheckRes.push('no');
    }
  }
  return arrCheckRes;
};

const questionOfuse = arrQuestionOfuse(getRandInt, 99);

const correctАnswer = checkNumIsEven(questionOfuse);
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => brainGame(rule, questionOfuse, correctАnswer);
