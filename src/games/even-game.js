
import { runBrainGame, totalCounter } from '../index';
import { getRandInt, cons } from '../utils';

const getArrPairQuestAndAnsw = (count, arrPair = []) => {
  if (count === 0) {
    return arrPair;
  }

  const question = getRandInt(99);
  let answer = '';

  if (question % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  arrPair.push(cons(question, answer));
  return getArrPairQuestAndAnsw(count - 1, arrPair);
};

const rule = 'What is the result of the expression?';
export default () => runBrainGame(rule, getArrPairQuestAndAnsw(totalCounter));
